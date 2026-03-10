import Link from "next/link";
import { cn } from "@/lib/utils";
import { ctaText, mailtoHref } from "@/lib/content/tfl";

interface CTAButtonProps {
  variant?: "coral" | "marine" | "white-outline" | "white";
  size?: "md" | "lg";
  className?: string;
  children?: React.ReactNode;
}

const variants = {
  coral:
    "bg-coral text-white hover:bg-warm-orange",
  marine:
    "bg-marine-green text-white hover:bg-marine-green/90",
  "white-outline":
    "border-2 border-white text-white hover:bg-white/10",
  white:
    "bg-white text-coral hover:bg-white/90",
};

const sizeClasses = {
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function CTAButton({
  variant = "coral",
  size = "lg",
  className,
  children,
}: CTAButtonProps) {
  return (
    <Link
      href={mailtoHref}
      className={cn(
        "inline-block font-work-sans font-semibold rounded-lg transition-colors shadow-sm",
        variants[variant],
        sizeClasses[size],
        className
      )}
    >
      {children ?? ctaText}
    </Link>
  );
}
