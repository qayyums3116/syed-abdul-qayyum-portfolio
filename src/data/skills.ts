export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'ai' | 'design' | 'marketing' | 'tools';
  icon?: string;
}

export const skills: Skill[] = [
  // Frontend (resume sequence)
  { name: 'React.js', level: 90, category: 'frontend', icon: '⚛️' },
  { name: 'Next.js', level: 82, category: 'frontend', icon: '▲' },
  { name: 'TypeScript', level: 80, category: 'frontend', icon: '📘' },
  { name: 'JavaScript', level: 88, category: 'frontend', icon: '⚡' },
  { name: 'Vite', level: 85, category: 'frontend', icon: '⚡' },
  { name: 'Tailwind CSS', level: 93, category: 'frontend', icon: '💨' },
  { name: 'Shadcn/UI', level: 80, category: 'frontend', icon: '🧩' },
  { name: 'Material UI', level: 78, category: 'frontend', icon: '🎛️' },
  { name: 'Bootstrap', level: 87, category: 'frontend', icon: '🅱️' },
  { name: 'HTML5', level: 95, category: 'frontend', icon: '🌐' },
  { name: 'CSS3', level: 92, category: 'frontend', icon: '🎨' },

  // Backend (resume sequence)
  { name: 'Django', level: 80, category: 'backend', icon: '🐍' },
  { name: 'FastAPI', level: 80, category: 'backend', icon: '⚡' },
  { name: 'NestJS', level: 75, category: 'backend', icon: '🪺' },
  { name: 'Node.js', level: 80, category: 'backend', icon: '🟢' },
  { name: 'Python', level: 85, category: 'backend', icon: '🐍' },
  { name: 'C++', level: 72, category: 'backend', icon: '➕' },
  { name: 'RESTful APIs', level: 84, category: 'backend', icon: '🔌' },
  { name: 'PostgreSQL', level: 80, category: 'backend', icon: '🐘' },
  { name: 'Database Migration', level: 78, category: 'backend', icon: '🗃️' },

  // AI & Automation (resume sequence)
  { name: 'n8n Workflow Automation', level: 90, category: 'ai', icon: '🔄' },
  { name: 'Make.com', level: 86, category: 'ai', icon: '🛠️' },
  { name: 'Prompt Engineering', level: 82, category: 'ai', icon: '💬' },
  { name: 'LLM Integration', level: 80, category: 'ai', icon: '🤖' },
  { name: 'AI Data Annotation', level: 85, category: 'ai', icon: '🏷️' },
  { name: 'Generative AI', level: 82, category: 'ai', icon: '✨' },
  { name: 'AI-Assisted Development', level: 86, category: 'ai', icon: '🧠' },
  { name: 'Marketing Automation', level: 88, category: 'ai', icon: '⚙️' },
  { name: 'CRM Workflow Automation', level: 85, category: 'ai', icon: '🗂️' },

  // UI/UX & Design (resume sequence)
  { name: 'Figma', level: 92, category: 'design', icon: '🎨' },
  { name: 'Adobe XD', level: 85, category: 'design', icon: '🎨' },
  { name: 'Wireframing', level: 86, category: 'design', icon: '📐' },
  { name: 'Prototyping', level: 85, category: 'design', icon: '🔄' },
  { name: 'User Interface Design', level: 88, category: 'design', icon: '🖌️' },
  { name: 'User Experience Optimization', level: 84, category: 'design', icon: '✨' },
  { name: 'Responsive Design', level: 92, category: 'design', icon: '📱' },

  // Digital Marketing & SEO (resume sequence)
  { name: 'SEO', level: 88, category: 'marketing', icon: '🔎' },
  { name: 'AEO', level: 82, category: 'marketing', icon: '🤖' },
  { name: 'GEO', level: 80, category: 'marketing', icon: '🌍' },
  { name: 'Google Ads Management', level: 84, category: 'marketing', icon: '📢' },
  { name: 'Google Analytics', level: 85, category: 'marketing', icon: '📊' },
  { name: 'Social Media Content', level: 86, category: 'marketing', icon: '📱' },
  { name: 'Blog Content Strategy', level: 84, category: 'marketing', icon: '✍️' },
  { name: 'Automated Content Workflows', level: 86, category: 'marketing', icon: '🔁' },
  { name: 'CRM Management', level: 85, category: 'marketing', icon: '🗂️' },

  // Tools & DevOps (resume sequence)
  { name: 'Git', level: 90, category: 'tools', icon: '📝' },
  { name: 'GitHub', level: 92, category: 'tools', icon: '🐙' },
  { name: 'Postman', level: 84, category: 'tools', icon: '📮' },
  { name: 'Vercel', level: 84, category: 'tools', icon: '▲' },
  { name: 'Netlify', level: 88, category: 'tools', icon: '🌐' },
  { name: 'pgAdmin', level: 76, category: 'tools', icon: '🐘' },
];

export const getSkillsByCategory = (category: string) => {
  return skills.filter(skill => skill.category === category);
};

export interface Technology {
  name: string;
  logo: string;
  category: 'frontend' | 'design' | 'tools';
  color: string;
}

export const technologies: Technology[] = [
  // Frontend Technologies
  { name: 'React', logo: '/tech-logos/react.svg', category: 'frontend', color: '#61DAFB' },
  { name: 'HTML5', logo: '/tech-logos/html5.svg', category: 'frontend', color: '#E34F26' },
  { name: 'CSS3', logo: '/tech-logos/css3.svg', category: 'frontend', color: '#1572B6' },
  { name: 'JavaScript', logo: '/tech-logos/javascript.svg', category: 'frontend', color: '#F7DF1E' },
  { name: 'TypeScript', logo: '/tech-logos/typescript.svg', category: 'frontend', color: '#3178C6' },
  { name: 'Tailwind CSS', logo: '/tech-logos/tailwindcss.svg', category: 'frontend', color: '#06B6D4' },
  { name: 'Bootstrap', logo: '/tech-logos/bootstrap.svg', category: 'frontend', color: '#7952B3' },
  { name: 'Vite', logo: '/tech-logos/vite.svg', category: 'frontend', color: '#646CFF' },
  
  // Design Tools
  { name: 'Figma', logo: '/tech-logos/figma.svg', category: 'design', color: '#F24E1E' },
  { name: 'Adobe XD', logo: '/tech-logos/adobexd.svg', category: 'design', color: '#FF61F6' },
  
  // Development Tools
  { name: 'Git', logo: '/tech-logos/git.svg', category: 'tools', color: '#F05032' },
  { name: 'GitHub', logo: '/tech-logos/github.svg', category: 'tools', color: '#181717' },
  { name: 'VS Code', logo: '/tech-logos/vscode.svg', category: 'tools', color: '#007ACC' },
];
