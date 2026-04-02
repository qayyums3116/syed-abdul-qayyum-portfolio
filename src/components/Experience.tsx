import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Users, Zap, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { experiences } from '@/data/experience';

const Experience = () => {
  const typeColors = {
    'full-time': '#10B981',
    'internship': '#F59E0B',
    'freelance': '#8B5CF6',
  };

  const typeIcons = {
    'full-time': Briefcase,
    'internship': Users,
    'freelance': Zap,
  };

  return (
    <section id="experience" className="py-10 sm:py-14 md:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">
            <span className="hero-text">Professional Experience</span>
          </h2>
          <p className="text-xs xs:text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            My journey through various roles in frontend development, project management, and AI integration
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-0.5"></div>

          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {experiences.map((experience, index) => {
              const TypeIcon = typeIcons[experience.type];
              const typeColor = typeColors[experience.type];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot - Only visible on md+ */}
                  <div className="hidden md:block absolute left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full transform -translate-x-1.5 sm:-translate-x-2 border-2 sm:border-4 border-background glow-primary"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-6 lg:pr-8' : 'md:pl-6 lg:pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className="glass p-4 sm:p-5 lg:p-6 rounded-xl interactive"
                    >
                      {/* Header */}
                      <div className="flex flex-col xs:flex-row xs:items-start xs:justify-between gap-3 mb-3 sm:mb-4">
                        <div className="flex items-start space-x-3">
                          <div 
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: typeColor + '20' }}
                          >
                            <TypeIcon 
                              className="w-4 h-4 sm:w-5 sm:h-5" 
                              style={{ color: typeColor }}
                            />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground leading-tight">
                              {experience.title}
                            </h3>
                            <p className="text-sm sm:text-base text-primary font-semibold">
                              {experience.company}
                            </p>
                          </div>
                        </div>
                        
                        <Badge 
                          variant="outline"
                          className="capitalize text-xs self-start xs:self-auto flex-shrink-0"
                          style={{ borderColor: typeColor + '50', color: typeColor }}
                        >
                          {experience.type.replace('-', ' ')}
                        </Badge>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-2 sm:gap-4 mb-3 text-xs sm:text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Key Responsibilities */}
                      <div className="mb-3 sm:mb-4">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center text-xs sm:text-sm">
                          <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-primary flex-shrink-0" />
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-1">
                          {experience.responsibilities.slice(0, 3).map((responsibility, idx) => (
                            <li key={idx} className="text-xs sm:text-sm text-muted-foreground flex items-start">
                              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent mt-1.5 sm:mt-2 mr-1.5 sm:mr-2 flex-shrink-0"></span>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-3 sm:mb-4">
                        <h4 className="font-semibold text-foreground mb-2 text-xs sm:text-sm">Technologies Used</h4>
                        <div className="flex flex-wrap gap-1">
                          {experience.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-[10px] sm:text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center text-xs sm:text-sm">
                          <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-accent flex-shrink-0" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-xs sm:text-sm text-muted-foreground flex items-start">
                              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary mt-1.5 sm:mt-2 mr-1.5 sm:mr-2 flex-shrink-0"></span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;