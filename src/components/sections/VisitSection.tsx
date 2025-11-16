import { Button } from "@/components/ui/button";
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
        {/* Info Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Location */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-lg border border-primary/20">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Dirección</h3>
                <p className="text-foreground/70">
                  Av. El Parrón 0968<br />
                  La Cisterna, 7980777<br />
                  Santiago, Región Metropolitana
                </p>
                <Button variant="link" className="p-0 h-auto mt-2 text-primary" asChild>
                  <a href="https://www.google.com/maps/place/Av.+El+Parr%C3%B3n+0968,+La+Cisterna,+Regi%C3%B3n+Metropolitana,+Chile/@-33.5329,-70.6789,17z" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <Navigation className="h-4 w-4" />
                    Cómo Llegar
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-gradient-to-br from-secondary/5 to-accent/5 p-6 rounded-lg border border-secondary/20">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <Clock className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Horarios</h3>
                <div className="text-foreground/70 space-y-1">
                  <p>Lunes a Jueves: <strong>9:00 - 14:00  /  15:00 - 18:00</strong></p>
                  <p>Viernes: <strong>9:00 - 18:00</strong></p>
                  <p>Sábados: <strong>9:00 - 17:00</strong></p>
                  <p>Domingos: <strong>9:00 - 14:00</strong></p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-6 rounded-lg border border-accent/20 md:col-span-2 lg:col-span-1">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Contacto Directo</h3>
                <div className="space-y-2">
                  <a href="tel:+56225271151" className="block text-foreground/70 hover:text-primary transition-colors">
                    Teléfono: <strong>(+562) 2527 1151</strong>
                  </a>
                  <Button size="sm" variant="default" className="mt-2 bg-[#25D366] hover:bg-[#20BA5A]" asChild>
                    <a href="https://wa.me/56225271151" target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl font-bold font-serif text-center text-primary mb-6">
            Servicios en Tienda
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-foreground/80">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="max-w-5xl mx-auto">
          <div className="relative h-96 bg-muted/30 rounded-lg overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.8!2d-70.6789!3d-33.5329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d0a0a0a0a0a0%3A0x0!2sAv.%20El%20Parr%C3%B3n%200968%2C%20La%20Cisterna%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses!2scl!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Cecinas La Osorno"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Nuestro equipo te espera con la mejor atención y productos de la más alta calidad
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold font-serif text-primary mb-6">
            ¡Ven a Vivir la Experiencia!
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="https://www.google.com/maps/place/Av.+El+Parr%C3%B3n+0968,+La+Cisterna,+Regi%C3%B3n+Metropolitana,+Chile/@-33.5329,-70.6789,17z" target="_blank" rel="noopener noreferrer">
                Planifica Tu Visita
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://wa.me/56225271151" target="_blank" rel="noopener noreferrer">
                Contáctanos por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}