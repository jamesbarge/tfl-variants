
interface LogoPairProps {
  kareheroVariant?: "coral" | "white" | "default";
  className?: string;
  size?: "sm" | "md" | "lg";
}

const kareheroLogos = {
  coral: "/logos/logo-lockup-coral.svg",
  white: "/logos/logo-lockup-white.svg",
  default: "/logos/logo-lockup.svg",
};

const sizes = {
  sm: { kh: { w: 90, h: 24 }, tfl: { w: 60, h: 24 }, cls: "h-5 sm:h-6" },
  md: { kh: { w: 110, h: 30 }, tfl: { w: 75, h: 30 }, cls: "h-6 sm:h-8" },
  lg: { kh: { w: 140, h: 36 }, tfl: { w: 95, h: 36 }, cls: "h-6 sm:h-9" },
};

export function LogoPair({
  kareheroVariant = "coral",
  className = "",
  size = "md",
}: LogoPairProps) {
  const s = sizes[size];
  return (
    <div className={`flex items-center gap-2 sm:gap-4 shrink-0 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={kareheroLogos[kareheroVariant]}
        alt="KareHero"
        width={s.kh.w}
        height={s.kh.h}
        className={`${s.cls} w-auto`}
      />
      <div className="w-px h-4 sm:h-6 bg-current opacity-20" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logos/tfl-logo.svg"
        alt="Transport for London"
        width={s.tfl.w}
        height={s.tfl.h}
        className={`${s.cls} w-auto`}
      />
    </div>
  );
}
