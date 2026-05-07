import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => (
  <div className="relative min-h-screen overflow-hidden">
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden>
      <span className="absolute -top-[180px] -left-[120px] w-[560px] h-[560px] rounded-full blur-[120px] opacity-55 bg-[radial-gradient(circle,rgb(124_92_255_/_0.55)_0%,rgb(124_92_255_/_0)_70%)]" />
      <span className="absolute top-[200px] -right-[200px] w-[620px] h-[620px] rounded-full blur-[120px] opacity-55 bg-[radial-gradient(circle,rgb(75_139_245_/_0.45)_0%,rgb(75_139_245_/_0)_70%)]" />
      <span className="absolute inset-0 bg-[linear-gradient(to_right,rgb(15_17_38_/_0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(15_17_38_/_0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,rgb(0_0_0_/_0.6),transparent_70%)] [-webkit-mask-image:radial-gradient(ellipse_at_top,rgb(0_0_0_/_0.6),transparent_70%)]" />
    </div>

    <Header />

    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>

    <Footer />
  </div>
);

export default App;
