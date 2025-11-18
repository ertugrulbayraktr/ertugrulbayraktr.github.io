const Education = () => {
  const educationItems = [
    {
      id: "edu-1",
      degree: "Bachelor of Science (B.S.) in Software Engineering",
      institution: "Bahçeşehir University",
      location: "Istanbul",
      period: "September 2021 – November 2025",
      description:
        "(Scholarship)",
    },
    {
      id: "edu-2",
      degree: "English Preparatory Program",
      institution: "Bahçeşehir University",
      location: "Istanbul",
      period: "September 2020 – January 2021",
      description:
        "",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Education</h2>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="space-y-6">
          {educationItems.map((item) => (
            <div
              key={item.id}
              className="border-l-4 border-[#2C3E50] pl-4 py-3 bg-gray-50 rounded-r-lg"
            >
              <h3 className="text-xl font-semibold">{item.degree}</h3>
              <p className="text-gray-700 mb-1">
                {item.institution}, {item.location}
              </p>
              <p className="text-gray-700 text-sm mb-2">{item.period}</p>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
