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
      <div className="mb-16 bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg">
        {/* Hero Image */}
        <div className="h-64 bg-gradient-to-r from-sky-50 to-blue-50 relative overflow-hidden">
          <img 
            src={featuredCompany.heroImage}
            alt={`${featuredCompany.name} visualization`}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
            <span className="text-sm font-medium text-sky-700">Investment #{featuredCompany.investmentNumber}</span>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{featuredCompany.name}</h3>
                <p className="text-lg text-gray-600 mb-2">{featuredCompany.tagline}</p>
                <div className="flex items-center gap-3">
                  <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredCompany.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {featuredCompany.stage} • {featuredCompany.year}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Link
                href="/portfolio/bayou-energy"
                className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors text-sm font-medium"
              >
                View Details
              </Link>
              <a
                href="https://www.bayou.energy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
              >
                Visit Website
              </a>
            </div>
          </div>

          {/* Investment Thesis */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">Investment Thesis</h4>
            <p className="text-gray-600 leading-relaxed">{featuredCompany.investmentThesis}</p>
          </div>

          {/* Key Metrics */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Key Metrics & Position</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {featuredCompany.keyMetrics.map((metric, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-sm text-gray-700">{metric}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Founders */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Founders</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {featuredCompany.founders.map((founder) => (
                <div key={founder.name} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-sm font-bold text-white">
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{founder.name}</div>
                    <div className="text-sm text-gray-600">{founder.role}</div>
                    <div className="text-xs text-gray-500">{founder.background}</div>
                  </div>
                  <a
                    href={founder.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:text-sky-700 transition-colors text-sm"
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
              <h4 className="font-semibold text-gray-900 mb-2">Stepchange Involvement</h4>
              <p className="text-gray-600 text-sm">{featuredCompany.stepchangeInvolvement}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Follow-on Investors</h4>
              <div className="flex flex-wrap gap-2">
                {featuredCompany.followOnInvestors.map((investor) => (
                  <span key={investor} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                    {investor}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Stats */}
      <div className="mb-16 bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-8 border border-sky-100">
        <h2 className="text-2xl font-bold text-center mb-8 text-slate-900">Portfolio at a Glance</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-sky-600">{portfolioCompanies.length + 1}</div>
            <div className="text-sm text-slate-600 font-medium">Portfolio Companies</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-sky-600">4</div>
            <div className="text-sm text-slate-600 font-medium">Core Sectors</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-sky-600">$50M+</div>
            <div className="text-sm text-slate-600 font-medium">Follow-on Raised</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-sky-600">100+</div>
            <div className="text-sm text-slate-600 font-medium">LP Network</div>
          </div>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Companies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioCompanies.map((company) => (
            <div
              key={company.name}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 rounded-lg mr-4 flex items-center justify-center shadow-md">
                    <span className="text-sm font-bold text-white">
                      {company.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
                      {company.website ? (
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {company.name}
                        </a>
                      ) : (
                        company.name
                      )}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded-full font-medium">
                        {company.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {company.stage} • {company.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {company.description}
              </p>
              {company.metrics && (
                <div className="text-xs text-sky-600 font-medium bg-sky-50 px-3 py-2 rounded-md border border-sky-100">
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