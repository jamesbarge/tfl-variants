"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode, type RefObject } from "react";

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  containerRef?: RefObject<HTMLElement | null>;
}

export function ParallaxLayer({
  children,
  speed = 0.5,
  className,
  containerRef,
}: ParallaxLayerProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    container: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * -100]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
