# Project Cleanup Candidates

> Review mỗi mục và đánh dấu `[ ]` → `[x]` vào cột **Confirm Xoá** để xác nhận.
> Sau khi xác nhận xong, báo lại để thực hiện xoá hàng loạt.

---

## Tóm tắt ước lượng tiết kiệm

| Loại | Kích thước ước tính | Ghi chú |
|---|---|---|
| Build logs (tracked trong git) | ~572 KB | Đang tracked trong git — cần untrack + xoá |
| `build/` folder (local) | ~129 MB | Gitignored, có thể `npm run build` lại |
| `.docusaurus/` folder (local) | ~6.8 MB | Cache Docusaurus, gitignored |
| Static assets mồ côi | nhỏ | Logo, ảnh không được dùng |
| Dead source code | nhỏ | 1 component không được import |
| **Tổng local disk** | **~136 MB+** | |
| **Tổng từ git tracking** | **~572 KB** | Giảm repo size khi untrack |

---

## Nhóm 1 — Build Logs (Committed vào Git — Ưu tiên cao)

Những file này **không nên ở trong git**. Chúng là output của lệnh build, được commit vào git một cách không cần thiết. Cần `git rm` để untrack và xoá.

| # | File | Kích thước | Confirm Xoá |
|---|---|---|---|
| 1.1 | `build_full.log` | ~114 KB | [ ] |
| 1.2 | `build_log.txt` | ~115 KB | [ ] |
| 1.3 | `build_output.log` | ~114 KB | [ ] |
| 1.4 | `build_output.txt` | ~114 KB | [ ] |
| 1.5 | `build_output_targeted.txt` | ~115 KB | [ ] |

**Hành động kèm theo:** Thêm các patterns này vào `.gitignore` để không bị commit lại.

---

## Nhóm 2 — Thư mục Generated/Cache (Chỉ local, không ở git)

Những thư mục này đã được gitignore đúng cách nhưng đang chiếm disk local. Xoá an toàn vì có thể tái tạo.

| # | Thư mục | Kích thước | Cách tái tạo | Confirm Xoá |
|---|---|---|---|---|
| 2.1 | `build/` | ~129 MB | `npm run build` | [ ] |
| 2.2 | `.docusaurus/` | ~6.8 MB | tự động khi `npm start` hoặc `npm run build` | [ ] |

> ⚠️ `node_modules/` (3.5 GB) cũng là local-only, gitignored — không đưa vào đây vì thường xuyên được dùng, nhưng có thể xoá và chạy `npm install` lại bất kỳ lúc nào.

---

## Nhóm 3 — Static Assets Mồ Côi (Không được tham chiếu)

Các file này nằm trong `static/logo/` và `static/img/` nhưng **không có bất kỳ chỗ nào** trong source code, docs, hay config tham chiếu tới.

| # | File | Lý do mồ côi | Confirm Xoá |
|---|---|---|---|
| 3.1 | `static/logo/dyte.svg` | Old Dyte brand logo. Config chỉ dùng `light.svg` và `dark.svg`. | [ ] |
| 3.2 | `static/img/gdpr_docs.png` | Không có tham chiếu trong source, docs, hay config. | [ ] |
| 3.3 | `static/img/soc-compliant-1.png` | Không có tham chiếu trong source, docs, hay config. | [ ] |
| 3.4 | `static/img/vector.png` | Không có tham chiếu trong source, docs, hay config. | [ ] |

> ℹ️ `static/img/dyte-docs-card.png` **GIỮ LẠI** — đang dùng làm OG image trong `docusaurus.config.js`.

---

## Nhóm 4 — Dead Source Code

Component này không được import ở bất kỳ đâu ngoài file định nghĩa của nó.

| # | File | Lý do | Confirm Xoá |
|---|---|---|---|
| 4.1 | `src/components/GuidesSection.jsx` | Không được import hoặc sử dụng ở bất kỳ page, layout, hay theme nào. | [ ] |

---

## Nhóm 5 — Internal Dev Docs (Không ảnh hưởng build)

Các file này trong `_docs/` chỉ là tài liệu nội bộ cho dev team. Không ảnh hưởng gì đến build hay runtime. Xoá nếu không còn cần dùng để tra cứu.

| # | File | Mô tả | Confirm Xoá |
|---|---|---|---|
| 5.1 | `_docs/DESIGN-SYSTEM-IMPLEMENTATION.md` | Tracking log quá trình implement design system — có thể đã hoàn thành. | [ ] |
| 5.2 | `_docs/DESIGN-SYSTEM-INTEGRATION-SUMMARY.md` | Tóm tắt tích hợp design system — nội dung đã merge vào `design-system.md`. | [ ] |
| 5.3 | `_docs/design-plan.md` | Plan thiết kế cũ, nội dung đã được thực thi. | [ ] |
| 5.4 | `_docs/notes.md` | Scratch notes nội bộ. | [ ] |

---

## Nhóm 6 — Legacy Pages (Cần xác nhận từ bạn)

Những file này vẫn sinh ra route URL khi build. Cần bạn xác nhận có muốn giữ lại hay không.

| # | File | Route sinh ra | Lý do nghi ngờ | Confirm Xoá |
|---|---|---|---|---|
| 6.1 | `src/pages/getting-started.mdx` | `/getting-started` | Nội dung hoàn toàn về Dyte SDK (cũ), không liên quan đến Geodocs/GEO. Không được link từ homepage hay navbar. | [ ] |

---

## Không Đề Xuất Xoá (Giải thích lý do)

| File/Thư mục | Lý do GIỮ LẠI |
|---|---|
| `static/static/` (46 MB) | Toàn bộ các thư mục bên trong đều được dùng bởi docs qua path `/static/...` |
| `static/assets/fonts/` | Được load trong `src/css/custom.css` (Inter, PlusJakartaSans, FiraCode) |
| `static/assets/css/elements.min.css` | Được load trong `src/pages/api.jsx` và `src/pages/index.jsx` |
| `static/assets/css/docsly.min.css` | Được load trong `src/theme/Footer/index.jsx` |
| `static/logo/light.svg`, `dark.svg` | Dùng trong `docusaurus.config.js` navbar |
| `static/logo/geodocs-logo-full-rectangle-transparentbg.svg` | Dùng trong `HomeFooter.jsx` |
| `static/logo/geodocs_dark_logo.svg` | Dùng trong `HomeFooter.jsx` |
| `modules/*.tgz` | Local SDK packages được reference trong `package.json` bằng `file:modules/...` |
| `patches/` | Dùng bởi `patch-package` trong `postinstall` script |
| `src/snippets/` | `docusaurus.config.js` đọc 2 file HTML này vào navbar |
| `src/faq.js` + `src/faq.yaml` | Import bởi `src/pages/faq.jsx` |
| `src/sections.ts` | Import bởi `src/lib/useSectionMenu.ts` |
| `src/components/GuidesSection.jsx` giữ lại cho **Nhóm 4** review | Nếu có kế hoạch dùng lại thì giữ |
| `_docs/GEODOCS-FOUNDATION.md` | Được reference trong copilot instructions |
| `_docs/GEODOCS-TAXONOMY-SCHEMA.md` | Được reference trong copilot instructions (đã bị xoá trong git nhưng là working doc) |
| `src/components/homepage/PhHelloBar.jsx` | Import còn tồn tại trong `index.jsx` dù usage bị comment — cần xoá import trước khi xoá file |

---

## Hướng dẫn sau khi confirm

1. Đánh dấu `[x]` vào từng mục bạn muốn xoá
2. Báo lại — mình sẽ thực hiện theo đúng thứ tự:
   - Nhóm 1: `git rm` + thêm vào `.gitignore`
   - Nhóm 2, 3, 4, 5: `rm` thông thường
   - Nhóm 6: `rm` + kiểm tra broken links sau
