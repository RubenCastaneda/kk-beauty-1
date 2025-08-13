import React, { useEffect, useRef, useState } from 'react';

/**
 * HeroCarousel
 *
 * Displays three slides at a time, auto-advancing every 5s.
 * Uses a triple-length slides array to allow seamless infinite looping.
 * Implements basic swipe support and pauses autoplay on hover.
 */

const slides = [
  { src: '/images/hero1.jpg', alt: 'Model 1' },
  { src: '/images/hero3.jpg', alt: 'Model 3' },
];

// duplicate slides three times to allow translating without blank spaces
const extended = [...slides, ...slides, ...slides];

export default function HeroCarousel() {
  const [index, setIndex] = useState(slides.length); // start from middle copy
  const [paused, setPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const startX = useRef<number | null>(null);

  // autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => i + 1), 5000);
    return () => clearInterval(id);
  }, [paused]);

  // jump back to middle set for seamless loop
  const handleTransitionEnd = () => {
    const maxIndex = slides.length * 2;
    if (index >= maxIndex) {
      setIsAnimating(false);
      setIndex(slides.length);
    }
  };

  useEffect(() => {
    if (!isAnimating) {
      // allow time for index reset without animation
      const id = setTimeout(() => setIsAnimating(true), 50);
      return () => clearTimeout(id);
    }
  }, [isAnimating]);

  // swipe handlers
  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    setPaused(true);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current !== null) {
      const diff = e.clientX - startX.current;
      if (diff > 50) setIndex((i) => i - 1);
      if (diff < -50) setIndex((i) => i + 1);
    }
    startX.current = null;
    setPaused(false);
  };

  const trackStyle = {
    transform: `translateX(-${(100 / 3) * (index - 1)}%)`,
  } as React.CSSProperties;

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured images"
      className="w-[100vw] lg:h-[100vh] h-[60vh] bg-transparent overflow-hidden relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      <div
        className={`flex h-full gap-2 lg:gap-3 ${
          isAnimating ? 'transition-transform duration-700 ease-in-out' : ''
        }`}
        style={trackStyle}
        onTransitionEnd={handleTransitionEnd}
      >
        {extended.map((s, i) => {
          const realIndex = (i % slides.length) + 1;
          const center = i === index; // middle visible slide
          return (
            <div
              key={i}
              aria-label={`Slide ${realIndex} of ${slides.length}`}
              className="relative overflow-hidden rounded-xl h-full basis-[clamp(30%,32%,33.333%)] lg:flex-[0_0_33.333%] transform transition-transform duration-700"
              style={{ transform: `scale(${center ? 1 : 0.9})` }}
            >
              <img
                src={s.src}
                alt={s.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
