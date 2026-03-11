import type { Stat } from "./types";

export const ukWorkforceStats: Stat[] = [
  { value: "7.6M", label: "people in the UK workforce are carers" },
  { value: "3M", label: "employees on long-term sick leave" },
  { value: "8M", label: "people stuck on NHS hospital waitlists" },
  { value: "1 in 5", label: "employees balance work with unpaid care" },
  { value: "10%", label: "of carer employees resign every year" },
  {
    value: "2026",
    label: "The UK now looks after more adults than children",
  },
];

export const problemStats: Stat[] = [
  { value: "17%", label: "say caregiving negatively affects their job performance", sublabel: "Absenteeism & presenteeism" },
  { value: "50%", label: "of carer employees are less productive at work", sublabel: "Lost productivity" },
  { value: "10%", label: "of carer employees resign every year", sublabel: "Higher turnover" },
  { value: "74%", label: "report feeling stressed or anxious", sublabel: "Stress & mental health" },
  { value: "63%", label: "are extremely worried about managing monthly costs", sublabel: "Financial wellbeing" },
];

export const baChallengeStats: Stat[] = [
  {
    value: "9.1%",
    label: "of employees self-identified as adult carers",
  },
  {
    value: "95%",
    label: "said care impacted their wellbeing",
  },
  {
    value: "75%+",
    label: "considered adjusting career plans",
  },
  {
    value: "£14M+",
    label: "annual cost of doing nothing",
    sublabel: "Including £10-12M in absenteeism alone",
  },
];

export const baResultStats: Stat[] = [
  {
    value: "£838K",
    label: "funding identified in 7 months",
  },
  {
    value: "£38K",
    label: "average funding per employee",
  },
  {
    value: "70%+",
    label: "needed support within first 3 months",
  },
];

export const diversityStats: Stat[] = [
  {
    value: "60%",
    label: "of unpaid carers in the UK are women",
  },
  {
    value: "4x",
    label: "Women quit due to caregiving at 4x the rate of men",
  },
  {
    value: "58%",
    label: "of ethnic minority carers express financial concerns vs 37% of white carers",
  },
];

export const tflProjectionStats: Stat[] = [
  {
    value: "~5,500",
    label: "estimated carer employees across your workforce",
    sublabel: "Based on TfL's own 1-in-5 ratio",
  },
  {
    value: "~£23M+",
    label: "estimated annual cost of doing nothing",
    sublabel: "Projected from BA benchmarks",
  },
  {
    value: "£38K",
    label: "average funding identified per carer employee",
    sublabel: "Proven at British Airways",
  },
];
