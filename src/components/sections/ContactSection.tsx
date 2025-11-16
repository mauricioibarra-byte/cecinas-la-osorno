'use client';

import { Calendar, Phone, Mail, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ContactSection() {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    // Cargar el script de Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      console.log('Calendly script loaded successfully');
      setIsCalendlyLoaded(true);
    };
    script.onerror = () => {
      console.error('Failed to load Calendly script');
    };
    document.body.appendChild(script);

    // Cargar CSS de Calendly
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Contáctanos</h2>
          <p className="text-gray-600 text-center mb-12">
            Estamos aquí para atenderte
          </p>

          {/* Banner de Videollamada con Calendly embebido */}
          <div className="mb-12 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                ¿Necesitas Asesoría Personalizada?
              </h3>
              <p className="text-white/90 text-lg mb-6">
                Agenda una videollamada con nuestros expertos
              </p>
            </div>

            {/* Calendly Inline Widget */}
            <div className="bg-white rounded-t-2xl">
              {isCalendlyLoaded ? (
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/video-socafac/30min"
                  style={{ minWidth: '320px', height: '700px' }}
                />
              ) : (
                <div className="flex items-center justify-center h-96">
                  <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mb-4"></div>
                    <p className="text-gray-600">Cargando calendario...</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Información de Contacto */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
                <Phone className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Teléfono</h3>
              <a href="tel:+56912345678" className="text-gray-600 hover:text-red-600 transition-colors">
                +56 9 1234 5678
              </a>
            </div>

            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
                <Mail className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:contacto@cecinaslasosorno.cl" className="text-gray-600 hover:text-red-600 transition-colors">
                contacto@cecinaslasosorno.cl
              </a>
            </div>

            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-4">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Ubicación</h3>
              <p className="text-gray-600">
                Osorno, Región de Los Lagos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}