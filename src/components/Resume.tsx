import { motion } from 'framer-motion';
import { Download, Eye, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  const resumeUrl = '/resume/Syed_Abdul_Qayyum_Resume.pdf';

  return (
    <section id="resume" className="py-10 sm:py-14 md:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="hero-text">Resume</span>
          </h2>
          <p className="text-xs xs:text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            Download or view my complete resume with detailed information about my experience, 
            education, and technical skills
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center px-4 xs:px-0">
            <Button 
              size="lg" 
              className="glow-primary group w-full xs:w-auto min-h-[44px] sm:min-h-[48px] text-xs sm:text-sm lg:text-base px-4 sm:px-6"
              onClick={() => {
                const link = document.createElement('a');
                link.href = resumeUrl;
                link.download = 'Syed_Abdul_Qayyum_Resume.pdf';
                link.click();
              }}
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce-slow" />
              Download Resume
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="glass border-accent/50 hover:bg-accent/10 w-full xs:w-auto min-h-[44px] sm:min-h-[48px] text-xs sm:text-sm lg:text-base px-4 sm:px-6"
              onClick={() => window.open(resumeUrl, '_blank')}
            >
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              View Resume
            </Button>
          </div>
        </motion.div>

        {/* Resume Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl">
            <div className="aspect-[8.5/11] bg-white rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src={resumeUrl}
                className="w-full h-full border-none"
                title="Syed Abdul Qayyum Resume"
                style={{ minHeight: '300px' }}
              />
            </div>
          </div>
        </motion.div>

        {/* Resume Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-12 lg:mt-16"
        >
          {[
            {
              icon: FileText,
              title: 'Professional Experience',
              description: '2+ years in full-stack development, UI/UX, and automation',
              color: '#61DAFB'
            },
            {
              icon: FileText,
              title: 'Technical Skills',
              description: 'React.js, Next.js, TypeScript, Django, FastAPI, n8n, and Make.com',
              color: '#10B981'
            },
            {
              icon: FileText,
              title: 'Education & Certs',
              description: 'BSc in Information Engineering + Professional Certifications',
              color: '#F59E0B'
            }
          ].map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              className="text-center glass p-4 sm:p-5 lg:p-6 rounded-xl interactive"
            >
              <div 
                className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: highlight.color + '20' }}
              >
                <highlight.icon 
                  className="w-5 h-5 sm:w-6 sm:h-6" 
                  style={{ color: highlight.color }}
                />
              </div>
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-foreground mb-1.5 sm:mb-2">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;