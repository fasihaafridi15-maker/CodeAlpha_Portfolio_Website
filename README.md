# Fasiha Afridi — Portfolio

A premium, dark tech-inspired portfolio for **Fasiha Afridi** — Software
Engineering Student, Frontend Developer & AI Enthusiast at HITMS, Hyderabad.

Built with **React 19 + Vite + Tailwind CSS v4 + Framer Motion**.

## Sections

- Hero — animated intro, profile frame, floating tech chips
- About — journey, highlights, animated stat counters
- Skills — categorized skill cards with animated progress bars
- Projects — featured projects first, then the full showcase, each linking to
  the real GitHub repos
- Experience — CodeAlpha Frontend Development Internship
- Certifications — real certificate images (Anthropic, Google/Coursera,
  Microsoft Learn via WATS-HITMS, AIESEC)
- Leadership & Achievements — futsal leadership, ACM/IT Club, event hosting
- Contact — validated, integration-ready contact form

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build into dist/
npm run preview    # preview the production build locally
```

## Enabling live email delivery (EmailJS) — step by step

The contact form is fully wired to EmailJS using `emailjs.sendForm()`. Until
you add your own credentials, submitting the form will show a "Message could
not be sent" error — that's expected, and is exactly what production code
looks like before it's configured. Follow the steps below (~10 minutes) and
it will start delivering real emails to your Gmail inbox.

### Step 1 — Create an EmailJS account
Go to https://www.emailjs.com and sign up for a free account (200 emails/month
on the free tier, which is plenty for a portfolio contact form).

### Step 2 — Connect your Gmail account (Email Service)
1. In the EmailJS dashboard, go to **Email Services** → **Add New Service**
2. Choose **Gmail**
3. Click **Connect Account** and sign in with `fasihaafridi15@gmail.com`,
   then allow EmailJS the permissions it asks for
4. Once connected, copy the **Service ID** shown (looks like `service_abc1234`)

### Step 3 — Create an Email Template
1. Go to **Email Templates** → **Create New Template**
2. In the template body, use these variables (they must match exactly, since
   the form sends `user_name`, `user_email`, `subject`, `message`, and a
   hidden `reply_to` field):

   ```
   Subject: New portfolio message: {{subject}}

   From: {{user_name}} <{{user_email}}>

   {{message}}
   ```

3. In the template's **Settings** tab:
   - Set **"To Email"** to `fasihaafridi15@gmail.com` so every submission
     lands in your inbox
   - Set **"Reply To"** to `{{reply_to}}` — this is a hidden field the form
     already sends with the visitor's email, so replying to the notification
     email goes straight back to them
4. Save the template and copy its **Template ID** (looks like `template_xyz789`)

### Step 4 — Get your Public Key
Go to **Account** → **General** in the EmailJS dashboard and copy your
**Public Key**.

### Step 5 — Add the credentials to your project
Copy `.env.example` to `.env` in the project root:

```bash
cp .env.example .env
```

Fill in the three values you just copied:

```
VITE_EMAILJS_SERVICE_ID=service_abc1234
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Step 6 — Restart and test
```bash
npm run dev
```
Restarting is required — Vite only reads `.env` values on startup. Fill out
the contact form and submit; you should see the green "Message sent
successfully" confirmation, and the email should land in
`fasihaafridi15@gmail.com` within a few seconds.

**No component code needs to change** — `src/lib/emailConfig.js` reads the
env vars, and `src/lib/sendContactEmail.js` calls `emailjs.sendForm()` with
them automatically.

### Deploying with EmailJS
When you deploy (Netlify/Vercel/etc.), add the same three `VITE_EMAILJS_*`
variables in your host's **Environment Variables** settings — `.env` files
are not deployed, so this step is required for the live site to send email.

## Project Structure

```
src/
  components/     Reusable, section-level React components
  data/           Content as data (projects, skills, certificates, site info)
  lib/            Email-sending logic, kept separate from UI
  index.css       Design tokens & shared utility classes
public/
  assets/
    profile/      Profile photo
    certificates/ Certificate images
```

## Design tokens

| Token | Value |
|---|---|
| Background | #080B14 |
| Card background | #111827 |
| Accent — Electric Blue | #38BDF8 |
| Accent — Soft Purple | #8B5CF6 |
| Accent — Cyan Glow | #22D3EE |
| Heading text | #F8FAFC |
| Body text | #CBD5E1 |
| Muted text | #94A3B8 |
| Display font | Space Grotesk |
| Body font | Inter |
| Mono / tags font | JetBrains Mono |

## Updating content

All copy lives in src/data/ — update project details in projects.js,
skill levels in skills.js, certificates in certificates.js, and personal
info/links in site.js. No JSX edits needed for routine content updates.

## Deployment

This is a static Vite build — deploy the dist/ folder to any static host:

- Netlify: drag-and-drop the dist/ folder, or connect the GitHub repo
  (build command `npm run build`, publish directory `dist`)
- Vercel: import the repo, framework preset "Vite", defaults work as-is
- GitHub Pages: run `npm run build`, then deploy dist/ via gh-pages or Actions

Remember to add your VITE_EMAILJS_* environment variables in your host's
dashboard so the contact form can send email in production.
