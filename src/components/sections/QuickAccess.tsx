import { ArrowRight } from "lucide-react";
import Link from "next/link";

const cards = [
  {
    title: "Nuestra Historia",
    subtitle: "Conoce nuestras raíces",
    image: "https://thumbs.dreamstime.com/b/plata-de-carne-curada-con-guarnici%C3%B3n-la-imagen-muestra-una-deliciosa-bandeja-carnes-curadas-variedad-salami-y-jam%C3%B3n-rebanados-387172699.jpg",
    href: "#historia",
  },
  {
    title: "Nuestros Productos",
    subtitle: "Explora el catálogo",
    image: "https://thumbs.dreamstime.com/b/arreglo-r%C3%BAstico-de-jam%C3%B3n-curado-con-rodajas-artesanales-y-temporadas-en-tablero-madera-un-aut%C3%A9ntico-ambiente-380252234.jpg",
    href: "#productos",
  },
  {
    title: "Visítanos",
    subtitle: "Vive la experiencia",
    image: "https://images.squarespace-cdn.com/content/v1/66ccd83b8b4b65461a3b9a86/1724703017834-QJF9U4UELSKLAENNVA8S/unsplash-image-WqGLWdhv7qA.jpg",
    href: "#visitanos",
  },
];

export default function QuickAccess() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 h-80"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                <p className="text-accent text-sm font-medium mb-2">
                  {card.subtitle}
                </p>
                <h3 className="text-3xl font-bold font-serif text-white mb-4">
                  {card.title}
                </h3>
                <div className="flex items-center text-white group-hover:translate-x-2 transition-transform">
                  <span className="text-sm font-medium mr-2">Descubrir más</span>
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>

              {/* Decorative border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
