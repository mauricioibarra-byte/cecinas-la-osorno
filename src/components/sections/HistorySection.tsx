import { Button } from "@/components/ui/button";

export default function HistorySection() {
  return (
    <section id="historia" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-4">
            Una Tradición que se Saborea
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La historia de pasión, familia y calidad que define cada producto
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6" />
        </div>

        {/* Story Content */}
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Intro */}
          <div className="text-center">
            <h3 className="text-3xl font-bold font-serif text-primary mb-6">
              La Tradición Perdura, el Compromiso se Renueva
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              Durante años, Cecinas La Osorno ha sido un referente de calidad y sabor auténtico.
              Nacida de recetas familiares de origen español y elaborada con la dedicación de manos
              expertas, cada producto lleva consigo el legado de una tradición que ha conquistado el
              paladar de generaciones.
            </p>
            <p className="text-2xl font-serif italic text-primary/80 mt-8">
              Hoy, esa historia continúa, más fuerte que nunca.
            </p>
          </div>

          {/* Legacy Section */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:p-12 rounded-lg border-l-4 border-primary">
            <h3 className="text-3xl font-bold font-serif text-primary mb-6">
              El Legado que Nos Define
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              Cecinas la Osorno, con su identidad inconfundible, hoy es una empresa Socafac.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              Hemos tomado la posta de esta prestigiosa fábrica con un profundo respeto por su legado.
              Nuestra misión es continuar con la esencia, donde la promesa es mantener la calidad en nuestros procesos y el sabor en nuestros productos, para que así ud. deje que su paladar decida…
            </p>
            <ul className="space-y-3 mt-6">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground/80">
                  Mantenemos intactos los <strong>procesos y recetas</strong> que dan vida a su sabor característico
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground/80">
                  Conservamos el <strong>alma de la fábrica</strong>, asegurando que cada producto siga siendo artesanal y único
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground/80">
                  Los colaboradores que han dedicado <strong>más de 30 años</strong> a perfeccionar este arte siguen siendo el corazón de nuestra producción
                </span>
              </li>
            </ul>
          </div>

          {/* Expert Hands */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold font-serif text-primary mb-6">
                Manos Expertas, Sabor Garantizado
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                Son ellos, nuestros maestros artesanos, quienes guardan el secreto del sabor y
                garantizan la calidad de siempre. Su experiencia de más de tres décadas es el tesoro
                más valioso de Cecinas La Osorno.
              </p>
              <blockquote className="border-l-4 border-accent pl-4 italic text-lg text-primary/80 mt-6">
                "Cada cecina lleva consigo años de conocimiento y dedicación"
              </blockquote>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://cosascaseras.com/wp-content/uploads/sites/2/2017/03/244-como-hacer-chorizo-casero-2-1.jpg"
                alt="Proceso artesanal de elaboración"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Commitment */}
          <div className="text-center bg-primary/5 p-8 md:p-12 rounded-lg">
            <h3 className="text-3xl font-bold font-serif text-primary mb-6">
              Nuestro Compromiso
            </h3>
            <p className="text-xl font-serif italic text-primary/80 mb-6">
              La Calidad de Siempre con una Visión de Futuro
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              En SOCAFAC, creemos que la auténtica tradición no se cambia, se honra y se proyecta.
              Nuestro objetivo es simple: seguir siendo su proveedor de confianza, ofreciendo esa
              inmejorable relación precio-calidad y la atención personalizada que nos distingue.
            </p>
            <p className="text-xl font-bold text-primary mt-8">
              Cecinas La Osorno seguirá llegando a su mesa, con la misma calidad, calidez y el sello que nos hace únicos.
            </p>
          </div>

          {/* Final Statement */}
          <div className="text-center py-12">
            <h3 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-4">
              SOCAFAC, SOMOS CECINAS LA OSORNO
            </h3>
            <p className="text-2xl font-serif italic text-accent">
              Una tradición que sigue viva
            </p>
            <Button size="lg" className="mt-8" asChild>
              <a href="#productos">Conoce Nuestros Productos</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
