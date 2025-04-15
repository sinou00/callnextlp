import React from "react";

const JoinButton: React.FC = () => {
  return (
    <button
      className="w-[112px] h-[36px] rounded-[10px] font-bold text-sm"
      style={{
        background: "linear-gradient(to right, #F9D689 41%, #937E51 100%)",
        color: "#101625",
      }}
    >
      Join
    </button>
  );
};
export default JoinButton;