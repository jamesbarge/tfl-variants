"use client";

import type { ExecutiveQuote } from "@/lib/content/types";
import { cn } from "@/lib/utils";

interface ExecutiveQuoteBlockProps {
  quotes: ExecutiveQuote[];
  variant?: "light" | "dark" | "accent";
  className?: string;
}

const variantStyles = {
  light: {
    wrapper: "bg-gardenia",
    context: "text-charcoal/50",
    quote: "text-marine-green",
    attribution: "text-charcoal/70",
    role: "text-charcoal/50",
    divider: "border-coral/20",
  },
  dark: {
    wrapper: "bg-marine-green/10",
    context: "text-charcoal/50",
    quote: "text-marine-green",
    attribution: "text-charcoal/70",
    role: "text-charcoal/50",
    divider: "border-marine-green/20",
  },
  accent: {
    wrapper: "bg-coral/5",
    context: "text-charcoal/50",
    quote: "text-marine-green",
    attribution: "text-coral",
    role: "text-charcoal/50",
    divider: "border-coral/20",
  },
};

export function ExecutiveQuoteBlock({
  quotes,
  variant = "light",
  className,
}: ExecutiveQuoteBlockProps) {
  const styles = variantStyles[variant];

  return (
    <div className={cn("rounded-xl p-8 md:p-10", styles.wrapper, className)}>
      <p className="uppercase tracking-widest text-coral text-xs font-work-sans font-semibold mb-8">
        Executive Perspective
      </p>
      <div className="space-y-8">
        {quotes.map((q, i) => (
          <div key={i}>
            {q.context && (
              <p
                className={cn(
                  "text-xs uppercase tracking-wide mb-3 font-work-sans",
                  styles.context
                )}
              >
                {q.context}
              </p>
            )}
            <blockquote
              className={cn(
                "font-lora italic text-lg sm:text-xl leading-relaxed",
                styles.quote
              )}
            >
              &ldquo;{q.quote}&rdquo;
            </blockquote>
            <div className="mt-4">
              <p className={cn("font-work-sans font-semibold text-sm", styles.attribution)}>
                {q.attribution}
              </p>
              <p className={cn("font-work-sans text-xs", styles.role)}>
                {q.role}, {q.company}
              </p>
            </div>
            {i < quotes.length - 1 && (
              <div className={cn("border-t mt-8", styles.divider)} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
