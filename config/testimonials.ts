/**
 * Testimonials Configuration — Prabhunath Electricals & Contractor
 * Per master instructions:
 * "Do NOT create fake testimonials and publish them as genuine customer reviews.
 * If actual reviews are not supplied:
 * - Hide the testimonials section, OR
 * - Display a configurable placeholder in development only."
 *
 * We set `enabled: false` so that no fabricated customer reviews are rendered.
 */
export interface TestimonialItem {
  id: string;
  name: string;
  city: string;
  service: string;
  rating: number;
  review: string;
  avatarInitials: string;
}

export const testimonialsConfig = {
  enabled: false,
  items: [] as TestimonialItem[],
};
