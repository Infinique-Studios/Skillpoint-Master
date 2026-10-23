# GitHub Pages deployment

The only deployment workflow in this repository is:

```text
.github/workflows/Deploy.yml
```

Its workflow name is **Deploy SkillPoint to GitHub Pages**.

## Replace the old repository correctly

Delete any previous workflow whose Actions name is **Build GitHub Pages and PWA**, especially any lowercase `.github/workflows/deploy.yml` file. GitHub keeps files that are not explicitly deleted, so uploading replacement files without deleting old ones can leave the obsolete workflow active.

The current workflow:

- uses the Node 24-compatible official actions majors
- uses the Node command already installed on `ubuntu-24.04`
- does not run `actions/setup-node`
- does not run `npm ci` or `npm install`
- does not enable npm caching
- automatically detects whether the project is at the repository root or inside a legacy `skillpoint-master/` directory
- builds with `node scripts/build-pages.mjs`
- audits with `node scripts/audit.mjs`
- stages and deploys only the generated static site

The replacement GitHub ZIP is now root-flat: `.github`, `assets`, `scripts`, `index.html` and `package.json` are at the top level of the ZIP instead of inside an enclosing directory.

## Enable Pages

1. Open the repository on GitHub.
2. Open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main` or `master`, or run **Deploy SkillPoint to GitHub Pages** manually.

## Expected successful jobs

1. **Build static GitHub Pages site**
2. **Deploy GitHub Pages site**

If the Actions page still shows **Build GitHub Pages and PWA**, the obsolete workflow file still exists in the remote repository and must be deleted.
