import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedProjects, projects } from '@/data/projects';

const FeaturedProjects = () => {
  const featuredProjects = getFeaturedProjects();
  const remainingProjects = projects.length - featuredProjects.length;

  return (
    <section className="py-16 bg-[#FBFCFC]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
            <p className="text-gray-700">Some of my recent work</p>
          </div>
          <Link 
            href="/projects" 
            className="text-[#2C3E50] hover:underline"
          >
            View all projects →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md card-hover flex flex-col"
            >
              {/* Project Image */}
              {project.image && (
                <div className="relative w-full h-48 bg-gray-100">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              )}
              
              <div className="p-6 flex-grow flex flex-col">
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
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#2C3E50] hover:underline truncate max-w-[150px]"
                      title={project.github}
                    >
                      GitHub
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
                  </div>
                  <Link 
                    href={`/projects/${project.slug}`}
                    className="text-[#2C3E50] hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {remainingProjects > 0 && (
          <div className="flex justify-center mt-12">
            <Link href="/projects" className="group">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-[#2C3E50] flex items-center justify-center shadow-md transition-transform group-hover:scale-110">
                  <span className="text-[#2C3E50] font-bold">+{remainingProjects}</span>
                </div>
                <span className="mt-2 text-gray-700 group-hover:text-[#2C3E50] transition-colors">
                </span>
              </div>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects; 