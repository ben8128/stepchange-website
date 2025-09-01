"use client";

import { useEffect, useState } from "react";
import { kebabCase } from "lodash";
import {
  CheckIcon,
  LinkIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";
// import Tippy from "@tippyjs/react"; // Disabled due to React 19 ref issues
import { StaticImageData } from "next/image";

import Markdown from "../components/markdown";
import softwareGuideContent from "../content/software-guide.md";
import SectionLink from "./section_link";
import ShareButton from "./share_button";

// For now disabling icons - we can add actual icons later
// const placeholderIcon = "/images/placeholder-icon.png";

type Section = {
  title: string;
  icon: StaticImageData | string;
};

const SECTIONS = [
  { title: "Introduction", icon: "" },
  { title: "What is the product?", icon: "" },
  { title: "Who do you serve?", icon: "" },
  { title: "How do you learn?", icon: "" },
  { title: "What should you do?", icon: "" },
  { title: "Some closing perspective", icon: "" },
  { title: "About the authors", icon: "" },
  { title: "Appendix", icon: "" },
];

export default function SoftwareGuide() {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [nextSectionId, setNextSectionId] = useState<string | null>(null);
  const [isTippyVisible, setIsTippyVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const elements = SECTIONS.map(({ title }) =>
        document.getElementById(kebabCase(title))
      );
      let nextSection: Section | undefined;
      const activeElement = elements.reverse().find((el, index) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        if (rect.top > 400) return false;
        nextSection = SECTIONS[SECTIONS.length - index];
        return true;
      });
      if (activeElement && activeSectionId !== activeElement.id) {
        setActiveSectionId(activeElement.id);
        if (nextSection) setNextSectionId(kebabCase(nextSection.title));
      } else if (!activeElement) {
        setActiveSectionId(null);
        setNextSectionId(null);
      }
    };

    // Trigger initial scroll check
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [activeSectionId]);

  const sectionLinks = SECTIONS.map(({ title }) => (
    <SectionLink
      key={title}
      title={title}
      activeSectionId={activeSectionId}
      nextSectionId={nextSectionId}
      onClick={() => setIsTippyVisible(false)}
    />
  ));

  const activeSectionTitle = SECTIONS.find(
    ({ title }) => kebabCase(title) === activeSectionId
  )?.title;

  return (
    <>
      <div className="hidden xl:block col-span-1"></div>
      <div className="xl:col-span-3">
        <h1 className="text-3xl sm:text-5xl space-y-2">
          <div className="font-light">Guide to Software in</div>
          <div className="font-semibold">Climate Tech</div>
        </h1>
        <div className="mt-4 text-lg text-slate-400">
          <div>
            By
            <a
              className="underline mx-1"
              href="/team"
            >
              Ben
            </a>
            &
            <a
              className="underline mx-1"
              href="https://www.linkedin.com/in/nathan-eidelson-a201a734/"
            >
              Nathan
            </a>
            &middot;
            <div className="ml-1 inline">
              Originally published on{" "}
              <a className="underline" href="https://climatepapa.com/software" target="_blank" rel="noopener noreferrer">
                Climate Papa
              </a>
            </div>
          </div>
          <div>June 2023</div>
        </div>
        <Markdown className="mt-12" sectionTitles={SECTIONS}>
          {softwareGuideContent}
        </Markdown>
        
        <div className="mt-16 p-8 bg-slate-50 border-l-4 border-slate-600 rounded-r-xl text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to build climate tech?
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            We're looking for exceptional founders building the software products that will accelerate the energy transition. 
          </p>
          <a 
            href="/invest" 
            className="bg-sky-600 text-white px-8 py-3 rounded-md hover:bg-sky-700 transition-colors inline-block font-semibold"
          >
            Submit Your Company
          </a>
        </div>
      </div>
      <div className="hidden xl:block col-span-1">
        <div className="pt-2 mt-48 sticky top-10 text-sm">
          <div className="w-52 space-y-2 ">{sectionLinks}</div>
          <button
            className="mt-8 whitespace-nowrap flex items-center text-slate-400 hover:text-slate-600"
            onClick={async () => {
              await navigator.clipboard.writeText(window.location.href);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
          >
            <div className="bg-slate-100 p-2 mr-2 rounded-full border">
              {copied ? (
                <CheckIcon className="w-4 h-4" />
              ) : (
                <LinkIcon className="w-4 h-4" />
              )}
            </div>
            {copied ? "Copied" : " Copy link"}
          </button>
        </div>
      </div>
      <div className="fixed xl:hidden bottom-0 left-0 right-0 bg-white border-t border-slate-200">
        <div className="max-w-screen-sm mx-auto px-6 flex h-16 items-center justify-between">
          <div className="flex space-x-4">
            <div className="relative">
              <button
                className="font-bold p-3 -ml-3 hover:opacity-75"
                onClick={() => setIsTippyVisible(!isTippyVisible)}
              >
                <QueueListIcon className="w-5 h-5" />
              </button>
              {isTippyVisible && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setIsTippyVisible(false)}
                  />
                  <div className="absolute bottom-full left-0 mb-2 bg-white w-80 p-8 shadow-lg border-2 border-slate-800 space-y-3 z-20 rounded-md">
                    {sectionLinks}
                  </div>
                </>
              )}
            </div>
            {activeSectionTitle && (
              <div className="pointer-events-none">
                <SectionLink
                  key={activeSectionTitle}
                  title={activeSectionTitle}
                  nextSectionId={nextSectionId}
                  activeSectionId={activeSectionId}
                />
              </div>
            )}
          </div>
          <ShareButton />
        </div>
      </div>
    </>
  );
}