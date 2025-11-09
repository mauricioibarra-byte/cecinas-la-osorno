"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", email: "", phone: "", reason: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-4">
            Conversemos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Tienes preguntas, consultas especiales o quieres saber más? Escríbenos
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-border">
            <h3 className="text-2xl font-bold font-serif text-primary mb-6">
              Envíanos un Mensaje
            </h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                ¡Gracias! Tu mensaje ha sido recibido. Te responderemos a la brevedad.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Nombre Completo *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">Teléfono (opcional)</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="reason">Motivo de Contacto *</Label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="general">Consulta general</option>
                  <option value="pedido">Pedido especial/evento</option>
                  <option value="sugerencias">Sugerencias</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <Label htmlFor="message">Mensaje *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="mt-2"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Enviar Mensaje
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold font-serif text-primary mb-6">
              Información de Contacto
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md border border-border">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <a
                    href="mailto:info@cecinaslaosorno.cl"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    info@cecinaslaosorno.cl
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md border border-border">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Teléfono</h4>
                  <a
                    href="tel:+56225271151"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    (+562) 2527 1151
                  </a>
                  <div className="mt-2">
                    <Button size="sm" variant="default" className="bg-[#25D366] hover:bg-[#20BA5A]" asChild>
                      <a href="https://wa.me/56225271151" target="_blank" rel="noopener noreferrer">
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md border border-border">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Dirección</h4>
                  <p className="text-foreground/70">
                    Av. El Parrón 0968<br />
                    La Cisterna, 7980777<br />
                    Santiago, Región Metropolitana
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md border border-border">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Horarios</h4>
                  <div className="text-foreground/70 space-y-1">
                    <p>Lunes a Viernes: 9:00 - 19:00</p>
                    <p>Sábados: 9:00 - 14:00</p>
                    <p>Domingos: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border-l-4 border-accent">
              <blockquote className="text-lg font-serif italic text-primary/80">
                "Más que clientes, somos familia. Te esperamos con la mejor atención."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}