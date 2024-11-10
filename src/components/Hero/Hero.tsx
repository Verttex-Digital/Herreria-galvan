import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden" id='hero'>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://i.postimg.cc/vHKgBYq8/IMG-20241107-WA0015.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
          Forjando Arte en Metal
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Creamos piezas únicas de herrería artística y funcional para hogares y empresas.
          Llevamos años transformando el metal en obras de arte.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="bg-amber-500 text-black px-8 py-3 rounded-full font-medium hover:bg-amber-400 transition-colors"
          >
            Ver Portfolio
          </a>
          <a
            href="#contacto"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors"
          >
            Contáctanos
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-amber-500" size={32} />
      </div>
    </div>
  );
}