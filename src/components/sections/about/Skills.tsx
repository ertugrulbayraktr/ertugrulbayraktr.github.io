const Skills = () => {
  const skillCategories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'C', 'JavaScript', 'TypeScript', 'Go (Beginner)']
    },
    {
      id: 'frontend',
      title: 'Frontend',
      skills: ['React', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Material UI']
    },
    {
      id: 'backend',
      title: 'Backend',
      skills: ['Spring Framework', 'JPA/Hibernate', 'Microservices Architecture', 'RESTful APIs', 'Kafka', 'Node.js', 'Express.js', 'Flask']
    },
    {
      id: 'database',
      title: 'Database',
      skills: ['MySQL', 'PostgreSQL','MongoDB', 'RDBMS']
    },
    {
      id: 'devops',
      title: 'DevOps & Cloud',
      skills: ['Docker', 'Kubernetes', 'AWS S3', 'AWS ECS', 'Rancher', 'Grafana', 'Graylog']
    },
    {
      id: 'ml',
      title: 'Machine Learning',
      skills: ['Scikit-learn', 'PyTorch', 'OpenCV', 'Pandas', 'Numpy', 'Matplotlib']
    },
    {
      id: 'testing',
      title: 'Testing',
      skills: ['JUnit', 'Mockito']
    },
    {
      id: 'languages-spoken',
      title: 'Languages',
      skills: ['Turkish (Native)', 'English (Fluent)']
    },
    {
      id: 'interests',
      title: 'Interests',
      skills: ['AI', 'Entrepreneurship', 'Finance', 'Scuba Diving', 'Machine Learning', 'Deep Learning']
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Skills & Interests</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <div key={category.id} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 