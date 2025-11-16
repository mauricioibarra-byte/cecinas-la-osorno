"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { CartButton } from "@/components/cart/CartButton";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Productos", href: "#productos" },
    { name: "Historia", href: "#historia" },
    { name: "Visítanos", href: "#visitanos" },
    { name: "Contactar", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/images/logo.png"
              alt="Cecinas La Osorno"
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-black hidden sm:block">
              Cecinas La Osorno
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium text-black/80 hover:text-black transition-colors"
              >
                {item.name}
              </a>
            ))}
            
            {/* Cart Button */}
            <CartButton />
            
            {/* Admin Link */}
            <a
              href="/admin"
              className="text-base font-medium text-black/60 hover:text-black transition-colors"
            >
              Admin
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <CartButton />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-black/10">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-black/80 hover:text-black transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/admin"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-black/60 hover:text-black transition-colors"
              >
                Admin
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}