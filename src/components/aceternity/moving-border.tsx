"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MovingBorderProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  borderColor?: string;
  duration?: number;
}

export function MovingBorder({
  children,
  className,
  containerClassName,
  borderColor = "#EA6430",
  duration = 4,
}: MovingBorderProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl p-[2px] overflow-hidden",
        containerClassName
      )}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: `conic-gradient(from 0deg, transparent 60%, ${borderColor} 80%, transparent 100%)`,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className={cn("relative rounded-xl bg-white", className)}>
        {children}
      </div>
    </div>
  );
}
