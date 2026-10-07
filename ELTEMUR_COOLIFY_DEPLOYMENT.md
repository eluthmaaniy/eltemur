# Eltemur Zentra Studio — Coolify deployment

Frontend-only production deployment for the Eltemur Zentra Studio website on the existing Coolify VPS.

This is a new application. It does not migrate a Vercel, Lovable, or Supabase project, and it does not share a database, Docker network, or Coolify project with any other site.

Do not create the Coolify application, change DNS, attach the live domain, or press Deploy until the local checks in this file have passed and the values in the last section are filled in.

## 1. Purpose and project scope

Publish the company website as one Coolify application:

- Public marketing pages, service pages, project pages, insights, and contact
- SEO metadata, structured data, sitemap, `robots.txt`, `llms.txt`, canonical URLs, and Open Graph images
- The contact form, which validates on the server and optionally POSTs to an HTTPS endpoint you supply later

This version has no private backend. Do not add PostgreSQL, MySQL, Redis, Supabase, a CMS, authentication, storage volumes, or backups for this application.

A later blog, project manager, or API can be a second Coolify resource. This frontend stays the public site.

## 2. Current architecture

| Item | Value |
|---|---|
| Framework | Next.js 16.3.6, App Router, React 19.2.8, TypeScript |
| Package manager | npm (`package-lock.json`) |
| Node.js | 20.9.0 or newer. The image uses `node:22-alpine` |
| Install | `npm ci` |
| Production build | `npm run build` |
| Production start | `node server.js` inside the standalone image |
| Listen address | `0.0.0.0:3000` |
| Generated server | `.next/standalone` (not a static `out/` or `dist/` folder) |
| Public files | `public/brand/logo-horizontal.png`, `public/brand/mark.png` |
| Canonical origin | `https://eltemur.com` |
| `www` host | Permanent redirect to `https://eltemur.com` |
| Contact delivery | Optional `CONTACT_FORM_ENDPOINT`. Empty means the form does not send and shows the email and WhatsApp links |
| Database | None |

Routes that must keep working:

- `/`
- `/services` and `/services/[slug]`
- `/work` and `/work/[slug]`
- `/about`
- `/contact`
- `/insights` and `/insights/[slug]`
- `/robots.txt`
- `/sitemap.xml`
- `/llms.txt` and `/llms-full.txt`
- `/api/health`
- The App Router 404 page

Server behaviour that a static file host would drop:

- Contact server action in `app/actions/contact.ts`
- `www.eltemur.com` host redirect in `next.config.ts`
- IndexNow key rewrite and `app/api/indexnow-key/route.ts`
- `next/image` optimisation used by the logo
- Open Graph and Twitter image routes

There is no `middleware.ts`. Pages are generated from local data files. Sitemap and robots are produced by the Next.js server from `app/sitemap.ts` and `app/robots.ts`.

`NEXT_PUBLIC_SITE_URL` is read in `lib/site.ts`. If it is missing or not a valid `http`/`https` URL, the site uses `https://eltemur.com`. `www.eltemur.com` is normalised to that apex. `indexingEnabled` is true only for an `https` origin, and it stays false when `VERCEL_ENV=preview`. Coolify does not set `VERCEL_ENV`, so the live `https://eltemur.com` build is indexed.

## 3. Why the selected deployment method was chosen

**Method: one Dockerfile, Next.js `output: "standalone"`.**

Not a static site. Static export cannot run the contact server action, the host redirect, the IndexNow route, or the image optimiser.

Not Nixpacks. This VPS has already shown Nixpacks pinning Node.js 22 to 22.11.0. Next.js is built here on the current Node 22 Alpine image instead of that frozen toolchain.

Not Docker Compose. One frontend container does not need a compose stack, a database service, or a shared network.

The image has three stages:

1. `deps` — `npm ci` from the lockfile
2. `builder` — `npm run build` with the public build arguments
3. `runner` — only the standalone server, `public/`, and `.next/static`, running as the unprivileged `nextjs` user

Coolify’s proxy sends public HTTPS traffic to container port **3000**. Do not use port 80. Port 80 is for the static Nginx sites on this VPS, and this application is not one of them.

## 4. Requirements before deployment

- The existing Coolify server, already installed on the VPS
- GitHub repository `https://github.com/eluthmaaniy/eltemur.git` with branch `main` pushed. This clone currently has no commits, so Coolify cannot build it until that push exists
- DNS access for `eltemur.com`
- The VPS public IPv4 address, read from Coolify → Servers. Write it down as `YOUR_COOLIFY_VPS_IPV4`
- Coolify environment values from section 19

Local tools used to verify this repository: Node.js 20.9 or newer, npm, and Docker.

## 5. Files added or changed for deployment

| File | Role |
|---|---|
| `Dockerfile` | Multi-stage standalone image |
| `.dockerignore` | Keeps dependencies, `.next`, git metadata, and env files out of the build context |
| `next.config.ts` | `output: "standalone"`, and traces `sharp` into the image for `next/image` |
| `app/api/health/route.ts` | Public health response |
| `.env.example` | Names and safe examples only |

`.gitignore` already ignores `node_modules`, `.next`, and `.env*` except `.env.example`. Do not commit `.env.local`.

No compose file, Nixpacks file, database, or volume was added.

## 6. Local production-build verification

From the repository root:

```bash
npm ci
npm run lint
npx tsc --noEmit
npm run build
```

`npm run build` must finish with a Next.js standalone server. Then copy the assets the standalone server does not include by itself and start it:

```powershell
New-Item -ItemType Directory -Force .next\standalone\public, .next\standalone\.next | Out-Null
Copy-Item -Recurse -Force public\* .next\standalone\public\
Copy-Item -Recurse -Force .next\static .next\standalone\.next\static
$env:NODE_ENV = "production"
$env:HOSTNAME = "0.0.0.0"
$env:PORT = "3000"
node .next\standalone\server.js
```

In a second terminal:

```powershell
Invoke-WebRequest http://127.0.0.1:3000/api/health
Invoke-WebRequest http://127.0.0.1:3000/
Invoke-WebRequest http://127.0.0.1:3000/services
Invoke-WebRequest http://127.0.0.1:3000/services/saas-development
Invoke-WebRequest http://127.0.0.1:3000/work
Invoke-WebRequest http://127.0.0.1:3000/work/scoutier
Invoke-WebRequest http://127.0.0.1:3000/about
Invoke-WebRequest http://127.0.0.1:3000/contact
Invoke-WebRequest http://127.0.0.1:3000/insights
Invoke-WebRequest http://127.0.0.1:3000/insights/website-or-web-application
Invoke-WebRequest http://127.0.0.1:3000/robots.txt
Invoke-WebRequest http://127.0.0.1:3000/sitemap.xml
Invoke-WebRequest http://127.0.0.1:3000/llms.txt
Invoke-WebRequest http://127.0.0.1:3000/brand/mark.png
Invoke-WebRequest http://127.0.0.1:3000/brand/logo-horizontal.png
Invoke-WebRequest http://127.0.0.1:3000/this-page-does-not-exist
```

Expect `200` on every URL except `/this-page-does-not-exist`, which must be `404` and include “Page not found”.

Health body:

```json
{"status":"ok","service":"eltemur-zentra-studio"}
```

Homepage HTML must contain `https://eltemur.com` and must not contain `http://localhost` or `vercel.app`.

Container check, after the local server is stopped:

```powershell
docker build -t eltemur-zentra-studio .
docker run -d --name eltemur-deploy-check -p 3001:3000 eltemur-zentra-studio
```

Request `http://127.0.0.1:3001/api/health`, then:

```powershell
docker restart eltemur-deploy-check
```

Health must return `200` again. Then remove the test container:

```powershell
docker rm -f eltemur-deploy-check
```

## 7. Git repository preparation

Remote: `https://github.com/eluthmaaniy/eltemur.git`

Branch Coolify should watch: `main`

Commit the application and the deployment files. Do not commit `.env.local`, `node_modules`, or `.next`.

Confirm before the first Coolify deploy:

```bash
git status
git ls-files | findstr /I "env"
```

`.env.example` may be listed. `.env.local` must not be listed.

Push:

```bash
git push -u origin main
```

Coolify deploys the pushed commit. A local-only commit is not enough.

## 8. Creating the project in Coolify

Panel: `https://coolify.uipostutme.com` (Coolify v4.3.23). This is the existing panel. Eltemur is its own project inside it.

1. **Projects → + New**.
2. Name the project `Eltemur Zentra Studio`.
3. Open the `production` environment.
4. Confirm **0 resources** before adding anything.

Done on 2026-09-23. The breadcrumb is **Root Team / Eltemur / production**. Do not add this site inside another product’s project. Do not add a database service.

## 9. Connecting the GitHub repository

The GitHub App already attached to this Coolify instance is named `coolify-eltemur`. The repository picker says “Search repositories available through coolify-eltemur.”

`eluthmaaniy/eltemur` was already visible on 2026-09-23. No second GitHub App was added.

If a future repo is missing from that list: GitHub → the `coolify-eltemur` App → **Repository access → Only select repositories** → add that repo. Do not switch the App to all repositories unless you intend that for every repo on the account.

## 10. Selecting the correct branch

On **Eltemur / production**, **+ New** opens **Choose repository**.

| Field on that screen | Value used |
|---|---|
| Repository | `eluthmaaniy/eltemur` |
| Branch | `main` |
| Base directory | `/` |

The repository field has a **Load Repository** button. It was not required once `eluthmaaniy/eltemur` was already selected.

## 11. Selecting the correct build pack

On the same screen, Coolify v4.3.23 defaults **Build pack** to **Railpack**. Change it before **Continue**.

| Field | Value used |
|---|---|
| Build pack | **Dockerfile** |
| Output type | **Web application** |
| Port | `3000` (this field appears for Web application) |
| Base directory | `/` |

Do not select Railpack, Nixpacks, Static, Docker Compose, or **Output type → Static site**.

After **Continue**, the application **General** page showed:

| General field | Confirmed value |
|---|---|
| Build pack | Dockerfile |
| Base directory | `/` |
| Dockerfile location | `/Dockerfile` |
| Ports exposed | `3000` |
| Port mappings | `3000:3000` |
| Docker network | `coolify` (the proxy network; leave it) |
| Watch paths | Empty. The grey text `src/pages/**` is a placeholder, not a saved path |

The generated application name in the breadcrumb is `eltemur:main-xnmdxvmbiq6yxjg3csdbxjyg`. The status stays **Exited** until the first deploy. There is no install, build, or start command to fill in. The Dockerfile runs those.

## 12. Build command

Coolify command field: **empty**.

The image runs:

```bash
npm ci
npm run build
```

`npm run build` is `next build`. With `output: "standalone"`, the build writes `.next/standalone/server.js`.

Build arguments the Dockerfile accepts:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- `NEXT_PUBLIC_BING_SITE_VERIFICATION`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `INDEXNOW_KEY`

Mark those five **Available at Buildtime** in Coolify, or Docker will not pass them into `npm run build`.

## 13. Start command

Coolify start command field: **empty**.

The image command is:

```bash
node server.js
```

Working directory inside the container is `/app`. `NODE_ENV=production`, `PORT=3000`, and `HOSTNAME=0.0.0.0` are set in the image.

Do not set the start command to `npm start` or `next start`. Those expect a full `node_modules` install, which the runtime image does not contain.

## 14. Publish directory, when applicable

Not applicable. Leave the publish directory empty.

This application is not served from `dist`, `out`, or `public`.

## 15. Application port

**3000**

Set the application port to `3000` before the first deploy. The domain record in the next section must use the same port.

`EXPOSE 3000` in the Dockerfile matches this. The process binds `0.0.0.0`, so Coolify’s proxy on the VPS can reach it.

## 16. Domain configuration

Add the domain in Coolify **before** changing public DNS, so the proxy already has the hostname.

1. Open the Eltemur application → **Domains → + Add**.
2. Protocol: `https`
3. Host: `eltemur.com`
4. Port: `3000`
5. Path: empty

Coolify may add `www.eltemur.com` automatically. If that hostname does not yet have an A record to this VPS, **delete the `www` domain card** before the certificate request. A `www` name that points somewhere else can make the apex certificate fail.

After the apex certificate is valid:

1. Create the `www` DNS record (section 17).
2. Add `https://www.eltemur.com`, port `3000`, empty path.
3. **Actions → Restart** the application so the proxy loads the hostname. Restart applies the domain. It does not rebuild.

`next.config.ts` permanently redirects `www.eltemur.com` to `https://eltemur.com`.

Do not attach this hostname to another application’s domain list.

## 17. DNS configuration

`eltemur.com` DNS is on **Cloudflare**. Do not open Cloudflare until the Coolify domain card exists and the first deploy is healthy.

Read the IPv4 address from Coolify → **Servers**. That value is `YOUR_COOLIFY_VPS_IPV4`.

In the Cloudflare DNS table for `eltemur.com`:

| Type | Name | Value | Proxy |
|---|---|---|---|
| A | `@` (apex `eltemur.com`) | `YOUR_COOLIFY_VPS_IPV4` | DNS only, if the DNS host offers a proxy |
| A | `www` | `YOUR_COOLIFY_VPS_IPV4` | DNS only. Add this only after the apex certificate works |

Leave mail records alone: MX, SPF, DKIM, and DMARC.

The Cloudflare proxy for the new A record must stay **DNS only** (grey cloud) while Let’s Encrypt uses HTTP-01. An orange-cloud proxy answers the challenge from Cloudflare and the certificate stays invalid. After the padlock works, the grey cloud can stay; do not turn the apex orange as part of this setup.

TTL can stay on Auto.

There is no previous website host to preserve. Do not point `eltemur.com` at another project on the VPS.

## 18. SSL configuration

Coolify requests the certificate when the domain is `https` and the A record reaches this VPS.

1. Domain card: `https`, host `eltemur.com`, port `3000`, path empty.
2. Save.
3. If the UI shows **Changes pending**, **Actions → Restart**. Do not press Stop.
4. Wait one to two minutes.
5. Open `https://eltemur.com` and confirm the padlock.

Immediately after the A record changes, the browser may show `NET::ERR_CERT_AUTHORITY_INVALID`. That is the temporary certificate while Let’s Encrypt runs. Do not continue past the warning. Wait, then reload.

If it stays invalid:

- Domain is `https`, port `3000`, path empty
- Apex A record is `YOUR_COOLIFY_VPS_IPV4`, DNS only
- `www` is not on the domain list until its A record exists
- **Check All DNS** on that domain, or Restart the application

Add `www` only after the apex padlock works, then Restart again.

## 19. Required environment variables

Open the application → left sidebar → **Environment Variables**.

On Coolify v4.3.23 leave these two controls as they first appear:

| Control | Keep |
|---|---|
| Environment variable order | **Creation order** |
| Build secrets | **Standard build arguments** |

**Docker BuildKit secrets** does not fill the `ARG` lines in the Dockerfile. The site URL would fall back inside the image instead of using the Coolify value.

Enter variables with **+ Add**. Never put the values in Git, the Dockerfile, or this file.

| Name | Required | Buildtime | Runtime | Value |
|---|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | Yes | Yes | `https://eltemur.com` |
| `CONTACT_FORM_ENDPOINT` | No | No | Yes | Empty until an HTTPS receiver exists. Example shape: `https://example.com/hooks/eltemur-contact` |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | No | Yes | Yes | Search Console meta `content` value only |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | No | Yes | Yes | Bing `msvalidate.01` content value only |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | Yes | Yes | `G-XXXXXXXX` or empty |
| `INDEXNOW_KEY` | No | Yes | Yes | 8–128 letters, numbers, or hyphens, or empty |

`NEXT_PUBLIC_*` values are compiled into the site during `npm run build`. Changing one requires **Redeploy**, not only Restart.

`CONTACT_FORM_ENDPOINT` is read when the form is submitted. Changing it requires **Restart** (or Redeploy). The endpoint must be `https`. Any other scheme is rejected and the visitor is sent to email and WhatsApp. The posted JSON is:

```json
{
  "to": "eltemurzentra@gmail.com",
  "name": "string",
  "email": "string",
  "company": "string",
  "projectType": "string",
  "budget": "string",
  "description": "string",
  "source": "eltemur-zentra-studio-website"
}
```

`INDEXNOW_KEY` is not secret, but it is still entered in Coolify rather than committed. When it is present at build time, `/{INDEXNOW_KEY}.txt` rewrites to the key route. After a production deploy you may run `npm run indexnow` from a machine that has the same `NEXT_PUBLIC_SITE_URL` and `INDEXNOW_KEY`. That script refuses localhost and non-https hosts. It is not part of `npm run build`.

Do not set `VERCEL_ENV`. Do not add database URLs.

## 20. Health-check configuration

The container also has a Docker `HEALTHCHECK`. Configure the same path in Coolify so a failed process is restarted.

On this Coolify version the page is the left sidebar item **Healthcheck**, not a separate URL. Confirmed fields on 2026-09-23:

| Field | Value |
|---|---|
| Check type | HTTP request |
| Method | GET |
| Scheme | HTTP |
| Host | `localhost` |
| Port | `3000` |
| Path | `/api/health` |
| Expected code | `200` |
| Expected response text | Leave empty |
| Interval | 30 seconds |
| Timeout | 5 seconds |
| Retries | 3 |
| Start period | 20 seconds |

The path must use forward slashes and start with `/`. `\api\health\` is rejected with “The health check path field format is invalid.”

Leave **Expected response text** empty. The body is JSON, `{"status":"ok","service":"eltemur-zentra-studio"}`. A required text of `OK` does not match that body.

Save with the purple **Enable** button. The route does not return environment variables, versions, or host details. `robots.txt` disallows `/api/`, so this path is not an indexed page.

Successful body:

```json
{"status":"ok","service":"eltemur-zentra-studio"}
```

The route does not return environment variables, versions, or host details. `robots.txt` disallows `/api/`, so this path is not an indexed page.

## 21. First deployment procedure

1. Finish sections 6 and 7. `main` must be on GitHub.
2. Create the empty Coolify project (section 8).
3. Allow the GitHub App to read `eluthmaaniy/eltemur` (section 9).
4. Create the resource from branch `main` with build pack **Dockerfile** (sections 10–15).
5. Enter the environment variables and mark build-time values (section 19).
6. Set the health check (section 20).
7. Set resource limits (section 27) before deploy if the form is on the same screen. Do not set memory below 512 MB.
8. **Deploy**. Watch the deployment log until the status is healthy.
9. Add `https://eltemur.com` on port `3000` (section 16).
10. Create the apex A record (section 17).
11. Wait for the certificate (section 18).
12. Run section 22, then section 23.

Auto Deploy can stay on after the first successful deploy. A later push to `main` builds this application only.

## 22. Post-deployment verification

On `https://eltemur.com`:

- `/api/health` returns the JSON in section 20
- `/` loads, including the header mark and the horizontal logo
- `/services`, `/services/saas-development`
- `/work`, `/work/scoutier`
- `/about`
- `/contact` shows the form, the email address, and the WhatsApp link
- Submit the form once. With an empty `CONTACT_FORM_ENDPOINT`, the message must say it was not sent and point to email or WhatsApp. With an endpoint set, the receiver must show the JSON from section 19
- `/insights`, `/insights/website-or-web-application`
- `/robots.txt`, `/sitemap.xml`, `/llms.txt`
- `/this-page-does-not-exist` returns the “Page not found” page
- `https://www.eltemur.com` redirects to `https://eltemur.com` after `www` is added

In the browser network panel, page requests stay on `eltemur.com`. Nothing should call another project’s API.

## 23. SEO verification after deployment

View source or the document response for `/`:

- `<link rel="canonical"` uses `https://eltemur.com`
- `og:url` and the Open Graph image URL use `https://eltemur.com`
- JSON-LD `url` values use `https://eltemur.com`
- No `localhost`, `127.0.0.1`, or `vercel.app`

Then:

- `/robots.txt` allows `/` and lists `Sitemap: https://eltemur.com/sitemap.xml`
- `/sitemap.xml` lists the public pages on `https://eltemur.com` and does not list `/api/health`
- `/llms.txt` describes the same host
- `/opengraph-image` returns an image

Search Console and Bing stay empty until you paste the verification tokens and **Redeploy**. After that, the homepage should include the verification meta tags. Submit the sitemap in Search Console when the property is verified.

IndexNow stays off until `INDEXNOW_KEY` is set and you Redeploy. Then `https://eltemur.com/{INDEXNOW_KEY}.txt` must return the key as plain text.

## 24. Updating and redeploying the website

Content and code: commit, push `main`. With Auto Deploy on, Coolify builds that commit. You do not create a new application.

| Change | Action |
|---|---|
| Page copy, components, routes | Push `main` (Redeploy) |
| `NEXT_PUBLIC_*` or `INDEXNOW_KEY` | Edit the Coolify variable, then **Redeploy** |
| `CONTACT_FORM_ENDPOINT` only | Edit the variable, then **Restart** |
| Domain added or edited | **Restart**, not a rebuild |
| Dockerfile or `next.config.ts` | Push `main` |

**Redeploy** runs the Dockerfile again. **Restart** only restarts the current container. Restart does not pick up a new image or a new `NEXT_PUBLIC_*` value.

Do not press **Stop** to publish a domain or an environment change. Stop removes the running process until you start it again.

## 25. Rollback procedure

1. Open the Eltemur application → **Deployments**.
2. Select the last known-good deployment.
3. Use **Rollback** (wording can also appear as redeploying that deployment).
4. Wait until `/api/health` returns `200`.
5. Repeat the homepage and `/contact` checks.

Rollback returns the previous image. It does not change DNS and it does not restore another product.

If the bad release is already the only deployment, fix forward: revert the Git commit, push `main`, and let Coolify build that commit.

If the certificate or DNS change is the failure, restore the previous A record at the DNS host. This site has no older public host on record.

Do not delete the Coolify project, the GitHub repository, or the VPS while rolling back.

## 26. Logs and troubleshooting

Two logs matter:

- **Deployment log** — `npm ci` and `npm run build`
- **Application log** — `node server.js` after the container starts

| What you see | What to do |
|---|---|
| Build pack is Nixpacks, or the log mentions `nixpacks` | Change the build pack to **Dockerfile** and Deploy again. Do not keep retrying Nixpacks |
| Log says it is publishing a static directory or port 80 | Turn static site off. Set port `3000`. Clear any publish directory |
| `npm ci` fails on a lockfile mismatch | Commit an updated `package-lock.json` from `npm install` and push |
| Build runs out of memory | This is build-time RAM on the VPS. A 512 MB **runtime** limit is not the build limit. Free RAM on the server or build when other deploys are idle. Do not drop the runtime limit to make the build “smaller” |
| Container exits as soon as it starts | Start command must stay empty. `HOSTNAME` must remain `0.0.0.0` |
| Healthy locally, unhealthy in Coolify | Health path `/api/health`, port `3000`, scheme `http`, status `200` |
| Site loads on the VPS IP but the domain does not | Domain card missing, or DNS still points elsewhere |
| Certificate invalid after several minutes | Apex A record, grey-cloud / DNS only, port `3000`, no premature `www` card. Restart. Do not bypass the browser warning |
| Canonical URL is wrong | `NEXT_PUBLIC_SITE_URL` was empty or wrong **at build time**. Set `https://eltemur.com` and Redeploy |
| Contact always says it was not sent | `CONTACT_FORM_ENDPOINT` is empty or not `https`. That is the current safe behaviour until you set an endpoint and Restart |
| Logo or `/brand/*.png` 404 | The image was built without the `public` copy. Use this `Dockerfile`; do not switch the start command to `next start` |
| Pages call another site’s API | This app should not have another project’s URL or network attached. Remove that variable and Redeploy |

`robots.txt` disallowing `/api/` does not block the Coolify health check.

## 27. Resource monitoring

This site shares the VPS. Limits below are for the **running** container. The Docker build needs more RAM than the running site and should keep using the server’s normal build capacity.

| Setting | Coolify field | Starting value |
|---|---|---|
| Runtime memory limit | Memory limit | `512m` |
| Runtime memory plus swap | Memory and swap limit | `512m` |
| Runtime memory reservation | Memory reservation | `256m` |
| Runtime CPUs | CPU limit | `1` |
| CPU set | CPU set | Leave empty. Grey `0-2` is a placeholder |
| CPU weight | CPU weight | Leave empty. Grey `1024` is a placeholder |
| Swappiness | Swappiness | Leave empty. Grey `60` is a placeholder |
| Restart policy | Coolify default unless-stopped | unchanged |
| Health interval | Healthcheck interval | 30 seconds |
| Deployment retention | Deployments list | Keep at least 2 successful deployments so rollback exists |
| Log retention | Server log settings | Coolify’s existing server default. Do not ship logs to another project |

Idle Node usage for this site is well under 512 MB. If the application is OOM-killed while generating images, raise the runtime limit to 768 MB. Do not start below 512 MB.

Watch memory and restarts on the Eltemur application and on **Servers**. A restart loop with a failing health check usually means a bad release, not a need for more infrastructure.

Do not attach this container to another application’s Docker network.

## 28. Future backend expansion

Keep this Coolify application as the public website.

When a backend is actually needed:

1. Add a **new resource** in this same Coolify project, or in a new project if that service should be isolated.
2. Give that service its own domain or internal hostname.
3. Set this site’s `CONTACT_FORM_ENDPOINT` to that service’s `https` URL and Restart.
4. Redeploy this site only when the public URL or the Next.js app changes.

Do not add a database to this Dockerfile. Do not mount a volume on this container. Do not point this site at another product’s database.

## 29. Deployment checklist

- [ ] `npm ci`, `npm run lint`, `npx tsc --noEmit`, and `npm run build` succeed
- [ ] Local `node .next/standalone/server.js` serves `/api/health`, the main routes, robots, sitemap, llms, logos, and a 404
- [ ] Canonical URLs use `https://eltemur.com`
- [ ] `docker build` and a restarted container return `/api/health` 200
- [ ] `.env.local` is not in Git
- [x] `main` is pushed to `https://github.com/eluthmaaniy/eltemur.git` (`091407f`, 2026-09-23)
- [x] Coolify project **Eltemur** / `production` exists and does not contain another product’s database
- [x] Resource uses build pack **Dockerfile**, output **Web application**, port **3000**
- [x] Install, build, start, and publish directory were left empty
- [x] `NEXT_PUBLIC_SITE_URL=https://eltemur.com` is saved with buildtime and runtime enabled (2026-09-23)
- [x] Healthcheck enabled and saved (2026-09-23). Path `/api/health`, or `/` if Coolify rejected the longer path
- [x] Runtime memory limit is `512m`, reservation `256m`, swap `512m`, CPU limit `1`
- [x] First Deploy is healthy (2026-09-23, commit `091407f`, about 2 minutes). Container status **Running**
- [x] Apex A record is `eltemur.com` → `147.93.85.240`, Cloudflare proxy **DNS only**, TTL Auto (2026-09-23). No `www` record yet. No mail records exist on this zone
- [ ] Certificate is valid before `www` is added
- [ ] Section 22 and section 23 pass on the public URL

## 30. Values I must provide manually

The repository already fixes these and they are not placeholders:

- Production origin: `https://eltemur.com`
- `www` redirect target: `https://eltemur.com`
- GitHub remote: `https://github.com/eluthmaaniy/eltemur.git`
- Branch: `main`
- Container port: `3000`
- Health path: `/api/health`

Still required before the live Coolify deploy:

| Placeholder | Where it goes | Notes |
|---|---|---|
| `YOUR_COOLIFY_VPS_IPV4` | DNS A records | Copy from Coolify → Servers. Do not guess it from another project’s notes |
| DNS host login for `eltemur.com` | Cloudflare | Confirmed 2026-09-23. Create the A records only after the first deploy is healthy. Leave MX, SPF, DKIM, and DMARC unchanged |
| Coolify server | Already the server behind `coolify.uipostutme.com` | The resource was created on that instance |
| `CONTACT_FORM_ENDPOINT` | Coolify runtime env | Leave empty to keep the current “message was not sent” behaviour |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Coolify build and runtime | Empty until Search Console gives you the token |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Coolify build and runtime | Empty until Bing gives you the token |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Coolify build and runtime | Empty until you have a `G-` measurement id |
| `INDEXNOW_KEY` | Coolify build and runtime | Empty until you choose a public IndexNow key |

`NEXT_PUBLIC_SITE_URL` is known (`https://eltemur.com`) but you still type it into Coolify and mark it available at build time. An empty value falls back to that same origin; set it explicitly so the production build is not depending on the fallback.

## Session log

Append a row when a Coolify screen is confirmed. Do not paste secret values.

| When | Screen | Outcome |
|---|---|---|
| 2026-09-23 | GitHub `eluthmaaniy/eltemur` | `main` pushed, commit `091407f`. `.env.local` stayed untracked |
| 2026-09-23 | Coolify project | **Eltemur / production** created on `https://coolify.uipostutme.com` (v4.3.23) |
| 2026-09-23 | Domain owner | `eltemur.com` DNS is Cloudflare. DNS not changed |
| 2026-09-23 | Choose repository | `eluthmaaniy/eltemur`, branch `main`, base `/`. Build pack changed from the default **Railpack** to **Dockerfile**. Output type **Web application**. Port `3000` |
| 2026-09-23 | Application General | Dockerfile location `/Dockerfile`, ports `3000`, mapping `3000:3000`, network `coolify`. Watch paths left empty (`src/pages/**` is only placeholder text). Status **Exited**, no container yet. Application id in the breadcrumb: `eltemur:main-xnmdxvmbiq6yxjg3csdbxjyg` |
| 2026-09-23 | Environment Variables | Order **Creation order**. Build secrets **Standard build arguments**. Saved `NEXT_PUBLIC_SITE_URL=https://eltemur.com` with buildtime and runtime on. No other variables added |
| 2026-09-23 | Healthcheck | Page is left sidebar **Healthcheck**. Check type **HTTP request**, method **GET**, scheme **HTTP**, host `localhost`, port `3000`, expected code `200`. Path must be forward slashes (`/api/health`). Backslashes produce “The health check path field format is invalid.” Expected response text stays empty; grey `OK` is a placeholder. Enabled and saved |
| 2026-09-23 | General → CPU and Memory | Confirmed values: CPU limit `1`, memory reservation `256m`, memory limit `512m`, memory and swap limit `512m`. CPU set, CPU weight, and Swappiness stay empty when the text is only a placeholder (`0-2`, `1024`, `60`) |
| 2026-09-23 | First deploy | **Actions → Deploy**. Status **Running**. Deployment history: **Success**, source Manual, commit `091407f`, duration `02m 02s`, server `localhost`. Log: image built, custom Dockerfile healthcheck found, attempt 1 of 3 healthy, return code 0, rolling update completed |
| 2026-09-23 | Domains | User saved the domain card for `eltemur.com`. VPS IPv4 shown by Coolify on this application is `147.93.85.240` (the `sslip.io` preview host) |
| 2026-09-23 | Cloudflare DNS | One A record: name `eltemur.com`, content `147.93.85.240`, proxy **DNS only**, TTL Auto. Cloudflare’s “add www” and “add MX” recommendations were left alone. Zone has no other records |
| 2026-09-23 | Browser NXDOMAIN | Coolify Domains shows `https://eltemur.com` as **DNS matches**, port `3000`. After **Restart**, `https://eltemur.com/api/health` returns `200` with a trusted certificate when the request uses `147.93.85.240`. Mobile phones open the site. This PC’s router DNS (`fd64:6831:f99c:8::1`) still returns the name with no address, so this PC’s browser shows `DNS_PROBE_FINISHED_NXDOMAIN`. `1.1.1.1` returns `147.93.85.240` |

The live site is up. This computer needs a DNS resolver that already has the record, or time for the router cache to expire. Do not change the Cloudflare A record. Do not push a documentation commit until you choose to, because a push to `main` can start another build.
