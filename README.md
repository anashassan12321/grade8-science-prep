# Grade 8 Science Prep

A mobile-first study-prep site for the Grade-8 / Pre-9 admission test. Six
subjects from the official admission outline:

| Subject | Topics |
| --- | --- |
| 🧮 Mathematics | Prime Numbers · HCF · LCM · Basic Algebra · Percentage · Ratio & Rate |
| 📚 English | Noun Types · Degrees of Adjectives · Three Forms of Verbs · Tenses · Translation · Comprehension · Paragraph Writing |
| 🧬 Biology | Transportation in Plants · Digestive System · Blood Circulatory System |
| 🧪 Chemistry | Atoms & Molecules · Metals & Non-Metals · Acids & Bases |
| ⚡ Physics | Force · Electricity · Light · Energy · Heat Transfer |
| 📖 Urdu | نکاتی خاکہ · واحد و جمع · مذکر و مونث · مترادف · متضاد · الفاظ و جملے · لفظی گنتی · پیراگراف نگاری |

Each topic has a **definition**, **key facts**, an **Explain-Like-I'm-5** example,
**Q&A accordion** (auto-expanding to any length) and a **Test Yourself** MCQ block.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:5173/grade8-science-prep/`.

## Production build

```bash
npm run build
```

Output goes to `dist/`. The build emits **relative** asset paths (`./assets/…`)
so the same `dist/` folder can be deployed to either root hosts (Cloudflare
Pages, Netlify, Vercel) **or** sub-path hosts (GitHub Pages).

## Cloudflare Pages

1. Push this repo to GitHub.
2. In Cloudflare Pages → **Create application** → **Pages** → **Connect to Git** → pick this repo.
3. Build settings:
   - **Framework preset:** None (or "Vite")
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 20  (set via `NODE_VERSION=20` env var if your default is older)
4. Click **Save and Deploy**.

The `_redirects` file in this repo sends any unknown path to `/index.html`
with a 200 — handy for clean URLs like `/math` instead of `/math.html`.

## GitHub Pages

The build also works on GitHub Pages at
`https://<user>.github.io/grade8-science-prep/` — relative asset paths resolve
correctly under the sub-path.
