"use client";

// 
import Image from "next/image";

const Certificates = () => {
  // const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const achievements = [
    {
      id: "award-1",
      title: "Honour Degree",
      issuer: "Bahçeşehir University",
      date: "2024 - 2025 Spring Semester",
      description: "",
      type: "award"
    }
  ];

  const certificates = [
        {
      id: "cert-1",
      title: "CS50's Web Programming with Python and JavaScript",
      issuer: "Harvard University",
      date: "January 2025",
      description: "Mastered full-stack web development through hands-on projects and comprehensive coursework in Python, Django, and JavaScript. Applied software engineering best practices including version control (Git), database design (SQL), and responsive web design. Delivered 5 production-ready web applications and completed a capstone project involving complex web application architecture, user authentication and database integration.",
      thumbnail: "/images/certificates/cs50-web-thumb.png",
      fullImage: "/images/certificates/cs50-web-thumb.png"
    },
    {
      id: "cert-2",
      title: "KOSGEB Entrepreneurship Training Certificate",
      issuer: "KOSGEB (Small and Medium Enterprises Development Organization)",
      date: "September 2023",
      description: "Official entrepreneurship training covering business planning, market analysis, and startup fundamentals.",
      thumbnail: null,
      fullImage: null,
      credentialId: "KSB01UGE0111331136"
    },
    {
      id: "cert-3",
      title: "Introduction to Programming with Java",
      issuer: "BTK Academy",
      date: "2024",
      description: "Comprehensive Java programming fundamentals course covering core concepts and practical applications.",
      thumbnail: "/images/certificates/btk-java-thumb.png",
      fullImage: "/images/certificates/btk-java-thumb.png"
    },
    {
      id: "cert-4",
      title: "Java (Basic) Certificate",
      issuer: "HackerRank",
      date: "July 2025",
      description: "Fundamental Java programming concepts including object-oriented programming, data structures, and algorithms.",
      thumbnail: "/images/certificates/hackerrank-java-thumb.png",
      fullImage: "/images/certificates/hackerrank-java-thumb.png",
      credentialId: "65D7AE07D761"
    },

    {
      id: "cert-5",
      title: "Introduction to User Experience Design",
      issuer: "Georgia Institute of Technology",
      date: "March 2024",
      description: "Foundational course in UX design principles, user research, and design thinking methodologies.",
      thumbnail: "/images/certificates/gatech-ux-thumb.png",
      fullImage: "/images/certificates/gatech-ux-thumb.png"
    },
    {
      id: "cert-6",
      title: "Introduction to User Experience Principles and Processes",
      issuer: "University of Michigan",
      date: "June 2024",
      description: "Advanced UX course covering user research, prototyping, usability testing, and design iteration.",
      thumbnail: "/images/certificates/umich-ux-thumb.png",
      fullImage: "/images/certificates/umich-ux-thumb.png"
    },
    {
      id: "cert-7",
      title: "Foundations of Project Management",
      issuer: "Google",
      date: "August 2024",
      description: "Google's comprehensive project management course covering Agile, Scrum, and project lifecycle management.",
      thumbnail: "/images/certificates/google-pm-thumb.png",
      fullImage: "/images/certificates/google-pm-thumb.png"
    },
    {
      id: "cert-8",
      title: "GNÇYTNK'25 Gelişim Rotası",
      issuer: "Turkcell",
      date: "July 2025",
      description: "Professional development program focusing on technology trends, leadership skills, and career advancement strategies.",
      thumbnail: "/images/certificates/turkcell-thumb.png",
      fullImage: "/images/certificates/turkcell-thumb.png"
    },
    {
      id: "cert-9",
      title: "Aviation Security Certificate",
      issuer: "Directorate General of Civil Aviation",
      date: "August 2025",
      description: "Certified in aviation security procedures, regulations, and best practices to ensure compliance with international civil aviation safety standards.",
      thumbnail: "/images/certificates/shgm-thumb.png",
      fullImage: "/images/certificates/shgm-thumb.png"
    }
  ];

  const openCertificate = (fullImage: string | null) => {
    if (fullImage) {
      window.open(fullImage, '_blank');
    }
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Certifications & Achievements</h2>
      
      {/* Achievements Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-[#2C3E50]">Academic Achievements</h3>
        <div className="grid grid-cols-1 gap-4">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#2C3E50]">
              <div className="flex items-center mb-3">
                <h4 className="text-xl font-semibold text-gray-900">{achievement.title}</h4>
              </div>
              <p className="text-[#2C3E50] font-medium mb-1">{achievement.issuer}</p>
              <p className="text-gray-600 text-sm mb-2">{achievement.date}</p>
              <p className="text-gray-700">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-[#2C3E50]">Professional Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div key={cert.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              {/* Certificate Thumbnail */}
              {cert.thumbnail ? (
                <div 
                  className="relative w-full h-40 bg-gray-200 rounded-lg mb-4 cursor-pointer overflow-hidden hover:opacity-90 transition duration-300"
                  onClick={() => openCertificate(cert.fullImage)}
                >
                  <Image
                    src={cert.thumbnail}
                    alt={`${cert.title} Certificate`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Click indicator */}
                  <div className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-1">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              ) : (
                <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-gray-500 text-sm">Certificate Preview</p>
                  </div>
                </div>
              )}
              
              {/* Certificate Info */}
              <h4 className="text-lg font-semibold mb-2">{cert.title}</h4>
              <p className="text-[#2C3E50] font-medium mb-1">{cert.issuer}</p>
              <p className="text-gray-600 text-sm mb-2">{cert.date}</p>
              {cert.credentialId && (
                <p className="text-gray-500 text-xs mb-2">Credential ID: {cert.credentialId}</p>
              )}
              <p className="text-gray-700 text-sm mb-4">{cert.description}</p>
              
              {/* Action Buttons */}
              <div className="flex gap-2">
                {cert.fullImage ? (
                  <button 
                    onClick={() => openCertificate(cert.fullImage)}
                    className="w-full px-3 py-2 bg-[#2C3E50] text-white text-sm rounded-md hover:bg-[#1A252F] transition duration-300"
                  >
                    View Certificate
                  </button>
                ) : cert.id === "cert-2" ? (
                  // KOSGEB için hiç buton gösterme
                  <div></div>
                ) : (
                  <button 
                    disabled
                    className="w-full px-3 py-2 bg-gray-300 text-gray-500 text-sm rounded-md cursor-not-allowed"
                  >
                    Certificate Coming Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
