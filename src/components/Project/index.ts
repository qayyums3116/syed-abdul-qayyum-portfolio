import { webProjects } from './WebProjects';
import { uiProjects } from './UiProjects';
import { n8nProjects } from './N8nProjects';
import { makeProjects } from './MakeProjects';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  role: string;
  technologies: string[];
  features: string[];
  image?: string;
  video?: string;
  videoPlaybackRate?: number; // thumbnail playback speed (e.g. 1.5)
  liveUrl?: string;
  githubUrl?: string;
  status: 'completed' | 'in-progress' | 'planned';
  category: 'web-app' | 'ui-design' | 'mobile' | 'ai' | 'n8n' | 'make';
}

// Combine all projects
export const projects: Project[] = [
  ...webProjects,
  ...makeProjects,
  ...uiProjects,
  ...n8nProjects,
];

// Utility functions
export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter((project) => project.category === category);
};

// Export individual project arrays for easy access
export { webProjects, uiProjects, n8nProjects, makeProjects };