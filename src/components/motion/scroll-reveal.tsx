"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  once?: boolean;
}

const directionOffsets = {
  up: { y: 20, x: 0 },
  down: { y: -20, x: 0 },
  left: { x: 20, y: 0 },
  right: { x: -20, y: 0 },
};

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.6,
  className,
  direction = "up",
  distance,
  once = true,
}: ScrollRevealProps) {
  const offset = directionOffsets[direction];
  const customDistance = distance
    ? { x: offset.x ? (offset.x > 0 ? distance : -distance) : 0, y: offset.y ? (offset.y > 0 ? distance : -distance) : 0 }
    : offset;

  return (
    <motion.div
      initial={{ opacity: 0, ...customDistance }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ delay, duration, ease: "easeOut" }}
      className={`motion-safe:opacity-0 ${className || ""}`}
    >
      {children}
    </motion.div>
  );
}
