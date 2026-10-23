# SkillPoint Cambridge Revision

A clean syllabus-first revision website covering 40 Cambridge subject routes across IGCSE, O Level, AS Level and A Level.

## Content policy

- The latest official Cambridge syllabus currently published for each subject controls the topic tree.
- Notes, teaching language, recall prompts and SVG diagrams are independently written by SkillPoint.
- Save My Exams was reviewed only as a benchmark for clear hierarchy, concise explanations and purposeful visuals. Its text, diagrams, questions, branding and page design are not copied.
- Chapter notes render as one continuous reading sheet; callouts and formula areas remain integrated sections rather than floating cards.
- Original exam-style SVG diagrams use clean labels, leader lines and restrained colour only where a visual is necessary.
- The verified paper inventory contains every PapaCambridge question-paper and mark-scheme filename found from 2020 through the latest available 2026 session: 4,693 component rows and 9,312 verified direct PDF links.
- Historical papers must be filtered against the controlling current syllabus.

## Builds

```bash
npm run build
npm run audit
```

Outputs:

- `site-pages/` for GitHub Pages
- `site-local/index.html` for double-click offline use

## GitHub Pages

1. Push this repository to GitHub.
2. Open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Run `.github/workflows/Deploy.yml`, or push to `main` or `master`.

## Local edition

Build with `npm run build:local`, then open `site-local/index.html` directly. The local edition contains its CSS, syllabus data and JavaScript inside one HTML file. External syllabus, Discord and past-paper links naturally require an internet connection when clicked.

## Credits

Made by SkillPoint  
Discord: https://discord.gg/4kAnnH6EHm
