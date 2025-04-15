import React from "react";

interface Props {
  onClick: () => void;
}

const JoinWaitList: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-md
      w-[94px] h-[28px] sm:w-[94px] sm:h-[28px] lg:w-[271px] lg:h-[61px]
      bg-gradient-to-r from-[#F9D689] to-[#937E51]
      text-[#101625]
      font-light sm:font-light lg:font-medium
      text-[9px] sm:text-[9px] lg:text-sm"
    >
      Join Waitlist
    </button>
  );
};

export default JoinWaitList;