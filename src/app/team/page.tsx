import Markdown from "../components/markdown";
import Image from "next/image";
import Timeline from "../components/timeline";

const teamContent = `# Team

## Ben Eidelson
**Managing Partner**

Ben is a climate papa and Managing Partner at Stepchange. He brings deep product expertise from building developer infrastructure used by millions at Stripe, where he led product for the Infrastructure and Developer Platform teams. Prior to Stripe, he worked on search quality and ranking algorithms at Google, directly impacting search results for billions of users worldwide.

Ben is the host of the [Climate Papa](https://climatepapa.com) podcast and co-host of the [Stepchange](https://stepchange.show/) podcast, where he explores the intersection of technology, climate solutions, and parenthood. His content reaches thousands of climate-focused founders, operators, and investors monthly.

Ben's investment thesis centers on the belief that exceptional software products will be essential for accelerating the energy transition. He focuses on product-led companies with strong user adoption metrics and clear paths to scale. His technical background allows him to deeply evaluate software architecture, user experience, and go-to-market strategies.

**Background:**
- Product Leader at Stripe (2018-2024) - Infrastructure & Developer Platform teams
- Software Engineer at Google (2014-2018) - Search Quality & Ranking
- Stanford University (2010-2014) - B.S. Computer Science, Systems focus

**Investment Focus:** Product-led climate tech, developer tools, infrastructure software
**Key Investments:** Bayou Energy, itselectric, Rhizome, Eli, Nevoya, Audette, CapeZero, WattBot, FutureProof

**Personal:** Based in San Francisco, climate podcast host, father of two, avid cyclist

---

## Anay Shah
**Managing Partner**

Anay is a fintech and climate tech operator who helped build two global fintech startups from early stage to IPO and billions in valuation. He was the 10th employee at Remitly (international remittances) where he led product, international expansion, and growth strategy through the company's IPO in 2021 at a $7B valuation.

Most recently, as SVP of Business at Tala (mobile lending and payments), Anay oversaw an ~$80M P&L and managed a 250+ person team across 5 countries while serving on the executive team that raised over $200M in venture funding. At Tala, he drove the expansion into new markets including India, the Philippines, and Mexico, scaling the platform to serve millions of underbanked customers.

Earlier in his career, Anay gained deep experience in emerging markets as an early employee at d.light, the global off-grid solar startup that has impacted 100M+ lives across Africa, Asia, and Latin America. His time living and working across 15+ emerging markets gives him unique insights into global energy access challenges and opportunities.

Anay's passion for climate stems from his lived experience seeing energy poverty firsthand in emerging markets, combined with his technical background in scaling products to serve underserved populations. He serves on the board of The Sunrise Project, a global climate justice NGO, and is a proud fellow 'Climate Papa' alongside Ben.

**Background:**
- SVP of Business at Tala (2021-2024) - $80M P&L, 250+ team, $200M+ raised
- VP of Product at Remitly (2016-2021) - 10th employee through $7B IPO
- Early employee at d.light (2012-2016) - Off-grid solar across emerging markets
- Product Manager at Microsoft (2010-2012) - Consumer and enterprise products
- University of Washington (2006-2010) - B.S. Computer Science & Economics

**Investment Focus:** Fintech infrastructure, emerging market solutions, energy access
**Key Investments:** LGND, Skyward, Shovels, Abode, Ezra Climate

**Personal:** Based in Seattle, frequent traveler to emerging markets, father of two, climate justice advocate

---

## Our Approach

We're operators-turned-investors who understand what it takes to build exceptional products. Our background in product development, user experience, and scaling technology companies informs how we evaluate and support our portfolio.

**What we bring:**
- Product development expertise
- Go-to-market strategy
- Technical architecture guidance
- Network of product leaders and founders
- Hands-on support without micromanagement

**Investment Committee:**
Our investment decisions are made by Ben and Anay, with input from our network of 100+ LP investors who are primarily founders and product leaders themselves.`;

// Timeline data based on PDF slide 12
const benTimeline = [
  {
    year: "2018-2024",
    company: "Stripe",
    role: "Product Lead",
    description: "Led product for infrastructure and developer tools, scaling platforms used by millions of developers globally"
  },
  {
    year: "2014-2018",
    company: "Google",
    role: "Software Engineer",
    description: "Worked on search quality and ranking algorithms, improving search results for billions of users"
  },
  {
    year: "2010-2014",
    company: "Stanford University",
    role: "B.S. Computer Science",
    description: "Studied computer science with focus on systems and algorithms"
  },
  {
    year: "2024",
    company: "Stepchange",
    role: "Managing Partner",
    description: "Co-founded early-stage climate tech fund focused on product-led companies"
  }
];

const anayTimeline = [
  {
    year: "2021-2024",
    company: "Tala",
    role: "SVP of Business",
    description: "Oversaw ~$80M P&L and 250+ person team, helped raise $200M+ as executive team member"
  },
  {
    year: "2016-2021",
    company: "Remitly",
    role: "VP of Product",
    description: "10th employee, led product and international expansion through IPO in 2021"
  },
  {
    year: "2012-2016",
    company: "d.light",
    role: "Early Employee",
    description: "Helped scale off-grid solar startup across 15+ emerging markets"
  },
  {
    year: "2010-2012",
    company: "Microsoft",
    role: "Product Manager",
    description: "Product roles in consumer and enterprise software"
  },
  {
    year: "2006-2010",
    company: "University of Washington",
    role: "B.S. Computer Science",
    description: "Studied computer science and business fundamentals"
  },
  {
    year: "2024",
    company: "Stepchange",
    role: "Managing Partner",
    description: "Co-founded early-stage climate tech fund, bringing fintech and emerging markets expertise"
  }
];

export default function Team() {
  return (
    <main className="max-w-screen-sm mx-auto px-6 my-20">
      <div className="mb-16">
        <div className="flex flex-col md:flex-row gap-12 items-start mb-12">
          <div className="flex-1 text-center">
            <div className="w-48 h-48 bg-slate-200 rounded-full mx-auto mb-6 overflow-hidden shadow-2xl ring-4 ring-slate-200">
              <Image
                src="/images/team/ben.jpg"
                alt="Ben Eidelson"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="w-48 h-48 bg-slate-200 rounded-full mx-auto mb-6 overflow-hidden shadow-2xl ring-4 ring-slate-200">
              <Image
                src="/images/team/anay.jpeg"
                alt="Anay Shah"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <Markdown>
        {teamContent}
      </Markdown>
      
      {/* Career Timelines */}
      <div className="mt-16 pt-16 border-t border-slate-200">
        <h2 className="text-3xl font-bold mb-12 text-slate-900">Career Journeys</h2>
        <div className="space-y-16">
          <Timeline name="Ben" items={benTimeline} />
          <Timeline name="Anay" items={anayTimeline} />
        </div>
      </div>
    </main>
  );
}