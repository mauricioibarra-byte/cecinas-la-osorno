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
              <li>Osorno</li>
              <li>Región de Los Lagos</li>
              <li>Chile</li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-4">Horarios</h3>
            <ul className="space-y-3 text-sm text-black/60">
              <li>Lun - Vie: 9:00 - 19:00</li>
              <li>Sábados: 9:00 - 14:00</li>
              <li>Domingos: Cerrado</li>
            </ul>
          </div>

          {/* Columna 4 */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+56912345678" className="text-black/60 hover:text-black transition-colors">
                  +56 9 1234 5678
                </a>
              </li>
              <li>
                <a href="mailto:info@cecinaslaosorno.cl" className="text-black/60 hover:text-black transition-colors">
                  info@cecinaslaosorno.cl
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
