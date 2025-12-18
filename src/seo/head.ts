type MetaKey =
  | { kind: 'name'; key: string }
  | { kind: 'property'; key: string }
  | { kind: 'httpEquiv'; key: string };

function metaSelector(metaKey: MetaKey) {
  if (metaKey.kind === 'name') return `meta[name="${metaKey.key}"]`;
  if (metaKey.kind === 'property') return `meta[property="${metaKey.key}"]`;
  return `meta[http-equiv="${metaKey.key}"]`;
}

export function upsertMeta(metaKey: MetaKey, content: string) {
  const selector = metaSelector(metaKey);
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    if (metaKey.kind === 'name') el.setAttribute('name', metaKey.key);
    if (metaKey.kind === 'property') el.setAttribute('property', metaKey.key);
    if (metaKey.kind === 'httpEquiv') el.setAttribute('http-equiv', metaKey.key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function setRobots(robotsValue: string) {
  upsertMeta({ kind: 'name', key: 'robots' }, robotsValue);
}

export function upsertJsonLd(id: string, data: unknown) {
  const scriptId = `jsonld:${id}`;
  let el = document.head.querySelector<HTMLScriptElement>(`script[data-jsonld-id="${scriptId}"]`);
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.setAttribute('data-jsonld-id', scriptId);
    document.head.appendChild(el);
  }
  el.text = JSON.stringify(data);
}


