import type { SectionContent, Challenge, Service, CTAItem } from "./types";

export const hero: SectionContent = {
  headline: "Estimated 5,500 carers at TfL",
  subheadline:
    "1 in 5 employees juggle work and unpaid care, driving absenteeism, burnout, and attrition. KareHero gives them dedicated support so they can stay in work, stay well, and stay with TfL.",
};

export const ctaText = "Book a Care Impact Assessment";

export const mailtoHref =
  "mailto:stephanie@karehero.com?subject=Care%20Impact%20Assessment%20for%20Transport%20for%20London&body=Hi%20Stephanie%2C%0A%0AI'd%20like%20to%20book%20a%20Care%20Impact%20Assessment%20for%20Transport%20for%20London.%0A%0AThanks";

export const calendarBookingUrl =
  "https://calendly.com/karehero/care-impact-assessment";

export const contactEmails = [
  "stephanie@karehero.com",
  "joey.teepsoo@karehero.com",
];

export const problem: SectionContent = {
  headline: "Caregiving is costing TfL more than you think",
  subheadline:
    "The UK is facing a caregiving crisis that's hitting employers hard. For a workforce the size of TfL's, thousands of your people are navigating complex care situations — often alone.",
};

export const employees: SectionContent = {
  headline: "Your people face unique challenges",
  subheadline:
    "TfL's Carers Staff Network and Carers Passport show commitment. But your workforce faces unique barriers that scheduling flexibility alone can't solve.",
};

export const challenges: Challenge[] = [
  {
    icon: "clock",
    title: "Shift Patterns",
    description:
      "Drivers, station staff, and control room operators work unsociable hours and can't access 9-to-5 support services.",
  },
  {
    icon: "users",
    title: "Frontline Roles",
    description:
      "Physical, operational roles make it harder to step away for care emergencies or appointments.",
  },
  {
    icon: "map-pin",
    title: "Distributed Workforce",
    description:
      "Staff across 30+ locations means in-person wellbeing programmes can't reach everyone.",
  },
  {
    icon: "trending-down",
    title: "Retention at Risk",
    description:
      "Experienced frontline staff are costly to replace. Care responsibilities drive resignations you can't afford.",
  },
];

export const emotionalToll = {
  label: "The emotional toll",
  text: "95% of carer employees say care responsibilities negatively impact their wellbeing. That's burnout, presenteeism, and absence hitting your operations daily.",
  statValue: "95%",
};

export const solution: SectionContent = {
  label: "The Solution",
  headline: "Care Simplified",
  subheadline:
    "KareHero turns the chaos of caregiving into a simple, supported journey. Accessible 24/7 via app and phone — built for workforces like yours.",
};

export const services: Service[] = [
  {
    icon: "user",
    title: "Dedicated Care Advisor",
    description:
      "One person who knows their situation and does the heavy lifting.",
  },
  {
    icon: "clipboard-check",
    title: "Care Assessments & Plans",
    description:
      "Professional assessments identifying what's needed, with a clear plan to get there.",
  },
  {
    icon: "pound-sterling",
    title: "Financial Funding Reviews",
    description:
      "We find funding your employees don't know exists. All handled.",
  },
  {
    icon: "shield-check",
    title: "Vetted Care Placements",
    description:
      "Sourcing quality, inspected care providers on their behalf.",
  },
  {
    icon: "building",
    title: "Hospital Discharge Support",
    description:
      "Navigating the NHS discharge process so your employee isn't alone.",
  },
  {
    icon: "bar-chart",
    title: "Wellbeing Index",
    description:
      "The UK's first data-led caregiver resilience measurement.",
  },
];

export const solutionFooter =
  "Supporting the entire carer lifecycle — from those just starting to think about care, through to complex, long-term situations.";

export const caseStudy: SectionContent = {
  label: "Case Study",
  headline: "What happened when British Airways partnered with KareHero",
  subheadline:
    "BA discovered over 10% of their workforce had declared adult caregiving responsibilities. Like TfL, they're a Keep Britain Working Vanguard employer. Here's what KareHero delivered.",
};

export const diversityFooter =
  "Supporting carers directly advances your diversity and retention goals.";

export const tflProjection: SectionContent = {
  label: "What this means for Transport for London",
  headline: "What this means for TfL",
  body: "British Airways proved the ROI. TfL has the same opportunity, with a larger workforce and a higher proportion of carers.",
};

export const testimonialSection: SectionContent = {
  headline: "What employees say",
};

export const ctaSection = {
  headline: "See what KareHero could mean for TfL's workforce",
  subheadline: "A Care Impact Assessment takes 30 minutes and gives you:",
  items: [
    "An estimate of how many TfL employees are likely carers",
    "The projected cost of inaction to your organisation",
    "A tailored proposal showing how KareHero can support your people",
  ] as CTAItem[] & string[],
};

export const footer = {
  copyright: "© 2026 KareHero. Care Simplified.",
};
