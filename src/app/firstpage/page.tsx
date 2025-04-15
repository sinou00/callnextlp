"use client";
import AnimatedPinDemo from "../components/common/animatedpindemo";

const TeamSection = () => {
  return (
    <section
      id="animated-grid"
      className="bg-custom-radial h-screen w-full flex flex-col lg:flex-row items-center justify-center md:justify-center lg:justify-center p-6 md:p-12 lg:p-16 gap-8"
    >
      {/* Left Side - Animated Team Grid */}
      <div className="w-full lg:w-1/2 flex justify-center">
        {/* Grid for large screens */}
        <div className="hidden sm:grid grid-cols-2 gap-4">
          <AnimatedPinDemo name="Yassine Harisse" position="Front-End Developer" />
          <AnimatedPinDemo name="Adam Naoui" position="Backend Developer" />
          <AnimatedPinDemo name="Axel Massucci" position="Cloud Architect" />
          <AnimatedPinDemo name="Zouhair Derouich" position="Front-End Developer" />
        </div>

        {/* Slider for small screens */}
        <div className="sm:hidden flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory w-full px-2">
          {[
            { name: "Yassine Harisse", position: "Front-End Developer" },
            { name: "Adam Naoui", position: "Backend Developer" },
            { name: "Axel Massucci", position: "Cloud Architect" },
            { name: "Zouhair Derouich", position: "Front-End Developer" },
          ].map((dev, index) => (
            <div key={index} className="snap-start flex-shrink-0">
              <AnimatedPinDemo name={dev.name} position={dev.position} />
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Team Introduction */}
      <div className="w-full lg:w-1/2 flex flex-col justify-start text-left px-2 sm:px-4 md:px-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#202C4B] to-[#101625]">
          Meet Our Team
        </h2>
        <p className="text-base sm:text-base md:text-lg text-gray-300">
        We’re not just passionate about sports, we’re also a team of developers with a shared love for the game. 
        With expertise spanning front-end, back-end, and cloud architecture, we’ve combined our skills to create an app that makes collective sports more accessible. 
        Our mission is simple: help people find nearby parks and easily join or create games in basketball, volleyball, or soccer. 
        We believe playing together should be effortless, so we built the tool to make it happen.
        </p>
      </div>
    </section>
  );
};

export default TeamSection;


