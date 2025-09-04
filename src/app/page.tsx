import HorizontalScroll from "./components/horizontal-scroll";
import Image from "next/image";

// Mock data for horizontal scrolls - you can replace with real data sources
const stepchangeContent = [
  {
    title: "The Software Guide to Climate Tech",
    description: "A comprehensive guide to how software is accelerating the energy transition",
    date: "Dec 2024",
    url: "/software",
    source: "Climate Papa"
  },
  {
    title: "Why Product-Led Climate Companies Win",
    description: "How exceptional user experience drives adoption in climate technology",
    date: "Nov 2024",
    url: "https://stepchange.show/episodes/product-led-climate",
    source: "Stepchange Show"
  },
  {
    title: "The Infrastructure Upgrade Opportunity",
    description: "Why the energy transition is fundamentally about infrastructure software",
    date: "Oct 2024",
    url: "https://stepchange.show/episodes/infrastructure-upgrade",
    source: "Stepchange Show"
  },
];

const portfolioNews = [
  {
    title: "Bayou Energy Raises Series A",
    description: "AI-powered grid optimization platform secures $12M to expand across Texas",
    date: "Dec 2024",
    source: "TechCrunch"
  },
  {
    title: "itselectric Deploys 100th Curbside Charger",
    description: "Brooklyn-based EV charging company reaches major milestone in NYC",
    date: "Nov 2024",
    source: "Electrek"
  },
  {
    title: "Rhizome Partners with Major Utility",
    description: "Demand response platform signs deal with PG&E for statewide deployment",
    date: "Oct 2024",
    source: "Utility Dive"
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section with Dark Background */}
      <section className="min-h-screen flex items-center justify-center px-6" 
               style={{backgroundColor: 'var(--color-primary)'}}>
        <div className="max-w-6xl mx-auto text-center">
          {/* Hero Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-16 leading-tight tracking-wide">
            Accelerating today&apos;s step changes
          </h1>
          
          {/* Floating Hero Image */}
          <div className="relative mx-auto max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mb-20">
            <div className="floating-frame overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
              <Image 
                src="/images/watt_engine.png"
                alt="Watt steam engine - the foundation of the industrial revolution and energy transformation"
                className="w-full h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] 2xl:h-[36rem] object-cover"
                width={1200}
                height={800}
                priority
              />
            </div>
          </div>
          
        </div>
      </section>

      {/* Core Thesis Section - Full Page Scroll */}
      <section className="min-h-screen flex items-center justify-center px-6" style={{backgroundColor: 'var(--color-background-primary)'}}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light" style={{color: 'var(--color-text-primary)'}}>
            Stepchange invests in ambitious companies building software<br />
            to accelerate energy abundance and upgrade critical infrastructure.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{backgroundColor: 'var(--color-border)'}}></div>
      </section>

      {/* Content Sections */}
      <main style={{backgroundColor: 'var(--color-background-primary)'}}>
        {/* Introduction Paragraph */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <p className="text-lg md:text-xl leading-relaxed font-light" style={{color: 'var(--color-text-primary)'}}>
                Founded by <a href="/team" className="content-link font-medium">Ben Eidelson</a> (ex-Stripe, Google) and <a href="/team" className="content-link font-medium">Anay Shah</a> (ex-Remitly, Tala), we invest in software solutions that make the energy transition faster, cheaper, and more reliable.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed font-light" style={{color: 'var(--color-text-primary)'}}>
                We focus on product-first companies with exceptional user experience, software-enabled solutions that scale efficiently, and experienced founders building for real market needs.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed font-light" style={{color: 'var(--color-text-primary)'}}>
                Our <a href="/portfolio" className="content-link font-medium">portfolio</a> spans grid infrastructure, clean energy deployment, and energy intelligence platforms. We&apos;re looking for the picks and shovels of the energy transition—the developer tools, data platforms, and infrastructure software that will enable the clean energy economy.
              </p>
              
              <div className="pt-8">
                <p className="text-base" style={{color: 'var(--color-text-secondary)'}}>
                  Learn more about our <a href="/history" className="content-link">approach to infrastructure history</a> or <a href="/invest" className="content-link">get in touch</a> to discuss your company.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-screen-sm mx-auto px-6 py-20">
          <HorizontalScroll 
            title="Stepchange Content & News"
            items={stepchangeContent}
          />

          <HorizontalScroll 
            title="Portfolio News"
            items={portfolioNews}
          />

        </div>
      </main>

      {/* Footer */}
      <footer className="py-16 px-6" style={{backgroundColor: 'var(--color-background-primary)', borderTop: `1px solid var(--color-border)`}}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <a 
              href="mailto:partners@stepchange.vc" 
              className="content-link text-lg font-medium"
            >
              partners@stepchange.vc
            </a>
            <span className="hidden md:inline" style={{color: 'var(--color-border)'}}>•</span>
            <a 
              href="https://www.linkedin.com/company/stepchange-vc/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="content-link text-lg font-medium"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-sm" style={{color: 'var(--color-text-secondary)'}}>
            © {new Date().getFullYear()} Stepchange Ventures
          </p>
        </div>
      </footer>
    </>
  );
}
