import Link from "next/link";

export default function DataCenters() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl mx-auto mb-8 flex items-center justify-center text-white text-4xl shadow-2xl">
            🏢
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Data Centers
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-700 mb-8 font-semibold">
            The Digital Infrastructure Revolution
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Explore the invisible infrastructure powering our digital world. From the first computer 
            rooms to hyperscale cloud facilities, discover how data centers became the backbone of 
            modern civilization—and what their enormous energy appetite means for our climate future.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full text-lg font-semibold">
              📅 Coming Soon
            </span>
            <span className="bg-cyan-100 text-cyan-800 px-6 py-3 rounded-full text-lg font-semibold">
              🎧 Audio in Production
            </span>
          </div>
        </div>

        {/* Preview Content */}
        <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-100 p-12 mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">What We&apos;ll Explore</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <h4 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span>🏛️</span>
                The Origins (1940s-1980s)
              </h4>
              <p className="text-blue-800 leading-relaxed">
                From room-sized computers in university basements to the first dedicated computer 
                facilities. How IBM mainframes and early networking created the need for specialized 
                infrastructure.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-xl border border-cyan-200">
              <h4 className="text-xl font-bold text-cyan-900 mb-4 flex items-center gap-2">
                <span>🌐</span>
                The Internet Explosion (1990s-2000s)
              </h4>
              <p className="text-cyan-800 leading-relaxed">
                The dot-com boom, colocation facilities, and the birth of the modern internet. 
                How companies like Exodus and Digital Realty built the foundation for our 
                connected world.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl border border-indigo-200">
              <h4 className="text-xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                <span>☁️</span>
                The Cloud Revolution (2000s-2010s)
              </h4>
              <p className="text-indigo-800 leading-relaxed">
                Amazon Web Services, Google&apos;s server farms, and the hyperscale revolution. 
                How software-defined infrastructure transformed computing from a scarce resource 
                to an infinite utility.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <h4 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
                <span>⚡</span>
                The Energy Challenge (2010s-Present)
              </h4>
              <p className="text-purple-800 leading-relaxed">
                Data centers now consume 4% of global electricity. How AI and machine learning 
                are driving unprecedented energy demand—and what this means for climate goals.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-2xl font-bold text-slate-900 mb-4">Key Questions We&apos;ll Answer</h4>
            <div className="grid md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">•</span>
                <span className="text-slate-700">How did data centers evolve from computer rooms to industrial facilities?</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">•</span>
                <span className="text-slate-700">What breakthrough technologies enabled cloud computing at scale?</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">•</span>
                <span className="text-slate-700">How do modern hyperscale facilities actually work?</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">•</span>
                <span className="text-slate-700">What is the true environmental cost of our digital infrastructure?</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">•</span>
                <span className="text-slate-700">How might AI and quantum computing reshape data center design?</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">•</span>
                <span className="text-slate-700">What innovations could make our digital future sustainable?</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Preview */}
        <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-12 mb-16 border-2 border-blue-200">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Timeline Preview</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                1946
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">ENIAC Computer Room</h4>
                <p className="text-slate-700">First dedicated computer facility at University of Pennsylvania</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                1995
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Internet Commercialization</h4>
                <p className="text-slate-700">First commercial data centers emerge to support web hosting</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                2006
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">AWS Launch</h4>
                <p className="text-slate-700">Amazon Web Services transforms infrastructure into a service</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                2023
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">AI Boom</h4>
                <p className="text-slate-700">ChatGPT and large language models drive unprecedented compute demand</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl shadow-xl border-2 border-blue-100 p-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-6">Stay Updated</h3>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Be the first to know when the Data Centers episode is released. Follow us on your 
            favorite podcast platform or subscribe to our newsletter.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="https://stepchange.show/feed"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center gap-2"
            >
              <span>📡</span>
              Subscribe to RSS
            </a>
            <a
              href="mailto:hi@stepchange.show?subject=Data Centers Episode"
              className="bg-white text-blue-700 border-2 border-blue-200 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold inline-flex items-center gap-2"
            >
              <span>✉️</span>
              Email for Updates
            </a>
          </div>

          <div className="border-t border-blue-100 pt-8">
            <Link
              href="/history"
              className="text-blue-600 hover:text-blue-500 font-semibold inline-flex items-center gap-2"
            >
              <span>←</span>
              Back to All Episodes
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}