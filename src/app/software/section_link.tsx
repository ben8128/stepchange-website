import Link from "next/link";
import clsx from "clsx";
import { kebabCase } from "lodash";
import { useEffect, useState, useCallback } from "react";

export default function SectionLink({
  title,
  activeSectionId,
  nextSectionId,
  onClick,
}: {
  title: string;
  activeSectionId: string | null;
  nextSectionId: string | null;
  onClick?: () => void;
}) {
  const [progress, setProgress] = useState<number | null>(null);

  const updateProgress = useCallback(() => {
    if (activeSectionId && nextSectionId && activeSectionId !== "appendix") {
      const activeElement = document.getElementById(activeSectionId);
      const nextSectionElement = document.getElementById(nextSectionId);
      if (activeElement && nextSectionElement) {
        const currentTop = nextSectionElement?.getBoundingClientRect().top;
        const activeTopOffset = activeElement?.offsetTop;
        const nextTopOffset = nextSectionElement?.offsetTop;
        const diff = nextTopOffset - activeTopOffset;
        const progress = (diff - currentTop) / diff;
        const progressAsPercentage = Math.min(
          Math.max(0, Math.round(progress * 100)),
          100
        );
        setProgress(progressAsPercentage);
      }
    } else {
      setProgress(null);
    }
  }, [activeSectionId, nextSectionId]);
  useEffect(() => {
    // Every time the nextSectionId or activeSectionId, we update progress
    updateProgress();
    // Every time the user scrolls, we update progress
    const onScroll = () => updateProgress();
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [nextSectionId, activeSectionId, updateProgress]);

  const id = kebabCase(title);
  const isActive = activeSectionId === id;
  return (
    <div
      key={id}
      className={clsx({
        "-mx-4 transition-all ease-in-out duration-300 bg-sky-50 px-4 py-2 whitespace-nowrap rounded-full":
          isActive,
      })}
    >
      <Link
        className={clsx("block hover:opacity-75", {
          "font-medium": isActive,
          "text-slate-500": !isActive,
        })}
        href={`/software#${id}`}
        onClick={onClick ? () => onClick() : undefined}
      >
        {title}
      </Link>
      {isActive && progress !== null && (
        <div className="w-full h-0.5 bg-sky-100 relative">
          <div
            className="absolute bg-sky-600 h-0.5"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
}