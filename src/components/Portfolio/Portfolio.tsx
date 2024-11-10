export default function Portfolio() {
  const projects = [
    {
      title: "Pergola en el Barrio San Roque",
      category: "Herrería Artística",
      image: "https://i.postimg.cc/ZqfprG4V/IMG-20241106-WA0026.jpg"
    },
    {
      title: "Pergola en Carmen de Areco",
      category: "Herrería Industrial",
      image: "https://i.postimg.cc/vHKgBYq8/IMG-20241107-WA0015.jpg"
    },
    {
      title: "Puerta de Entrada con Hiero Forjado",
      category: "Restauración",
      image: "https://i.postimg.cc/DyGFr7fw/IMG-20241107-WA0045.jpg"
    },
    {
      title: "Baranda de escalera en Escobar",
      category: "Herrería Artística",
      image: "https://i.postimg.cc/fRhs51kj/IMG-20241106-WA0105.jpg"
    },
    {
      title: "Rejas de ventanas en San Andres de Giles",
      category: "Herrería Industrial",
      image: "https://i.postimg.cc/Hk4gN3yG/Imagen-de-Whats-App-2024-11-05-a-las-14-28-07-b5811eb2.jpg"
    },
    {
      title: "Alero para puerta principal en Mercedes ",
      category: "Herrería Artística",
      image: "https://i.postimg.cc/LsxV6qWC/IMG-20241106-WA0043.jpg"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explora nuestra selección de trabajos realizados, donde cada pieza cuenta una historia
            única de artesanía y dedicación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                  <p className="text-amber-500">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}