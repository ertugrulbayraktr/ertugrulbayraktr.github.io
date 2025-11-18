"use client";

import { useState } from 'react';
import Image from 'next/image';

const TimelineExperiences = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  const experiences = [
    {
      year: "August 2025 - October 2025 (3 months)",
      title: "Software Engineer Intern",
      company: "SunExpress Airlines",
      logo: "/images/company-logos/SunExpress.png",
      description: "At SunExpress, I worked with a modern enterprise tech stack that included .NET Core, REST and GraphQL APIs, Entity Framework Core, MSSQL, and Redis within a layered architecture. I contributed to improving API structures, data workflows, and overall code quality by applying clean architecture and scalable backend design principles. On the frontend, I collaborated on internal interfaces using React, while actively participating in version control, CI/CD, and code review processes through Azure DevOps, Git, and automated pipelines. This experience strengthened my technical foundation in the .NET ecosystem, modern API development, and enterprise-grade engineering practices.",
      type: "work"
    },
    {
      year: "September 2023 - October 2024 (1 year 2 months)",
      title: "Founder",
      company: "LLUX",
      logo: "/images/company-logos/llux.png",
      description: "I founded LLUX as a small e-commerce business specializing in home appliances and small electronics. I managed product sourcing, inventory, pricing, and customer relations while maintaining the online sales infrastructure across marketplace platforms. During this period, I achieved an 8.8 customer satisfaction rating, consistently delivering reliable service and smooth order fulfillment. This experience strengthened my practical skills in entrepreneurship, operations, and customer-focused business management.",
      type: "work"
    },
    {
      year: "September 2021 - June 2023 (1 year 10 months)",
      title: "Technical Analyst",
      company: "BFRC - Bahcesehir University Financial Research Center",
      logo: "/images/company-logos/BFRC.png",
      description: "I conduct technical analysis on financial markets, examining price movements, patterns, and indicators to provide insights and forecasts. This role enhances my analytical skills and deepens my understanding of market trends and strategies.",
      type: "work"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Experiences</h2>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-[#2C3E50]"></div>
          
          {experiences.map((experience, index) => (
            <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              {/* Company Logo */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white rounded-full border-3 border-[#2C3E50] shadow-lg z-10 flex items-center justify-center overflow-hidden">
                {experience.logo ? (
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    width={60}
                    height={60}
                    className={`object-contain ${experience.company === 'SunExpress Airlines' ? 'scale-150' : ''} ${experience.company === 'BFRC - Bahcesehir University Financial Research Center' ? 'scale-150' : ''}`}
                  />
                ) : (
                  <div className="w-16 h-16 bg-[#2C3E50] rounded-full flex items-center justify-center">
                    {experience.type === 'education' ? (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14,6V4H10V6H8V10H6V12A2,2 0 0,0 8,14H16A2,2 0 0,0 18,12V10H16V6H14M12,4H14V6H12V4M8,8H16V12H8V8Z"/>
                      </svg>
                    )}
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
                  <div className="text-sm font-medium text-[#2C3E50] mb-2 flex items-center gap-2">
                    {experience.type === 'education' && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                      </svg>
                    )}
                    {experience.type === 'work' && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14,6V4H10V6H8V10H6V12A2,2 0 0,0 8,14H16A2,2 0 0,0 18,12V10H16V6H14M12,4H14V6H12V4M8,8H16V12H8V8Z"/>
                      </svg>
                    )}
                    <span>{experience.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-left">{experience.title}</h3>
                  <h4 className="text-[#2C3E50] font-medium mb-3 text-left">{experience.company}</h4>
                  <p className="text-gray-600 text-left">
                    {expandedIndex === index 
                      ? experience.description 
                      : truncateText(experience.description, 150)}
                  </p>
                  {experience.description.length > 150 && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="mt-3 text-[#2C3E50] hover:text-[#1A252F] font-medium text-sm flex items-center gap-1 transition-colors underline"
                    >
                      {expandedIndex === index ? (
                        <>
                          <span>Show less</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        </>
                      ) : (
                        <>
                          <span>Read more</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
              
              {/* Empty space for the other side */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineExperiences;
