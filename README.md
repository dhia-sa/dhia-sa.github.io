# Portfolio — Dhia Salsabila

Static portfolio site (HTML + Tailwind via CDN), hosted on GitHub Pages.

```
portfolio/
├── index.html                  # main page
├── assets/
│   ├── projects.js             # ← your project list (edit this to add projects)
│   ├── resume.pdf              # add your resume here
│   └── img/                    # screenshots
└── projects/
    ├── warehouse-pipeline.html # example case study
    └── template.html           # copy this for each new project
```

## Deploy to GitHub Pages
1. Create a public repo named **`dhia-sa.github.io`** on GitHub.
2. Upload all files in this folder (drag & drop on github.com, or `git push`).
3. Go to **Settings → Pages → Source: Deploy from a branch → `main` / root** → Save.
4. After ~1 minute the site is live at `https://dhia-sa.github.io`.

## Before publishing
- Fill in the years in Experience, and add `assets/resume.pdf`.
- Fill the `TODO` / `[X]` placeholders in the case studies.
- Blur company names, real numbers and customer data in every screenshot.

## Add a new project
1. Copy `projects/template.html` → `projects/my-project.html` and fill it in.
2. Add an entry to `PROJECTS` in `assets/projects.js` with `link: "projects/my-project.html"`.
