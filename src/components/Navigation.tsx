import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, GraduationCap, Award, Code, FileText, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass backdrop-blur-xl border-b border-border/10' : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo + Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 sm:space-x-3"
          >
            {/* Profile Picture */}
            <img
              src="/Syed Abdul Qayyum.jpeg"
              alt="Syed Abdul Qayyum"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-primary shadow-md flex-shrink-0"
            />
            <div className="min-w-0">
              <span className="text-sm sm:text-lg md:text-xl font-bold text-foreground hidden xs:block truncate">
                Syed Abdul Qayyum
              </span>
              <span className="text-sm sm:text-lg font-bold text-foreground block xs:hidden">
                S.A. Qayyum
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={`transition-all duration-300 text-xs xl:text-sm px-2 xl:px-3 ${
                  activeSection === item.id 
                    ? 'glow-primary' 
                    : 'hover:text-primary hover:bg-secondary'
                }`}
              >
                <item.icon className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2" />
                <span className="hidden xl:inline">{item.label}</span>
                <span className="xl:hidden">{item.label.slice(0, 4)}</span>
              </Button>
            ))}
          </div>

          {/* Tablet Navigation (md screens) */}
          <div className="hidden md:flex xl:hidden items-center space-x-1">
            {navigationItems.slice(0, 6).map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={`transition-all duration-300 text-xs px-2 ${
                  activeSection === item.id 
                    ? 'glow-primary' 
                    : 'hover:text-primary hover:bg-secondary'
                }`}
              >
                <item.icon className="w-3 h-3" />
              </Button>
            ))}
            <Button
              variant="ghost"
              size="sm"
              className="px-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-14 sm:top-16 left-0 right-0 z-50 md:hidden glass backdrop-blur-xl border-b border-border/20 max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
                <div className="grid grid-cols-1 gap-2">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Button
                        variant={activeSection === item.id ? 'default' : 'ghost'}
                        className={`w-full justify-start min-h-[48px] text-base ${
                          activeSection === item.id ? 'glow-primary' : ''
                        }`}
                        onClick={() => scrollToSection(item.id)}
                      >
                        <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                        <span className="text-left">{item.label}</span>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
