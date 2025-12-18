import { Link, useParams } from 'react-router-dom';
import { Seo } from '../../seo/Seo';
import { breadcrumbList, faqPage, localBusinessEventPlanner } from '../../seo/schema';
import { findEventCity, findEventService } from '../../seo/programmatic/events';
import { fillTemplate } from '../../seo/programmatic/templates';

const DEFAULT_FAQS = [
  {
    question: 'Do you provide end-to-end planning or only décor?',
    answer:
      'Both. We can handle full planning (venue, vendors, timelines, coordination) or a focused scope like décor/design, vendor management, or event-day operations.',
  },
  {
    question: 'Can you plan events across nearby cities?',
    answer:
      'Yes. If your event is in Bihar, we can cover nearby cities with a clear logistics plan and deliverables locked in writing.',
  },
];

export default function EventsCityServiceDynamic() {
  const params = useParams<{ serviceSlug: string; citySlug: string }>();
  const service = params.serviceSlug ? findEventService(params.serviceSlug) : undefined;
  const city = params.citySlug ? findEventCity(params.citySlug) : undefined;

  if (!service || !city) {
    return (
      <main style={{ padding: 24, maxWidth: 980, margin: '0 auto' }}>
        <Seo
          title="Page not found | Star Universal Group"
          description="This page does not exist."
          robots="noindex,follow"
          canonicalPath="/"
        />
        <h1>Page not found</h1>
        <p>
          Go back to <Link to="/events">Events</Link>.
        </p>
      </main>
    );
  }

  const vars = {
    SERVICE: service.name,
    CITY: city.name,
    STATE: city.state,
    COUNTRY: city.country === 'IN' ? 'India' : 'Nepal',
  };

  const canonicalPath = `/events/${service.slug}-${city.slug}`;
  const primary = fillTemplate(service.primaryKeywordTemplate, vars);
  const title = `${primary} | Star Universal Group`;
  const description = `Looking for ${primary}? Star Universal Group plans weddings and events with trusted local vendors, premium décor, and seamless on-ground coordination in ${city.name}, ${city.state}.`;

  const faqs = DEFAULT_FAQS.map((f) => ({
    question: fillTemplate(f.question, vars),
    answer: fillTemplate(f.answer, vars),
  }));

  return (
    <main style={{ padding: 24, maxWidth: 980, margin: '0 auto' }}>
      <Seo
        title={title}
        description={description}
        canonicalPath={canonicalPath}
        jsonLd={[
          {
            id: 'breadcrumb',
            data: breadcrumbList([
              { name: 'Home', path: '/' },
              { name: 'Events', path: '/events' },
              { name: city.name, path: `/events/${city.slug}` },
              { name: service.name, path: canonicalPath },
            ]),
          },
          { id: 'faq', data: faqPage(faqs) },
          {
            id: 'localbusiness',
            data: localBusinessEventPlanner({
              name: `Star Universal Group — ${service.name} in ${city.name}`,
              urlPath: canonicalPath,
              description,
              city: city.name,
              state: city.state,
              country: city.country,
            }),
          },
        ]}
      />

      <h1 style={{ fontSize: 34, margin: '16px 0 8px' }}>{primary}</h1>
      <p style={{ fontSize: 18, margin: 0 }}>{description}</p>

      <section style={{ marginTop: 22 }}>
        <h2>What we handle</h2>
        <ul>
          <li>
            <strong>Planning & budgets:</strong> scope, timeline, vendor briefs, cost control
          </li>
          <li>
            <strong>Venue + vendors:</strong> shortlisting, negotiation, contracts
          </li>
          <li>
            <strong>Design & décor:</strong> stage/mandap, lighting, florals, entry, guest flow
          </li>
          <li>
            <strong>Show-calling:</strong> on-ground coordination on event day
          </li>
        </ul>
      </section>

      <section style={{ marginTop: 22 }}>
        <h2>FAQs</h2>
        {faqs.map((f) => (
          <details key={f.question} style={{ marginBottom: 12 }}>
            <summary style={{ cursor: 'pointer', fontWeight: 600 }}>{f.question}</summary>
            <p style={{ marginTop: 8 }}>{f.answer}</p>
          </details>
        ))}
      </section>

      <section style={{ marginTop: 22 }}>
        <h2>Contact</h2>
        <p>
          Get a plan + estimate: <Link to="/contact-event">Contact Events</Link>
        </p>
      </section>
    </main>
  );
}


