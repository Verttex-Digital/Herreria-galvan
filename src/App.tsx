import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/ContactForm/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <main className="bg-zinc-900 min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;