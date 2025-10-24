"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

type Category = "todos" | "curados" | "cocidos" | "parrilla";

interface Product {
  id: number;
  name: string;
  category: Category;
  description: string;
  features: string[];
  image: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Prietas Artesanales",
    category: "cocidos",
    description: "100% artesanales. Elaboradas con sangre de cerdo fresca, trozos de tocino, cebolla sazonada y nuestra mezcla secreta de condimentos naturales.",
    features: [
      "Textura suave y cremosa",
      "Sabor profundo y especiado",
      "Proceso lento y cuidadoso",
    ],
    image: "https://ugc.same-assets.com/ctfwqo4pHO5WRtGq7lUFLmtV7XBvHV-F.jpeg",
    badge: "Producto Estrella",
  },
  {
    id: 2,
    name: "Chorizo Riojano",
    category: "curados",
    description: "Auténtica receta española. Color rojo intenso y sabor inconfundible. Cortes seleccionados de carne de cerdo y condimentos naturales.",
    features: [
      "Textura firme y compacta",
      "Perfecto para aperitivos",
      "Ideal para tortilla española",
    ],
    image: "https://ugc.same-assets.com/IXe3LwTsmf8cWkSXPmbDX221IVaS4r7X.jpeg",
  },
  {
    id: 3,
    name: "Arrollado de Huaso",
    category: "cocidos",
    description: "100% artesanal y cocido. Elaborado con pulpa de cerdo de primera calidad, cocción lenta para textura perfecta y sabor concentrado.",
    features: [
      "Ideal para laminar",
      "Especias naturales perfectas",
      "Mantiene forma y sabor",
    ],
    image: "https://ugc.same-assets.com/w3Yss5XQINqUEFHD1pKJpaqlGu59MWze.jpeg",
  },
  {
    id: 4,
    name: "Longaniza Artesanal",
    category: "parrilla",
    description: "El alma de la parrilla chilena. Carne de cerdo seleccionada, tripa natural y nuestra mezcla de condimentos especiales con pimentón.",
    features: [
      "Sabor intenso y equilibrado",
      "Tripa natural",
      "Toque de pimentón",
    ],
    image: "https://ugc.same-assets.com/LRHYt1WfycG1Nmh8Hycxn_idmSsSp7tq.jpeg",
    badge: "Tradicional",
  },
  {
    id: 5,
    name: "Longaniza Butifarra",
    category: "parrilla",
    description: "Para paladares que buscan una longaniza más suave, con especias más delicadas. Perfecta para incorporar en tu parrilla.",
    features: [
      "Sabor más suave",
      "Especias delicadas",
      "Ideal para toda la familia",
    ],
    image: "https://ugc.same-assets.com/gu50aqiATJO5BKaY2aait7m5Xjd7s-Yb.jpeg",
  },
  {
    id: 6,
    name: "Longaniza Chillán",
    category: "parrilla",
    description: "Sabor más intenso y toque ahumado distintivo. La longaniza icónica de Chile, perfecta para la parrilla.",
    features: [
      "Sabor intenso",
      "Toque ahumado",
      "Icónica de Chile",
    ],
    image: "https://ugc.same-assets.com/TgzDdb3QLmHzpDWwkD97QpfUAg1SGlUk.jpeg",
  },
  {
    id: 7,
    name: "Jamón Pierna Artesanal",
    category: "curados",
    description: "100% pierna de cerdo con leve ahumado. Textura noble, firme y sabor natural. Pura tradición.",
    features: [
      "100% pierna de cerdo",
      "Levemente ahumado",
      "Textura firme",
    ],
    image: "https://ugc.same-assets.com/sqwG75rM35XK_IRQ9mpLOuMKE_7zyOcj.jpeg",
  },
  {
    id: 8,
    name: "Paté de Cerdo",
    category: "cocidos",
    description: "Artesanal en tripa natural, condimentado con especias naturales. Aromático y suave al paladar.",
    features: [
      "Tripa natural",
      "Especias naturales",
      "Ideal con tostadas o crackers",
    ],
    image: "https://ugc.same-assets.com/BDp9PK9eTKguOACfGnVN3_sYiFgKbYia.jpeg",
  },
  {
    id: 9,
    name: "Queso de Cabeza",
    category: "cocidos",
    description: "Clásico indiscutible. Aprovechamos la nobleza de la carne de cerdo con especias naturales. Un fiambre que resume el sabor auténtico del campo.",
    features: [
      "Carne de cerdo noble",
      "Especias naturales",
      "Sabor auténtico del campo",
    ],
    image: "https://ugc.same-assets.com/tKKeQPczTndZHk8r_mhpuIFyl4qBr33z.jpeg",
  },
  {
    id: 10,
    name: "Pernil",
    category: "cocidos",
    description: "Pierna de cerdo nacional seleccionada con proporción perfecta de grasa. Cocción perfecta, listo para comer o calentar.",
    features: [
      "Cerdo nacional",
      "Tierno y jugoso",
      "Listo para servir",
    ],
    image: "https://ugc.same-assets.com/4bSbN627vdyiB6hJGr9UVVDzt-PpyZhL.jpeg",
  },
  {
    id: 11,
    name: "Costillar Premium",
    category: "parrilla",
    description: "100% nacional y de primera selección. Con malaya incluida, asegura una porción más sabrosa y gruesa. Pieza generosa.",
    features: [
      "Malaya incluida",
      "Primera selección",
      "Grasa balanceada",
    ],
    image: "https://ugc.same-assets.com/1HufVoK1mqy-Oj8JlWWG0mKAiZXe4NPQ.jpeg",
    badge: "Premium",
  },
];

const categories = [
  { id: "todos", label: "Todos los Productos" },
  { id: "curados", label: "Curados" },
  { id: "cocidos", label: "Cocidos" },
  { id: "parrilla", label: "Para la Parrilla" },
];

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("todos");

  const filteredProducts =
    activeCategory === "todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="productos" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-primary mb-4">
            Maestría en Cada Variedad
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explora nuestra selección de cecinas artesanales premium
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "outline"}
              onClick={() => setActiveCategory(cat.id as Category)}
              className="min-w-[140px]"
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-border hover:border-primary/30"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.badge && (
                  <Badge className="absolute top-4 right-4 bg-accent text-white">
                    {product.badge}
                  </Badge>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold font-serif text-foreground mb-3">
                  {product.name}
                </h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Star className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" fill="currentColor" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors" asChild>
                  <a href="#visitanos">Disponible en Nuestra Tienda</a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-primary/5 rounded-lg">
          <h3 className="text-2xl font-bold font-serif text-primary mb-4">
            ¿Necesitas un pedido especial para un evento?
          </h3>
          <p className="text-foreground/70 mb-6">
            Contáctanos y te asesoramos personalizadamente
          </p>
          <Button size="lg" asChild>
            <a href="#contacto">Consultar Pedidos Especiales</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
