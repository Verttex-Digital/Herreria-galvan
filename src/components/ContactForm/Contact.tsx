import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contacto</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Si tenes alguna pregunta, contáctanos por cualquiera de estos medios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-zinc-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-medium">Dirección</h4>
                  <p className="text-gray-400">Belen de Escobar</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-medium">Teléfono</h4>
                  <p className="text-gray-400">+541158391820</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-gray-400">galvanangeljavier07@gmail.com</p>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-700">
                <h4 className="text-white font-medium mb-4">Mis redes sociales</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/herreria.agalvan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61568563682039"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Dejame tu consulta</h3>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md bg-zinc-700 border-zinc-600 text-white shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-zinc-700 border-zinc-600 text-white shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-zinc-700 border-zinc-600 text-white shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-amber-500 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}