'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useRef } from 'react';

interface HorizontalScrollProps {
  title: string;
  items: Array<{
    title: string;
    description?: string;
    date?: string;
    url?: string;
    source?: string;
  }>;
}

export default function HorizontalScroll({ title, items }: HorizontalScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold" style={{color: 'var(--color-primary)'}}>{title}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="scroll-btn p-2 rounded-full"
          >
            <ChevronLeftIcon className="w-5 h-5" style={{color: 'var(--color-text-secondary)'}} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="scroll-btn p-2 rounded-full"
          >
            <ChevronRightIcon className="w-5 h-5" style={{color: 'var(--color-text-secondary)'}} />
          </button>
        </div>
      </div>
      
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-none w-80 p-6 rounded-lg transition-shadow stepchange-card"
          >
            <div className="flex items-center justify-between mb-3">
              {item.date && (
                <span className="text-sm" style={{color: 'var(--color-text-secondary)'}}>{item.date}</span>
              )}
              {item.source && (
                <span className="text-xs px-2 py-1 rounded" style={{backgroundColor: 'var(--color-background-secondary)', color: 'var(--color-text-secondary)'}}>
                  {item.source}
                </span>
              )}
            </div>
            <h3 className="font-semibold mb-2 line-clamp-2" style={{color: 'var(--color-primary)'}}>
              {item.url ? (
                <a 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="content-link"
                >
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </h3>
            {item.description && (
              <p className="text-sm line-clamp-3" style={{color: 'var(--color-text-secondary)'}}>
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}