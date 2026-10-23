import { promises as fs } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const out = path.join(root, 'site-pages');
await fs.rm(out, {recursive: true, force: true});
await fs.mkdir(path.join(out, 'assets'), {recursive: true});

for (const file of ['index.html', '.nojekyll']) {
  await fs.copyFile(path.join(root, file), path.join(out, file));
}
for (const file of ['styles.css', 'data.js', 'content.js', 'papers.js', 'app.js', 'favicon.svg']) {
  await fs.copyFile(path.join(root, 'assets', file), path.join(out, 'assets', file));
}

const info = {
  build: 'github-pages',
  version: '1.1.0',
  generated: new Date().toISOString(),
  pwa: false,
  files: 8
};
await fs.writeFile(path.join(out, 'build-info.json'), JSON.stringify(info, null, 2));
console.log(`GitHub Pages build written to ${out}`);
