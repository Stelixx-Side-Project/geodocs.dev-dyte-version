# Geodocs

Geodocs is a Docusaurus-based documentation site focused on GEO (Generative Engine Optimization) and AEO operating playbooks, artifacts, and standards.

This repository contains the UI layer (`geodocs.dev-ui`), including homepage components, docs structure, design tokens, and deployment configuration.

## What Is In This Repo

- GEO guides and artifacts under `docs/`
- Internal operating documentation under `_docs/`
- Homepage and site UI components under `src/components/homepage/`
- Global styling and design tokens under `src/css/`
- Content sync tooling in `bin/sync-geodocs-content.mjs`

## Tech Stack

- Docusaurus 3
- React 18
- Tailwind CSS
- TypeScript

## Prerequisites

- Node.js `>=18`
- npm

## Getting Started

1. Install dependencies:

```sh
npm install
```

2. Start local docs server:

```sh
npm start
```

3. Build production bundle:

```sh
npm run build
```

4. Serve built site locally:

```sh
npm run serve
```

## Content Pipeline Commands

Sync content from the companion docs source:

```sh
npm run content:sync
```

Dry-run content sync:

```sh
npm run content:sync:dry
```

Cloudflare deploy flow:

```sh
npm run deploy:cf
```

Cloudflare deploy dry run:

```sh
npm run deploy:cf:dry
```

## Quality Checks

```sh
npm run lint
npm run typecheck
npm run spell-check
```

## Documentation Index

- [CHANGELOG](./CHANGELOG.md)
- [CONTRIBUTING](./CONTRIBUTING.md)
- [Internal docs index](./_docs/README.md)
- [Foundation](./_docs/GEODOCS-FOUNDATION.md)
- [Taxonomy schema](./_docs/GEODOCS-TAXONOMY-SCHEMA.md)

## License

Distributed under the Apache License, Version 2.0. See [LICENSE](./LICENSE).
