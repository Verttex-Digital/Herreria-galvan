import { Hammer, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Hammer className="text-amber-500" />
              <span className="text-xl font-bold text-white">Herrería Galván</span>
            </div>
            <p className="text-sm mb-6">
              Llevo tiempo transformando el metal en arte.
              Combinamos técnicas tradicionales con innovación para crear piezas únicas
              que perduran en el tiempo.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/forjaartesanal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/forjaartesanal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="hover:text-amber-500 transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-amber-500 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-amber-500 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Horario de Atención</h3>
            <ul className="space-y-2 text-sm">
              <li>Lunes a Viernes</li>
              <li className="text-amber-500">8:00 - 21:00</li>
              <li>Sábados</li>
              <li className="text-amber-500">8:00 - 19:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Herrería Galván. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}