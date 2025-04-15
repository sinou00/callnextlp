"use client";

import Image from "next/image";
import React from "react";
import { WobbleCard } from "./wobblecard";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 h-full bg-gradient-to-r from-[#F9D689] to-[#937E51] min-h-[500px] lg:min-h-[300px]"
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-neutral-600">
            Manage your league by NextLeegz
          </h2>
          <p className="mt-4 text-left text-base/6 text-white">
            A platform built to power your basketball league. Manage Games, Players and Stats.
            Designed for amateur teams of all levels.
          </p>
        </div>
        <Image
          src="/imagemockup/macbook.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 bg-gradient-to-r from-[#202C4B] to-[#202C4B] min-h-[500px] lg:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Download the CallNext app to join or host games
            in 100+ parks across the Greater Montreal Area!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            From basketball to soccer and volleyball, Connect with players
            and discover new parks to play anytime, anywhere.
          </p>
        </div>
        <Image
          src="/imagemockup/mockup1.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
