import Markdown from "../components/markdown";

const teamContent = `# Team

## Ben Eidelson
**Managing Partner**

Ben is a climate papa and Managing Partner at Stepchange. Previously, he led product at Stripe for infrastructure and developer tools, and worked on search quality at Google. He's the host of [Climate Papa](https://climatepapa.com) and co-host of [Stepchange](https://stepchange.show/) podcasts.

Ben is passionate about the intersection of technology, climate, and parenthood. He believes software products will be essential for accelerating the energy transition.

**Background:**
- Product Leader at Stripe (Infrastructure, Developer Platform)
- Search Quality at Google
- Stanford University (B.S. Computer Science)

**Investments:** Bayou Energy, itselectric, Rhizome, Eli, Nevoya, Audette, CapeZero, WattBot, FutureProof

---

## Anay Shah
**Managing Partner**

Anay is a fintech and climate tech operator who helped build two global fintech startups. He was the 10th employee at Remitly (international remittances)—led product, international expansion, and growth on the way to an IPO (2021). 

More recently, as SVP of Business at Tala (lending/payments), Anay oversaw a ~$80M P&L and a 250+ person team while helping raise over $200M as a member of the Exec Team.

Anay has lived and worked in 15+ emerging markets, including in India as an early employee at the global off-grid solar startup d.light. Anay brings his lived experience back to the climate crisis. He also serves on the board of The Sunrise Project, a global climate justice NGO, and a proud fellow 'Climate papa'.

**Background:**
- SVP of Business at Tala
- VP of Product at Remitly (10th employee → IPO)
- Early employee at d.light (off-grid solar)
- Product roles at Microsoft
- University of Washington (B.S. Computer Science)

**Investments:** LGND, Skyward, Shovels, Abode, Ezra Climate

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

export default function Team() {
  return (
    <main className="max-w-screen-sm mx-auto px-6 my-20">
      <div className="mb-16">
        <div className="flex flex-col md:flex-row gap-12 items-start mb-12">
          <div className="flex-1 text-center">
            <div className="w-48 h-48 bg-slate-200 rounded-full mx-auto mb-6 overflow-hidden shadow-2xl ring-4 ring-slate-200">
              <div className="w-full h-full bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center text-white text-2xl font-bold">
                BE
              </div>
            </div>
          </div>
          <div className="flex-1 text-center">
            <div className="w-48 h-48 bg-slate-200 rounded-full mx-auto mb-6 overflow-hidden shadow-2xl ring-4 ring-slate-200">
              <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white text-2xl font-bold">
                AS
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Markdown>
        {teamContent}
      </Markdown>
    </main>
  );
}