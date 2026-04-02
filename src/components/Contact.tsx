import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }
        ]);

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aq653837@gmail.com',
      href: 'mailto:aq653837@gmail.com',
      color: '#F59E0B'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 3370466782',
      href: 'tel:+923370466782',
      color: '#10B981'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lahore, Pakistan',
      href: 'https://maps.google.com/?q=Lahore,Pakistan',
      color: '#EF4444'
    }
  ];

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

  return (
    <section id="contact" className="py-10 sm:py-14 md:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="hero-text">Let's Connect</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-foreground">Get in Touch</h3>
            
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 glass rounded-lg interactive group"
                >
                  <div 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0"
                    style={{ backgroundColor: info.color + '20' }}
                  >
                    <info.icon 
                      className="w-5 h-5 sm:w-6 sm:h-6" 
                      style={{ color: info.color }}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-foreground text-sm sm:text-base">{info.label}</p>
                    <p className="text-muted-foreground text-xs sm:text-sm truncate">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Connect on Social Media</h4>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    viewport={{ once: true }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center glass interactive"
                    style={{ backgroundColor: social.color + '10' }}
                    title={social.label}
                  >
                    <social.icon 
                      className="w-4 h-4 sm:w-5 sm:h-5" 
                      style={{ color: social.color }}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass p-4 sm:p-6 lg:p-8 rounded-xl space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Send me a message</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="glass text-sm sm:text-base h-10 sm:h-11"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="glass text-sm sm:text-base h-10 sm:h-11"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration"
                  className="glass text-sm sm:text-base h-10 sm:h-11"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or what you'd like to discuss..."
                  className="glass resize-none text-sm sm:text-base"
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full glow-primary group min-h-[44px] sm:min-h-[48px] text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Quick Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col xs:flex-row justify-center gap-3 mt-8 sm:mt-12 px-2 sm:px-0"
        >
          <Button
            size="lg"
            className="glow-accent min-h-[44px] sm:min-h-[48px] text-sm sm:text-base w-full xs:w-auto"
            onClick={() => window.open('https://wa.me/923370466782', '_blank')}
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            WhatsApp
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="glass border-primary/50 hover:bg-primary/10 min-h-[44px] sm:min-h-[48px] text-sm sm:text-base w-full xs:w-auto"
            onClick={() => window.open('mailto:aq653837@gmail.com', '_blank')}
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Email
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;