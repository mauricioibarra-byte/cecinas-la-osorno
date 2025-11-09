"use client";

import Link from "next/link";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Prietas Artesanales",
    description: "100% artesanales con sabor profundo y especiado",
    image: "https://ugc.same-assets.com/ctfwqo4pHO5WRtGq7lUFLmtV7XBvHV-F.jpeg",
  },
  {
    id: 2,
    name: "Chorizo Riojano",
    description: "Auténtica receta española, color rojo intenso",
    image: "https://ugc.same-assets.com/IXe3LwTsmf8cWkSXPmbDX221IVaS4r7X.jpeg",
  },
  {
    id: 3,
    name: "Arrollado de Huaso",
    description: "Cocido artesanal, ideal para laminar",
    image: "/images/arrollado-huaso.jpg",
  },
  {
    id: 4,
    name: "Longaniza Artesanal",
    description: "El alma de la parrilla chilena",
    image: "https://ugc.same-assets.com/6Nf2I3T88D-YrkUBQyWKZNviF5Goz5Wg.jpeg",
  },
  {
    id: 5,
    name: "Longaniza Butifarra",
    description: "Sabor suave y especias delicadas",
    image: "https://ugc.same-assets.com/gu50aqiATJO5BKaY2aait7m5Xjd7s-Yb.jpeg",
  },
  {
    id: 6,
    name: "Longaniza Chillán",
    description: "Sabor intenso con toque ahumado",
    image: "https://ugc.same-assets.com/TgzDdb3QLmHzpDWwkD97QpfUAg1SGlUk.jpeg",
  },
  {
    id: 7,
    name: "Jamón Pierna Artesanal",
    description: "100% pierna de cerdo, levemente ahumado",
    image: "https://ugc.same-assets.com/sqwG75rM35XK_IRQ9mpLOuMKE_7zyOcj.jpeg",
  },
  {
    id: 8,
    name: "Paté de Cerdo",
    description: "Aromático y suave al paladar",
    image: "https://ugc.same-assets.com/BDp9PK9eTKguOACfGnVN3_sYiFgKbYia.jpeg",
  },
  {
    id: 9,
    name: "Queso de Cabeza",
    description: "Sabor auténtico del campo chileno",
    image: "https://ugc.same-assets.com/o41VtvTOmEoBL3tLKOE0TgDtTrj6OxO6.jpeg",
  },
  {
    id: 10,
    name: "Pernil",
    description: "Tierno y jugoso, listo para servir",
    image: "https://ugc.same-assets.com/4bSbN627vdyiB6hJGr9UVVDzt-PpyZhL.jpeg",
  },
  {
    id: 11,
    name: "Costillar Premium",
    description: "Primera selección con malaya incluida",
    image: "https://ugc.same-assets.com/1HufVoK1mqy-Oj8JlWWG0mKAiZXe4NPQ.jpeg",
  },
];

export default function ProductsSection() {
  return (
    <section id="productos" className="py-20 bg-white">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Header - Estilo Apple */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4 tracking-tight">
            Nuestros Productos
          </h2>
          <p className="text-xl text-black/60 max-w-2xl mx-auto">
            Cada pieza elaborada con dedicación y tradición
          </p>
        </div>

        {/* Grid de productos - Estilo Apple */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href="#visitanos"
              className="group block"
            >
              {/* Card minimalista */}
              <div className="bg-neutral-50 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                {/* Imagen */}
                <div className="relative h-80 overflow-hidden bg-neutral-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-black mb-2">
                    {product.name}
                  </h3>
                  <p className="text-base text-black/60">
                    {product.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Final */}
        <div className="mt-20 text-center">
          <a
            href="#visitanos"
            className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-full hover:bg-black/90 transition-all text-base font-medium"
          >
            Visítanos en Nuestra Tienda
          </a>
        </div>
      </div>
    </section>
  );
}