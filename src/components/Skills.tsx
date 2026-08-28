import { motion } from 'framer-motion';
import { Code, Server, Bot, Palette, TrendingUp, Wrench } from 'lucide-react';
import { skills, getSkillsByCategory } from '@/data/skills';

const Skills = () => {
  const categories = [
    {
      id: 'frontend',
      title: 'Frontend',
      icon: Code,
      color: '#61DAFB',
      description: 'Building modern, responsive web applications'
    },
    {
      id: 'backend',
      title: 'Backend',
      icon: Server,
      color: '#10B981',
      description: 'APIs, databases, and server-side development'
    },
    {
      id: 'ai',
      title: 'AI & Automation',
      icon: Bot,
      color: '#F59E0B',
      description: 'Intelligent workflows, LLMs, and process automation'
    },
    {
      id: 'design',
      title: 'UI/UX & Design',
      icon: Palette,
      color: '#F24E1E',
      description: 'Creating beautiful and intuitive user experiences'
    },
    {
      id: 'marketing',
      title: 'Digital Marketing & SEO',
      icon: TrendingUp,
      color: '#EC4899',
      description: 'Driving digital growth through SEO, ads, and automation'
    },
    {
      id: 'tools',
      title: 'Tools & DevOps',
      icon: Wrench,
      color: '#8B5CF6',
      description: 'Essential tools for modern development workflow'
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return '#10B981';
    if (level >= 80) return '#F59E0B';
    if (level >= 70) return '#3B82F6';
    return '#6B7280';
  };

  const getSkillLabel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <section id="skills" className="py-10 sm:py-14 md:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="hero-text">Skills & Expertise</span>
          </h2>
          <p className="text-xs xs:text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category, categoryIndex) => {
            const categorySkills = getSkillsByCategory(category.id);
            const CategoryIcon = category.icon;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="glass p-4 sm:p-5 lg:p-6 xl:p-8 rounded-xl"
              >
                {/* Category Header */}
                <div className="flex items-center mb-4 sm:mb-5 lg:mb-6">
                  <div 
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center mr-2.5 sm:mr-3 lg:mr-4 flex-shrink-0"
                    style={{ backgroundColor: category.color + '20' }}
                  >
                    <CategoryIcon 
                      className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" 
                      style={{ color: category.color }}
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground truncate">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-2.5 sm:space-y-3 lg:space-y-4">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      {/* Skill Header */}
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <div className="flex items-center space-x-1.5 sm:space-x-2 min-w-0 flex-1">
                          {skill.icon && (
                            <span className="text-sm sm:text-base lg:text-lg flex-shrink-0">{skill.icon}</span>
                          )}
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors text-xs sm:text-sm lg:text-base truncate">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1 sm:space-x-1.5 lg:space-x-2 flex-shrink-0">
                          <span 
                            className="text-[10px] xs:text-xs sm:text-sm font-medium hidden xs:inline"
                            style={{ color: getSkillColor(skill.level) }}
                          >
                            {getSkillLabel(skill.level)}
                          </span>
                          <span className="text-[10px] xs:text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      {/* Skill Progress Bar */}
                      <div className="relative h-1 sm:h-1.5 lg:h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="absolute top-0 left-0 h-full rounded-full"
                          style={{ 
                            backgroundColor: getSkillColor(skill.level),
                            boxShadow: `0 0 10px ${getSkillColor(skill.level)}40`
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 lg:mt-16 text-center"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[
              { 
                label: 'Expert Level', 
                count: skills.filter(s => s.level >= 90).length, 
                color: '#10B981' 
              },
              { 
                label: 'Advanced Level', 
                count: skills.filter(s => s.level >= 80 && s.level < 90).length, 
                color: '#F59E0B' 
              },
              { 
                label: 'Intermediate', 
                count: skills.filter(s => s.level >= 70 && s.level < 80).length, 
                color: '#3B82F6' 
              },
              { 
                label: 'Total Skills', 
                count: skills.length, 
                color: '#8B5CF6' 
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="glass p-3 sm:p-4 lg:p-6 rounded-xl interactive"
              >
                <div 
                  className="text-xl xs:text-2xl sm:text-3xl font-bold mb-1 sm:mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.count}
                </div>
                <div className="text-muted-foreground text-[10px] xs:text-xs sm:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;