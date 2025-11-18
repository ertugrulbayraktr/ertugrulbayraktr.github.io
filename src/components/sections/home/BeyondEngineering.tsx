"use client";

const BeyondEngineering = () => {
  const interests = [
    {
      title: "Financial Markets & Trading",
      description: "Passionate about financial markets, trading, and long-term investing. For over six years, I have been actively involved in trading as an individual investor, building a disciplined and consistent investment approach.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Entrepreneurship",
      description: "Driven by a passion for creating digital products and bringing ideas to life. I founded LLux during university, gaining hands-on experience in product development, operations, and business management — my first real step into the entrepreneurial world.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Athlete",
      description: "Professional licensed kickboxer with a long-standing background in multiple sports. I value discipline, consistency, and an active lifestyle, believing they contribute to both personal well-being and professional performance.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Beyond Engineering</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            While engineering is my core expertise, I&apos;m passionate about diverse fields that shape my perspective and drive innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
            >
              <div className="text-[#2C3E50] mb-4 flex justify-center">
                {interest.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">
                {interest.title}
              </h3>
              <p className="text-gray-600 text-center">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondEngineering;
