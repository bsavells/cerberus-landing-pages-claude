# Tradewind Customer Landing Pages

Monorepo of customer-facing landing pages built with Next.js. Each customer is a self-contained app under `customers/<name>/` and ships as its own Vercel project.

## Structure

```
customers/
  highpeak/        # High Peak Energy — Cerberus Watchdog
  <next-customer>/
```

Each customer folder is a standalone Next.js app with its own `package.json`, `public/`, and config. They do not share dependencies today; when patterns emerge, extract them into `packages/`.

## Working on a customer

```bash
cd customers/highpeak
npm install
npm run dev      # http://localhost:9002
npm run build
```

## Adding a new customer

Copy an existing customer folder as a starting template:

```bash
cp -r customers/highpeak customers/<new-customer>
# update package.json name, public/ logos, src/app/page.tsx content + WEB_LAUNCH_URL
```

Then create a new Vercel project pointing at this repo with **Root Directory** set to `customers/<new-customer>`.

## Deployment (Vercel)

Each customer has its own Vercel project. In the Vercel dashboard:

- **Repository**: this GitHub repo
- **Root Directory**: `customers/<customer-name>`
- **Production Branch**: `main`
- **Framework Preset**: Next.js (auto-detected)

Pushes to `main` deploy production for every customer. Pull requests get preview URLs per project.
