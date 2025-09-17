import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Bayou Energy - Stepchange Portfolio",
  description: "The utility data layer for the energy transition. Building developer-centered platform to solve fundamental data infrastructure problems in energy.",
  openGraph: {
    title: "Bayou Energy - Stepchange Portfolio",
    description: "The utility data layer for the energy transition.",
    type: "website",
  },
};

export default function BayouEnergyPage() {
  return (
    <main className="min-h-screen" style={{backgroundColor: 'var(--color-background-primary)'}}>
      {/* Header Navigation */}
      <div className="floating-container py-6">
        <Link 
          href="/portfolio" 
          className="stepchange-small font-medium flex items-center transition-colors nav-link"
        >
          ← Back to Portfolio
        </Link>
      </div>

      {/* Main Content - Dense Horizontal Layout */}
      <div className="max-w-7xl mx-auto px-6 pb-8">
        <div className="floating-frame overflow-hidden">
          
          {/* Top Section - Logo + Hero Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left - Logo with Visual Background */}
            <div className="flex items-center gap-4 p-8" style={{backgroundColor: '#1a365d'}}>
              <Image 
                src="/images/logos/bayou-energy-actual.svg" 
                alt="Bayou Energy"
                className="h-10"
                width={100}
                height={40}
              />
              <a 
                href="https://www.bayou.energy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:underline text-white"
              >
                bayou.energy
              </a>
            </div>
            
            {/* Right - Hero Image */}
            <div className="relative min-h-[200px] lg:min-h-[160px]">
              <Image 
                src="/images/portfolio/bayouenergy/bayouenergy-hero.png" 
                alt="Bayou Energy Platform"
                className="w-full h-full object-cover"
                width={600}
                height={200}
                priority
              />
            </div>
          </div>

          {/* Main Layout - Sidebar + Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
            
            {/* Left Sidebar - Metadata */}
            <div className="lg:col-span-1 p-6 space-y-8" style={{backgroundColor: 'var(--color-background-secondary)', borderRight: `1px solid var(--color-border)`}}>
              
              <div>
                <div className="text-xs font-semibold uppercase tracking-wide mb-2" style={{color: 'var(--color-text-secondary)'}}>Sector</div>
                <div className="px-3 py-1 rounded-full text-xs font-medium inline-block" style={{backgroundColor: 'rgba(197, 65, 13, 0.1)', color: 'var(--color-urgent-copper)'}}>
                  Energy Transition
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold uppercase tracking-wide mb-2" style={{color: 'var(--color-text-secondary)'}}>Founded</div>
                <div className="font-semibold" style={{color: 'var(--color-primary)'}}>2023</div>
              </div>

              <div>
                <div className="text-xs font-semibold uppercase tracking-wide mb-2" style={{color: 'var(--color-text-secondary)'}}>Investment Date</div>
                <div className="font-semibold" style={{color: 'var(--color-primary)'}}>2023</div>
              </div>

              <div>
                <div className="text-xs font-semibold uppercase tracking-wide mb-2" style={{color: 'var(--color-text-secondary)'}}>Stage</div>
                <div className="font-semibold" style={{color: 'var(--color-primary)'}}>Pre-seed</div>
              </div>

              <div>
                <div className="text-xs font-semibold uppercase tracking-wide mb-2" style={{color: 'var(--color-text-secondary)'}}>Contact</div>
                <div className="space-y-1 text-sm">
                  <div>
                    <a 
                      href="https://www.bayou.energy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline" 
                      style={{color: 'var(--color-primary)'}}
                    >
                      bayou.energy
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold uppercase tracking-wide mb-3" style={{color: 'var(--color-text-secondary)'}}>Leadership</div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-semibold">
                        JG
                      </div>
                    </div>
                    <div className="min-w-0">
                      <a 
                        href="https://linkedin.com/in/jamesgordey" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-medium hover:underline block"
                        style={{color: 'var(--color-primary)'}}
                      >
                        James Gordey
                      </a>
                      <div className="text-xs" style={{color: 'var(--color-text-secondary)'}}>CEO</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                      <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-xs font-semibold">
                        JV
                      </div>
                    </div>
                    <div className="min-w-0">
                      <a 
                        href="https://linkedin.com/in/jorisvanhecke" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-medium hover:underline block"
                        style={{color: 'var(--color-primary)'}}
                      >
                        Joris Van Hecke
                      </a>
                      <div className="text-xs" style={{color: 'var(--color-text-secondary)'}}>CTO</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="lg:col-span-3 p-8 space-y-8">
              
              {/* Main Headline */}
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal leading-tight" style={{color: 'var(--color-primary)'}}>
                  Bayou Energy provides an API that allows developers to integrate utility data quickly into their applications with one-click customer authorization and 12 months of historical data access.
                </h1>
              </div>

              {/* Why we invested */}
              <div>
                <h2 className="text-lg font-semibold mb-4" style={{color: 'var(--color-primary)'}}>Why we invested</h2>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 text-base leading-relaxed" style={{color: 'var(--color-text-primary)'}}>
                  <p>
                    The parallels to Plaid in fintech are striking - just as Plaid became the infrastructure layer 
                    connecting financial institutions with applications, Bayou Energy is building the critical data 
                    infrastructure for the energy transition. To upgrade the energy demand and generation for every 
                    home and business we need to be able to instantly access and analyze the historical and ongoing utility usage.
                  </p>
                  <p>
                    With 44% US coverage for instant data access and targeting 90% by end of 2024, Bayou Energy is 
                    positioned to become the standard API for utility data. Their developer-first approach, transparent 
                    pricing at $24 per meter per year, and one-click consumer authorization experience creates a compelling 
                    platform that can scale across the entire energy ecosystem.
                  </p>
                </div>
              </div>

              {/* Why this work matters */}
              <div>
                <h2 className="text-lg font-semibold mb-4" style={{color: 'var(--color-primary)'}}>Why this work matters</h2>
                <div className="text-base leading-relaxed" style={{color: 'var(--color-text-primary)'}}>
                  <p>
                    The energy transition requires unprecedented visibility into how energy is consumed across millions 
                    of homes and businesses. Without access to granular utility data, developers building energy management 
                    tools, solar installers optimizing system sizing, and carbon accounting platforms calculating emissions 
                    are operating blind. Bayou Energy&apos;s infrastructure democratizes access to this critical data, enabling 
                    a new generation of energy applications that can accelerate decarbonization at scale.
                  </p>
                </div>
              </div>

              {/* Interested in working section */}
              <div className="pt-6">
                <div className="p-4 rounded-lg border border-gray-200" style={{backgroundColor: 'var(--color-background-secondary)'}}>
                  <div className="flex items-center justify-between">
                    <span className="text-base" style={{color: 'var(--color-text-primary)'}}>Interested in working with Bayou Energy?</span>
                    <a 
                      href="https://www.bayou.energy/careers"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-sm font-medium underline"
                      style={{color: 'var(--color-primary)'}}
                    >
                      2 open roles
                    </a>
                  </div>
                </div>
              </div>

              {/* In the News */}
              <div>
                <h3 className="text-lg font-semibold mb-4" style={{color: 'var(--color-primary)'}}>In the News</h3>
                <div className="p-4 rounded-lg" style={{backgroundColor: 'var(--color-background-secondary)', border: `1px solid var(--color-border)`}}>
                  <a 
                    href="https://www.geekwire.com/2024/this-energy-startup-wants-to-make-utility-data-more-accessible-and-spur-creation-of-new-companies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:underline block"
                    style={{color: 'var(--color-primary)'}}
                  >
                    This energy startup wants to make utility data more accessible and spur creation of new companies
                  </a>
                  <div className="text-sm mt-1" style={{color: 'var(--color-text-secondary)'}}>GeekWire • 2024</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}