import AnimatedLogo from "@/components/AnimatedLogo";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
      {/* Contenido centrado */}
      <div className="mx-auto px-6 lg:px-8 max-w-7xl w-full py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo Animado - PROTAGONISTA */}
          <div className="mb-16 flex justify-center">
            <AnimatedLogo className="w-80 md:w-[500px] lg:w-[600px]" />
          </div>

          {/* Titulo principal - Más compacto */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight tracking-tight">
            Tradición Artesanal desde 1957
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-black/60 mb-12 max-w-2xl mx-auto font-normal">
            Cecinas premium elaboradas con recetas de familia desde hace generaciones.
          </p>

          {/* CTA Buttons - Estilo Apple */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#productos"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all text-base font-medium min-w-[200px]"
            >
              Ver Productos
            </a>
            <a
              href="#historia"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all text-base font-medium min-w-[200px]"
            >
              Nuestra Historia
            </a>
          </div>
        </div>

        {/* Imagen destacada - Abajo del contenido */}
        <div className="mt-16 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://ugc.same-assets.com/LRHYt1WfycG1Nmh8Hycxn_idmSsSp7tq.jpeg"
            alt="Cecinas artesanales premium"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>

      {/* Tagline pequeño abajo */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-sm text-black/40 italic">
          Deje que su paladar decida®
        </p>
      </div>
    </section>
  );
}
