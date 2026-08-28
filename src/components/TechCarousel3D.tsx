import { motion } from 'framer-motion';

interface Tech {
  name: string;
  logo: string;
}

// Every logo (root icons + everything from the /Logos folder)
const technologies: Tech[] = [
  { name: 'React', logo: '/React.png' },
  { name: 'Next.js', logo: '/Logos/Frontend/nextjs-white.png' },
  { name: 'TypeScript', logo: '/Logos/Frontend/Typescript.webp' },
  { name: 'JavaScript', logo: '/Javascript.png' },
  { name: 'HTML5', logo: '/HTML.png' },
  { name: 'CSS3', logo: '/CSS.png' },
  { name: 'Tailwind', logo: '/Tailwind.png' },
  { name: 'Vite', logo: '/vite.png' },
  { name: 'Python', logo: '/Logos/Backend/Python.png' },
  { name: 'Django', logo: '/Logos/Backend/Django.png' },
  { name: 'Node.js', logo: '/Logos/Backend/nodejs_original_wordmark_logo_icon_146412.webp' },
  { name: 'PostgreSQL', logo: '/Logos/Backend/Postgress.webp' },
  { name: 'n8n', logo: '/Logos/AI_Automation/n8n-logo-png.png' },
  { name: 'Make.com', logo: '/Logos/AI_Automation/Make-com-Logo.png' },
  { name: 'Figma', logo: '/Figma.png' },
  { name: 'Adobe XD', logo: '/Logos/Design/Adobe%20XD.png' },
  { name: 'Git', logo: '/git.png' },
  { name: 'GitHub', logo: '/Logos/DevOps/GitHub.png' },
  { name: 'Vercel', logo: '/Logos/DevOps/Vercel.png' },
  { name: 'AWS', logo: '/Logos/DevOps/Aws.webp' },
];

const TechCard = ({ tech }: { tech: Tech }) => (
  <div className="group flex-shrink-0 mr-4 sm:mr-5">
    <div className="glass rounded-2xl px-5 sm:px-7 py-4 sm:py-5 flex flex-col items-center justify-center gap-2 sm:gap-3 w-[120px] sm:w-[150px] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-[0_10px_30px_-10px_hsl(217_91%_60%/0.45)]">
      <img
        src={tech.logo}
        alt={tech.name}
        loading="lazy"
        className="w-11 h-11 sm:w-14 sm:h-14 object-contain transition-transform duration-300 group-hover:scale-110"
      />
      <span className="font-semibold text-xs sm:text-sm text-white leading-tight whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  </div>
);

const fadeMask = {
  WebkitMaskImage:
    'linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)',
  maskImage:
    'linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)',
} as const;

/**
 * A row that slides continuously and loops seamlessly.
 * Driven by Framer Motion (JS) so it runs regardless of the OS
 * "reduced motion" setting or any global CSS animation overrides.
 * Two identical copies + moving by exactly -50% = no visible seam.
 */
const MarqueeRow = ({
  direction = 'left',
  duration = 32,
}: {
  direction?: 'left' | 'right';
  duration?: number;
}) => {
  const from = direction === 'left' ? '0%' : '-50%';
  const to = direction === 'left' ? '-50%' : '0%';

  return (
    <div className="overflow-hidden py-2" style={fadeMask}>
      <motion.div
        className="flex w-max"
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        {[...technologies, ...technologies].map((tech, i) => (
          <TechCard key={`${direction}-${i}`} tech={tech} />
        ))}
      </motion.div>
    </div>
  );
};

const TechCarousel3D = () => {
  return (
    <section id="tech-stack" className="py-10 sm:py-14 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 lg:mb-14"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            <span className="hero-text">Tech Stack</span>
          </h2>
          <p className="text-xs xs:text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>
      </div>

      {/* Continuous horizontal sliders */}
      <div className="flex flex-col gap-3 sm:gap-5">
        <MarqueeRow direction="left" duration={32} />
        <MarqueeRow direction="right" duration={38} />
      </div>
    </section>
  );
};

export default TechCarousel3D;
