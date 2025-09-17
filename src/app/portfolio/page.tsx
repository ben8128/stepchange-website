import Link from "next/link";
import Image from "next/image";

interface Company {
  name: string;
  description: string;
  website: string;
  stage: string;
  year: string;
  metrics: string;
  featured?: boolean;
  slug?: string;
  image?: string;
}

const sectors = [
  {
    title: "Transportation",
    description: "Electrifying transport via effective charging, commercial trucking, and fleet optimization.",
    companies: [
      {
        name: "itselectric",
        description: "Curbside EV charging infrastructure that doesn&apos;t require expensive electrical upgrades, making urban charging accessible.",
        website: "https://itselectric.com",
        stage: "Series A",
        year: "2022",
        metrics: "1000+ charging ports deployed",
        image: "/images/portfolio/itselectric/itselectric-hero.png"
      },
      {
        name: "Nevoya",
        description: "Fleet management and logistics optimization platform for commercial transport electrification.",
        website: "https://nevoya.com",
        stage: "Seed",
        year: "2023",
        metrics: "Commercial fleet optimization"
      }
    ]
  },
  {
    title: "Built Environment", 
    description: "Tools, financing, and data to enable residential & commercial electrification, and decarbonization.",
    companies: [
      {
        name: "Audette",
        description: "Residential solar design and sales software that reduces customer acquisition costs for installers.",
        website: "https://audette.io",
        stage: "Seed",
        year: "2023",
        metrics: "100+ installer customers",
        image: "/images/portfolio/audette/audette-hero.png"
      },
      {
        name: "CapeZero",
        description: "Industrial heat pump solutions with advanced controls for manufacturing decarbonization.",
        website: "https://capezero.com",
        stage: "Seed", 
        year: "2023",
        metrics: "10+ industrial deployments"
      },
      {
        name: "WattBot",
        description: "Energy management system for commercial buildings with predictive analytics and automated controls.",
        website: "https://wattbot.com",
        stage: "Seed",
        year: "2023", 
        metrics: "1M+ sq ft managed"
      },
      {
        name: "Abode",
        description: "Home energy management software that integrates solar, storage, and smart appliances.",
        website: "https://abode.energy",
        stage: "Seed",
        year: "2023",
        metrics: "1000+ homes connected"
      }
    ]
  },
  {
    title: "Energy Transition",
    description: "Scale renewable power generation, energy storage, and grid flexibility. Build intelligent power delivery and coordinate distributed resources.",
    companies: [
      {
        name: "Bayou Energy",
        description: "The utility data layer for the energy transition. Building developer-centered platform to solve fundamental data infrastructure problems.",
        website: "https://bayouenergy.com",
        stage: "Pre-seed",
        year: "2023",
        metrics: "44% US coverage",
        featured: true,
        slug: "bayou-energy",
        image: "/images/portfolio/bayouenergy/bayouenergy-hero.png"
      },
      {
        name: "Rhizome", 
        description: "Demand response platform that helps utilities manage peak demand through intelligent load shifting.",
        website: "https://rhizome.energy",
        stage: "Seed",
        year: "2023",
        metrics: "50MW+ under management"
      },
      {
        name: "Eli",
        description: "Solar project development software that streamlines permitting, interconnection, and construction workflows.",
        website: "https://eli.solar",
        stage: "Seed",
        year: "2023",
        metrics: "500+ projects managed"
      }
    ]
  },
  {
    title: "Resilience",
    description: "Harden critical infrastructure, insure resilience, and reduce catastrophic loss of life.",
    companies: [
      {
        name: "FutureProof",
        description: "Climate risk analytics for real estate and infrastructure investment decisions.",
        website: "https://futureproof.insure",
        stage: "Seed",
        year: "2023",
        metrics: "$100B+ assets analyzed",
        image: "/images/portfolio/futureproof/futureproof-hero.png"
      },
      {
        name: "Skyward", 
        description: "Satellite-based monitoring for renewable energy projects and grid infrastructure.",
        website: "https://skyward.io",
        stage: "Seed",
        year: "2023",
        metrics: "1000+ assets monitored"
      },
      {
        name: "Shovels",
        description: "Construction data platform tracking infrastructure projects and market intelligence.",
        website: "https://shovels.ai",
        stage: "Seed", 
        year: "2023",
        metrics: "10K+ projects tracked",
        image: "/images/portfolio/shovels/shovels-hero.png"
      }
    ]
  },
  {
    title: "Horizontal Enablement",
    description: "Capital and AI Infrastructure. Accelerating capital to large projects and land upgrades. Enabling AI tools for climate impact.",
    companies: [
      {
        name: "LGND",
        description: "Energy trading platform that helps renewable developers optimize revenue through market participation.",
        website: "https://lgnd.com", 
        stage: "Seed",
        year: "2023",
        metrics: "500MW+ under management"
      },
      {
        name: "Ezra Climate",
        description: "Carbon accounting and reporting platform for enterprises managing climate commitments.",
        website: "https://ezraclimate.com",
        stage: "Seed",
        year: "2023",
        metrics: "50+ enterprise customers"
      },
      {
        name: "Aarden",
        description: "AI-powered platform accelerating climate technology deployment and project financing.",
        website: "https://aarden.com",
        stage: "Seed",
        year: "2024",
        metrics: "Early stage"
      }
    ]
  }
];

export default function Portfolio() {
  const totalCompanies = sectors.reduce((total, sector) => total + sector.companies.length, 0);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6" style={{backgroundColor: 'var(--color-background-primary)'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-primary)'}}>
            Portfolio
          </h1>
          <p className="text-lg md:text-xl leading-relaxed font-light mb-12" style={{fontFamily: 'var(--font-body)', color: 'var(--color-text-primary)'}}>
            Stepchange invests in four primary sectors that are ready for venture scale deployment
          </p>
          
          {/* Portfolio Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-3xl font-bold" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-urgent-copper)'}}>{totalCompanies}</div>
              <div className="text-sm font-medium" style={{fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)'}}>Portfolio Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-urgent-copper)'}}>4</div>
              <div className="text-sm font-medium" style={{fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)'}}>Core Sectors</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-urgent-copper)'}}>$50M+</div>
              <div className="text-sm font-medium" style={{fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)'}}>Follow-on Raised</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-urgent-copper)'}}>100+</div>
              <div className="text-sm font-medium" style={{fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)'}}>LP Network</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <main style={{backgroundColor: 'var(--color-background-primary)'}}>
        <div className="max-w-[1600px] mx-auto px-6 py-12">
          {sectors.map((sector, sectorIndex) => (
            <section key={sector.title} className="mb-12">
              {/* Horizontal Layout */}
              <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 items-start">
                {/* Sector Info - Left Column */}
                <div className="xl:col-span-1">
                  <div className="sticky top-8">
                    <h2 className="text-lg md:text-xl font-bold mb-3" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-primary)'}}>
                      {sector.title}
                    </h2>
                    <p className="text-sm leading-relaxed" style={{fontFamily: 'var(--font-body)', color: 'var(--color-text-primary)'}}>
                      {sector.description}
                    </p>
                  </div>
                </div>

                {/* Companies Grid - Right Columns */}
                <div className="xl:col-span-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {sector.companies.map((company) => (
                      <Link
                        key={company.name}
                        href={company.slug ? `/portfolio/${company.slug}` : company.website || '#'}
                        target={company.slug ? '_self' : '_blank'}
                        rel={company.slug ? '' : 'noopener noreferrer'}
                        className="group"
                      >
                        <div className="floating-frame overflow-hidden h-full flex flex-col">
                          {/* Company Image - Edge to Edge */}
                          <div className="h-32 flex items-center justify-center relative overflow-hidden"
                               style={{background: company.image ? 'transparent' : 'linear-gradient(135deg, var(--color-urgent-copper) 0%, #d64916 100%)'}}>
                            {company.image ? (
                              <Image
                                src={company.image}
                                alt={`${company.name} screenshot`}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <span className="text-2xl font-bold text-white" style={{fontFamily: 'var(--font-heading)'}}>
                                {company.name.charAt(0)}
                              </span>
                            )}
                            {/* Featured Badge - Overlay */}
                            {company.featured && (
                              <div className="absolute top-2 right-2">
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium stepchange-accent bg-white/90" 
                                      style={{color: 'var(--color-urgent-copper)'}}>
                                  Featured
                                </span>
                              </div>
                            )}
                          </div>
                          
                          {/* Content - Compact */}
                          <div className="p-3 flex-grow flex flex-col">
                            {/* Company Title */}
                            <h3 className="text-sm font-bold mb-2 group-hover:text-[var(--color-urgent-copper)] transition-colors" 
                                style={{fontFamily: 'var(--font-heading)', color: 'var(--color-primary)'}}>
                              {company.name}
                            </h3>
                            
                            {/* One Sentence Description */}
                            <p className="text-xs leading-relaxed flex-grow" 
                               style={{fontFamily: 'var(--font-body)', color: 'var(--color-text-primary)'}}>
                              {company.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Sector Divider */}
              {sectorIndex < sectors.length - 1 && (
                <div className="mt-12 border-b" style={{borderColor: 'var(--color-border)'}}></div>
              )}
            </section>
          ))}
        </div>
      </main>

      {/* Investment Process Section */}
      <section className="py-20 px-6" style={{backgroundColor: 'var(--color-background-secondary)'}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-primary)'}}>
            What We Look For
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="floating-frame p-6">
              <h3 className="font-semibold mb-3" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-primary)'}}>Exceptional Products</h3>
              <p className="text-sm" style={{fontFamily: 'var(--font-body)', color: 'var(--color-text-primary)'}}>Clear user value and strong adoption metrics with software-enabled business models that can scale efficiently.</p>
            </div>
            
            <div className="floating-frame p-6">
              <h3 className="font-semibold mb-3" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-primary)'}}>Experienced Teams</h3>
              <p className="text-sm" style={{fontFamily: 'var(--font-body)', color: 'var(--color-text-primary)'}}>Deep domain expertise and product development skills with mission alignment on accelerating the energy transition.</p>
            </div>
            
            <div className="floating-frame p-6">
              <h3 className="font-semibold mb-3" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-primary)'}}>Large Markets</h3>
              <p className="text-sm" style={{fontFamily: 'var(--font-body)', color: 'var(--color-text-primary)'}}>Markets undergoing technology-driven transformation with significant opportunity for venture-scale returns.</p>
            </div>
            
            <div className="floating-frame p-6">
              <h3 className="font-semibold mb-3" style={{fontFamily: 'var(--font-heading)', color: 'var(--color-primary)'}}>Fast Process</h3>
              <p className="text-sm" style={{fontFamily: 'var(--font-body)', color: 'var(--color-text-primary)'}}>Typically 2-3 weeks from initial meeting to investment decision. We move fast and aim to be helpful whether or not we invest.</p>
            </div>
          </div>
          
          <Link href="/invest" className="btn-urgent">
            Submit Your Company
          </Link>
        </div>
      </section>
    </>
  );
}