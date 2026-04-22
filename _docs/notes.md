# Notes — Stelixx Side Projects

Last updated: 2026-04-18

---

## Cloudflare Infrastructure

Account: **89120d03ba4cfda8015ef780b890064e** (Stelixx | Side Projects)

### Workers (production, deployed 2026-04-18)

| Worker | Custom Domain | workers.dev URL |
|---|---|---|
| llmstxt-codes | https://llmstxt.codes | https://llmstxt-codes.gnokaar.workers.dev |
| aibotcheck-tech | https://aibotcheck.tech | https://aibotcheck-tech.gnokaar.workers.dev |
| geodocs-dev | https://geodocs.dev | https://geodocs-dev.gnokaar.workers.dev |

### D1 Databases

| Worker | DB Name | DB ID |
|---|---|---|
| llmstxt-codes | llmstxt-codes-d1-db | 5ceac295-aad4-40eb-ae99-3b8a84f75c17 |
| aibotcheck-tech | aibotcheck-tech-d1-db | 797a2ec5-83a0-4dc2-9ca7-d17cf230a64b |
| geodocs-dev | geodocs-dev-d1-db | b429ca62-4c83-492a-94c2-c7ead01732fb |

### R2 Buckets

| Worker | Bucket Name |
|---|---|
| llmstxt-codes | llmstxt-codes-r2-bucket |
| geodocs-dev | geodocs-tech-r2-bucket |

### KV Namespaces (auto-provisioned, sessions)

| Worker | KV Name | KV ID |
|---|---|---|
| llmstxt-codes | llmstxt-codes-session | 4d720a3a71e947019b6b0886df4637d3 |
| aibotcheck-tech | aibotcheck-tech-session | a2e8acd41c6b47e5ab8a73328c9bce5e |
| geodocs-dev | geodocs-dev-session | e8979cb0dbb94b6fa000a9d76d6cc83d |

> Deploy guide: see `_docs/DEPLOY.md`

---

## Secrets (Workers)

| Worker | Secret | Value |
|---|---|---|
| geodocs-dev | ADMIN_KEY | bnnyd5bd-ac3c-19a-a763-16fdf38676ef |

---

- Cloudflare Account Id: 89120d03ba4cfda8015ef780b890064e (Stelixx | Side Projects)
- Posthog: congnv.gnoc
  - geodocs.dev:
    - Project token: phc_yTYSoz2PVwm2Em2ScVBcKQEwzpBf23288U8J9fzvTEww
    - Project Id: 386049
  - llmstxt.codes:
    - Project token: phc_kqShYSPisPHXqauxsnz4r6CQD8cutxkPNtz2JviopaUQ
    - Project Id: 385718
  - aibotcheck.tech
    - Project token: phc_z3Vxewco3XXXr9n59pKwnUFTgXRWuWsCpG7kzbRfd3KD
    - Project Id: 386072
- Google Tag Manager & GA4:
    - geodocs.dev:
        - GTM: GTM-WSR3LNJ4
        - GA4: G-LSXGYZFZWP
    - llmstxt.codes:
        - GTM: GTM-T9GNJC48
        - GA4: G-92Q05QMJM4
    - aibotcheck.tech:
        - GTM: GTM-ML39P22D
        - GA4: G-J4VETG7STS
- Admin_Keys:
  - geodocs.dev: bnnyd5bd-ac3c-19a-a763-16fdf38676ef
- Dịch vụ gửi email:
  - Resend: 
    - API Key: re_RTwDGXQc_C6n2okgg3UPaXxaij32io96Z
- mcp/api:
  - posthog: 
  - cloudflare:
- Code để chèn Google Tag Manager mới nhất (cần cập nhật GTM code):
    1. Dán đoạn mã này vào phần <head> của trang ở vị trí cao nhất có thể:
 <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-<gtm-code>');</script>
<!-- End Google Tag Manager -->
    2. Dán đoạn mã này ngay sau thẻ mở <body>:
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-<gtm-code>"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->