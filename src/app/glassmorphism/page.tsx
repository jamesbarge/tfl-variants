"use client";

import { MovingBorder } from "@/components/aceternity/moving-border";
import { FadeIn } from "@/components/motion/fade-in";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { CTAButton } from "@/components/shared/cta-button";
import { LogoPair } from "@/components/shared/logo-pair";
import { StatCounter } from "@/components/shared/stat-counter";

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
import { caseStudyImage } from "@/lib/content/images";

import {
  Clock,
  Users,
  MapPin,
  TrendingDown,
  User,
  ClipboardCheck,
  PoundSterling,
  ShieldCheck,
  Building,
  BarChart3,
  CheckCircle,
  Quote,
} from "lucide-react";

const challengeIcons: Record<string, React.ReactNode> = {
  clock: <Clock className="w-6 h-6" />,
  users: <Users className="w-6 h-6" />,
  "map-pin": <MapPin className="w-6 h-6" />,
  "trending-down": <TrendingDown className="w-6 h-6" />,
};

const serviceIcons: Record<string, React.ReactNode> = {
  user: <User className="w-5 h-5" />,
  "clipboard-check": <ClipboardCheck className="w-5 h-5" />,
  "pound-sterling": <PoundSterling className="w-5 h-5" />,
  "shield-check": <ShieldCheck className="w-5 h-5" />,
  building: <Building className="w-5 h-5" />,
  "bar-chart": <BarChart3 className="w-5 h-5" />,
};

/* Reusable glass card styles */
const glassLight =
  "bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl rounded-2xl";
const glassDark =
  "bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl";
const glassAccent =
  "bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl rounded-2xl";

export default function GlassmorphismPage() {
  return (
    <div className="relative min-h-screen bg-floral-white overflow-hidden">
      {/* ─── HEADER (Glass Nav) ─── */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <LogoPair kareheroVariant="coral" size="sm" />
          <CTAButton variant="coral" size="md" />
        </div>
      </header>

      {/* ═══════════════════════════════════════════
          SECTION 1 - HERO
      ═══════════════════════════════════════════ */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 20% 20%, rgba(234, 100, 48, 0.25) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(0, 67, 61, 0.4) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(210, 224, 163, 0.2) 0%, transparent 60%), #00433D",
        }}
      >
        {/* Floating decorative orbs */}
        <div className="absolute top-20 left-10 w-40 h-40 md:w-72 md:h-72 rounded-full bg-coral/20 blur-3xl z-0" />
        <div className="absolute bottom-20 right-10 w-56 h-56 md:w-96 md:h-96 rounded-full bg-lime-green/15 blur-3xl z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[600px] md:h-[600px] rounded-full bg-sunflower/10 blur-3xl z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <div className={`${glassAccent} p-10 md:p-14`}>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-lora italic font-semibold text-white leading-tight mb-6">
                {hero.headline}
              </h1>
              <p className="text-lg md:text-xl text-white/75 font-work-sans mb-10 max-w-2xl mx-auto leading-relaxed">
                {hero.subheadline}
              </p>
              <MovingBorder
                containerClassName="inline-block"
                className="px-8 py-4 bg-coral"
                borderColor="#FFDD6C"
                duration={3}
              >
                <CTAButton
                  variant="coral"
                  size="lg"
                  className="shadow-none"
                />
              </MovingBorder>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 - THE PROBLEM
      ═══════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden bg-floral-white">
        {/* Subtle gradient mesh */}
        <div className="absolute inset-0 opacity-40" style={{
          background:
            "radial-gradient(ellipse at 10% 40%, rgba(234, 100, 48, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 90% 60%, rgba(0, 67, 61, 0.08) 0%, transparent 50%)",
        }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-coral mb-3 font-work-sans">
                The Challenge
              </p>
              <h2 className="text-3xl md:text-4xl font-lora italic font-semibold text-marine-green mb-4">
                {problem.headline}
              </h2>
              <p className="text-charcoal/70 font-work-sans max-w-2xl mx-auto leading-relaxed">
                {problem.subheadline}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {ukWorkforceStats.map((stat, i) => (
                <div key={i} className={`${glassLight} p-6`}>
                  <StatCounter
                    stat={stat}
                    valueClassName="text-coral text-4xl"
                    labelClassName="text-charcoal/70 text-sm"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 - YOUR EMPLOYEES
      ═══════════════════════════════════════════ */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(210, 224, 163, 0.4) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(234, 100, 48, 0.15) 0%, transparent 50%), linear-gradient(135deg, #00433D 0%, #00433D 50%, #004D46 100%)",
        }}
      >
        {/* Floating orbs */}
        <div className="absolute top-10 right-20 w-40 h-40 md:w-64 md:h-64 rounded-full bg-sunflower/10 blur-3xl z-0" />
        <div className="absolute bottom-10 left-10 w-32 h-32 md:w-48 md:h-48 rounded-full bg-coral/10 blur-3xl z-0" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-lime-green/70 mb-3 font-work-sans">
                Your Workforce
              </p>
              <h2 className="text-3xl md:text-4xl font-lora italic font-semibold text-white mb-4">
                {employees.headline}
              </h2>
              <p className="text-white/60 font-work-sans max-w-2xl mx-auto leading-relaxed">
                {employees.subheadline}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              {challenges.map((challenge, i) => (
                <div key={i} className={`${glassDark} p-6`}>
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-white/10 text-lime-green shrink-0">
                      {challengeIcons[challenge.icon]}
                    </div>
                    <div>
                      <h3 className="text-lg font-lora italic font-semibold text-white mb-2">
                        {challenge.title}
                      </h3>
                      <p className="text-sm text-white/60 font-work-sans leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Emotional toll - accent glass card */}
          <ScrollReveal delay={0.2}>
            <div className="bg-coral/20 backdrop-blur-xl border border-coral/30 shadow-xl rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <p className="font-lora italic font-semibold text-6xl md:text-7xl text-sunflower shrink-0">
                  {emotionalToll.statValue}
                </p>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-2 font-work-sans">
                    {emotionalToll.label}
                  </p>
                  <p className="text-white/80 font-work-sans text-lg leading-relaxed">
                    {emotionalToll.text}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 - THE GAP
      ═══════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden bg-floral-white">
        <div className="absolute inset-0 opacity-30" style={{
          background:
            "radial-gradient(ellipse at 20% 30%, rgba(255, 221, 109, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(0, 67, 61, 0.1) 0%, transparent 50%)",
        }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-coral mb-3 font-work-sans">
                The Gap
              </p>
              <h2 className="text-2xl md:text-3xl font-lora italic font-semibold text-marine-green mb-4 max-w-3xl mx-auto leading-snug">
                {gap.headline}
              </h2>
              <p className="text-charcoal/70 font-work-sans max-w-2xl mx-auto leading-relaxed">
                {gap.subheadline}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {gapStats.map((stat, i) => (
                <div key={i} className={`${glassLight} p-6`}>
                  <StatCounter
                    stat={stat}
                    valueClassName="text-coral text-4xl"
                    labelClassName="text-charcoal/70 text-xs"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-marine-green/5 backdrop-blur-sm border border-marine-green/10 rounded-2xl p-8 max-w-3xl mx-auto">
              <p className="font-lora italic font-semibold text-lg text-marine-green mb-3">
                {gapInsight.headline}
              </p>
              <p className="text-charcoal/70 font-work-sans leading-relaxed">
                {gapInsight.body}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 - SOLUTION / SERVICES
      ═══════════════════════════════════════════ */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 40% 20%, rgba(210, 224, 163, 0.25) 0%, transparent 50%), radial-gradient(ellipse at 60% 80%, rgba(255, 221, 109, 0.15) 0%, transparent 50%), linear-gradient(180deg, #F0EAE0 0%, #FFFCF5 100%)",
        }}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-coral mb-3 font-work-sans">
                {solution.label}
              </p>
              <h2 className="text-3xl md:text-5xl font-lora italic font-semibold text-marine-green mb-4">
                {solution.headline}
              </h2>
              <p className="text-charcoal/70 font-work-sans max-w-2xl mx-auto leading-relaxed">
                {solution.subheadline}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {services.map((service, i) => (
                <div
                  key={i}
                  className={`${glassLight} p-6 hover:bg-white/80 transition-colors`}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-coral/10 text-coral shrink-0">
                      {serviceIcons[service.icon]}
                    </div>
                    <div>
                      <h3 className="text-base font-lora italic font-semibold text-marine-green mb-1">
                        {service.title}
                      </h3>
                      <p className="text-sm text-charcoal/60 font-work-sans leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-center text-charcoal/50 font-work-sans italic text-sm">
              {solutionFooter}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6 - CASE STUDY (BA)
      ═══════════════════════════════════════════ */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 25% 25%, rgba(234, 100, 48, 0.2) 0%, transparent 50%), radial-gradient(ellipse at 75% 75%, rgba(210, 224, 163, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(255, 221, 109, 0.1) 0%, transparent 40%), #00433D",
        }}
      >
        {/* Floating orbs */}
        <div className="absolute top-10 left-1/4 w-48 h-48 md:w-80 md:h-80 rounded-full bg-coral/10 blur-3xl z-0" />
        <div className="absolute bottom-10 right-1/4 w-40 h-40 md:w-64 md:h-64 rounded-full bg-sunflower/10 blur-3xl z-0" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-coral mb-3 font-work-sans">
                {caseStudy.label}
              </p>
              <h2 className="text-3xl md:text-4xl font-lora italic font-semibold text-white mb-4">
                {caseStudy.headline}
              </h2>
              <p className="text-white/60 font-work-sans max-w-3xl mx-auto leading-relaxed">
                {caseStudy.subheadline}
              </p>
            </div>
          </ScrollReveal>

          {/* BA challenge stats */}
          <ScrollReveal delay={0.1}>
            <p className="text-xs uppercase tracking-widest text-white/40 mb-4 font-work-sans text-center">
              Before KareHero
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {baChallengeStats.map((stat, i) => (
                <div
                  key={i}
                  className={`${glassDark} p-6 ${
                    i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <StatCounter
                    stat={stat}
                    valueClassName="text-sunflower text-4xl"
                    labelClassName="text-white/60 text-sm"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* BA result stats */}
          <ScrollReveal delay={0.15}>
            <p className="text-xs uppercase tracking-widest text-lime-green/60 mb-4 font-work-sans text-center">
              After KareHero
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {baResultStats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/15 backdrop-blur-xl border border-lime-green/20 shadow-xl rounded-2xl p-6"
                >
                  <StatCounter
                    stat={stat}
                    valueClassName="text-lime-green text-5xl"
                    labelClassName="text-white/70"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Diversity stats */}
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {diversityStats.map((stat, i) => (
                <div key={i} className={`${glassDark} p-5`}>
                  <StatCounter
                    stat={stat}
                    valueClassName="text-sunflower text-3xl"
                    labelClassName="text-white/50 text-xs"
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-white/40 font-work-sans italic text-sm">
              {diversityFooter}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7 - TFL PROJECTIONS
      ═══════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden bg-floral-white">
        <div className="absolute inset-0 opacity-40" style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(234, 100, 48, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 30%, rgba(0, 67, 61, 0.1) 0%, transparent 50%)",
        }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-4">
              <p className="text-xs uppercase tracking-widest text-coral mb-3 font-work-sans">
                {tflProjection.label}
              </p>
              <p className="text-charcoal/70 font-work-sans max-w-3xl mx-auto leading-relaxed text-lg">
                {tflProjection.body}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
              {tflProjectionStats.map((stat, i) => (
                <MovingBorder
                  key={i}
                  containerClassName="w-full"
                  className="p-8 bg-white"
                  borderColor={
                    i === 0
                      ? "#EA6430"
                      : i === 1
                      ? "#00433D"
                      : "#FFDD6C"
                  }
                  duration={5}
                >
                  <StatCounter
                    stat={stat}
                    valueClassName="text-marine-green text-5xl"
                    labelClassName="text-charcoal/70"
                  />
                </MovingBorder>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          EXECUTIVE PERSPECTIVE
      ═══════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden" style={{
        background:
          "radial-gradient(ellipse at 30% 40%, rgba(255, 221, 109, 0.2) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(234, 100, 48, 0.12) 0%, transparent 50%), linear-gradient(135deg, #F0EAE0 0%, #FFFCF5 100%)",
      }}>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-widest text-coral mb-3 font-work-sans text-center">
              Executive Perspective
            </p>
            <h2 className="text-2xl md:text-3xl font-lora italic font-semibold text-marine-green text-center mb-10">
              From the people who&apos;ve seen the data
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {executiveQuotes.map((eq, i) => (
                <div key={i} className={`${glassLight} p-8`}>
                  {eq.context && (
                    <p className="text-xs uppercase tracking-wide text-charcoal/40 font-work-sans mb-3">
                      {eq.context}
                    </p>
                  )}
                  <Quote className="w-8 h-8 text-coral/30 mb-4" />
                  <p className="text-charcoal/80 font-work-sans leading-relaxed mb-6">
                    &ldquo;{eq.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-work-sans font-semibold text-sm text-coral">
                      {eq.attribution}
                    </p>
                    <p className="text-xs text-charcoal/50 font-work-sans">
                      {eq.role}, {eq.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 8 - TESTIMONIALS
      ═══════════════════════════════════════════ */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(210, 224, 163, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(240, 234, 224, 0.5) 0%, transparent 50%), linear-gradient(135deg, #F0EAE0 0%, #FFFCF5 100%)",
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-lora italic font-semibold text-marine-green text-center mb-12">
              {testimonialSection.headline}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, i) => (
                <div key={i} className={`${glassLight} p-8`}>
                  <Quote className="w-8 h-8 text-coral/30 mb-4" />
                  <p className="text-charcoal/80 font-work-sans leading-relaxed mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <p className="text-sm text-charcoal/50 font-work-sans">
                    — {testimonial.attribution}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 9 - CTA + FOOTER
      ═══════════════════════════════════════════ */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 30% 30%, rgba(234, 100, 48, 0.25) 0%, transparent 50%), radial-gradient(ellipse at 70% 70%, rgba(210, 224, 163, 0.15) 0%, transparent 50%), #00433D",
        }}
      >
        {/* Floating orbs */}
        <div className="absolute top-20 right-20 w-40 h-40 md:w-72 md:h-72 rounded-full bg-sunflower/10 blur-3xl z-0" />
        <div className="absolute bottom-10 left-10 w-32 h-32 md:w-56 md:h-56 rounded-full bg-coral/10 blur-3xl z-0" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <div className={`${glassDark} p-10 md:p-14`}>
              <h2 className="text-2xl md:text-4xl font-lora italic font-semibold text-white mb-4">
                {ctaSection.headline}
              </h2>
              <p className="text-white/60 font-work-sans mb-8">
                {ctaSection.subheadline}
              </p>
              <ul className="space-y-3 mb-10 text-left max-w-md mx-auto">
                {ctaSection.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-white/80 font-work-sans text-sm"
                  >
                    <CheckCircle className="w-5 h-5 text-lime-green shrink-0 mt-0.5" />
                    <span>{typeof item === "string" ? item : item.text}</span>
                  </li>
                ))}
              </ul>
              <MovingBorder
                containerClassName="inline-block"
                className="px-8 py-4 bg-coral"
                borderColor="#FFDD6C"
                duration={3}
              >
                <CTAButton
                  variant="coral"
                  size="lg"
                  className="shadow-none"
                />
              </MovingBorder>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-charcoal/95 backdrop-blur-sm text-white/50 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <LogoPair kareheroVariant="white" size="sm" className="text-white" />
          <p className="text-xs font-work-sans">{footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
