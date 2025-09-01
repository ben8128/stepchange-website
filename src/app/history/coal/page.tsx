import ScrollableTimeline from "./components/scrollable-timeline"
import NarrativeContent from "./components/narrative-content"
import InteractiveTimeline from "./components/interactive-timeline"
import PodcastPlayer from "./components/podcast-player"
import SourcesSection from "./components/sources-section"
import { ExternalLink, Headphones } from "lucide-react"
import "./globals.css"

export default function CoalPage() {
  return (
    <main className="min-h-screen bg-orange-50 text-amber-900">
      {/* Three-column layout container */}
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12 max-w-3xl mx-auto lg:max-w-none lg:px-64">
          <div>
            <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
              The Black Rock That Built Our World: A Complete History of Coal
            </h1>
            <p className="mt-3 text-lg text-amber-700">
              The first work by the{" "}
              <a
                href="https://www.stepchange.show"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-900 underline decoration-amber-400/30 hover:decoration-amber-400 transition-colors"
              >
                Stepchange Show
              </a>
              , telling stories of human progress.
            </p>
          </div>
        </header>

        {/* Audio Direct Links */}
        <div className="mb-10 max-w-3xl mx-auto lg:max-w-none lg:px-64">
          <div className="bg-orange-100 border border-amber-400 rounded-lg p-4">
            <div className="flex items-center">
              <Headphones className="h-4 w-4 text-amber-700 mr-2" />
              <span className="text-sm text-amber-800">Listen to the full episodes</span>
            </div>
            <div className="mt-3 flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.stepchange.show/p/coal-part-i"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 border border-amber-400 text-amber-900 rounded-md hover:bg-amber-100 transition-colors"
              >
                <Headphones className="h-3 w-3" />
                Listen to Part I
                <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="https://www.stepchange.show/p/coal-part-ii"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 border border-amber-400 text-amber-900 rounded-md hover:bg-amber-100 transition-colors"
              >
                <Headphones className="h-3 w-3" />
                Listen to Part II
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <div className="mt-4 text-sm text-amber-700">
              Listen to this on{" "}
              <a
                href="https://podcasts.apple.com/us/podcast/stepchange/id1791682745"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-900 underline decoration-amber-400/30 hover:decoration-amber-400 transition-colors"
              >
                Apple Podcasts
              </a>
              ,{" "}
              <a
                href="https://open.spotify.com/show/3RHJ129caYkxh2FliqtaBP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-900 underline decoration-amber-400/30 hover:decoration-amber-400 transition-colors"
              >
                Spotify
              </a>
              ,{" "}
              <a
                href="https://www.youtube.com/@StepchangeShow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-900 underline decoration-amber-400/30 hover:decoration-amber-400 transition-colors"
              >
                YouTube
              </a>
              , or wherever you listen to podcasts.
            </div>
          </div>
        </div>

        {/* Three-column layout for larger screens */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Left column - Timeline (visible only on large screens) */}
          <div className="hidden lg:block lg:col-span-3 relative">
            <div className="sticky top-8">
              <ScrollableTimeline className="desktop-only" />
            </div>
          </div>

          {/* Middle column - Main content */}
          <div className="lg:col-span-6">
            <div className="max-w-3xl mx-auto lg:max-w-none">
              <NarrativeContent />
            </div>
          </div>

          {/* Right column - Interactive timeline */}
          <div className="hidden lg:block lg:col-span-3 relative">
            <div className="sticky top-8">
              <InteractiveTimeline className="desktop-only" />
            </div>
          </div>
        </div>

        {/* Sources Section */}
        <div className="mt-20 max-w-3xl mx-auto lg:max-w-4xl lg:px-0">
          <SourcesSection />
        </div>
      </div>

      {/* Mobile timeline - only visible on small screens */}
      <div className="lg:hidden">
        <ScrollableTimeline className="mobile-only" />
      </div>

      {/* Podcast Player */}
      <PodcastPlayer />
    </main>
  )
}