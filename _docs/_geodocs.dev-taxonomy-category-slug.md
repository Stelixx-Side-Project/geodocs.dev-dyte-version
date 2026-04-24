Geodocs.dev – Taxonomy & Content Architecture

> Version: 2.0 | Status: Final | Language: English-first, multilingual planned   
> Đây là tài liệu nguồn sự thật cho toàn bộ hệ thống taxonomy, URL, slug, frontmatter, và content architecture của geodocs.dev.

---

1. Triết lý thiết kế

Ba nguyên tắc không thay đổi:

| Nguyên tắc | Ý nghĩa thực tế |
|------------|----------------|
| URL = SEO asset | Mỗi URL segment có giá trị keyword riêng. Không merge section chỉ để "gọn". |
| Metadata = Knowledge structure | Taxonomy thật sự nằm ở frontmatter, không ở URL. |
| Content = Infrastructure | Mỗi bài là một node trong knowledge graph. Stable, citable, machine-readable. |

---

2. Giải pháp cho bài toán GEO / AEO / AIO / ASO

Vấn đề

Lĩnh vực AI search optimization đang bùng nổ thuật ngữ:

GEO – Generative Engine Optimization

AEO – Answer Engine Optimization

AIO – AI Optimization

ASO – AI Search Optimization

...và sẽ còn thêm

Nếu mỗi thuật ngữ là một top-level section, site sẽ có quá nhiều category khi ngành phát triển. Nhưng nếu merge, mất giá trị SEO của từng keyword.

Giải pháp: URL serves SEO, metadata serves knowledge

URL segment     → thu hút search intent cụ thể
knowledge_domain → nhóm logic nội bộ cho AI & navigation
hub page        → kết nối tất cả lại

Cấu trúc cụ thể:

/ai-search                    ← hub page, landing page chính
/ai-search/geo/...            ← GEO cluster
/ai-search/aeo/...            ← AEO cluster
/ai-search/aio/...            ← khi cần (future)
/ai-search/aso/...            ← khi cần (future)

Hoặc phương án flat (đơn giản hơn, khuyến nghị cho v1):

/geo/...        ← GEO cluster, full keyword value
/aeo/...        ← AEO cluster, full keyword value
/technical/...  ← Implementation
/strategy/...
/reference/...
/tools/...
/case-studies/
/ai-agents/

Với frontmatter:

knowledge_domain: "ai-search-optimization"   # nhóm GEO, AEO, AIO, ASO về 1 mối
section: "geo"                                # URL segment

Quy tắc mở rộng khi có thuật ngữ mới

Khi AIO hay ASO trở nên phổ biến:

Tạo section mới /aio/ hoặc /aso/

Thêm knowledge_domain: "ai-search-optimization" vào frontmatter

Hub page /ai-search (hoặc trang chủ) tự động aggregate tất cả

Không cần refactor bất kỳ URL nào đã tồn tại

> Kết luận: Giữ /geo và /aeo riêng biệt. Đây là keyword asset quan trọng. Quản lý sự mở rộng bằng knowledge_domain trong metadata, không phải bằng URL.

---

3. URL structure – chính thức

https://geodocs.dev/{section}/{slug}

Các top-level sections

| Section | URL segment | Vai trò | Boundary rõ ràng |
|---------|-------------|---------|-----------------|
| GEO | /geo | Generative visibility, AI citation, source selection | Bài về "được AI discover, retrieve, cite" |
| AEO | /aeo | Answer formatting, extractable responses, direct answers | Bài về "viết để AI trả lời trực tiếp" |
| Technical | /technical | llms.txt, ai.txt, schema, markdown, crawl signals | Bài về implementation, file, code |
| Strategy | /strategy | Planning, ROI, measurement, operating model | Bài về business impact, content planning |
| Reference | /reference | Glossary, definitions, specs, cheatsheets | Bài tra cứu, evergreen, canonical facts |
| Tools | /tools | Tool evaluations, stack recommendations, comparisons | Bài về tools/platforms cụ thể |
| Case studies | /case-studies | Evidence, before/after, industry applications | Bài có data thực tế, ví dụ cụ thể |
| AI agents | /ai-agents | Machine-readable specs, agent-facing docs | Bài dành riêng cho AI parsers/bots |

Boundary rules – khi không chắc đặt bài vào đâu

| Bài chủ yếu nói về... | Đặt vào |
|-----------------------|---------|
| Tăng visibility trong AI search answers | /geo |
| Viết câu trả lời, FAQ, answer blocks | /aeo |
| File, schema, code, crawl signals | /technical |
| ROI, team workflow, content planning | /strategy |
| Định nghĩa, glossary, cheatsheet | /reference |
| Tool, platform, comparison | /tools |
| Ví dụ thực tế, data, before/after | /case-studies |
| Tài liệu cho AI parsers/bots | /ai-agents |

---

4. Content types – chính thức

Không xuất hiện trong URL. Nằm trong frontmatter content_type.

| Type | Dùng khi nào | Ví dụ |
|------|-------------|-------|
| definition | Canonical definition của một concept | "What is GEO?" |
| guide | Long-form, authoritative, 3000+ words | "Complete GEO Optimization Guide" |
| tutorial | Step-by-step, có thể làm theo | "How to Create llms.txt" |
| reference | Tra cứu, bảng, spec, cheatsheet | "GEO Glossary A–Z" |
| checklist | Danh sách kiểm tra hành động | "AEO Content Checklist" |
| comparison | So sánh có bảng, X vs Y | "GEO vs SEO" |
| template | File/snippet có thể copy | "llms.txt Starter Template" |
| framework | Strategic model, decision framework | "AI Visibility Measurement Framework" |
| case-study | Evidence-based example có data | "B2B SaaS GEO Case Study" |
| analysis | Opinionated, evidence-based market insight | "State of AI Search Ranking Signals" |

> news bị loại khỏi v1. Nếu cần viết về ecosystem changes, dùng analysis.

---

5. Audience system – chính thức

Schema

primary_audience: "seo-specialist"
secondary_audiences:
  - "developer"
  - "marketer"
reader_modes:
  - "human"
  - "ai-agent"

Audience values

| Value | Mô tả |
|-------|-------|
| seo-specialist | SEO/GEO/AEO specialist, technical SEO |
| developer | Engineer, implementer, technical SEO |
| marketer | Marketing manager, growth, demand gen |
| founder | Founder, operator, business owner |
| content-strategist | Writer, editor, content strategist |
| ai-agent | Machine reader, parser, bot |

> reader_modes là trường riêng. Toàn bộ geodocs.dev nên AI-readable, nhưng /ai-agents là section đặc biệt cho nội dung chuyên cho agent.

---

6. Difficulty levels

| Value | Mô tả |
|-------|-------|
| beginner | Không cần nền tảng GEO/AEO |
| intermediate | Hiểu cơ bản, muốn đi sâu |
| advanced | Technical, chuyên sâu |

---

7. Slug system – chính thức
Slug principles
- Stable.
- Human-readable.
- Search-intent aligned.
- Not over-optimized.
- Not artificially short.
- Not vague.
- Not date-based unless truly time-bound.

Cấu trúc URL

geodocs.dev/{section}/{slug}

Không có nested paths. Flat structure.

Slug patterns theo content type

| Content type | Pattern | Ví dụ |
|-------------|---------|-------|
| definition | what-is-{concept} | what-is-geo |
| comparison | {x}-vs-{y} | geo-vs-seo |
| guide | {topic}-guide | generative-engine-optimization-guide |
| tutorial | how-to-{action} | how-to-create-llms-txt |
| checklist | {topic}-checklist | aeo-content-checklist |
| template | {topic}-template | llms-txt-template |
| reference | {concept} hoặc {concept}-reference | geo-glossary |
| framework | {topic}-framework | ai-visibility-framework |
| case-study | {industry}-{topic} | b2b-saas-geo |

Slug rules

| Rule | Đúng ✅ | Sai ❌ |
|------|---------|--------|
| Lowercase, dùng - | geo-vs-seo | GEO_vs_SEO |
| Stable sau khi publish | (không đổi) | (đổi sau khi có traffic) |
| Tối đa 60 ký tự | what-is-geo | complete-guide-to-understanding-what-geo-optimization-means-for-seo |
| Được phép lặp keyword nếu cần canonical clarity | /geo/what-is-geo ✅ | /geo/what-is ❌ (quá mơ hồ) |
| Không lặp vô nghĩa | /geo/geo-optimization-for-geo-search ❌ |
| | what-is, how-to, vs được giữ khi cần | /geo/geo-vs-seo ✅ |
| | Date trong slug chỉ dùng khi nội dung time-bound | aeo-checklist-2025 (nếu bài thật sự versioned) |
|

> Rule tổng quát: Slug phải rõ nghĩa khi đứng độc lập, không phụ thuộc vào context của section.

Ví dụ slug tốt:
/geo/what-is-geo
/geo/generative-engine-optimization
/geo/geo-vs-seo
/geo/geo-vs-aeo
/aeo/what-is-aeo
/aeo/answer-engine-optimization
/technical/llms-txt
/technical/how-to-create-llms-txt
/technical/structured-data-for-ai-search
/strategy/ai-visibility-measurement
/strategy/geo-content-strategy
/reference/geo-glossary
/reference/llms-txt-cheatsheet
/tools/ai-visibility-tools
/case-studies/b2b-saas-geo
/ai-agents/content-parsing-spec

---

8. MDX frontmatter – schema chính thức

Các field có dấu * là bắt buộc. Field không có dấu là optional.

---
# ── IDENTITY ──────────────────────────────────────────────────────────
title: "What Is GEO?"                                # * ngắn, exact match search intent
slug: "what-is-geo"                                  # * khớp URL, stable vĩnh viễn sau publish
section: "geo"                                       # * geo|aeo|technical|strategy|reference|tools|case-studies|ai-agents
canonical_url: "https://geodocs.dev/geo/what-is-geo" # * full URL, không trailing slash
status: "draft"                                      # * draft | review | published | deprecated

# ── CANONICAL KNOWLEDGE LAYER ─────────────────────────────────────────
# Lớp này phục vụ AI knowledge graph và internal navigation
canonical_concept_id: "geo"                          # * concept định nghĩa, dùng để dedup
knowledge_domain: "ai-search-optimization"           # * nhóm GEO/AEO/AIO/ASO về 1 mối
concept_type: "core-concept"                         # core-concept | sub-concept | technique | tool | standard | metric
entities:                                            # * các tên gọi chính thức
  - "GEO"
  - "Generative Engine Optimization"
  - "AI search visibility"
aliases:                                             # tên gọi thay thế, dùng để cross-reference
  - "generative engine optimization"
  - "geo optimization"
  - "ai search optimization"
related_concepts:                                    # * slug của các concepts liên quan
  - "aeo"
  - "seo"
  - "ai-search"
  - "llms-txt"

# ── TAXONOMY ──────────────────────────────────────────────────────────
content_type: "definition"                           # * xem bảng content types
primary_audience: "seo-specialist"                   # * xem bảng audience
secondary_audiences:                                 # optional
  - "developer"
  - "marketer"
  - "content-strategist"
reader_modes:                                        # * human | ai-agent | both
  - "human"
  - "ai-agent"
difficulty: "beginner"                               # * beginner | intermediate | advanced
ai_platforms: []                                     # optional, bỏ trống nếu không specific

# ── SEO & DISCOVERABILITY ─────────────────────────────────────────────
description: "GEO, or Generative Engine Optimization, is the practice of structuring content so AI systems can understand, retrieve, synthesize, and cite it in generated answers."  # * 120–160 chars
focus_keyword: "what is GEO"                         # * 1 keyword chính
secondary_keywords:                                  # optional
  - "generative engine optimization"
  - "GEO vs SEO"
  - "AI search optimization"

# ── AI READABILITY ────────────────────────────────────────────────────
canonical_question: "What is GEO?"                   # * câu hỏi chính bài trả lời
llm_summary: "GEO, or Generative Engine Optimization, is the practice of structuring content so AI systems can understand, retrieve, synthesize, and cite it in generated answers. It extends traditional SEO into AI-mediated search environments."
# * Tối đa 2 câu, factual, không hype, designed for AI citation
citation_readiness: "draft"                          # * draft | reviewed | verified

# ── CONTENT LIFECYCLE ─────────────────────────────────────────────────
published_at: null                                   # * ISO 8601, null nếu chưa publish
updated_at: null                                     # optional, điền khi update đáng kể
last_reviewed_at: null                               # optional
review_cycle_days: 90                                # optional, mặc định 90 ngày cho core concepts
version: "0.1"                                       # optional

# ── RELATIONS ─────────────────────────────────────────────────────────
series: "geo-foundations"                            # optional
series_order: 1                                      # optional, bắt buộc nếu có series
related_articles:                                    # optional, tối đa 5 slugs
  - "geo-vs-seo"
  - "what-is-aeo"
  - "generative-engine-optimization-guide"

# ── I18N ──────────────────────────────────────────────────────────────
lang: "en"                                           # * en | vi | ja | ... (English-first)
translations: []                                     # optional, điền khi có bản dịch

# ── AUTHORSHIP ────────────────────────────────────────────────────────
author:"Geodocs Research Team"                       # * username
reviewed_by: null                                    # optional
---

Fields được generate tự động (không điền tay)
Các field này nên là build metadata.
Các field này nên được tính bởi build script (Velite / Contentlayer2), không cần content writer điền:

# BUILD METADATA – auto-generated, không đưa vào frontmatter thủ công
word_count: 1840
reading_time_min: 8
has_code_snippet: true
has_table: true
has_video: false
has_schema_markup: true

---

9. Article structure chuẩn

9.1 Answer-first principle

Mọi bài viết phải bắt đầu bằng câu trả lời trực tiếp trong 2–3 câu, trước bất kỳ context hay backstory nào.

Tốt:

GEO, or Generative Engine Optimization, is the practice of structuring
content so AI systems can understand, retrieve, synthesize, and cite it
in generated answers. It extends traditional SEO into AI-mediated search.

Không tốt:

In today's rapidly changing digital landscape, search engines are
evolving faster than ever before...

---

9.2 Cấu trúc bài definition – canonical pages

# What Is GEO?

{2–3 câu direct answer}

## AI summary
{1–2 câu designed for AI citation – copy từ llm_summary}

## Definition
{Định nghĩa đầy đủ, có entities, có context}

## Why it matters
{Business impact, not hype}

## How it works
{Cơ chế, không phải tips list}

## Key concepts
{Các sub-concepts cần hiểu}

## GEO vs [related concept]
{So sánh ngắn, có bảng nếu cần}

## Common misconceptions
{Clarify những gì hay bị hiểu sai}

## How to apply it
{Actionable, link đến tutorial/checklist}

## Related concepts
{Internal links đến related_concepts}

## FAQ
{3–5 câu hỏi phổ biến, answer-first}

---

9.3 Cấu trúc bài tutorial – technical pages

# How to Create llms.txt

{Direct answer: what this tutorial achieves in 1 câu}

## Overview
{Bài này làm gì, cho ai, khi nào nên dùng}

## Requirements
{Prerequisites, tools cần có}

## Step-by-step

### Step 1: {action}
### Step 2: {action}
...

## Complete example
{Full code/file example}

## Validation
{Cách kiểm tra đã làm đúng chưa}

## Common mistakes
{Top 3–5 lỗi hay gặp}

## Related references
{Internal links}

---

9.4 AI summary block – bắt buộc cho mọi bài

Đặt ngay sau heading đầu tiên, trước phần body:

> **AI summary:** GEO helps content become more visible in AI-generated
> answers by improving structure, entity clarity, topical authority,
> and citation readiness.

Block này là source of truth cho llm_summary trong frontmatter.

---

10. Canonical knowledge graph

Geodocs.dev không chỉ có "bài viết" – nó có knowledge nodes.

4 loại knowledge assets

| Asset type | Mục tiêu | Ví dụ |
|------------|----------|-------|
| Canonical pages | Định nghĩa ngành | /geo/what-is-geo, /aeo/what-is-aeo |
| Implementation pages | Giúp developer triển khai | /technical/llms-txt, /technical/how-to-create-llms-txt |
| Strategy pages | Giúp marketer/founder ra quyết định | /strategy/ai-visibility-measurement |
| Reference pages | Tra cứu nhanh cho cả người và AI | /reference/geo-glossary |

Hierarchy rõ ràng

knowledge_domain: "ai-search-optimization"
  ├── section: geo
  │   ├── concept_type: core-concept  → what-is-geo
  │   ├── concept_type: technique     → geo-vs-seo, geo-content-strategy
  │   └── concept_type: guide         → generative-engine-optimization-guide
  ├── section: aeo
  │   ├── concept_type: core-concept  → what-is-aeo
  │   └── concept_type: technique     → answer-engine-optimization-guide
  ├── section: technical
  │   ├── concept_type: standard      → llms-txt, ai-txt
  │   └── concept_type: technique     → structured-data-for-ai-search
  └── section: reference
      └── concept_type: reference     → geo-glossary

---

11. 20 bài đầu tiên – canonical foundation

Thứ tự priority quan trọng. 20 bài này là nền móng authority của geodocs.dev trước khi scale.

| # | Title | URL | Type | Primary audience | Priority |
|---|-------|-----|------|-----------------|----------|
| 1 | What Is GEO? | /geo/what-is-geo | definition | seo-specialist | 🔴 P0 |
| 2 | What Is AEO? | /aeo/what-is-aeo | definition | seo-specialist | 🔴 P0 |
| 3 | GEO vs SEO | /geo/geo-vs-seo | comparison | seo-specialist | 🔴 P0 |
| 4 | GEO vs AEO | /geo/geo-vs-aeo | comparison | seo-specialist | 🔴 P0 |
| 5 | GEO/AEO Glossary | /reference/geo-aeo-glossary | reference | seo-specialist | 🔴 P0 |
| 6 | llms.txt Reference | /technical/llms-txt | reference | developer | 🔴 P0 |
| 7 | What Is AI Search Visibility? | /geo/what-is-ai-search-visibility | definition | marketer | 🟠 P1 |
| 8 | Generative Engine Optimization Guide | /geo/generative-engine-optimization-guide | guide | seo-specialist | 🟠 P1 |
| 9 | Answer Engine Optimization Guide | /aeo/answer-engine-optimization-guide | guide | seo-specialist | 🟠 P1 |
| 10 | How to Create llms.txt | /technical/how-to-create-llms-txt | tutorial | developer | 🟠 P1 |
| 11 | ai.txt Reference | /technical/ai-txt | reference | developer | 🟠 P1 |
| 12 | Structured Data for AI Search | /technical/structured-data-for-ai-search | tutorial | developer | 🟠 P1 |
| 13 | AI Visibility Measurement | /strategy/ai-visibility-measurement | framework | marketer | 🟡 P2 |
| 14 | GEO Content Strategy | /strategy/geo-content-strategy | framework | content-strategist | 🟡 P2 |
| 15 | AEO Content Checklist | /aeo/aeo-content-checklist | checklist | seo-specialist | 🟡 P2 |
| 16 | llms.txt Template | /technical/llms-txt-template | template | developer | 🟡 P2 |
| 17 | What Is Answer Grounding? | /aeo/what-is-answer-grounding | definition | seo-specialist | 🟡 P2 |
| 18 | AI Search Ranking Signals | /geo/ai-search-ranking-signals | reference | seo-specialist | 🟡 P2 |
| 19 | GEO ROI Framework | /strategy/geo-roi-framework | framework | founder | 🟡 P2 |
| 20 | AI Agent Content Spec | /ai-agents/content-spec | reference | ai-agent | 🟡 P2 |

> Tools và case studies bắt đầu sau khi 20 bài P0/P1 đã hoàn thành.

---

12. Multilingual planning

English-first policy:

Tất cả content gốc viết bằng English

Slug luôn là English, không bao giờ thay đổi theo ngôn ngữ

Bản dịch dùng sub-path hoặc prefix:

/geo/what-is-geo          → English (canonical)
/vi/geo/what-is-geo       → Vietnamese
/ja/geo/what-is-geo       → Japanese (future)

Frontmatter cho multilingual:

lang: "en"
translations:
  - lang: "vi"
    url: "/vi/geo/what-is-geo"
  - lang: "ja"
    url: "/ja/geo/what-is-geo"

Lưu ý khi implement:

canonical_url luôn trỏ về bản English

Dùng hreflang tags đúng chuẩn

Bản dịch có thể có slug dịch hoặc giữ nguyên English slug – giữ nguyên English slug là đơn giản hơn

---

13. Editorial checklist trước khi publish

Frontmatter checklist

[ ] slug khớp đúng URL path, stable

[ ] section thuộc 8 giá trị được phép

[ ] content_type thuộc 10 giá trị được phép

[ ] canonical_concept_id đã điền

[ ] knowledge_domain đã điền

[ ] entities có ít nhất 1 giá trị

[ ] description từ 120–160 ký tự

[ ] canonical_url là full URL, không trailing slash

[ ] llm_summary có mặt, dưới 2 câu, factual

[ ] citation_readiness không phải draft khi publish

[ ] status: "published" chỉ set khi review xong

[ ] lang: "en" đã điền

Content checklist

[ ] Bài bắt đầu bằng direct answer (answer-first)

[ ] Có AI summary block ngay sau heading đầu

[ ] Headings semantic (H2 là main sections, H3 là sub-sections)

[ ] Không có claims hype không có cơ chế giải thích

[ ] Có ít nhất 1 internal link đến related_concepts

[ ] Kết thúc có next steps hoặc related articles

---

14. Operating rules cho content team

One concept, one canonical page. Không tạo bài mới nếu concept đã có canonical page – chỉ update bài cũ.

Không đổi slug sau publish. Mọi redirect phải có policy rõ.

Mọi bài phải có `llm_summary`. Đây là brand standard, không phải optional.

Mọi bài phải map vào `canonical_concept_id`. Không có bài viết "mồ côi".

Definition pages review mỗi 90 ngày. Set review_cycle_days: 90.

Không publish claims mà không có cơ chế. "AI ignores this" phải giải thích tại sao.

Answer-first là mandatory. Không mở bài bằng context, backstory, hay hook.

`citation_readiness` phải là `reviewed` trước khi publish. Không tự set verified khi chưa có quy trình review.

`knowledge_domain` phải nhất quán. GEO, AEO, AIO, ASO đều thuộc ai-search-optimization.

AI agents là first-class readers. Mọi bài đều cần AI summary block.