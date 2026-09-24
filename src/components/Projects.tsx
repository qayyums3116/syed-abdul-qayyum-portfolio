import { motion } from 'framer-motion';
import { Github, Eye, Code, Palette, Workflow, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/components/Project';
import { projects } from '@/components/Project';
import ProjectModal from './ProjectModal';
import { useState } from 'react';

const PAGE_SIZE = 6;

const categoryIcons = {
  'web-app': Code,
  'ui-design': Palette,
  'n8n': Workflow,
  'make': Zap,
  'ai': Code,
} as const;

const categoryColors = {
  'web-app': '#61DAFB',
  'ui-design': '#F24E1E',
  'n8n': '#10B981',
  'make': '#A855F7',
  'ai': '#FF6B35',
} as const;

const sections = [
  {
    id: 'web-projects',
    title: 'Full Stack Web-Based Projects',
    tabLabel: 'Full Stack Web Based Projects',
    icon: Code,
    tagline:
      'Modern, responsive, and scalable applications built with React, Vite, and Tailwind CSS.',
    filter: 'web-app',
  },
  {
    id: 'make-projects',
    title: 'Make.com Automation Projects',
    tabLabel: 'Make.com Projects',
    icon: Zap,
    tagline:
      'Make.com scenarios that run the CRM, content, SEO/AEO/GEO, and digital-marketing analytics for real businesses — fully automated.',
    filter: 'make',
  },
  {
    id: 'n8n-projects',
    title: 'N8N Automation Projects',
    tabLabel: 'n8n Projects',
    icon: Workflow,
    tagline:
      'Automations and workflows built with N8N to simplify processes and save time.',
    filter: 'n8n',
  },
  {
    id: 'uiux-projects',
    title: 'UI/UX Design Projects',
    tabLabel: 'UI/UX Projects',
    icon: Palette,
    tagline:
      'Creative and user-centered design projects crafted in Figma and Adobe XD.',
    filter: 'ui-design',
  },
];

const ProjectCard = ({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) => {
  const CategoryIcon = categoryIcons[project.category];
  const categoryColor = categoryColors[project.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5 }}
      className="glass rounded-xl overflow-hidden interactive group cursor-pointer"
      onClick={() => onOpen(project)}
    >
      {/* Project Thumbnail */}
      <div className="relative h-32 xs:h-40 sm:h-44 lg:h-48 overflow-hidden">
        {project.video ? (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            onLoadedMetadata={(e) => {
              if (project.videoPlaybackRate) {
                e.currentTarget.playbackRate = project.videoPlaybackRate;
              }
            }}
            onPlay={(e) => {
              if (project.videoPlaybackRate) {
                e.currentTarget.playbackRate = project.videoPlaybackRate;
              }
            }}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-muted/40 flex items-center justify-center">
            <CategoryIcon
              className="w-12 h-12 sm:w-16 sm:h-16 opacity-60"
              style={{ color: categoryColor }}
            />
          </div>
        )}

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Status Badge */}
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
          <Badge
            variant={project.status === 'completed' ? 'default' : 'secondary'}
            className="capitalize text-[10px] xs:text-xs"
          >
            {project.status.replace('-', ' ')}
          </Badge>
        </div>

        {/* Category Badge */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
          <Badge
            variant="outline"
            className="capitalize text-[10px] xs:text-xs"
            style={{ borderColor: categoryColor + '50', color: categoryColor }}
          >
            {project.category.replace('-', ' ')}
          </Badge>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-3 xs:p-4 sm:p-5 lg:p-6">
        <h3 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold mb-1.5 sm:mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-1">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
          {project.description}
        </p>

        <div className="mb-3 sm:mb-4">
          <p className="text-[10px] xs:text-xs font-medium text-accent mb-1.5 sm:mb-2 line-clamp-1">
            Role: {project.role}
          </p>
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-[10px] xs:text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="secondary" className="text-[10px] xs:text-xs">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
        </div>

        {/* Quick Action Button */}
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            className="flex-1 text-xs sm:text-sm h-8 sm:h-9"
            onClick={(e) => {
              e.stopPropagation();
              onOpen(project);
            }}
          >
            <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            View Details
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectSection = ({
  section,
  secIndex,
  onOpen,
}: {
  section: (typeof sections)[number];
  secIndex: number;
  onOpen: (p: Project) => void;
}) => {
  const [page, setPage] = useState(0);
  const sectionProjects = projects.filter((p) => p.category === section.filter);
  const totalPages = Math.ceil(sectionProjects.length / PAGE_SIZE);
  const start = page * PAGE_SIZE;
  const visible = sectionProjects.slice(start, start + PAGE_SIZE);

  const goTo = (p: number) => {
    setPage(Math.max(0, Math.min(totalPages - 1, p)));
    document
      .getElementById(section.id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div id={section.id} className="mb-12 sm:mb-16 lg:mb-20 last:mb-0 scroll-mt-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: secIndex * 0.1 }}
        viewport={{ once: true }}
        className="text-center mb-6 sm:mb-8 lg:mb-12"
      >
        <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
          <span className="hero-text">{section.title}</span>
        </h3>
        <p className="text-xs sm:text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto px-2">
          {section.tagline}
        </p>
      </motion.div>

      {/* Projects Grid — 2 per row on mobile, 3 on large screens */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6 xl:gap-8">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={onOpen} />
        ))}
      </div>

      {/* Pagination controls (only when more than one page) */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
          <Button
            variant="outline"
            size="icon"
            aria-label="Previous projects"
            disabled={page === 0}
            onClick={() => goTo(page - 1)}
            className="glass border-primary/50 hover:bg-primary/10 rounded-full w-10 h-10 sm:w-11 sm:h-11 disabled:opacity-40"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to page ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === page
                    ? 'w-6 bg-primary'
                    : 'w-2.5 bg-muted-foreground/40 hover:bg-primary/60'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            aria-label="Next projects"
            disabled={page === totalPages - 1}
            onClick={() => goTo(page + 1)}
            className="glass border-primary/50 hover:bg-primary/10 rounded-full w-10 h-10 sm:w-11 sm:h-11 disabled:opacity-40"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      )}

      {/* GitHub Button only after Web Projects */}
      {section.id === 'web-projects' && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-10 lg:mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="glass border-primary/50 hover:bg-primary/10 text-xs sm:text-sm lg:text-base h-10 sm:h-11 lg:h-12 px-4 sm:px-6 lg:px-8"
            onClick={() => window.open('https://github.com/qayyums3116', '_blank')}
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      )}
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState(sections[0].filter);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const activeSection = sections.find((s) => s.filter === activeFilter) ?? sections[0];

  const selectFilter = (filter: string) => {
    setActiveFilter(filter);
    document
      .getElementById('projects')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="projects" className="py-10 sm:py-14 md:py-20 relative scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Global Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">
            <span className="hero-text">Featured Projects</span>
          </h2>
          <p className="text-xs xs:text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            A showcase of my work across development, design, and automation.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 lg:mb-16"
        >
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = section.filter === activeFilter;
            return (
              <button
                key={section.filter}
                onClick={() => selectFilter(section.filter)}
                className={`flex items-center gap-1.5 sm:gap-2 rounded-full border px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-primary text-primary-foreground border-primary glow-primary scale-[1.03]'
                    : 'glass border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/40'
                }`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>{section.tabLabel}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Active category (remounts on change to reset pagination + animate in) */}
        <ProjectSection
          key={activeSection.filter}
          section={activeSection}
          secIndex={0}
          onOpen={openProjectModal}
        />

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeProjectModal}
        />
      </div>
    </section>
  );
};

export default Projects;
