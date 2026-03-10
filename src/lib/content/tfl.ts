import type { SectionContent, Challenge, Service, CTAItem } from "./types";

export const hero: SectionContent = {
  headline:
    "Your workforce keeps London moving. Who's supporting them when care calls?",
  subheadline:
    "1 in 5 of your employees are juggling work with unpaid care responsibilities. KareHero gives them a dedicated Care Advisor - so they can stay in work, stay well, and stay with TFL.",
};

export const ctaText = "Book a Care Impact Assessment";

export const mailtoHref =
  "mailto:stephanie@karehero.com?subject=Care%20Impact%20Assessment%20for%20Transport%20for%20London&body=Hi%20Stephanie%2C%0A%0AI'd%20like%20to%20book%20a%20Care%20Impact%20Assessment%20for%20Transport%20for%20London.%0A%0AThanks";

export const contactEmails = [
  "stephanie@karehero.com",
  "joey.teepsoo@karehero.com",
];

export const problem: SectionContent = {
  headline: "The UK's hidden workforce crisis",
  subheadline:
    "The UK is facing a caregiving crisis that's hitting employers hard. For a workforce the size of TFL's, thousands of your people are navigating complex care situations - often alone.",
};

export const employees: SectionContent = {
  headline: "Your people face unique challenges",
  subheadline:
    "TFL's workforce keeps London's transport network running 24/7. But that same commitment creates unique barriers for employees with care responsibilities.",
};

export const challenges: Challenge[] = [
  {
    icon: "clock",
    title: "Shift Patterns",
    description:
      "Drivers, station staff, and control room operators work early mornings, late nights, and weekends. They can't access 9-to-5 support services when they need them most.",
  },
  {
    icon: "users",
    title: "Frontline Roles",
    description:
      "Physical, operational work makes it harder to step away for care emergencies, appointments, or phone calls with social services.",
  },
  {
    icon: "map-pin",
    title: "Distributed Workforce",
    description:
      "With staff spread across 30+ locations - from bus depots to Underground stations to head office - in-person wellbeing programmes can't reach everyone.",
  },
  {
    icon: "trending-down",
    title: "Retention at Risk",
    description:
      "Experienced frontline staff take years to train and are costly to replace. When care responsibilities become overwhelming, you lose people you can't easily get back.",
  },
];

export const emotionalToll = {
  label: "The emotional toll",
  text: "95% of carer employees say care responsibilities negatively impact their wellbeing. That's burnout, presenteeism, and absence hitting your operations daily.",
  statValue: "95%",
};

export const gap: SectionContent = {
  headline:
    "Your Carers' Passport was the right first step. Here's what closes the gap.",
  subheadline:
    "TFL's Carers' Staff Network and Carers' Passport have given your carer employees scheduling flexibility - and that matters. But scheduling is only one dimension of the challenge.",
};

export const gapInsight = {
  headline:
    "The Carers' Passport solves the \"when.\" Your people still need help with the \"what\" and \"how.\"",
  body: 'The root causes are financial (navigating care costs), legal (understanding responsibilities), and practical (finding the right care). Scheduling flexibility helps carers attend appointments - but it doesn\'t help them find the right care, unlock funding, or navigate the system.',
  highlights: ["financial", "legal", "practical"],
};

export const solution: SectionContent = {
  label: "The Solution",
  headline: "Care Simplified",
  subheadline:
    "KareHero turns the chaos of caregiving into a simple, supported journey. Accessible 24/7 via app and phone - built for workforces like yours.",
};

export const services: Service[] = [
  {
    icon: "user",
    title: "Dedicated Care Advisor",
    description:
      "One person, one phone number, who knows their situation and does the heavy lifting.",
  },
  {
    icon: "clipboard-check",
    title: "Care Assessments & Plans",
    description:
      "Structured, professional assessments that identify exactly what's needed - with a clear plan to get there.",
  },
  {
    icon: "pound-sterling",
    title: "Financial Funding Reviews",
    description:
      "We find funding your employees don't know exists. Applications, appeals, benefits - all handled.",
  },
  {
    icon: "shield-check",
    title: "Vetted Care Placements",
    description:
      "Sourcing quality, inspected care providers so your people don't have to search alone.",
  },
  {
    icon: "building",
    title: "Hospital Discharge Support",
    description:
      "Navigating the NHS system when a family member is discharged - so your employee isn't alone in the process.",
  },
  {
    icon: "bar-chart",
    title: "Wellbeing Index",
    description:
      "The UK's first data-led approach to measuring caregiver resilience across your workforce.",
  },
];

export const solutionFooter =
  "Supporting the entire carer lifecycle - from those just starting to think about care, through to complex, long-term situations.";

export const caseStudy: SectionContent = {
  label: "Case Study",
  headline: "What happened when British Airways partnered with KareHero",
  subheadline:
    "When British Airways first surveyed their workforce, they discovered that over 10% had declared adult caregiving responsibilities — far more than expected. Like TFL, BA is a Keep Britain Working Vanguard employer. Here's what happened when they deployed KareHero across their 36,000+ workforce.",
};

export const diversityFooter =
  "Supporting carers directly advances your diversity and retention goals.";

export const tflProjection: SectionContent = {
  label: "What this means for TFL",
  headline: "",
  body: "British Airways - your fellow Keep Britain Working Vanguard employer - proved the ROI. TFL has the same opportunity, with a larger workforce and a higher proportion of carers.",
};

export const testimonialSection: SectionContent = {
  headline: "What employees say",
};

export const ctaSection = {
  headline: "See what KareHero could mean for TFL's workforce",
  subheadline: "A Care Impact Assessment takes 30 minutes and gives you:",
  items: [
    "An estimate of how many TFL employees are likely carers",
    "The projected cost of inaction to your organisation",
    "A tailored proposal showing how KareHero can support your people",
  ] as CTAItem[] & string[],
};

export const footer = {
  copyright: "© 2026 KareHero. Care Simplified.",
};
