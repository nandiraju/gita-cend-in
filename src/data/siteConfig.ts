export interface SiteSection {
  heading: string;
  body: string;
}

export interface SiteFaqItem {
  question: string;
  answer: string;
}

export interface SitePageContent {
  slug: string;
  heroHeadline: string;
  heroSubheadline: string;
  ctaText: string;
  ctaHref: string;
  sections: SiteSection[];
  faqItems?: SiteFaqItem[];
}

export interface SitePage {
  slug: string;
  title: string;
  description: string;
  h1: string;
  purpose: string;
  indexable: boolean;
  content?: SitePageContent;
}

export const siteConfig: {
  siteName: string;
  domain: string;
  brand: {
    name: string;
    tagline: string;
  };
  pages: SitePage[];
} = {
  "siteName": "Bhagavat Gita in Telugu",
  "domain": "gita.cend.in",
  "brand": {
    "name": "Bhagavat Gita in Telugu",
    "tagline": "The Bhagavad Gita (literally \"Song of God\") is a 700-verse Sanskrit Hindu script"
  },
  "pages": [
    {
      "slug": "",
      "title": "Bhagavat Gita in Telugu — The Bhagavad Gita (literally \"Song of God\") ",
      "description": "The Bhagavad Gita (literally \"Song of God\") is a 700-verse Sanskrit Hindu scripture divided into 18 chapters, forming part of the epic poem Mahabharata. It is s",
      "h1": "Bhagavat Gita in Telugu",
      "purpose": "The Bhagavad Gita (literally \"Song of God\") is a 700-verse Sanskrit Hindu scripture divided into 18 chapters, forming part of the epic poem Mahabharata. It is set as a dialogue between the warrior prince Arjuna and his guide, Krishna, on the Kurukshetra battlefield just before a major war",
      "indexable": true,
      "content": {
        "slug": "",
        "heroHeadline": "Bhagavat Gita in Telugu",
        "heroSubheadline": "The Bhagavad Gita (literally \"Song of God\") is a 700-verse Sanskrit Hindu scripture divided into 18 chapters, forming part of the epic poem Mahabharata. It is s",
        "ctaText": "Explore Solutions",
        "ctaHref": "#overview",
        "sections": [
          {
            "heading": "Overview",
            "body": "Bhagavat Gita in Telugu delivers overview tailored for General visitors and prospective customers. The Bhagavad Gita (literally \"Song of God\") is a 700-verse Sanskrit Hindu scripture divided into 18 chapters, forming part of the epic poem Mahabharata. It is set as a dialogue between the warrior prince Arjuna and his guide, Krishna, on the Kurukshetra battlefield just before a major war"
          },
          {
            "heading": "Why Choose Us",
            "body": "Bhagavat Gita in Telugu delivers why choose us tailored for General visitors and prospective customers. The Bhagavad Gita (literally \"Song of God\") is a 700-verse Sanskrit Hindu scripture divided into 18 chapters, forming part of the epic poem Mahabharata. It is set as a dialogue between the warrior prince Arjuna and his guide, Krishna, on the Kurukshetra battlefield just before a major war"
          },
          {
            "heading": "Get Started",
            "body": "Bhagavat Gita in Telugu delivers get started tailored for General visitors and prospective customers. The Bhagavad Gita (literally \"Song of God\") is a 700-verse Sanskrit Hindu scripture divided into 18 chapters, forming part of the epic poem Mahabharata. It is set as a dialogue between the warrior prince Arjuna and his guide, Krishna, on the Kurukshetra battlefield just before a major war"
          }
        ]
      }
    }
  ]
};
