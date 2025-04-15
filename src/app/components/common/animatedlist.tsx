"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { ComponentPropsWithoutRef, useEffect, useMemo, useState } from "react";
import clsx from "clsx";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }} // Start from below
      animate={{ y: 0, opacity: 1 }}  // Move to center
      exit={{ y: -50, opacity: 0 }}  // Disappear towards top
      transition={{ type: "spring", stiffness: 350, damping: 40 }}
      layout
      className="mx-auto w-full"
    >
      {children}
    </motion.div>
  );
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedList = React.memo(
  ({ children, className, delay = 2000, ...props }: AnimatedListProps) => {
    const childrenArray = useMemo(() => React.Children.toArray(children), [children]);
    const [index, setIndex] = useState(0);
    const [items, setItems] = useState(childrenArray);

    useEffect(() => {
      const interval = setInterval(() => {
        setItems((prevItems) => {
          const nextItems = [...prevItems, prevItems[index]]; // Add next item at the end
          return nextItems.slice(1); // Remove the first item to keep looping
        });
        setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
      }, delay);

      return () => clearInterval(interval);
    }, [index, delay, childrenArray]);

    return (
      <div className={clsx("flex flex-col-reverse items-center gap-4", className ?? "")} {...props}>
        <AnimatePresence>
          {items.map((item, idx) => (
            <AnimatedListItem key={idx}>{item}</AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    );
  }
);

AnimatedList.displayName = "AnimatedList";

