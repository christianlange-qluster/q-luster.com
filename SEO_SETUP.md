# SEO Setup — Action Checklist

Goal: rank #1 on Google for **"QLuster Photonics"** (the company's own name) within 2–4 weeks. This handles the branded-search problem only — competitive terms like "quantum networking" need a separate paid/PR strategy.

This file is the source of truth for SEO setup tasks. Some are already done in the codebase; the rest must be done in external accounts (Google, LinkedIn, etc.). Where the user can hand a task to Claude Cowork, instructions are self-contained.

---

## 1. Done in code (already shipped — no action needed)

- `app/sitemap.ts` — generates `/sitemap.xml` listing the homepage.
- `app/robots.ts` — generates `/robots.txt` allowing all crawlers and pointing at the sitemap.
- Rich page metadata (title, description, keywords, OG image, Twitter card) is already in `app/layout.tsx`.

Verify after the next deploy by visiting:
- https://q-luster.com/robots.txt
- https://q-luster.com/sitemap.xml

---

## 2. Submit to Google Search Console

**Why:** Tells Google the site exists and to crawl it. Without this, indexing can take weeks.

**Who needs to do this:** The person whose Google account will own the SEO data (you, the user). Cowork can drive the browser, but the verification needs to happen under *your* logged-in Google session.

### Steps for Cowork (or manual)

1. Open https://search.google.com/search-console in Chrome (signed in to user's primary Google account).
2. Click **"Add property"** → choose **"URL prefix"** → enter `https://q-luster.com` → click Continue.
3. Verification: choose **"HTML tag"** method. Google will give a meta tag that looks like:
   ```html
   <meta name="google-site-verification" content="ABC123..." />
   ```
4. Copy the `content="..."` value. **Stop and report it back to the user** — it needs to be added to `app/layout.tsx` inside the `metadata` export as:
   ```ts
   verification: { google: "ABC123..." },
   ```
   Then user must `git push` and wait ~1 minute for Vercel to redeploy before clicking "Verify" in Search Console.
5. After verification succeeds: in Search Console, go to **Sitemaps** (left nav) → submit `https://q-luster.com/sitemap.xml`.
6. Optional: under **URL inspection**, paste `https://q-luster.com` and click "Request indexing" to nudge Google to crawl immediately.

### Also do: Bing Webmaster Tools

Same idea, smaller share, but free:
1. Open https://www.bing.com/webmasters → sign in with a Microsoft account.
2. Add site `https://q-luster.com`.
3. Easiest path: use **"Import from Google Search Console"** — Bing pulls verification automatically.
4. Submit the sitemap.

---

## 3. Directory Listings (backlinks + authoritative mentions)

**Why:** Each listing is a backlink pointing at q-luster.com from a domain Google trusts. Three or four good listings make a noticeable difference for branded search.

### Canonical company info to use everywhere (keep consistent — Google notices)

| Field | Value |
|---|---|
| Company name | QLuster Photonics |
| Short name | QLuster |
| Tagline | Scalable quantum interconnects |
| Website | https://q-luster.com |
| Description (short) | Atom-compatible, chip-integrated single-photon emitters for quantum networking and distributed quantum computing. |
| Description (long) | QLuster Photonics engineers single-photon sources for 1000× faster quantum data transfer. Our chip-integrated, atom-compatible emitters produce deterministic, narrowband photons matched to the rubidium D₂ transition — the missing interconnect for scalable quantum networks, distributed quantum computing, and quantum sensing. |
| Industry | Quantum technology / Photonics / Deep tech |
| Founded | (ask user — not in repo) |
| Headquarters | (ask user — not in repo) |
| Employees | 2 (founders only, as of writing) |
| Founders | Dr. Christian M. Lange (CEO), Dr. Jonathan D. Hood (CTO) |
| Logo | Use `public/images/` assets or generate one — ask user before uploading |
| Contact email | Christian.Lange@q-luster.com |

### Priority directory list (in order)

1. **LinkedIn Company Page** — https://www.linkedin.com/company/setup/new/
   - Highest-priority backlink for a B2B startup. Required.
   - Use canonical info above. Make user (or Christian) the page admin.

2. **Crunchbase** — https://www.crunchbase.com/add-new
   - Quantum companies are well-represented here. Investors look here.
   - Free to add a company. Listing approval can take a few days.

3. **The Quantum Insider** — https://thequantuminsider.com/quantum-companies/
   - Industry-specific. Look for a "submit your company" link or contact form. If no self-serve, email editorial@thequantuminsider.com requesting inclusion.

4. **Quantum Computing Report** — https://quantumcomputingreport.com/
   - Look for "Players" or company directory pages. May need to email Doug Finke (the editor) to request inclusion. Less self-serve, but the backlink is high-quality.

5. **Wellfound (formerly AngelList)** — https://wellfound.com/
   - Useful for hiring and a backlink. Lower priority unless QLuster is hiring.

### Skip / lower priority

- Google Business Profile — only useful if QLuster has a physical office address it wants on Maps. Likely skip for now.
- Generic "startup directories" (Product Hunt, BetaList, etc.) — wrong audience for deep-tech B2B.

### Cowork instructions per directory

For each directory above:
1. Navigate to the signup/submit URL.
2. Use the canonical company info table.
3. **If a field requires data not in the table** (founding date, address, funding stage, etc.) — pause and ask the user. Do not fabricate.
4. Always include `https://q-luster.com` in the website field — that's the backlink we want.
5. After submission, log the listing URL back to the user so it can be tracked.

---

## 4. Founder Backlinks

**Why:** A backlink from a personal LinkedIn or company "About" page on a high-authority domain reinforces brand search.

**Important — out of scope:** Do **NOT** add the website to Jonathan's Purdue faculty page. University conflict-of-interest rules apply.

### Steps for Cowork (or manual)

1. **Christian's LinkedIn profile** — sign in as Christian (requires his account). On his profile:
   - Add "QLuster Photonics" as current Experience if not already listed.
   - In the Experience entry, ensure the "Company" field links to the LinkedIn Company Page (created in step 3).
   - In the "Contact info" / "Websites" section, add `https://q-luster.com` as a website link.
2. **Jonathan's LinkedIn profile** — same as above, signed in as Jonathan.
3. **Personal/lab websites** — if either founder has a personal site (not the Purdue faculty page), add a "Companies" or "Affiliations" link to q-luster.com there. Ask the user before doing so.
4. **Conference / talk pages** — if either founder is listed as a speaker on a conference site, the bio is often editable; add the company website. Ask user for which conferences apply.

---

## Definition of done

- [ ] `https://q-luster.com/sitemap.xml` and `/robots.txt` resolve in production (verify after first deploy)
- [ ] Site verified in Google Search Console; sitemap submitted
- [ ] Site verified in Bing Webmaster Tools; sitemap submitted
- [ ] LinkedIn Company Page live with website link
- [ ] Crunchbase entry submitted
- [ ] At least one of: Quantum Insider, Quantum Computing Report listing
- [ ] Both founder LinkedIn profiles list QLuster as Experience with website link

After the LinkedIn Company Page and Search Console submission, search Google for `QLuster Photonics` once a week. Within 2–4 weeks the site should be position 1.
