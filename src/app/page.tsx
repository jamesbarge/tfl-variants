import Link from "next/link";
import Image from "next/image";
import { variants } from "@/lib/content/meta";

const complexityColors: Record<string, string> = {
  Low: "bg-lime-green text-marine-green",
  "Low-Med": "bg-lime-green/70 text-marine-green",
  Medium: "bg-sunflower text-charcoal",
  "Med-High": "bg-warm-orange/80 text-white",
  High: "bg-coral text-white",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-floral-white">
      {/* Header */}
      <header className="border-b border-gardenia py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/logos/logo-lockup-coral.svg"
              alt="KareHero"
              width={140}
              height={36}
              priority
            />
            <span className="text-charcoal/30">×</span>
            <Image
              src="/logos/tfl-logo.svg"
              alt="Transport for London"
              width={90}
              height={36}
              priority
            />
          </div>
          <span className="text-sm text-charcoal/50 font-work-sans">
            ABM Design Variants
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-marine-green mb-6">
            9 Ways to Tell the Same Story
          </h1>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto font-work-sans">
            Same copy. Same data. Same call to action. Nine radically different
            visual treatments for the TfL landing page.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {variants.map((variant) => (
              <Link
                key={variant.slug}
                href={`/${variant.slug}`}
                className="group block rounded-2xl border border-gardenia bg-white p-6 transition-all hover:shadow-xl hover:border-coral/30 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      complexityColors[variant.complexity]
                    }`}
                  >
                    {variant.complexity}
                  </span>
                </div>
                <h2 className="text-xl text-marine-green mb-2 font-semibold not-italic">
                  {variant.name}
                </h2>
                <p className="text-sm text-charcoal/60 leading-relaxed font-work-sans mb-3">
                  {variant.description}
                </p>
                <p className="text-xs text-charcoal/40 italic font-work-sans">
                  {variant.aesthetic}
                </p>
                <div className="mt-4 text-coral text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity font-work-sans">
                  View variant →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gardenia py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-sm text-charcoal/40 font-work-sans">
          ABM Agency - KareHero × TfL Design Exploration
        </div>
      </footer>
    </div>
  );
}
