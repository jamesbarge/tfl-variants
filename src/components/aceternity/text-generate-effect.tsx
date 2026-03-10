"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  duration?: number;
}

export function TextGenerateEffect({
  words,
  className,
  duration = 0.5,
}: TextGenerateEffectProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const wordArray = words.split(" ");

  return (
    <span ref={ref} className={cn("inline", className)}>
      {wordArray.map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            delay: isInView ? idx * 0.04 : 0,
            duration: isInView ? duration : 0,
          }}
          className="inline-block mr-[0.25em]"
          style={{ willChange: "opacity, filter" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
