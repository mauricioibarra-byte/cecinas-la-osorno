"use client";

import { MapPin, Clock, Phone, CheckCircle2, Navigation } from "lucide-react";

const services = [
  "Asesoría personalizada",
  "Venta mayorista",
  "Carniceria",
  "Pedidos especiales para eventos",
];

export default function VisitSection() {
  return (
    <section id="visitanos" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Location */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-primary">Ubicación</h3>
            </div>
            <p className="text-foreground/80 mb-4">
              Av. El Parrón 0968, 7980777 Santiago, La Cisterna, Región Metropolitana
            </p>
            <a
              href="https://maps.app.goo.gl/BYayGTzX62kQee8eA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
            >
              <Navigation className="w-4 h-4" />
              Ver en Google Maps
            </a>
          </div>

          {/* Hours */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-primary">Horario</h3>
            </div>
            <div className="space-y-2 text-foreground/80">
              <p className="flex justify-between">
                <span className="font-medium">Lunes - Jueves:</span>
                <span>9:00 - 14:00 / 15:00 - 18:00</span>
              </p>
              <p className="flex justify-between">
                <span className="font-medium">Viernes:</span>
                <span>9:00 - 18:00</span>
              </p>
              <p className="flex justify-between">
                <span className="font-medium">Sabados:</span>
                <span className="text-muted-foreground">9:00 - 17:00</span>
              </p>
              <p className="flex justify-between">
                <span className="font-medium">Domingos:</span>
                <span className="text-muted-foreground">9:00 - 14:00</span>
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-primary">Contacto</h3>
            </div>
            <div className="space-y-3">
              <a
                href="tel:+56912345678"
                className="block text-foreground/80 hover:text-accent transition-colors"
              >
                +56 9 1234 5678
              </a>
              <a
                href="mailto:contacto@cecinaslasosorno.cl"
                className="block text-foreground/80 hover:text-accent transition-colors"
              >
                contacto@cecinaslasosorno.cl
              </a>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">
            Servicios Disponibles
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground/90">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}