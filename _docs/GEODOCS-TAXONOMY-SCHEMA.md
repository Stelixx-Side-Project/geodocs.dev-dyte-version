# Geodocs Taxonomy Metadata Schema (Artifact-first)

This schema standardizes metadata for all published documents so humans can browse quickly and LLMs can index consistently up to 1000+ articles.

## Core Principles

- Every article must include L1, L2, and L3 taxonomy fields.
- Slugs must remain short, stable, and human-readable.
- One article can target multiple roles (L2) and multiple artifacts (L3).
- Hubs are generated from metadata, not hand-curated links.

## Canonical Taxonomy Values

### L1 (Journey)

Allowed values:

- Fundamentals
- Strategy
- Execution
- Proof
- Operations

### L2 (Role)

Allowed values:

- SEO Specialist
- Marketing Manager
- Developer
- Content Creator
- AI Agent

### L3 (Artifact)

Allowed values:

- Checklist
- Template
- Script
- Matrix
- SOP
- Brief
- Comparison

## Frontmatter Contract (Docusaurus)

Use this frontmatter for every article under docs:

```yaml
title: GEO Audit Checklist v1
slug: /docs/geo-audit-checklist
description: A practical checklist to audit GEO readiness for AI search visibility.

taxonomy:
  l1_journey: Execution
  l2_roles:
    - SEO Specialist
    - Developer
  l3_artifacts:
    - Checklist

artifact_type: Checklist
primary_role: SEO Specialist
journey_stage: Execution

status: active
version: 1.0
last_reviewed: 2026-04-23
owners:
  - content-team
  - geo-ops

keywords:
  - geo
  - ai search
  - citation visibility
  - audit

llm:
  intent: operational
  index_priority: high
  canonical_topic: geo-audit
  related_topics:
    - entity coverage
    - citation optimization
```

## Required vs Optional Fields

Required:

- title
- slug
- description
- taxonomy.l1_journey
- taxonomy.l2_roles
- taxonomy.l3_artifacts
- artifact_type
- primary_role
- journey_stage

Recommended:

- status
- version
- last_reviewed
- owners
- keywords
- llm.*

## URL Rules

- Article pages: /docs/<short-slug>
- Role hubs: /playbooks/<role-slug>
- Artifact hubs: /artifacts/<artifact-slug>
- Journey hubs: /journey/<l1-slug>

Examples:

- /docs/geo-audit-checklist
- /playbooks/seo-specialist
- /artifacts/template
- /journey/execution

## Content Team Authoring Checklist

- Pick exactly 1 L1 value.
- Pick at least 1 L2 role.
- Pick at least 1 L3 artifact.
- Ensure artifact_type is one of L3 values.
- Keep slug concise and stable.
- Add llm.canonical_topic for de-duplication.
- Update last_reviewed whenever the content changes meaningfully.

## Validation Rules (for CI)

- Reject if l1_journey not in allowed enum.
- Reject if any l2_roles value not in allowed enum.
- Reject if any l3_artifacts value not in allowed enum.
- Reject if artifact_type not in allowed L3 enum.
- Reject if slug does not start with /docs/ for article pages.
- Warn if last_reviewed older than 180 days.
- Warn if keywords count < 3.

## Query Patterns for Hub Generation

- All Templates for Developer in Execution:
  - taxonomy.l1_journey = Execution
  - taxonomy.l2_roles includes Developer
  - taxonomy.l3_artifacts includes Template

- All Comparisons for Strategy:
  - taxonomy.l1_journey = Strategy
  - taxonomy.l3_artifacts includes Comparison

## Notes

- Maintain enum values centrally in one config source to prevent drift.
- Preserve exact casing in values for deterministic indexing.
- Prefer additive taxonomy updates over changing historical values.
