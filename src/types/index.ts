export type ProductPriority = "featured" | "standard";

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  priority: ProductPriority;
  claim: string;
  description: string;
  idealFor: string[];
  benefits: string[];
  highlights: string[];
  image: string;
  ctaLabel: string;
};

export type Industry = {
  slug: string;
  name: string;
  claim: string;
  needs: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};
