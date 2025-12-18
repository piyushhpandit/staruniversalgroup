import fs from 'node:fs';
import path from 'node:path';

const SITE_URL = 'https://staruniversalgroup.in';

/**
 * Keep this list aligned with SEO-first routes in `src/App.tsx`.
 * This is deterministic (static) for GitHub Pages hosting.
 */
const ROUTES = [
  '/',
  '/events',
  '/events/bihar',
  '/events/patna',
  '/events/wedding-planner-patna',
  '/travel',
  '/travel/india',
  '/travel/nepal',
  '/india',
  '/nepal',
  '/buddhacircuit',
  '/holidaypackage',
  '/foundation',
  '/aboutus',
  '/eventclients',
  '/eventimages',
  '/donations',
  '/foundationaboutus',
  '/foundationgallery',
];

function xmlEscape(str) {
  return str.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

const now = new Date().toISOString();

const urlsXml = ROUTES.map((p) => {
  const loc = `${SITE_URL}${p}`;
  return `  <url>\n    <loc>${xmlEscape(loc)}</loc>\n    <lastmod>${now}</lastmod>\n  </url>`;
}).join('\n');

const sitemapXml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  `${urlsXml}\n` +
  `</urlset>\n`;

const outPath = path.join(process.cwd(), 'public', 'sitemap.xml');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, sitemapXml, 'utf8');

console.log(`✅ Wrote ${outPath} with ${ROUTES.length} URLs`);


