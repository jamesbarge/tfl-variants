import Link from "next/link";
import { cn } from "@/lib/utils";
import { ctaText, mailtoHref } from "@/lib/content/tfl";

interface CTAButtonProps {
  variant?: "coral" | "marine" | "white-outline" | "white";
  size?: "md" | "lg";
  className?: string;
  children?: React.ReactNode;
  href?: string;
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
  md: "px-3 py-2 text-xs sm:px-6 sm:py-3 sm:text-base",
  lg: "px-4 py-2.5 text-sm sm:px-8 sm:py-4 sm:text-lg",
};

export function CTAButton({
  variant = "coral",
  size = "lg",
  className,
  children,
  href,
}: CTAButtonProps) {
  return (
    <Link
      href={href ?? mailtoHref}
      className={cn(
        "block w-full sm:inline-block sm:w-auto max-w-full font-work-sans font-semibold rounded-lg transition-colors shadow-sm text-center",
        variants[variant],
        sizeClasses[size],
        className
      )}
    >
      {children ?? ctaText}
    </Link>
  );
}
