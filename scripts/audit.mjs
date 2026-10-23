import { promises as fs } from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
const sourceFiles = ['index.html', 'assets/styles.css', 'assets/data.js', 'assets/content.js', 'assets/papers.js', 'assets/app.js'];
const sources = (await Promise.all(sourceFiles.map(file => fs.readFile(path.join(root, file), 'utf8')))).join('\n');
const workflow = await fs.readFile(path.join(root, '.github/workflows/Deploy.yml'), 'utf8');
const sandbox = {window: {}};
vm.runInNewContext(await fs.readFile(path.join(root, 'assets/data.js'), 'utf8'), sandbox);
vm.runInNewContext(await fs.readFile(path.join(root, 'assets/content.js'), 'utf8'), sandbox);
vm.runInNewContext(await fs.readFile(path.join(root, 'assets/papers.js'), 'utf8'), sandbox);
const data = sandbox.window.SKILLPOINT_DATA;
const content = sandbox.window.SKILLPOINT_CONTENT;
const papers = sandbox.window.SKILLPOINT_PAPERS;

assert(data.subjects.length === 40, `Expected 40 subject routes; found ${data.subjects.length}`);
const expected = {'IGCSE':10, 'O Level':8, 'AS Level (A1)':11, 'A Level (A2)':11};
for (const [category, count] of Object.entries(expected)) assert(data.subjects.filter(subject => subject.category === category).length === count, `${category} count mismatch`);
const normalise = value => String(value).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
let explainedSections = 0;
for (const subject of data.subjects) {
  assert(subject.chapters.length > 0, `${subject.id} has no chapters`);
  assert(/^https:\/\/www\.cambridgeinternational\.org\/Images\/\d+.*\.pdf$/i.test(subject.source.url), `${subject.id} official syllabus URL is invalid`);
  const rules = ['IGCSE', 'O Level'].includes(subject.category) ? [...content.lowerRules, ...content.rules] : content.rules;
  for (const chapter of subject.chapters) {
    assert(chapter.sections.length > 0, `${subject.id}/${chapter.id} has no sections`);
    for (const section of chapter.sections) {
      const text = normalise(`${section.title} ${chapter.title}`);
      const covered = rules.some(rule => rule.terms.some(term => text.includes(normalise(term))));
      assert(covered, `${subject.id}/${chapter.id}/${section.id} has no subject-specific explanation rule`);
      if (covered) explainedSections++;
    }
  }
}
const a2Physics = data.subjects.find(subject => subject.id === 'physics-a2');
assert(a2Physics?.chapters[0]?.number === '12' && a2Physics?.chapters[0]?.title === 'Motion in a circle', 'A2 Physics must begin with official Topic 12 Motion in a circle');
assert(a2Physics?.chapters.at(-1)?.number === '25' && a2Physics?.chapters.at(-1)?.title === 'Astronomy and cosmology', 'A2 Physics must end with official Topic 25 Astronomy and cosmology');
assert(data.discord === 'https://discord.gg/4kAnnH6EHm', 'Discord URL mismatch');
const obsoleteTimer = new RegExp(['pomo', 'doro'].join(''), 'i');
const forbiddenCloud = new RegExp(`drive\\.${'goo' + 'gle'}|${'goo' + 'gle'}\\s+drive`, 'i');
const retiredInvite = new RegExp(`discord\\.gg\\/${'pkXg' + '93kN4U'}`, 'i');
const mobileRuntime = new RegExp(`${'service' + 'Worker'}|${'service' + '-worker'}|${'manifest' + '.webmanifest'}`, 'i');
const retiredTabs = new RegExp([['Revision','Notes'].join(' '), ['Topical','Questions'].join(' '), 'Text' + 'books'].join('|'));
assert(!obsoleteTimer.test(sources), 'Obsolete timer label remains in production source');
assert(!forbiddenCloud.test(sources), 'Forbidden cloud-storage reference remains');
assert(!retiredInvite.test(sources), 'Retired community invite remains');
assert(!mobileRuntime.test(sources), 'Removed installable-app runtime remains in production source');
assert(!retiredTabs.test(sources), 'Retired resource-tab labels remain');
assert(/scrollbar-color/.test(sources) && /::-webkit-scrollbar/.test(sources), 'Custom scrollbar CSS missing');
assert(/target=\"_blank\" rel=\"noopener noreferrer\"/.test(sources), 'External new-tab safety attributes missing');
assert(/actions\/checkout@v7/.test(workflow), 'Workflow must use Node 24-compatible checkout v7');
assert(/actions\/configure-pages@v6/.test(workflow), 'Workflow must use configure-pages v6');
assert(/actions\/upload-pages-artifact@v5/.test(workflow), 'Workflow must use upload-pages-artifact v5');
assert(/actions\/deploy-pages@v5/.test(workflow), 'Workflow must use deploy-pages v5');
assert(!/setup-node|cache:\s*npm|npm\s+(ci|install)/.test(workflow), 'Workflow must not configure Node dependency caching or installation');
assert(/node scripts\/build-pages\.mjs/.test(workflow) && /node scripts\/audit\.mjs/.test(workflow), 'Workflow direct build commands missing');

const paperRows = Object.values(papers.codes).flat();
const paperUrls = paperRows.flatMap(record => [record.qp, record.ms].filter(Boolean));
assert(Object.keys(papers.codes).length === 33, `Expected 33 established paper codes; found ${Object.keys(papers.codes).length}`);
assert(paperRows.length === 4693, `Expected 4693 paper-component rows; found ${paperRows.length}`);
assert(paperUrls.length === 9312, `Expected 9312 verified direct paper links; found ${paperUrls.length}`);
assert(papers.verification?.live === 9312 && papers.verification?.removedDead === 14, 'Paper verification metadata mismatch');
for (const record of paperRows) {
  assert(record.year >= 2020 && record.year <= 2026, `Paper outside requested range: ${record.year}`);
  for (const url of [record.qp, record.ms].filter(Boolean)) {
    assert(/^https:\/\/pastpapers\.papacambridge\.com\/directories\/CAIE\/CAIE-pastpapers\/upload\/\d{4}_[msw]\d{2}_(qp|ms)_\d{2}\.pdf$/.test(url), `PapaCambridge format invalid: ${url}`);
  }
}
for (const subject of data.subjects.filter(subject => subject.paperCode)) assert((papers.codes[subject.paperCode] || []).length > 0, `${subject.id} has no indexed papers`);
assert(/Continuous chapter sheet/.test(sources), 'Continuous article layout CSS missing');

async function tree(dir) {
  const entries = await fs.readdir(dir, {withFileTypes:true});
  let count = 0, bytes = 0;
  for (const entry of entries) {
    if (['.git','node_modules','site-pages','site-local'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) { const child = await tree(full); count += child.count; bytes += child.bytes; }
    else { const stat = await fs.stat(full); count++; bytes += stat.size; }
  }
  return {count, bytes};
}
const size = await tree(root);
assert(size.count < 10000, `Repository file count ${size.count} exceeds limit`);
assert(size.bytes < 128 * 1024 * 1024, `Repository source size ${(size.bytes/1024/1024).toFixed(1)} MB exceeds limit`);

if (failures.length) {
  console.error(`Audit failed (${failures.length}):`);
  failures.forEach(item => console.error(`- ${item}`));
  process.exit(1);
}
console.log(`Audit passed: ${data.subjects.length} subjects, ${data.subjects.reduce((n,s)=>n+s.chapters.length,0)} chapters, ${explainedSections} syllabus sections, ${paperRows.length} paper components, ${paperUrls.length} direct PDFs, ${size.count} source files, ${(size.bytes/1024/1024).toFixed(2)} MB.`);
