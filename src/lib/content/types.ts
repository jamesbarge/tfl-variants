import { z } from "zod";

export const StatSchema = z.object({
  value: z.string(),
  label: z.string(),
  sublabel: z.string().optional(),
});
export type Stat = z.infer<typeof StatSchema>;

export const ChallengeSchema = z.object({
  icon: z.string(),
  title: z.string(),
  description: z.string(),
});
export type Challenge = z.infer<typeof ChallengeSchema>;

export const ServiceSchema = z.object({
  icon: z.string(),
  title: z.string(),
  description: z.string(),
});
export type Service = z.infer<typeof ServiceSchema>;

export const TestimonialSchema = z.object({
  quote: z.string(),
  attribution: z.string(),
});
export type Testimonial = z.infer<typeof TestimonialSchema>;

export const ExecutiveQuoteSchema = z.object({
  quote: z.string(),
  attribution: z.string(),
  role: z.string(),
  company: z.string(),
  context: z.string().optional(),
});
export type ExecutiveQuote = z.infer<typeof ExecutiveQuoteSchema>;

export const CTAItemSchema = z.object({
  text: z.string(),
});
export type CTAItem = z.infer<typeof CTAItemSchema>;

export const SectionContentSchema = z.object({
  label: z.string().optional(),
  headline: z.string(),
  subheadline: z.string().optional(),
  body: z.string().optional(),
});
export type SectionContent = z.infer<typeof SectionContentSchema>;

export const VariantMetaSchema = z.object({
  slug: z.string(),
  name: z.string(),
  description: z.string(),
  complexity: z.enum(["Low", "Low-Med", "Medium", "Med-High", "High"]),
  aesthetic: z.string(),
});
export type VariantMeta = z.infer<typeof VariantMetaSchema>;
