"use client";

interface DeveloperCardProps {
  rectangleColor: string; // Background rectangle color
  name: string; // Developer name
  position: string; // Developer position
  profileImage: string, //Developer image
}

const DeveloperCard: React.FC<DeveloperCardProps> = ({
  rectangleColor = "white", // Default rectangle color
  name = "Developer Name", // Default name
  position = "Developer Position", // Default position
  profileImage = "./Creators/user.png", // Default image 
}) => {
  return (
    <div className="relative flex flex-col items-center w-[150px] h-[170px]">
      {/* Back rectangle */}
      <div
        className="absolute w-[150px] h-[50px] rounded-[20px] bottom-0"
        style={{ backgroundColor: rectangleColor }} // Dynamically set color
      ></div>

      {/* Front rectangle (glass effect) */}
      <div
        className="relative w-[150px] h-[170px] 
          bg-white/5 
          bg-gradient-to-br 
          from-white/10 
          to-white/2 
          backdrop-blur-3xl 
          rounded-[20px] 
          border-[1px] 
          border-transparent 
          border-t-white/40 
          border-l-white/20 
          border-b-gray-800/20 
          border-r-gray-700/10 
          shadow-lg"
      ></div>

      {/* Image on top of both rectangles */}
      <img
        src={profileImage} // Replace with your image path
        alt="Developer"
        className="absolute w-[225px] h-[184px] 
          object-cover 
          rounded-[20px] 
          bottom-[-10px]
          z-10"
      />

      {/* Text on top of the image */}
      <div className="absolute bottom-[-20px] z-20 text-center w-auto">
        {/* Developer Name */}
        <h3
          className="text-[30px] font-semibold font-['Inter'] bg-clip-text text-white leading-none"
          style={{
            backgroundImage:
              "linear-gradient(100%, #FFFFFF 17%, #999999 100%)",
          }}
        >
          {name} {/* Dynamically set name */}
        </h3>

        {/* Developer Position */}
        <p
          className="text-[15px] font-['Inter'] text-white/70"
          style={{ opacity: 0.47 }}
        >
          {position} {/* Dynamically set position */}
        </p>
      </div>
    </div>
  );
};

export default DeveloperCard;