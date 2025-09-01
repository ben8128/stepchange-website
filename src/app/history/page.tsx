import Link from "next/link";

export default function History() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
          The Stepchange Show
        </h1>
        <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8 leading-relaxed">
          Stories of human progress through the technologies that fundamentally reshape society. 
          From the steam engine to semiconductors, history is marked by technological leaps that 
          rippled through society—creating clear &quot;befores and afters&quot; in human history.
        </p>
        
        {/* YouTube Embed */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-slate-200">
            <iframe
              src="https://www.youtube.com/embed/t9VNlWXlAUk"
              title="Introducing the Stepchange Show"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* Podcast Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="https://open.spotify.com/show/your-show-id"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1DB954] text-white px-6 py-3 rounded-full hover:bg-[#1ed760] transition-colors font-semibold"
          >
            <span>🎵</span>
            Spotify
          </a>
          <a
            href="https://podcasts.apple.com/podcast/your-podcast-id"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#A855F7] text-white px-6 py-3 rounded-full hover:bg-[#9333EA] transition-colors font-semibold"
          >
            <span>🎧</span>
            Apple Podcasts
          </a>
          <a
            href="https://www.youtube.com/channel/your-channel-id"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#FF0000] text-white px-6 py-3 rounded-full hover:bg-[#E50000] transition-colors font-semibold"
          >
            <span>📺</span>
            YouTube
          </a>
          <a
            href="https://stepchange.show/feed"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#FF6B35] text-white px-6 py-3 rounded-full hover:bg-[#E55A2B] transition-colors font-semibold"
          >
            <span>📡</span>
            RSS Feed
          </a>
        </div>

        <div className="text-slate-600 max-w-2xl mx-auto">
          <p className="mb-4">
            <strong>Hosted by:</strong> Ben Eidelson and Anay Shah — operators-turned-investors 
            who also back emerging technologies at Stepchange.
          </p>
          <p className="text-sm">
            New episodes every couple of months • Deep research and expert interviews • 
            Email us topic suggestions at{" "}
            <a href="mailto:hi@stepchange.show" className="text-sky-600 hover:text-sky-500 underline">
              hi@stepchange.show
            </a>
          </p>
        </div>
      </div>

      {/* Episodes Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Episodes</h2>
        
        <div className="grid gap-8 max-w-4xl mx-auto">
          {/* Coal Episode */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-100 hover:border-amber-200 transition-colors group">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                ⛏️
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                    Coal: The Black Rock That Built Our World
                  </h3>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    Available Now
                  </span>
                </div>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  From ancient swamps to industrial might, explore how coal transformed human civilization. 
                  Discover the geological forces that created this &quot;black rock,&quot; the technological breakthroughs 
                  that unlocked its power, and the profound societal changes that followed—from the steam 
                  engine to electrification, from rural villages to industrial cities.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/history/coal"
                    className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold inline-flex items-center gap-2"
                  >
                    <span>📖</span>
                    Read the Story
                  </Link>
                  <a
                    href="https://www.stepchange.show/p/coal-part-i"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-amber-700 border-2 border-amber-200 px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors font-semibold inline-flex items-center gap-2"
                  >
                    <span>🎧</span>
                    Listen: Part I
                  </a>
                  <a
                    href="https://www.stepchange.show/p/coal-part-ii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-amber-700 border-2 border-amber-200 px-6 py-3 rounded-lg hover:bg-amber-50 transition-colors font-semibold inline-flex items-center gap-2"
                  >
                    <span>🎧</span>
                    Listen: Part II
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Data Centers Episode */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-100 hover:border-blue-200 transition-colors group">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                🏢
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    Data Centers: The Digital Infrastructure Revolution
                  </h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Coming Soon
                  </span>
                </div>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Explore the invisible infrastructure powering our digital world. From the first computer 
                  rooms to hyperscale cloud facilities, discover how data centers became the backbone of 
                  modern civilization—and what their enormous energy appetite means for our climate future.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/history/data-centers"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center gap-2"
                  >
                    <span>📖</span>
                    Preview the Story
                  </Link>
                  <button
                    disabled
                    className="bg-gray-100 text-gray-500 border-2 border-gray-200 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 cursor-not-allowed"
                  >
                    <span>🎧</span>
                    Audio Coming Soon
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-sky-50 to-indigo-50 rounded-2xl p-12 border-2 border-sky-100">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Suggest a Topic
        </h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
          What technological transformation should we explore next? From artificial intelligence 
          to renewable energy, we want to tell the stories that matter.
        </p>
        <a
          href="mailto:hi@stepchange.show?subject=Episode Suggestion"
          className="bg-sky-600 text-white px-8 py-4 rounded-lg hover:bg-sky-700 transition-colors font-semibold inline-flex items-center gap-2 text-lg"
        >
          <span>✉️</span>
          Email Your Ideas
        </a>
      </div>
    </main>
  );
}