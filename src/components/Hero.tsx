import { motion } from 'framer-motion';
import { Download, Eye, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-8"
    >
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Responsive layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-3 sm:mb-4"
            >
              <span className="text-primary font-medium text-base sm:text-lg">
                👋 Hello, I'm
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              <span className="hero-text block">Syed Abdul</span>
              <span className="text-foreground block">Qayyum</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm xs:text-base sm:text-lg lg:text-xl font-semibold text-accent mb-4 sm:mb-6 leading-relaxed px-2 sm:px-0"
            >
              Junior Full Stack Developer | AI Automation Enthusiast | Building Scalable React.js, Next.js, Django & FastAPI Solutions
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xs xs:text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0"
            >
              I design and develop responsive full-stack applications, craft
              intuitive UI/UX experiences, and build AI-powered automation
              workflows using n8n and Make.com to improve productivity.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start px-2 sm:px-0"
            >
              <Button
                size="lg"
                className="glow-primary group min-h-[44px] sm:min-h-[48px] w-full sm:w-auto px-4 sm:px-6 text-xs xs:text-sm sm:text-base"
                onClick={() =>
                  window.open('/resume/Syed_Abdul_Qayyum_Resume.pdf', '_blank')
                }
              >
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce-slow flex-shrink-0" />
                <span>Download Resume</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="glass border-primary/50 hover:bg-primary/10 min-h-[44px] sm:min-h-[48px] w-full sm:w-auto px-4 sm:px-6 text-xs xs:text-sm sm:text-base"
                onClick={() => scrollToSection('projects')}
              >
                <Eye className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>View Projects</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="glass border-accent/50 hover:bg-accent/10 min-h-[44px] sm:min-h-[48px] w-full sm:w-auto px-4 sm:px-6 text-xs xs:text-sm sm:text-base"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>Contact Me</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end w-full mt-6 lg:mt-0"
          >
            <div className="relative w-full max-w-xs xs:max-w-sm sm:max-w-md lg:max-w-lg">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                {/* Responsive Image Frame */}
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden glow-primary">
                  <img
                    src="/Home.jpg"
                    alt="Syed Abdul Qayyum - Junior Full Stack Developer & AI Automation Enthusiast"
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-2 -right-2 xs:-top-3 xs:-right-3 sm:-top-4 sm:-right-4 w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-primary rounded-full flex items-center justify-center glow-primary"
                >
                  <span className="text-base xs:text-lg sm:text-xl lg:text-2xl">⚛️</span>
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="absolute -bottom-2 -left-2 xs:-bottom-3 xs:-left-3 sm:-bottom-4 sm:-left-4 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-gradient-accent rounded-full flex items-center justify-center glow-accent"
                >
                  <span className="text-sm xs:text-base sm:text-lg lg:text-xl">🎨</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
