# Geodocs Taxonomy Migration Playbook v1

This playbook defines how to migrate existing and future content to the canonical taxonomy standard with low risk.

## Objective

- Move all content to canonical L1/L2/L3 metadata.
- Keep article URLs stable in v1.
- Remove enum drift across strategy docs and published pages.

## In Scope

- Frontmatter normalization for article pages.
- Alias mapping from legacy labels to canonical labels.
- Validation gates for publish readiness.

## Out of Scope (v1)

- Global URL migration to `/{l1}/{topic}/{intent}`.
- Structural route rewrites.
- Retrospective full content rewrite.

## Canonical Source

- Policy: `_docs/GEODOCS-TAXONOMY-SCHEMA.md`
- Machine schema: `_docs/schemas/taxonomy-frontmatter.v1.schema.json`

## Migration Phases

## Phase 0: Inventory and Drift Scan

1. List all content pages and collect frontmatter fields.
2. Detect pages missing required taxonomy keys.
3. Detect role and artifact labels outside canonical enums.
4. Export drift report grouped by error type.

Definition of done:
- Drift report generated and triaged.

## Phase 1: Normalize Required Metadata

For each article:

1. Ensure required fields exist:
   - `L1_Journey`
   - `L2_Role`
   - `L3_Artifact`
   - `artifact_type`
   - `primary_role`
   - `journey_stage`
2. Map aliases to canonical values.
3. Ensure `primary_role` is present inside `L2_Role`.
4. Ensure `artifact_type` matches `L3_Artifact`.

Definition of done:
- 100% of targeted pages pass hard validation.

## Phase 2: Stabilize Slug and Hubs

1. Keep article URLs in `/docs/<short-slug>` format.
2. Backfill missing slug values to canonical format.
3. Regenerate role, journey, and artifact hubs from metadata.

Definition of done:
- No broken internal links caused by taxonomy migration.

## Phase 3: Recommended Metadata Backfill

1. Add `last_reviewed`, `owners`, `keywords`, and `llm.*` fields.
2. Add at least 3 keywords per page.
3. Set `llm.canonical_topic` for deduplication.

Definition of done:
- Warning-level quality score meets release threshold.

## Alias Map (Apply During Phase 1)

| Legacy | Canonical |
| --- | --- |
| Strategist | SEO Specialist |
| Agency Owner | Marketing Manager |
| Implementer | Developer |
| Founder | Marketing Manager |
| Playbook | SOP |
| Worksheet | Template |

## Validation Gates

## Hard Fail

- Missing required field.
- Enum outside canonical list.
- Slug not matching `/docs/<short-slug>`.
- `artifact_type` and `L3_Artifact` mismatch.
- `journey_stage` and `L1_Journey` mismatch.

## Warning

- `last_reviewed` older than 180 days.
- `owners` missing.
- `keywords` fewer than 3.
- `llm.canonical_topic` missing.

## Rollout Plan

- Week 1: Inventory, drift scan, pilot on 10 canonical pages.
- Week 2: Normalize all priority pages in strategist path.
- Week 3: Backfill recommended fields and rerun validation.
- Week 4: Lock publish gate on hard-fail rules.

## Ownership

- Content owner: metadata normalization.
- Implementation owner: schema validation and CI enforcement.
- Product owner: publish gate approval and exception handling.

## Exception Policy

If a page cannot comply in sprint scope:

1. Mark `status: review`.
2. Add explicit migration note in PR.
3. Exclude from primary hub surfaces until fixed.

## Release Checklist

- Canonical schema file reviewed.
- Migration report generated.
- Hard validation passes.
- Warning report reviewed and accepted.
- Hub output spot-checked on at least one page per L1.
