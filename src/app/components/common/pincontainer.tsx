"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";
import { ShineBorder } from "./shineborder";

interface PinContainerProps {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
  imageUrl?: string; // New prop for developer image
}

export const PinContainer: React.FC<PinContainerProps> = ({
  children,
  title,
  href = "/",
  className,
  containerClassName,
  imageUrl,
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    
    <div
      className={clsx("relative group/pin cursor-pointer", containerClassName)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{ transform }}
          className="absolute left-1/2 top-1/2 flex items-start justify-start rounded-2xl p-4 bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] shadow-[0_8px_16px_rgb(0_0_0/0.4)] transition duration-700 overflow-hidden"
        >
          <div className={clsx("relative z-50", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} href={href} />
    </div>
  );
};

interface PinPerspectiveProps {
  title?: string;
  href?: string;
}

export const PinPerspective: React.FC<PinPerspectiveProps> = ({ title, href }) => {
  return (
    <motion.div className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          {href ? (
            <Link
              href={href}
              target="_blank"
              className="relative flex items-center space-x-2 z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10"
            >
              <span className="relative z-20 text-white text-xs font-bold py-0.5">
                {title}
              </span>
            </Link>
          ) : (
            <span className="relative z-20 text-white text-xs font-bold py-0.5">
              {title}
            </span>
          )}
        </div>

        <div
          style={{ perspective: "1000px", transform: "rotateX(70deg) translateZ(0)" }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          {[0, 2, 4].map((delay) => (
            <motion.div
              key={delay}
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: [0, 1, 0.5, 0], scale: 1 }}
              transition={{ duration: 6, repeat: Infinity, delay }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-full bg-[#F9D689]/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            />
          ))}
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-[#F9D689] translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-[#F9D689] translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-[#F9D689] translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-[#F9D689] translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
        </>
      </div>
    </motion.div>
  );
};


