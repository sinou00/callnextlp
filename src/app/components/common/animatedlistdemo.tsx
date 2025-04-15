"use client";

import clsx from "clsx";
import { AnimatedList } from "./animatedlist";
import { AvatarCircles } from "./avatarcircles";

interface NotificationProps {
  name: string;
  description: string;
  avatars: { imageUrl: string; profileUrl: string }[];
  time: string;
}

const notifications: NotificationProps[] = [
  {
    name: "Team 01",
    description: "5 players",
    time: "15m ago",
    avatars: [
      { imageUrl: "https://avatars.githubusercontent.com/u/16860528", profileUrl: "https://example.com/user1" },
      { imageUrl: "https://avatars.githubusercontent.com/u/20110627", profileUrl: "https://example.com/user2" },
    ],
  },
  {
    name: "Team 02",
    description: "2 players",
    time: "10m ago",
    avatars: [
      { imageUrl: "https://avatars.githubusercontent.com/u/106103625", profileUrl: "https://example.com/user3" },
    ],
  },
  {
    name: "Team 03",
    description: "3 players",
    time: "5m ago",
    avatars: [
      { imageUrl: "https://avatars.githubusercontent.com/u/59228569", profileUrl: "https://example.com/user4" },
      { imageUrl: "https://avatars.githubusercontent.com/u/59442788", profileUrl: "https://example.com/user5" },
    ],
  },
  {
    name: "Team 09",
    description: "4 players",
    time: "2m ago",
    avatars: [
      { imageUrl:"https://avatars.githubusercontent.com/u/89768406", profileUrl: "https://example.com/user6" },
    ],
  },
  {
    name: "Team 10",
    description: "4 players",
    time: "2m ago",
    avatars: [
      { imageUrl:"https://avatars.githubusercontent.com/u/89768406", profileUrl: "https://example.com/user6" },
    ],
  },
].flatMap((item) => Array(2).fill(item)); 

const Notification = ({ name, description, avatars, time }: NotificationProps) => {
  return (
    <figure
      className={clsx(
        "relative mx-auto w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4 transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white dark:bg-transparent dark:backdrop-blur-md dark:border dark:border-white/10 dark:shadow-lg"
      )}
    >
      <div className="flex items-center gap-3">
        {/* Removed the rectangle and replaced it with AvatarCircles */}
        <AvatarCircles numPeople={3} avatarUrls={avatars} />
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div className={clsx("relative flex h-[500px] w-full flex-col overflow-hidden p-2", className ?? "")}>
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}

