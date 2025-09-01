"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { cn } from "../lib/utils"
import { Headphones, ChevronDown, ChevronUp } from "lucide-react"

type TimelineEvent = {
  id: string
  date: string
  title: string
  active: boolean
  timestamp?: number // Timestamp in seconds for audio sync
  part: 1 | 2 // Which part/episode this belongs to
  sectionId: string // ID of the section to scroll to
}

interface ScrollableTimelineProps {
  className?: string
}

export default function ScrollableTimeline({ className }: ScrollableTimelineProps) {
  const [events, setEvents] = useState<TimelineEvent[]>([
    // Part 1 events
    {
      id: "ep1-1",
      date: "400-300 Million Years Ago",
      title: "The Accidental Creation of Earth's Battery",
      active: true,
      timestamp: 370, // 00:06:10
      part: 1,
      sectionId: "section-creation",
    },
    {
      id: "ep1-2",
      date: "25,000 BC - 1500 AD",
      title: "Early Encounters: The Long Substitution",
      active: false,
      timestamp: 826, // 00:13:46
      part: 1,
      sectionId: "section-early-encounters",
    },
    {
      id: "ep1-3",
      date: "1500s-1700s",
      title: "The Great Transformation: Britain's Coal Revolution",
      active: false,
      timestamp: 1190, // 00:19:50
      part: 1,
      sectionId: "section-transformation",
    },
    {
      id: "ep1-4",
      date: "1709",
      title: "The Coke Revolution: Iron Without Wood",
      active: false,
      timestamp: 2211, // 00:36:51
      part: 1,
      sectionId: "section-coke",
    },
    {
      id: "ep1-5",
      date: "1712",
      title: "Steam Power: The Problem That Solved Itself",
      active: false,
      timestamp: 3015, // 00:50:15
      part: 1,
      sectionId: "section-steam",
    },
    {
      id: "ep1-6",
      date: "1769",
      title: "Watt's Revolution: Efficiency and Beyond",
      active: false,
      timestamp: 3359, // 00:55:59
      part: 1,
      sectionId: "section-watt",
    },
    {
      id: "ep1-7",
      date: "1835",
      title: "Manchester: The Shock City",
      active: false,
      timestamp: 5065, // 01:24:25
      part: 1,
      sectionId: "section-manchester",
    },
    {
      id: "ep1-8",
      date: "1830",
      title: "Railways: Coal Moving Coal",
      active: false,
      timestamp: 5344, // 01:29:04
      part: 1,
      sectionId: "section-railways",
    },

    // Part 2 events
    {
      id: "ep2-1",
      date: "1901",
      title: "The American Titans",
      active: false,
      timestamp: 272, // 00:04:32
      part: 2,
      sectionId: "section-american-titans",
    },
    {
      id: "ep2-2",
      date: "1882",
      title: "Electricity: Coal's Invisible Revolution",
      active: false,
      timestamp: 1575, // 00:26:15
      part: 2,
      sectionId: "section-electricity",
    },
    {
      id: "ep2-3",
      date: "1914",
      title: "Total War: Coal as Strategic Weapon",
      active: false,
      timestamp: 3420, // 00:57:00
      part: 2,
      sectionId: "section-total-war",
    },
    {
      id: "ep2-4",
      date: "1945-2015",
      title: "The Great Disruption: American Coal's Rise and Fall",
      active: false,
      timestamp: 6457, // 01:47:37
      part: 2,
      sectionId: "section-disruption",
    },
    {
      id: "ep2-5",
      date: "2005-2012",
      title: "The Resistance and the Reckoning",
      active: false,
      timestamp: 8577, // 02:22:57
      part: 2,
      sectionId: "section-resistance",
    },
    {
      id: "ep2-6",
      date: "1950s-Present",
      title: "The Asian Century: China and India",
      active: false,
      timestamp: 6781, // 01:53:01
      part: 2,
      sectionId: "section-asian-century",
    },
    {
      id: "ep2-7",
      date: "1947-Present",
      title: "India: The Second Giant",
      active: false,
      timestamp: 10470, // 02:54:30
      part: 2,
      sectionId: "section-india",
    },
    {
      id: "ep2-8",
      date: "Present-Future",
      title: "The Reckoning & Coal's Eternal Lesson",
      active: false,
      timestamp: 11000, // Approximate
      part: 2,
      sectionId: "section-conclusion",
    },
  ])

  const [windowWidth, setWindowWidth] = useState(0)
  const [showLabels, setShowLabels] = useState(true)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const timelineRef = useRef<HTMLDivElement>(null)

  // Find the active event index
  const activeEventIndex = events.findIndex((event) => event.active)

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Set initial width
    setWindowWidth(window.innerWidth)

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Determine if we should show the timeline based on screen width and class
  const isMobileOnly = className?.includes("mobile-only")
  const isDesktopOnly = className?.includes("desktop-only")
  const showTimeline = isDesktopOnly || (windowWidth > 640 && !isDesktopOnly)

  // Handle scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Handle audio navigation
  const navigateAudio = (event: TimelineEvent, e: React.MouseEvent) => {
    e.stopPropagation()
    const customEvent = new CustomEvent("timelineNavigation", {
      detail: {
        timestamp: event.timestamp,
        part: event.part,
      },
    })
    document.dispatchEvent(customEvent)
  }

  const handleEventClick = (id: string) => {
    // Find the event
    const event = events.find((e) => e.id === id)
    if (!event) return

    // Update active state
    setEvents(
      events.map((e) => ({
        ...e,
        active: e.id === id,
      }))
    )

    // Scroll to the section
    scrollToSection(event.sectionId)

    // Close dropdown on mobile
    if (windowWidth <= 640) {
      setIsDropdownOpen(false)
    }
  }

  // Scroll to active event when it changes
  useEffect(() => {
    if (activeEventIndex >= 0 && timelineRef.current) {
      const activeElement = timelineRef.current.children[activeEventIndex] as HTMLElement
      if (activeElement) {
        const containerHeight = timelineRef.current.clientHeight
        const elementTop = activeElement.offsetTop
        const elementHeight = activeElement.clientHeight

        // Calculate the scroll position to center the active element
        const scrollPosition = elementTop - containerHeight / 2 + elementHeight / 2

        timelineRef.current.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        })
      }
    }
  }, [activeEventIndex])

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id^="section-"]')
      let currentSection = null
      let minDistance = Number.POSITIVE_INFINITY

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const distance = Math.abs(rect.top)

        if (distance < minDistance) {
          minDistance = distance
          currentSection = section.id
        }
      })

      if (currentSection) {
        const newEvents = events.map((event) => ({
          ...event,
          active: event.sectionId === currentSection,
        }))

        // Only update state if there's a change
        if (JSON.stringify(newEvents) !== JSON.stringify(events)) {
          setEvents(newEvents)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [events])

  if (isMobileOnly && windowWidth > 640) return null
  if (isDesktopOnly && windowWidth <= 640) return null

  if (!showTimeline && !isDropdownOpen) {
    // Mobile collapsed view
    return (
      <div className="fixed top-0 left-0 right-0 z-40 bg-orange-50 border-b border-amber-400/40 shadow-sm">
        <button
          onClick={() => setIsDropdownOpen(true)}
          className="w-full flex items-center justify-between px-4 py-3 text-amber-900"
        >
          <span className="font-medium">Coal Timeline</span>
          <ChevronDown className="h-4 w-4 text-amber-700" />
        </button>
      </div>
    )
  }

  if (!showTimeline && isDropdownOpen) {
    // Mobile expanded view
    return (
      <div className="fixed inset-0 z-40 bg-orange-50 overflow-auto">
        <div className="sticky top-0 flex items-center justify-between px-4 py-3 bg-orange-50 border-b border-amber-400/40 shadow-sm">
          <span className="font-medium text-amber-900">Coal Timeline</span>
          <button onClick={() => setIsDropdownOpen(false)} className="text-amber-700">
            <ChevronUp className="h-4 w-4" />
          </button>
        </div>

        <div className="p-4">
          <div className="relative">
            {/* The vertical line */}
            <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-amber-400/40" />

            {/* The progress line (filled up to active event) */}
            <div
              className="absolute left-2 top-0 w-[2px] bg-amber-400"
              style={{
                height: `${activeEventIndex >= 0 ? ((activeEventIndex + 1) / events.length) * 100 : 0}%`,
              }}
            />

            {/* Timeline events */}
            <div className="relative">
              {events.map((event, index) => {
                // Calculate if this event is before or at the active event
                const isCompleted = activeEventIndex >= 0 && index <= activeEventIndex
                const isActive = event.active

                // Determine if this event should have a filled or hollow circle
                const isFilled = isCompleted || isActive

                // Check if this is the first event of Part 2
                const isFirstPartTwo = event.part === 2 && events[index - 1]?.part === 1

                return (
                  <div key={event.id}>
                    {isFirstPartTwo && (
                      <div className="py-3 pl-8 font-medium text-amber-900 border-t border-b border-amber-400/20 my-4 bg-orange-100/50">
                        Part II: The Global Century
                      </div>
                    )}

                    {index === 0 && (
                      <div className="py-3 pl-8 font-medium text-amber-900 border-t border-b border-amber-400/20 my-4 bg-orange-100/50">
                        Part I: From Ancient Swamps to Industrial Might
                      </div>
                    )}

                    <div
                      className={cn(
                        "relative py-3 pl-8 flex items-center cursor-pointer hover:bg-orange-100/30 transition-colors",
                        isActive ? "bg-orange-100/50" : ""
                      )}
                      onClick={() => handleEventClick(event.id)}
                    >
                      {/* The dot */}
                      <div
                        className={cn(
                          "absolute left-2 w-[12px] h-[12px] rounded-full border-2 transform -translate-x-[5px]",
                          isFilled ? "bg-amber-400 border-amber-400" : "bg-orange-50 border-amber-400/40"
                        )}
                      />

                      <div className="flex items-center">
                        {/* Audio button - now inline with date */}
                        <button
                          className="mr-2 text-amber-700 hover:text-amber-900 transition-colors"
                          onClick={(e) => navigateAudio(event, e)}
                          title={`Play from ${formatTimestamp(event.timestamp || 0)}`}
                        >
                          <Headphones className="h-3 w-3" />
                        </button>

                        {/* Date */}
                        <span
                          className={cn("text-sm mr-2", isActive ? "text-amber-900 font-semibold" : "text-amber-700")}
                        >
                          {event.date}
                        </span>

                        {/* Title */}
                        <span className="text-sm text-amber-900">{event.title}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Desktop view
  return (
    <div
      className={cn("h-[80vh] z-30", isDesktopOnly ? "relative" : "fixed left-6 top-1/2 -translate-y-1/2", className)}
      onMouseEnter={() => setShowLabels(true)}
      onMouseLeave={() => setShowLabels(windowWidth > 1024)} // Only hide on smaller screens
    >
      <div className="relative h-full flex items-center">
        {/* The vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-amber-400/40" />

        {/* The progress line (filled up to active event) */}
        <div
          className="absolute left-0 top-0 w-[2px] bg-amber-400"
          style={{
            height: `${activeEventIndex >= 0 ? ((activeEventIndex + 1) / events.length) * 100 : 0}%`,
          }}
        />

        {/* Timeline events - now in a scrollable container */}
        <div
          ref={timelineRef}
          className="relative max-h-[80vh] overflow-y-auto pr-4 hide-scrollbar"
          style={{ scrollbarWidth: "none" }} // Firefox
        >
          {events.map((event, index) => {
            // Calculate if this event is before or at the active event
            const isCompleted = activeEventIndex >= 0 && index <= activeEventIndex
            const isActive = event.active

            // Determine if this event should have a filled or hollow circle
            const isFilled = isCompleted || isActive

            // Check if this is the first event of Part 2
            const isFirstPartTwo = event.part === 2 && events[index - 1]?.part === 1

            return (
              <div key={event.id}>
                {isFirstPartTwo && (
                  <div className="mb-4 ml-4 font-medium text-amber-900 text-sm border-l-2 border-amber-400 pl-2 py-1">
                    Part II: The Global Century
                  </div>
                )}

                {index === 0 && (
                  <div className="mb-4 ml-4 font-medium text-amber-900 text-sm border-l-2 border-amber-400 pl-2 py-1">
                    Part I: From Ancient Swamps to Industrial Might
                  </div>
                )}

                <div
                  className={cn("relative mb-8 flex items-start cursor-pointer group")}
                  onClick={() => handleEventClick(event.id)}
                >
                  {/* The dot - with buffer from left */}
                  <div
                    className={cn(
                      "w-[16px] h-[16px] rounded-full border-2 z-10 transform -translate-x-[7px] mt-1",
                      isFilled ? "bg-amber-400 border-amber-400" : "bg-orange-50 border-amber-400/40"
                    )}
                  />

                  {/* The label with title - always visible on larger screens */}
                  <div className={cn("ml-4 transition-all duration-200", showLabels ? "opacity-100" : "opacity-0")}>
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        {/* Audio button - now inline with date */}
                        <button
                          className="mr-2 text-amber-700 hover:text-amber-900 transition-colors"
                          onClick={(e) => navigateAudio(event, e)}
                          title={`Play from ${formatTimestamp(event.timestamp || 0)}`}
                        >
                          <Headphones className="h-3 w-3" />
                        </button>

                        <span
                          className={cn(
                            "font-medium text-sm",
                            isActive ? "text-amber-900 font-semibold" : "text-amber-900"
                          )}
                        >
                          {event.date}
                        </span>
                      </div>

                      {/* Subtitle */}
                      <span className="text-xs text-amber-700 mt-0.5 max-w-[180px] line-clamp-1">{event.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* CSS to hide scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

// Format timestamp to HH:MM:SS
function formatTimestamp(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = Math.floor(seconds % 60)

  return `${hours}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
}