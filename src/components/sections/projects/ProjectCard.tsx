import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  project: {
    id: string;
    slug: string;
    title: string;
    description: string;
    image?: string;
    technologies: string[];
    github: string;
    demo?: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
      {/* Project Image */}
      {project.image && (
        <div className="relative w-full h-48 bg-gray-100 overflow-hidden flex items-center justify-center">
          <div className={(['expense-tracker', 'notes-api', 'cross-platform-media-player'].includes(project.slug)) ? 'relative w-[140%] h-[140%]' : 'relative w-full h-full'}>
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              style={project.slug === 'notes-api' ? { objectPosition: 'center 20%' } : {}}
            />
          </div>
        </div>
      )}
      
      <div className="p-6" data-project-id={project.id}>
        <Link href={`/projects/${project.slug}`} className="block">
          <h3 className="text-xl font-bold mb-2 hover:text-[#2C3E50] transition-colors">{project.title}</h3>
        </Link>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
        <div className="flex gap-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#2C3E50] hover:underline"
          >
            {project.slug === 'melascan' ? 'Mobile Repository' : 'GitHub Repository'}
          </a>
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#2C3E50] hover:underline"
            >
              Live Demo
            </a>
          )}
          <Link 
            href={`/projects/${project.slug}`}
            className="text-[#2C3E50] hover:underline ml-auto"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 