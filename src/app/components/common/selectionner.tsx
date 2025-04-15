import Image from "next/image";

interface SelectionnerProps {
  activeIndex: number; // Pass the active section index
}

export default function Selectionner({ activeIndex }: SelectionnerProps) {
  return (
    <div className="flex space-x-7">
      {/* Rectangle 1 */}
      <div
        className={`w-[80px] h-[80px] flex flex-col items-center justify-center rounded-[10px] border ${
          activeIndex==1 ? "border-[1.5px]" : "border-[0.5px]"
        } border-[#F1F1F1] backdrop-blur-[55px] shadow-[0_4px_6px_rgba(0,0,0,0.1)]`}
      >
        <Image
          src="/bar/find.png"
          alt="Find Icon"
          width={40}
          height={40}
        />
        <p className="mt-2 text-sm font-medium text-[#F1F1F1]">Find</p>
      </div>

      {/* Rectangle 2 */}
      <div
        className={`w-[80px] h-[80px] flex flex-col items-center justify-center rounded-[10px] border ${
          activeIndex==2 ? "border-[1.5px]" : "border-[0.5px]"
        } border-[#F1F1F1] backdrop-blur-[55px] shadow-[0_4px_6px_rgba(0,0,0,0.1)]`}
      >
        <Image
          src="/bar/play.png"
          alt="Play Icon"
          width={40}
          height={40}
        />
        <p className="mt-2 text-sm font-medium text-[#F1F1F1]">Play</p>
      </div>

      {/* Rectangle 3 */}
      <div
        className={`w-[80px] h-[80px] flex flex-col items-center justify-center rounded-[10px] border ${
          activeIndex == 3 ? "border-[1.5px]" : "border-[0.5px]"
        } border-[#F1F1F1] backdrop-blur-[55px] shadow-[0_8px_6px_rgba(0,0,0,0.1)]`}
      >
        <Image
          src="/bar/join.png"
          alt="Join Icon"
          width={40}
          height={40}
        />
        <p className="mt-2 text-sm font-medium text-[#F1F1F1]">Join</p>
      </div>
    </div>
  );
}