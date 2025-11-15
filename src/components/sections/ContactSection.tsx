'use client';

import { Calendar, Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Contáctanos</h2>
          <p className="text-gray-600 text-center mb-12">
            Estamos aquí para atenderte
          </p>

          {/* Banner de Videollamada - Más visible y llamativo */}
          <div className="mb-12 relative overflow-hidden rounded-2xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-orange-500"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
            
            <div className="relative p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    ¿Necesitas Asesoría Personalizada?
                  </h3>
                  <p className="text-white/90 text-lg mb-2">
                    Agenda una videollamada con nuestros expertos
                  </p>
                  <p className="text-white/80 text-sm">
                    Te ayudaremos a elegir los mejores productos para tu negocio
                  </p>
                </div>
                
                <div className="flex-shrink-0">
                  <a
                    href="https://calendly.com/mauricioibarra-byte/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-red-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
                  >
                    <Calendar className="w-6 h-6" />
                    Agendar Ahora
                  </a>
                </div>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-4 left-4 w-32 h-32 bg-orange-400/20 rounded-full blur-3xl"></div>
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