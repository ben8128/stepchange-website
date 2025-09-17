import Markdown from "../components/markdown";
import Image from "next/image";

const teamContent = `# Team

## [Ben Eidelson](https://www.linkedin.com/in/beneidelson/)
**Managing Partner**

Ben is a two-time exited founder, graduate of Stanford Engineering, and product leader at Google and Stripe. He left Stripe to work on climate full-time in 2022.

Through angel investing in dozens of companies, LPing funds, and advising, he gained conviction in a major gap in understanding the role of great software products in climate.  

Ben's [Guide to Software in Climate Tech](https://climatepapa.com/software) has been read by over ten thousand product builders.

Ben is also the host of [Climate Papa](https://climatepapa.com), a podcast exploring climate change, parenthood, and technology and has interviewed leading climate founders, investors, and product leaders.

---

## [Anay Shah](https://www.linkedin.com/in/anayshah/)
**Managing Partner**

Anay is a fintech and climate tech operator who helped build two global fintech startups. He was the 10th employee at Remitly (international remittances)--led product, international expansion, and growth on the way to an IPO (2021). 

More recently, as SVP of Business at Tala (lending/payments), Anay oversaw a ~$80M P&L and a 250+ person team while helping raise over $200M as a member of the Exec Team.

Anay has lived and worked in 15+ emerging markets, including in India as an early employee at the global off-grid solar startup d.light. Anay brings his lived experience back to the climate crisis. He also serves on the board of The Sunrise Project, a global climate justice NGO, and a proud fellow &apos;Climate papa&apos;.

---

## Advisors

Leveraging talented hands-on advisors

**[Stephanie Hannon](https://www.linkedin.com/in/skhannon/)**  
Head of Product, Emerson | CPO Waze, Strava | CTO Hillary for America | Google Leader - Wave, Gmail, Maps

**[Ari Steinberg](https://www.linkedin.com/in/asteinberg/)**  
Director of Engineering Airbnb, Facebook | Started and led Facebook and Airbnb Seattle | Founder Vamo (acquired by Airbnb)

**[Ian Wong](https://www.linkedin.com/in/ian-wong/)**  
Co-founder, CTO Opendoor | Built Square Fraud

**[Bradley Horowitz](https://www.linkedin.com/in/bradleyhorowitz/)**  
VP Product & Advisor Google | Board Director Singtel | VP Yahoo | Angel investor in 150+ startups

**[David Kilroy](https://www.linkedin.com/in/davidfkilroy/)**  
Venture Fellow

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
            <div className="w-48 h-48 bg-slate-200 rounded-xl mx-auto mb-6 overflow-hidden shadow-2xl">
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
            <div className="w-48 h-48 bg-slate-200 rounded-xl mx-auto mb-6 overflow-hidden shadow-2xl">
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
    </main>
  );
}