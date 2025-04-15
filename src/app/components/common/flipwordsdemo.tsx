"use client";

import React from "react";
import { FlipWords } from "./flipword";

export const FlipWordsDemo: React.FC = () => {
  const words: string[] = ["Find", "Join", "Play"];

  return (
    <div className="flex justify-center items-center">
      <div className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Go <FlipWords words={words} /> 
        games <br/> in your Favorite Park
      </div>
    </div> 
  );
};
