import Markdown from "./components/markdown";
import HorizontalScroll from "./components/horizontal-scroll";
import homeContent from "./content/home.md";

// Mock data for horizontal scrolls - you can replace with real data sources
const stepchangeContent = [
  {
    title: "The Software Guide to Climate Tech",
    description: "A comprehensive guide to how software is accelerating the energy transition",
    date: "Dec 2024",
    url: "/software",
    source: "Climate Papa"
  },
  {
    title: "Why Product-Led Climate Companies Win",
    description: "How exceptional user experience drives adoption in climate technology",
    date: "Nov 2024",
    url: "https://stepchange.show/episodes/product-led-climate",
    source: "Stepchange Show"
  },
  {
    title: "The Infrastructure Upgrade Opportunity",
    description: "Why the energy transition is fundamentally about infrastructure software",
    date: "Oct 2024",
    url: "https://stepchange.show/episodes/infrastructure-upgrade",
    source: "Stepchange Show"
  },
];

const portfolioNews = [
  {
    title: "Bayou Energy Raises Series A",
    description: "AI-powered grid optimization platform secures $12M to expand across Texas",
    date: "Dec 2024",
    source: "TechCrunch"
  },
  {
    title: "itselectric Deploys 100th Curbside Charger",
    description: "Brooklyn-based EV charging company reaches major milestone in NYC",
    date: "Nov 2024",
    source: "Electrek"
  },
  {
    title: "Rhizome Partners with Major Utility",
    description: "Demand response platform signs deal with PG&E for statewide deployment",
    date: "Oct 2024",
    source: "Utility Dive"
  },
];

export default function Home() {
  return (
    <main className="max-w-screen-sm mx-auto px-6 my-20">
      <Markdown>{homeContent}</Markdown>

      <HorizontalScroll 
        title="Stepchange Content & News"
        items={stepchangeContent}
      />

      <HorizontalScroll 
        title="Portfolio News"
        items={portfolioNews}
      />

      <div className="py-16 border-t border-slate-200 mt-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Building the future of energy
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            We&apos;re looking for exceptional founders building product-led solutions 
            to accelerate the energy transition.
          </p>
          <a 
            href="/invest" 
            className="bg-sky-600 text-white px-8 py-3 rounded-md hover:bg-sky-700 transition-colors inline-block font-semibold"
          >
            Submit Your Company
          </a>
        </div>
      </div>
    </main>
  );
}
