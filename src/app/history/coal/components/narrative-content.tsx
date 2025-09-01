"use client"
/* eslint-disable react/no-unescaped-entities */

import type React from "react"

import { useEffect, useState } from "react"
import { Headphones, ChevronDown, ChevronUp } from "lucide-react"
import ScrollableTimeline from "./scrollable-timeline"
import { cn } from "../lib/utils"

// Define the timestamp mapping
const sectionTimestamps = {
  "section-creation": { timestamp: 370, part: 1 }, // 00:06:10
  "section-early-encounters": { timestamp: 826, part: 1 }, // 00:13:46
  "section-transformation": { timestamp: 1190, part: 1 }, // 00:19:50
  "section-coke": { timestamp: 2211, part: 1 }, // 00:36:51
  "section-steam": { timestamp: 3015, part: 1 }, // 00:50:15
  "section-watt": { timestamp: 3359, part: 1 }, // 00:55:59
  "section-manchester": { timestamp: 5065, part: 1 }, // 01:24:25
  "section-railways": { timestamp: 5344, part: 1 }, // 01:29:04
  "section-american-titans": { timestamp: 272, part: 2 }, // 00:04:32
  "section-electricity": { timestamp: 1575, part: 2 }, // 00:26:15
  "section-total-war": { timestamp: 3420, part: 2 }, // 00:57:00
  "section-disruption": { timestamp: 6457, part: 2 }, // 01:47:37
  "section-resistance": { timestamp: 8577, part: 2 }, // 02:22:57
  "section-asian-century": { timestamp: 6781, part: 2 }, // 01:53:01
  "section-india": { timestamp: 10470, part: 2 }, // 02:54:30
  "section-conclusion": { timestamp: 11000, part: 2 }, // Approximate
  "section-future": { timestamp: 11300, part: 2 }, // Approximate
  "section-lesson": { timestamp: 11600, part: 2 }, // Approximate
}

// Format timestamp to HH:MM:SS
function formatTimestamp(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = Math.floor(seconds % 60)

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
}

export default function NarrativeContent() {
  const [windowWidth, setWindowWidth] = useState(0)
  const [isTimelineOpen, setIsTimelineOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Set initial width
    setWindowWidth(window.innerWidth)

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id^="section-"]')
      let currentSection = null
      let minDistance = Number.POSITIVE_INFINITY

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const distance = Math.abs(rect.top)

        if (distance < minDistance) {
          minDistance = distance
          currentSection = section.id
        }
      })

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  // Handle audio navigation
  const navigateToTimestamp = (sectionId: string) => {
    const section = sectionTimestamps[sectionId as keyof typeof sectionTimestamps]
    if (section) {
      const customEvent = new CustomEvent("timelineNavigation", {
        detail: {
          timestamp: section.timestamp,
          part: section.part,
        },
      })
      document.dispatchEvent(customEvent)
    }
  }

  // Render clickable heading
  const ClickableHeading = ({ id, children }: { id: string; children: React.ReactNode }) => {
    const section = sectionTimestamps[id as keyof typeof sectionTimestamps]
    const [isHovered, setIsHovered] = useState(false)

    if (!section) return <h3 className="text-amber-900 font-medium text-xl mb-4">{children}</h3>

    return (
      <h3
        id={id}
        className={cn(
          "text-amber-900 font-medium text-xl mb-4 group relative cursor-pointer",
          isHovered && "text-amber-600"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => navigateToTimestamp(id)}
      >
        {children}

        <span
          className={cn(
            "inline-flex items-center ml-2 text-amber-700 transition-opacity",
            isHovered ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"
          )}
          title={`Play from ${formatTimestamp(section.timestamp)}`}
        >
          <Headphones className="h-4 w-4" />
          <span className="ml-1 text-xs">{formatTimestamp(section.timestamp)}</span>
        </span>
      </h3>
    )
  }

  // Mobile timeline toggle
  const showMobileTimeline = windowWidth <= 1023

  return (
    <>
      {/* Mobile timeline toggle - only visible on small screens */}
      {showMobileTimeline && (
        <div className="fixed top-0 left-0 right-0 z-40 bg-orange-50 border-b border-amber-400/40 shadow-sm">
          <button
            onClick={() => setIsTimelineOpen(!isTimelineOpen)}
            className="w-full flex items-center justify-between px-4 py-3 text-amber-900"
          >
            <span className="font-medium">
              {activeSection
                ? sectionTimestamps[activeSection as keyof typeof sectionTimestamps]?.part === 1
                  ? "Part I: "
                  : "Part II: "
                : ""}
              {activeSection &&
                activeSection
                  .replace("section-", "")
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
            </span>
            {isTimelineOpen ? (
              <ChevronUp className="h-4 w-4 text-amber-700" />
            ) : (
              <ChevronDown className="h-4 w-4 text-amber-700" />
            )}
          </button>
        </div>
      )}

      {/* Mobile timeline dropdown */}
      {showMobileTimeline && isTimelineOpen && <ScrollableTimeline className="mobile-only" />}

      {/* Add padding for mobile sticky header */}
      <div className={showMobileTimeline ? "pt-12" : ""}>
        <div className="prose prose-amber mx-auto">
          <h1 className="text-amber-900 font-medium text-3xl mb-6">
            The Black Rock That Built Our World: A Complete History of Coal
          </h1>

          <p className="text-amber-900 leading-relaxed">
            Picture this: everything you touched today—from the steel in your car to the concrete in your driveway, from
            the electricity in your phone to the very light you&apos;re reading by—has a dark secret. That secret is coal, a
            humble black rock that has shaped more of human history than perhaps any other substance on Earth.
          </p>

          <p className="text-amber-900 leading-relaxed">
            This isn&apos;t just a story about a fuel. It&apos;s the story of how ancient swamps became the foundation of empires,
            how a water problem in English coal mines led to the steam engine that powered the Industrial Revolution,
            and how the most successful climate campaign in U.S. history still couldn&apos;t stop King Coal&apos;s global reign.
            It&apos;s about invention and empire, labor uprisings and arms races, and the paradox of a resource that brought
            unprecedented prosperity while leaving a trail of human and environmental suffering in its wake.
          </p>

          <p className="text-amber-900 leading-relaxed">
            Even today, as solar panels gleam on rooftops and wind turbines spin in distant fields, coal remains the
            world&apos;s largest single source of electricity and humanity&apos;s biggest source of carbon emissions. To
            understand our present energy predicament—and our path forward—we must first understand the extraordinary
            story of coal.
          </p>

          <h2 className="text-amber-900 font-medium text-2xl mt-10 mb-4">
            Part I: From Ancient Swamps to Industrial Might
          </h2>

          <section id="section-creation" className="mb-12">
            <ClickableHeading id="section-creation">
              The Accidental Creation of Earth&apos;s Battery (400-300 Million Years Ago)
            </ClickableHeading>

            <p className="text-amber-900 leading-relaxed">
              Our story begins not in a Victorian coal mine or a modern power plant, but in the swampy forests of the
              Carboniferous period, when Earth was unrecognizable. Picture an oxygen-rich world where dragonflies had
              three-foot wingspans and millipedes grew as tall as humans. The atmosphere contained 35% oxygen—nearly
              twice today&apos;s concentration—fueling the growth of vast, dense forests that would cover much of what is now
              Europe, North America, and Asia.
            </p>

            <p className="text-amber-900 leading-relaxed">
              The key to coal&apos;s creation was incomplete decomposition. When these massive plants died and fell into
              swampy water, the low-oxygen environment prevented complete breakdown. Carbon, fixed by photosynthesis,
              remained trapped in accumulating plant debris. Over thousands of years, this organic matter compressed
              into peat—that dark, spongy material still used as fuel in Scotland and Ireland today.
            </p>

            <p className="text-amber-900 leading-relaxed">
              But the process didn&apos;t stop there. Over millions of years, subsequent layers of sediment buried the peat
              deposits. Intense pressure and heat drove out water and volatile compounds, progressively concentrating
              the carbon through a spectrum of coal ranks: from lignite (soft and brownish-black) to bituminous coal
              (the workhorse of the Industrial Revolution) to anthracite (almost pure carbon, shiny and black like
              crystalline shadow). The highest grade, anthracite, required such immense geological pressure that it only
              formed when continents collided and mountains rose.
            </p>

            <p className="text-amber-900 leading-relaxed">
              Essentially, geological processes had manufactured a dense, portable battery of ancient solar energy,
              waiting underground for humans to discover it.
            </p>
          </section>

          <section id="section-early-encounters" className="mb-12">
            <ClickableHeading id="section-early-encounters">Early Encounters: The Long Substitution</ClickableHeading>

            <p className="text-amber-900 leading-relaxed">
              Humans found and used coal sporadically for millennia. Archaeological evidence reveals its use in the
              Czech Republic 27,000 years ago, in China 5,500 years ago, and across ancient Greece, Rome, and the Aztec
              Empire. Marco Polo, during his legendary 17-year journey to China (1271-1295), marveled at the Chinese use
              of &quot;a kind of black stone existing in beds in the mountains, which they dig out and burn like firewood.&quot;
              The Chinese had mastered coal use for heating and iron-making while Europe still struggled with wood
              scarcity.
            </p>

            <p className="text-amber-900 leading-relaxed">
              In Britain, coal was initially called &quot;sea coal&quot; because it arrived by ship from Newcastle, distinguished
              from wood-derived &quot;charcoal.&quot; The Catholic Church, particularly around Newcastle, initially controlled
              significant coal lands, with bishops and monks serving as the unlikely coal barons of the medieval period.
            </p>

            <p className="text-amber-900 leading-relaxed">
              The primary constraint preventing wider adoption wasn&apos;t technology—it was abundance. England was forested.
              Wood was familiar, reliable, and well-understood. People knew how to store it, cook with it, and control
              its fire. Then came the pressure of deforestation. By the 1300s, rising timber prices around growing
              cities like London created intense economic incentive to find alternatives.
            </p>

            <p className="text-amber-900 leading-relaxed">
              This transition might have accelerated earlier, but the Black Death intervened. The plague of 1347-1351
              killed one in three Europeans and halved England&apos;s population from 6 million to less than 3 million.
              London&apos;s population plummeted from 100,000 to 25,000. Suddenly, pressure on forests eased. They grew back,
              delaying coal&apos;s widespread adoption for nearly two centuries.
            </p>
          </section>

          <section id="section-transformation" className="mb-12">
            <ClickableHeading id="section-transformation">
              The Great Transformation: Britain&apos;s Coal Revolution (1500s-1700s)
            </ClickableHeading>

            <p className="text-amber-900 leading-relaxed">
              By the 1500s, Britain&apos;s population had recovered, and the wood crisis returned with vengeance. Timber
              prices soared. The Royal Navy worried about shipbuilding materials. Citizens faced the stark choice
              between cold and costly wood. This was the moment coal stepped from the margins to center stage.
            </p>

            <p className="text-amber-900 leading-relaxed">
              King Henry VIII&apos;s marital frustrations inadvertently accelerated this transition. His break with Rome over
              his divorce from Catherine of Aragon led to the dissolution of monasteries and the transfer of church
              lands—including coal-rich territories—into private and Crown hands. These new owners proved far more
              motivated by commercial exploitation than the Church had been.
            </p>

            <p className="text-amber-900 leading-relaxed">
              But switching fuels wasn&apos;t simple. Coal burning required architectural revolution. Homes needed
              chimneys—previously, wood fires had simply risen through porous roofs. The drafts created by chimneys made
              floor-level living uncomfortable, leading to the invention of furniture with legs. Coal&apos;s higher
              temperatures required cast iron cookware, replacing the brass and copper vessels that cracked over coal
              fires.
            </p>

            <p className="text-amber-900 leading-relaxed">
              Despite these challenges, the economics were irresistible. London&apos;s coal consumption exploded from about
              15,000 tons per year in the early 1500s to nearly 500,000 tons by the 1650s—a more than thirty-fold
              increase. Coal became the primary domestic fuel, consuming 10-50% of household income.
            </p>
          </section>

          <section id="section-coke" className="mb-12">
            <ClickableHeading id="section-coke">The Coke Revolution: Iron Without Wood</ClickableHeading>

            <p className="text-amber-900 leading-relaxed">
              The reliance on wood-derived charcoal for iron smelting remained a crucial bottleneck. Britain imported
              most of its iron from wood-rich countries like Sweden. Using raw coal directly produced brittle,
              sulfur-contaminated iron.
            </p>

            <p className="text-amber-900 leading-relaxed">
              Enter Abraham Darby, born to a Quaker family in 1678. Working as a metalworker in Birmingham, he traveled
              to the Netherlands in 1704 for industrial espionage, learning Dutch techniques for making smooth cast-iron
              pots. But his real breakthrough came in 1709 at Coalbrookdale: using coke (coal baked to remove
              impurities) instead of charcoal in his blast furnace.
            </p>

            <p className="text-amber-900 leading-relaxed">
              Coke offered multiple advantages: it was porous (allowing better airflow), stronger (enabling larger
              furnace loads), and purer (preventing iron contamination). The process worked—iron ore, limestone flux,
              and coke combined with blasted air to produce carbon monoxide, which stripped oxygen from iron oxides,
              leaving molten pig iron.
            </p>

            <p className="text-amber-900 leading-relaxed">
              Though adoption was slow—coke-smelted iron was only a tiny fraction of total production in 1720—this
              innovation laid the foundation for everything that followed. It enabled mass production of cast iron using
              coal as the ultimate energy source, finally breaking the wood constraint. Darby&apos;s ironworks even supplied
              castings for the first steam engines.
            </p>
          </section>

          <section id="section-steam" className="mb-12">
            <ClickableHeading id="section-steam">Steam Power: The Problem That Solved Itself</ClickableHeading>

            <p className="text-amber-900 leading-relaxed">
              As coal demand grew, mines inevitably went deeper, hitting groundwater. Getting water out became the
              critical constraint on coal production. Early methods were laborious: bucket chains, hand pumps, or
              drainage tunnels sometimes miles long that required workers to crawl through spaces no wider than a
              coffin.
            </p>

            <p className="text-amber-900 leading-relaxed">
              The scientific establishment had been experimenting with steam power since the 1690s. Denis Papin
              demonstrated steam&apos;s potential; Thomas Savery patented the &quot;Miner&apos;s Friend&quot; in 1698. But these devices
              either had limited capacity or exploded from dangerous high-pressure steam.
            </p>

            <p className="text-amber-900 leading-relaxed">
              Thomas Newcomen, an ironmonger working near coal mines, was surrounded by miners desperate for a solution.
              He partnered with John Cawley, a practical metalworker, and in 1712 they produced the first practical
              atmospheric steam engine. Steam pushed a piston up; cold water injected into the cylinder condensed the
              steam, creating a vacuum; atmospheric pressure pushed the piston down, powering a pump.
            </p>

            <p className="text-amber-900 leading-relaxed">
              This was humanity&apos;s first machine to reliably convert heat into continuous mechanical work. It solved the
              water problem using coal to access more coal—a perfect feedback loop. Within decades, over 100 Newcomen
              engines operated across Europe. They were phenomenally inefficient, but that didn&apos;t matter when coal was
              free at the pit head.
            </p>
          </section>

          <section id="section-watt" className="mb-12">
            <ClickableHeading id="section-watt">Watt&apos;s Revolution: Efficiency and Beyond</ClickableHeading>

            <p className="text-amber-900 leading-relaxed">
              The Newcomen engine&apos;s wastefulness limited its use beyond mining. In 1763, James Watt, a mathematical
              instrument maker at Glasgow University (where he counted economist Adam Smith among his friends), was
              tasked with repairing a model Newcomen engine. Working alongside physicist Joseph Black, who had
              discovered carbon dioxide, Watt realized that most energy was wasted repeatedly heating and cooling the
              main cylinder.
            </p>

            <p className="text-amber-900 leading-relaxed">
              His solution, patented in 1769, was elegant: condense steam in a separate vessel kept constantly cool
              while maintaining the main cylinder at constant heat. This quadrupled efficiency. Bringing the innovation
              to market required Matthew Boulton, a Birmingham manufacturer whose factory depended on unreliable water
              power.
            </p>

            <p className="text-amber-900 leading-relaxed">
              The Boulton & Watt partnership became legendary. They licensed engines based on fuel savings—testament to
              their efficiency gains. In 1782, Watt developed rotary motion, making steam engines applicable beyond
              pumping. They could now power textile mills, flour mills, and countless other machinery anywhere coal
              could be delivered.
            </p>

            <p className="text-amber-900 leading-relaxed">
              Watt didn&apos;t just improve the steam engine; he redefined possibility. Factories no longer needed rivers for
              power. Coal gas lighting (a byproduct of coke production) freed them from daylight's constraints. The
              modern industrial world had arrived.
            </p>
          </section>

          <section id="section-manchester" className="mb-12">
            <ClickableHeading id="section-manchester">Manchester: The Shock City</ClickableHeading>

            <p className="text-amber-900 leading-relaxed">
              No place embodied this transformation like Manchester. Within decades, it evolved from a quiet market town
              to &quot;Cottonopolis&quot;—the world&apos;s first industrial city. By the 1830s, seven cotton mills employed more than a
              thousand workers each. Steam engines powered by coal enabled massive, centralized production.
            </p>

            <p className="text-amber-900 leading-relaxed">
              But abundance came with a price. Alexis de Tocqueville visited Manchester in 1835 and described its dual
              nature: &quot;From this foul drain, the greatest stream of human industry flows out to fertilize the whole
              world. From this filthy sewer, pure gold flows. Here humanity attains its most complete development and
              its most brutish. Here, civilization works its miracles, and civilized man is turned back almost into a
              savage.&quot;
            </p>

            <p className="text-amber-900 leading-relaxed">
              Coal smoke darkened skies, creating health crises. In some neighborhoods, rickets (caused by vitamin D
              deficiency from lack of sunlight) affected virtually every child. Mortality rates, especially for infants,
              were catastrophic. Factory workers, &quot;chained fast to the iron machine,&quot; worked 12-16 hour days in harsh
              conditions.
            </p>

            <p className="text-amber-900 leading-relaxed">
              This system's inequalities inspired new ideologies. Friedrich Engels, whose family owned a Manchester
              cotton mill, documented working conditions and financed Karl Marx's writings. The Communist Manifesto
              emerged directly from observations of coal-powered industrial capitalism's brutalities.
            </p>
          </section>

          <section id="section-railways" className="mb-12">
            <ClickableHeading id="section-railways">Railways: Coal Moving Coal</ClickableHeading>

            <p className="text-amber-900 leading-relaxed">
              Coal&apos;s transportation bottleneck persisted despite steam power. Moving coal overland cost three times the
              coal&apos;s original price. If it took £3 to ship coal from Newcastle to London by sea, that same £3 bought
              only 10 miles of land transport over muddy roads.
            </p>

            <p className="text-amber-900 leading-relaxed">
              Enter George Stephenson, born to a coal mining family in 1781. Growing up beside the rails that carried
              coal from mines to waterways, he became fascinated by steam engines. Starting as an assistant fireman by
              age 14, he learned to repair engines through intuition and night school literacy lessons.
            </p>

            <p className="text-amber-900 leading-relaxed">
              In 1814, Stephenson built his first locomotive at Killingworth mine. It could haul 30 tons uphill at 4
              mph. More importantly, he solved the complete system: suitable tracks, proper wheel design, and steam
              power coordination. His standard gauge—4 feet 8½ inches—remains the global standard today.
            </p>

            <p className="text-amber-900 leading-relaxed">
              The Liverpool-Manchester Railway in 1830 was the breakthrough. The world&apos;s first inter-city, purely
              locomotive railway carried passengers and goods with unprecedented speed and regularity. Stephenson&apos;s
              &quot;Rocket&quot; locomotive set the template, achieving speeds that seemed magical to observers.
            </p>

            <p className="text-amber-900 leading-relaxed">
              Railway mania followed. Britain built 250,000 miles of track by 1915, a fivefold increase from 1870. Coal
              finally had a transportation system worthy of its potential.
            </p>
          </section>

          <h2 className="text-amber-900 font-medium text-2xl mt-10 mb-4">Part II: The Global Century (1900-Present)</h2>

          <section id="section-american-titans" className="mb-12">
            <ClickableHeading id="section-american-titans">The American Titans (1901)</ClickableHeading>

            <p className="text-amber-900 leading-relaxed">
              By 1900, America was poised to become the world&apos;s industrial superpower. Two men embodied this
              transformation: J.P. Morgan, the financier who consolidated railroads and steel, and Andrew Carnegie, the
              steel magnate who made America the world&apos;s workshop.
            </p>

            <p className="text-amber-900 leading-relaxed">
              Morgan understood a fundamental truth: control transportation, control everything that moves on it.
              Starting with the Albany and Susquehanna Railroad in 1879, he systematically restructured the chaotic
              American rail network. His European connections provided capital, while his genius lay in seeing
              opportunity in crisis.
            </p>

            <p className="text-amber-900 leading-relaxed">
              When the coal-rich Reading Railroad faced bankruptcy, Morgan swooped in. Suddenly, he controlled both the
              railroads that moved coal and the mines that produced it. By consolidating rail lines from 53,000 miles in
              1870 to 250,000 miles by 1915, Morgan became the ultimate toll collector of American industry.
            </p>

            <p className="text-amber-900 leading-relaxed">
              Andrew Carnegie tackled steel's bottleneck. Born in Scotland, he rose from bobbin boy to telegraph
              operator to railroad executive. His genius was vertical integration—controlling every step from raw
              materials to finished products. By 1901, Carnegie Steel produced more steel than all of Britain.
            </p>
          </section>

          <section id="section-electricity" className="mb-12">
            <ClickableHeading id="section-electricity">
              Electricity: Coal&apos;s Invisible Revolution (1882)
            </ClickableHeading>

            <p className="text-amber-900 leading-relaxed">
              Thomas Edison&apos;s Pearl Street Station in 1882 marked electricity's commercial debut. This coal-fired power
              plant in lower Manhattan initially served just 85 customers with 400 light bulbs. By 1920, electricity
              powered 35% of American industry; by 1929, 70% of homes had electric service.
            </p>

            <p className="text-amber-900 leading-relaxed">
              Electricity transformed coal&apos;s potential. Previously, coal&apos;s energy could only be used at the point of
              combustion. Now, coal burned at centralized power plants could deliver energy to distant locations with
              minimal loss. This invisible revolution changed everything from factory layouts to domestic life.
            </p>

            <p className="text-amber-900 leading-relaxed">
              The battle between Edison&apos;s direct current (DC) and Tesla/Westinghouse's alternating current (AC)
              determined electricity's future. AC's ability to transmit power over long distances proved decisive,
              enabling the modern grid system. By the 1920s, utility consolidation created regional power networks, all
              primarily fueled by coal.
            </p>
          </section>

          <section id="section-total-war" className="mb-12">
            <ClickableHeading id="section-total-war">Total War: Coal as Strategic Weapon (1914)</ClickableHeading>

            <p className="text-amber-900 leading-relaxed">
              World War I was the first truly industrialized conflict, and coal powered both sides. Germany&apos;s initial
              war plans included seizing French coal fields. Britain&apos;s naval blockade targeted German coal exports. The
              United States' entry tipped the balance partly through its massive coal production capacity.
            </p>

            <p className="text-amber-900 leading-relaxed">
              Coal&apos;s strategic importance became even clearer after the war. The Treaty of Versailles transferred
              coal-rich Alsace-Lorraine from Germany to France. The Saar Basin, another coal-rich region, came under
              League of Nations administration. These territorial changes weren't just about nationalism—they were about
              energy security.
            </p>

            <p className="text-amber-900 leading-relaxed">
              World War II further demonstrated coal&apos;s military significance. Germany&apos;s synthetic fuel program converted
              coal to liquid fuels, sustaining the Nazi war machine despite limited oil access. Allied bombing
              specifically targeted coal transportation networks to cripple German industry.
            </p>
          </section>

          <section id="section-disruption" className="mb-12">
            <ClickableHeading id="section-disruption">
              The Great Disruption: American Coal&apos;s Rise and Fall (1945-2015)
            </ClickableHeading>

            <p className="text-amber-900 leading-relaxed">
              Post-war America experienced unprecedented prosperity, with coal powering much of it. Coal production
              peaked in the 1990s at over 1 billion tons annually. But this dominance contained seeds of its own
              disruption.
            </p>

            <p className="text-amber-900 leading-relaxed">
              The Clean Air Act of 1970 marked the beginning of coal&apos;s regulatory challenges. Initially focused on
              sulfur dioxide and particulate matter, regulations gradually tightened. The 1990 amendments created the
              acid rain program, targeting power plant emissions through an innovative cap-and-trade system.
            </p>

            <p className="text-amber-900 leading-relaxed">
              Meanwhile, technological disruption arrived from an unexpected source: hydraulic fracturing. The &quot;fracking
              revolution&quot; unlocked vast natural gas reserves, creating a cheaper, cleaner alternative to coal for
              electricity generation. Between 2007 and 2020, coal&apos;s share of U.S. electricity generation plummeted from
              50% to under 20%.
            </p>
          </section>

          <section id="section-asian-century" className="mb-12">
            <ClickableHeading id="section-asian-century">
              The Asian Century: China and India (1950s-Present)
            </ClickableHeading>

            <p className="text-amber-900 leading-relaxed">
              As coal declined in the West, it surged in Asia. China&apos;s economic reforms under Deng Xiaoping prioritized
              rapid industrialization powered by coal. From 1990 to 2020, China&apos;s coal consumption grew from 1 billion
              to over 4 billion tons annually—half the world&apos;s total.
            </p>

            <p className="text-amber-900 leading-relaxed">
              This coal-powered growth lifted hundreds of millions from poverty but created severe environmental
              problems. By the 2010s, air pollution in Chinese cities reached crisis levels. The &quot;airpocalypse&quot; of 2013,
              when Beijing&apos;s air quality index exceeded 800 (the scale normally ends at 500), forced policy changes.
            </p>

            <p className="text-amber-900 leading-relaxed">
              China now leads in renewable energy deployment while still building coal plants. This paradoxical approach
              reflects the tension between economic growth imperatives and environmental concerns. China&apos;s coal
              consumption appears to have plateaued, but at a level that makes global climate goals challenging.
            </p>
          </section>

          <section id="section-resistance" className="mb-12">
            <ClickableHeading id="section-resistance">The Resistance and the Reckoning (2005-2012)</ClickableHeading>

            <p className="text-amber-900 leading-relaxed">
              As climate change awareness grew, coal faced unprecedented opposition. The Sierra Club&apos;s &quot;Beyond Coal&quot;
              campaign, launched in 2002 with modest goals, expanded dramatically after receiving $50 million from
              Michael Bloomberg in 2011. The campaign helped prevent construction of 200+ proposed coal plants and
              accelerated retirement of existing facilities.
            </p>

            <p className="text-amber-900 leading-relaxed">
              This resistance coincided with economic headwinds. Major coal companies like Peabody Energy and Arch Coal
              declared bankruptcy. Coal mining employment, already declining for decades due to mechanization, fell
              further. Coal communities across Appalachia and the Midwest faced painful transitions.
            </p>

            <p className="text-amber-900 leading-relaxed">
              The coal industry's political influence remained strong despite economic decline. The Trump administration
              attempted to reverse coal&apos;s fortunes through regulatory rollbacks and subsidies, but market forces proved
              stronger than policy. Coal plant retirements actually accelerated between 2016 and 2020.
            </p>
          </section>

          <section id="section-india" className="mb-12">
            <ClickableHeading id="section-india">India: The Second Giant (1947-Present)</ClickableHeading>

            <p className="text-amber-900 leading-relaxed">
              India&apos;s coal story parallels China&apos;s but lags by about 15-20 years. After independence in 1947, India
              nationalized its coal industry, creating Coal India Limited—now the world&apos;s largest coal mining company.
              Coal provides about 70% of India&apos;s electricity and remains central to development plans.
            </p>

            <p className="text-amber-900 leading-relaxed">
              India faces unique challenges. Its coal reserves contain high ash content, reducing efficiency. Its rail
              network, though extensive, struggles to transport sufficient coal. Power theft and distribution losses
              exceed 20% in many regions. Despite these constraints, India&apos;s coal consumption continues growing.
            </p>

            <p className="text-amber-900 leading-relaxed">
              Like China, India pursues renewable energy aggressively while expanding coal use. Prime Minister Modi set
              ambitious solar targets while also auctioning new coal blocks. This &quot;all of the above&quot; approach reflects
              India&apos;s priority: providing electricity to hundreds of millions who still lack reliable access.
            </p>
          </section>

          <section id="section-conclusion" className="mb-12">
            <ClickableHeading id="section-conclusion">The Reckoning: Climate, Health, and Justice</ClickableHeading>

            <p className="text-amber-900 leading-relaxed">
              Coal&apos;s legacy is complex. This humble black rock powered humanity&apos;s greatest technological leaps, lifted
              billions from poverty, and created modern civilization. Yet it also became history's biggest source of
              carbon emissions—responsible for roughly half a degree Celsius of global warming, about 40% of the total
              increase since industrialization.
            </p>

            <p className="text-amber-900 leading-relaxed">
              The human cost has been staggering. From children working in Victorian mines to modern coal communities
              suffering from the &quot;resource curse,&quot; extractive industries have rarely benefited those who live atop the
              resources. Appalachia remains one of America&apos;s poorest regions despite producing billions of tons of coal.
            </p>

            <p className="text-amber-900 leading-relaxed">
              The environmental consequences are equally stark. Coal combustion releases not just CO2 but also sulfur
              dioxide (causing acid rain), nitrogen oxides (creating smog), particulate matter (harming lungs), and
              heavy metals like mercury. Even with modern pollution controls, coal remains the dirtiest major fuel
              source.
            </p>
          </section>

          <section id="section-future" className="mb-12">
            <ClickableHeading id="section-future">The Future: King Coal&apos;s Twilight?</ClickableHeading>

            <p className="text-amber-900 leading-relaxed">
              Today, coal remains the world&apos;s largest source of electricity, powering over 35% of global generation. Yet
              its dominance is finally being challenged. Natural gas offers a cleaner alternative, while renewable
              energy costs have plummeted. In many markets, solar and wind now compete with coal on pure economics.
            </p>

            <p className="text-amber-900 leading-relaxed">
              The United States burned its last ton of coal in 2023, with the final plant closing in a ceremony attended
              by former miners. The United Kingdom, birthplace of the coal-powered Industrial Revolution, has been
              coal-free since 2024. Western Europe follows suit, with country after country eliminating coal from their
              energy mix.
            </p>

            <p className="text-amber-900 leading-relaxed">
              But the global picture remains complicated. China continues burning record amounts of coal while
              simultaneously installing more renewable energy than any other nation. India&apos;s coal consumption shows no
              signs of slowing. Other developing nations face the same choice that confronted Britain 300 years ago: use
              available fossil fuels for rapid development or attempt an unprecedented leap to clean energy.
            </p>
          </section>

          <section id="section-lesson" className="mb-12">
            <ClickableHeading id="section-lesson">Coal&apos;s Eternal Lesson</ClickableHeading>

            <p className="text-amber-900 leading-relaxed">
              The coal story teaches us that energy transitions are never simple. They depend on geology, technology,
              economics, politics, and human ingenuity. They create winners and losers, reshape societies, and carry
              unintended consequences that echo across generations.
            </p>

            <p className="text-amber-900 leading-relaxed">
              As we stand at another energy crossroads, debating the future of fossil fuels and the promise of
              renewables, coal&apos;s history offers crucial lessons. Technology alone doesn&apos;t determine outcomes—economics,
              politics, and human needs ultimately prevail. The most successful energy policies work with market forces
              rather than against them.
            </p>

            <p className="text-amber-900 leading-relaxed">
              Most importantly, coal&apos;s story reminds us that our current energy system, however entrenched it seems,
              evolved through countless individual decisions, technological breakthroughs, and policy choices. What
              humans built, we can rebuild.
            </p>

            <p className="text-amber-900 leading-relaxed">
              The age of coal may be nearing its end, but its shadow will stretch far into the future. Every ton of CO2
              from coal-fired power plants will warm our atmosphere for decades. Every coal community must grapple with
              economic transition. Every kilowatt-hour of renewable energy represents a choice to write a different
              chapter in humanity&apos;s energy story.
            </p>

            <p className="text-amber-900 leading-relaxed">
              King Coal ruled for three centuries, transforming civilization and leaving an indelible mark on our
              planet. Now, as renewable energy costs plummet and climate pressures mount, we&apos;re witnessing what may be
              the final chapter of this extraordinary reign. The question isn&apos;t whether coal&apos;s dominance will end, but
              how quickly, and whether we can manage the transition in a way that preserves the benefits while avoiding
              the mistakes of our coal-powered past.
            </p>

            <p className="text-amber-900 leading-relaxed">
              The black rock that built our world is finally relinquishing its throne. What comes next will define
              humanity&apos;s next chapter.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}