"use client";

import { LogoPair } from "@/components/shared/logo-pair";
import { CTAButton } from "@/components/shared/cta-button";
import { StatCounter } from "@/components/shared/stat-counter";
import { ScrollReveal, FadeIn } from "@/components/motion";
import {
  hero,
  problem,
  employees,
  challenges,
  emotionalToll,
  solution,
  services,
  solutionFooter,
  caseStudy,
  diversityFooter,
  tflProjection,
  testimonialSection,
  ctaSection,
  footer,
  contactEmails,
} from "@/lib/content/tfl";
import {
  ukWorkforceStats,
  baChallengeStats,
  baResultStats,
  diversityStats,
  tflProjectionStats,
} from "@/lib/content/stats";
import { testimonials } from "@/lib/content/testimonials";
import { caregivingImage } from "@/lib/content/images";

export default function SplitScreenPage() {
  return (
    <main className="min-h-screen bg-floral-white text-charcoal overflow-x-hidden w-full max-w-full">
      {/* ─── 1. HEADER ─── */}
      <header className="bg-white border-b-4 border-coral">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between gap-3">
          <LogoPair kareheroVariant="coral" size="md" />
          <CTAButton variant="coral" size="md" className="hidden sm:inline-block" />
        </div>
      </header>

      {/* ─── 2. HERO - Marine Green left / Coral right ─── */}
      <section className="flex flex-col md:flex-row min-h-[85vh] overflow-hidden">
        {/* Left: Content on Marine Green */}
        <div className="w-full md:w-1/2 bg-marine-green text-white flex items-center">
          <div className="p-4 sm:p-8 md:p-12 lg:p-16">
            <ScrollReveal direction="left">
              <p className="uppercase tracking-widest text-lime-green text-xs font-work-sans font-semibold mb-6">
                An exclusive briefing for Transport for London
              </p>
              <h1 className="font-lora italic font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
                {hero.headline}
              </h1>
              <p className="mt-6 text-base lg:text-lg leading-relaxed text-white/80">
                {hero.subheadline}
              </p>
              <div className="mt-8">
                <CTAButton variant="white" size="lg" />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Right: Large stat on Coral */}
        <div className="w-full md:w-1/2 bg-coral text-white flex items-center justify-center">
          <ScrollReveal direction="right">
            <div className="p-4 sm:p-8 md:p-12 text-center">
              <p className="font-lora italic font-semibold text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-none">
                1 in 5
              </p>
              <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-sm mx-auto leading-relaxed">
                of your employees balance work with unpaid care responsibilities
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 3. PROBLEM - UK Stats ─── */}
      <section className="flex flex-col md:flex-row overflow-hidden">
        {/* Left: Stats grid on Floral White */}
        <div className="w-full md:w-1/2 bg-floral-white flex items-center">
          <div className="p-4 sm:p-8 md:p-12 lg:p-16 w-full">
            <ScrollReveal direction="left">
              <div className="grid grid-cols-2 gap-3 sm:gap-6">
                {ukWorkforceStats.map((stat, i) => (
                  <div key={i} className="bg-gardenia rounded-lg p-5">
                    <p className="font-lora italic font-semibold text-xl sm:text-2xl text-coral">
                      {stat.value}
                    </p>
                    <p className="text-sm text-charcoal/70 mt-2 leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Right: Content on Marine Green */}
        <div className="w-full md:w-1/2 bg-marine-green text-white flex items-center">
          <div className="p-4 sm:p-8 md:p-12 lg:p-16">
            <ScrollReveal direction="right">
              <p className="uppercase tracking-widest text-lime-green text-xs font-work-sans font-semibold mb-4">
                The Crisis
              </p>
              <h2 className="font-lora italic font-semibold text-3xl sm:text-4xl text-white">
                {problem.headline}
              </h2>
              <p className="mt-6 text-base lg:text-lg leading-relaxed text-white/80">
                {problem.subheadline}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── 4. THEIR EMPLOYEES - Challenges + Emotional Toll ─── */}
      <section className="flex flex-col md:flex-row border-t-4 border-b-4 border-sunflower overflow-hidden">
        {/* Left: Content on Floral White */}
        <div className="w-full md:w-1/2 bg-floral-white flex items-center">
          <div className="p-4 sm:p-8 md:p-12 lg:p-16 w-full">
            <ScrollReveal direction="left">
              <p className="uppercase tracking-widest text-coral text-xs font-work-sans font-semibold mb-4">
                Your People
              </p>
              <h2 className="font-lora italic font-semibold text-3xl sm:text-4xl text-marine-green">
                {employees.headline}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/80 mb-8">
                {employees.subheadline}
              </p>

              <div className="space-y-6">
                {challenges.map((challenge, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-coral text-white flex items-center justify-center font-work-sans font-semibold text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="font-lora italic font-semibold text-lg text-marine-green">
                        {challenge.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-charcoal/70 mt-1">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Right: Emotional Toll - large stat on Coral */}
        <div className="w-full md:w-1/2 bg-coral text-white flex items-center justify-center">
          <ScrollReveal direction="right">
            <div className="p-4 sm:p-8 md:p-12 text-center max-w-md">
              <p className="uppercase tracking-widest text-white/60 text-xs font-work-sans font-semibold mb-6">
                {emotionalToll.label}
              </p>
              <p className="font-lora italic font-semibold text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-none">
                {emotionalToll.statValue}
              </p>
              <p className="mt-6 text-lg text-white/85 leading-relaxed">
                {emotionalToll.text}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 6. SOLUTION - 6 Services ─── */}
      <section className="flex flex-col md:flex-row border-t-4 border-b-4 border-marine-green overflow-hidden">
        {/* Left: Content on Marine Green */}
        <div className="w-full md:w-1/2 bg-marine-green text-white flex items-center">
          <div className="p-4 sm:p-8 md:p-12 lg:p-16">
            <ScrollReveal direction="left">
              <p className="uppercase tracking-widest text-lime-green text-xs font-work-sans font-semibold mb-4">
                {solution.label}
              </p>
              <h2 className="font-lora italic font-semibold text-3xl sm:text-4xl text-white">
                {solution.headline}
              </h2>
              <p className="mt-6 text-base lg:text-lg leading-relaxed text-white/80">
                {solution.subheadline}
              </p>
              <p className="mt-8 text-sm text-white/50 italic">
                {solutionFooter}
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Right: Services grid on Floral White */}
        <div className="w-full md:w-1/2 bg-floral-white flex items-center">
          <div className="p-4 sm:p-8 md:p-12 lg:p-16 w-full">
            <ScrollReveal direction="right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {services.map((service, i) => (
                  <div
                    key={i}
                    className="bg-white border border-gardenia rounded-lg p-5 shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-full bg-coral text-white flex items-center justify-center font-work-sans font-semibold text-xs mb-3">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-lora italic font-semibold text-base text-marine-green mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-charcoal/70">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── 7. CASE STUDY - BA Stats + Results + Diversity ─── */}
      {/* 7a: BA Challenge Stats */}
      <section className="flex flex-col md:flex-row overflow-hidden">
        {/* Left: Content on Floral White */}
        <div className="w-full md:w-1/2 bg-floral-white flex items-center">
          <div className="p-4 sm:p-8 md:p-12 lg:p-16">
            <ScrollReveal direction="left">
              <p className="uppercase tracking-widest text-coral text-xs font-work-sans font-semibold mb-4">
                {caseStudy.label}
              </p>
              <h2 className="font-lora italic font-semibold text-3xl sm:text-4xl text-marine-green">
                {caseStudy.headline}
              </h2>
              <p className="mt-6 text-base lg:text-lg leading-relaxed text-charcoal/80">
                {caseStudy.subheadline}
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Right: BA Challenge stats on Coral */}
        <div className="w-full md:w-1/2 bg-coral text-white flex items-center">
          <div className="p-4 sm:p-8 md:p-12 lg:p-16 w-full">
            <ScrollReveal direction="right">
              <p className="uppercase tracking-widest text-white/60 text-xs font-work-sans font-semibold mb-8">
                What British Airways discovered
              </p>
              <div className="space-y-6">
                {baChallengeStats.map((stat, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="font-lora italic font-semibold text-3xl text-white shrink-0 min-w-[90px]">
                      {stat.value}
                    </span>
                    <span className="text-sm text-white/80 leading-snug pt-2">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 7b: BA Result Stats */}
      <section className="flex flex-col md:flex-row border-t-4 border-sunflower overflow-hidden">
        {/* Left: Results on Sunflower */}
        <div className="w-full md:w-1/2 bg-sunflower flex items-center">
          <div className="p-4 sm:p-8 md:p-12 lg:p-16 w-full">
            <ScrollReveal direction="left">
              <p className="uppercase tracking-widest text-marine-green/60 text-xs font-work-sans font-semibold mb-8">
                The Results
              </p>
              <div className="grid grid-cols-2 gap-6">
                {baResultStats.map((stat, i) => (
                  <div key={i}>
                    <StatCounter
                      stat={stat}
                      valueClassName="text-marine-green text-3xl sm:text-4xl"
                      labelClassName="text-marine-green/70"
                      className="text-left"
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Right: Diversity on Marine Green */}
        <div className="w-full md:w-1/2 bg-marine-green text-white flex items-center">
          <div className="p-4 sm:p-8 md:p-12 lg:p-16">
            <ScrollReveal direction="right">
              <p className="uppercase tracking-widest text-lime-green text-xs font-work-sans font-semibold mb-8">
                Diversity &amp; Retention
              </p>
              <div className="space-y-6">
                {diversityStats.map((stat, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="font-lora italic font-semibold text-3xl text-sunflower shrink-0 min-w-[70px]">
                      {stat.value}
                    </span>
                    <span className="text-sm text-white/80 leading-snug pt-2">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-base text-white/60 italic border-l-4 border-lime-green pl-4">
                {diversityFooter}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 7c: TFL Projections */}
      <section className="flex flex-col md:flex-row border-t-4 border-coral overflow-hidden">
        {/* Left: Content on Floral White */}
        <div className="w-full md:w-1/2 bg-floral-white flex items-center">
          <div className="p-4 sm:p-8 md:p-12 lg:p-16">
            <ScrollReveal direction="left">
              <p className="uppercase tracking-widest text-coral text-xs font-work-sans font-semibold mb-4">
                {tflProjection.label}
              </p>
              <p className="text-lg leading-relaxed text-charcoal/80">
                {tflProjection.body}
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Right: Projections on Marine Green */}
        <div className="w-full md:w-1/2 bg-marine-green text-white flex items-center">
          <div className="p-4 sm:p-8 md:p-12 lg:p-16 w-full">
            <ScrollReveal direction="right">
              <div className="space-y-8">
                {tflProjectionStats.map((stat, i) => (
                  <div key={i}>
                    <StatCounter
                      stat={stat}
                      valueClassName="text-sunflower text-3xl sm:text-4xl"
                      labelClassName="text-white/80"
                      className="text-left"
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── 8. TESTIMONIALS ─── */}
      <section className="border-t-4 border-b-4 border-lime-green overflow-hidden">
        <div className="flex flex-col md:flex-row items-stretch">
          {/* Full width heading on mobile, then split testimonials */}
          <div className="w-full bg-gardenia py-6 px-4 sm:px-8 md:hidden">
            <p className="uppercase tracking-widest text-coral text-xs font-work-sans font-semibold mb-2">
              Voices
            </p>
            <h2 className="font-lora italic font-semibold text-3xl text-marine-green">
              {testimonialSection.headline}
            </h2>
          </div>

          {/* Testimonial 1 - Coral bg */}
          <div className="w-full bg-coral text-white flex items-center">
            <div className="p-4 sm:p-8 md:p-12 lg:p-16">
              <ScrollReveal direction="left">
                <div className="hidden md:block mb-8">
                  <p className="uppercase tracking-widest text-white/60 text-xs font-work-sans font-semibold mb-2">
                    Voices
                  </p>
                  <h2 className="font-lora italic font-semibold text-3xl text-white">
                    {testimonialSection.headline}
                  </h2>
                </div>
                <blockquote>
                  <span className="font-lora italic text-white/40 text-6xl leading-none select-none">
                    &ldquo;
                  </span>
                  <p className="font-lora italic text-lg text-white leading-relaxed -mt-4">
                    {testimonials[0].quote}
                  </p>
                  <footer className="mt-6 text-sm text-white/60 font-work-sans uppercase tracking-widest">
                    - {testimonials[0].attribution}
                  </footer>
                </blockquote>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. CTA + FOOTER ─── */}
      <section className="bg-marine-green text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-lora italic font-semibold text-3xl sm:text-4xl md:text-5xl text-white">
              {ctaSection.headline}
            </h2>
            <p className="mt-6 text-lg text-white/85">
              {ctaSection.subheadline}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <ul className="mt-8 space-y-3 text-left max-w-xl mx-auto">
              {ctaSection.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-coral shrink-0" />
                  <span className="text-base text-white/90 leading-relaxed">
                    {typeof item === "string" ? item : item.text}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton variant="coral" size="lg" />
              <CTAButton variant="white" size="lg" />
            </div>
            <div className="mt-8 text-sm text-white/50 flex flex-col sm:flex-row items-center justify-center gap-2 break-all">
              {contactEmails.map((email, i) => (
                <span key={i}>
                  {i > 0 && <span className="mx-2 hidden sm:inline">|</span>}
                  <a href={`mailto:${email}`} className="hover:text-white transition-colors underline underline-offset-2">
                    {email}
                  </a>
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white/40 py-8 border-t-4 border-coral">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <LogoPair kareheroVariant="white" size="sm" />
          <p className="text-sm">{footer.copyright}</p>
        </div>
      </footer>
    </main>
  );
}
