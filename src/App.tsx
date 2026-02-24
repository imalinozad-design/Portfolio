import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MouseFollower from './components/MouseFollower';
import FloatingChatButton from './components/FloatingChatButton';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="bg-[#0A192F] text-gray-300 scroll-smooth relative">
      <AnimatedBackground />
      <MouseFollower />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <FloatingChatButton />
        <Footer />
      </div>
    </div>
  );
}

export default App;
