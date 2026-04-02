import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { education } from '@/data/experience';

const Education = () => {
  return (
    <section id="education" className="py-12 sm:py-16 md:py-20 relative">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="hero-text">Education</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            My academic journey that has shaped my expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8 sm:gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center text-foreground">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-primary flex-shrink-0" />
              <span>Academic Background</span>
            </h3>
            
            <div className="space-y-4 sm:space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                  viewport={{ once: true }}
                  className="glass p-4 sm:p-6 rounded-xl interactive"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 gap-3 sm:gap-4">
                    <div className="flex-1 min-w-0">
                       <h4 className="text-base sm:text-lg font-bold text-foreground mb-1">
                         {edu.degree}
                       </h4>
                       <p className="text-sm sm:text-base text-primary font-semibold mb-2">
                         {edu.institution}
                       </p>
                    </div>
                    {edu.grade && (
                      <Badge variant="outline" className="border-accent/50 text-accent">
                        {edu.grade}
                      </Badge>
                    )}
                  </div>
                  
                   <div className="flex flex-wrap gap-2 sm:gap-4 mb-3 text-xs sm:text-sm text-muted-foreground">
                     <div className="flex items-center space-x-1">
                       <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                       <span>{edu.duration}</span>
                     </div>
                     <div className="flex items-center space-x-1">
                       <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                       <span>{edu.location}</span>
                     </div>
                   </div>
                  
                  {edu.description && (
                    <p className="text-muted-foreground text-sm">
                      {edu.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16"
        >
          {[
            { label: 'Years of Study', value: '16', color: '#61DAFB' },
            { label: 'CGPA', value: '3.42', color: '#F59E0B' },
            { label: 'Projects', value: '15+', color: '#8B5CF6' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="text-center glass p-4 sm:p-6 rounded-xl interactive"
            >
              <div 
                className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-muted-foreground text-xs sm:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
