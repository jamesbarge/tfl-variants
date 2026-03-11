import { cn } from "@/lib/utils";

const clients = [
  { name: "British Airways", src: "/logos/clients/ba.svg" },
  { name: "TSB", src: "/logos/clients/tsb.svg" },
  { name: "Live Nation", src: "/logos/clients/live-nation.svg" },
  { name: "Glenmorangie", src: "/logos/clients/glenmorangie.svg" },
  { name: "CIPD", src: "/logos/clients/cipd.svg" },
  { name: "NHS", src: "/logos/clients/nhs.svg" },
];

interface ClientLogosProps {
  variant?: "light" | "dark";
  className?: string;
}

export function ClientLogos({ variant = "light", className }: ClientLogosProps) {
  return (
    <div className={cn("flex flex-col items-center gap-6", className)}>
      <p
        className={cn(
          "text-sm font-work-sans uppercase tracking-widest",
          variant === "light" ? "text-charcoal/40" : "text-white/40"
        )}
      >
        Trusted by leading organisations
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
        {clients.map((client) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={client.name}
            src={client.src}
            alt={client.name}
            className={cn(
              "h-8 sm:h-10 w-auto object-contain",
              variant === "light"
                ? "grayscale opacity-60 hover:opacity-100 hover:grayscale-0"
                : "grayscale brightness-0 invert opacity-60 hover:opacity-100 hover:grayscale-0 hover:brightness-100 hover:invert-0"
            )}
          />
        ))}
      </div>
    </div>
  );
}
