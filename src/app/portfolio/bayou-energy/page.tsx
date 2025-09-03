import Link from 'next/link';

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
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-stone-50">
      {/* Header Navigation */}
      <div className="floating-container py-6">
        <Link 
          href="/portfolio" 
          className="text-neutral-600 hover:text-neutral-800 stepchange-small font-medium flex items-center transition-colors"
        >
          ← Back to Portfolio
        </Link>
      </div>

      {/* Hero Section with Logo Overlay */}
      <div className="floating-container pb-8">
        <div className="floating-frame overflow-hidden">
          {/* Hero Image with Logo Overlay */}
          <div className="relative h-80 md:h-96 bg-gradient-to-r from-neutral-100 to-stone-100">
            <img 
              src="/images/companies/bayou-energy-hero.svg" 
              alt="Bayou Energy - Utility Data Infrastructure"
              className="w-full h-full object-cover"
            />
            {/* Logo Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <img 
                  src="/images/logos/bayou-energy-actual.svg" 
                  alt="Bayou Energy"
                  className="h-16 md:h-20 mx-auto mb-4 opacity-90 filter drop-shadow-lg"
                />
                <h1 className="stepchange-h1 text-white drop-shadow-lg">
                  The utility data layer for the energy transition
                </h1>
              </div>
            </div>
          </div>

          {/* Content Container */}
          <div className="p-8 md:p-12">
            {/* Company Overview */}
            <div className="mb-12 pb-8 border-b border-gray-200">
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-3">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full stepchange-small font-medium">
                    Energy Transition
                  </span>
                  <span className="stepchange-small text-gray-500">Founded 2023</span>
                  <span className="bg-stone-100 text-stone-700 px-3 py-1.5 rounded-full stepchange-small font-medium">
                    Pre-seed
                  </span>
                </div>
              </div>
              
              <p className="stepchange-body text-gray-700 max-w-4xl">
                Bayou Energy provides an API that allows developers to integrate utility data quickly into their applications. 
                The platform offers customers one-click utility account connection and provides access to utility bill, 
                interval, and account data with 12 months of historical or ongoing data access.
              </p>
            </div>

            {/* Why We Invested */}
            <section className="mb-12">
              <h2 className="stepchange-h2 text-gray-900 mb-6">Why we invested</h2>
              <div className="stepchange-body space-y-6 text-gray-700 max-w-4xl">
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
              <h2 className="stepchange-h2 text-gray-900 mb-6">Why this work matters</h2>
              <div className="stepchange-body text-gray-700 max-w-4xl">
                <p>
                  The energy transition requires unprecedented visibility into how energy is consumed across millions of homes and businesses. 
                  Without access to granular utility data, developers building energy management tools, solar installers optimizing system sizing, 
                  and carbon accounting platforms calculating emissions are operating blind. Bayou Energy's infrastructure democratizes access to 
                  this critical data, enabling a new generation of energy applications that can accelerate decarbonization at scale.
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 text-center">
                  <div className="stepchange-h3 text-gray-900">44%</div>
                  <div className="stepchange-small">US Coverage</div>
                </div>
                <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 text-center">
                  <div className="stepchange-h3 text-gray-900">$24</div>
                  <div className="stepchange-small">Per meter/year</div>
                </div>
                <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 text-center">
                  <div className="stepchange-h3 text-gray-900">API-First</div>
                  <div className="stepchange-small">Developer platform</div>
                </div>
              </div>
            </section>

            {/* Team */}
            <section className="mb-12">
              <h2 className="stepchange-h2 text-gray-900 mb-6">Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                <div>
                  <h3 className="stepchange-body font-semibold text-gray-900 mb-2">
                    <a 
                      href="https://linkedin.com/in/jamesgordey" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-amber-700 hover:text-amber-800 transition-colors"
                    >
                      James Gordey
                    </a>
                  </h3>
                  <p className="stepchange-small text-gray-600 mb-3">Co-founder & CEO</p>
                  <p className="stepchange-small text-gray-700">
                    Senior Product Manager at Proterra and RealWear. Deep experience in clean technology 
                    product development and bringing hardware solutions to market.
                  </p>
                </div>

                <div>
                  <h3 className="stepchange-body font-semibold text-gray-900 mb-2">
                    <a 
                      href="https://linkedin.com/in/jorisvanhecke" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-amber-700 hover:text-amber-800 transition-colors"
                    >
                      Joris Van Hecke
                    </a>
                  </h3>
                  <p className="stepchange-small text-gray-600 mb-3">Co-founder & CTO</p>
                  <p className="stepchange-small text-gray-700">
                    Former CTO at Progenda. Deep technical expertise in data infrastructure 
                    and scalable systems architecture.
                  </p>
                </div>
              </div>
            </section>

            {/* In the News */}
            <section className="mb-12">
              <h2 className="stepchange-h2 text-gray-900 mb-6">In the News</h2>
              <div className="max-w-4xl">
                <div className="border-l-4 border-amber-300 pl-6">
                  <h3 className="stepchange-body font-semibold mb-2">
                    <a 
                      href="https://www.geekwire.com/2024/this-energy-startup-wants-to-make-utility-data-more-accessible-and-spur-creation-of-new-companies/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-700 hover:text-amber-800 transition-colors"
                    >
                      This energy startup wants to make utility data more accessible and spur creation of new companies
                    </a>
                  </h3>
                  <p className="stepchange-small text-gray-500 mb-3">GeekWire • 2024</p>
                  <p className="stepchange-small text-gray-700">
                    GeekWire explores how Bayou Energy is building the infrastructure to unlock utility data 
                    and enable new energy applications.
                  </p>
                </div>
              </div>
            </section>

            {/* Footer Links */}
            <footer className="border-t border-gray-200 pt-8">
              <div className="flex flex-wrap gap-4 mb-8">
                <a 
                  href="https://www.bayou.energy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors stepchange-body font-medium"
                >
                  Visit Website
                </a>
                <a 
                  href="https://www.bayou.energy/careers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-100 text-neutral-700 px-6 py-3 rounded-lg hover:bg-neutral-200 transition-colors stepchange-body font-medium"
                >
                  Careers
                </a>
              </div>

              {/* Investment Context */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-gray-100">
                <div>
                  <h3 className="stepchange-body font-semibold text-gray-900 mb-3">Stepchange Involvement</h3>
                  <p className="stepchange-small text-gray-600">
                    Ben has been advising Bayou over the last year, providing product experience 
                    and strategic guidance as the company builds its developer-centered platform.
                  </p>
                </div>
                <div>
                  <h3 className="stepchange-body font-semibold text-gray-900 mb-3">Follow-on Investors</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Surface Ventures', 'CoFound Partners', 'Leap Forward', 'Very Serious'].map((investor) => (
                      <span key={investor} className="bg-stone-100 text-stone-700 px-3 py-1 rounded-full stepchange-small">
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