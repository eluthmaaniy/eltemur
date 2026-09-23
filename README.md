# Eltemur Zentra Studio

Company website for Eltemur Zentra Studio. Next.js App Router, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form

The form validates on the server. It does not send email until you set an endpoint.

1. Copy `.env.example` to `.env.local`.
2. Set `CONTACT_FORM_ENDPOINT` to an HTTPS URL that accepts a JSON POST.
3. Restart the dev server.

The posted JSON includes `to` (`eltemurzentra@gmail.com`), `name`, `email`, `company`, `projectType`, `budget`, `description`, and `source`. If `CONTACT_FORM_ENDPOINT` is empty, the form tells the visitor the message was not sent and points them to the email and WhatsApp links.

`CONTACT_FORM_ENDPOINT` must use `https`. It is read only on the server.

## Production domain

The live site is [https://eltemur.com](https://eltemur.com). That host is the canonical URL for pages, Open Graph, `robots.txt`, `sitemap.xml`, `llms.txt`, and structured data. It is set in `lib/site.ts` and in `NEXT_PUBLIC_SITE_URL`.

`www.eltemur.com` redirects permanently to `https://eltemur.com`. Preview deployments (`VERCEL_ENV=preview`) stay out of the index.

## Search setup

Optional values in `.env.example`:

- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- `NEXT_PUBLIC_BING_SITE_VERIFICATION`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `INDEXNOW_KEY`

After a production deployment, submit changed URLs with `npm run indexnow`. That command refuses localhost and non-https hosts. It is not part of `dev` or `build`.

Public contact details and the CAC registration number live in `businessInfo` in `lib/site.ts`.

Budget labels live in `data/form-options.ts`. They are written in NGN and can be changed.

Project copy lives in `data/projects.ts`.
