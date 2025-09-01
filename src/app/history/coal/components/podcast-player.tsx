"use client"
import React, { useState, useRef, useEffect, useCallback } from "react"
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  ChevronUp,
  ChevronDown,
  AlertCircle,
  ExternalLink,
} from "lucide-react"
import { cn } from "../lib/utils"

// Custom Slider component to replace shadcn/ui slider
const Slider = ({ 
  value, 
  max, 
  step, 
  onValueChange, 
  disabled, 
  className 
}: {
  value: number[]
  max: number
  step: number
  onValueChange: (value: number[]) => void
  disabled?: boolean
  className?: string
}) => {
  return (
    <input
      type="range"
      min={0}
      max={max}
      step={step}
      value={value[0]}
      onChange={(e) => onValueChange([parseFloat(e.target.value)])}
      disabled={disabled}
      className={cn(
        "w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer slider",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      style={{
        background: `linear-gradient(to right, #fb923c 0%, #fb923c ${(value[0] / max) * 100}%, #fed7aa ${(value[0] / max) * 100}%, #fed7aa 100%)`
      }}
    />
  )
}

// Custom Alert components
const Alert = ({ className, children, ...props }: { className?: string; children: React.ReactNode }) => (
  <div className={cn("border border-amber-200 bg-orange-100 p-4 rounded-md", className)} {...props}>
    {children}
  </div>
)

const AlertDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={cn("text-sm", className)}>
    {children}
  </div>
)

// Custom Button component (unused for now)
// const Button = ({ 
//   variant = "default", 
//   size = "default", 
//   className, 
//   children, 
//   asChild, 
//   ...props 
// }: {
//   variant?: "default" | "outline"
//   size?: "default" | "sm"
//   className?: string
//   children: React.ReactNode
//   asChild?: boolean
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   [key: string]: any
// }) => {
//   const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 disabled:pointer-events-none disabled:opacity-50"
//   const variants = {
//     default: "bg-amber-500 text-white hover:bg-amber-600",
//     outline: "border border-amber-400 bg-transparent hover:bg-amber-50 text-amber-900"
//   }
//   const sizes = {
//     default: "h-10 px-4 py-2",
//     sm: "h-8 rounded-md px-3 text-xs"
//   }
//   
//   if (asChild && React.isValidElement(children)) {
//     return React.cloneElement(children, {
//       className: cn(baseClasses, variants[variant], sizes[size], className),
//       ...props
//     })
//   }
//   
//   return (
//     <button className={cn(baseClasses, variants[variant], sizes[size], className)} {...props}>
//       {children}
//     </button>
//   )
// }

export default function PodcastPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.8)
  const [isMuted, setIsMuted] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [currentPart, setCurrentPart] = useState<1 | 2>(1)
  const [episodeTitle, setEpisodeTitle] = useState("Coal, Part I: From Swamp Relic to the Engine of Industry")
  const [audioError, setAudioError] = useState<React.ReactNode | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [audioLoaded, setAudioLoaded] = useState(false)

  // Audio file paths - using Google Cloud Storage URLs
  const audioPath1 = "https://storage.googleapis.com/stepchange/Ep%201%20-%20Coal%20Part%201.m4a"
  const audioPath2 = "https://storage.googleapis.com/stepchange/Ep%202%20-%20Coal%20Part%20II.m4a"

  // Official episode URLs
  const episodeUrl1 = "https://www.stepchange.show/p/coal-part-i"
  const episodeUrl2 = "https://www.stepchange.show/p/coal-part-ii"

  const audioRef1 = useRef<HTMLAudioElement>(null)
  const audioRef2 = useRef<HTMLAudioElement>(null)

  // Get the current audio reference
  const getCurrentAudio = useCallback(() => {
    return currentPart === 1 ? audioRef1.current : audioRef2.current
  }, [currentPart])

  // Get current episode URL
  const getCurrentEpisodeUrl = () => {
    return currentPart === 1 ? episodeUrl1 : episodeUrl2
  }

  // Format time in MM:SS
  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = Math.floor(time % 60)
    return `${hours > 0 ? `${hours}:` : ""}${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  // Handle play/pause with direct audio element creation
  const togglePlay = () => {
    setIsLoading(true)

    if (isPlaying) {
      const audio = getCurrentAudio()
      if (audio) {
        audio.pause()
      }
      setIsPlaying(false)
      setIsLoading(false)
      return
    }

    // Create a new audio element programmatically
    try {
      const audioUrl = currentPart === 1 ? audioPath1 : audioPath2
      const audio = new Audio(audioUrl)

      // Set up event listeners
      audio.addEventListener("canplay", () => {
        setIsLoading(false)
        setAudioLoaded(true)
        setAudioError(null)
        audio
          .play()
          .then(() => {
            setIsPlaying(true)
          })
          .catch((error) => {
            console.error("Play error:", error)
            setAudioError(
              <div className="flex flex-col gap-2">
                <div>Unable to play audio. This may be due to autoplay restrictions or network issues.</div>
                <a
                  href={getCurrentEpisodeUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 border border-amber-400 text-amber-900 w-fit px-3 py-1 rounded text-sm hover:bg-amber-50 transition-colors"
                >
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Listen on Stepchange
                </a>
              </div>
            )
            setIsPlaying(false)
          })
      })

      audio.addEventListener("error", (e) => {
        console.error("Audio element error:", e)
        setAudioError(
          <div className="flex flex-col gap-2">
            <div>Error loading audio. Please try listening on the official site.</div>
            <a
              href={getCurrentEpisodeUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 border border-amber-400 text-amber-900 w-fit px-3 py-1 rounded text-sm hover:bg-amber-50 transition-colors"
            >
              <ExternalLink className="h-3 w-3 mr-1" />
              Listen on Stepchange
            </a>
          </div>
        )
        setIsPlaying(false)
        setIsLoading(false)
      })

      audio.addEventListener("timeupdate", () => {
        setCurrentTime(audio.currentTime)
      })

      audio.addEventListener("durationchange", () => {
        setDuration(audio.duration)
      })

      audio.addEventListener("ended", () => {
        if (currentPart === 1) {
          switchToPart(2)
        } else {
          setIsPlaying(false)
        }
      })

      // Set volume
      audio.volume = isMuted ? 0 : volume

      // Store the audio element in the ref
      if (currentPart === 1) {
        if (audioRef1.current) {
          audioRef1.current.pause()
        }
        audioRef1.current = audio
      } else {
        if (audioRef2.current) {
          audioRef2.current.pause()
        }
        audioRef2.current = audio
      }

      // Start loading the audio
      audio.load()
    } catch (error) {
      console.error("Error creating audio element:", error)
      setAudioError(
        <div className="flex flex-col gap-2">
          <div>Error initializing audio player. Please try listening on the official site.</div>
          <a
            href={getCurrentEpisodeUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 border border-amber-400 text-amber-900 w-fit px-3 py-1 rounded text-sm hover:bg-amber-50 transition-colors"
          >
            <ExternalLink className="h-3 w-3 mr-1" />
            Listen on Stepchange
          </a>
        </div>
      )
      setIsPlaying(false)
      setIsLoading(false)
    }
  }

  // Handle seeking
  const handleSeek = (value: number[]) => {
    const audio = getCurrentAudio()
    if (audio) {
      audio.currentTime = value[0]
      setCurrentTime(value[0])
    }
  }

  // Handle volume change
  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0]

    // Set volume for both audio elements
    if (audioRef1.current) {
      audioRef1.current.volume = newVolume
    }
    if (audioRef2.current) {
      audioRef2.current.volume = newVolume
    }

    setVolume(newVolume)
    if (newVolume === 0) {
      setIsMuted(true)
    } else {
      setIsMuted(false)
    }
  }

  // Handle mute toggle
  const toggleMute = () => {
    const newMutedState = !isMuted

    // Apply to both audio elements
    if (audioRef1.current) {
      audioRef1.current.volume = newMutedState ? 0 : volume
    }
    if (audioRef2.current) {
      audioRef2.current.volume = newMutedState ? 0 : volume
    }

    setIsMuted(newMutedState)
  }

  // Skip forward/backward
  const skip = (seconds: number) => {
    const audio = getCurrentAudio()
    if (audio) {
      audio.currentTime = Math.min(Math.max(audio.currentTime + seconds, 0), audio.duration || 100)
    }
  }

  // Switch to a specific part
  const switchToPart = useCallback((part: 1 | 2) => {
    // Pause current audio
    const currentAudio = getCurrentAudio()
    if (currentAudio && isPlaying) {
      currentAudio.pause()
    }

    // Switch part
    setCurrentPart(part)
    setEpisodeTitle(
      part === 1
        ? "Coal, Part I: From Swamp Relic to the Engine of Industry"
        : "Coal, Part II: Global Dominance and Modern Challenges"
    )

    // Reset time
    setCurrentTime(0)
    setAudioError(null)
    setIsPlaying(false)
    setAudioLoaded(false)
  }, [getCurrentAudio, isPlaying])

  // Listen for timeline navigation events
  useEffect(() => {
    const handleTimelineNavigation = (e: Event) => {
      const customEvent = e as CustomEvent
      if (customEvent.detail) {
        const { timestamp, part } = customEvent.detail

        // Switch to the correct part if needed
        if (part && part !== currentPart) {
          switchToPart(part as 1 | 2)
        }

        // Set the timestamp
        const audio = getCurrentAudio()
        if (audio && timestamp !== undefined) {
          audio.currentTime = timestamp
          setCurrentTime(timestamp)
        }
      }
    }

    document.addEventListener("timelineNavigation", handleTimelineNavigation)
    return () => {
      document.removeEventListener("timelineNavigation", handleTimelineNavigation)
    }
  }, [currentPart, getCurrentAudio, switchToPart])

  // Clean up audio elements on unmount
  useEffect(() => {
    return () => {
      if (audioRef1.current) {
        audioRef1.current.pause()
      }
      if (audioRef2.current) {
        audioRef2.current.pause()
      }
    }
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 bg-orange-50 shadow-lg border-t border-amber-400/40 transition-all duration-300 z-50",
        isExpanded ? "h-32" : audioError ? "h-auto" : "h-16"
      )}
    >
      {audioError && (
        <Alert className="border-amber-200 bg-orange-100 mb-1 mx-4">
          <AlertCircle className="h-4 w-4 text-amber-800" />
          <AlertDescription className="text-xs text-amber-800">{audioError}</AlertDescription>
        </Alert>
      )}

      <div className="container mx-auto px-4 h-full flex flex-col">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <button
              onClick={togglePlay}
              disabled={isLoading}
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition",
                isLoading
                  ? "bg-orange-100 text-amber-600 cursor-wait"
                  : "bg-orange-100 text-amber-900 hover:bg-amber-400/20 transition-colors"
              )}
            >
              {isLoading ? (
                <div className="h-5 w-5 rounded-full border-2 border-amber-600 border-t-transparent animate-spin" />
              ) : isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5 ml-0.5" />
              )}
            </button>

            <div className="flex flex-col">
              <span className="font-medium text-amber-900 truncate max-w-[200px] sm:max-w-xs">{episodeTitle}</span>
              <span className="text-sm text-amber-700">Part {currentPart}</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => skip(-15)}
              disabled={isLoading || !audioLoaded}
              className={cn(
                "transition",
                isLoading || !audioLoaded
                  ? "text-amber-600 cursor-not-allowed"
                  : "text-amber-700 hover:text-amber-900 transition-colors"
              )}
            >
              <SkipBack className="h-5 w-5" />
            </button>

            <div className="hidden md:flex items-center space-x-2 w-64">
              <span className="text-xs text-amber-700 w-10 text-right">{formatTime(currentTime)}</span>
              <div className="w-full">
                <Slider
                  value={[currentTime]}
                  max={duration || 100}
                  step={1}
                  onValueChange={handleSeek}
                  disabled={isLoading || !audioLoaded}
                  className={cn("w-full", (isLoading || !audioLoaded) && "opacity-50 cursor-not-allowed")}
                />
              </div>
              <span className="text-xs text-amber-700 w-10">{formatTime(duration || 0)}</span>
            </div>

            <button
              onClick={() => skip(15)}
              disabled={isLoading || !audioLoaded}
              className={cn(
                "transition",
                isLoading || !audioLoaded
                  ? "text-amber-600 cursor-not-allowed"
                  : "text-amber-700 hover:text-amber-900 transition-colors"
              )}
            >
              <SkipForward className="h-5 w-5" />
            </button>

            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={toggleMute}
                disabled={isLoading || !audioLoaded}
                className={cn(
                  "transition",
                  isLoading || !audioLoaded
                    ? "text-amber-600 cursor-not-allowed"
                    : "text-amber-700 hover:text-amber-900 transition-colors"
                )}
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>
              <div className="w-20">
                <Slider
                  value={[isMuted ? 0 : volume]}
                  max={1}
                  step={0.01}
                  onValueChange={handleVolumeChange}
                  disabled={isLoading || !audioLoaded}
                  className={cn((isLoading || !audioLoaded) && "opacity-50 cursor-not-allowed")}
                />
              </div>
            </div>

            <div className="flex space-x-2 items-center">
              <button
                onClick={() => switchToPart(1)}
                disabled={isLoading}
                className={cn(
                  "text-xs px-2 py-1 rounded transition",
                  isLoading
                    ? "bg-orange-100 text-amber-600 cursor-not-allowed"
                    : currentPart === 1
                      ? "bg-orange-100 text-amber-900"
                      : "bg-orange-50 text-amber-700 border border-amber-400/20 hover:bg-orange-100"
                )}
              >
                I
              </button>
              <button
                onClick={() => switchToPart(2)}
                disabled={isLoading}
                className={cn(
                  "text-xs px-2 py-1 rounded transition",
                  isLoading
                    ? "bg-orange-100 text-amber-600 cursor-not-allowed"
                    : currentPart === 2
                      ? "bg-orange-100 text-amber-900"
                      : "bg-orange-50 text-amber-700 border border-amber-400/20 hover:bg-orange-100"
                )}
              >
                II
              </button>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-amber-700 hover:text-amber-900 transition-colors"
            >
              {isExpanded ? <ChevronDown className="h-5 w-5" /> : <ChevronUp className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Expanded view with waveform visualization */}
        {isExpanded && (
          <div className="flex-1 flex items-center">
            <div className="w-full">
              <div className="h-8 w-full bg-orange-100 rounded-md overflow-hidden">
                <div className="h-full w-full flex items-center">
                  {Array.from({ length: 100 }).map((_, i) => {
                    const height = Math.random() * 100
                    const isActive = (i / 100) * (duration || 100) <= currentTime

                    return (
                      <div
                        key={i}
                        className="h-full w-full flex items-center justify-center"
                        style={{ maxWidth: "1%" }}
                      >
                        <div
                          className={cn("w-1 rounded-sm", isActive ? "bg-amber-400" : "bg-amber-400/30")}
                          style={{ height: `${height}%` }}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="mt-2 flex justify-between text-xs text-amber-700">
                <span>00:00</span>
                <span>05:00</span>
                <span>10:00</span>
                <span>15:00</span>
                <span>20:00</span>
                <span>25:00</span>
                <span>30:00</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}