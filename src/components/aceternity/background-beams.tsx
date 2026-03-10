"use client";

import { cn } from "@/lib/utils";

interface BackgroundBeamsProps {
  className?: string;
}

export function BackgroundBeams({ className }: BackgroundBeamsProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
    >
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="beam1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EA6430" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#EA6430" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#EA6430" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="beam2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00433D" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#00433D" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#00433D" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line
          x1="0%"
          y1="20%"
          x2="100%"
          y2="80%"
          stroke="url(#beam1)"
          strokeWidth="1.5"
          className="animate-pulse"
        />
        <line
          x1="20%"
          y1="0%"
          x2="80%"
          y2="100%"
          stroke="url(#beam1)"
          strokeWidth="1"
          className="animate-pulse [animation-delay:0.5s]"
        />
        <line
          x1="100%"
          y1="10%"
          x2="0%"
          y2="90%"
          stroke="url(#beam2)"
          strokeWidth="1.5"
          className="animate-pulse [animation-delay:1s]"
        />
        <line
          x1="60%"
          y1="0%"
          x2="40%"
          y2="100%"
          stroke="url(#beam2)"
          strokeWidth="1"
          className="animate-pulse [animation-delay:1.5s]"
        />
      </svg>
    </div>
  );
}
