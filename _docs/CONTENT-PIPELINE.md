# Geodocs Content Pipeline (From geodocs.dev-docs)

## Source of truth

- Content authoring repo: `../geodocs.dev-docs`
- Published docs repo: `geodocs.dev-ui`
- Foundation messaging + IA source: `_docs/GEODOCS-FOUNDATION.md`

## Allowed synced folders

The sync process imports only:
- `docs/fundamentals`
- `docs/strategy`
- `docs/execution`
- `docs/proof`
- `docs/operations`
- `docs/_manifests/articles.json`

Destination in this repo:
- `docs/guides/geo/*`

## Local sync commands

From geodocs.dev-ui:
- `npm run content:sync:dry`
- `npm run content:sync`

## Required frontmatter contract

Each article in geodocs.dev-docs must include:
- `title`
- `description`
- `primary_l1`
- `primary_l2`
- `artifact_type`
- `intent_stage`
- `owner`
- `review_date`

## Review and deploy flow

1. Author content in geodocs.dev-docs.
2. Run validation + manifest in content repo.
3. Open PR in content repo.
4. Sync content into geodocs.dev-ui using `content:sync`.
5. Run site checks/build in geodocs.dev-ui.
6. Deploy only after synced content review is approved.

## Safety notes

- Do not manually edit synced files under `docs/guides/geo/{fundamentals|strategy|execution|proof|operations}`.
- Keep strategic docs under `_docs` for planning and decisions.
