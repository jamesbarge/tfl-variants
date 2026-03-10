"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface StickyScrollRevealItem {
  title: string;
  description: string;
  content?: React.ReactNode;
}

interface StickyScrollRevealProps {
  items: StickyScrollRevealItem[];
  className?: string;
}

export function StickyScrollReveal({
  items,
  className,
}: StickyScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={ref} className={cn("relative", className)}>
      <div className="flex gap-10">
        {/* Sticky left panel */}
        <div className="w-1/2 sticky top-20 h-fit">
          {items.map((item, idx) => {
            const start = idx / items.length;
            const end = (idx + 1) / items.length;

            return (
              <StickyItem
                key={item.title}
                item={item}
                progress={scrollYProgress}
                start={start}
                end={end}
              />
            );
          })}
        </div>

        {/* Scrolling right panel */}
        <div className="w-1/2">
          {items.map((item) => (
            <div
              key={item.title}
              className="min-h-screen flex items-center justify-center p-8"
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StickyItem({
  item,
  progress,
  start,
  end,
}: {
  item: StickyScrollRevealItem;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, start + 0.05, end - 0.05, end], [0.3, 1, 1, 0.3]);

  return (
    <motion.div style={{ opacity }} className="mb-20">
      <h3 className="text-2xl font-semibold text-marine-green mb-3">
        {item.title}
      </h3>
      <p className="text-charcoal/70">{item.description}</p>
    </motion.div>
  );
}
