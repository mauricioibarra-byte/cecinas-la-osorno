import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/19687409/pexels-photo-19687409/free-photo-of-meat-hanging-off-a-bar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Cecinas artesanales colgando"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-white mb-6 leading-tight">
            Tradición Artesanal en Cada Corte
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Desde hace generaciones, elaborando cecinas premium con recetas de familia de origen español
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg" asChild>
              <a href="#historia" className="flex items-center gap-2 bg-[#EC1724]">
                Descubre Nuestra Historia
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-white/10 hover:bg-white/20 text-white border-white/30" asChild>
              <a href="#productos" className="flex items-center gap-2">
                Ver Productos
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
