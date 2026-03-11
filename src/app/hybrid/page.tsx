"use client";

import { LogoPair } from "@/components/shared/logo-pair";
import { CTAButton } from "@/components/shared/cta-button";
import { StatCounter } from "@/components/shared/stat-counter";
import { ClientLogos } from "@/components/shared/client-logos";
import { CalendarBooking } from "@/components/shared/calendar-embed";
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
  tflProjection,
  testimonialSection,
  ctaSection,
  footer,
  contactEmails,
  calendarBookingUrl,
} from "@/lib/content/tfl";
import {
  problemStats,
  baChallengeStats,
  baResultStats,
  tflProjectionStats,
} from "@/lib/content/stats";
import { testimonials } from "@/lib/content/testimonials";
import { caregivingImage, solutionImage, caseStudyImage } from "@/lib/content/images";
import Image from "next/image";

/* ─── Service icon map (w-10 h-10) ─── */
function ServiceIcon({ icon }: { icon: string }) {
  const iconMap: Record<string, React.ReactNode> = {
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

export default function HybridPage() {
  return (
    <main className="min-h-screen bg-floral-white text-charcoal overflow-x-hidden w-full max-w-full">
      {/* ─── HEADER ─── */}
      <header className="border-b border-gardenia">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between gap-2 sm:gap-3 overflow-hidden">
          <LogoPair kareheroVariant="coral" size="md" />
          <CTAButton variant="coral" size="md" />
        </div>
      </header>

      {/* ─── HERO - Full-width editorial style ─── */}
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

      {/* ─── PROBLEM - Split-screen (stats left / copy right) ─── */}
      <section className="flex flex-col md:flex-row overflow-hidden">
        {/* Left: Stats on Floral White */}
        <div className="w-full md:w-1/2 bg-floral-white flex items-center">
          <div className="p-4 sm:p-8 md:p-12 lg:p-16 w-full">
            <ScrollReveal direction="left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {problemStats.map((stat, i) => (
                  <div key={i} className="bg-gardenia rounded-lg p-5">
                    <p className="font-lora italic font-semibold text-2xl sm:text-3xl text-coral">
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
                The Problem
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

      {/* ─── EMPLOYEES - Split-screen (copy left / cards right) ─── */}
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

        {/* Right: Emotional Toll + Caregiving image on Coral */}
        <div className="w-full md:w-1/2 bg-coral text-white flex flex-col">
          <div className="flex-1 flex items-center justify-center p-4 sm:p-8 md:p-12">
            <ScrollReveal direction="right">
              <div className="text-center max-w-md">
                <p className="uppercase tracking-widest text-white/60 text-xs font-work-sans font-semibold mb-6">
                  {emotionalToll.label}
                </p>
                <p className="font-lora italic font-semibold text-4xl sm:text-5xl md:text-7xl leading-none">
                  {emotionalToll.statValue}
                </p>
                <p className="mt-6 text-lg text-white/85 leading-relaxed">
                  {emotionalToll.text}
                </p>
              </div>
            </ScrollReveal>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={caregivingImage.src}
              alt={caregivingImage.alt}
              width={caregivingImage.width}
              height={caregivingImage.height}
              priority
              className="object-cover w-full h-full mix-blend-multiply opacity-70"
            />
          </div>
        </div>
      </section>

      {/* ─── SOLUTION - Full-width editorial grid ─── */}
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

          {/* Solution Image */}
          <ScrollReveal delay={0.15}>
            <div className="mt-10 relative rounded-xl overflow-hidden aspect-[21/9] border border-white/10">
              <Image
                src={solutionImage.src}
                alt={solutionImage.alt}
                width={solutionImage.width}
                height={solutionImage.height}
                className="object-cover w-full h-full"
              />
            </div>
          </ScrollReveal>

          {/* Services - 3-column grid with larger icons */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 h-full">
                  <div className="w-16 h-16 rounded-full bg-coral/20 text-coral flex items-center justify-center mb-4">
                    <ServiceIcon icon={service.icon} />
                  </div>
                  <h3 className="font-lora italic font-semibold text-xl text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-white/70">
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

      {/* ─── CASE STUDY - Editorial single-column with sidebar callout ─── */}
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

          <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Main content column */}
            <div className="md:col-span-7">
              <ScrollReveal delay={0.1}>
                <p className="text-lg leading-loose text-charcoal/80">
                  {caseStudy.subheadline}
                </p>
              </ScrollReveal>

              {/* BA Challenge Stats */}
              <div className="mt-10">
                <ScrollReveal delay={0.15}>
                  <p className="uppercase tracking-widest text-charcoal/50 text-xs font-work-sans font-semibold mb-6">
                    What British Airways discovered
                  </p>
                </ScrollReveal>
                <div className="grid grid-cols-2 gap-6">
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
              <div className="my-10 flex items-center gap-4">
                <div className="flex-1 h-px bg-gardenia" />
                <div className="w-2 h-2 rounded-full bg-coral" />
                <div className="flex-1 h-px bg-gardenia" />
              </div>

              {/* BA Results */}
              <ScrollReveal delay={0.15}>
                <p className="uppercase tracking-widest text-charcoal/50 text-xs font-work-sans font-semibold mb-6">
                  The Results
                </p>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
            </div>

            {/* Sidebar */}
            <div className="md:col-span-5 flex flex-col gap-8">
              {/* Case study image */}
              <ScrollReveal delay={0.2}>
                <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                  <Image
                    src={caseStudyImage.src}
                    alt={caseStudyImage.alt}
                    width={caseStudyImage.width}
                    height={caseStudyImage.height}
                    className="object-cover w-full h-full"
                  />
                </div>
              </ScrollReveal>

              {/* Single testimonial */}
              {testimonials[0] && (
                <ScrollReveal delay={0.3}>
                  <div className="border-l-4 border-coral pl-6 py-2">
                    <span className="font-lora italic text-coral text-4xl leading-none select-none">
                      &ldquo;
                    </span>
                    <blockquote className="font-lora italic text-lg text-marine-green leading-relaxed -mt-2">
                      {testimonials[0].quote}
                    </blockquote>
                    <p className="mt-4 text-sm text-charcoal/60 font-work-sans uppercase tracking-widest">
                      - {testimonials[0].attribution}
                    </p>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TfL PROJECTIONS + CLIENT LOGOS - Full-width centered ─── */}
      <section className="bg-marine-green text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="uppercase tracking-widest text-lime-green text-xs font-work-sans font-semibold mb-4">
              {tflProjection.label}
            </p>
            <h2 className="font-lora italic font-semibold text-4xl sm:text-5xl text-white mb-4">
              {tflProjection.headline}
            </h2>
            <p className="text-lg leading-relaxed text-white/85 max-w-3xl mx-auto mb-12">
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

          <ScrollReveal delay={0.4}>
            <div className="mt-16">
              <ClientLogos variant="dark" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CTA - Full-width with calendar booking ─── */}
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
            <div className="mt-4">
              <CalendarBooking url={calendarBookingUrl} className="text-white/80 hover:text-white" />
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
