/**
 * Centralized image URLs for TfL landing page variants.
 * Using Unsplash images — free for commercial use, no attribution required.
 *
 * For production: download these images to /public/images/ and update paths.
 */

export type PageImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** People entering a lit London Underground station at night */
export const heroImage: PageImage = {
  src: "https://images.unsplash.com/photo-1762421028278-bb82ca35b3ed?auto=format&fit=crop&w=1200&q=80",
  alt: "Commuters at a London Underground station — the workforce TfL supports every day",
  width: 1200,
  height: 800,
};

/** Diverse team collaborating around a table in an office setting */
export const caseStudyImage: PageImage = {
  src: "https://images.unsplash.com/photo-1758873269276-9518d0cb4a0b?auto=format&fit=crop&w=1200&q=80",
  alt: "A diverse team collaborating in a corporate meeting — the kind of partnership KareHero enables",
  width: 1200,
  height: 800,
};

/** Diverse group of professionals in a modern office meeting */
export const solutionImage: PageImage = {
  src: "https://images.unsplash.com/photo-1758691737543-09a1b2b715fa?auto=format&fit=crop&w=1200&q=80",
  alt: "Professionals discussing workplace wellbeing strategy in a modern office",
  width: 1200,
  height: 800,
};

/** Caregiver supporting an elderly person — warm, authentic moment */
export const caregivingImage: PageImage = {
  src: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80",
  alt: "A caregiver providing warm, hands-on support to an elderly family member",
  width: 1200,
  height: 800,
};
