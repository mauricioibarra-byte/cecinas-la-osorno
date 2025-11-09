"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(false);
    }, 6000); // 6 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video that plays for 6 seconds then disappears */}
      {showVideo && (
        <div className="absolute inset-0 z-20">
          <video
            autoPlay
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/images/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Background Image (shows after video disappears) */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-cecinas-banner.jpg"
          alt="Cecinas La Osorno - Productos Artesanales"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        {/* Title */}
        <h1 className="mb-4 text-5xl font-bold drop-shadow-lg md:text-7xl">
          Cecinas La Osorno
        </h1>

        {/* Subtitle */}
        <p className="mb-8 max-w-2xl text-xl drop-shadow-lg md:text-2xl">
          Tradición y calidad en cada producto
        </p>

        {/* CTA Button */}
        <button className="rounded-full bg-red-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-red-700 hover:scale-105 shadow-xl">
          Conoce Nuestros Productos
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white">
          <span className="mb-2 text-sm">Desliza para explorar</span>
          <svg
            className="h-6 w-6"
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
    </section>
  );
}