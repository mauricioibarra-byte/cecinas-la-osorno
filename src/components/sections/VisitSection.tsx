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