import { Seo } from '../../seo/Seo';
import { breadcrumbList, faqPage, localBusinessEventPlanner } from '../../seo/schema';

const CANONICAL_PATH = '/events/wedding-planner-patna';

const faqs = [
  {
    question: 'What is included in your wedding planning services in Patna?',
    answer:
      'We handle end-to-end wedding planning in Patna: venue shortlisting, vendor coordination, wedding design & décor, guest logistics, event day coordination, and budget management. You can choose full planning or only the specific services you need.',
  },
  {
    question: 'Do you plan weddings outside Patna (Muzaffarpur, Motihari, Raxaul, Darbhanga, Purnia)?',
    answer:
      'Yes. Our core team is based in Bihar and we regularly plan weddings across Patna, Muzaffarpur, Motihari, Raxaul, Bettiah, Darbhanga, Purnia, Begusarai, and nearby towns. Travel and logistics are scoped in the proposal.',
  },
  {
    question: 'How much does a wedding planner in Patna cost?',
    answer:
      'Costs depend on guest count, number of functions, venue complexity, décor scope, and vendor selections. We share a transparent estimate after a short call and can work with fixed budgets while prioritizing what moves the guest experience most.',
  },
  {
    question: 'How early should we book a wedding planner in Patna?',
    answer:
      'For peak wedding season, booking 3–6 months in advance is ideal to lock in venues and the best vendors. If your date is sooner, we can still help—availability is the only constraint.',
  },
];

export default function EventsWeddingPlannerPatna() {
  return (
    <main style={{ padding: 24, maxWidth: 980, margin: '0 auto' }}>
      <Seo
        title="Best Wedding Planner in Patna, Bihar | Star Universal Group"
        description="Looking for the best wedding planner in Patna? Star Universal Group plans elegant, on-budget weddings with trusted local vendors, seamless coordination, and premium décor across Patna & Bihar."
        canonicalPath={CANONICAL_PATH}
        jsonLd={[
          {
            id: 'breadcrumb',
            data: breadcrumbList([
              { name: 'Home', path: '/' },
              { name: 'Events', path: '/events' },
              { name: 'Patna', path: '/events/patna' },
              { name: 'Wedding Planner', path: CANONICAL_PATH },
            ]),
          },
          { id: 'faq', data: faqPage(faqs) },
          {
            id: 'localbusiness',
            data: localBusinessEventPlanner({
              name: 'Star Universal Group — Wedding Planner in Patna',
              urlPath: CANONICAL_PATH,
              description:
                'Wedding planning and event management in Patna, Bihar — venues, vendors, décor, guest logistics and on-ground coordination.',
              city: 'Patna',
              state: 'Bihar',
              country: 'IN',
              // telephone: '+91-XXXXXXXXXX',
            }),
          },
        ]}
      />

      <header style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 36, lineHeight: 1.15, margin: '16px 0 8px' }}>
          Best Wedding Planner in Patna, Bihar
        </h1>
        <p style={{ fontSize: 18, margin: 0 }}>
          Premium wedding planning in Patna with calm coordination, transparent budgets, and a trusted Bihar vendor
          network—so your family enjoys the functions while we run the show.
        </p>
      </header>

      <section>
        <h2 style={{ marginTop: 28 }}>Why couples in Patna choose Star Universal Group</h2>
        <ul>
          <li>
            <strong>Local vendor strength:</strong> Patna venues + decorators + caterers + makeup + photo/video—with
            quality checks and realistic timelines.
          </li>
          <li>
            <strong>Budget control:</strong> We plan around your priorities (food, décor, photography, guest comfort)
            and prevent last-minute overspend.
          </li>
          <li>
            <strong>End-to-end coordination:</strong> From venue recce to vendor briefs to show-calling on wedding day.
          </li>
          <li>
            <strong>Guest experience:</strong> Entry flow, seating, signage, hospitality desk, and function-wise
            timelines that actually work.
          </li>
        </ul>
      </section>

      <section>
        <h2 style={{ marginTop: 28 }}>Wedding planning services in Patna</h2>
        <h3>Full wedding planning</h3>
        <p>
          Ideal if you want one accountable team. We manage concept → vendors → execution across engagement, haldi,
          mehendi, sangeet, wedding, and reception.
        </p>
        <h3>Wedding décor & design</h3>
        <p>
          Stage & mandap concepts, floral + lighting, entrance, photo-op corners, and theme consistency across all
          functions—without compromising safety and guest movement.
        </p>
        <h3>Vendor sourcing & negotiation</h3>
        <p>
          We shortlist vendors that match your quality bar and budget, negotiate deliverables clearly, and lock them
          with contracts to reduce event-day surprises.
        </p>
        <h3>Event-day coordination</h3>
        <p>
          Run-of-show, team briefing, setup supervision, cueing, family coordination, and vendor management—so your
          family isn’t firefighting.
        </p>
      </section>

      <section>
        <h2 style={{ marginTop: 28 }}>Patna venues we can plan around</h2>
        <p>
          From city banquets to destination-style setups near Patna, we plan according to guest count, parking, green
          rooms, power backup, and access. We’ll share a shortlist after understanding your date and function plan.
        </p>
      </section>

      <section>
        <h2 style={{ marginTop: 28 }}>Planning a wedding outside Patna?</h2>
        <p>
          If you’re looking for a wedding planner in <strong>Muzaffarpur</strong>, <strong>Motihari</strong>,{' '}
          <strong>Raxaul</strong>, <strong>Bettiah</strong>, <strong>Darbhanga</strong>, <strong>Purnia</strong>, or{' '}
          <strong>Begusarai</strong>, we can handle end-to-end planning across Bihar with the same process and
          accountability.
        </p>
      </section>

      <section>
        <h2 style={{ marginTop: 28 }}>FAQs</h2>
        {faqs.map((f) => (
          <details key={f.question} style={{ marginBottom: 12 }}>
            <summary style={{ cursor: 'pointer', fontWeight: 600 }}>{f.question}</summary>
            <p style={{ marginTop: 8 }}>{f.answer}</p>
          </details>
        ))}
      </section>

      <section>
        <h2 style={{ marginTop: 28 }}>Get a wedding plan + estimate</h2>
        <p>
          Share your wedding date, guest count, and number of functions—we’ll reply with a function-wise plan and a
          realistic estimate for Patna.
        </p>
        <p>
          Use the Events contact form:{' '}
          <a href="/contact-event">
            <strong>Contact Events Team</strong>
          </a>
        </p>
      </section>
    </main>
  );
}


