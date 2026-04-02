export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: 'full-time' | 'internship' | 'freelance';
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: 'codesquad-fullstack-ai',
    title: 'Junior Full Stack Developer & AI Automation Enthusiast',
    company: 'CodeSquad.AI',
    location: 'Lahore, Pakistan',
    duration: 'Jan 2025 – Present',
    type: 'full-time',
    description:
      'Developing scalable full-stack applications and intelligent automation workflows using modern frontend, backend, and AI tools.',
    responsibilities: [
      'Develop and maintain full-stack applications with React.js, Next.js, TypeScript, Tailwind CSS, Django, and FastAPI',
      'Design and ship user-centric UI/UX by turning Figma and Adobe XD prototypes into responsive production interfaces',
      'Build automation workflows with n8n and Make.com to connect APIs and streamline repetitive business processes',
      'Collaborate across the full SDLC including requirements, reviews, integrations, testing, and release cycles',
      'Document design systems, development workflows, and automation strategies for team-wide best practices'
    ],
    technologies: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Django',
      'FastAPI',
      'PostgreSQL',
      'n8n',
      'Make.com'
    ],
    achievements: [
      'Delivered scalable full-stack products from database to deployment',
      'Improved productivity with AI-driven and API-based automation workflows',
      'Strengthened technical quality and UX through cross-functional collaboration'
    ]
  },
  {
    id: 'turing-ai-video-annotation',
    title: 'AI Video Annotation Trainee',
    company: 'Turing Enterprises, Inc.',
    location: 'Remote',
    duration: 'Sep 2025 – Nov 2025',
    type: 'full-time',
    description:
      'Analyzed and annotated robotic task videos to support high-quality AI training datasets and model improvement.',
    responsibilities: [
      'Analyzed robotic task videos and produced structured annotations for model training',
      'Identified objectives, movement sequences, and success/failure outcomes to improve accuracy',
      'Delivered precise timestamped annotations through rigorous quality assurance processes',
      'Collaborated effectively in a distributed remote team environment'
    ],
    technologies: [
      'Machine Learning',
      'AI Data Annotation',
      'Quality Assurance',
      'Dataset Curation'
    ],
    achievements: [
      'Maintained high annotation quality standards',
      'Contributed to reliable AI training datasets',
      'Supported model quality improvements through accurate labeling'
    ]
  },
  {
    id: 'concordia-ai-automation-instructor',
    title: 'AI Automation Instructor',
    company: 'Concordia College',
    location: 'Lahore, Pakistan',
    duration: 'Jul 2025 – Sep 2025',
    type: 'full-time',
    description:
      'Designed and delivered an AI Automation course focused on practical workflow automation and digital entrepreneurship.',
    responsibilities: [
      'Designed and taught a 2-month AI Automation curriculum around n8n and Make.com',
      'Guided students to build multi-step workflows connecting APIs, databases, and third-party services',
      'Mentored students on freelancing readiness and monetizing automation skills',
      'Shared practical patterns for building real-world business automations'
    ],
    technologies: [
      'n8n',
      'Make.com',
      'API Integration',
      'Workflow Design'
    ],
    achievements: [
      'Successfully delivered a complete cohort-based training program',
      'Enabled students to build job-ready automation solutions',
      'Bridged no-code automation skills with market-focused outcomes'
    ]
  },
  {
    id: 'codesquad-frontend-uiux-intern',
    title: 'Frontend Development Intern & UI/UX Designer',
    company: 'CodeSquad.AI',
    location: 'Lahore, Pakistan',
    duration: 'Jun 2024 – Dec 2024',
    type: 'internship',
    description:
      'Contributed to responsive frontend delivery and interface design across multiple projects.',
    responsibilities: [
      'Converted Figma and Adobe XD designs into responsive, cross-browser interfaces using React.js and Tailwind CSS',
      'Contributed to UI/UX discussions to shape user flows, components, and design standards',
      'Built dynamic frontend experiences with React.js and Vite optimized for performance',
      'Collaborated in SDLC delivery with Python, GitHub, and frontend/backend technologies',
      'Implemented consistent modern UI patterns across project deliverables'
    ],
    technologies: [
      'React.js',
      'Vite',
      'Tailwind CSS',
      'Figma',
      'Adobe XD',
      'Python',
      'GitHub'
    ],
    achievements: [
      'Delivered multiple responsive interfaces from design-to-code workflow',
      'Improved UI consistency and user experience quality',
      'Strengthened frontend performance and cross-browser reliability'
    ]
  }
];

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  grade?: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: 'bsc-information-engineering',
    degree: 'BSc in Information Engineering Technology',
    institution: 'Superior University',
    location: 'Lahore, Pakistan',
    duration: '2021 – 2025',
    grade: '3.42 / 4.0 GPA',
    description:
      'Comprehensive program covering software engineering, web development, database management, and emerging technologies.'
  },
  {
    id: 'intermediate-ics',
    degree: 'Intermediate (ICS)',
    institution: 'Riphah International College',
    location: 'Lahore, Pakistan',
    duration: '2019 – 2021',
    grade: '765 / 1100',
    description:
      'Focus on Mathematics, Computer Science, and Physics with strong analytical and problem-solving foundation.'
  },
  {
    id: 'matriculation-science',
    degree: 'Matriculation (Science)',
    institution: 'Al Samnan High School',
    location: 'Lahore, Pakistan',
    duration: '2017 – 2019',
    grade: '836 / 1100',
    description:
      'Science stream with emphasis on Mathematics, Physics, Chemistry, and Computer Science.'
  }
];
