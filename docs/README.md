# SuccessScript Website

The SuccessScript business website is built with Next.js App Router, React, TypeScript, and Tailwind CSS. Its shared layout places page content beside persistent navigation on desktop and moves navigation into a compact top bar on smaller screens.

## Development

Install dependencies with `npm install`, then start the local server with `npm run dev`. Open [http://localhost:3000](http://localhost:3000).

Useful commands:

- `npm run lint` — check code with ESLint.
- `npm run build` — create a production build.
- `npm run start` — serve the production build.

## Structure

- `../app/` — route pages, root layout, metadata, and global styles.
- `../components/` — shared site shell and route-aware navigation.
- `../public/` — static assets.

The five initial routes are `/`, `/about`, `/services`, `/contact`, and `/blog`. Page content and brand assets are being developed incrementally. See [TO-DO.md](./TO-DO.md) for the implementation phases and remaining work, [AGENT.md](./AGENT.md) for the project workflow, and [DESIGN.md](./DESIGN.md) for the visual direction.
