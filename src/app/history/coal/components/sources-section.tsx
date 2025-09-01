"use client"

import React, { useState } from "react"
import { ExternalLink } from "lucide-react"

// Custom Accordion components to replace shadcn/ui
const Accordion = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full">
    {children}
  </div>
)

const AccordionItem = ({ 
  value, 
  children,
  isOpen,
  onToggle
}: { 
  value: string; 
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="border-b border-amber-200">
    {React.Children.map(children, (child) =>
      React.isValidElement(child)
        ? React.cloneElement(child, { isOpen, onToggle } as any)
        : child
    )}
  </div>
)

const AccordionTrigger = ({ 
  children,
  isOpen,
  onToggle,
  className 
}: { 
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}) => (
  <button
    className={`flex justify-between items-center w-full py-4 text-left hover:bg-orange-50 transition-colors ${className}`}
    onClick={onToggle}
  >
    <span>{children}</span>
    <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
      ▼
    </span>
  </button>
)

const AccordionContent = ({ 
  children,
  isOpen 
}: { 
  children: React.ReactNode;
  isOpen?: boolean;
}) => (
  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen pb-4' : 'max-h-0'}`}>
    {children}
  </div>
)

// Custom Card components
const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}>
    {children}
  </div>
)

const CardHeader = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
    {children}
  </div>
)

const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>
    {children}
  </h3>
)

const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="p-6 pt-0">
    {children}
  </div>
)

export default function SourcesSection() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({})

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-medium mb-6 text-center text-amber-900">Sources & References</h2>

      <Card className="border-amber-400/20 bg-orange-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-amber-900">Research Materials & References</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion>
            <AccordionItem 
              value="core-research" 
              isOpen={openSections["core-research"]} 
              onToggle={() => toggleSection("core-research")}
            >
              <AccordionTrigger className="text-base font-medium text-amber-900">
                Core Research & Materials
              </AccordionTrigger>
              <AccordionContent isOpen={openSections["core-research"]}>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 text-amber-900">Key Books</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <a
                          href="https://www.barbarafreese.com/coal-a-human-history"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          Freese, Barbara. Coal: A Human History
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.amazon.com/Domestic-Revolution-Introduction-Victorian-Everything/dp/1631497634"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          Goodman, Ruth. The Domestic Revolution: How the Introduction of Coal into Victorian Homes
                          Changed Everything
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.amazon.com/Black-Gold-History-Coal-Britain/dp/0008128340"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          Paxman, Jeremy. Black Gold: The History of How Coal Made Britain
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.gutenberg.org/ebooks/7522"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          Sinclair, Upton. King Coal: a Novel (fiction)
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 text-amber-900">Interviews</h4>
                    <ul className="list-disc pl-5 space-y-1 text-amber-800">
                      <li>Barbara Freese, 12/12/24</li>
                      <li>Johnston Suter, 1/6/24</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="geological-historical"
              isOpen={openSections["geological-historical"]} 
              onToggle={() => toggleSection("geological-historical")}
            >
              <AccordionTrigger className="text-base font-medium text-amber-900">
                Geological & Historical Foundation
              </AccordionTrigger>
              <AccordionContent isOpen={openSections["geological-historical"]}>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 text-amber-900">Geological History</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <a
                          href="https://en.wikipedia.org/wiki/Carboniferous"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          The Carboniferous Period
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://dinosaurpictures.org/ancient-earth#0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          Earth's Historical Timeline Visualization
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://nma.org/wp-content/uploads/2016/09/Map-Coal-Bearing-Areas-of-the-United-States-1.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          Coal-Bearing Areas of the United States
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://pubs.usgs.gov/gip/dynamic/historical.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          USGS: Coal Resources and Historical Production
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://factsanddetails.com/china/cat2/4sub8/entry-5456.html#chapter-1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          Coal Mining in Ancient China
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://en.wikipedia.org/wiki/Coal-mining_region"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          Coal Mining Regions
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 text-amber-900">Global Historical Context</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <a
                          href="https://en.wikipedia.org/wiki/Five-year_plans_of_the_Soviet_Union"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          Five-year plans of the Soviet Union
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.scientificamerican.com/article/the-trans-siberian-railroad/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          The Trans-Siberian Railroad
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.historylink.org/File/20978"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          Seattle Gas Works
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="industrial-revolution"
              isOpen={openSections["industrial-revolution"]} 
              onToggle={() => toggleSection("industrial-revolution")}
            >
              <AccordionTrigger className="text-base font-medium text-amber-900">
                Industrial Revolution & Technological Development
              </AccordionTrigger>
              <AccordionContent isOpen={openSections["industrial-revolution"]}>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 text-amber-900">Industrial Development</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <a
                          href="https://ourworldindata.org/grapher/population?time=1100..latest&country=~GBR"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          British Population Growth (1100-Present)
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://en.wikipedia.org/wiki/Industrial_Revolution"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          The Industrial Revolution
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 text-amber-900">Evolution of Steam Power</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <a
                          href="https://en.wikipedia.org/wiki/History_of_the_steam_engine"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          History of the Steam Engine
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://en.wikipedia.org/wiki/Newcomen_atmospheric_engine"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          Newcomen Atmospheric Engine
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 text-amber-900">Key Industrial Figures</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <a
                          href="https://en.wikipedia.org/wiki/Abraham_Darby_I"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          Abraham Darby I
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://en.wikipedia.org/wiki/James_Watt"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          James Watt
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://en.wikipedia.org/wiki/Matthew_Boulton"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          Matthew Boulton
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://en.wikipedia.org/wiki/George_Stephenson"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          George Stephenson
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="social-labor"
              isOpen={openSections["social-labor"]} 
              onToggle={() => toggleSection("social-labor")}
            >
              <AccordionTrigger className="text-base font-medium text-amber-900">Social & Labor History</AccordionTrigger>
              <AccordionContent isOpen={openSections["social-labor"]}>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 text-amber-900">Social Impact and Labor History</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <a
                          href="https://en.wikipedia.org/wiki/Friedrich_Engels"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          Friedrich Engels
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://en.wikipedia.org/wiki/Great_Smog_of_London"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          The Great Smog of London (1952)
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://en.wikipedia.org/wiki/Centralia_mine_fire"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          The Centralia Mine Fire
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 text-amber-900">Labor, Politics & Social Movements</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <a
                          href="https://en.wikipedia.org/wiki/1926_United_Kingdom_general_strike"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          1926 United Kingdom general strike
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://en.wikipedia.org/wiki/John_L._Lewis"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          John L. Lewis
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem 
              value="contemporary-energy"
              isOpen={openSections["contemporary-energy"]} 
              onToggle={() => toggleSection("contemporary-energy")}
            >
              <AccordionTrigger className="text-base font-medium text-amber-900">
                Contemporary Energy Data & Environmental Context
              </AccordionTrigger>
              <AccordionContent isOpen={openSections["contemporary-energy"]}>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 text-amber-900">Modern Context & Global Consumption</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <a
                          href="https://ourworldindata.org/grapher/coal-consumption-by-country-terawatt-hours-twh?tab=chart"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          Global Coal Consumption Trends
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://ourworldindata.org/emissions-by-fuel"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          Emissions by Fuel Type
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 text-amber-900">Energy Data & Long-Term Trends</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        <a
                          href="https://www.eia.gov/energyexplained/coal/use-of-coal.php"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          Use of coal - EIA
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://ourworldindata.org/fossil-fuels"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          Fossil fuels – Our World in Data
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://ourworldindata.org/co2-and-greenhouse-gas-emissions"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-900 hover:text-amber-600 flex items-center"
                        >
                          CO₂ and greenhouse gas emissions – Our World in Data
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}