# Geodocs Taxonomy Metadata Standard v1.0

This file is the canonical taxonomy contract for geodocs.dev content in this repository.

It defines:

- Required metadata for every published article.
- Canonical enums for Journey, Role, and Artifact.
- Legacy alias mappings.
- Slug policy and hub-generation rules.
- CI validation gates.

## Scope

- Applies to all strategic content pages under article routes.
- Keeps canonical content URLs stable in v1.
- Optimizes for both human navigation and machine retrieval.

## Core Decisions (Locked)

1. Canonical model is 3-level taxonomy: L1, L2, L3.
2. Reader-facing navigation can remain 2-level where needed.
3. Article slug policy for v1 is `/docs/<short-slug>`.
4. Comparison is a first-class L3 artifact.

## Canonical Enums

### L1 (Journey)

- Fundamentals
- Strategy
- Execution
- Proof
- Operations

### L2 (Role)

- SEO Specialist
- Marketing Manager
- Developer
- Content Creator
- AI Agent

### L3 (Artifact)

- Checklist
- Template
- Script
- Matrix
- SOP
- Brief
- Comparison

## Legacy Alias Map

Alias values are allowed only during migration. Canonical values must be written to final content.

| Legacy label | Canonical target |
| --- | --- |
| Strategist | SEO Specialist |
| Agency Owner | Marketing Manager |
| Implementer | Developer |
| Founder | Marketing Manager |
| Playbook | SOP |
| Worksheet | Template |

## Frontmatter Contract (Authoring)

Use this contract for all new articles:

```yaml
title: GEO Audit Checklist v1
slug: /docs/geo-audit-checklist
description: A practical checklist to audit GEO readiness for AI search visibility.

L1_Journey: Execution
L2_Role:
  - SEO Specialist
  - Developer
L3_Artifact: Checklist

artifact_type: Checklist
primary_role: SEO Specialist
journey_stage: Execution

status: active
version: 1.0
last_reviewed: 2026-04-24
owners:
  - content-team
  - geo-ops

intent_stage: execute
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

## Required Fields

- title
- slug
- description
- L1_Journey
- L2_Role
- L3_Artifact
- artifact_type
- primary_role
- journey_stage

## Recommended Fields

- status
- version
- last_reviewed
- owners
- intent_stage
- keywords
- llm.*

## Slug Policy (v1)

### Canonical article rule

- Article pages must use: `/docs/<short-slug>`.
- Slugs must be lowercase kebab-case.
- Slugs must be stable after publish unless there is a hard breaking reason.

### Hub route rule

- Journey hubs: `/journey/<l1-slug>`
- Role hubs: `/playbooks/<role-slug>`
- Artifact hubs: `/artifacts/<artifact-slug>`

### Reserved future rule

- Pattern `/{l1}/{topic}/{intent}` is reserved for v1.1+ experiments and should not replace canonical v1 article URLs.

## Validation Contract (CI)

### Reject (hard fail)

- Missing any required field.
- L1_Journey not in canonical L1 enum.
- Any L2_Role value not in canonical L2 enum (after alias normalization).
- L3_Artifact not in canonical L3 enum.
- artifact_type not in canonical L3 enum.
- primary_role not present in L2_Role list.
- journey_stage does not match L1_Journey.
- slug does not start with `/docs/`.

### Warn (non-blocking)

- last_reviewed older than 180 days.
- keywords count lower than 3.
- owners missing.
- llm.canonical_topic missing.

## Hub Generation Query Patterns

### Templates for developers in execution

- L1_Journey = Execution
- L2_Role includes Developer
- L3_Artifact = Template

### Comparisons in strategy

- L1_Journey = Strategy
- L3_Artifact = Comparison

### Weekly operator lane for SEO Specialist

- L2_Role includes SEO Specialist
- L3_Artifact in (Checklist, SOP, Script)

## Migration Rules for Existing Content

1. Normalize aliases to canonical enum values.
2. Keep current article URL if already valid under `/docs/`.
3. Add missing required fields before adding recommended fields.
4. Do not publish pages with mixed enum vocabularies.
5. If uncertain between two roles, keep primary_role single and include secondary role in L2_Role list.

## Definition of Done for Taxonomy Compliance

- Required fields present and valid.
- Enum values canonicalized.
- Slug policy compliant.
- One clear artifact type declared.
- Validation passes with zero hard failures.

## Governance

- Single source of truth: this file plus JSON schema at `_docs/schemas/taxonomy-frontmatter.v1.schema.json`.
- Enum updates are additive by default.
- Any destructive enum change requires migration notes and reviewer approval.
