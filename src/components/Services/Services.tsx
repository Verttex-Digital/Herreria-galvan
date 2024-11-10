export default function Services() {
  const services = [
    {
      title: "Herrería Artística",
      description: "Creación de piezas decorativas únicas: rejas, portones, barandas y elementos ornamentales personalizados.",
      image: "https://images.unsplash.com/photo-1621172715450-53ca41f75d93?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "Herrería Industrial",
      description: "Soluciones metálicas para empresas: estructuras, equipamiento y elementos de seguridad.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=500&auto=format&fit=crop"
    },
    {
      title: "Restauración",
      description: "Recuperación y restauración de piezas metálicas antiguas, conservando su valor histórico.",
      image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=500&auto=format&fit=crop"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Nuestros Servicios</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios de herrería, combinando técnicas tradicionales
            con tecnología moderna para crear piezas excepcionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}