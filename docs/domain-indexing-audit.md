# Domain-based SEO indexing protection: blocked on hosting support

Inspected on 2026-11-10 UTC. Scope: this project only.

## Outcome

No runtime, SEO, routing, hosting, or publication settings were changed. Reliable hostname-specific protection cannot be implemented through the currently supported Lovable static hosting controls. This document records the investigation, not an implemented or deployed protection.

The required hosting-layer behavior is to add `X-Robots-Tag: noindex` only when the request hostname is a subdomain of `lovable.app`, `workers.dev`, `pages.dev`, or `netlify.app`, for root and nested routes, while preserving public accessibility. All other hostnames, including current and future official custom domains, must retain normal index-eligible responses. Matching must use DNS label boundaries, not substrings, and response caches must remain isolated by hostname.

## Actual stack and hosting

- React 18, Vite 5, TypeScript, client-side React Router with BrowserRouter.
- `package.json` builds a static Vite site; `vite.config.ts` has development-server configuration, not deployed request middleware.
- No request-time server, edge middleware, or external deployment configuration exists in this repository.
- Lovable hosting supplies SPA fallback and does not process `_headers`, `netlify.toml`, `vercel.json`, or `_redirects` configuration.
- No supported project-level hostname-conditional HTTP response header setting was identified. Adding Vite development headers would not protect real deployments.
- A `Server: cloudflare` response header does not establish access to a Cloudflare Worker or Pages deployment.

## Deployment discovery and real GET responses

Read-only project URL and domain checks confirmed the project is published and has no connected custom domains.

| Address | Observed on all five public page paths | Protection status |
| --- | --- | --- |
| `https://yang-health-therapeutic-clinic-preview.lovable.app` | HTTP 200, no redirect, no X-Robots-Tag and no robots noindex meta tag in returned HTML | Required noindex is absent |
| `https://id-preview--ae5dc140-8286-4e04-9dfb-36143751a7fd.lovable.app` | HTTP 302 to the existing Lovable auth bridge with `X-Robots-Tag: noindex, nofollow` | Hosting already emits noindex, but this preview is not publicly accessible without authentication |

Paths checked: `/`, `/about/`, `/chinese-traditional-medicine/`, `/registered-massage-therapy/`, `/contact-us/`.

Requests used a Googlebot user agent and accepted HTML, with redirects disabled to inspect the actual origin response. These are HTTP-response checks, not a search engine's indexing verdict or browser-rendering checks.

No `workers.dev`, `pages.dev`, or `netlify.app` deployments were discovered through the available project deployment inventory or repository configuration. Their behavior is unverified; do not infer protection on undiscovered deployments. No official custom-domain deployment exists to test.

The preview's auth redirect is pre-existing, was not added by this task, and does not satisfy the requested public-access requirement. Publication and access settings were left unchanged.

## Existing SEO, preserved

- `index.html` contains the clinic title, description, Open Graph, and Twitter metadata, with no global robots noindex and no canonical link.
- `public/robots.txt` allows crawling and was not changed. The published `/robots.txt` returns HTTP 200 with the allow rules.
- No sitemap file exists in source; published `/sitemap.xml` returns HTTP 404. Canonical and sitemap support therefore cannot be described as already complete. No platform-domain sitemap or canonical was introduced in lieu of an unknown official domain.
- `src/App.tsx` retains all five public routes and the existing catch-all route.

## Verification and files

- Existing test: `bunx vitest run src/test/example.test.ts` passed (one test); it does not test indexing protection.
- Preview build diagnostics reported `build OK` at `2026-11-10T08:43:38Z`. No manual production build was run, in accordance with the environment's build restrictions.
- Real published and preview responses were inspected as described above; no new deployment was made.
- Added file: `docs/domain-indexing-audit.md` (this report only).
- Application files inspected and unchanged: `package.json`, `vite.config.ts`, `src/App.tsx`, `index.html`, `public/robots.txt`.

## Blocker and safe next step

Completing the request requires hosting-owner control over per-request response headers on each platform hostname, independently of the official custom domains, plus publicly accessible preview delivery. Those controls are not exposed by this project's supported hosting configuration. A Worker attached only to a separately owned custom domain would not control Lovable-owned URLs and would not solve this requirement.

Once such hosting control is available, apply the hostname-scoped header at the serving layer and verify raw GET responses on roots and nested routes, with both ordinary-browser and crawler user agents, on every platform deployment and at least one official custom domain. Verify custom-domain canonical and sitemap URLs at that time. Until then, do not add global HTML noindex, hostname-independent headers, robots blocking, redirects, authentication, or JavaScript-only substitutes.