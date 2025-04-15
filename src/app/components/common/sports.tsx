import Image from "next/image";

const Sports = () => {
  const sportsIcons = [
    "/sports/basketball.png",
    "/sports/soccer.png",
    "/sports/running.png",
    "/sports/volley.png",
  ];

  return (
    <div className="flex flex-col space-y-2">
      {sportsIcons.map((icon, index) => (
        <div
          key={index}
          className="w-[48px] h-[48px] sm: w-[32px] sm: h-[32px] bg-[#202C4B] rounded-[10px] flex items-center justify-center"
        >
          <Image 
          src={icon} 
          alt={`Sport Icon ${index + 1}`} 
          width={28} height={28}
          className="sm: w-[20px] sm: h-[20px]" 
          />
        </div>
      ))}
    </div>
  );
};

export default Sports;