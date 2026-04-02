import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TechCarousel3D from '@/components/TechCarousel3D';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Skills from '@/components/Skills';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <TechCarousel3D />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
