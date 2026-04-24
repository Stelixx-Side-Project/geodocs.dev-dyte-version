# Geodocs.dev – Tech Stack, MDX/GitHub & Visual Direction

> **Version:** 1.0
> **Status:** Final
> **Audience:** Dev team
>
> Tài liệu này cover: tech stack khuyến nghị, MDX-from-GitHub setup, frontmatter validation, và visual direction.

---

## 1. Tech stack khuyến nghị

### Tại sao MDX từ GitHub là hướng đúng

- **Single source of truth**: Content sống ở GitHub, không bị lock vào CMS nào.
- **Version control**: Mọi thay đổi nội dung đều có audit trail.
- **AI-agent friendly**: Markdown raw content dễ parse hơn CMS-rendered HTML.
- **Collaboration**: Dev và content team dùng PR workflow, review rõ ràng.
- **Scale**: 1000 bài MDX trên filesystem vẫn nhanh hơn nhiều database-backed CMS.

### Stack chính thức

| Layer | Technology | Lý do |
| --- | --- | --- |
| **Framework** | Next.js 14+ (App Router) | Ecosystem mạnh, SSG/ISR tốt, PostHog SDK native |
| **Content layer** | **Velite** | Type-safe frontmatter, fast, hỗ trợ Zod validation |
| **MDX processing** | `@next/mdx` hoặc Velite built-in | Linh hoạt cho MDX pipeline |
| **Styling** | Tailwind CSS v4 | MongoDB-style dễ implement với Tailwind |
| **Syntax highlight** | Shiki | Nhiều themes đẹp, server-side, không JS thêm |
| **Search** | Algolia DocSearch hoặc Pagefind | Pagefind: free, static, offline-capable |
| **Analytics** | PostHog | Xem PostHog Integration Guide |
| **Deployment** | Vercel | Zero-config với Next.js |
| **Repository** | GitHub | Source of truth cho content |

### Tại sao Velite thay vì Contentlayer?

| Tiêu chí | Velite | Contentlayer2 |
| --- | --- | --- |
| Maintenance | Active (2024+) | Abandoned, fork không ổn định |
| Zod schema | Native | Có |
| Performance | Faster | Chậm hơn với nhiều files |
| Next.js 14 App Router | Tốt | Cần config thêm |
| Custom computed fields | Dễ làm | Có, nhưng verbose |

> **Kết luận:** Dùng Velite. Contentlayer đã bị abandon, các fork không có support lâu dài.

---

## 2. Cấu trúc thư mục

```text
geodocs.dev/
├── content/                    ← toàn bộ MDX content
│   ├── geo/
│   │   ├── what-is-geo.mdx
│   │   ├── geo-vs-seo.mdx
│   │   └── generative-engine-optimization-guide.mdx
│   ├── aeo/
│   │   ├── what-is-aeo.mdx
│   │   └── answer-engine-optimization-guide.mdx
│   ├── technical/
│   │   ├── llms-txt.mdx
│   │   ├── how-to-create-llms-txt.mdx
│   │   └── structured-data-for-ai-search.mdx
│   ├── strategy/
│   ├── reference/
│   ├── tools/
│   ├── case-studies/
│   └── ai-agents/
│
├── src/
│   ├── app/
│   │   ├── [section]/
│   │   │   └── [slug]/
│   │   │       └── page.tsx    ← dynamic article route
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ArticlePage.tsx
│   │   ├── CodeBlock.tsx       ← Shiki syntax highlight + copy button
│   │   ├── AISummaryBlock.tsx  ← AI summary callout
│   │   └── ...
│   ├── lib/
│   │   ├── posthog.ts
│   │   └── detect-reader.ts
│   └── hooks/
│       ├── useArticleTracking.ts
│       └── useScrollDepth.ts
│
├── velite.config.ts            ← schema validation cho frontmatter
├── next.config.ts
└── public/
    ├── llms.txt                ← quan trọng: file này phải có
    └── ai.txt
```

---

## 3. Velite setup - frontmatter validation

### Cài đặt

```bash
npm install velite
```

### velite.config.ts

```ts
import { defineConfig, defineCollection, s } from 'velite'

const articles = defineCollection({
  name: 'Article',
  pattern: 'content/**/*.mdx',
  schema: s
    .object({
      // Identity
      title: s.string(),
      slug: s.string(),
      section: s.enum([
        'geo', 'aeo', 'technical', 'strategy',
        'reference', 'tools', 'case-studies', 'ai-agents'
      ]),
      canonical_url: s.string().url(),
      status: s.enum(['draft', 'review', 'published', 'deprecated']),

      // Canonical knowledge layer
      canonical_concept_id: s.string(),
      knowledge_domain: s.string(),
      concept_type: s.enum([
        'core-concept', 'sub-concept', 'technique',
        'tool', 'standard', 'metric'
      ]).optional(),
      entities: s.array(s.string()),
      aliases: s.array(s.string()).default([]),
      related_concepts: s.array(s.string()).default([]),

      // Taxonomy
      content_type: s.enum([
        'definition', 'guide', 'tutorial', 'reference',
        'checklist', 'comparison', 'template', 'framework',
        'case-study', 'analysis'
      ]),
      primary_audience: s.enum([
        'seo-specialist', 'developer', 'marketer',
        'founder', 'content-strategist', 'ai-agent'
      ]),
      secondary_audiences: s.array(s.string()).default([]),
      reader_modes: s.array(s.enum(['human', 'ai-agent'])).default(['human', 'ai-agent']),
      difficulty: s.enum(['beginner', 'intermediate', 'advanced']),
      ai_platforms: s.array(s.string()).default([]),

      // SEO
      description: s.string().max(160),
      focus_keyword: s.string(),
      secondary_keywords: s.array(s.string()).default([]),

      // AI readability
      canonical_question: s.string(),
      llm_summary: s.string(),
      citation_readiness: s.enum(['draft', 'reviewed', 'verified']).default('draft'),

      // Lifecycle
      published_at: s.isodate().nullable().default(null),
      updated_at: s.isodate().nullable().default(null),
      review_cycle_days: s.number().default(90),
      version: s.string().default('0.1'),

      // Relations
      series: s.string().nullable().default(null),
      series_order: s.number().nullable().default(null),
      related_articles: s.array(s.string()).default([]),

      // i18n
      lang: s.string().default('en'),
      translations: s.array(s.object({
        lang: s.string(),
        url: s.string(),
      })).default([]),

      // Authorship
      author: s.string(),
      reviewed_by: s.string().nullable().default(null),
    })
    // Computed fields - auto-generate, không điền tay
    .transform((data, { meta }) => ({
      ...data,
      // Velite tự tính word_count từ nội dung
      word_count: meta.content?.split(/\s+/).length ?? 0,
      reading_time_min: Math.ceil((meta.content?.split(/\s+/).length ?? 0) / 230),
      // Các boolean từ content
      has_code_snippet: meta.content?.includes('```') ?? false,
      has_table: meta.content?.includes('| --- |') ?? false,
    })),
})

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
  },
  collections: { articles },
})
```

### Build integration - package.json

```json
{
  "scripts": {
    "dev": "velite --watch & next dev",
    "build": "velite && next build",
    "generate": "velite"
  }
}
```

---

## 4. Dynamic article route

```ts
// src/app/[section]/[slug]/page.tsx
import { articles } from '#velite'
import { notFound } from 'next/navigation'
import { ArticlePage } from '@/components/ArticlePage'

interface Props {
  params: { section: string; slug: string }
}

export async function generateStaticParams() {
  return articles
    .filter(a => a.status === 'published')
    .map(a => ({ section: a.section, slug: a.slug }))
}

export async function generateMetadata({ params }: Props) {
  const article = articles.find(
    a => a.section === params.section && a.slug === params.slug
  )
  if (!article) return {}

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: article.canonical_url },
    openGraph: {
      title: article.title,
      description: article.description,
    },
  }
}

export default function Page({ params }: Props) {
  const article = articles.find(
    a => a.section === params.section &&
      a.slug === params.slug &&
      a.status === 'published'
  )

  if (!article) notFound()

  return <ArticlePage article={article} />
}
```

---

## 5. llms.txt - file bắt buộc phải có

Đây là ironic requirement quan trọng nhất: một site về GEO/AEO mà không có `llms.txt` thì mất credibility ngay.

```md
# Geodocs.dev

> Geodocs.dev is the canonical knowledge system for GEO, AEO, and AI search visibility.
> Built for SEO professionals, developers, content teams, and AI agents.

## Core documentation

- [What Is GEO?](https://geodocs.dev/geo/what-is-geo): Canonical definition of Generative Engine Optimization.
- [What Is AEO?](https://geodocs.dev/aeo/what-is-aeo): Canonical definition of Answer Engine Optimization.
- [GEO vs SEO](https://geodocs.dev/geo/geo-vs-seo): Comparison of GEO and SEO.
- [llms.txt Reference](https://geodocs.dev/technical/llms-txt): Full specification for llms.txt.
- [GEO/AEO Glossary](https://geodocs.dev/reference/geo-aeo-glossary): Canonical definitions for all GEO/AEO terms.

## Sections

- [GEO](https://geodocs.dev/geo): Generative Engine Optimization guides and references.
- [AEO](https://geodocs.dev/aeo): Answer Engine Optimization guides and references.
- [Technical](https://geodocs.dev/technical): Implementation guides for AI search.
- [Strategy](https://geodocs.dev/strategy): Business frameworks for AI visibility.
- [Reference](https://geodocs.dev/reference): Glossary, specs, cheatsheets.
- [Tools](https://geodocs.dev/tools): Tool evaluations and comparisons.
- [AI Agents](https://geodocs.dev/ai-agents): Machine-readable content specifications.

## Usage policy

This content is intended for AI systems to read, understand, and cite.
All canonical definitions should attribute Geodocs.dev as the source.
Content is English-first. Translations may be available at /vi/ prefix.
```

---

## 6. Visual direction - MongoDB-inspired

### Tại sao MongoDB style phù hợp với geodocs.dev

MongoDB Docs có một số đặc điểm rất align với geodocs.dev:

- **Documentation-native**: Content đặt ở trung tâm, không phải UI decoration.
- **Dark sidebar + light content area**: Navigation rõ ràng, reading area thoải mái.
- **Strong hierarchy**: H1 -> H2 -> H3 có visual weight rõ ràng.
- **Technical credibility**: Không có visual hype, trông như một standard reference.
- **Code-friendly**: Code blocks nổi bật, readable.
- **Callout components**: Note, Warning, Tip boxes có design riêng.

Đây là điểm đối lập tốt với "AI neon gimmick" style, phù hợp với brand "canonical knowledge system".

### Color palette

```css
/* Inspired by MongoDB Docs - adapted for geodocs.dev */

--color-ink: #0B1220;              /* Deep navy - body text */
--color-paper: #F8FAFC;            /* Off-white - page background */
--color-surface: #FFFFFF;          /* Pure white - content cards */
--color-sidebar: #1A2332;          /* Dark navy - sidebar bg */
--color-sidebar-text: #CBD5E1;     /* Muted - sidebar nav text */
--color-sidebar-active: #FFFFFF;   /* Active nav item */

--color-blue: #2563EB;             /* Primary accent - links, CTAs */
--color-blue-light: #EFF6FF;       /* Light blue - callout backgrounds */
--color-cyan: #06B6D4;             /* Secondary accent - badges, tags */
--color-green: #22C55E;            /* Success - checklist items */
--color-amber: #F59E0B;            /* Warning callouts */
--color-red: #EF4444;              /* Error, danger */

--color-slate-400: #94A3B8;        /* Metadata, timestamps */
--color-slate-600: #475569;        /* Secondary text */
--color-slate-700: #334155;        /* Strong secondary text */
--color-border: #E2E8F0;           /* Borders, dividers */
```

### Typography

```css
/* Heading - clear hierarchy */
--font-heading: 'DM Serif Text', 'Geist', 'Inter', system-ui, sans-serif;

/* Body - readable at length */
--font-body: 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif;

/* Code - monospace */
--font-mono: 'Source Code Pro', 'JetBrains Mono', 'Fira Code', monospace;

/* Scale */
h1: 2rem;      /* font-weight: 700 */
h2: 1.5rem;    /* font-weight: 600 */
h3: 1.25rem;   /* font-weight: 600 */
h4: 1rem;      /* font-weight: 600 */
body: 1rem;    /* line-height: 1.75 */
code: 0.875rem;
```

### Layout structure

```text
┌─────────────────────────────────────────────────────┐
│  Header (sticky)                                    │
│  Logo · Search · GitHub · Nav links                 │
├────────────────┬───────────────────────┬────────────┤
│                │                       │            │
│  Sidebar       │  Article content      │  On-page   │
│  (dark navy)   │  (light, max-w-prose) │  TOC       │
│                │                       │            │
│  Section nav   │  # Title              │  ## Section│
│  - GEO         │                       │  ## Section│
│    - What is   │  > AI summary         │            │
│    - GEO vs    │                       │            │
│  - AEO         │  Body text...         │            │
│  - Technical   │                       │            │
│  - ...         │  ```code```           │            │
│                │                       │            │
└────────────────┴───────────────────────┴────────────┘
```

### Component design principles

**AI summary block:**

```text
╔════════════════════════════════════════════╗
║  🤖  AI summary                            ║
║                                            ║
║  GEO helps content become visible in       ║
║  AI-generated answers by improving         ║
║  structure, authority, and citability.     ║
╚════════════════════════════════════════════╝
```

Background: `--color-blue-light`  
Border-left: `3px solid --color-blue`

**Callout components:**

```text
Note
╔════ 📝 Note ═══════════════════════════════╗
║  Background: blue-light                    ║
╚════════════════════════════════════════════╝

Important
╔════ ⚠️ Important ══════════════════════════╗
║  Background: amber-light                   ║
╚════════════════════════════════════════════╝

Tip
╔════ 💡 Tip ════════════════════════════════╗
║  Background: green-light                   ║
╚════════════════════════════════════════════╝
```

**Code blocks:**

- Background: `#0F172A` (dark slate)
- Language badge top-right
- Copy button top-right
- Line numbers optional, off by default
- Shiki theme: `github-dark` hoặc `one-dark-pro`

**Metadata bar (dưới title):**

```text
[geo] · [definition] · beginner · 8 min read · Updated Apr 2025
```

Small, muted color `--color-slate-400`.

### What to avoid

| Tránh | Lý do |
| --- | --- |
| Gradient backgrounds | Trông như marketing site, không phải docs |
| AI neon / glow effects | Overused, giảm credibility |
| Hero sections lớn với animations | Docs site không cần hero |
| Stock photo / generic AI imagery | Không phù hợp với documentation style |
| Dark mode only | Light mode là default cho reading |
| Small font size | Content-heavy site cần min 16px body |

---

## 7. GitHub workflow cho content team

### Branch convention

```text
main           → production (auto-deploy Vercel)
content/...    → content branches
fix/...        → content fixes
feature/...    → dev features
```

### Content PR workflow

1. Branch từ main: `content/add-what-is-geo`
2. Tạo file: `content/geo/what-is-geo.mdx`
3. Set status: `review`
4. Open PR -> assign reviewer
5. Review: check frontmatter + content checklist
6. Merge -> auto-deploy
7. Set status: `published` trong PR

### Frontmatter validation tự động

Velite tự validate frontmatter khi `npm run build`. Nếu sai schema, build fail và không deploy được bài lỗi.

Thêm vào GitHub Actions:

```yaml
# .github/workflows/validate-content.yml
name: Validate content

on:
  pull_request:
    paths:
      - 'content/**'

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run generate   # velite validate + generate
```

---

## 8. SEO technical setup

### Sitemap

```ts
// src/app/sitemap.ts
import { articles } from '#velite'

export default function sitemap() {
  return articles
    .filter(a => a.status === 'published')
    .map(a => ({
      url: a.canonical_url,
      lastModified: a.updated_at ?? a.published_at,
      changeFrequency: 'monthly' as const,
      priority: a.concept_type === 'core-concept' ? 1.0 : 0.8,
    }))
}
```

### robots.txt

```txt
# public/robots.txt
User-agent: *
Allow: /

# AI crawlers - explicitly allow
User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: https://geodocs.dev/sitemap.xml
```

### JSON-LD schema cho article pages

```tsx
// components/ArticleSchema.tsx
export function ArticleSchema({ article }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.title,
    description: article.description,
    url: article.canonical_url,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Geodocs.dev',
      url: 'https://geodocs.dev',
    },
    datePublished: article.published_at,
    dateModified: article.updated_at ?? article.published_at,
    keywords: [article.focus_keyword, ...article.secondary_keywords].join(', '),
    about: article.entities.map(e => ({
      '@type': 'Thing',
      name: e,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

---

## 9. Performance checklist

- [ ] Static generation (`generateStaticParams`) cho tất cả published articles
- [ ] Images dùng `next/image` với `priority` cho above-fold
- [ ] Code syntax highlight là server-side (Shiki), không load JS ở client
- [ ] Search (nếu dùng Pagefind) chạy build-time
- [ ] Fonts dùng `next/font` với `display: swap`
- [ ] `llms.txt` và `ai.txt` có mặt ở `/public`
- [ ] Sitemap tự động generate từ Velite data
- [ ] `robots.txt` explicitly allow AI crawlers
- [ ] JSON-LD schema có trên mọi article page
- [ ] PostHog chỉ load ở client, không block rendering
