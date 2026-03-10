
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
  sm: { kh: { w: 120, h: 32 }, tfl: { w: 80, h: 32 } },
  md: { kh: { w: 150, h: 40 }, tfl: { w: 100, h: 40 } },
  lg: { kh: { w: 180, h: 48 }, tfl: { w: 120, h: 48 } },
};

export function LogoPair({
  kareheroVariant = "coral",
  className = "",
  size = "md",
}: LogoPairProps) {
  const s = sizes[size];
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={kareheroLogos[kareheroVariant]}
        alt="KareHero"
        width={s.kh.w}
        height={s.kh.h}
      />
      <div className="w-px h-6 bg-current opacity-20" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logos/tfl-logo.svg"
        alt="Transport for London"
        width={s.tfl.w}
        height={s.tfl.h}
      />
    </div>
  );
}
