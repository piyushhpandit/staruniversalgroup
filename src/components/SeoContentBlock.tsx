import React, { useMemo, useState } from 'react';
import type { FaqItem } from '../content/faqs';
import type { VerticalSeoCopy } from '../content/seoCopy';

type Props = {
  copy: VerticalSeoCopy;
  faqs: FaqItem[];
  accentColor?: string;
  defaultVisibleFaqs?: number;
  h2Label?: string;
};

export default function SeoContentBlock({
  copy,
  faqs,
  accentColor = 'rgba(255,255,255,0.12)',
  defaultVisibleFaqs = 5,
  h2Label = 'Details & FAQs',
}: Props) {
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = useMemo(() => {
    if (showAll) return faqs;
    return faqs.slice(0, defaultVisibleFaqs);
  }, [faqs, showAll, defaultVisibleFaqs]);

  return (
    <section
      aria-label={h2Label}
      style={{
        maxWidth: 1024,
        margin: '60px auto 0',
        padding: '28px 18px',
        borderRadius: 18,
        background: 'rgba(255, 255, 255, 0.04)',
        border: `1px solid ${accentColor}`,
      }}
    >
      <h2 style={{ fontSize: 28, margin: '0 0 12px 0' }}>{h2Label}</h2>

      <p style={{ margin: '0 0 16px 0', lineHeight: 1.7 }}>{copy.intro}</p>

      {copy.sections.map((s) => (
        <div key={s.heading} style={{ marginTop: 18 }}>
          <h3 style={{ fontSize: 20, margin: '0 0 8px 0' }}>{s.heading}</h3>
          {s.paragraphs.map((p) => (
            <p key={p} style={{ margin: '0 0 10px 0', lineHeight: 1.7 }}>
              {p}
            </p>
          ))}
          {s.bullets && (
            <ul style={{ margin: '0 0 8px 18px', lineHeight: 1.7 }}>
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div style={{ marginTop: 22 }}>
        <h3 style={{ fontSize: 20, margin: '0 0 10px 0' }}>FAQs</h3>
        {visibleFaqs.map((f, idx) => (
          <details key={f.question} open={idx < 2} style={{ marginBottom: 10 }}>
            <summary style={{ cursor: 'pointer', fontWeight: 700, lineHeight: 1.6 }}>{f.question}</summary>
            <p style={{ margin: '8px 0 0 0', lineHeight: 1.7 }}>{f.answer}</p>
          </details>
        ))}

        {!showAll && faqs.length > defaultVisibleFaqs && (
          <button
            type="button"
            onClick={() => setShowAll(true)}
            style={{
              marginTop: 8,
              borderRadius: 12,
              padding: '10px 14px',
              background: 'transparent',
              border: `1px solid ${accentColor}`,
              color: 'inherit',
              cursor: 'pointer',
              fontWeight: 700,
            }}
          >
            Show all FAQs
          </button>
        )}
      </div>

      <div style={{ marginTop: 22 }}>
        <h3 style={{ fontSize: 20, margin: '0 0 8px 0' }}>{copy.cta.heading}</h3>
        {copy.cta.paragraphs.map((p) => (
          <p key={p} style={{ margin: '0 0 10px 0', lineHeight: 1.7 }}>
            {p}
          </p>
        ))}
        <a href={copy.cta.href} style={{ fontWeight: 800, textDecoration: 'underline' }}>
          {copy.cta.label}
        </a>
      </div>
    </section>
  );
}


