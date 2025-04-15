"use client";

type TextSectionProps = {
  isIntersecting: boolean;
  findText: string;
  joinText: string;
  parkText: string;
};

const TextSection = ({
  isIntersecting,
  findText,
  joinText,
  parkText,
}: TextSectionProps) => {
  return (
    <div className="relative mt-96 flex flex-row items-center w-full text-center">
      {/* Left-side animated text */}
      <p
        className={`absolute -rotate-90 left-[-275px] top-[-150px] text-9xl font-regular transition-transform duration-1000 transform ${
          isIntersecting ? "translate-x-[600px] opacity-100" : "opacity-0"
        }`}
        style={{
          fontFamily: "Inter, sans-serif",
          background: "linear-gradient(#F1F1F1 0%,#202C4B 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          whiteSpace: "nowrap",
          textAlign: "start",
          zIndex: -1,
        }}
      >
        {findText}
      </p>
      {/* Right-side animated text */}
      <div
        className={`absolute top-[-200px] right-[100px] text-4xl font-regular transition-transform duration-1000 transform ${
          isIntersecting
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
        style={{
          background: "linear-gradient(0deg,#8B8B8B 0%,#F1F1F1 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        <span style={{ display: "block" }}>{joinText}</span>
        <span style={{ display: "block" }}>{parkText}</span>
      </div>
    </div>
  );
};

export default TextSection;