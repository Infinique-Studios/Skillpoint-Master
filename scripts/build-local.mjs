import { promises as fs } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const out = path.join(root, 'site-local');
await fs.rm(out, {recursive: true, force: true});
await fs.mkdir(out, {recursive: true});

let html = await fs.readFile(path.join(root, 'index.html'), 'utf8');
const css = await fs.readFile(path.join(root, 'assets/styles.css'), 'utf8');
const data = await fs.readFile(path.join(root, 'assets/data.js'), 'utf8');
const content = await fs.readFile(path.join(root, 'assets/content.js'), 'utf8');
const papers = await fs.readFile(path.join(root, 'assets/papers.js'), 'utf8');
const app = await fs.readFile(path.join(root, 'assets/app.js'), 'utf8');
const favicon = await fs.readFile(path.join(root, 'assets/favicon.svg'));
const iconData = `data:image/svg+xml;base64,${favicon.toString('base64')}`;
const safeScript = value => value.replaceAll('</script', '<\\/script');

html = html
  .replace('<link rel="icon" href="./assets/favicon.svg" type="image/svg+xml">', `<link rel="icon" href="${iconData}" type="image/svg+xml">`)
  .replace('<link rel="stylesheet" href="./assets/styles.css">', `<style>\n${css}\n</style>`)
  .replace('  <script src="./assets/data.js"></script>\n  <script src="./assets/content.js"></script>\n  <script src="./assets/papers.js"></script>\n  <script src="./assets/app.js"></script>', `  <script>\n${safeScript(data)}\n${safeScript(content)}\n${safeScript(papers)}\n${safeScript(app)}\n</script>`);

await fs.writeFile(path.join(out, 'index.html'), html);
await fs.writeFile(path.join(out, 'OPEN-ME.txt'), 'SKILLPOINT LOCAL EDITION\n\nDouble-click index.html.\n\nThe interface, notes and original diagrams work locally. Official syllabus, Discord and PapaCambridge paper links require the internet when opened.\n');
console.log(`Single-file local build written to ${out}`);
