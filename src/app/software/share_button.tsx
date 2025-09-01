"use client";

import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function ShareButton() {
  const [hasLoaded, setHasLoaded] = useState(false);
  useEffect(() => {
    setHasLoaded(true);
  }, []);

  if (!hasLoaded || !navigator?.share) return null;

  return (
    <button
      onClick={async () => {
        await navigator.share({
          url: window.location.href,
          title: "Guide to Software in Climate Tech",
        });
      }}
    >
      <ArrowUpTrayIcon className="w-5 h-5" />
    </button>
  );
}