import { motion } from 'framer-motion';
import { X, ExternalLink, Github, Eye, Code, Calendar, User, Tag } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/components/Project';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'in-progress':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'planned':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'web-app':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'ui-design':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/50';
      case 'n8n':
        return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'ai':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] w-[95vw] sm:w-[90vw] md:w-[85vw] overflow-y-auto glass border-primary/20 mx-2 sm:mx-4 p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl md:text-2xl font-bold hero-text leading-tight break-words pr-8">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Media (Video or Image) */}
          <div className="relative w-full aspect-[16/9] max-h-[200px] sm:max-h-[250px] md:max-h-80 rounded-lg overflow-hidden bg-muted/20">
            {project.video ? (
              <video
                src={project.video}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            ) : project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Code className="w-16 h-16 text-muted-foreground/50" />
              </div>
            )}
          </div>

          {/* Project Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {/* Status */}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Status:</span>
              <Badge
                variant="outline"
                className={`capitalize ${getStatusColor(project.status)}`}
              >
                {project.status.replace('-', ' ')}
              </Badge>
            </div>

            {/* Category */}
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Category:</span>
              <Badge
                variant="outline"
                className={`capitalize ${getCategoryColor(project.category)}`}
              >
                {project.category.replace('-', ' ')}
              </Badge>
            </div>

            {/* Role */}
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Role:</span>
              <span className="text-sm font-medium text-accent">{project.role}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">Project Overview</h3>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base break-words">
              {project.longDescription}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-foreground">Key Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border/50">
            {/* Web Projects: Live View + Get Code */}
            {project.category === 'web-app' && (
              <>
                {project.liveUrl && (
                  <Button
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="flex-1"
                    variant="default"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live View
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="flex-1"
                    variant="outline"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Get Code
                  </Button>
                )}
              </>
            )}

            {/* UI/UX Projects: Only View Design */}
            {project.category === 'ui-design' && project.liveUrl && (
              <Button
                onClick={() => window.open(project.liveUrl, '_blank')}
                className="w-full"
                variant="default"
              >
                <Eye className="w-4 h-4 mr-2" />
                View Design
              </Button>
            )}

            {/* n8n Projects: Get Workflow + See Demo */}
            {project.category === 'n8n' && (
              <>
                {project.githubUrl && (
                  <Button
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="flex-1"
                    variant="outline"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Get Workflow
                  </Button>
                )}
                {project.liveUrl && (
                  <Button
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="flex-1"
                    variant="default"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    See Demo
                  </Button>
                )}
              </>
            )}

            {/* Fallback for projects without links */}
            {((project.category === 'web-app' && !project.liveUrl && !project.githubUrl) ||
              (project.category === 'ui-design' && !project.liveUrl) ||
              (project.category === 'n8n' && !project.liveUrl && !project.githubUrl)) && (
              <div className="flex-1 text-center text-sm text-muted-foreground py-2">
                Links coming soon
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
