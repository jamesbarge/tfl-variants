import type { VariantMeta } from "./types";

export const variants: VariantMeta[] = [
  {
    slug: "editorial",
    name: "Editorial Magazine",
    description:
      "Large serif headlines, magazine column layouts, pull-quotes, drop-caps",
    complexity: "Medium",
    aesthetic: "Print editorial",
  },
  {
    slug: "brutalist",
    name: "Brutalist",
    description:
      "Oversized type, thick borders, no border-radius, harsh box-shadows, rotated labels",
    complexity: "Low-Med",
    aesthetic: "Raw & bold",
  },
  {
    slug: "glassmorphism",
    name: "Glassmorphism",
    description:
      "Frosted glass cards, layered translucent backgrounds, gradient meshes, depth effects",
    complexity: "Med-High",
    aesthetic: "Ethereal depth",
  },
  {
    slug: "bento",
    name: "Bento Grid",
    description:
      "Apple-style asymmetric dashboard, varied module sizes, tight gaps, self-contained cells",
    complexity: "Medium",
    aesthetic: "Dashboard elegance",
  },
  {
    slug: "immersive",
    name: "Immersive Scroll",
    description:
      "Full-viewport sections, scroll-snap, parallax layers, cinematic transitions, sticky text",
    complexity: "High",
    aesthetic: "Cinematic storytelling",
  },
  {
    slug: "data-viz",
    name: "Data Visualization",
    description:
      "Animated counters as heroes, SVG circular progress rings, bar charts, infographic layout",
    complexity: "High",
    aesthetic: "Infographic intelligence",
  },
  {
    slug: "split-screen",
    name: "Split Screen",
    description:
      "50/50 horizontal splits alternating per section, opposing slide animations, color blocking",
    complexity: "Medium",
    aesthetic: "Bold duality",
  },
  {
    slug: "minimal-luxury",
    name: "Minimal Luxury",
    description:
      "Max whitespace, 640px single column, hairline borders, micro-animations, understated",
    complexity: "Low-Med",
    aesthetic: "Quiet confidence",
  },
];
