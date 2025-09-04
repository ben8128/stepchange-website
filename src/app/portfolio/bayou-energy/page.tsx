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

      {/* Single Large Floating Box */}
      <div className="floating-container pb-8">
        <div className="floating-frame overflow-hidden">
          {/* Hero Image with Logo Overlay */}
          <div className="relative h-80 md:h-96" style={{background: 'linear-gradient(135deg, var(--color-primary) 0%, #2d3e50 100%)'}}>
            <Image 
              src="/images/companies/bayou-energy-hero.svg" 
              alt="Bayou Energy - Utility Data Infrastructure"
              className="w-full h-full object-cover"
              width={800}
              height={400}
              priority
            />
            {/* Logo Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Image 
                  src="/images/logos/bayou-energy-actual.svg" 
                  alt="Bayou Energy"
                  className="h-16 md:h-20 mx-auto mb-4 opacity-90 filter drop-shadow-lg"
                  width={80}
                  height={80}
                />
                <h1 className="stepchange-h1 text-white drop-shadow-lg" style={{color: 'white'}}>
                  The utility data layer for the energy transition
                </h1>
              </div>
            </div>
          </div>

          {/* Content Container */}
          <div className="p-8 md:p-12">
            {/* Company Overview */}
            <div className="mb-12 pb-8" style={{borderBottom: `1px solid var(--color-border)`}}>
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1.5 rounded-full stepchange-small font-medium" style={{backgroundColor: 'rgba(197, 65, 13, 0.1)', color: 'var(--color-urgent-copper)'}}>
                    Energy Transition
                  </span>
                  <span className="stepchange-small" style={{color: 'var(--color-text-secondary)'}}>Founded 2023</span>
                  <span className="px-3 py-1.5 rounded-full stepchange-small font-medium" style={{backgroundColor: 'var(--color-light-concrete)', color: 'var(--color-text-primary)'}}>
                    Pre-seed
                  </span>
                </div>
              </div>
              
              <p className="stepchange-body max-w-4xl">
                Bayou Energy provides an API that allows developers to integrate utility data quickly into their applications. 
                The platform offers customers one-click utility account connection and provides access to utility bill, 
                interval, and account data with 12 months of historical or ongoing data access.
              </p>
            </div>

            {/* Why We Invested */}
            <section className="mb-12">
              <h2 className="stepchange-h2 mb-6">Why we invested</h2>
              <div className="stepchange-body space-y-6 max-w-4xl">
                <p>
                  To upgrade the energy demand and generation for every home and business we need to be able to instantly access and analyze the historical and ongoing utility usage. Developers need to be able to access this data instantly and end-consumers need a seamless user experience to share their data. The parallels to Plaid in fintech are striking - just as Plaid became the infrastructure layer connecting financial institutions with applications, Bayou Energy is building the critical data infrastructure for the energy transition.
                </p>
                <p>
                  With 44% US coverage for instant data access and targeting 90% by end of 2024, Bayou Energy is positioned to become the standard API for utility data. Their developer-first approach, transparent pricing at $24 per meter per year, and one-click consumer authorization experience creates a compelling platform that can scale across the entire energy ecosystem. As more applications require utility data - from solar installers to energy management platforms to carbon accounting tools - Bayou becomes increasingly valuable.
                </p>
              </div>
            </section>

            {/* Why This Work Matters */}
            <section className="mb-12">
              <h2 className="stepchange-h2 mb-6">Why this work matters</h2>
              <div className="stepchange-body max-w-4xl">
                <p>
                  The energy transition requires unprecedented visibility into how energy is consumed across millions of homes and businesses. 
                  Without access to granular utility data, developers building energy management tools, solar installers optimizing system sizing, 
                  and carbon accounting platforms calculating emissions are operating blind. Bayou Energy&apos;s infrastructure democratizes access to 
                  this critical data, enabling a new generation of energy applications that can accelerate decarbonization at scale.
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="p-6 rounded-xl text-center" style={{backgroundColor: 'var(--color-background-secondary)', border: `1px solid var(--color-border)`}}>
                  <div className="stepchange-h3">44%</div>
                  <div className="stepchange-small">US Coverage</div>
                </div>
                <div className="p-6 rounded-xl text-center" style={{backgroundColor: 'var(--color-background-secondary)', border: `1px solid var(--color-border)`}}>
                  <div className="stepchange-h3">$24</div>
                  <div className="stepchange-small">Per meter/year</div>
                </div>
                <div className="p-6 rounded-xl text-center" style={{backgroundColor: 'var(--color-background-secondary)', border: `1px solid var(--color-border)`}}>
                  <div className="stepchange-h3">API-First</div>
                  <div className="stepchange-small">Developer platform</div>
                </div>
              </div>
            </section>

            {/* Team */}
            <section className="mb-12">
              <h2 className="stepchange-h2 mb-6">Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                <div>
                  <h3 className="stepchange-body font-semibold mb-2">
                    <a 
                      href="https://linkedin.com/in/jamesgordey" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="content-link"
                    >
                      James Gordey
                    </a>
                  </h3>
                  <p className="stepchange-small mb-3" style={{color: 'var(--color-text-secondary)'}}>Co-founder & CEO</p>
                  <p className="stepchange-small">
                    Senior Product Manager at Proterra and RealWear. Deep experience in clean technology 
                    product development and bringing hardware solutions to market.
                  </p>
                </div>

                <div>
                  <h3 className="stepchange-body font-semibold mb-2">
                    <a 
                      href="https://linkedin.com/in/jorisvanhecke" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="content-link"
                    >
                      Joris Van Hecke
                    </a>
                  </h3>
                  <p className="stepchange-small mb-3" style={{color: 'var(--color-text-secondary)'}}>Co-founder & CTO</p>
                  <p className="stepchange-small">
                    Former CTO at Progenda. Deep technical expertise in data infrastructure 
                    and scalable systems architecture.
                  </p>
                </div>
              </div>
            </section>

            {/* In the News */}
            <section className="mb-12">
              <h2 className="stepchange-h2 mb-6">In the News</h2>
              <div className="max-w-4xl">
                <div className="pl-6" style={{borderLeft: `4px solid var(--color-urgent-copper)`}}>
                  <h3 className="stepchange-body font-semibold mb-2">
                    <a 
                      href="https://www.geekwire.com/2024/this-energy-startup-wants-to-make-utility-data-more-accessible-and-spur-creation-of-new-companies/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="content-link"
                    >
                      This energy startup wants to make utility data more accessible and spur creation of new companies
                    </a>
                  </h3>
                  <p className="stepchange-small mb-3" style={{color: 'var(--color-text-secondary)'}}>GeekWire • 2024</p>
                  <p className="stepchange-small">
                    GeekWire explores how Bayou Energy is building the infrastructure to unlock utility data 
                    and enable new energy applications.
                  </p>
                </div>
              </div>
            </section>

            {/* Footer Links */}
            <footer style={{borderTop: `1px solid var(--color-border)`}} className="pt-8">
              <div className="flex flex-wrap gap-4 mb-8">
                <a 
                  href="https://www.bayou.energy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Visit Website
                </a>
                <a 
                  href="https://www.bayou.energy/careers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Careers
                </a>
              </div>

              {/* Investment Context */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6" style={{borderTop: `1px solid var(--color-light-concrete)`}}>
                <div>
                  <h3 className="stepchange-body font-semibold mb-3" style={{color: 'var(--color-primary)'}}>Stepchange Involvement</h3>
                  <p className="stepchange-small" style={{color: 'var(--color-text-secondary)'}}>
                    Ben has been advising Bayou over the last year, providing product experience 
                    and strategic guidance as the company builds its developer-centered platform.
                  </p>
                </div>
                <div>
                  <h3 className="stepchange-body font-semibold mb-3" style={{color: 'var(--color-primary)'}}>Follow-on Investors</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Surface Ventures', 'CoFound Partners', 'Leap Forward', 'Very Serious'].map((investor) => (
                      <span key={investor} className="px-3 py-1 rounded-full stepchange-small" style={{backgroundColor: 'var(--color-light-concrete)', color: 'var(--color-text-primary)'}}>
                        {investor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}