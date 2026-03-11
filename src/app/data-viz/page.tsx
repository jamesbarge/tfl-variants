"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LogoPair } from "@/components/shared/logo-pair";
import { CTAButton } from "@/components/shared/cta-button";
import { ClientLogos } from "@/components/shared/client-logos";
import { CalendarBooking } from "@/components/shared/calendar-embed";
import { ScrollReveal, CountUp } from "@/components/motion";
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
  tflProjection,
  testimonialSection,
  ctaSection,
  footer,
  calendarBookingUrl,
} from "@/lib/content/tfl";
import {
  problemStats,
  baChallengeStats,
  baResultStats,
  tflProjectionStats,
} from "@/lib/content/stats";
import { testimonials } from "@/lib/content/testimonials";
import { caseStudyImage, caregivingImage, solutionImage } from "@/lib/content/images";
import Image from "next/image";

/* ─── SVG Circular Progress Ring ─── */
function ProgressRing({
  percentage,
  color = "#EA6430",
  trackColor = "#F0EAE0",
  size = 120,
  strokeWidth = 8,
  label,
  sublabel,
  className = "",
}: {
  percentage: number;
  color?: string;
  trackColor?: string;
  size?: number;
  strokeWidth?: number;
  label: string;
  sublabel?: string;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const circumference = 2 * Math.PI * 45;
  const dashArray = (percentage / 100) * circumference;

  return (
    <div ref={ref} className={`flex flex-col items-center gap-3 ${className}`}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={trackColor}
            strokeWidth={strokeWidth}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={
              isInView
                ? { strokeDashoffset: circumference - dashArray }
                : { strokeDashoffset: circumference }
            }
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-work-sans font-semibold text-2xl tabular-nums text-charcoal">
            {percentage}%
          </span>
        </div>
      </div>
      <p className="text-sm text-charcoal/70 text-center max-w-[180px] leading-snug">
        {label}
      </p>
      {sublabel && (
        <p className="text-xs text-charcoal/50 text-center max-w-[180px]">
          {sublabel}
        </p>
      )}
    </div>
  );
}

/* ─── Stat Card ─── */
function StatCard({
  value,
  label,
  sublabel,
  valueColor = "text-coral",
  bgColor = "bg-white",
  delay = 0,
}: {
  value: string;
  label: string;
  sublabel?: string;
  valueColor?: string;
  bgColor?: string;
  delay?: number;
}) {
  return (
    <ScrollReveal direction="up" delay={delay}>
      <div
        className={`${bgColor} rounded-2xl p-6 shadow-sm border border-gardenia hover:shadow-md transition-shadow`}
      >
        <p
          className={`font-work-sans font-bold text-3xl sm:text-4xl tabular-nums ${valueColor}`}
        >
          {value}
        </p>
        <p className="text-sm text-charcoal/70 mt-2 leading-snug">{label}</p>
        {sublabel && (
          <p className="text-xs text-charcoal/50 mt-1">{sublabel}</p>
        )}
      </div>
    </ScrollReveal>
  );
}

/* ─── Icon Map for Challenges and Services ─── */
function ChallengeIcon({ icon }: { icon: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    clock: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    users: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
    "map-pin": (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    "trending-down": (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
      </svg>
    ),
    user: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
    "clipboard-check": (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
      </svg>
    ),
    "pound-sterling": (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 7.629A3 3 0 0 0 9.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 0 1-.43 2.65L9 16.5H15m-6-6h6" />
      </svg>
    ),
    "shield-check": (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    building: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    "bar-chart": (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  };
  return <>{iconMap[icon] || iconMap["user"]}</>;
}

/* ─── Helper: Parse numeric from stat values ─── */
function parseStatValue(value: string): { num: number; prefix: string; suffix: string; decimals: number } {
  if (value.startsWith("~")) {
    const inner = parseStatValue(value.slice(1));
    return { ...inner, prefix: "~" + inner.prefix };
  }
  if (value.startsWith("£")) {
    const inner = parseStatValue(value.slice(1));
    return { ...inner, prefix: "£" + inner.prefix };
  }
  if (value.endsWith("M+")) {
    const num = parseFloat(value.replace(/[^0-9.]/g, ""));
    return { num, prefix: "", suffix: "M+", decimals: value.includes(".") ? 1 : 0 };
  }
  if (value.endsWith("M")) {
    const num = parseFloat(value.replace(/[^0-9.]/g, ""));
    return { num, prefix: "", suffix: "M", decimals: value.includes(".") ? 1 : 0 };
  }
  if (value.endsWith("K+")) {
    const num = parseFloat(value.replace(/[^0-9.]/g, ""));
    return { num, prefix: "", suffix: "K+", decimals: 0 };
  }
  if (value.endsWith("K")) {
    const num = parseFloat(value.replace(/[^0-9.]/g, ""));
    return { num, prefix: "", suffix: "K", decimals: 0 };
  }
  if (value.endsWith("%+")) {
    const num = parseFloat(value.replace(/[^0-9.]/g, ""));
    return { num, prefix: "", suffix: "%+", decimals: value.includes(".") ? 1 : 0 };
  }
  if (value.endsWith("%")) {
    const num = parseFloat(value.replace(/[^0-9.]/g, ""));
    return { num, prefix: "", suffix: "%", decimals: value.includes(".") ? 1 : 0 };
  }
  const num = parseFloat(value.replace(/[^0-9.]/g, ""));
  if (!isNaN(num)) {
    return { num, prefix: "", suffix: "", decimals: 0 };
  }
  return { num: 0, prefix: "", suffix: "", decimals: 0 };
}

const ringColors = ["#EA6430", "#00433D", "#EC9044", "#9681EA", "#732F4A"];

export default function DataVizPage() {
  return (
    <div className="min-h-screen bg-floral-white text-charcoal font-work-sans">
      {/* ───────────── HEADER ───────────── */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gardenia px-6 sm:px-12 py-4 flex items-center justify-between">
        <LogoPair kareheroVariant="coral" size="md" />
        <CTAButton variant="coral" size="md" className="hidden sm:inline-block" />
      </header>

      {/* ───────────── HERO - Giant Animated Counter ───────────── */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden bg-marine-green text-white">
        <BackgroundBeams />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <ScrollReveal direction="up" duration={0.5}>
            <p className="text-sm uppercase tracking-[0.2em] text-lime-green font-semibold mb-6">
              The UK Workforce Crisis
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1} duration={0.5}>
            <div className="mb-6">
              <CountUp
                end={7.6}
                suffix="M"
                decimals={1}
                duration={2.5}
                className="font-work-sans font-bold text-6xl sm:text-8xl md:text-[10rem] tabular-nums text-coral leading-none"
              />
            </div>
            <p className="text-xl sm:text-2xl text-white/80 font-work-sans mb-4">
              people in the UK workforce are carers
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.3} duration={0.6}>
            <h1 className="font-lora italic font-semibold text-3xl sm:text-4xl md:text-5xl text-white leading-tight tracking-[-0.02em] mt-8">
              {hero.headline}
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4} duration={0.6}>
            <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              {hero.subheadline}
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.5} duration={0.6}>
            <div className="mt-10">
              <CTAButton variant="white" size="lg" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ───────────── PROBLEM - Ring Charts ───────────── */}
      <section className="px-6 sm:px-12 lg:px-20 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <p className="text-sm uppercase tracking-[0.2em] text-coral font-semibold mb-3">
              The Problem
            </p>
            <h2 className="font-lora italic font-semibold text-4xl sm:text-5xl text-marine-green leading-tight tracking-[-0.02em]">
              {problem.headline}
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="mt-4 text-lg text-charcoal/70 max-w-3xl">
              {problem.subheadline}
            </p>
          </ScrollReveal>

          {/* Problem Stats as Ring Charts */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {problemStats.map((stat, i) => {
              const pct = parseFloat(stat.value.replace(/[^0-9.]/g, ""));
              return (
                <ProgressRing
                  key={i}
                  percentage={pct}
                  color={ringColors[i % ringColors.length]}
                  label={stat.label}
                  sublabel={stat.sublabel}
                  size={130}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────── CAREGIVING IMAGE ───────────── */}
      <ScrollReveal direction="up">
        <div className="relative w-full aspect-[21/9] overflow-hidden">
          <Image
            src={caregivingImage.src}
            alt={caregivingImage.alt}
            width={caregivingImage.width}
            height={caregivingImage.height}
            className="object-cover w-full h-full"
          />
        </div>
      </ScrollReveal>

      {/* ───────────── EMPLOYEES - Icon Cards ───────────── */}
      <section className="px-6 sm:px-12 lg:px-20 py-20 sm:py-28 bg-gardenia">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <h2 className="font-lora italic font-semibold text-4xl sm:text-5xl text-marine-green leading-tight tracking-[-0.02em]">
              {employees.headline}
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="mt-4 text-lg text-charcoal/70 max-w-3xl">
              {employees.subheadline}
            </p>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {challenges.map((challenge, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gardenia hover:shadow-md transition-shadow h-full">
                  <div className="w-16 h-16 rounded-xl bg-coral/10 text-coral flex items-center justify-center mb-5">
                    <ChallengeIcon icon={challenge.icon} />
                  </div>
                  <h3 className="font-lora italic font-semibold text-xl text-marine-green mb-3 tracking-[-0.02em]">
                    {challenge.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Emotional Toll Stat */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="mt-10 bg-marine-green rounded-2xl p-8 sm:p-12 text-white text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-lime-green font-semibold mb-3">
                {emotionalToll.label}
              </p>
              <p className="font-work-sans font-bold text-5xl sm:text-7xl md:text-8xl tabular-nums text-coral">
                {emotionalToll.statValue}
              </p>
              <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
                {emotionalToll.text}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ───────────── SOLUTION - Service Grid ───────────── */}
      <section className="px-6 sm:px-12 lg:px-20 py-20 sm:py-28 bg-marine-green text-white">
        <div className="max-w-6xl mx-auto">
          {solution.label && (
            <ScrollReveal direction="up">
              <p className="text-sm uppercase tracking-[0.2em] text-lime-green font-semibold mb-3">
                {solution.label}
              </p>
            </ScrollReveal>
          )}
          <ScrollReveal direction="up" delay={0.05}>
            <h2 className="font-lora italic font-semibold text-5xl sm:text-6xl text-white leading-tight tracking-[-0.02em]">
              {solution.headline}
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="mt-4 text-lg text-white/70 max-w-3xl">
              {solution.subheadline}
            </p>
          </ScrollReveal>

          {/* Solution Image */}
          <ScrollReveal direction="up" delay={0.15}>
            <div className="mt-10 relative rounded-2xl overflow-hidden aspect-[21/9] border border-white/10">
              <Image
                src={solutionImage.src}
                alt={solutionImage.alt}
                width={solutionImage.width}
                height={solutionImage.height}
                className="object-cover w-full h-full"
              />
            </div>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.08}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors h-full">
                  <div className="w-16 h-16 rounded-xl bg-coral/20 text-coral flex items-center justify-center mb-5">
                    <ChallengeIcon icon={service.icon} />
                  </div>
                  <h3 className="font-lora italic font-semibold text-xl text-white mb-2 tracking-[-0.02em]">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={0.3}>
            <p className="mt-10 text-white/50 text-sm max-w-2xl">
              {solutionFooter}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ───────────── CASE STUDY - Compact Snapshot ───────────── */}
      <section className="px-6 sm:px-12 lg:px-20 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto">
          {caseStudy.label && (
            <ScrollReveal direction="up">
              <p className="text-sm uppercase tracking-[0.2em] text-coral font-semibold mb-3">
                {caseStudy.label}
              </p>
            </ScrollReveal>
          )}
          <ScrollReveal direction="up" delay={0.05}>
            <h2 className="font-lora italic font-semibold text-4xl sm:text-5xl text-marine-green leading-tight tracking-[-0.02em] max-w-4xl">
              {caseStudy.headline}
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="mt-4 text-lg text-charcoal/70 max-w-3xl">
              {caseStudy.subheadline}
            </p>
          </ScrollReveal>

          {/* BA Challenge Stats */}
          <div className="mt-14">
            <ScrollReveal direction="up">
              <h3 className="font-lora italic font-semibold text-2xl text-charcoal tracking-[-0.02em] mb-6">
                The challenge at British Airways
              </h3>
            </ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {baChallengeStats.map((stat, i) => (
                <StatCard
                  key={i}
                  value={stat.value}
                  label={stat.label}
                  sublabel={stat.sublabel}
                  valueColor="text-marine-green"
                  delay={i * 0.08}
                />
              ))}
            </div>
          </div>

          {/* BA Result Stats */}
          <div className="mt-14">
            <ScrollReveal direction="up">
              <h3 className="font-lora italic font-semibold text-2xl text-charcoal tracking-[-0.02em] mb-6">
                The results
              </h3>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {baResultStats.map((stat, i) => (
                <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                  <div className="bg-coral/5 border border-coral/20 rounded-2xl p-6">
                    <p className="font-work-sans font-bold text-3xl sm:text-4xl tabular-nums text-coral">
                      {stat.value}
                    </p>
                    <p className="text-sm text-charcoal/70 mt-2 leading-snug">
                      {stat.label}
                    </p>
                    {stat.sublabel && (
                      <p className="text-xs text-charcoal/50 mt-1">
                        {stat.sublabel}
                      </p>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="mt-10 relative rounded-2xl overflow-hidden aspect-[21/9] border border-gardenia">
              <Image
                src={caseStudyImage.src}
                alt={caseStudyImage.alt}
                width={caseStudyImage.width}
                height={caseStudyImage.height}
                className="object-cover w-full h-full"
              />
            </div>
          </ScrollReveal>

          {/* Single Testimonial */}
          {testimonials[0] && (
            <ScrollReveal direction="up" delay={0.2}>
              <div className="mt-10 bg-gardenia rounded-2xl p-8 sm:p-10">
                <svg className="w-8 h-8 text-coral/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                </svg>
                <blockquote className="text-lg text-charcoal/80 leading-relaxed">
                  {testimonials[0].quote}
                </blockquote>
                <cite className="block mt-5 text-sm text-charcoal/50 not-italic">
                  - {testimonials[0].attribution}
                </cite>
              </div>
            </ScrollReveal>
          )}

          {/* TfL Projections */}
          <div className="mt-14">
            <ScrollReveal direction="up">
              <p className="text-sm uppercase tracking-[0.2em] text-coral font-semibold mb-2">
                {tflProjection.label}
              </p>
              <h3 className="font-lora italic font-semibold text-4xl sm:text-5xl text-marine-green tracking-[-0.02em] mb-4">
                {tflProjection.headline}
              </h3>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.05}>
              <p className="text-lg text-charcoal/70 max-w-3xl mb-8">
                {tflProjection.body}
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {tflProjectionStats.map((stat, i) => {
                const parsed = parseStatValue(stat.value);
                return (
                  <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                    <div className="bg-marine-green rounded-2xl p-8 text-center text-white">
                      {parsed.num > 0 ? (
                        <CountUp
                          end={parsed.num}
                          prefix={parsed.prefix}
                          suffix={parsed.suffix}
                          decimals={parsed.decimals}
                          duration={2}
                          className="font-work-sans font-bold text-4xl sm:text-5xl tabular-nums text-sunflower"
                        />
                      ) : (
                        <p className="font-work-sans font-bold text-4xl sm:text-5xl tabular-nums text-sunflower">
                          {stat.value}
                        </p>
                      )}
                      <p className="text-sm text-white/80 mt-3">{stat.label}</p>
                      {stat.sublabel && (
                        <p className="text-xs text-white/50 mt-1">
                          {stat.sublabel}
                        </p>
                      )}
                    </div>
                  </ScrollReveal>
                );
              })}
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

      {/* ───────────── CTA + FOOTER ───────────── */}
      <section className="px-6 sm:px-12 lg:px-20 py-20 sm:py-28 bg-coral/5">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="up">
            <h2 className="font-lora italic font-semibold text-4xl sm:text-5xl md:text-6xl text-marine-green leading-tight tracking-[-0.02em]">
              {ctaSection.headline}
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.1}>
            <p className="mt-6 text-lg text-charcoal/70">
              {ctaSection.subheadline}
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.15}>
            <ul className="mt-6 space-y-3 text-left max-w-lg mx-auto">
              {ctaSection.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-charcoal/80">
                  <span className="mt-2 w-2 h-2 rounded-full bg-coral flex-shrink-0" />
                  <span>{typeof item === "string" ? item : item.text}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="mt-10">
              <CTAButton variant="coral" size="lg" />
            </div>
            <div className="mt-4">
              <CalendarBooking url={calendarBookingUrl} className="text-coral" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gardenia px-6 sm:px-12 py-6 flex items-center justify-between">
        <LogoPair kareheroVariant="coral" size="sm" />
        <span className="text-xs text-charcoal/40">
          {footer.copyright}
        </span>
      </footer>
    </div>
  );
}
