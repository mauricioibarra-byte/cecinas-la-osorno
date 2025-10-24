import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3E2723] text-background/90">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Columna 1: Logo + Tagline */}
          <div>
            <h3 className="text-2xl font-bold font-serif text-background mb-2">
              Cecinas La Osorno
            </h3>
            <p className="text-sm italic text-background/70 mb-4">
              Deje que su paladar decida®
            </p>
            <p className="text-sm text-background/80 leading-relaxed">
              Tradición Artesanal desde hace generaciones
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="font-bold text-background mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#inicio" className="text-background/80 hover:text-accent transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#historia" className="text-background/80 hover:text-accent transition-colors">
                  Nuestra Historia
                </Link>
              </li>
              <li>
                <Link href="#productos" className="text-background/80 hover:text-accent transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="#visitanos" className="text-background/80 hover:text-accent transition-colors">
                  Visítanos
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-background/80 hover:text-accent transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="font-bold text-background mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-background/80">
                  Osorno, Región de Los Lagos, Chile
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href="tel:+56912345678" className="text-background/80 hover:text-accent transition-colors">
                  +56 9 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                <a href="mailto:info@cecinaslaosorno.cl" className="text-background/80 hover:text-accent transition-colors">
                  info@cecinaslaosorno.cl
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Horarios */}
          <div>
            <h4 className="font-bold text-background mb-4">Horarios</h4>
            <div className="flex items-start gap-2 text-sm">
              <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
              <div className="text-background/80">
                <p>Lunes a Viernes: 9:00 - 19:00</p>
                <p>Sábados: 9:00 - 14:00</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm text-background/70">
            © {new Date().getFullYear()} Cecinas La Osorno - SOCAFAC. Todos los derechos reservados.
          </p>
          <p className="text-xs text-background/60 mt-2">
            Una tradición que sigue viva
          </p>
        </div>
      </div>
    </footer>
  );
}
