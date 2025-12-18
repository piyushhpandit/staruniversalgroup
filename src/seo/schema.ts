import { SITE } from './siteConfig';

export type BreadcrumbItem = { name: string; path: string };

export function breadcrumbList(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: `${SITE.siteUrl}${item.path}`,
    })),
  };
}

export function faqPage(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };
}

export function localBusinessEventPlanner(input: {
  name: string;
  urlPath: string;
  description: string;
  city: string;
  state: string;
  country: string;
  telephone?: string;
  images?: string[]; // absolute URLs preferred
  sameAs?: string[];
}) {
  const url = `${SITE.siteUrl}${input.urlPath}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: input.name,
    url,
    description: input.description,
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: `${input.city}, ${input.state}, ${input.country}`,
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: input.city,
      addressRegion: input.state,
      addressCountry: input.country,
    },
    telephone: input.telephone,
    image: input.images,
    sameAs: input.sameAs,
  };
}

export function travelAgencySchema(input: {
  name: string;
  urlPath: string;
  description: string;
  telephone?: string;
  sameAs?: string[];
  images?: string[];
}) {
  const url = `${SITE.siteUrl}${input.urlPath}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: input.name,
    url,
    description: input.description,
    telephone: input.telephone,
    image: input.images,
    sameAs: input.sameAs,
  };
}

export function ngoOrganizationSchema(input: {
  name: string;
  urlPath: string;
  description: string;
  sameAs?: string[];
  images?: string[];
}) {
  const url = `${SITE.siteUrl}${input.urlPath}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: input.name,
    url,
    description: input.description,
    image: input.images,
    sameAs: input.sameAs,
  };
}


