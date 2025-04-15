"use client";

import React from "react";
import { Dock} from "./dockicon";
import { DockIcon } from "./dockicon";

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path fill="currentColor" d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8..." />
    </svg>
  ),
  notion: (props: IconProps) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917..." fill="#fff" />
    </svg>
  ),
  googleDrive: (props: IconProps) => (
    <svg viewBox="0 0 48 48" {...props}>
      <path fill="currentColor" d="M6 36l9-15h18l9 15H6z" />
    </svg>
  ),
  whatsapp: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12c0 2.094.544 4.052 1.514 5.742L0 24l6.332-1.514A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  )
};

export function DockDemo() {
  return (
    <div className="relative">
      <Dock iconMagnification={60} iconDistance={100}>
        {Object.entries(Icons).map(([key, Icon]) => (
          <DockIcon key={key} className="bg-black/10 dark:bg-white/10">
            <Icon className="size-full" />
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
}