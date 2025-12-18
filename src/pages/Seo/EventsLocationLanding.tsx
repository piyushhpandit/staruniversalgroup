import { Link } from 'react-router-dom';
import { Seo } from '../../seo/Seo';
import { breadcrumbList } from '../../seo/schema';

type Props = {
  canonicalPath: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  childLinks: Array<{ href: string; label: string }>;
};

export default function EventsLocationLanding(props: Props) {
  return (
    <main style={{ padding: 24, maxWidth: 980, margin: '0 auto' }}>
      <Seo
        title={props.title}
        description={props.description}
        canonicalPath={props.canonicalPath}
        jsonLd={[
          {
            id: 'breadcrumb',
            data: breadcrumbList([
              { name: 'Home', path: '/' },
              { name: 'Events', path: '/events' },
              { name: props.h1, path: props.canonicalPath },
            ]),
          },
        ]}
      />

      <h1 style={{ fontSize: 34, margin: '16px 0 8px' }}>{props.h1}</h1>
      <p style={{ fontSize: 18, margin: 0 }}>{props.intro}</p>

      <section style={{ marginTop: 22 }}>
        <h2>Popular services</h2>
        <ul>
          {props.childLinks.map((l) => (
            <li key={l.href}>
              <Link to={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}


