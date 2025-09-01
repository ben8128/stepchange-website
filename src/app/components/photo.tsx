"use client";

import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";

export default function Photo({ src, alt }: { src?: string; alt?: string }) {
  if (!src || !alt) return null;
  
  // Fix relative image paths to work with Next.js public directory
  const imageSrc = src.startsWith('/') ? src : `/${src}`;
  
  return (
    <PhotoProvider>
      <PhotoView src={imageSrc}>
        <Image
          className="transition-all mt-12 mb-4 rounded-lg cursor-pointer shadow-md hover:shadow-xl hover:ring-2 ring-1 ring-slate-200 w-full h-auto"
          width={1000}
          height={1000}
          alt={alt}
          src={imageSrc}
        />
      </PhotoView>
    </PhotoProvider>
  );
}