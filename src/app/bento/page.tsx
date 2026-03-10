"use client";

import { BentoGrid, BentoGridItem } from "@/components/aceternity/bento-grid";
import { Spotlight } from "@/components/aceternity/spotlight";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { FadeIn } from "@/components/motion/fade-in";
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
  ArrowRight,
} from "lucide-react";

const challengeIcons: Record<string, React.ReactNode> = {
  clock: <Clock className="w-6 h-6" />,
  users: <Users className="w-6 h-6" />,
  "map-pin": <MapPin className="w-6 h-6" />,
  "trending-down": <TrendingDown className="w-6 h-6" />,
};

const serviceIcons: Record<string, React.ReactNode> = {
  user: <User className="w-6 h-6" />,
  "clipboard-check": <ClipboardCheck className="w-6 h-6" />,
  "pound-sterling": <PoundSterling className="w-6 h-6" />,
  "shield-check": <ShieldCheck className="w-6 h-6" />,
  building: <Building className="w-6 h-6" />,
  "bar-chart": <BarChart3 className="w-6 h-6" />,
};

export default function BentoPage() {
  return (
    <div className="min-h-screen bg-gardenia">
      {/* ─── Header ─── */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gardenia">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <LogoPair kareheroVariant="coral" size="sm" />
          <CTAButton variant="coral" size="md" />
        </div>
      </header>

      <main className="px-4 py-6 space-y-4">
        {/* ═══════════════════════════════════════════
            SECTION 1 - HERO (full-width cell)
        ═══════════════════════════════════════════ */}
        <section aria-label="Hero">
        <FadeIn>
          <BentoGrid>
            <BentoGridItem
              colSpan={3}
              className="bg-marine-green text-white p-10 md:p-14 border-none"
            >
              <Spotlight
                className="rounded-2xl"
                spotlightColor="rgba(210, 224, 163, 0.12)"
              >
                <div className="max-w-3xl">
                  <h1 className="text-3xl md:text-5xl font-lora italic font-semibold leading-tight mb-6">
                    {hero.headline}
                  </h1>
                  <p className="text-lg md:text-xl text-white/80 font-work-sans mb-8 leading-relaxed max-w-2xl">
                    {hero.subheadline}
                  </p>
                  <CTAButton variant="white" size="lg" />
                </div>
              </Spotlight>
            </BentoGridItem>
          </BentoGrid>
        </FadeIn>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 2 - THE PROBLEM + UK WORKFORCE STATS
        ═══════════════════════════════════════════ */}
        <section aria-label="The UK Care Crisis">
        <ScrollReveal>
          <BentoGrid>
            {/* Problem intro cell */}
            <BentoGridItem
              colSpan={2}
              className="bg-coral text-white p-8 border-none"
            >
              <p className="text-xs uppercase tracking-widest text-white/60 mb-3 font-work-sans">
                The Challenge
              </p>
              <h2 className="text-2xl md:text-3xl font-lora italic font-semibold mb-4">
                {problem.headline}
              </h2>
              <p className="text-white/80 font-work-sans leading-relaxed">
                {problem.subheadline}
              </p>
            </BentoGridItem>

            {/* Stat cells - first stat big */}
            <BentoGridItem className="bg-white p-6">
              <StatCounter
                stat={ukWorkforceStats[0]}
                valueClassName="text-coral text-5xl"
                labelClassName="text-charcoal/70"
              />
            </BentoGridItem>
          </BentoGrid>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <BentoGrid>
            {ukWorkforceStats.slice(1, 4).map((stat, i) => (
              <BentoGridItem
                key={i}
                className={
                  i === 0
                    ? "bg-sunflower/40 p-6 border-none"
                    : i === 1
                    ? "bg-lime-green/40 p-6 border-none"
                    : "bg-gardenia p-6"
                }
              >
                <StatCounter
                  stat={stat}
                  valueClassName="text-marine-green text-4xl"
                  labelClassName="text-charcoal/70"
                />
              </BentoGridItem>
            ))}
          </BentoGrid>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <BentoGrid>
            <BentoGridItem className="bg-marine-green text-white p-6 border-none">
              <StatCounter
                stat={ukWorkforceStats[4]}
                valueClassName="text-sunflower text-4xl"
                labelClassName="text-white/70"
              />
            </BentoGridItem>
            <BentoGridItem
              colSpan={2}
              className="bg-charcoal text-white p-8 border-none flex items-center"
            >
              <div>
                <p className="font-lora italic font-semibold text-4xl text-sunflower mb-2">
                  {ukWorkforceStats[5].value}
                </p>
                <p className="text-white/70 font-work-sans">
                  {ukWorkforceStats[5].label}
                </p>
              </div>
            </BentoGridItem>
          </BentoGrid>
        </ScrollReveal>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 3 - YOUR EMPLOYEES / CHALLENGES
        ═══════════════════════════════════════════ */}
        <section aria-label="The Challenge for TFL Employees">
        <ScrollReveal>
          <BentoGrid>
            <BentoGridItem
              colSpan={3}
              className="bg-floral-white p-8 border-gardenia"
            >
              <p className="text-xs uppercase tracking-widest text-coral mb-3 font-work-sans">
                Your Workforce
              </p>
              <h2 className="text-2xl md:text-3xl font-lora italic font-semibold text-marine-green mb-3">
                {employees.headline}
              </h2>
              <p className="text-charcoal/70 font-work-sans max-w-2xl">
                {employees.subheadline}
              </p>
            </BentoGridItem>
          </BentoGrid>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <BentoGrid>
            {challenges.map((challenge, i) => {
              const bgColors = [
                "bg-white",
                "bg-gardenia",
                "bg-lime-green/30 border-none",
                "bg-coral/10 border-none",
              ];
              const isDouble = i === 0 || i === 3;
              return (
                <BentoGridItem
                  key={i}
                  colSpan={isDouble ? 2 : 1}
                  className={`${bgColors[i]} p-6`}
                >
                  <Spotlight className="rounded-2xl">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-marine-green/10 text-marine-green shrink-0">
                        {challengeIcons[challenge.icon]}
                      </div>
                      <div>
                        <h3 className="text-lg font-lora italic font-semibold text-marine-green mb-2">
                          {challenge.title}
                        </h3>
                        <p className="text-sm text-charcoal/70 font-work-sans leading-relaxed">
                          {challenge.description}
                        </p>
                      </div>
                    </div>
                  </Spotlight>
                </BentoGridItem>
              );
            })}
          </BentoGrid>
        </ScrollReveal>

        {/* Emotional toll cell */}
        <ScrollReveal delay={0.15}>
          <BentoGrid>
            <BentoGridItem
              colSpan={3}
              className="bg-coral text-white p-8 border-none"
            >
              <Spotlight
                className="rounded-2xl"
                spotlightColor="rgba(255, 255, 255, 0.08)"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <p className="font-lora italic font-semibold text-6xl md:text-7xl shrink-0">
                    {emotionalToll.statValue}
                  </p>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/60 mb-2 font-work-sans">
                      {emotionalToll.label}
                    </p>
                    <p className="text-white/90 font-work-sans text-lg leading-relaxed">
                      {emotionalToll.text}
                    </p>
                  </div>
                </div>
              </Spotlight>
            </BentoGridItem>
          </BentoGrid>
        </ScrollReveal>
        </section>

        {/* ═══════════════════════════════════════════
            SECTION 4 - THE GAP
        ═══════════════════════════════════════════ */}
        <section aria-label="The Support Gap">
        <ScrollReveal>
          <BentoGrid>
            <BentoGridItem
              colSpan={2}
              rowSpan={2}
              className="bg-marine-green text-white p-8 border-none"
            >
              <p className="text-xs uppercase tracking-widest text-lime-green/70 mb-3 font-work-sans">
                The Gap
              </p>
              <h2 className="text-2xl md:text-3xl font-lora italic font-semibold mb-4 leading-snug">
                {gap.headline}
              </h2>
              <p className="text-white/70 font-work-sans leading-relaxed mb-6">
                {gap.subheadline}
              </p>
              <div className="bg-white/10 rounded-xl p-5">
                <p className="font-lora italic font-semibold text-lg text-sunflower mb-3">
                  {gapInsight.headline}
                </p>
                <p className="text-white/70 font-work-sans text-sm leading-relaxed">
                  {gapInsight.body}
                </p>
              </div>
            </BentoGridItem>

            {gapStats.map((stat, i) => {
              const bgColors = [
                "bg-sunflower/30 border-none",
                "bg-coral/10 border-none",
                "bg-gardenia",
              ];
              return (
                <BentoGridItem key={i} className={`${bgColors[i]} p-6`}>
                  <StatCounter
                    stat={stat}
                    valueClassName="text-marine-green text-4xl"
                    labelClassName="text-charcoal/70 text-xs"
                  />
                </BentoGridItem>
              );
            })}
          </BentoGrid>
        </ScrollReveal>

        </section>

        {/* ═══════════════════════════════════════════
            SECTION 5 - SOLUTION / SERVICES
        ═══════════════════════════════════════════ */}
        <section aria-label="KareHero Solution">
        <ScrollReveal>
          <BentoGrid>
            <BentoGridItem
              colSpan={3}
              className="bg-lime-green/30 p-8 border-none"
            >
              <p className="text-xs uppercase tracking-widest text-marine-green/60 mb-3 font-work-sans">
                {solution.label}
              </p>
              <h2 className="text-3xl md:text-4xl font-lora italic font-semibold text-marine-green mb-3">
                {solution.headline}
              </h2>
              <p className="text-charcoal/70 font-work-sans max-w-2xl">
                {solution.subheadline}
              </p>
            </BentoGridItem>
          </BentoGrid>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <BentoGrid className="gap-3">
            {services.map((service, i) => {
              const bgColors = [
                "bg-white",
                "bg-gardenia",
                "bg-sunflower/25 border-none",
                "bg-lime-green/25 border-none",
                "bg-gardenia",
                "bg-white",
              ];
              const isWide = i === 0 || i === 5;
              return (
                <BentoGridItem
                  key={i}
                  colSpan={isWide ? 2 : 1}
                  className={`${bgColors[i]} p-5`}
                >
                  <Spotlight className="rounded-2xl">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-coral/10 text-coral shrink-0">
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
                  </Spotlight>
                </BentoGridItem>
              );
            })}
          </BentoGrid>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <BentoGrid>
            <BentoGridItem
              colSpan={3}
              className="bg-marine-green/5 p-5 border-none text-center"
            >
              <p className="text-charcoal/60 font-work-sans italic">
                {solutionFooter}
              </p>
            </BentoGridItem>
          </BentoGrid>
        </ScrollReveal>

        </section>

        {/* ═══════════════════════════════════════════
            SECTION 6 - CASE STUDY (BA)
        ═══════════════════════════════════════════ */}
        <section aria-label="Proven Results — British Airways Case Study">
        <ScrollReveal>
          <BentoGrid>
            <BentoGridItem
              colSpan={3}
              className="bg-charcoal text-white p-8 border-none"
            >
              <p className="text-xs uppercase tracking-widest text-coral mb-3 font-work-sans">
                {caseStudy.label}
              </p>
              <h2 className="text-2xl md:text-3xl font-lora italic font-semibold mb-3">
                {caseStudy.headline}
              </h2>
              <p className="text-white/70 font-work-sans max-w-3xl leading-relaxed">
                {caseStudy.subheadline}
              </p>
            </BentoGridItem>
          </BentoGrid>
        </ScrollReveal>

        {/* BA challenge stats */}
        <ScrollReveal delay={0.1}>
          <BentoGrid className="gap-3">
            {baChallengeStats.map((stat, i) => {
              const bgColors = [
                "bg-coral text-white border-none",
                "bg-white",
                "bg-gardenia",
                "bg-sunflower/30 border-none",
                "bg-marine-green text-white border-none",
              ];
              const isWide = i === 0 || i === 4;
              return (
                <BentoGridItem
                  key={i}
                  colSpan={isWide ? 2 : 1}
                  className={`${bgColors[i]} p-6`}
                >
                  <Spotlight className="rounded-2xl">
                    <StatCounter
                      stat={stat}
                      valueClassName={
                        bgColors[i].includes("text-white")
                          ? "text-white text-4xl"
                          : "text-coral text-4xl"
                      }
                      labelClassName={
                        bgColors[i].includes("text-white")
                          ? "text-white/70"
                          : "text-charcoal/70"
                      }
                    />
                  </Spotlight>
                </BentoGridItem>
              );
            })}
          </BentoGrid>
        </ScrollReveal>

        {/* BA result stats - hero numbers */}
        <ScrollReveal delay={0.15}>
          <BentoGrid className="gap-3">
            {baResultStats.map((stat, i) => {
              const bgColors = [
                "bg-marine-green text-white border-none",
                "bg-coral text-white border-none",
                "bg-lime-green/40 border-none",
                "bg-gardenia",
              ];
              const isWide = i === 0;
              return (
                <BentoGridItem
                  key={i}
                  colSpan={isWide ? 2 : 1}
                  className={`${bgColors[i]} p-6`}
                >
                  <StatCounter
                    stat={stat}
                    valueClassName={
                      bgColors[i].includes("text-white")
                        ? "text-sunflower text-5xl"
                        : "text-marine-green text-4xl"
                    }
                    labelClassName={
                      bgColors[i].includes("text-white")
                        ? "text-white/70"
                        : "text-charcoal/70"
                    }
                  />
                </BentoGridItem>
              );
            })}
          </BentoGrid>
        </ScrollReveal>

        {/* Diversity stats */}
        <ScrollReveal delay={0.2}>
          <BentoGrid>
            {diversityStats.map((stat, i) => {
              const bgColors = [
                "bg-lavender/20 border-none",
                "bg-cherry/10 border-none",
                "bg-warm-orange/15 border-none",
              ];
              return (
                <BentoGridItem key={i} className={`${bgColors[i]} p-6`}>
                  <StatCounter
                    stat={stat}
                    valueClassName="text-marine-green text-4xl"
                    labelClassName="text-charcoal/70 text-xs"
                  />
                </BentoGridItem>
              );
            })}
          </BentoGrid>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <BentoGrid>
            <BentoGridItem
              colSpan={3}
              className="bg-marine-green/5 p-4 border-none text-center"
            >
              <p className="text-charcoal/60 font-work-sans italic text-sm">
                {diversityFooter}
              </p>
            </BentoGridItem>
          </BentoGrid>
        </ScrollReveal>

        {/* ═══════════════════════════════════════════
            SECTION 7 - TFL PROJECTIONS
        ═══════════════════════════════════════════ */}
        <ScrollReveal>
          <BentoGrid>
            <BentoGridItem
              colSpan={3}
              className="bg-coral text-white p-8 border-none"
            >
              <p className="text-xs uppercase tracking-widest text-white/60 mb-3 font-work-sans">
                {tflProjection.label}
              </p>
              <p className="text-white/80 font-work-sans text-lg max-w-3xl leading-relaxed">
                {tflProjection.body}
              </p>
            </BentoGridItem>
          </BentoGrid>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <BentoGrid>
            {tflProjectionStats.map((stat, i) => {
              const bgColors = [
                "bg-marine-green text-white border-none",
                "bg-charcoal text-white border-none",
                "bg-sunflower/40 border-none",
              ];
              return (
                <BentoGridItem key={i} className={`${bgColors[i]} p-6`}>
                  <Spotlight
                    className="rounded-2xl"
                    spotlightColor={
                      i < 2
                        ? "rgba(255, 221, 109, 0.12)"
                        : "rgba(234, 100, 48, 0.08)"
                    }
                  >
                    <StatCounter
                      stat={stat}
                      valueClassName={
                        i < 2
                          ? "text-sunflower text-5xl"
                          : "text-marine-green text-5xl"
                      }
                      labelClassName={
                        i < 2 ? "text-white/70" : "text-charcoal/70"
                      }
                    />
                  </Spotlight>
                </BentoGridItem>
              );
            })}
          </BentoGrid>
        </ScrollReveal>

        {/* ═══════════════════════════════════════════
            EXECUTIVE PERSPECTIVE
        ═══════════════════════════════════════════ */}
        <ScrollReveal>
          <BentoGrid>
            <BentoGridItem
              colSpan={3}
              className="bg-sunflower/30 p-6 border-none text-center"
            >
              <p className="text-xs uppercase tracking-widest text-marine-green/60 mb-2 font-work-sans">
                Executive Perspective
              </p>
              <h2 className="text-2xl md:text-3xl font-lora italic font-semibold text-marine-green">
                From the people who&apos;ve seen the data
              </h2>
            </BentoGridItem>
          </BentoGrid>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <BentoGrid>
            {executiveQuotes.map((eq, i) => {
              const isFirst = i === 0;
              return (
                <BentoGridItem
                  key={i}
                  colSpan={isFirst ? 2 : 1}
                  className={
                    isFirst
                      ? "bg-marine-green text-white p-8 border-none"
                      : "bg-gardenia p-8"
                  }
                >
                  <Spotlight className="rounded-2xl">
                    {eq.context && (
                      <p className={`text-xs uppercase tracking-wide mb-3 font-work-sans ${isFirst ? "text-white/40" : "text-charcoal/40"}`}>
                        {eq.context}
                      </p>
                    )}
                    <Quote className={`w-8 h-8 mb-4 ${isFirst ? "text-lime-green/30" : "text-coral/30"}`} />
                    <p className={`font-work-sans leading-relaxed mb-4 ${isFirst ? "text-white/90" : "text-charcoal/80"}`}>
                      &ldquo;{eq.quote}&rdquo;
                    </p>
                    <div>
                      <p className={`font-work-sans font-semibold text-sm ${isFirst ? "text-lime-green" : "text-coral"}`}>
                        {eq.attribution}
                      </p>
                      <p className={`text-xs font-work-sans ${isFirst ? "text-white/50" : "text-charcoal/50"}`}>
                        {eq.role}, {eq.company}
                      </p>
                    </div>
                  </Spotlight>
                </BentoGridItem>
              );
            })}
          </BentoGrid>
        </ScrollReveal>

        </section>

        {/* ═══════════════════════════════════════════
            SECTION 8 - TESTIMONIALS
        ═══════════════════════════════════════════ */}
        <section aria-label="Testimonials">
        <ScrollReveal>
          <BentoGrid>
            <BentoGridItem
              colSpan={3}
              className="bg-floral-white p-6 border-gardenia text-center"
            >
              <h2 className="text-2xl md:text-3xl font-lora italic font-semibold text-marine-green">
                {testimonialSection.headline}
              </h2>
            </BentoGridItem>
          </BentoGrid>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <BentoGrid>
            {testimonials.map((testimonial, i) => {
              const isFirst = i === 0;
              return (
                <BentoGridItem
                  key={i}
                  colSpan={isFirst ? 2 : 1}
                  className={
                    isFirst
                      ? "bg-white p-8 border-gardenia"
                      : "bg-lime-green/20 p-8 border-none"
                  }
                >
                  <Quote className="w-8 h-8 text-coral/30 mb-4" />
                  <p className="text-charcoal/80 font-work-sans leading-relaxed mb-4 text-sm">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <p className="text-xs text-charcoal/50 font-work-sans">
                    — {testimonial.attribution}
                  </p>
                </BentoGridItem>
              );
            })}
          </BentoGrid>
        </ScrollReveal>

        </section>

        {/* ═══════════════════════════════════════════
            SECTION 9 - CTA + FOOTER
        ═══════════════════════════════════════════ */}
        <section aria-label="Book a Care Impact Assessment">
        <ScrollReveal>
          <BentoGrid>
            <BentoGridItem
              colSpan={2}
              className="bg-marine-green text-white p-10 border-none"
            >
              <Spotlight
                className="rounded-2xl"
                spotlightColor="rgba(234, 100, 48, 0.12)"
              >
                <h2 className="text-2xl md:text-3xl font-lora italic font-semibold mb-4">
                  {ctaSection.headline}
                </h2>
                <p className="text-white/70 font-work-sans mb-6">
                  {ctaSection.subheadline}
                </p>
                <ul className="space-y-3 mb-8">
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
                <CTAButton variant="white" size="lg" />
              </Spotlight>
            </BentoGridItem>

            <BentoGridItem className="bg-coral p-8 border-none flex flex-col items-center justify-center text-center text-white">
              <ArrowRight className="w-10 h-10 mb-4 text-white/60" />
              <p className="font-lora italic font-semibold text-xl mb-2">
                30 minutes
              </p>
              <p className="text-white/70 font-work-sans text-sm">
                is all it takes to understand the care impact on your workforce
              </p>
            </BentoGridItem>
          </BentoGrid>
        </ScrollReveal>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="bg-charcoal text-white/50 py-6 mt-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <LogoPair kareheroVariant="white" size="sm" className="text-white" />
          <p className="text-xs font-work-sans">{footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
