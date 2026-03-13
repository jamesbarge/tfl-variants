"use client";

import Script from "next/script";
import { LogoPair } from "@/components/shared/logo-pair";
import { CTAButton } from "@/components/shared/cta-button";
import { StatCounter } from "@/components/shared/stat-counter";
import { ClientLogos } from "@/components/shared/client-logos";
import { ScrollReveal } from "@/components/motion";
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
  tflProjection,
  testimonialSection,
  ctaSection,
  footer,
} from "@/lib/content/tfl";
import {
  problemStats,
  baChallengeStats,
  baResultStats,
  tflProjectionStats,
} from "@/lib/content/stats";
import { testimonials } from "@/lib/content/testimonials";
import { caregivingImage, caseStudyImage } from "@/lib/content/images";
import Image from "next/image";

export default function BrutalistPage() {
  return (
    <div className="min-h-screen bg-floral-white text-charcoal font-work-sans selection:bg-coral selection:text-white">
      {/* ───────────── HEADER ───────────── */}
      <header className="border-b-4 border-charcoal px-6 py-4 flex items-center justify-between">
        <LogoPair kareheroVariant="coral" size="md" />
        <span className="hidden sm:block uppercase text-xs tracking-[0.3em] font-semibold text-charcoal/50">
          Care Simplified
        </span>
      </header>

      {/* ───────────── HERO ───────────── */}
      <section className="relative border-b-4 border-charcoal">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr]">
          <div className="hidden lg:flex items-center justify-center border-r-4 border-charcoal w-16">
            <span className="block -rotate-90 whitespace-nowrap uppercase text-xs tracking-[0.3em] font-bold text-charcoal/40">
              Hero
            </span>
          </div>

          <div className="px-6 sm:px-12 lg:px-16 py-16 sm:py-24 lg:py-32">
            <ScrollReveal direction="up" duration={0.5}>
              <h1 className="font-lora italic font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-marine-green leading-[1.05] tracking-[-0.02em] max-w-5xl">
                {hero.headline}
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.15} duration={0.5}>
              <p className="mt-8 text-lg sm:text-xl text-charcoal/80 max-w-3xl leading-relaxed">
                {hero.subheadline}
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3} duration={0.5}>
              <div className="mt-10">
                <CTAButton
                  variant="coral"
                  size="lg"
                  href="#calendar"
                  className="rounded-none border-4 border-charcoal shadow-[8px_8px_0px_#404042] hover:shadow-[4px_4px_0px_#404042] hover:translate-x-[4px] hover:translate-y-[4px] transition-all uppercase tracking-wide"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ───────────── PROBLEM ───────────── */}
      <section className="relative border-b-4 border-charcoal">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr]">
          <div className="hidden lg:flex items-center justify-center border-r-4 border-charcoal w-16">
            <span className="block -rotate-90 whitespace-nowrap uppercase text-xs tracking-[0.3em] font-bold text-charcoal/40">
              Problem
            </span>
          </div>

          <div className="px-6 sm:px-12 lg:px-16 py-16 sm:py-20">
            <ScrollReveal direction="up">
              <h2 className="font-lora italic font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-coral leading-tight tracking-[-0.02em]">
                {problem.headline}
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <p className="mt-6 text-lg text-charcoal/70 max-w-3xl">
                {problem.subheadline}
              </p>
            </ScrollReveal>

            {/* Problem Stats Grid - 5 items */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
              {problemStats.map((stat, i) => (
                <ScrollReveal key={i} direction="up" delay={i * 0.08}>
                  <div className="border-4 border-charcoal p-6 sm:p-8 shadow-[8px_8px_0px_#404042] bg-white -ml-1 -mt-1">
                    <StatCounter
                      stat={stat}
                      className="text-left"
                      valueClassName="text-4xl sm:text-5xl md:text-6xl font-mono not-italic text-coral"
                      labelClassName="text-sm text-charcoal/70 mt-3 uppercase tracking-wide"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Caregiving Image */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="mt-12 border-4 border-charcoal shadow-[8px_8px_0px_#404042] overflow-hidden">
                <Image
                  src={caregivingImage.src}
                  alt={caregivingImage.alt}
                  width={caregivingImage.width}
                  height={caregivingImage.height}
                  priority
                  className="object-cover w-full h-auto aspect-[21/9]"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ───────────── THEIR EMPLOYEES ───────────── */}
      <section className="relative border-b-4 border-charcoal bg-marine-green text-white">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr]">
          <div className="hidden lg:flex items-center justify-center border-r-4 border-white/20 w-16">
            <span className="block -rotate-90 whitespace-nowrap uppercase text-xs tracking-[0.3em] font-bold text-white/40">
              Employees
            </span>
          </div>

          <div className="px-6 sm:px-12 lg:px-16 py-16 sm:py-20">
            <ScrollReveal direction="up">
              <h2 className="font-lora italic font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-sunflower leading-tight tracking-[-0.02em]">
                {employees.headline}
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <p className="mt-6 text-lg text-white/70 max-w-3xl">
                {employees.subheadline}
              </p>
            </ScrollReveal>

            {/* Challenges */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-0">
              {challenges.map((challenge, i) => (
                <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                  <div className="border-4 border-white/30 p-8 -ml-1 -mt-1 hover:bg-white/5 transition-colors">
                    <span className="block uppercase text-xs tracking-[0.3em] text-sunflower font-bold mb-3">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-lora italic font-semibold text-2xl sm:text-3xl text-white mb-4 tracking-[-0.02em]">
                      {challenge.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Emotional Toll */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="mt-12 border-4 border-sunflower p-8 sm:p-12 shadow-[8px_8px_0px_#FFDD6C]">
                <span className="block uppercase text-xs tracking-[0.3em] text-sunflower font-bold mb-4">
                  {emotionalToll.label}
                </span>
                <p className="font-mono text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-sunflower leading-none">
                  {emotionalToll.statValue}
                </p>
                <p className="mt-4 text-lg text-white/80 max-w-2xl">
                  {emotionalToll.text}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ───────────── SOLUTION ───────────── */}
      <section className="relative border-b-4 border-charcoal bg-coral text-white">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr]">
          <div className="hidden lg:flex items-center justify-center border-r-4 border-white/20 w-16">
            <span className="block -rotate-90 whitespace-nowrap uppercase text-xs tracking-[0.3em] font-bold text-white/40">
              Solution
            </span>
          </div>

          <div className="px-6 sm:px-12 lg:px-16 py-16 sm:py-20">
            {solution.label && (
              <ScrollReveal direction="up">
                <span className="block uppercase text-xs tracking-[0.3em] font-bold text-white/60 mb-4">
                  {solution.label}
                </span>
              </ScrollReveal>
            )}
            <ScrollReveal direction="up" delay={0.05}>
              <h2 className="font-lora italic font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-tight tracking-[-0.02em]">
                {solution.headline}
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <p className="mt-6 text-lg text-white/80 max-w-3xl">
                {solution.subheadline}
              </p>
            </ScrollReveal>

            {/* Services */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
              {services.map((service, i) => (
                <ScrollReveal key={i} direction="up" delay={i * 0.08} className="h-full">
                  <div className="border-4 border-white/40 p-8 -ml-1 -mt-1 hover:bg-white/10 transition-colors h-full">
                    <span className="block font-mono text-5xl sm:text-6xl font-bold text-white/30 mb-4">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-lora italic font-semibold text-2xl sm:text-3xl text-white mb-3 tracking-[-0.02em]">
                      {service.title}
                    </h3>
                    <p className="text-white/70 text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="mt-10 text-white/60 text-sm uppercase tracking-wide max-w-2xl">
                {solutionFooter}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ───────────── CASE STUDY ───────────── */}
      <section className="relative border-b-4 border-charcoal">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr]">
          <div className="hidden lg:flex items-center justify-center border-r-4 border-charcoal w-16">
            <span className="block -rotate-90 whitespace-nowrap uppercase text-xs tracking-[0.3em] font-bold text-charcoal/40">
              Proof
            </span>
          </div>

          <div className="px-6 sm:px-12 lg:px-16 py-16 sm:py-20">
            {caseStudy.label && (
              <ScrollReveal direction="up">
                <span className="block uppercase text-xs tracking-[0.3em] font-bold text-coral mb-4">
                  {caseStudy.label}
                </span>
              </ScrollReveal>
            )}
            <ScrollReveal direction="up" delay={0.05}>
              <h2 className="font-lora italic font-semibold text-4xl sm:text-5xl md:text-6xl text-marine-green leading-tight tracking-[-0.02em] max-w-4xl">
                {caseStudy.headline}
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <p className="mt-6 text-lg text-charcoal/70 max-w-3xl">
                {caseStudy.subheadline}
              </p>
            </ScrollReveal>

            {/* BA Challenge Stats - 4 items */}
            <ScrollReveal direction="up" delay={0.15}>
              <h3 className="mt-12 font-lora italic font-semibold text-2xl sm:text-3xl text-charcoal tracking-[-0.02em]">
                The challenge at British Airways
              </h3>
            </ScrollReveal>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-0">
              {baChallengeStats.map((stat, i) => (
                <ScrollReveal key={i} direction="up" delay={i * 0.08}>
                  <div className="border-4 border-charcoal p-5 shadow-[8px_8px_0px_#404042] bg-white -ml-1 -mt-1">
                    <StatCounter
                      stat={stat}
                      className="text-left"
                      valueClassName="text-3xl sm:text-4xl font-mono not-italic text-marine-green"
                      labelClassName="text-xs text-charcoal/70 mt-2 uppercase tracking-wide"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* BA Result Stats - 3 items */}
            <ScrollReveal direction="up" delay={0.15}>
              <h3 className="mt-14 font-lora italic font-semibold text-2xl sm:text-3xl text-charcoal tracking-[-0.02em]">
                The results
              </h3>
            </ScrollReveal>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-0">
              {baResultStats.map((stat, i) => (
                <ScrollReveal key={i} direction="up" delay={i * 0.08}>
                  <div className="border-4 border-coral p-5 shadow-[8px_8px_0px_#EA6430] bg-white -ml-1 -mt-1">
                    <StatCounter
                      stat={stat}
                      className="text-left"
                      valueClassName="text-3xl sm:text-4xl font-mono not-italic text-coral"
                      labelClassName="text-xs text-charcoal/70 mt-2"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Case Study Image */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="mt-12 border-4 border-charcoal shadow-[8px_8px_0px_#404042] overflow-hidden">
                <Image
                  src={caseStudyImage.src}
                  alt={caseStudyImage.alt}
                  width={caseStudyImage.width}
                  height={caseStudyImage.height}
                  className="object-cover w-full h-auto aspect-[21/9]"
                />
              </div>
            </ScrollReveal>

            {/* Single Testimonial */}
            {testimonials[0] && (
              <ScrollReveal direction="up" delay={0.2}>
                <div className="mt-12 border-4 border-charcoal p-8 sm:p-12 -mt-1 bg-gardenia shadow-[8px_8px_0px_#404042]">
                  <span className="block font-mono text-6xl sm:text-7xl text-coral/40 leading-none mb-4">
                    &ldquo;
                  </span>
                  <blockquote className="text-lg sm:text-xl text-charcoal/80 leading-relaxed max-w-3xl">
                    {testimonials[0].quote}
                  </blockquote>
                  <cite className="block mt-6 text-sm text-charcoal/50 not-italic uppercase tracking-wide">
                    - {testimonials[0].attribution}
                  </cite>
                </div>
              </ScrollReveal>
            )}

            {/* TfL Projections */}
            <ScrollReveal direction="up" delay={0.15}>
              <span className="block mt-14 uppercase text-xs tracking-[0.3em] font-bold text-coral mb-2">
                {tflProjection.label}
              </span>
              <h3 className="font-lora italic font-semibold text-4xl sm:text-5xl text-marine-green tracking-[-0.02em] mb-4">
                {tflProjection.headline}
              </h3>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-lg text-charcoal/70 max-w-3xl mb-6">
                {tflProjection.body}
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
              {tflProjectionStats.map((stat, i) => (
                <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                  <div className="border-4 border-marine-green p-6 shadow-[8px_8px_0px_#00433D] bg-white -ml-1 -mt-1">
                    <StatCounter
                      stat={stat}
                      className="text-left"
                      valueClassName="text-4xl sm:text-5xl font-mono not-italic text-marine-green"
                      labelClassName="text-sm text-charcoal/70 mt-3"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Client Logos */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="mt-12">
                <ClientLogos variant="light" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ───────────── CTA + HUBSPOT CALENDAR ───────────── */}
      <section id="calendar" className="relative bg-floral-white">
        <Script src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js" strategy="lazyOnload" />
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr]">
          <div className="hidden lg:flex items-center justify-center border-r-4 border-charcoal w-16">
            <span className="block -rotate-90 whitespace-nowrap uppercase text-xs tracking-[0.3em] font-bold text-charcoal/40">
              Action
            </span>
          </div>

          <div className="px-6 sm:px-12 lg:px-16 py-16 sm:py-24">
            <ScrollReveal direction="up">
              <h2 className="font-lora italic font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-marine-green leading-tight tracking-[-0.02em] max-w-4xl">
                {ctaSection.headline}
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.1}>
              <p className="mt-6 text-lg text-charcoal/70 max-w-2xl">
                {ctaSection.subheadline}
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.15}>
              <ul className="mt-6 space-y-3">
                {ctaSection.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-charcoal/80"
                  >
                    <span className="block w-3 h-3 mt-1.5 bg-coral flex-shrink-0" />
                    <span>{typeof item === "string" ? item : item.text}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.25}>
              <div className="mt-10">
                <div
                  className="meetings-iframe-container"
                  data-src="https://meetings-eu1.hubspot.com/becci-gill?embed=true"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t-4 border-charcoal px-6 sm:px-12 lg:px-16 py-6 flex items-center justify-between">
          <LogoPair kareheroVariant="coral" size="sm" />
          <span className="text-xs text-charcoal/40 uppercase tracking-wide">
            {footer.copyright}
          </span>
        </footer>
      </section>
    </div>
  );
}
