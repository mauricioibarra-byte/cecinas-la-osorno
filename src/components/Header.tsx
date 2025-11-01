"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#productos", label: "Productos" },
    { href: "#historia", label: "Historia" },
    { href: "#visitanos", label: "Visítanos" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-black/10">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="Cecinas La Osorno"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Centrado */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-black/80 hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Simple */}
          <div className="hidden md:block">
            <a
              href="tel:+56912345678"
              className="text-sm text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Contactar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-black" />
            ) : (
              <Menu className="h-5 w-5 text-black" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-black/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base text-black/80 hover:text-black transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+56912345678"
                className="text-base text-primary font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contactar
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
