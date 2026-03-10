"use client";

import type { Stat } from "@/lib/content/types";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  stat: Stat;
  valueClassName?: string;
  labelClassName?: string;
  className?: string;
}

export function StatCounter({
  stat,
  valueClassName,
  labelClassName,
  className,
}: StatCounterProps) {
  return (
    <div className={cn("text-center", className)}>
      <p
        className={cn(
          "font-lora italic font-semibold text-3xl sm:text-4xl",
          valueClassName
        )}
      >
        {stat.value}
      </p>
      <p className={cn("text-sm mt-2", labelClassName)}>{stat.label}</p>
      {stat.sublabel && (
        <p className={cn("text-xs mt-1 opacity-60", labelClassName)}>
          {stat.sublabel}
        </p>
      )}
    </div>
  );
}
