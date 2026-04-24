# **Geodocs.dev – Foundation & Brand Strategy**

> **Version:** 1.1 | **Status:** Final | **Audience:** Founder, content team

> Đây là tài liệu nền tảng của geodocs.dev. Mọi quyết định về content, product, và brand phải tham chiếu doc này trước.

---

## **1. Bức tranh lớn**

### **Vấn đề thị trường**

AI search đã đạt mainstream scale:

* ChatGPT xử lý hàng trăm triệu queries mỗi ngày  
* Google AI Overviews xuất hiện trên phần lớn SERP tại Mỹ  
* Perplexity, Claude, Gemini đang thay thế cách người dùng tìm kiếm thông tin

Nhưng kiến thức về cách tối ưu cho AI search vẫn **cực kỳ phân mảnh**:

| Vấn đề | Biểu hiện |
|--------|----------|
| Fragmented | Nằm rải rác ở marketing blog, Twitter thread, LinkedIn post |
| Paywalled | Các course, community trả phí, không accessible |
| Unstructured | Không machine-readable, AI không cite được |
| Hype-driven | Thiếu evidence, thiếu cơ chế, thiếu practical implementation |
| Unstable | Không có canonical source – ai cũng define GEO theo cách riêng |

**Geodocs.dev tồn tại để giải quyết bài toán này.**

---

### **Cơ hội chiến lược**

Trong bất kỳ ngành nào đang thay đổi nhanh, người định nghĩa ngôn ngữ và chuẩn mực sẽ có authority lâu dài nhất. Hiện tại không có nơi nào đang giữ vai trò đó cho GEO/AEO một cách nghiêm túc.

Đây là cơ hội để geodocs.dev trở thành:

* **Canonical source** – nơi mà ngay cả AI systems trích dẫn khi được hỏi "GEO là gì?"  
* **Infrastructure layer** – không phải blog, mà là knowledge system mà cả người và AI đều dùng để ra quyết định  
* **Standard setter** – nơi định nghĩa terminology, methodology, và best practice cho một ngành đang hình thành

---

## **2. Mission, vision & positioning**

### **Mission**

> **Define, structure, and operationalize GEO/AEO knowledge for the next era of search.**

Geodocs.dev không chỉ viết về AI search optimization. Nó đang xây dựng knowledge infrastructure cho một lĩnh vực đang định hình.

### **Vision**

> **Trở thành nơi mà bất kỳ ai – dù là người hay AI agent – khi cần câu trả lời về GEO/AEO đều tìm đến geodocs.dev đầu tiên.**

### **Positioning**

> **Geodocs.dev là hệ thống tri thức chuẩn về GEO, AEO, và AI search visibility – được xây dựng cho SEO professionals, developers, content teams, và AI agents.**

### **Brand promise**

> **Turn fragmented AI-search knowledge into structured, practical, and citable documentation.**

### **Tagline**

> **Structured knowledge for AI search visibility.**

---

## **3. Target users & personas**

### **3.1 Primary ICP – v1 adoption engines**

#### **Persona 1: The GEO/SEO specialist**

**Mô tả:**

* SEO professional với 3–10 năm kinh nghiệm  
* Đang chuyển đổi từ traditional SEO sang AI search optimization  
* Cần authoritative guidance, không phải opinion pieces  
* Đọc để đưa ra quyết định, không phải để giải trí

**Nhu cầu cốt lõi:**

* Biết GEO/AEO khác SEO như thế nào và về mặt kỹ thuật  
* Hiểu AI ranking signals là gì  
* Có framework để audit và optimize content hiện tại  
* Có checklist để triển khai ngay

**Dấu hiệu thành công trên geodocs.dev:**

* Đọc xong bài (scroll 90%+)  
* Copy code snippets hoặc download templates  
* Quay lại trong vòng 7 ngày  
* Đọc nhiều hơn 3 bài trong 1 session

---

#### **Persona 2: The developer / technical implementer**

**Mô tả:**

* Software engineer, DevRel, hoặc technical SEO  
* Cần exact implementation specs, không phải conceptual overview  
* Đọc reference docs và tutorials, không phải guides  
* Tin tưởng code hơn prose

**Nhu cầu cốt lõi:**

* Spec chính xác cho llms.txt, ai.txt, structured data  
* Working code examples có thể copy  
* Validation methods – biết mình đã implement đúng chưa  
* Edge cases và common mistakes

**Dấu hiệu thành công trên geodocs.dev:**

* Copy code, download templates  
* Đọc reference docs theo chiều sâu  
* Refer từ GitHub, Stack Overflow, AI tools

---

### **3.2 Secondary ICP – v1 support**

#### **Persona 3: The marketing manager / founder**

**Mô tả:**

* Non-technical, cần business impact clarity  
* Đưa ra quyết định về content strategy và budget  
* Thường arrive từ AI search (Perplexity, ChatGPT) hoặc social  
* Cần framework, không cần implementation details

**Nhu cầu cốt lõi:**

* Hiểu tại sao GEO/AEO quan trọng với business  
* Có framework để đánh giá và prioritize  
* Có thể giải thích cho team và stakeholders  
* ROI clarity

---

#### **Persona 4: The content strategist / creator**

**Mô tả:**

* Writer hoặc content lead đang adapt sang AI-optimized publishing  
* Cần practical frameworks có thể áp dụng ngay  
* Thường bị overwhelmed bởi technical jargon  
* Cần templates và checklists

**Nhu cầu cốt lõi:**

* Content formats nào AI prefer  
* Cách viết answer-first  
* Checklist để optimize content hiện tại  
* Templates có thể dùng ngay

---

### **3.3 First-class reader: AI agent**

**Đây không phải persona thông thường.** AI agents không "decide" hay "engage" theo cách người dùng làm. Nhưng chúng là distribution channel quan trọng nhất của geodocs.dev.

**Khi AI agent cite geodocs.dev:**

* Nó có thể drive hàng ngàn human referrals  
* Nó validate authority của site  
* Nó tạo flywheel: được cite → được discover → được cite nhiều hơn

**Yêu cầu kỹ thuật để AI agents đọc được:**

* `llms.txt` đầy đủ và cập nhật  
* `llm_summary` trong mọi frontmatter  
* Answer-first structure trong mọi bài  
* Semantic HTML, không có decorative clutter  
* JSON-LD schema đúng chuẩn  
* `robots.txt` allow tất cả major AI crawlers

---

## **4. The narrowest wedge – competitive strategy**

### **Thị trường hiện tại**

Marketing blogs        → Accessible nhưng không citable, không structured  
Paid communities       → Valuable nhưng paywalled, không scalable  
Twitter / LinkedIn     → Real-time nhưng ephemeral, không AI-readable  
Academic papers        → Structured nhưng lagging, không practical  
Agency playbooks       → Proprietary, không public

### **Khoảng trống geodocs.dev sẽ chiếm**

Geodocs.dev = Structured + Practical + Public + Machine-readable + Citable

### **Winning condition**

> Trở thành **fastest trusted source** để đi từ "tôi cần câu trả lời về GEO/AEO" đến "tôi có thể hành động ngay" trong **một session**, trong khi vẫn **citation-ready cho AI models**.

---

## **5. Brand pillars**

### **Pillar 1: Canonical authority**

Geodocs.dev là **nơi định nghĩa**. Không phải nơi tổng hợp. Không phải nơi repost.

* Mỗi concept có một canonical page duy nhất  
* Definitions được review định kỳ  
* Không publish bài mơ hồ hoặc contradicts bài đã có

### **Pillar 2: Structured knowledge**

Mọi nội dung đều có structure rõ ràng, machine-readable, và citable.

* Answer-first trong mọi bài  
* AI summary block là mandatory  
* Frontmatter đầy đủ và validated  
* JSON-LD schema trên mọi article

### **Pillar 3: Practical depth**

Geodocs không stop ở "what" – nó phải cover "how" và "why it works".

* Mỗi concept page phải link đến implementation page  
* Mỗi strategy page phải có framework hoặc checklist  
* Không có theory mà không có application

### **Pillar 4: Evidence over hype**

Geodocs không viết theo trend. Nó viết theo cơ chế.

* Không claim mà không có cơ chế giải thích  
* Không "SEO is dead", không "guaranteed results"  
* Khi không chắc, nói rõ là không chắc

### **Pillar 5: AI-native publishing**

Geodocs được xây cho cả người và AI đọc. Đây không phải afterthought.

* `llms.txt` luôn cập nhật  
* AI crawlers được welcome trong `robots.txt`  
* Content structure đặt AI readability ngang human readability

---

## **6. Brand voice & tone**

### **Voice – không thay đổi**

**Clear · Canonical · Technical · Practical · Calm**

Geodocs nên đọc như: > *"Một technical SEO architect đang viết tài liệu chuẩn cho một ngành mới – không phải để impress, mà để người đọc có thể hành động ngay."*

### **Tone – thay đổi theo context**

| Context | Tone |
|---------|------|
| Definition pages | Neutral, precise, không hedge không hype |
| Guides | Authoritative, structured, explanatory |
| Tutorials | Direct, step-by-step, assume competence |
| Strategy articles | Analytical, business-aware, measured |
| Reference docs | Concise, factual, scannable |
| Comparisons | Fair, evidence-based, không thiên vị |

### **Những gì brand không nói**

| Tránh | Thay bằng |
|-------|-----------|
| "SEO is dead." | "AI search changes how visibility is earned." |
| "Hack ChatGPT." | "Structure content so AI systems can retrieve it." |
| "Dominate AI search." | "Build consistent citation signals over time." |
| "Secret trick." | "Mechanism: why this works." |
| "Explode your traffic." | "Improve AI search visibility." |
| "The only guide you'll ever need." | (Không nói. Chất lượng tự nói.) |
| "In today's rapidly changing..." | (Vào thẳng câu trả lời.) |

---

## **7. Content philosophy**

### **7.1 Answer-first principle**

Mọi bài bắt đầu bằng direct answer trong 2–3 câu. Không có warm-up, không có "in this article we will explore...".

**Tại sao:**

* AI systems extract answers từ đầu bài  
* Busy readers quyết định có đọc tiếp không trong 3 giây đầu  
* Definition-first là brand standard của geodocs

### **7.2 One concept, one canonical page**

Không có duplicate definitions. Nếu cần update definition → update canonical page, không tạo bài mới.

### **7.3 Evergreen first, timely second**

Priority cho content sẽ còn đúng sau 2 năm.

* Core concepts: review mỗi 90 ngày  
* Implementation guides: review khi có thay đổi kỹ thuật  
* Tools comparisons: review mỗi 6 tháng

### **7.4 Structure as a signal**

Structure không chỉ là UX – nó là signal cho cả người và AI rằng content này đáng tin cậy.

* Headings semantic (H1 → H2 → H3, không skip)  
* Mỗi section có một mục tiêu rõ ràng  
* Tables cho comparisons, không phải prose dài  
* Bulleted lists cho enumerations

### **7.5 Citation readiness là minimum bar**

Trước khi publish, mỗi bài phải đạt:

* Có `llm_summary` factual, dưới 2 câu  
* Có AI summary block trong body  
* Không có unverified claims

---

## **8. Content architecture**

### **4 loại knowledge assets**

| Asset | Mục tiêu | Ví dụ |
|-------|----------|-------|
| **Canonical pages** | Định nghĩa ngành | `/geo/what-is-geo` |
| **Implementation pages** | Giúp developer build | `/technical/llms-txt` |
| **Strategy pages** | Giúp marketer decide | `/strategy/geo-roi-framework` |
| **Reference pages** | Tra cứu cho người + AI | `/reference/geo-glossary` |

### **Content priority theo phase**

Phase 1 (bài 1–20):    Canonical foundation  
                        → What is GEO/AEO, core comparisons, core technical specs  
                        → Mục tiêu: establish authority trước khi scale

Phase 2 (bài 21–100):  Depth expansion  
                        → Full guides, tutorials, checklists, frameworks  
                        → Mục tiêu: cover full ICP needs

Phase 3 (bài 101–300): Breadth expansion  
                        → Tools, case studies, industry-specific  
                        → Mục tiêu: long-tail coverage, diverse entry points

Phase 4 (bài 301–1000): Scale  
                        → Multilingual, vertical-specific, community contributions  
                        → Mục tiêu: defensible knowledge moat

### **20 bài đầu tiên – canonical foundation**

| # | Title | URL | Type | Primary audience |
|---|-------|-----|------|-----------------|
| 1 | What Is GEO? | `/geo/what-is-geo` | `definition` | seo-specialist |
| 2 | What Is AEO? | `/aeo/what-is-aeo` | `definition` | seo-specialist |
| 3 | GEO vs SEO | `/geo/geo-vs-seo` | `comparison` | seo-specialist |
| 4 | GEO vs AEO | `/geo/geo-vs-aeo` | `comparison` | seo-specialist |
| 5 | GEO/AEO Glossary | `/reference/geo-aeo-glossary` | `reference` | seo-specialist |
| 6 | llms.txt Reference | `/technical/llms-txt` | `reference` | developer |
| 7 | What Is AI Search Visibility? | `/geo/what-is-ai-search-visibility` | `definition` | marketer |
| 8 | Generative Engine Optimization Guide | `/geo/generative-engine-optimization-guide` | `guide` | seo-specialist |
| 9 | Answer Engine Optimization Guide | `/aeo/answer-engine-optimization-guide` | `guide` | seo-specialist |
| 10 | How to Create llms.txt | `/technical/how-to-create-llms-txt` | `tutorial` | developer |
| 11 | ai.txt Reference | `/technical/ai-txt` | `reference` | developer |
| 12 | Structured Data for AI Search | `/technical/structured-data-for-ai-search` | `tutorial` | developer |
| 13 | AI Visibility Measurement | `/strategy/ai-visibility-measurement` | `framework` | marketer |
| 14 | GEO Content Strategy | `/strategy/geo-content-strategy` | `framework` | content-strategist |
| 15 | AEO Content Checklist | `/aeo/aeo-content-checklist` | `checklist` | seo-specialist |
| 16 | llms.txt Template | `/technical/llms-txt-template` | `template` | developer |
| 17 | What Is Answer Grounding? | `/aeo/what-is-answer-grounding` | `definition` | seo-specialist |
| 18 | AI Search Ranking Signals | `/geo/ai-search-ranking-signals` | `reference` | seo-specialist |
| 19 | GEO ROI Framework | `/strategy/geo-roi-framework` | `framework` | founder |
| 20 | AI Agent Content Spec | `/ai-agents/content-spec` | `reference` | ai-agent |

---

## **9. Operating rules – tổng hợp**

1. **One concept, one canonical page.** Không duplicate definitions.  
2. **Answer-first là mandatory.** Mọi bài, không có ngoại lệ.  
3. **`llm_summary` là bắt buộc.** Không publish thiếu field này.  
4. **Slug không thay đổi sau publish.** Mọi redirect phải có policy.  
5. **Không claim mà không có cơ chế.** Evidence over hype.  
6. **AI crawlers được welcome.** `robots.txt` phải allow, `llms.txt` phải cập nhật.  
7. **Definition pages review mỗi 90 ngày.** Set `review_cycle_days`.  
8. **`knowledge_domain` nhất quán.** GEO, AEO, AIO, ASO đều là `ai-search-optimization`.  
9. **Structure là signal.** Headings semantic, tables cho comparisons, answer block đúng vị trí.  
10. **AI agents là first-class readers.** Không phải afterthought.

---

## **10. Multilingual strategy**

**English-first policy:**

* Tất cả content gốc viết bằng English  
* Slug luôn là English, không bao giờ thay đổi theo ngôn ngữ  
* Bản dịch dùng sub-path prefix: `/vi/`, `/ja/`...

**Priority ngôn ngữ (dự kiến):**

v1: English only  
v2: Vietnamese (internal market, founder's network)  
v3+: Japanese, Spanish, Portuguese (theo traffic data)


