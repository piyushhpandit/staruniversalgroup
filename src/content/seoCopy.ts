export type SeoSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type VerticalSeoCopy = {
  intro: string;
  sections: SeoSection[];
  cta: {
    heading: string;
    paragraphs: string[];
    href: string;
    label: string;
  };
};

export const eventsSeoCopy: VerticalSeoCopy = {
  intro:
    'If you are searching for the best event company in Bihar or a wedding planner in Patna, you are usually looking for one thing: predictable execution. Star Universal Group plans weddings and events with a clear run-of-show, vendor accountability, and clean on-ground coordination so your family enjoys the functions instead of managing chaos.',
  sections: [
    {
      heading: 'Events & wedding planning services (Bihar)',
      paragraphs: [
        'We manage weddings, corporate events, and social celebrations across Bihar. Our work is not “ideas only” — it is planning + coordination + execution. That means we build a function-wise timeline, assign responsibilities to vendors, and manage set-up, cueing, and flow on the event day.',
        'For families comparing the best wedding planner in Bihar, the practical difference is process: vendor briefs, timelines, checks, and someone responsible for making the plan real on the ground.',
      ],
      bullets: [
        'Full wedding planning: vendor sourcing, contracts, budgets, timelines, and event-day coordination',
        'Wedding décor & design: stage/mandap, entry, lighting, florals, seating, photo-op corners',
        'Vendor management: photography/video, catering, makeup, entertainment, logistics',
        'Corporate events: agenda discipline, stage/AV readiness, branding, guest flow, speaker support',
        'On-ground show calling: setup supervision, cueing, contingency handling, wrap-up coordination',
      ],
    },
    {
      heading: 'Why choose Star Universal Group (trust signals)',
      paragraphs: [
        'We work with a Bihar-ready vendor network and plan around real constraints: venue access, power backup, load-in windows, and guest movement. Our coordination is designed to reduce last-minute changes, avoid overspend, and keep functions running on time.',
      ],
      bullets: [
        'Clear scope and deliverables: what is included, what is optional, and what is out of scope',
        'Budget control: prioritize what impacts guest experience (food, comfort, décor, photo/video)',
        'Timeline discipline: realistic buffers between functions, vendor call times, and handovers',
        'Local execution: coordination in Patna and across key Bihar cities',
      ],
    },
    {
      heading: 'Location coverage (Patna + Muzaffarpur + Bihar)',
      paragraphs: [
        'We plan events across Bihar. If you need the best wedding planner in Patna, we can handle end-to-end wedding planning and décor execution with local venue and vendor coordination. If you are looking for a wedding planner in Muzaffarpur or nearby districts, we can support you with the same process and accountability model, subject to date availability.',
        'For broader queries like event management company in Bihar, we operate with a travel-ready team model so execution remains consistent even outside the main city.',
      ],
    },
    {
      heading: 'How to get a fast, accurate quote',
      paragraphs: [
        'To give an accurate quote, we need your date, city, venue status, guest count, number of functions, and your priorities (décor, food, photo/video, entertainment). If you have reference images or a theme idea, share those too. We respond with a scope outline and a realistic cost range based on deliverables.',
      ],
    },
  ],
  cta: {
    heading: 'Book a consultation for your wedding or event in Bihar',
    paragraphs: [
      'Share your date, city, and function list. We will reply with a plan-first approach: timeline, scope, and a practical estimate that matches your priorities.',
    ],
    href: '/contact-event',
    label: 'Contact Events Team',
  },
};

export const travelSeoCopy: VerticalSeoCopy = {
  intro:
    'If you are searching for tour and travel services in India, Nepal tour packages, or a Buddha circuit tour, you need two things: a realistic itinerary and reliable coordination. Star Universal Travel focuses on clear day-by-day planning, transparent inclusions, and support that keeps your trip comfortable—especially for families and groups.',
  sections: [
    {
      heading: 'Tour and travel services in India (planning + booking support)',
      paragraphs: [
        'We help travelers plan routes, stays, and movement across India with a practical schedule. Instead of packing too much into one day, we design itineraries that match your travel time, rest windows, and on-ground conditions.',
      ],
      bullets: [
        'India tour packages: Golden Triangle, Rajasthan, Kerala, Goa, Varanasi, Ladakh and more',
        'Transport planning: flights, trains, buses, and local movement coordination',
        'Family-friendly pacing: comfortable travel days and realistic sightseeing windows',
        'Group planning: aligned check-in/check-out, coordinated movement, and time buffers',
      ],
    },
    {
      heading: 'Nepal tour packages (Kathmandu, Pokhara, Lumbini and beyond)',
      paragraphs: [
        'For Nepal tour packages, we plan around entry routes, weather windows, and the pace your group can handle. Whether you want a short break or a multi-city plan, we structure the itinerary so you spend more time experiencing Nepal and less time stuck in transfers.',
      ],
      bullets: [
        'Kathmandu–Pokhara–Lumbini itineraries',
        'Custom options for families, couples, and groups',
        'Documentation checklist guidance based on your traveler details',
      ],
    },
    {
      heading: 'Buddha circuit tour (spiritual travel with sane pacing)',
      paragraphs: [
        'A Buddha circuit tour works best when the route is paced properly. We plan the sequence of key Buddhist sites with realistic travel times and rest buffers—especially important for senior citizens. The goal is comfort, not rushing from point to point.',
      ],
    },
    {
      heading: 'Holiday tour packages India (season, budget, comfort)',
      paragraphs: [
        'Holiday tour packages India are priced mainly by season, hotel category, itinerary complexity, and transport type. We propose 2–3 practical options so you can choose between budget and comfort without losing clarity on inclusions.',
      ],
    },
  ],
  cta: {
    heading: 'Request an itinerary for India or Nepal',
    paragraphs: [
      'Send your travel dates, number of travelers, starting city, and preferred destinations. We will share a clear itinerary proposal and inclusions before you confirm.',
    ],
    href: '/contact-travel',
    label: 'Contact Travel Team',
  },
};

export const foundationSeoCopy: VerticalSeoCopy = {
  intro:
    'If you are looking for an NGO in Bihar or a foundation working in Bihar, you are typically searching for real on-ground work—not just online claims. Star Universal Foundation is a social welfare foundation in Bihar focused on practical community initiatives with local participation and measurable execution.',
  sections: [
    {
      heading: 'What we do (social welfare foundation in Bihar)',
      paragraphs: [
        'Our programs are designed to be actionable in communities—awareness, access, and empowerment. We coordinate with local stakeholders and deliver activities with defined objectives rather than one-time visibility.',
      ],
      bullets: [
        'Healthcare access initiatives and community support activities',
        'Awareness drives and rehabilitation support programs',
        'Environmental initiatives and community participation efforts',
        'Economic empowerment through skill support and local enablement',
      ],
    },
    {
      heading: 'Why supporters trust our foundation working in Bihar',
      paragraphs: [
        'Trust is built through clarity: what the initiative is, who it serves, and how support is used. We keep programs structured and partner-ready so individuals, volunteers, and CSR teams can participate with clear expectations.',
      ],
      bullets: [
        'Program clarity: defined scope, intended outcomes, and participation model',
        'Local implementation: coordination with on-ground stakeholders in Bihar',
        'Volunteer pathways: skill-based and on-ground support options',
      ],
    },
    {
      heading: 'How to donate or collaborate with our NGO in Bihar',
      paragraphs: [
        'If you want to donate, partner, or volunteer, share your intent and location. We will align you to a relevant initiative and confirm practical next steps. For CSR partnerships, we can propose initiative formats with clear scope, timelines, and basic reporting aligned to objectives.',
      ],
    },
  ],
  cta: {
    heading: 'Support our work in Bihar',
    paragraphs: [
      'If you want to donate, volunteer, or collaborate, send a short note with your location and intent. We will respond with the most relevant initiative and next steps.',
    ],
    href: '/contact-foundation',
    label: 'Contact Foundation',
  },
};


