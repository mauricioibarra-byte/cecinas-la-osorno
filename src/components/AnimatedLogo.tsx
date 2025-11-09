"use client";

import { useEffect, useState } from "react";

export default function AnimatedLogo({ className = "" }: { className?: string }) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Animar solo una vez al cargar
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Logo con animación de fragmentos */}
      <div className="logo-container">
        {/* Fragmento superior (Texto "FABRICA DE CECINAS") */}
        <div className={`logo-piece logo-piece-top ${isAnimating ? 'animating' : ''}`}>
          <img
            src="/images/logo.png"
            alt="Cecinas La Osorno Logo"
            className="w-full h-auto object-contain"
            style={{ clipPath: 'inset(0 0 60% 0)' }}
          />
        </div>

        {/* Fragmento medio (Cerdo + "LA OSORNO") */}
        <div className={`logo-piece logo-piece-middle ${isAnimating ? 'animating' : ''}`}>
          <img
            src="/images/logo.png"
            alt="Cecinas La Osorno Logo"
            className="w-full h-auto object-contain"
            style={{ clipPath: 'inset(30% 0 40% 0)' }}
          />
        </div>

        {/* Fragmento inferior (Tradición desde 1957) */}
        <div className={`logo-piece logo-piece-bottom ${isAnimating ? 'animating' : ''}`}>
          <img
            src="/images/logo.png"
            alt="Cecinas La Osorno Logo"
            className="w-full h-auto object-contain"
            style={{ clipPath: 'inset(70% 0 0 0)' }}
          />
        </div>
      </div>

      <style jsx>{`
        .logo-container {
          position: relative;
          width: 100%;
          padding-bottom: 70%;
        }

        .logo-piece {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .logo-piece-top.animating {
          animation: pieceTopIn 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .logo-piece-middle.animating {
          animation: pieceMiddleIn 1.2s 0.15s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .logo-piece-bottom.animating {
          animation: pieceBottomIn 1.2s 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes pieceTopIn {
          0% {
            transform: translateY(-150px) translateX(-80px) rotate(-25deg) scale(0.6);
            opacity: 0;
          }
          60% {
            opacity: 1;
          }
          100% {
            transform: translateY(0) translateX(0) rotate(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes pieceMiddleIn {
          0% {
            transform: translateX(120px) scale(0.5) rotate(15deg);
            opacity: 0;
          }
          60% {
            opacity: 1;
          }
          100% {
            transform: translateX(0) scale(1) rotate(0);
            opacity: 1;
          }
        }

        @keyframes pieceBottomIn {
          0% {
            transform: translateY(150px) translateX(-60px) rotate(20deg) scale(0.7);
            opacity: 0;
          }
          60% {
            opacity: 1;
          }
          100% {
            transform: translateY(0) translateX(0) rotate(0) scale(1);
            opacity: 1;
          }
        }

        /* Añadir un brillo sutil cuando termina la animación */
        .logo-piece:not(.animating) {
          animation: subtleGlow 3s ease-in-out infinite;
        }

        @keyframes subtleGlow {
          0%, 100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.05);
          }
        }
      `}</style>
    </div>
  );
}
