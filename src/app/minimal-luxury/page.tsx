"use client";

import { LogoPair } from "@/components/shared/logo-pair";
import { CTAButton } from "@/components/shared/cta-button";
import { ScrollReveal } from "@/components/motion";
import {
  hero,
  problem,
  employees,
  challenges,
  emotionalToll,
  gap,
  gapInsight,
  solution,
  services,
  solutionFooter,
  caseStudy,
  diversityFooter,
  tflProjection,
  testimonialSection,
  ctaSection,
  footer,
} from "@/lib/content/tfl";
import {
  ukWorkforceStats,
  gapStats,
  baChallengeStats,
  baResultStats,
  diversityStats,
  tflProjectionStats,
} from "@/lib/content/stats";
import { testimonials, executiveQuotes } from "@/lib/content/testimonials";
import { caregivingImage } from "@/lib/content/images";

function Divider() {
  return <hr className="border-t-[0.5px] border-charcoal/10 w-full" />;
}

export default function MinimalLuxuryPage() {
  return (
    <div className="min-h-screen bg-floral-white text-charcoal font-work-sans selection:bg-marine-green selection:text-white">
      {/* ───────────── HEADER ───────────── */}
      <header className="max-w-[640px] mx-auto px-6 pt-10 pb-8">
        <div className="flex items-center justify-between">
          <LogoPair kareheroVariant="coral" size="sm" />
        </div>
      </header>

      <div className="max-w-[640px] mx-auto px-6">
        <Divider />
      </div>

      {/* ───────────── HERO ───────────── */}
      <section className="max-w-[640px] mx-auto px-6 py-24 sm:py-32">
        <ScrollReveal direction="up" duration={0.8}>
          <h1 className="font-lora italic font-semibold text-[28px] sm:text-[32px] md:text-[36px] text-marine-green leading-[1.3] tracking-[-0.02em]">
            {hero.headline}
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2} duration={0.8}>
          <p className="mt-8 text-base text-charcoal/60 leading-[1.8]">
            {hero.subheadline}
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.4} duration={0.8}>
          <div className="mt-12">
            <CTAButton
              variant="coral"
              size="md"
              className="rounded-full text-sm tracking-wide hover:tracking-wider transition-all duration-500"
            />
          </div>
        </ScrollReveal>
      </section>

      <div className="max-w-[640px] mx-auto px-6">
        <Divider />
      </div>

      {/* ───────────── PROBLEM (UK Stats) ───────────── */}
      <section className="max-w-[640px] mx-auto px-6 py-24 sm:py-32">
        <ScrollReveal direction="up" duration={0.8}>
          <span className="block text-[11px] uppercase tracking-[0.2em] text-charcoal/40 mb-6">
            The Problem
          </span>
          <h2 className="font-lora italic font-semibold text-[28px] sm:text-[32px] text-marine-green leading-[1.3] tracking-[-0.02em]">
            {problem.headline}
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1} duration={0.8}>
          <p className="mt-6 text-base text-charcoal/60 leading-[1.8]">
            {problem.subheadline}
          </p>
        </ScrollReveal>

        <div className="mt-16 space-y-12">
          {ukWorkforceStats.map((stat, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.06} duration={0.7}>
              <div className="flex items-baseline gap-6">
                <span className="font-lora italic font-semibold text-[36px] sm:text-[42px] text-marine-green leading-none shrink-0">
                  {stat.value}
                </span>
                <span className="text-sm text-charcoal/50 leading-relaxed">
                  {stat.label}
                </span>
              </div>
              {i < ukWorkforceStats.length - 1 && (
                <div className="mt-6 border-t-[0.5px] border-charcoal/5" />
              )}
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="max-w-[640px] mx-auto px-6">
        <Divider />
      </div>

      {/* ───────────── THEIR EMPLOYEES ───────────── */}
      <section className="max-w-[640px] mx-auto px-6 py-24 sm:py-32">
        <ScrollReveal direction="up" duration={0.8}>
          <span className="block text-[11px] uppercase tracking-[0.2em] text-charcoal/40 mb-6">
            Your People
          </span>
          <h2 className="font-lora italic font-semibold text-[28px] sm:text-[32px] text-marine-green leading-[1.3] tracking-[-0.02em]">
            {employees.headline}
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1} duration={0.8}>
          <p className="mt-6 text-base text-charcoal/60 leading-[1.8]">
            {employees.subheadline}
          </p>
        </ScrollReveal>

        <div className="mt-16 space-y-10">
          {challenges.map((challenge, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.08} duration={0.7}>
              <div className="group">
                <h3 className="font-lora italic font-semibold text-[20px] text-marine-green tracking-[-0.02em] mb-3 group-hover:text-coral transition-colors duration-500">
                  {challenge.title}
                </h3>
                <p className="text-sm text-charcoal/50 leading-[1.8]">
                  {challenge.description}
                </p>
              </div>
              {i < challenges.length - 1 && (
                <div className="mt-10 border-t-[0.5px] border-charcoal/5" />
              )}
            </ScrollReveal>
          ))}
        </div>

        {/* Emotional Toll */}
        <ScrollReveal direction="up" delay={0.2} duration={0.8}>
          <div className="mt-20 py-12 border-t-[0.5px] border-b-[0.5px] border-charcoal/10">
            <span className="block text-[11px] uppercase tracking-[0.2em] text-charcoal/40 mb-4">
              {emotionalToll.label}
            </span>
            <p className="font-lora italic font-semibold text-[48px] sm:text-[56px] text-coral leading-none">
              {emotionalToll.statValue}
            </p>
            <p className="mt-4 text-sm text-charcoal/50 leading-[1.8] max-w-lg">
              {emotionalToll.text}
            </p>
          </div>
        </ScrollReveal>
      </section>

      <div className="max-w-[640px] mx-auto px-6">
        <Divider />
      </div>

      {/* ───────────── THE GAP ───────────── */}
      <section className="max-w-[640px] mx-auto px-6 py-24 sm:py-32">
        <ScrollReveal direction="up" duration={0.8}>
          <span className="block text-[11px] uppercase tracking-[0.2em] text-charcoal/40 mb-6">
            The Gap
          </span>
          <h2 className="font-lora italic font-semibold text-[28px] sm:text-[32px] text-marine-green leading-[1.3] tracking-[-0.02em]">
            {gap.headline}
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1} duration={0.8}>
          <p className="mt-6 text-base text-charcoal/60 leading-[1.8]">
            {gap.subheadline}
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2} duration={0.8}>
          <div className="mt-12 pl-6 border-l-[0.5px] border-coral/40">
            <h3 className="font-lora italic font-semibold text-[20px] text-charcoal leading-[1.4] tracking-[-0.02em]">
              {gapInsight.headline}
            </h3>
            <p className="mt-4 text-sm text-charcoal/50 leading-[1.8]">
              {gapInsight.body}
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 space-y-10">
          {gapStats.map((stat, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.08} duration={0.7}>
              <div className="flex items-baseline gap-6">
                <span className="font-lora italic font-semibold text-[36px] text-coral leading-none shrink-0">
                  {stat.value}
                </span>
                <span className="text-sm text-charcoal/50 leading-relaxed">
                  {stat.label}
                </span>
              </div>
              {i < gapStats.length - 1 && (
                <div className="mt-6 border-t-[0.5px] border-charcoal/5" />
              )}
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="max-w-[640px] mx-auto px-6">
        <Divider />
      </div>

      {/* ───────────── SOLUTION ───────────── */}
      <section className="max-w-[640px] mx-auto px-6 py-24 sm:py-32">
        <ScrollReveal direction="up" duration={0.8}>
          {solution.label && (
            <span className="block text-[11px] uppercase tracking-[0.2em] text-charcoal/40 mb-6">
              {solution.label}
            </span>
          )}
          <h2 className="font-lora italic font-semibold text-[32px] sm:text-[36px] text-marine-green leading-[1.2] tracking-[-0.02em]">
            {solution.headline}
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1} duration={0.8}>
          <p className="mt-6 text-base text-charcoal/60 leading-[1.8]">
            {solution.subheadline}
          </p>
        </ScrollReveal>

        <div className="mt-16 space-y-10">
          {services.map((service, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.06} duration={0.7}>
              <div className="group">
                <div className="flex items-baseline gap-4">
                  <span className="text-[11px] text-charcoal/20 font-mono tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-lora italic font-semibold text-[20px] text-marine-green tracking-[-0.02em] mb-2 group-hover:text-coral transition-colors duration-500">
                      {service.title}
                    </h3>
                    <p className="text-sm text-charcoal/50 leading-[1.8]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
              {i < services.length - 1 && (
                <div className="mt-10 border-t-[0.5px] border-charcoal/5" />
              )}
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.3} duration={0.8}>
          <p className="mt-16 text-[13px] text-charcoal/40 leading-relaxed italic">
            {solutionFooter}
          </p>
        </ScrollReveal>
      </section>

      <div className="max-w-[640px] mx-auto px-6">
        <Divider />
      </div>

      {/* ───────────── CASE STUDY ───────────── */}
      <section className="max-w-[640px] mx-auto px-6 py-24 sm:py-32">
        <ScrollReveal direction="up" duration={0.8}>
          {caseStudy.label && (
            <span className="block text-[11px] uppercase tracking-[0.2em] text-charcoal/40 mb-6">
              {caseStudy.label}
            </span>
          )}
          <h2 className="font-lora italic font-semibold text-[28px] sm:text-[32px] text-marine-green leading-[1.3] tracking-[-0.02em]">
            {caseStudy.headline}
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1} duration={0.8}>
          <p className="mt-6 text-base text-charcoal/60 leading-[1.8]">
            {caseStudy.subheadline}
          </p>
        </ScrollReveal>

        {/* BA Challenge Stats */}
        <ScrollReveal direction="up" delay={0.15} duration={0.8}>
          <h3 className="mt-16 text-[11px] uppercase tracking-[0.2em] text-charcoal/40 mb-8">
            The challenge at British Airways
          </h3>
        </ScrollReveal>
        <div className="space-y-8">
          {baChallengeStats.map((stat, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.06} duration={0.7}>
              <div className="flex items-baseline gap-6">
                <span className="font-lora italic font-semibold text-[32px] text-marine-green leading-none shrink-0 min-w-[80px]">
                  {stat.value}
                </span>
                <span className="text-sm text-charcoal/50 leading-relaxed">
                  {stat.label}
                </span>
              </div>
              {i < baChallengeStats.length - 1 && (
                <div className="mt-4 border-t-[0.5px] border-charcoal/5" />
              )}
            </ScrollReveal>
          ))}
        </div>

        {/* BA Result Stats */}
        <ScrollReveal direction="up" delay={0.15} duration={0.8}>
          <h3 className="mt-20 text-[11px] uppercase tracking-[0.2em] text-charcoal/40 mb-8">
            The results
          </h3>
        </ScrollReveal>
        <div className="space-y-8">
          {baResultStats.map((stat, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.06} duration={0.7}>
              <div>
                <span className="font-lora italic font-semibold text-[36px] sm:text-[42px] text-coral leading-none block">
                  {stat.value}
                </span>
                <span className="text-sm text-charcoal/50 leading-relaxed mt-2 block">
                  {stat.label}
                </span>
                {stat.sublabel && (
                  <span className="text-[12px] text-charcoal/30 mt-1 block">
                    {stat.sublabel}
                  </span>
                )}
              </div>
              {i < baResultStats.length - 1 && (
                <div className="mt-4 border-t-[0.5px] border-charcoal/5" />
              )}
            </ScrollReveal>
          ))}
        </div>

        {/* Diversity Stats */}
        <ScrollReveal direction="up" delay={0.15} duration={0.8}>
          <h3 className="mt-20 text-[11px] uppercase tracking-[0.2em] text-charcoal/40 mb-8">
            Diversity &amp; retention impact
          </h3>
        </ScrollReveal>
        <div className="space-y-8">
          {diversityStats.map((stat, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.08} duration={0.7}>
              <div className="flex items-baseline gap-6">
                <span className="font-lora italic font-semibold text-[32px] text-marine-green leading-none shrink-0 min-w-[60px]">
                  {stat.value}
                </span>
                <span className="text-sm text-charcoal/50 leading-relaxed">
                  {stat.label}
                </span>
              </div>
              {i < diversityStats.length - 1 && (
                <div className="mt-4 border-t-[0.5px] border-charcoal/5" />
              )}
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal direction="up" delay={0.2} duration={0.8}>
          <p className="mt-8 text-[13px] text-charcoal/40 italic">
            {diversityFooter}
          </p>
        </ScrollReveal>

        {/* TFL Projections */}
        <div className="mt-20 pt-12 border-t-[0.5px] border-charcoal/10">
          {tflProjection.label && (
            <ScrollReveal direction="up" duration={0.8}>
              <span className="block text-[11px] uppercase tracking-[0.2em] text-coral/70 mb-6">
                {tflProjection.label}
              </span>
            </ScrollReveal>
          )}
          <ScrollReveal direction="up" delay={0.1} duration={0.8}>
            <p className="text-base text-charcoal/60 leading-[1.8] mb-12">
              {tflProjection.body}
            </p>
          </ScrollReveal>
          <div className="space-y-10">
            {tflProjectionStats.map((stat, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.08} duration={0.7}>
                <div>
                  <span className="font-lora italic font-semibold text-[36px] sm:text-[42px] text-marine-green leading-none block">
                    {stat.value}
                  </span>
                  <span className="text-sm text-charcoal/50 leading-relaxed mt-2 block">
                    {stat.label}
                  </span>
                  {stat.sublabel && (
                    <span className="text-[12px] text-charcoal/30 mt-1 block">
                      {stat.sublabel}
                    </span>
                  )}
                </div>
                {i < tflProjectionStats.length - 1 && (
                  <div className="mt-6 border-t-[0.5px] border-charcoal/5" />
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-[640px] mx-auto px-6">
        <Divider />
      </div>

      {/* ───────────── EXECUTIVE PERSPECTIVE ───────────── */}
      <section className="max-w-[640px] mx-auto px-6 py-24 sm:py-32">
        <ScrollReveal direction="up" duration={0.8}>
          <span className="block text-[11px] uppercase tracking-[0.2em] text-charcoal/40 mb-6">
            Executive Perspective
          </span>
          <h2 className="font-lora italic font-semibold text-[28px] sm:text-[32px] text-marine-green leading-[1.3] tracking-[-0.02em]">
            From the people who&apos;ve seen the data
          </h2>
        </ScrollReveal>

        <div className="mt-16 space-y-16">
          {executiveQuotes.map((eq, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.15} duration={0.8}>
              <div className="pl-6 border-l-[0.5px] border-coral/30">
                {eq.context && (
                  <p className="text-[11px] uppercase tracking-[0.15em] text-charcoal/30 mb-4">
                    {eq.context}
                  </p>
                )}
                <blockquote className="text-base text-charcoal/70 leading-[1.8] italic">
                  &ldquo;{eq.quote}&rdquo;
                </blockquote>
                <div className="mt-4">
                  <cite className="block text-[12px] text-coral not-italic font-semibold tracking-wide">
                    {eq.attribution}
                  </cite>
                  <span className="block text-[11px] text-charcoal/40 tracking-wide mt-0.5">
                    {eq.role}, {eq.company}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="max-w-[640px] mx-auto px-6">
        <Divider />
      </div>

      {/* ───────────── TESTIMONIALS ───────────── */}
      <section className="max-w-[640px] mx-auto px-6 py-24 sm:py-32">
        <ScrollReveal direction="up" duration={0.8}>
          <h2 className="font-lora italic font-semibold text-[28px] sm:text-[32px] text-marine-green leading-[1.3] tracking-[-0.02em]">
            {testimonialSection.headline}
          </h2>
        </ScrollReveal>

        <div className="mt-16 space-y-16">
          {testimonials.map((testimonial, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.15} duration={0.8}>
              <div className="pl-6 border-l-[0.5px] border-coral/30">
                <blockquote className="text-base text-charcoal/70 leading-[1.8] italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <cite className="block mt-4 text-[12px] text-charcoal/40 not-italic tracking-wide">
                  {testimonial.attribution}
                </cite>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="max-w-[640px] mx-auto px-6">
        <Divider />
      </div>

      {/* ───────────── CTA + FOOTER ───────────── */}
      <section className="max-w-[640px] mx-auto px-6 py-24 sm:py-32">
        <ScrollReveal direction="up" duration={0.8}>
          <h2 className="font-lora italic font-semibold text-[28px] sm:text-[32px] text-marine-green leading-[1.3] tracking-[-0.02em]">
            {ctaSection.headline}
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1} duration={0.8}>
          <p className="mt-6 text-base text-charcoal/60 leading-[1.8]">
            {ctaSection.subheadline}
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.15} duration={0.8}>
          <ul className="mt-6 space-y-3">
            {ctaSection.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-charcoal/60 leading-relaxed"
              >
                <span className="block w-1 h-1 rounded-full bg-coral mt-2 shrink-0" />
                <span>{typeof item === "string" ? item : item.text}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.3} duration={0.8}>
          <div className="mt-12">
            <CTAButton
              variant="coral"
              size="md"
              className="rounded-full text-sm tracking-wide hover:tracking-wider transition-all duration-500"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="max-w-[640px] mx-auto px-6 pb-12">
        <Divider />
        <div className="pt-8 flex items-center justify-between">
          <LogoPair kareheroVariant="coral" size="sm" />
          <span className="text-[11px] text-charcoal/30 tracking-wide">
            {footer.copyright}
          </span>
        </div>
      </footer>
    </div>
  );
}
