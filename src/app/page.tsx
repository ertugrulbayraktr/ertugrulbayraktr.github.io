import Hero from "@/components/sections/home/Hero";
import BeyondEngineering from "@/components/sections/home/BeyondEngineering";
import TimelineExperiences from "@/components/sections/home/TimelineExperiences";
import TechStack from "@/components/sections/home/TechStack";
import FeaturedProjects from "@/components/sections/home/FeaturedProjects";

export const metadata = {
  title: "Ertuğrul Bayraktar | Software Engineer",
  description:
    "Personal portfolio of Ertuğrul Bayraktar, a Software Engineer passionate about software development, trading, and entrepreneurship.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <BeyondEngineering />
      <TimelineExperiences />
      <TechStack />
      <FeaturedProjects />
    </>
  );
}
