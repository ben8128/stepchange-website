import Markdown from "../components/markdown";

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

const portfolioCompanies = [
  {
    name: "Bayou Energy",
    category: "Grid & Infrastructure",
    description: "AI-powered grid optimization platform",
    website: "https://bayouenergy.com",
  },
  {
    name: "itselectric",
    category: "Grid & Infrastructure", 
    description: "Curbside EV charging without electrical upgrades",
    website: "https://itselectric.com",
  },
  {
    name: "Rhizome",
    category: "Grid & Infrastructure",
    description: "Demand response platform for utilities",
    website: "https://rhizome.energy",
  },
  {
    name: "Eli",
    category: "Clean Energy",
    description: "Solar project development software",
    website: "https://eli.solar",
  },
  {
    name: "Nevoya",
    category: "Clean Energy",
    description: "Wind energy analytics platform",
    website: "https://nevoya.com",
  },
  {
    name: "Audette",
    category: "Clean Energy",
    description: "Residential solar design and sales software",
    website: "https://audette.io",
  },
];

const categories = [
  "Grid & Infrastructure",
  "Clean Energy", 
  "Industrial",
  "Intelligence"
];

export default function Portfolio() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <Markdown className="prose prose-lg max-w-4xl mb-16">
        {portfolioContent}
      </Markdown>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Companies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioCompanies.map((company) => (
            <div
              key={company.name}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg mr-4 flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-600">
                    {company.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {company.website ? (
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                      >
                        {company.name}
                      </a>
                    ) : (
                      company.name
                    )}
                  </h4>
                  <span className="text-xs text-gray-500">{company.category}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                {company.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}