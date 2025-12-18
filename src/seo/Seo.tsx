import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE } from './siteConfig';
import { setRobots, upsertJsonLd, upsertLink, upsertMeta } from './head';

export type SeoProps = {
  title: string;
  description: string;
  canonicalPath?: string; // preferred path without query/hash, e.g. "/events/wedding-planner-patna"
  ogImagePath?: string; // absolute path like "/og/events.jpg"
  robots?: string; // e.g. "index,follow" or "noindex,follow"
  jsonLd?: Array<{ id: string; data: unknown }>;
};

function toAbsoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) return pathOrUrl;
  return `${SITE.siteUrl}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`;
}

export function Seo(props: SeoProps) {
  const location = useLocation();

  useEffect(() => {
    const canonicalPath = props.canonicalPath ?? location.pathname;
    const canonicalUrl = toAbsoluteUrl(canonicalPath);
    const ogImageUrl = toAbsoluteUrl(props.ogImagePath ?? SITE.defaultOgImagePath);

    document.title = props.title;

    upsertMeta({ kind: 'name', key: 'description' }, props.description);

    // Canonical
    upsertLink('canonical', canonicalUrl);

    // Open Graph
    upsertMeta({ kind: 'property', key: 'og:site_name' }, SITE.brandName);
    upsertMeta({ kind: 'property', key: 'og:type' }, 'website');
    upsertMeta({ kind: 'property', key: 'og:title' }, props.title);
    upsertMeta({ kind: 'property', key: 'og:description' }, props.description);
    upsertMeta({ kind: 'property', key: 'og:url' }, canonicalUrl);
    upsertMeta({ kind: 'property', key: 'og:image' }, ogImageUrl);

    // Twitter (optional but safe)
    upsertMeta({ kind: 'name', key: 'twitter:card' }, 'summary_large_image');
    upsertMeta({ kind: 'name', key: 'twitter:title' }, props.title);
    upsertMeta({ kind: 'name', key: 'twitter:description' }, props.description);
    upsertMeta({ kind: 'name', key: 'twitter:image' }, ogImageUrl);
    if (SITE.twitterHandle) upsertMeta({ kind: 'name', key: 'twitter:site' }, SITE.twitterHandle);

    // Robots
    setRobots(props.robots ?? 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1');

    // JSON-LD
    props.jsonLd?.forEach((item) => upsertJsonLd(item.id, item.data));
  }, [location.pathname, props]);

  return null;
}


