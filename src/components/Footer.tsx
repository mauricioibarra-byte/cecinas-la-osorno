import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-black/10">
      <div className="mx-auto px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Columna 1 */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-4">Navegación</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#productos" className="text-black/60 hover:text-black transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="#historia" className="text-black/60 hover:text-black transition-colors">
                  Historia
                </Link>
              </li>
              <li>
                <Link href="#visitanos" className="text-black/60 hover:text-black transition-colors">
                  Visítanos
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-black/60 hover:text-black transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 2 */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-4">Tienda</h3>
            <ul className="space-y-3 text-sm text-black/60">
              <li>Av. El Parrón #0968, La Cisterna</li>
              <li>Región Metropolitana</li>
              <li>Chile</li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-4">Horarios</h3>
            <ul className="space-y-3 text-sm text-black/60">
              <li>Lun - Jue: 9:00 - 14:00 / 15:00 - 18:00</li>
              <li>Viernes: 9:00 - 18:00</li>
              <li>Sabado: 9:00 - 17:00</li>
              <li>Domingos: 9:00 - 14:00</li>
            </ul>
          </div>

          {/* Columna 4 */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+56225271151" className="text-black/60 hover:text-black transition-colors">
                  +56 2 2527 1151
                </a>
              </li>
              <li>
                <a href="mailto:contacto@cecinaslaosorno.cl" className="text-black/60 hover:text-black transition-colors">
                  contacto@cecinaslaosorno.cl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-black/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-black/40">
              © {new Date().getFullYear()} Cecinas La Osorno. Todos los derechos reservados.
            </p>
            <p className="text-xs text-black/40 italic">
              Una tradición que sigue viva
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
