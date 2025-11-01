import { Award, Clock, Users } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Tradición Familiar",
    description: "Recetas transmitidas por generaciones de origen español",
  },
  {
    icon: Award,
    title: "Calidad Premium",
    description: "Seleccionamos solo las mejores materias primas nacionales",
  },
  {
    icon: Clock,
    title: "Elaboración Artesanal",
    description: "Cada pieza, un proceso cuidado al detalle por manos expertas",
  },
];

export default function ValueProposition() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-4">
            El Sabor de lo Auténtico
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-accent/30 rounded-tr-lg" />

              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <pillar.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-foreground mb-4">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <blockquote className="text-2xl font-serif italic text-primary/80 leading-relaxed">
            "El tiempo no se apura cuando se busca la perfección. Cada corte cuenta una historia de dedicación."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
