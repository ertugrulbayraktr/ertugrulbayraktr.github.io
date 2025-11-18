const Experience = () => {
  const experienceItems = [
    {
      id: "exp-codeway",
      position: "Fullstack Developer",
      company: "Codeway",
      location: "Istanbul",
      period: "08/2025 – Present",
      description: [],
    },
    {
      id: "exp-1",
      position: "Software Engineering Intern",
      company: "T-Fashion",
      location: "Istanbul",
      period: "03/2025 – 06/2025",
      description: [
        "Built and maintained fullstack functionalities for the T-Fashion app, using React/Next.js on the frontend and TypeScript, GraphQL, and MongoDB on the backend, with AWS Lambda for serverless execution and AWS SQS for asynchronous task processing.",
      ],
    },
    {
      id: "exp-2",
      position: "Software Engineering Intern",
      company: "Albert Health",
      location: "Istanbul",
      period: "08/2024 – 01/2025",
      description: [
        "Contributed to backend development of Albert application using microservices architecture",
        "Built RESTful APIs and business logic using Spring Boot and JPA/Hibernate",
        "Implemented event-driven communication patterns with Apache Kafka",
        "Utilized Grafana and Graylog for application monitoring and logging",
        "Learned authentication flows using Keycloak",
        "Practiced deployment workflows with AWS and Rancher, utilized Docker and Kubernetes for containerized microservices",
      ],
    },
    {
      id: "exp-3",
      position: "Software Engineering Intern",
      company: "Softtech",
      location: "Istanbul",
      period: "04/2024 – 07/2024",
      description: [
        "Contributed to the front-end development of Lokum application using React and Next.js",
        "Enhanced user interfaces and improved application performance",
      ],
    },
    {
      id: "exp-4",
      position: "Software Engineering Intern",
      company: "Garanti BBVA Teknoloji",
      location: "Istanbul",
      period: "07/2023 – 08/2023",
      description: [
        "Developed RESTful APIs (Java, Spring Framework, OracleSQL, gRPC)",
        "Contributed to a Batch service by implementing data-organization algorithms and unit tests (JUnit/Mockito)",
      ],
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="space-y-8">
          {experienceItems.map((item) => (
            <div
              key={item.id}
              className="border-l-4 border-[#2C3E50] pl-4 py-1"
            >
              <h3 className="text-xl font-semibold">{item.position}</h3>
              <p className="text-gray-700 mb-1">
                {item.company}, {item.location}
              </p>
              <p className="text-gray-700 text-sm mb-2">{item.period}</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {item.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
