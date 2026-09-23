/**
 * Submit canonical URLs to IndexNow after a production deployment.
 * Do not run this during local development. It refuses localhost and non-https hosts.
 *
 * Required environment:
 *   NEXT_PUBLIC_SITE_URL=https://eltemur.com
 *   INDEXNOW_KEY=your-public-indexnow-key
 */

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://eltemur.com").replace(/\/$/, "");
const key = process.env.INDEXNOW_KEY?.trim() ?? "";

function fail(message) {
  console.error(message);
  process.exit(1);
}

if (!siteUrl || !key) {
  fail("Set NEXT_PUBLIC_SITE_URL and INDEXNOW_KEY before submitting to IndexNow.");
}

let url;
try {
  url = new URL(siteUrl);
} catch {
  fail("NEXT_PUBLIC_SITE_URL is not a valid URL.");
}

if (url.protocol !== "https:") {
  fail("IndexNow submission is limited to the https production host.");
}

if (url.hostname === "localhost" || url.hostname === "127.0.0.1") {
  fail("Refusing to submit IndexNow from a local host.");
}

if (!/^[A-Za-z0-9-]{8,128}$/.test(key)) {
  fail("INDEXNOW_KEY must be 8 to 128 letters, numbers, or hyphens.");
}

const sitemapUrl = `${url.origin}/sitemap.xml`;
const response = await fetch(sitemapUrl);
if (!response.ok) {
  fail(`Could not read ${sitemapUrl} (${response.status}).`);
}

const xml = await response.text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
const hostUrls = urls.filter((entry) => {
  try {
    return new URL(entry).origin === url.origin;
  } catch {
    return false;
  }
});

if (hostUrls.length === 0) {
  fail("The sitemap did not contain URLs for the production host.");
}

const payload = {
  host: url.hostname,
  key,
  keyLocation: `${url.origin}/${key}.txt`,
  urlList: hostUrls,
};

const submit = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

if (!submit.ok) {
  const body = await submit.text();
  fail(`IndexNow responded ${submit.status}: ${body}`);
}

console.log(`Submitted ${hostUrls.length} URLs for ${url.hostname}.`);
