import { useState } from 'react';
import { Menu, X, Hammer } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 20);
    });
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-900/90 backdrop-blur-md' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Hammer className="text-amber-500" />
            <span className="text-xl font-bold">Herrería Galván</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-gray-300 hover:text-amber-500 transition-colors">
              Inicio
            </a>
            <a href="#servicios" className="text-gray-300 hover:text-amber-500 transition-colors">
              Servicios
            </a>
            <a href="#portfolio" className="text-gray-300 hover:text-amber-500 transition-colors">
              Portfolio
            </a>
            <a href="#contacto" className="text-gray-300 hover:text-amber-500 transition-colors">
              Contacto
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#hero"
                className="block px-3 py-2 text-gray-300 hover:text-amber-500"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#servicios"
                className="block px-3 py-2 text-gray-300 hover:text-amber-500"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </a>
              <a
                href="#portfolio"
                className="block px-3 py-2 text-gray-300 hover:text-amber-500"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="#contacto"
                className="block px-3 py-2 text-gray-300 hover:text-amber-500"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
