import Markdown from "../components/markdown";

const aboutContent = `# About Stepchange

The energy transition is the greatest opportunity of our generation. Stepchange is an early-stage venture fund focused on climate technology, with a unique approach centered on **product-led companies**. 

We believe exceptional products are essential for driving energy abundance and accelerating infrastructure upgrades.

## Our Investment Philosophy

Founded by [Ben Eidelson](https://beneidelson.com) (ex-Stripe, Google) and Anay Shah (ex-Remitly, Tala), we invest in software solutions that make the energy transition faster, cheaper, and more reliable.

**We focus on four key areas:**

1. **Grid & Infrastructure** - Software to manage, optimize, and scale energy infrastructure
2. **Clean Energy Deployment** - Tools to accelerate renewable energy adoption  
3. **Industrial Decarbonization** - Solutions for heavy industry and manufacturing
4. **Energy Intelligence** - Data and analytics platforms for the energy transition

## Our Approach

- **Product-first** companies with exceptional user experience
- **Software-enabled** solutions that scale efficiently  
- **Experienced founders** building for real market needs
- **Early-stage focus** with follow-on support

> 📈 **Portfolio Highlights**
> We've backed 15+ companies across grid infrastructure, clean energy deployment, and energy intelligence platforms, with several achieving significant follow-on funding and customer traction.

## Why Now?

The energy transition requires unprecedented coordination between utilities, developers, regulators, and consumers. Software platforms that can orchestrate this complexity will be essential infrastructure for the next decade.

We're looking for founders building the picks and shovels of the energy transition - the developer tools, data platforms, and infrastructure software that will enable the clean energy economy.`;

export const metadata = {
  title: "About - Stepchange",
  description: "Learn about Stepchange's approach to climate technology investing and our focus on product-led companies accelerating the energy transition.",
  openGraph: {
    title: "About - Stepchange",
    description: "Learn about Stepchange's approach to climate technology investing and our focus on product-led companies accelerating the energy transition.",
    type: "website",
  },
};

export default function About() {
  return (
    <main className="max-w-screen-sm mx-auto px-6 my-20" style={{backgroundColor: 'var(--color-background-primary)'}}>
      <Markdown>{aboutContent}</Markdown>
    </main>
  );
}