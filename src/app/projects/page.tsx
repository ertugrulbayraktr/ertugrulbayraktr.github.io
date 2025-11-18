import { Metadata } from 'next';
import ProjectCard from '@/components/sections/projects/ProjectCard';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore my software development projects, including web applications, mobile apps, and more.',
};

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <p className="text-gray-700 mb-8">
        Here are some of the projects I&apos;ve worked on. Each project represents different skills and technologies I&apos;ve learned throughout my journey as a developer.
      </p>
      
      {/* First Row: 2 projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <ProjectCard key={projects[0].id} project={projects[0]} />
        <ProjectCard key={projects[1].id} project={projects[1]} />
      </div>

      {/* Second Row: 2 projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <ProjectCard key={projects[2].id} project={projects[2]} />
        <ProjectCard key={projects[3].id} project={projects[3]} />
      </div>

      {/* Third Row: 2 projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <ProjectCard key={projects[4].id} project={projects[4]} />
        <ProjectCard key={projects[5].id} project={projects[5]} />
      </div>

      {/* Fourth Row: 3 projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard key={projects[6].id} project={projects[6]} />
        <ProjectCard key={projects[7].id} project={projects[7]} />
        <ProjectCard key={projects[8].id} project={projects[8]} />
      </div>
    </div>
  );
}