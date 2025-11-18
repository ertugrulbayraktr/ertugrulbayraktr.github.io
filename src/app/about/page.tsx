import { Metadata } from "next";
import Education from "@/components/sections/about/Education";
import Certificates from "@/components/sections/about/Certificates";
import Leadership from "@/components/sections/about/Leadership";
import CareerGoals from "@/components/sections/about/CareerGoals";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Ertuğrul Bayraktar, his education, experience, and skills in software development.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-gray-700 mb-4">
        Growing up with a strong passion for sports, discipline has always been a defining part of my life. As a licensed kickboxer with experience in multiple athletic fields, I learned early on the value of consistency, focus, and resilience — qualities that have shaped both my personal growth and my approach to engineering.
      </p>
      <p className="text-gray-700 mb-4">
        My interest in technology started at a young age and naturally evolved into a deeper commitment during university, where I immersed myself in software development. What began as curiosity quickly became a long-term pursuit, leading me toward backend engineering and modern web technologies. Over time, I gravitated toward the .NET ecosystem, scalable backend design, and the principles of clean, maintainable code. Working with technologies like ASP.NET Core, React, SQL Server, Redis, and RabbitMQ helped me build a strong engineering foundation centered around problem-solving and system reliability.
      </p>
      <p className="text-gray-700 mb-4">
        Alongside software development, I took my first step into entrepreneurship by founding LLux, an e-commerce business I launched during university. Managing product development, operations, and customer workflows gave me hands-on experience in building small real-world systems — and taught me the practical value of ownership, adaptability, and delivering results.
      </p>
      <p className="text-gray-700 mb-4">
        I also have a long-standing personal interest in financial markets. For over six years, I have been involved in trading and long-term investing as an individual investor. This experience deepened my understanding of market behavior, risk, and strategy, adding another dimension to how I analyze complex problems and make decisions.
      </p>
      <p className="text-gray-700 mb-4">
        My latest professional step was joining SunExpress Airlines within the Business Airline Solutions team, where I contributed to enterprise-level internal applications. Working in a real corporate engineering environment strengthened my understanding of scalable architecture, Agile practices, CI/CD pipelines, and teamwork in large-scale systems.
      </p>
      <p className="text-gray-700 mb-8">
        Today, I continue to focus on backend engineering with .NET, cloud-based development, and system design — while also expanding my knowledge in AI and machine learning. My goal is to combine these areas into meaningful, high-impact technological work throughout my career.
      </p>

      <Education />
      <Certificates />
      <Leadership />
      <CareerGoals />
    </div>
  );
}
