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
        {/* Responsive layout:
            Mobile order -> Greeting, Picture, Name + Text.
            Desktop -> text (greeting + name + text) on the left column,
            picture centered on the right column. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-x-12 lg:gap-y-0 items-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="order-1 lg:col-start-1 lg:row-start-1 text-center lg:text-left mb-1 sm:mb-2 lg:mb-3"
          >
            <span className="text-primary font-medium text-base sm:text-lg">
              👋 Hello, I'm
            </span>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 relative flex justify-center lg:justify-end w-full"
          >
            <div className="relative w-full max-w-[220px] xs:max-w-xs sm:max-w-sm lg:max-w-md">
              <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                {/* Rotating gradient glow behind the frame */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-3 sm:-inset-4 rounded-full bg-gradient-to-tr from-primary via-accent to-primary opacity-60 blur-xl"
                />

                {/* Gradient ring border */}
                <div className="relative aspect-square rounded-full p-[3px] sm:p-1 bg-gradient-to-br from-primary via-accent to-primary glow-primary">
                  {/* Inner circle with soft radial backdrop so the dark suit stands out */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-[radial-gradient(circle_at_50%_28%,hsl(220_26%_15%),hsl(220_26%_6%))]">
                    <img
                      src="/profile-hero.png"
                      alt="Syed Abdul Qayyum - Full Stack Developer, AI Automation Enthusiast & UI/UX Designer"
                      className="w-full h-full object-cover object-top drop-shadow-2xl"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Name + Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-3 lg:col-start-1 lg:row-start-2 text-center lg:text-left w-full mt-2 lg:mt-0"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight whitespace-nowrap"
            >
              <span className="hero-text">Syed Abdul</span>{' '}
              <span className="text-foreground">Qayyum</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm xs:text-base sm:text-lg lg:text-xl font-semibold text-accent mb-4 sm:mb-6 leading-relaxed px-2 sm:px-0"
            >
              Full Stack Developer | AI Automation & Digital Marketing Engineer | UI/UX Designer | Turning Figma Designs into Scalable Next.js & React.js Apps | Automating Workflows & Digital Growth with n8n, Make.com & SEO
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xs xs:text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0"
            >
              Full Stack Developer, AI Automation Specialist & UI/UX Designer with
              2+ years building scalable React.js, Next.js & TypeScript apps —
              automating workflows with n8n & Make.com and driving digital growth
              through SEO, Google Ads & a customized CRM.
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
