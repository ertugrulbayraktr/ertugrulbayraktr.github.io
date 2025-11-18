import { getProjectBySlug, projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }
  
  return {
    title: project.title,
    description: project.description,
  };
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    notFound();
  }
  
  return (
    <div className="max-w-4xl mx-auto px-6">
      <Link href="/projects" className="text-[#2C3E50] hover:underline mb-8 inline-block">
        ← Back to Projects
      </Link>
      
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Overview</h2>
          <p className="text-gray-700 mb-4">{project.description}</p>
          {project.longDescription && (
            <p className="text-gray-700">{project.longDescription}</p>
          )}
        </div>
        
        {project.slug === 'melascan' && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">System Architecture</h2>
            <p className="text-gray-700 mb-4">
              MelaScan employs a three-layer architecture:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
              <li>
                <strong>AI Layer:</strong> Utilizes a custom-trained convolutional neural network (CNN) model to analyze skin lesion images and classify them based on melanoma risk factors.
              </li>
              <li>
                <strong>Mobile Application Layer:</strong> A React Native application that provides the user interface for capturing images, displaying results, and managing user profiles.
              </li>
              <li>
                <strong>Backend Layer:</strong> A Spring Boot application that handles authentication, stores user data and scan history, and communicates with the AI model for image processing.
              </li>
            </ul>
            <p className="text-gray-700">
              The layers communicate through RESTful APIs, with the mobile app sending images to the backend, which then processes them through the AI model and returns the results to be displayed to the user.
            </p>
          </div>
        )}
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Features</h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#2C3E50] hover:bg-[#1A252F] text-white rounded-md transition-colors"
          >
            {project.slug === 'melascan' ? 'Mobile Repository' : 'GitHub Repository'}
          </a>
          
          {project.slug === 'melascan' && (
            <>
              <a 
                href="https://github.com/alpersahin21/melascan-backend" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#2C3E50] hover:bg-[#1A252F] text-white rounded-md transition-colors"
              >
                Backend Repository
              </a>
              <a 
                href="https://github.com/alpersahin21/melascan-ai-model" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#2C3E50] hover:bg-[#1A252F] text-white rounded-md transition-colors"
              >
                AI Model Repository
              </a>
            </>
          )}
          
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[#2C3E50] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white rounded-md transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 