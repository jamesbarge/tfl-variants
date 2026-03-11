"use client";

import { LogoPair } from "@/components/shared/logo-pair";
import { CTAButton } from "@/components/shared/cta-button";
import { StatCounter } from "@/components/shared/stat-counter";
import { ScrollReveal, FadeIn, StaggerChildren, staggerItem } from "@/components/motion";
import { motion } from "framer-motion";
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
import { caseStudyImage, caregivingImage } from "@/lib/content/images";
import Image from "next/image";

export default function EditorialPage() {
  return (
    <main className="min-h-screen bg-floral-white text-charcoal overflow-x-hidden">
      {/* ─── 1. HEADER ─── */}
      <header className="border-b border-gardenia">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between gap-3">
          <LogoPair kareheroVariant="coral" size="md" />
          <CTAButton variant="coral" size="md" />
        </div>
      </header>

      {/* ─── 2. HERO ─── */}
      <section className="bg-marine-green text-white py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <p className="uppercase tracking-widest text-lime-green text-xs font-work-sans font-semibold mb-6">
              An exclusive briefing for Transport for London
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-lora italic font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight max-w-4xl">
              {hero.headline}
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="mt-8 text-lg md:text-xl leading-relaxed max-w-3xl text-white/85 font-work-sans">
              {hero.subheadline}
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <div className="mt-10">
              <CTAButton variant="white" size="lg" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── 3. PROBLEM - UK Workforce Stats ─── */}
      <section className="bg-floral-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="uppercase tracking-widest text-coral text-xs font-work-sans font-semibold mb-4">
              The Crisis
            </p>
            <h2 className="font-lora italic font-semibold text-3xl sm:text-4xl md:text-5xl text-marine-green max-w-3xl">
              {problem.headline}
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Main body text with drop-cap */}
            <ScrollReveal className="md:col-span-7" delay={0.1}>
              <p className="text-lg leading-loose text-charcoal">
                {problem.subheadline}
              </p>
            </ScrollReveal>

            {/* Sidebar stats callout */}
            <div className="md:col-span-5">
              <ScrollReveal delay={0.2}>
                <div className="bg-gardenia rounded-lg p-8 space-y-6">
                  {ukWorkforceStats.map((stat, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="font-lora italic font-semibold text-2xl text-coral shrink-0 min-w-[80px]">
                        {stat.value}
                      </span>
                      <span className="text-sm text-charcoal/80 leading-snug pt-1">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Thin decorative divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gardenia" />
          <div className="w-2 h-2 rounded-full bg-coral" />
          <div className="flex-1 h-px bg-gardenia" />
        </div>
      </div>

      {/* ─── 4. THEIR EMPLOYEES - Challenges + Emotional Toll ─── */}
      <section className="bg-floral-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="uppercase tracking-widest text-coral text-xs font-work-sans font-semibold mb-4">
              Your People
            </p>
            <h2 className="font-lora italic font-semibold text-3xl sm:text-4xl md:text-5xl text-marine-green max-w-3xl">
              {employees.headline}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal/80 max-w-3xl">
              {employees.subheadline}
            </p>
          </ScrollReveal>

          {/* 4 Challenges - 2-column magazine layout */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {challenges.map((challenge, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-marine-green/10 flex items-center justify-center">
                    <span className="font-lora italic font-semibold text-lg text-marine-green">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-lora italic font-semibold text-xl text-marine-green mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-base leading-relaxed text-charcoal/80">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Emotional Toll - Pull Quote */}
          <ScrollReveal delay={0.3}>
            <div className="mt-16 border-l-4 border-coral pl-8 py-4 max-w-3xl">
              <p className="uppercase tracking-widest text-coral text-xs font-work-sans font-semibold mb-3">
                {emotionalToll.label}
              </p>
              <p className="font-lora italic text-2xl sm:text-3xl text-marine-green leading-snug">
                <span className="text-coral font-semibold">{emotionalToll.statValue}</span>{" "}
                of carer employees say care responsibilities negatively impact their wellbeing.
              </p>
              <p className="mt-4 text-base text-charcoal/70 leading-relaxed">
                {emotionalToll.text}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-12 relative rounded-xl overflow-hidden aspect-[16/9] max-w-2xl mx-auto">
              <Image
                src={caregivingImage.src}
                alt={caregivingImage.alt}
                width={caregivingImage.width}
                height={caregivingImage.height}
                className="object-cover w-full h-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 6. SOLUTION - 6 Services ─── */}
      <section className="bg-marine-green text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="uppercase tracking-widest text-lime-green text-xs font-work-sans font-semibold mb-4">
              {solution.label}
            </p>
            <h2 className="font-lora italic font-semibold text-3xl sm:text-4xl md:text-5xl text-white max-w-3xl">
              {solution.headline}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80 max-w-3xl">
              {solution.subheadline}
            </p>
          </ScrollReveal>

          {/* Services - 3-column grid */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 h-full">
                  <div className="w-10 h-10 rounded-full bg-coral flex items-center justify-center mb-4">
                    <span className="text-white font-work-sans font-semibold text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-lora italic font-semibold text-lg text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.5}>
            <p className="mt-12 text-base text-white/60 italic text-center max-w-2xl mx-auto">
              {solutionFooter}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── 7. CASE STUDY - BA Stats + Results + Diversity ─── */}
      <section className="bg-floral-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="uppercase tracking-widest text-coral text-xs font-work-sans font-semibold mb-4">
              {caseStudy.label}
            </p>
            <h2 className="font-lora italic font-semibold text-3xl sm:text-4xl md:text-5xl text-marine-green max-w-4xl">
              {caseStudy.headline}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-lg leading-loose text-charcoal/80 max-w-3xl">
              {caseStudy.subheadline}
            </p>
          </ScrollReveal>

          {/* BA Challenge Stats */}
          <div className="mt-14">
            <ScrollReveal delay={0.15}>
              <p className="uppercase tracking-widest text-charcoal/50 text-xs font-work-sans font-semibold mb-6">
                What British Airways discovered
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {baChallengeStats.map((stat, i) => (
                <ScrollReveal key={i} delay={0.2 + i * 0.05}>
                  <StatCounter
                    stat={stat}
                    valueClassName="text-coral text-2xl sm:text-3xl"
                    labelClassName="text-charcoal/70"
                    className="text-left"
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Decorative divider */}
          <div className="my-14 flex items-center gap-4">
            <div className="flex-1 h-px bg-gardenia" />
            <div className="w-2 h-2 rounded-full bg-coral" />
            <div className="flex-1 h-px bg-gardenia" />
          </div>

          {/* BA Result Stats */}
          <ScrollReveal delay={0.15}>
            <p className="uppercase tracking-widest text-charcoal/50 text-xs font-work-sans font-semibold mb-6">
              The Results
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {baResultStats.map((stat, i) => (
              <ScrollReveal key={i} delay={0.2 + i * 0.05}>
                <div className="bg-gardenia rounded-lg p-6">
                  <StatCounter
                    stat={stat}
                    valueClassName="text-marine-green text-3xl sm:text-4xl"
                    labelClassName="text-charcoal/70"
                    className="text-left"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Decorative divider */}
          <div className="my-14 flex items-center gap-4">
            <div className="flex-1 h-px bg-gardenia" />
            <div className="w-2 h-2 rounded-full bg-coral" />
            <div className="flex-1 h-px bg-gardenia" />
          </div>

          {/* Diversity Stats - two-column with pull-quote */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <ScrollReveal>
                <p className="uppercase tracking-widest text-charcoal/50 text-xs font-work-sans font-semibold mb-6">
                  Diversity &amp; Retention
                </p>
                <div className="space-y-6">
                  {diversityStats.map((stat, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className="font-lora italic font-semibold text-2xl text-coral shrink-0 min-w-[60px]">
                        {stat.value}
                      </span>
                      <span className="text-sm text-charcoal/70 leading-snug pt-1">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            <div className="md:col-span-7 flex items-center">
              <ScrollReveal delay={0.2}>
                <div className="border-l-4 border-coral pl-8 py-2">
                  <p className="font-lora italic text-xl sm:text-2xl text-marine-green leading-snug">
                    {diversityFooter}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Decorative divider */}
          <div className="my-14 flex items-center gap-4">
            <div className="flex-1 h-px bg-gardenia" />
            <div className="w-2 h-2 rounded-full bg-coral" />
            <div className="flex-1 h-px bg-gardenia" />
          </div>

          {/* TFL Projections */}
          <div className="bg-marine-green rounded-xl p-8 md:p-12 text-white">
            <ScrollReveal>
              <p className="uppercase tracking-widest text-lime-green text-xs font-work-sans font-semibold mb-4">
                {tflProjection.label}
              </p>
              <p className="text-lg leading-relaxed text-white/85 max-w-3xl mb-10">
                {tflProjection.body}
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {tflProjectionStats.map((stat, i) => (
                <ScrollReveal key={i} delay={0.1 + i * 0.1}>
                  <StatCounter
                    stat={stat}
                    valueClassName="text-sunflower text-3xl sm:text-4xl"
                    labelClassName="text-white/80"
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. TESTIMONIALS ─── */}
      <section className="bg-gardenia py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="uppercase tracking-widest text-coral text-xs font-work-sans font-semibold mb-4">
              Voices
            </p>
            <h2 className="font-lora italic font-semibold text-3xl sm:text-4xl text-marine-green mb-14">
              {testimonialSection.headline}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <blockquote className="h-full flex flex-col">
                  <div className="border-l-4 border-coral pl-8 flex-1">
                    <span className="font-lora italic text-coral text-5xl leading-none select-none">
                      &ldquo;
                    </span>
                    <p className="font-lora italic text-lg sm:text-xl text-marine-green leading-relaxed -mt-4">
                      {t.quote}
                    </p>
                  </div>
                  <p className="mt-6 pl-8 text-sm text-charcoal/60 font-work-sans uppercase tracking-widest">
                    — {t.attribution}
                  </p>
                </blockquote>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. CTA + FOOTER ─── */}
      <section className="bg-coral text-white py-20 md:py-28">
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
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-white/60 shrink-0" />
                  <span className="text-base text-white/90 leading-relaxed">
                    {typeof item === "string" ? item : item.text}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-10">
              <CTAButton variant="white" size="lg" />
            </div>
            <div className="mt-8 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-center gap-2 break-all">
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
      <footer className="bg-marine-green text-white/50 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <LogoPair kareheroVariant="white" size="sm" />
          <p className="text-sm">{footer.copyright}</p>
        </div>
      </footer>
    </main>
  );
}
