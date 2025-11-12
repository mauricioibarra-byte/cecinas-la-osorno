"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      // Wait for animation to complete before hiding video
      setTimeout(() => {
        setShowVideo(false);
      }, 2500); // Extended animation duration
    }, 6000); // 6 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video that plays for 6 seconds then flies to logo position */}
      {showVideo && (
        <div
          className={`absolute inset-0 z-20 flex items-center justify-center bg-black transition-all duration-[2500ms] ease-in-out ${
            isAnimating
              ? "!top-4 !left-4 !w-20 !h-20 scale-[0.1] opacity-0"
              : ""
          }`}
        >
          <video
            autoPlay
            muted
            playsInline
            className="max-h-full max-w-full object-contain"
          >
            <source src="/images/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      {/* Content - Only shows after video disappears */}
      {!showVideo && (
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white animate-fade-in">
          {/* Title */}
          <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
            Tradición Artesanal desde 1957
          </h1>

          {/* Subtitle */}
          <p className="mb-8 max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl px-4">
            Cecinas premium elaboradas con recetas de familia desde hace generaciones.
          </p>

          {/* CTA Button */}
          <button className="rounded-full bg-red-600 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold text-white transition-all hover:bg-red-700 hover:scale-105 shadow-xl">
            Conoce Nuestros Productos
          </button>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center text-white">
              <span className="mb-2 text-xs sm:text-sm">Desliza para explorar</span>
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}