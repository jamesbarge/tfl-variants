"use client";

import { cn } from "@/lib/utils";

interface WavyBackgroundProps {
  children: React.ReactNode;
  className?: string;
  waveColor?: string;
  waveOpacity?: number;
}

export function WavyBackground({
  children,
  className,
  waveColor = "#EA6430",
  waveOpacity = 0.06,
}: WavyBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ height: "40%" }}
      >
        <path
          fill={waveColor}
          fillOpacity={waveOpacity}
          d="M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,112C672,107,768,149,864,170.7C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
        <path
          fill={waveColor}
          fillOpacity={waveOpacity * 0.7}
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
