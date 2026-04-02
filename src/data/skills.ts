export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'design' | 'tools' | 'other';
  icon?: string;
}

export const skills: Skill[] = [
  // Frontend Development
  { name: 'HTML5', level: 95, category: 'frontend', icon: '🌐' },
  { name: 'CSS3', level: 92, category: 'frontend', icon: '🎨' },
  { name: 'JavaScript', level: 88, category: 'frontend', icon: '⚡' },
  { name: 'React.js', level: 90, category: 'frontend', icon: '⚛️' },
  { name: 'Vite', level: 85, category: 'frontend', icon: '⚡' },
  { name: 'Tailwind CSS', level: 93, category: 'frontend', icon: '💨' },
  { name: 'Bootstrap', level: 87, category: 'frontend', icon: '🅱️' },
  { name: 'TypeScript', level: 80, category: 'frontend', icon: '📘' },
  { name: 'Next.js', level: 82, category: 'frontend', icon: '▲' },
  { name: 'Shadcn/UI', level: 80, category: 'frontend', icon: '🧩' },
  { name: 'Material UI', level: 78, category: 'frontend', icon: '🎛️' },
  
  // Design Tools
  { name: 'Figma', level: 92, category: 'design', icon: '🎨' },
  { name: 'Adobe XD', level: 85, category: 'design', icon: '🎨' },
  { name: 'UI/UX Design', level: 88, category: 'design', icon: '✨' },
  { name: 'Prototyping', level: 85, category: 'design', icon: '🔄' },
  
  // Tools & Technologies
  { name: 'Git', level: 90, category: 'tools', icon: '📝' },
  { name: 'GitHub', level: 92, category: 'tools', icon: '🐙' },
  { name: 'VS Code', level: 95, category: 'tools', icon: '💻' },
  { name: 'npm/yarn', level: 88, category: 'tools', icon: '📦' },
  { name: 'Postman', level: 84, category: 'tools', icon: '📮' },
  { name: 'Vercel', level: 84, category: 'tools', icon: '▲' },
  { name: 'Netlify', level: 88, category: 'tools', icon: '🌐' },
  { name: 'pgAdmin', level: 76, category: 'tools', icon: '🐘' },
  
  // Other Skills
  { name: 'Project Management', level: 90, category: 'other', icon: '📋' },
  { name: 'QA Testing', level: 82, category: 'other', icon: '🔍' },
  { name: 'Django', level: 80, category: 'other', icon: '🐍' },
  { name: 'FastAPI', level: 80, category: 'other', icon: '⚡' },
  { name: 'NestJS', level: 75, category: 'other', icon: '🪺' },
  { name: 'Node.js', level: 80, category: 'other', icon: '🟢' },
  { name: 'PostgreSQL', level: 80, category: 'other', icon: '🐘' },
  { name: 'AI Workflow Automation (n8n)', level: 90, category: 'other', icon: '🔄' },
  { name: 'Make.com Automation', level: 86, category: 'other', icon: '🛠️' },
  { name: 'LLM Integration', level: 80, category: 'other', icon: '🤖' },
  { name: 'Prompt Engineering', level: 82, category: 'other', icon: '💬' },
  { name: 'AI Data Annotation', level: 85, category: 'other', icon: '🏷️' },
  { name: 'RESTful APIs', level: 84, category: 'other', icon: '🔌' },
  { name: 'Robotics Task Analysis', level: 78, category: 'other', icon: '🦾' },
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
