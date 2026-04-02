import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, Linkedin, Github, Facebook, Instagram, MessageCircle, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/syed-abdul-qayyum',
      color: '#0077B5'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/qayyums3116',
      color: '#4F46E5'
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=100084147759219',
      color: '#1877F2'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/abdul_qayyum_3116',
      color: '#E4405F'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/923370466782',
      color: '#25D366'
    }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-card/50 backdrop-blur-xl border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="sm:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src="/Syed Abdul Qayyum.jpeg"
                  alt="Syed Abdul Qayyum"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground truncate">Syed Abdul Qayyum</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">Junior Full Stack Developer & AI Automation Enthusiast</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 max-w-md">
              Building modern, responsive web applications with a focus on user experience 
              and performance.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <a href="mailto:aq653837@gmail.com" className="hover:text-primary transition-colors truncate">
                  aq653837@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                <a href="tel:+923370466782" className="hover:text-accent transition-colors">
                  +92 3370466782
                </a>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-warning flex-shrink-0" />
                <span>Lahore, Pakistan</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6">Connect</h4>
            <div className="flex flex-wrap gap-2 sm:gap-3 lg:flex-col lg:space-y-2 lg:gap-0">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 sm:space-x-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: social.color + '20' }}
                  >
                    <social.icon 
                      className="w-4 h-4" 
                      style={{ color: social.color }}
                    />
                  </div>
                  <span className="text-xs sm:text-sm hidden lg:inline">{social.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left"
            >
              <span>© 2025 Syed Abdul Qayyum — All Rights Reserved.</span>
            </motion.div>

            {/* Back to Top */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="glass border-primary/50 hover:bg-primary/10 group text-xs sm:text-sm"
              >
                <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 group-hover:-translate-y-1 transition-transform" />
                Back to Top
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 flex flex-col space-y-2 sm:space-y-3 lg:space-y-4 z-40">
        <motion.a
          href="https://wa.me/923370466782"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 pulse-glow"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </motion.a>

        <motion.a
          href="mailto:aq653837@gmail.com"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 glow-primary"
          title="Send Email"
        >
          <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;