import React from "react";

interface ImageProps {
  position: "sticky" | "fixed" | "relative";
  
}

const ImageSticky: React.FC<ImageProps> = ({ position }) => {
  return (

    <div className={`flex justify-center w-[843px] h-[588px] z-10${
        position === "sticky"
          ? "sticky top-16"
          : position === "fixed"
          ? "relative top-16 z-100"
          : "relative"
      }`}>

        <img
          src= "/imagemockup/mockup1.png"
          alt="Mockup Image Small"
          width={722}
          height={1154}
          className="rounded-lg"
        />
    </div>


  );
};
export default ImageSticky;