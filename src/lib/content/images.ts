/**
 * Centralized image URLs for TfL landing page variants.
 * Using Unsplash/Pexels images, free for commercial use, no attribution required.
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
  alt: "Commuters at a London Underground station, the workforce TfL supports every day",
  width: 1200,
  height: 800,
};

/** Adult daughter helping elderly mother with phone in sunny park */
export const caseStudyImage: PageImage = {
  src: "https://images.pexels.com/photos/3791666/pexels-photo-3791666.jpeg?auto=compress&cs=tinysrgb&w=1200",
  alt: "A daughter sitting with her elderly mother on a park bench, helping her with a mobile phone on a sunny day",
  width: 1200,
  height: 800,
};

/** Caregiver assisting elderly man with medication in a warm, sunlit living room */
export const solutionImage: PageImage = {
  src: "https://images.pexels.com/photos/7551668/pexels-photo-7551668.jpeg?auto=compress&cs=tinysrgb&w=1200",
  alt: "A caregiver assists an elderly man with medication in a warm, sunlit living room",
  width: 1200,
  height: 800,
};

/** Caregiver supporting an elderly person, warm authentic moment */
export const caregivingImage: PageImage = {
  src: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1600&q=80",
  alt: "A caregiver providing warm, hands-on support to an elderly family member",
  width: 1600,
  height: 1067,
};
