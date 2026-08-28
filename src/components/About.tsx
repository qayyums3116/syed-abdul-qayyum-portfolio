import { motion } from 'framer-motion';
import { Code, Palette, TestTube, Users, Zap, Brain, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-10 sm:py-14 md:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-10 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="hero-text">About Me</span>
            </h2>
            
            <div className="space-y-4 sm:space-y-5 text-sm xs:text-base sm:text-lg text-muted-foreground">
              <p>
                I am a results-driven <span className="text-primary font-semibold">Full Stack Developer</span>,
                <span className="text-accent font-semibold"> AI Automation Specialist</span>, and
                <span className="text-primary font-semibold"> UI/UX Designer</span> with over 2 years of
                professional experience building scalable, responsive web applications using
                <span className="text-primary font-semibold"> React.js</span>,
                <span className="text-primary font-semibold"> Next.js</span>, and
                <span className="text-accent font-semibold"> TypeScript</span>, with backend development in
                <span className="text-accent font-semibold"> Django</span> and
                <span className="text-accent font-semibold"> FastAPI</span>.
              </p>

              <p>
                Currently at <span className="text-primary font-semibold">CodeSquad.LLC</span>, I develop and
                maintain full-stack applications end to end — from database design in
                <span className="text-accent font-semibold"> PostgreSQL</span> to deployment — while designing
                and deploying intelligent automation workflows with
                <span className="text-primary font-semibold"> n8n</span> and
                <span className="text-primary font-semibold"> Make.com</span> to streamline business processes
                and improve operational efficiency.
              </p>

              <p>
                I also drive end-to-end <span className="text-primary font-semibold">digital growth</span> through
                automation — executing <span className="text-accent font-semibold">SEO, AEO & GEO</span> strategies
                alongside <span className="text-accent font-semibold">blog content</span>,
                <span className="text-accent font-semibold"> social media</span>, and
                <span className="text-accent font-semibold"> Google Ads</span> campaigns, tracked via
                <span className="text-accent font-semibold"> Google Analytics</span> and orchestrated through a
                customized <span className="text-primary font-semibold">CRM</span> that unifies marketing
                workflows, client communication, and reporting.
              </p>

              <p>
                I bring strong <span className="text-primary font-semibold">UI/UX design</span> capability with
                hands-on work in <span className="text-accent font-semibold">Figma</span> and
                <span className="text-accent font-semibold"> Adobe XD</span> — creating wireframes, user flows,
                and prototypes, then translating them into pixel-perfect, production-ready interfaces. I also
                integrate <span className="text-accent font-semibold">AI-driven workflows and LLM-based solutions</span> into
                production applications.
              </p>

              <p>
                I've also taught a 2-month <span className="text-primary font-semibold">AI Automation</span> course
                and contributed to <span className="text-accent font-semibold">AI model training</span> through video
                annotation. With a
                <span className="text-primary font-semibold"> BSc in Information Engineering Technology (3.42 GPA)</span>,
                I combine technical depth, design thinking, and automation expertise to deliver meaningful digital products.
              </p>

              <p className="text-accent font-medium">
                Let's connect and explore how we can build something remarkable together. 🌍✨
              </p>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative max-w-xs xs:max-w-sm sm:max-w-md mx-auto lg:mr-0 lg:ml-auto">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden glass p-1.5 sm:p-2">
                  <div className="w-full h-full bg-gradient-surface rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <img 
                      src="/Abdul Qayyum.jpeg" 
                      alt="Syed Abdul Qayyum" 
                      className="w-full h-full object-cover rounded-xl sm:rounded-2xl" 
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Floating stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 xs:-top-3 xs:-right-3 sm:-top-4 sm:-right-4 glass p-2 xs:p-3 sm:p-4 rounded-lg"
              >
                <div className="text-center">
                  <div className="text-lg xs:text-xl sm:text-2xl font-bold text-primary">2+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Years</div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -left-2 xs:-bottom-3 xs:-left-3 sm:-bottom-4 sm:-left-4 glass p-2 xs:p-3 sm:p-4 rounded-lg"
              >
                <div className="text-center">
                  <div className="text-lg xs:text-xl sm:text-2xl font-bold text-accent">20+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Projects</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Specialties Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 lg:mt-20"
        >
          <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            <span className="hero-text">My Specialties</span>
          </h3>
          
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {[
              {
                icon: Code,
                title: 'Full Stack Development',
                description: 'Building modern applications with React.js, Next.js, TypeScript, Django, and FastAPI.',
                color: '#61DAFB'
              },
              {
                icon: Palette,
                title: 'UI/UX Design',
                description: 'Designing intuitive and engaging user interfaces using Figma and Adobe XD.',
                color: '#F24E1E'
              },
              {
                icon: Brain,
                title: 'AI & LLM Integration',
                description: 'Applying prompt engineering and integrating LLM-driven solutions into production workflows.',
                color: '#8B5CF6'
              },
              {
                icon: Zap,
                title: 'n8n AI Automation',
                description: 'Designing business automations using n8n and Make.com with API and AI integrations.',
                color: '#F59E0B'
              },
              {
                icon: TrendingUp,
                title: 'Digital Marketing & SEO',
                description: 'Driving growth with SEO, AEO, GEO, Google Ads, and analytics through automated content and CRM workflows.',
                color: '#EC4899'
              },
              {
                icon: Users,
                title: 'Project Management',
                description: 'Coordinating teams, assigning tasks, and ensuring timely project delivery.',
                color: '#10B981'
              },
              {
                icon: TestTube,
                title: 'QA Testing',
                description: 'Testing applications for quality, usability, and reliability.',
                color: '#EF4444'
              }
            ].map((specialty, index) => (
              <motion.div
                key={specialty.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                className="glass p-4 sm:p-6 rounded-xl interactive group"
              >
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: specialty.color + '20' }}
                >
                  <specialty.icon 
                    className="w-5 h-5 sm:w-6 sm:h-6" 
                    style={{ color: specialty.color }}
                  />
                </div>
                
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-1.5 sm:mb-2 text-foreground">
                  {specialty.title}
                </h4>
                
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {specialty.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
