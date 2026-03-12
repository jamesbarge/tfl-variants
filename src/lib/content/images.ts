/**
 * Centralized image paths for TfL landing page variants.
 * Brand-approved photos provided by Jess, stored in /public/images/.
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

/** Young man with arm around elderly grandmother, warm and smiling */
export const caseStudyImage: PageImage = {
  src: "/images/casestudy-split.jpg",
  alt: "A young man with his arm around his elderly grandmother, both smiling warmly",
  width: 1000,
  height: 704,
};

/** Two men in a professional workplace discussion */
export const solutionImage: PageImage = {
  src: "/images/solution-split.jpg",
  alt: "Two professionals in an engaged workplace discussion, one guiding the other through a plan",
  width: 1509,
  height: 896,
};

/** Younger man with arm around elderly father, both looking out a window */
export const caregivingImage: PageImage = {
  src: "/images/employees-split.jpg",
  alt: "A son with his arm around his elderly father, both looking out a window together",
  width: 1656,
  height: 756,
};
