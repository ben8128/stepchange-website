import Markdown from "../components/markdown";
import Link from "next/link";

const portfolioContent = `# Portfolio

We back exceptional founders building product-led solutions to accelerate the energy transition. Our portfolio represents the future of climate technology - companies that combine deep technical expertise with exceptional user experience.

## Current Investments

### Grid & Infrastructure

**Bayou Energy**  
AI-powered grid optimization platform helping utilities manage renewable energy integration and grid stability.

**itselectric**  
Curbside EV charging infrastructure that doesn't require expensive electrical upgrades, making urban charging accessible.

**Rhizome**  
Demand response platform that helps utilities manage peak demand through intelligent load shifting.

### Clean Energy Deployment

**Eli**  
Solar project development software that streamlines permitting, interconnection, and construction workflows.

**Nevoya**  
Wind energy analytics platform providing real-time insights for wind farm optimization and maintenance.

**Audette**  
Residential solar design and sales software that reduces customer acquisition costs for installers.

### Industrial Decarbonization

**CapeZero**  
Industrial heat pump solutions with advanced controls for manufacturing decarbonization.

**WattBot**  
Energy management system for commercial buildings with predictive analytics and automated controls.

### Energy Intelligence

**FutureProof**  
Climate risk analytics for real estate and infrastructure investment decisions.

**LGND**  
Energy trading platform that helps renewable developers optimize revenue through market participation.

**Skyward**  
Satellite-based monitoring for renewable energy projects and grid infrastructure.

**Shovels**  
Construction data platform tracking infrastructure projects and market intelligence.

**Abode**  
Home energy management software that integrates solar, storage, and smart appliances.

**Ezra Climate**  
Carbon accounting and reporting platform for enterprises managing climate commitments.

---

## What We Look For

- **Exceptional products** with clear user value and strong adoption metrics
- **Experienced teams** with deep domain expertise and product development skills
- **Large markets** undergoing technology-driven transformation
- **Software-enabled** business models that can scale efficiently
- **Mission alignment** with accelerating the energy transition

## Investment Process

1. **Initial conversation** - 30-minute call to understand your company and vision
2. **Deep dive** - Product demo, market analysis, and team evaluation
3. **Reference calls** - Customer and partner feedback
4. **Investment decision** - Typically 2-3 weeks from initial meeting

We move fast and aim to be helpful whether or not we invest.`;

const featuredCompany = {
  name: "Bayou Energy",
  slug: "bayou-energy",
  tagline: "The utility data layer for the energy transition",
  description: "Building the developer-centered platform to solve fundamental data infrastructure problems in energy",
  website: "https://bayouenergy.com",
  logo: "/images/logos/bayou-energy.svg",
  heroImage: "/images/companies/bayou-energy-hero.svg",
  category: "Energy Transition",
  stage: "Pre-seed",
  year: "2023",
  investmentNumber: 3,
  
  // Investment Thesis
  investmentThesis: "To upgrade the energy demand and generation for every home and business we need to be able to instantly access and analyze the historical and ongoing utility usage. Developers need to be able to access this data instantly and end-consumers need a seamless user experience to share their data.",
  
  keyMetrics: [
    "44% of US covered for instant data access",
    "Target: 90% coverage by end of 2024",
    "Deep fintech parallels to Plaid's business model"
  ],
  
  customers: ["Elephant Energy", "WattBot", "Solstice"],
  
  founders: [
    {
      name: "James Gordey",
      role: "Co-founder, CEO",
      background: "Senior PM at Proterra, RealWear",
      image: "/images/founders/james-gordey.jpg", // Would need actual photo
      linkedIn: "https://linkedin.com/in/jamesgordey"
    },
    {
      name: "Joris Van Hecke",
      role: "Co-founder, CTO",
      background: "CTO at Progenda",
      image: "/images/founders/joris-van-hecke.jpg", // Would need actual photo
      linkedIn: "https://linkedin.com/in/jorisvanhecke"
    }
  ],
  
  stepchangeInvolvement: "Ben has been advising Bayou over the last year",
  followOnInvestors: ["Surface Ventures", "CoFound Partners", "Leap Forward", "Very Serious"],
  
  status: "active" as const,
};

const portfolioCompanies = [
  // Grid & Infrastructure
  {
    name: "itselectric",
    category: "Grid & Infrastructure", 
    description: "Curbside EV charging infrastructure that doesn't require expensive electrical upgrades, making urban charging accessible",
    website: "https://itselectric.com",
    stage: "Series A",
    year: "2022",
    metrics: "1000+ charging ports deployed"
  },
  {
    name: "Rhizome",
    category: "Grid & Infrastructure",
    description: "Demand response platform that helps utilities manage peak demand through intelligent load shifting",
    website: "https://rhizome.energy",
    stage: "Seed",
    year: "2023",
    metrics: "50MW+ under management"
  },
  
  // Clean Energy Deployment
  {
    name: "Eli",
    category: "Clean Energy",
    description: "Solar project development software that streamlines permitting, interconnection, and construction workflows",
    website: "https://eli.solar",
    stage: "Seed",
    year: "2023",
    metrics: "500+ projects managed"
  },
  {
    name: "Nevoya",
    category: "Clean Energy",
    description: "Wind energy analytics platform providing real-time insights for wind farm optimization and maintenance",
    website: "https://nevoya.com",
    stage: "Seed",
    year: "2023",
    metrics: "2GW+ monitored capacity"
  },
  {
    name: "Audette",
    category: "Clean Energy",
    description: "Residential solar design and sales software that reduces customer acquisition costs for installers",
    website: "https://audette.io",
    stage: "Seed",
    year: "2023",
    metrics: "100+ installer customers"
  },
  
  // Industrial & Commercial
  {
    name: "CapeZero",
    category: "Industrial",
    description: "Industrial heat pump solutions with advanced controls for manufacturing decarbonization",
    website: "https://capezero.com",
    stage: "Seed",
    year: "2023",
    metrics: "10+ industrial deployments"
  },
  {
    name: "WattBot",
    category: "Industrial",
    description: "Energy management system for commercial buildings with predictive analytics and automated controls",
    website: "https://wattbot.com",
    stage: "Seed",
    year: "2023",
    metrics: "1M+ sq ft managed"
  },
  
  // Energy Intelligence & Data
  {
    name: "FutureProof",
    category: "Intelligence",
    description: "Climate risk analytics for real estate and infrastructure investment decisions",
    website: "https://futureproof.insure",
    stage: "Seed",
    year: "2023",
    metrics: "$100B+ assets analyzed"
  },
  {
    name: "LGND",
    category: "Intelligence",
    description: "Energy trading platform that helps renewable developers optimize revenue through market participation",
    website: "https://lgnd.com",
    stage: "Seed",
    year: "2023",
    metrics: "500MW+ under management"
  },
  {
    name: "Skyward",
    category: "Intelligence",
    description: "Satellite-based monitoring for renewable energy projects and grid infrastructure",
    website: "https://skyward.io",
    stage: "Seed",
    year: "2023",
    metrics: "1000+ assets monitored"
  },
  {
    name: "Shovels",
    category: "Intelligence",
    description: "Construction data platform tracking infrastructure projects and market intelligence",
    website: "https://shovels.ai",
    stage: "Seed",
    year: "2023",
    metrics: "10K+ projects tracked"
  },
  {
    name: "Abode",
    category: "Consumer",
    description: "Home energy management software that integrates solar, storage, and smart appliances",
    website: "https://abode.energy",
    stage: "Seed",
    year: "2023",
    metrics: "1000+ homes connected"
  },
  {
    name: "Ezra Climate",
    category: "Enterprise",
    description: "Carbon accounting and reporting platform for enterprises managing climate commitments",
    website: "https://ezraclimate.com",
    stage: "Seed",
    year: "2023",
    metrics: "50+ enterprise customers"
  }
];

// const categories = [
//   "All",
//   "Grid & Infrastructure",
//   "Clean Energy", 
//   "Industrial",
//   "Intelligence",
//   "Consumer",
//   "Enterprise"
// ];

export default function Portfolio() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <Markdown className="prose prose-lg max-w-4xl mb-16">
        {portfolioContent}
      </Markdown>

      {/* Featured Company Spotlight */}
      <div className="mb-16 rounded-xl overflow-hidden floating-frame">
        {/* Hero Image */}
        <div className="h-64 relative overflow-hidden" style={{background: 'linear-gradient(135deg, var(--color-primary) 0%, #2d3e50 100%)'}}>
          <img 
            src={featuredCompany.heroImage}
            alt={`${featuredCompany.name} visualization`}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full" style={{backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(4px)'}}>
            <span className="text-sm font-medium" style={{color: 'var(--color-urgent-copper)'}}>Investment #{featuredCompany.investmentNumber}</span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center">
              <img 
                src={featuredCompany.logo}
                alt={`${featuredCompany.name} logo`}
                className="w-16 h-16 mr-4"
              />
              <div>
                <h3 className="text-2xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>{featuredCompany.name}</h3>
                <p className="text-lg mb-2" style={{color: 'var(--color-text-secondary)'}}>{featuredCompany.tagline}</p>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-sm font-medium" style={{backgroundColor: 'rgba(197, 65, 13, 0.1)', color: 'var(--color-urgent-copper)'}}>
                    {featuredCompany.category}
                  </span>
                  <span className="text-sm" style={{color: 'var(--color-text-secondary)'}}>
                    {featuredCompany.stage} • {featuredCompany.year}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Link
                href="/portfolio/bayou-energy"
                className="btn-primary text-sm"
              >
                View Details
              </Link>
              <a
                href="https://www.bayou.energy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
              >
                Visit Website
              </a>
            </div>
          </div>

          {/* Investment Thesis */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2" style={{color: 'var(--color-primary)'}}>Investment Thesis</h4>
            <p className="leading-relaxed" style={{color: 'var(--color-text-primary)'}}>{featuredCompany.investmentThesis}</p>
          </div>

          {/* Key Metrics */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3" style={{color: 'var(--color-primary)'}}>Key Metrics & Position</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {featuredCompany.keyMetrics.map((metric, index) => (
                <div key={index} className="p-3 rounded-lg" style={{backgroundColor: 'var(--color-background-secondary)', border: `1px solid var(--color-border)`}}>
                  <div className="text-sm" style={{color: 'var(--color-text-primary)'}}>{metric}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Founders */}
          <div className="mb-6">
            <h4 className="font-semibold mb-3" style={{color: 'var(--color-primary)'}}>Founders</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredCompany.founders.map((founder) => (
                <div key={founder.name} className="flex items-center p-3 rounded-lg" style={{backgroundColor: 'var(--color-background-secondary)', border: `1px solid var(--color-border)`}}>
                  <div className="w-12 h-12 rounded-full mr-3 flex items-center justify-center" style={{background: 'linear-gradient(135deg, var(--color-urgent-copper) 0%, #d64916 100%)'}}>
                    <span className="text-sm font-bold text-white">
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium" style={{color: 'var(--color-primary)'}}>{founder.name}</div>
                    <div className="text-sm" style={{color: 'var(--color-text-secondary)'}}>{founder.role}</div>
                    <div className="text-xs" style={{color: 'var(--color-text-secondary)'}}>{founder.background}</div>
                  </div>
                  <a
                    href={founder.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors content-link"
                  >
                    LinkedIn
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Stepchange Involvement & Follow-ons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2" style={{color: 'var(--color-primary)'}}>Stepchange Involvement</h4>
              <p className="text-sm" style={{color: 'var(--color-text-secondary)'}}>{featuredCompany.stepchangeInvolvement}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{color: 'var(--color-primary)'}}>Follow-on Investors</h4>
              <div className="flex flex-wrap gap-2">
                {featuredCompany.followOnInvestors.map((investor) => (
                  <span key={investor} className="px-2 py-1 rounded text-xs" style={{backgroundColor: 'var(--color-light-concrete)', color: 'var(--color-text-primary)'}}>
                    {investor}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Stats */}
      <div className="mb-16 floating-frame p-8" style={{background: 'linear-gradient(135deg, var(--color-background-secondary) 0%, var(--color-clean-white) 100%)'}}>
        <h2 className="text-2xl font-bold text-center mb-8" style={{color: 'var(--color-primary)'}}>Portfolio at a Glance</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold" style={{color: 'var(--color-urgent-copper)'}}>{portfolioCompanies.length + 1}</div>
            <div className="text-sm font-medium" style={{color: 'var(--color-text-secondary)'}}>Portfolio Companies</div>
          </div>
          <div>
            <div className="text-3xl font-bold" style={{color: 'var(--color-urgent-copper)'}}>4</div>
            <div className="text-sm font-medium" style={{color: 'var(--color-text-secondary)'}}>Core Sectors</div>
          </div>
          <div>
            <div className="text-3xl font-bold" style={{color: 'var(--color-urgent-copper)'}}>$50M+</div>
            <div className="text-sm font-medium" style={{color: 'var(--color-text-secondary)'}}>Follow-on Raised</div>
          </div>
          <div>
            <div className="text-3xl font-bold" style={{color: 'var(--color-urgent-copper)'}}>100+</div>
            <div className="text-sm font-medium" style={{color: 'var(--color-text-secondary)'}}>LP Network</div>
          </div>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{color: 'var(--color-primary)'}}>
          Our Companies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioCompanies.map((company) => (
            <div
              key={company.name}
              className="stepchange-card p-6 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg mr-4 flex items-center justify-center shadow-md" style={{background: 'linear-gradient(135deg, var(--color-urgent-copper) 0%, #d64916 100)'}}>
                    <span className="text-sm font-bold text-white">
                      {company.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold transition-colors" style={{color: 'var(--color-primary)'}}>
                      {company.website ? (
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="content-link"
                          style={{color: 'var(--color-primary)'}}
                        >
                          {company.name}
                        </a>
                      ) : (
                        company.name
                      )}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-2 py-1 rounded-full font-medium" style={{backgroundColor: 'rgba(197, 65, 13, 0.1)', color: 'var(--color-urgent-copper)'}}>
                        {company.category}
                      </span>
                      <span className="text-xs" style={{color: 'var(--color-text-secondary)'}}>
                        {company.stage} • {company.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm mb-3 leading-relaxed" style={{color: 'var(--color-text-primary)'}}>
                {company.description}
              </p>
              {company.metrics && (
                <div className="text-xs font-medium px-3 py-2 rounded-md" style={{color: 'var(--color-urgent-copper)', backgroundColor: 'rgba(197, 65, 13, 0.1)', border: `1px solid rgba(197, 65, 13, 0.2)`}}>
                  📊 {company.metrics}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}