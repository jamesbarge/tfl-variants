"use client";

import { useRef } from "react";
import { LogoPair } from "@/components/shared/logo-pair";
import { CTAButton } from "@/components/shared/cta-button";
import { ScrollReveal, ParallaxLayer, CountUp } from "@/components/motion";
import { TextGenerateEffect } from "@/components/aceternity/text-generate-effect";
import { WavyBackground } from "@/components/aceternity/wavy-background";
import { BackgroundBeams } from "@/components/aceternity/background-beams";
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
} from "@/lib/content/tfl";
import {
  ukWorkforceStats,
  baChallengeStats,
  baResultStats,
  diversityStats,
  tflProjectionStats,
} from "@/lib/content/stats";
import { testimonials } from "@/lib/content/testimonials";
import { caseStudyImage } from "@/lib/content/images";

/* ─── Icon for challenges/services ─── */
function Icon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    clock: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    users: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
    "map-pin": (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    "trending-down": (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
      </svg>
    ),
    user: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    "clipboard-check": (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
      </svg>
    ),
    "pound-sterling": (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 7.629A3 3 0 0 0 9.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 0 1-.43 2.65L9 16.5H15m-6-6h6" />
      </svg>
    ),
    "shield-check": (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    building: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    "bar-chart": (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  };
  return <>{icons[name] || icons["user"]}</>;
}

export default function ImmersivePage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={scrollRef} className="relative h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth">
      {/* ───────────── HEADER (overlay on hero) ───────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 py-4 flex items-center justify-between bg-marine-green/30 backdrop-blur-md">
        <LogoPair kareheroVariant="white" size="md" className="text-white" />
        <CTAButton variant="white-outline" size="md" className="hidden sm:inline-block" />
      </header>

      {/* ═══════════════════════════════════════════════════════
          SECTION 1 - HERO (Marine Green)
          ═══════════════════════════════════════════════════════ */}
      <section className="snap-start min-h-screen relative flex items-center justify-center bg-marine-green text-white overflow-hidden">
        <WavyBackground className="absolute inset-0" waveColor="#EA6430" waveOpacity={0.08}>
          <div className="min-h-screen" />
        </WavyBackground>
        <BackgroundBeams className="opacity-40" />

        <ParallaxLayer containerRef={scrollRef} speed={0.3} className="hidden md:block absolute top-20 -left-20 w-96 h-96 rounded-full bg-coral/5 blur-3xl">
          <div className="w-full h-full" />
        </ParallaxLayer>
        <ParallaxLayer containerRef={scrollRef} speed={-0.2} className="hidden md:block absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-lime-green/5 blur-3xl">
          <div className="w-full h-full" />
        </ParallaxLayer>

        <div className="relative z-10 text-center px-6 sm:px-12 max-w-4xl mx-auto pt-24">
          <ScrollReveal direction="up" duration={0.8} distance={60}>
            <h1 className="font-lora italic font-semibold text-5xl sm:text-6xl md:text-7xl text-white leading-[1.08] tracking-[-0.02em]">
              <TextGenerateEffect words={hero.headline} duration={0.6} />
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.6} duration={0.8} distance={40}>
            <p className="mt-8 text-xl sm:text-2xl text-white/70 leading-relaxed max-w-2xl mx-auto">
              {hero.subheadline}
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.9} duration={0.8}>
            <div className="mt-12">
              <CTAButton variant="coral" size="lg" />
            </div>
          </ScrollReveal>
          {/* Scroll indicator */}
          <ScrollReveal direction="up" delay={1.2} duration={1}>
            <div className="mt-16 flex flex-col items-center gap-2 text-white/40">
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
              </svg>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2 - PROBLEM (Floral White)
          ═══════════════════════════════════════════════════════ */}
      <section className="snap-start min-h-screen relative flex flex-col justify-center bg-floral-white text-charcoal px-6 sm:px-12 lg:px-20 py-24 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          <div>
            <ScrollReveal direction="up" duration={0.9} distance={70}>
              <p className="text-sm uppercase tracking-[0.2em] text-coral font-semibold mb-4">
                The Crisis
              </p>
              <h2 className="font-lora italic font-semibold text-5xl sm:text-6xl md:text-7xl text-marine-green leading-tight tracking-[-0.02em]">
                {problem.headline}
              </h2>
            </ScrollReveal>
          </div>
          <div className="mt-10">
            <ScrollReveal direction="up" delay={0.2} duration={0.8} distance={60}>
              <p className="text-xl text-charcoal/70 max-w-3xl leading-relaxed">
                {problem.subheadline}
              </p>
            </ScrollReveal>

            {/* Stats revealed one by one */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 lg:gap-12">
              {ukWorkforceStats.map((stat, i) => (
                <ScrollReveal key={i} direction="up" delay={0.1 + i * 0.12} duration={0.9} distance={60}>
                  <div className="text-center sm:text-left">
                    <p className="font-work-sans font-bold text-4xl sm:text-5xl tabular-nums text-coral leading-none">
                      {stat.value}
                    </p>
                    <p className="text-sm text-charcoal/60 mt-3 leading-snug">
                      {stat.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3 - EMPLOYEES (Gardenia)
          ═══════════════════════════════════════════════════════ */}
      <section className="snap-start min-h-screen relative flex flex-col justify-center bg-gardenia text-charcoal px-6 sm:px-12 lg:px-20 py-24 overflow-hidden">
        <ParallaxLayer containerRef={scrollRef} speed={0.2} className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-coral/3 blur-3xl">
          <div className="w-full h-full" />
        </ParallaxLayer>

        <div className="max-w-5xl mx-auto w-full relative z-10">
          <ScrollReveal direction="up" duration={0.9} distance={70}>
            <h2 className="font-lora italic font-semibold text-5xl sm:text-6xl md:text-7xl text-marine-green leading-tight tracking-[-0.02em]">
              {employees.headline}
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15} duration={0.8} distance={50}>
            <p className="mt-6 text-xl text-charcoal/70 max-w-3xl leading-relaxed">
              {employees.subheadline}
            </p>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {challenges.map((challenge, i) => (
              <ScrollReveal key={i} direction="up" delay={0.2 + i * 0.15} duration={1} distance={70}>
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 h-full border border-white">
                  <div className="w-14 h-14 rounded-2xl bg-marine-green/10 text-marine-green flex items-center justify-center mb-6">
                    <Icon name={challenge.icon} />
                  </div>
                  <h3 className="font-lora italic font-semibold text-2xl text-marine-green mb-3 tracking-[-0.02em]">
                    {challenge.title}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Emotional Toll */}
          <ScrollReveal direction="up" delay={0.3} duration={1} distance={80}>
            <div className="mt-12 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-coral font-semibold mb-2">
                {emotionalToll.label}
              </p>
              <CountUp
                end={95}
                suffix="%"
                duration={2}
                className="font-work-sans font-bold text-6xl sm:text-8xl md:text-9xl tabular-nums text-coral"
              />
              <p className="mt-4 text-lg text-charcoal/60 max-w-xl mx-auto">
                {emotionalToll.text}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 5 - SOLUTION (Floral White)
          ═══════════════════════════════════════════════════════ */}
      <section className="snap-start min-h-screen relative flex flex-col justify-center bg-floral-white text-charcoal px-6 sm:px-12 lg:px-20 py-24 overflow-hidden">
        <ParallaxLayer containerRef={scrollRef} speed={0.2} className="hidden md:block absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-coral/3 blur-3xl">
          <div className="w-full h-full" />
        </ParallaxLayer>

        <div className="max-w-5xl mx-auto w-full relative z-10">
          {solution.label && (
            <ScrollReveal direction="up" duration={0.9} distance={60}>
              <p className="text-sm uppercase tracking-[0.2em] text-coral font-semibold mb-4">
                {solution.label}
              </p>
            </ScrollReveal>
          )}
          <ScrollReveal direction="up" delay={0.1} duration={1} distance={80}>
            <h2 className="font-lora italic font-semibold text-5xl sm:text-6xl md:text-7xl text-marine-green leading-tight tracking-[-0.02em]">
              {solution.headline}
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.25} duration={0.9} distance={50}>
            <p className="mt-6 text-xl text-charcoal/70 max-w-3xl leading-relaxed">
              {solution.subheadline}
            </p>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={i} direction="up" delay={0.2 + i * 0.1} duration={1} distance={70}>
                <div className="bg-white rounded-3xl p-7 shadow-sm border border-gardenia hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 rounded-xl bg-coral/10 text-coral flex items-center justify-center mb-5">
                    <Icon name={service.icon} />
                  </div>
                  <h3 className="font-lora italic font-semibold text-xl text-marine-green mb-2 tracking-[-0.02em]">
                    {service.title}
                  </h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={0.5} duration={0.8}>
            <p className="mt-10 text-charcoal/50 text-sm max-w-2xl">
              {solutionFooter}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 6 - CASE STUDY (White)
          ═══════════════════════════════════════════════════════ */}
      <section className="snap-start min-h-screen relative flex flex-col justify-center bg-white text-charcoal px-6 sm:px-12 lg:px-20 py-24 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full">
          {caseStudy.label && (
            <ScrollReveal direction="up" duration={0.9} distance={60}>
              <p className="text-sm uppercase tracking-[0.2em] text-coral font-semibold mb-4">
                {caseStudy.label}
              </p>
            </ScrollReveal>
          )}
          <ScrollReveal direction="up" delay={0.1} duration={1} distance={80}>
            <h2 className="font-lora italic font-semibold text-5xl sm:text-6xl text-marine-green leading-tight tracking-[-0.02em] max-w-4xl">
              {caseStudy.headline}
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2} duration={0.8} distance={50}>
            <p className="mt-6 text-lg text-charcoal/70 max-w-3xl leading-relaxed">
              {caseStudy.subheadline}
            </p>
          </ScrollReveal>

          {/* BA Challenge Stats */}
          <div className="mt-14">
            <ScrollReveal direction="up" delay={0.25} duration={0.8}>
              <h3 className="font-lora italic font-semibold text-2xl text-charcoal tracking-[-0.02em] mb-8">
                The challenge at British Airways
              </h3>
            </ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {baChallengeStats.map((stat, i) => (
                <ScrollReveal key={i} direction="up" delay={0.3 + i * 0.1} duration={1} distance={60}>
                  <div className="text-center">
                    <p className="font-work-sans font-bold text-4xl sm:text-5xl tabular-nums text-marine-green leading-none">
                      {stat.value}
                    </p>
                    <p className="text-xs text-charcoal/60 mt-3 leading-snug">
                      {stat.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* BA Result Stats */}
          <div className="mt-14">
            <ScrollReveal direction="up" delay={0.2} duration={0.8}>
              <h3 className="font-lora italic font-semibold text-2xl text-charcoal tracking-[-0.02em] mb-8">
                The results
              </h3>
            </ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {baResultStats.map((stat, i) => (
                <ScrollReveal key={i} direction="up" delay={0.25 + i * 0.12} duration={1} distance={60}>
                  <div className="bg-coral/5 rounded-2xl p-6 text-center border border-coral/10">
                    <p className="font-work-sans font-bold text-4xl sm:text-5xl tabular-nums text-coral leading-none">
                      {stat.value}
                    </p>
                    <p className="text-sm text-charcoal/60 mt-3 leading-snug">
                      {stat.label}
                    </p>
                    {stat.sublabel && (
                      <p className="text-xs text-charcoal/40 mt-1">
                        {stat.sublabel}
                      </p>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 7 - PROJECTIONS + DIVERSITY (Coral/10)
          ═══════════════════════════════════════════════════════ */}
      <section className="snap-start min-h-screen relative flex flex-col justify-center bg-coral/10 text-charcoal px-6 sm:px-12 lg:px-20 py-24 overflow-hidden">
        <ParallaxLayer containerRef={scrollRef} speed={0.15} className="hidden md:block absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-sunflower/10 blur-3xl">
          <div className="w-full h-full" />
        </ParallaxLayer>

        <div className="max-w-5xl mx-auto w-full relative z-10">
          {/* Diversity Stats */}
          <ScrollReveal direction="up" duration={0.9} distance={60}>
            <h3 className="font-lora italic font-semibold text-3xl sm:text-4xl text-marine-green tracking-[-0.02em] mb-10">
              Diversity &amp; retention impact
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-6">
            {diversityStats.map((stat, i) => (
              <ScrollReveal key={i} direction="up" delay={0.1 + i * 0.15} duration={1} distance={70}>
                <div className="bg-white rounded-3xl p-6 sm:p-8 text-center shadow-sm border border-gardenia">
                  <p className="font-work-sans font-bold text-4xl sm:text-5xl md:text-6xl tabular-nums text-marine-green leading-none">
                    {stat.value}
                  </p>
                  <p className="text-sm text-charcoal/60 mt-4 leading-snug">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal direction="up" delay={0.3} duration={0.8}>
            <p className="text-charcoal/50 text-sm mb-16">
              {diversityFooter}
            </p>
          </ScrollReveal>

          {/* TFL Projections */}
          {tflProjection.label && (
            <ScrollReveal direction="up" delay={0.1} duration={0.9} distance={60}>
              <p className="text-sm uppercase tracking-[0.2em] text-coral font-semibold mb-3">
                {tflProjection.label}
              </p>
            </ScrollReveal>
          )}
          <ScrollReveal direction="up" delay={0.2} duration={0.9} distance={50}>
            <p className="text-lg text-charcoal/70 max-w-3xl mb-10 leading-relaxed">
              {tflProjection.body}
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {tflProjectionStats.map((stat, i) => (
              <ScrollReveal key={i} direction="up" delay={0.25 + i * 0.15} duration={1.2} distance={80}>
                <div className="bg-marine-green rounded-3xl p-6 sm:p-8 text-center text-white">
                  <p className="font-work-sans font-bold text-4xl sm:text-5xl md:text-6xl tabular-nums text-sunflower leading-none">
                    {stat.value}
                  </p>
                  <p className="text-sm text-white/80 mt-4 leading-snug">
                    {stat.label}
                  </p>
                  {stat.sublabel && (
                    <p className="text-xs text-white/50 mt-1">
                      {stat.sublabel}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 8 - TESTIMONIALS (Gardenia)
          ═══════════════════════════════════════════════════════ */}
      <section className="snap-start min-h-screen relative flex flex-col justify-center bg-gardenia text-charcoal px-6 sm:px-12 lg:px-20 py-24 overflow-hidden">
        <ParallaxLayer containerRef={scrollRef} speed={0.15} className="hidden md:block absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-coral/5 blur-3xl">
          <div className="w-full h-full" />
        </ParallaxLayer>

        <div className="max-w-4xl mx-auto w-full relative z-10">
          <ScrollReveal direction="up" duration={0.9} distance={60}>
            <h2 className="font-lora italic font-semibold text-5xl sm:text-6xl md:text-7xl text-marine-green leading-tight tracking-[-0.02em] text-center mb-16">
              {testimonialSection.headline}
            </h2>
          </ScrollReveal>

          <div className="space-y-12">
            {testimonials.map((testimonial, i) => (
              <ScrollReveal key={i} direction="up" delay={0.2 + i * 0.2} duration={1.2} distance={80}>
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 sm:p-14 shadow-sm border border-white">
                  <svg className="w-12 h-12 text-coral/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                  </svg>
                  <blockquote className="text-xl sm:text-2xl text-charcoal/80 leading-relaxed font-lora italic">
                    {testimonial.quote}
                  </blockquote>
                  <cite className="block mt-8 text-sm text-charcoal/50 not-italic font-work-sans uppercase tracking-wide">
                    — {testimonial.attribution}
                  </cite>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 9 - CTA + FOOTER (Coral)
          ═══════════════════════════════════════════════════════ */}
      <section className="snap-start min-h-screen relative flex flex-col justify-center bg-coral text-white overflow-hidden">
        <BackgroundBeams className="opacity-20" />
        <ParallaxLayer containerRef={scrollRef} speed={0.3} className="hidden md:block absolute top-0 -left-20 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl">
          <div className="w-full h-full" />
        </ParallaxLayer>

        <div className="relative z-10 max-w-4xl mx-auto w-full text-center px-6 sm:px-12 py-24">
          <ScrollReveal direction="up" duration={1} distance={80}>
            <h2 className="font-lora italic font-semibold text-5xl sm:text-6xl md:text-7xl text-white leading-tight tracking-[-0.02em]">
              {ctaSection.headline}
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2} duration={0.9} distance={50}>
            <p className="mt-8 text-xl text-white/80">
              {ctaSection.subheadline}
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3} duration={0.9} distance={50}>
            <ul className="mt-8 space-y-4 text-left max-w-lg mx-auto">
              {ctaSection.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/90">
                  <svg className="w-5 h-5 mt-0.5 text-sunflower flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="text-lg">{typeof item === "string" ? item : item.text}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.5} duration={1} distance={60}>
            <div className="mt-12">
              <CTAButton variant="white" size="lg" />
            </div>
          </ScrollReveal>
        </div>

        {/* Footer */}
        <footer className="relative z-10 border-t border-white/20 px-6 sm:px-12 py-6 flex items-center justify-between mt-auto">
          <LogoPair kareheroVariant="white" size="sm" className="text-white" />
          <span className="text-xs text-white/40">
            {footer.copyright}
          </span>
        </footer>
      </section>
    </div>
  );
}
