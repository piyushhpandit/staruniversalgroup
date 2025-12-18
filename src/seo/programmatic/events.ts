export type CityConfig = {
  slug: string;
  name: string;
  state: string;
  country: 'IN' | 'NP';
};

export type ServiceConfig = {
  slug: string;
  name: string; // {{SERVICE}}
  vertical: 'events';
  primaryKeywordTemplate: string; // e.g. "Best {{SERVICE}} in {{CITY}}"
};

export const EVENT_CITIES: CityConfig[] = [
  { slug: 'patna', name: 'Patna', state: 'Bihar', country: 'IN' },
  { slug: 'muzaffarpur', name: 'Muzaffarpur', state: 'Bihar', country: 'IN' },
  { slug: 'motihari', name: 'Motihari', state: 'Bihar', country: 'IN' },
  { slug: 'raxaul', name: 'Raxaul', state: 'Bihar', country: 'IN' },
  { slug: 'bettiah', name: 'Bettiah', state: 'Bihar', country: 'IN' },
  { slug: 'darbhanga', name: 'Darbhanga', state: 'Bihar', country: 'IN' },
  { slug: 'purnia', name: 'Purnia', state: 'Bihar', country: 'IN' },
  { slug: 'begusarai', name: 'Begusarai', state: 'Bihar', country: 'IN' },
];

export const EVENT_SERVICES: ServiceConfig[] = [
  {
    slug: 'wedding-planner',
    name: 'Wedding Planner',
    vertical: 'events',
    primaryKeywordTemplate: 'Best {{SERVICE}} in {{CITY}}, {{STATE}}',
  },
  {
    slug: 'event-company',
    name: 'Event Company',
    vertical: 'events',
    primaryKeywordTemplate: 'Event Management Company in {{CITY}}, {{STATE}}',
  },
];

export function findEventCity(slug: string) {
  return EVENT_CITIES.find((c) => c.slug === slug);
}

export function findEventService(slug: string) {
  return EVENT_SERVICES.find((s) => s.slug === slug);
}


