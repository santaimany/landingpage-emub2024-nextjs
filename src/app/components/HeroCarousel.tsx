// components/HeroCarousel.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/assets/slide1.png',
  '/assets/slide2.png',
  '/assets/slide3.png',
  '/assets/slide4.png',
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (activeIndex < images.length - 1) {
      setActiveIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(prev => prev - 1);
    }
  };

  // Swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) handleNext();
    if (touchEnd - touchStart > 50) handlePrev();
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, activeIndex]);

 
  const getSlidePosition = (index: number) => {
    if (index === activeIndex) return 'center';
    if (index === activeIndex - 1) return 'left';
    if (index === activeIndex + 1) return 'right';
    return 'hidden';
  };

  return (
    <div 
      ref={containerRef}
      className="relative h-[60vh] md:h-[100vh] w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
           <div className="relative h-full w-full mx-auto flex items-center">
        {images.map((src, index) => {
          const position = getSlidePosition(index);
          const isActive = position === 'center';

          return (
            <div
              key={src}
              className={`absolute w-[90%] md:w-4/6 h-[40vh] md:h-[70vh] transition-all duration-500 ease-in-out
                ${position === 'center' 
                  ? 'left-1/2 -translate-x-1/2 z-20 scale-100' 
                  : position === 'left' 
                  ? 'left-0 translate-x-2 md:translate-x-8 scale-90 opacity-70' 
                  : position === 'right' 
                  ? 'left-full -translate-x-[calc(100%+0.5rem)] md:-translate-x-[calc(100%+2rem)] scale-90 opacity-70' 
                  : 'hidden'}
                mx-auto rounded-lg md:rounded-xl lg:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl`}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className={`object-contain md:object-cover transition-all duration-300 
                  ${isActive ? 'grayscale-0' : 'grayscale brightness-75'}`}
                priority={index === 0}
                sizes="(max-width: 768px) 90vw, 75vw"
              />
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        disabled={activeIndex === 0}
        className={`absolute left-2 md:left-4 top-1/2 z-30 -translate-y-1/2 p-1.5 md:p-3 
          rounded-full bg-black/20 transition-colors backdrop-blur-sm shadow-lg
          ${activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black/40'}`}
      >
        <ChevronLeft className="w-5 h-5 md:w-8 md:h-8 text-white/90" />
      </button>
      
      
      <button
        onClick={handleNext}
        disabled={activeIndex === images.length - 1}
        className={`absolute right-2 md:right-4 top-1/2 z-30 -translate-y-1/2 p-2 md:p-3 
          rounded-full bg-black/20 transition-colors backdrop-blur-sm shadow-lg
          ${activeIndex === images.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-black/40'}`}
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white/90" />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-3 md:bottom-8 left-1/2 z-30 flex -translate-x-1/2 space-x-2 md:space-x-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-1.5 w-4 md:h-3 md:w-8 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? 'bg-white scale-125'
                : 'bg-white/30 scale-100'
            }`}
          />
        ))}
      </div>
    </div>
  );
}