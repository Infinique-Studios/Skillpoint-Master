(() => {
  'use strict';

  const DATA = window.SKILLPOINT_DATA;
  const CONTENT = window.SKILLPOINT_CONTENT;
  const PAPERS = window.SKILLPOINT_PAPERS;
  const app = document.getElementById('app');
  const categories = ['IGCSE', 'O Level', 'AS Level (A1)', 'A Level (A2)'];
  const icons = {
    Mathematics: '∑', Biology: '⌁', Chemistry: '⚗', Physics: '↯', Economics: '↗', Business: '◆',
    Accounting: '≡', Sociology: '◎', Psychology: 'Ψ', 'Computer Science': '</>',
    'Information Technology': '▦', 'Information & Communication Technology': '▦', 'Mathematics (Syllabus D)': '∑'
  };

  const memoryStore = {};
  const store = {
    get(key, fallback) {
      try {
        const raw = localStorage.getItem(key);
        return raw === null ? fallback : JSON.parse(raw);
      } catch (_) {
        return key in memoryStore ? memoryStore[key] : fallback;
      }
    },
    set(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); }
      catch (_) { memoryStore[key] = value; }
    }
  };

  const esc = value => String(value ?? '').replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
  const slugText = value => String(value).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const externalAttrs = 'target="_blank" rel="noopener noreferrer"';
  const subjectById = id => DATA.subjects.find(subject => subject.id === id);
  const chapterById = (subject, id) => subject?.chapters.find(chapter => chapter.id === id);
  const totalChapters = DATA.subjects.reduce((sum, subject) => sum + subject.chapters.length, 0);
  const totalSections = DATA.subjects.reduce((sum, subject) => sum + subject.chapters.reduce((n, chapter) => n + chapter.sections.length, 0), 0);
  const completed = () => store.get('skillpoint-complete-v2', {});
  const bookmarks = () => store.get('skillpoint-bookmarks-v2', {});

  function familyOf(subject) {
    const value = `${subject.id} ${subject.title}`.toLowerCase();
    if (value.includes('physics')) return 'physics';
    if (value.includes('chemistry')) return 'chemistry';
    if (value.includes('biology')) return 'biology';
    if (value.includes('math')) return 'mathematics';
    if (value.includes('economics')) return 'economics';
    if (value.includes('business')) return 'business';
    if (value.includes('accounting')) return 'accounting';
    if (value.includes('computer') || value.includes('information') || value.includes('ict')) return 'computing';
    return 'humanities';
  }

  function conceptFor(title, parentTitle, subject) {
    const family = familyOf(subject);
    const text = slugText(`${title} ${parentTitle || ''}`);
    const isLower = subject.category === 'IGCSE' || subject.category === 'O Level';
    const rules = isLower ? [...(CONTENT.lowerRules || []), ...CONTENT.rules] : CONTENT.rules;
    const match = rules.find(rule => rule.terms.some(term => text.includes(slugText(term))));
    if (match) return match;
    const framework = CONTENT.frameworks[family];
    return {
      summary: framework.intro,
      points: [
        `Define the named ideas in ${title} precisely.`,
        `Connect ${title} to the other official sections in this topic.`,
        'Practise applying the idea to unfamiliar data, evidence or a short case.'
      ],
      formulas: [],
      trap: framework.trap,
      diagram: null
    };
  }

  function needsVisual(title, family) {
    const text = slugText(title);
    const essential = {
      physics: /motion in a circle|kinematics|forces density and pressure|deformation|waves|superposition|d c circuits|gravitational fields|ideal gases|thermodynamics|oscillations|electric fields|capacitance|magnetic fields|alternating currents|quantum physics|medical physics|astronomy and cosmology|electricity and magnetism|thermal physics|space physics/,
      biology: /cell structure|organisation of the organism|cell membranes|mitotic cell cycle|nucleic acids|human nutrition|transport in plants|transport in flowering plants|transport in mammals|transport in animals|gas exchange|photosynthesis|homeostasis|control and coordination|inheritance|genetic technology/,
      chemistry: /atomic structure|chemical bonding|states of matter|chemical energetics|electrochemistry|equilibria|reaction kinetics|organic synthesis|analytical techniques|experimental techniques/,
      mathematics: /coordinate geometry|geometry|mensuration|trigonometry|transformations and vectors|statistics|mechanics/,
      economics: /allocation of resources|price system|microeconomy|macroeconomy/,
      business: /operations management|finance and accounting|financial information/,
      accounting: /preparation of financial statements|cost and management accounting|analysis and interpretation/,
      computing: /communication|network|hardware|processor|database|algorithm|system life cycle|software development|artificial intelligence|monitoring and control/,
      humanities: /research methods|research methodology/
    };
    return essential[family]?.test(text) || false;
  }

  function subjectProgress(subject) {
    const state = completed();
    const done = subject.chapters.filter(chapter => state[`${subject.id}:${chapter.id}`]).length;
    return {done, total: subject.chapters.length, percent: subject.chapters.length ? Math.round(done / subject.chapters.length * 100) : 0};
  }

  function iconFor(subject) {
    return icons[subject.title] || icons[subject.title.split(' ')[0]] || '•';
  }

  function shell(content, options = {}) {
    const current = options.current || '';
    document.title = `${options.title || 'Cambridge Revision'} · SkillPoint`;
    app.innerHTML = `
      <a class="skip-link" href="#main-content">Skip to content</a>
      <header class="site-header">
        <a class="brand" href="#/" aria-label="SkillPoint home">
          <span class="brand-mark">S</span><span>SkillPoint</span>
        </a>
        <nav aria-label="Primary navigation">
          <a class="${current === 'subjects' ? 'active' : ''}" href="#/subjects">Subjects</a>
          <button class="nav-search" type="button" data-open-search aria-label="Search topics">Search</button>
          <button class="timer-trigger" type="button" data-open-timer><span class="timer-dot"></span><span data-timer-mini>Focus timer</span></button>
          <a class="discord-link" href="${esc(DATA.discord)}" ${externalAttrs}>Discord ↗</a>
        </nav>
      </header>
      <main id="main-content">${content}</main>
      <footer class="site-footer">
        <div><strong>Made by SkillPoint</strong><span>Independent Cambridge revision</span></div>
        <div><a href="${esc(DATA.discord)}" ${externalAttrs}>Discord</a><a href="#/subjects">Subjects</a></div>
      </footer>
      ${timerModal()}
      ${searchModal()}
    `;
    bindGlobal();
  }

  function homePage() {
    const cards = categories.map(category => {
      const subjects = DATA.subjects.filter(subject => subject.category === category);
      const chapters = subjects.reduce((sum, subject) => sum + subject.chapters.length, 0);
      return `<a class="level-card" href="#/subjects?level=${encodeURIComponent(category)}">
        <span>${esc(category)}</span><strong>${subjects.length} subjects</strong><small>${chapters} official topic chapters</small><b>Explore →</b>
      </a>`;
    }).join('');
    shell(`
      <section class="hero">
        <div class="hero-copy">
          <span class="eyebrow">Syllabus-first Cambridge revision</span>
          <h1>Learn what is examined.<br><em>Nothing padded in.</em></h1>
          <p>Original concise notes, selective teaching diagrams and direct full-paper links, rebuilt around the newest official Cambridge syllabus currently published for each subject.</p>
          <div class="hero-actions"><a class="primary" href="#/subjects">Choose a subject</a><button class="secondary" data-open-search>Find a topic</button></div>
          <div class="hero-stats">
            <div><strong>${DATA.subjects.length}</strong><span>subject routes</span></div>
            <div><strong>${totalChapters}</strong><span>official chapters</span></div>
            <div><strong>${totalSections.toLocaleString()}</strong><span>syllabus sections</span></div>
          </div>
        </div>
        <div class="hero-board" aria-label="SkillPoint study workflow">
          <div class="board-top"><span>Study route</span><b>SYLLABUS → NOTES → PAPER</b></div>
          <ol>
            <li><span>01</span><div><strong>Check the boundary</strong><small>Every chapter displays its controlling official syllabus and cycle.</small></div></li>
            <li><span>02</span><div><strong>Understand the mechanism</strong><small>Concise original explanations, formulas and only useful diagrams.</small></div></li>
            <li><span>03</span><div><strong>Apply under exam conditions</strong><small>Open complete question papers and mark schemes in a separate tab.</small></div></li>
          </ol>
          <div class="board-note">No copied commercial notes. No decorative diagram quota. No mobile-app bundle.</div>
        </div>
      </section>
      <section class="level-section">
        <div class="section-heading"><span>Choose your qualification</span><h2>One direct route from subject to chapter.</h2></div>
        <div class="level-grid">${cards}</div>
      </section>
      <section class="principles">
        <article><span>01</span><h3>Official scope controls</h3><p>Topic trees follow the latest Cambridge PDF listed on every subject page, including the corrected A2 Physics numbering.</p></article>
        <article><span>02</span><h3>Original teaching visuals</h3><p>Clean labelled SVG schematics appear only when a relationship, structure, graph or process genuinely needs a visual.</p></article>
        <article><span>03</span><h3>Honest paper links</h3><p>PapaCambridge links identify full papers, not invented question numbers. New syllabuses are clearly marked when only legacy or specimen material exists.</p></article>
      </section>
    `, {title: 'Cambridge Revision'});
  }

  function subjectsPage() {
    const query = new URLSearchParams(location.hash.split('?')[1] || '');
    const initial = query.get('level') || 'All';
    const filters = ['All', ...categories].map(category => `<button type="button" class="filter-chip ${category === initial ? 'active' : ''}" data-level="${esc(category)}">${esc(category)}</button>`).join('');
    shell(`
      <section class="page-hero compact">
        <span class="eyebrow">All subjects</span>
        <h1>Choose the exact syllabus route.</h1>
        <p>Each card opens its chapter hub directly. Syllabus cycle and code are always visible.</p>
      </section>
      <section class="subject-browser">
        <div class="browser-tools"><div class="filter-row">${filters}</div><label class="inline-search"><span>Search</span><input id="subject-filter" type="search" placeholder="Subject, code or level"></label></div>
        <div id="subject-grid" class="subject-grid"></div>
      </section>
    `, {title: 'Subjects', current: 'subjects'});
    const grid = document.getElementById('subject-grid');
    const input = document.getElementById('subject-filter');
    let level = initial;
    const draw = () => {
      const q = input.value.trim().toLowerCase();
      const subjects = DATA.subjects.filter(subject => (level === 'All' || subject.category === level) && `${subject.title} ${subject.code} ${subject.category}`.toLowerCase().includes(q));
      grid.innerHTML = subjects.length ? subjects.map(subjectCard).join('') : '<div class="empty-state">No matching subject route.</div>';
    };
    document.querySelectorAll('[data-level]').forEach(button => button.addEventListener('click', () => {
      level = button.dataset.level;
      document.querySelectorAll('[data-level]').forEach(item => item.classList.toggle('active', item === button));
      draw();
    }));
    input.addEventListener('input', draw);
    draw();
  }

  function subjectCard(subject) {
    const progress = subjectProgress(subject);
    return `<a class="subject-card" href="#/subject/${encodeURIComponent(subject.id)}">
      <div class="subject-icon">${esc(iconFor(subject))}</div>
      <div class="subject-card-head"><span>${esc(subject.category)}</span><small>${esc(subject.source.cycle)}</small></div>
      <h2>${esc(subject.title)}</h2>
      <p>${esc(subject.code)}</p>
      <div class="subject-meta"><span>${subject.chapters.length} chapters</span><span>${subject.chapters.reduce((n,c)=>n+c.sections.length,0)} sections</span></div>
      <div class="progress-line"><i style="width:${progress.percent}%"></i></div>
      <div class="subject-card-foot"><small>${progress.done}/${progress.total} complete</small><b>Open chapters →</b></div>
    </a>`;
  }

  function subjectPage(id) {
    const subject = subjectById(id);
    if (!subject) return notFound();
    const progress = subjectProgress(subject);
    const chapters = subject.chapters.map((chapter, index) => {
      const key = `${subject.id}:${chapter.id}`;
      return `<a class="chapter-row ${completed()[key] ? 'done' : ''}" href="#/chapter/${encodeURIComponent(subject.id)}/${encodeURIComponent(chapter.id)}">
        <span class="chapter-number">${esc(chapter.number)}</span>
        <div><h3>${esc(chapter.title)}</h3><p>${chapter.sections.map(section => esc(section.title)).slice(0,4).join(' · ')}${chapter.sections.length > 4 ? ' · …' : ''}</p></div>
        <small>${chapter.sections.length} section${chapter.sections.length === 1 ? '' : 's'}</small><b>→</b>
      </a>`;
    }).join('');
    shell(`
      <section class="subject-hero">
        <a class="back-link" href="#/subjects">← All subjects</a>
        <div class="subject-title-line"><div class="subject-icon large">${esc(iconFor(subject))}</div><div><span>${esc(subject.category)} · ${esc(subject.code)}</span><h1>${esc(subject.title)}</h1></div></div>
        <p>This hub follows the <strong>${esc(subject.source.cycle)}</strong> official Cambridge syllabus currently published as the newest cycle.</p>
        <div class="subject-actions">
          <a class="primary" href="#/chapter/${encodeURIComponent(subject.id)}/${encodeURIComponent(subject.chapters[0].id)}">Start first chapter</a>
          <a class="secondary" href="#/papers/${encodeURIComponent(subject.id)}">Full Paper Bank</a>
          <a class="text-button" href="${esc(subject.source.url)}" ${externalAttrs}>Official syllabus PDF ↗</a>
        </div>
        <div class="subject-progress"><div><strong>${progress.percent}%</strong><span>${progress.done} of ${progress.total} chapters complete</span></div><div class="progress-line"><i style="width:${progress.percent}%"></i></div></div>
      </section>
      ${subject.notice ? `<aside class="notice"><strong>Cycle notice</strong><p>${esc(subject.notice)}</p></aside>` : ''}
      <section class="chapter-hub">
        <div class="section-heading"><span>Official topic order</span><h2>${subject.chapters.length} syllabus chapters</h2></div>
        <div class="chapter-list">${chapters}</div>
      </section>
    `, {title: subject.title, current: 'subjects'});
  }

  function chapterPage(subjectId, chapterId) {
    const subject = subjectById(subjectId);
    const chapter = chapterById(subject, chapterId);
    if (!subject || !chapter) return notFound();
    const family = familyOf(subject);
    const framework = CONTENT.frameworks[family];
    const concept = conceptFor(chapter.title, '', subject);
    const index = subject.chapters.indexOf(chapter);
    const completeKey = `${subject.id}:${chapter.id}`;
    const isDone = !!completed()[completeKey];
    const isBookmarked = !!bookmarks()[completeKey];
    const sectionNotes = chapter.sections.map(section => {
      const detail = conceptFor(section.title, chapter.title, subject);
      return `<section class="note-section observe-section" id="${esc(section.id)}">
        <div class="note-index">${esc(section.number)}</div>
        <div class="note-body"><h2>${esc(section.title)}</h2><p>${esc(detail.summary)}</p>
          <ul>${detail.points.map(point => `<li>${esc(point)}</li>`).join('')}</ul>
          ${detail.trap ? `<aside class="exam-tip"><strong>Exam caution</strong><p>${esc(detail.trap)}</p></aside>` : ''}
        </div>
      </section>`;
    }).join('');
    const toc = chapter.sections.map(section => `<a href="#${esc(section.id)}" data-toc="${esc(section.id)}"><span>${esc(section.number)}</span>${esc(section.title)}</a>`).join('');
    const chapterNav = subject.chapters.map(item => `<a class="${item.id === chapter.id ? 'active' : ''}" href="#/chapter/${encodeURIComponent(subject.id)}/${encodeURIComponent(item.id)}"><span>${esc(item.number)}</span>${esc(item.title)}</a>`).join('');
    const figure = concept.diagram && needsVisual(chapter.title, family) ? renderDiagram(concept.diagram, chapter.title) : '';
    const formula = concept.formulas?.length ? `<section class="formula-card observe-section" id="formula-bank"><span>Required relationships</span><h2>Formula and rule bank</h2>${concept.formulas.map(item => `<code>${esc(item)}</code>`).join('')}<p>Confirm which relationships are supplied in your examination data booklet.</p></section>` : '';
    const recall = [
      `Define the central idea in “${chapter.title}” without using circular wording.`,
      `Explain one cause-and-effect link from ${chapter.sections[0]?.title || chapter.title}.`,
      `Apply ${chapter.title} to an unfamiliar graph, data set, practical result or case.`
    ];
    shell(`
      <div class="reader-shell">
        <aside class="chapter-sidebar">
          <a class="back-link" href="#/subject/${encodeURIComponent(subject.id)}">← ${esc(subject.title)}</a>
          <div class="side-title"><span>${esc(subject.category)}</span><strong>${esc(subject.code)}</strong></div>
          <nav aria-label="Chapters">${chapterNav}</nav>
        </aside>
        <article class="reader">
          <header class="reader-header observe-section" id="overview">
            <div class="breadcrumbs"><a href="#/subjects">Subjects</a><span>/</span><a href="#/subject/${encodeURIComponent(subject.id)}">${esc(subject.title)}</a><span>/</span><b>${esc(chapter.number)}</b></div>
            <span class="eyebrow">Official topic ${esc(chapter.number)}</span>
            <h1>${esc(chapter.title)}</h1>
            <p>${esc(concept.summary)}</p>
            <div class="reader-actions">
              <button type="button" data-complete="${esc(completeKey)}" class="${isDone ? 'selected' : ''}">${isDone ? '✓ Completed' : 'Mark complete'}</button>
              <button type="button" data-bookmark="${esc(completeKey)}" class="${isBookmarked ? 'selected' : ''}">${isBookmarked ? '★ Bookmarked' : '☆ Bookmark'}</button>
              <button type="button" onclick="window.print()">Print notes</button>
              <a href="${esc(subject.source.url)}" ${externalAttrs}>Syllabus PDF ↗</a>
            </div>
          </header>
          <section class="scope-card observe-section" id="scope">
            <div><span>Syllabus boundary</span><h2>What this chapter contains</h2><p>Only the official sections listed for the ${esc(subject.source.cycle)} syllabus are used as this chapter’s scope.</p></div>
            <ol>${chapter.sections.map(section => `<li><span>${esc(section.number)}</span>${esc(section.title)}</li>`).join('')}</ol>
          </section>
          <section class="core-card observe-section" id="core-understanding">
            <span>Core understanding</span><h2>What must be secure before questions</h2>
            <p>${esc(framework.intro)}</p>
            <ul>${concept.points.map(point => `<li>${esc(point)}</li>`).join('')}</ul>
          </section>
          ${figure}
          <div class="section-divider"><span>Concise study notes</span></div>
          ${sectionNotes}
          ${formula}
          <section class="exam-method observe-section" id="exam-method">
            <span>Exam method</span><h2>A reliable answer route</h2>
            <ol>${framework.method.map((step, i) => `<li><b>${i + 1}</b><p>${esc(step)}</p></li>`).join('')}</ol>
            <blockquote>${esc(framework.exam)}</blockquote>
          </section>
          <section class="recall-card observe-section" id="active-recall">
            <span>Active recall</span><h2>Close the notes and answer</h2>
            ${recall.map((question, i) => `<details><summary><b>0${i + 1}</b>${esc(question)}</summary><p>Check your response against the chapter scope, precise vocabulary and causal chain above. Add a labelled diagram or equation only if it improves the explanation.</p></details>`).join('')}
          </section>
          <section class="paper-bridge observe-section" id="paper-practice">
            <div><span>Paper practice</span><h2>Move from notes to complete papers.</h2><p>Open the full question paper and mark scheme in separate tabs. Do not assume every historical question remains in the newest syllabus.</p></div>
            <a class="primary" href="#/papers/${encodeURIComponent(subject.id)}">Open Full Paper Bank</a>
          </section>
          <nav class="previous-next">
            ${index > 0 ? `<a href="#/chapter/${encodeURIComponent(subject.id)}/${encodeURIComponent(subject.chapters[index - 1].id)}"><span>Previous</span><strong>← ${esc(subject.chapters[index - 1].title)}</strong></a>` : '<span></span>'}
            ${index < subject.chapters.length - 1 ? `<a class="next" href="#/chapter/${encodeURIComponent(subject.id)}/${encodeURIComponent(subject.chapters[index + 1].id)}"><span>Next</span><strong>${esc(subject.chapters[index + 1].title)} →</strong></a>` : '<span></span>'}
          </nav>
        </article>
        <aside class="toc"><span>On this page</span><a href="#overview" data-toc="overview">Overview</a><a href="#scope" data-toc="scope">Syllabus boundary</a><a href="#core-understanding" data-toc="core-understanding">Core understanding</a>${toc}${concept.formulas?.length ? '<a href="#formula-bank" data-toc="formula-bank">Formula bank</a>' : ''}<a href="#exam-method" data-toc="exam-method">Exam method</a><a href="#active-recall" data-toc="active-recall">Active recall</a><a href="#paper-practice" data-toc="paper-practice">Paper practice</a></aside>
      </div>
    `, {title: `${chapter.title} · ${subject.title}`, current: 'subjects'});
    bindChapterActions(subject, chapter, completeKey);
    activateToc();
  }

  function subjectPaperCodes(subject) {
    const combined = {
      'math-igcse': ['0580', '0980'],
      'biology-igcse': ['0610', '0970'],
      'chemistry-igcse': ['0620', '0971'],
      'physics-igcse': ['0625', '0972'],
      'accounting-igcse': ['0452', '0985']
    };
    return combined[subject.id] || (subject.paperCode ? [subject.paperCode] : []);
  }

  function papersForSubject(subject) {
    return subjectPaperCodes(subject).flatMap(code => (PAPERS?.codes?.[code] || []).map(record => ({...record, code})));
  }

  function papersPage(id) {
    const subject = subjectById(id);
    if (!subject) return notFound();
    const inventory = papersForSubject(subject);
    const linkCount = inventory.reduce((total, record) => total + Number(Boolean(record.qp)) + Number(Boolean(record.ms)), 0);
    const isSpecimenOnly = !inventory.length && subject.id === 'psychology-igcse';
    shell(`
      <section class="page-hero compact paper-hero">
        <a class="back-link" href="#/subject/${encodeURIComponent(subject.id)}">← ${esc(subject.title)}</a>
        <span class="eyebrow">Complete Paper Bank</span><h1>${esc(subject.title)} · ${esc(subject.code)}</h1>
        <p>${isSpecimenOnly ? 'This new syllabus has official specimen material but no genuine past-paper series yet.' : `${inventory.length.toLocaleString()} paper components and ${linkCount.toLocaleString()} direct question-paper or mark-scheme PDFs are indexed from 2020 to the latest PapaCambridge session currently available.`}</p>
      </section>
      ${subject.notice ? `<aside class="notice"><strong>Important syllabus warning</strong><p>${esc(subject.notice)}</p></aside>` : ''}
      ${isSpecimenOnly ? `<section class="paper-bank specimen-bank"><div class="paper-guidance"><h2>Specimen status</h2><p>First assessment is in 2027, so published numbered past papers do not yet exist.</p></div><div class="paper-list">${specimenPaperLinks()}</div></section>` : `
      <section class="paper-inventory">
        <div class="paper-controls" aria-label="Paper filters">
          <label>Code<select id="paper-code"><option value="all">All codes</option>${subjectPaperCodes(subject).map(code => `<option value="${esc(code)}">${esc(code)}</option>`).join('')}</select></label>
          <label>Year<select id="paper-year"><option value="all">2020–current</option>${[...new Set(inventory.map(item => item.year))].sort((a,b)=>b-a).map(year => `<option value="${year}">${year}</option>`).join('')}</select></label>
          <label>Session<select id="paper-series"><option value="all">All sessions</option><option value="m">March</option><option value="s">May / June</option><option value="w">October / November</option></select></label>
          <label>Component<select id="paper-component"><option value="all">All components</option>${[...new Set(inventory.map(item => item.component))].sort((a,b)=>Number(a)-Number(b)).map(component => `<option value="${esc(component)}">Paper ${esc(component)}</option>`).join('')}</select></label>
          <button type="button" id="paper-reset">Reset filters</button>
        </div>
        <div class="paper-inventory-note"><strong>Live inventory verified ${esc(PAPERS.verification?.date || PAPERS.generated)}</strong><span>${Number(PAPERS.verification?.live || 0).toLocaleString()} direct PDFs passed the no-redirect PDF check. Stale listings were excluded.</span></div>
        <div id="paper-results" class="paper-results"></div>
      </section>`}
      <section class="source-strip"><div><span>Controlling source</span><strong>Official Cambridge ${esc(subject.source.cycle)} syllabus</strong></div><a href="${esc(subject.source.url)}" ${externalAttrs}>Open official PDF ↗</a></section>
    `, {title: `${subject.title} Paper Bank`, current: 'subjects'});
    if (inventory.length) bindPaperInventory(inventory);
  }

  function specimenPaperLinks() {
    return `<article class="paper-item specimen"><div><span>2027 specimen</span><h3>Paper 1</h3><p>Official Cambridge specimen material</p></div><div><a href="https://www.cambridgeinternational.org/Images/718593-2027-specimen-paper-1.pdf" ${externalAttrs}>Question paper ↗</a><a href="https://www.cambridgeinternational.org/Images/718601-2027-specimen-paper-1-mark-scheme.pdf" ${externalAttrs}>Mark scheme ↗</a></div></article>
      <article class="paper-item specimen"><div><span>2027 specimen</span><h3>Paper 2</h3><p>Official Cambridge specimen material</p></div><div><a href="https://www.cambridgeinternational.org/Images/718594-2027-specimen-paper-2.pdf" ${externalAttrs}>Question paper ↗</a><a href="https://www.cambridgeinternational.org/Images/718602-2027-specimen-paper-2-mark-scheme.pdf" ${externalAttrs}>Mark scheme ↗</a></div></article>`;
  }

  function bindPaperInventory(inventory) {
    const code = document.getElementById('paper-code');
    const year = document.getElementById('paper-year');
    const series = document.getElementById('paper-series');
    const component = document.getElementById('paper-component');
    const target = document.getElementById('paper-results');
    const draw = () => {
      const filtered = inventory.filter(item =>
        (code.value === 'all' || item.code === code.value) &&
        (year.value === 'all' || String(item.year) === year.value) &&
        (series.value === 'all' || item.series === series.value) &&
        (component.value === 'all' || item.component === component.value)
      );
      const groups = new Map();
      filtered.forEach(item => {
        const key = `${item.year}-${item.series}`;
        if (!groups.has(key)) groups.set(key, {year:item.year, series:item.series, name:item.seriesName, rows:[]});
        groups.get(key).rows.push(item);
      });
      target.innerHTML = filtered.length ? `<div class="paper-result-count">Showing <strong>${filtered.length.toLocaleString()}</strong> paper components</div>${[...groups.values()].map((group, index) => `
        <section class="paper-session-group">
          <header><div><span>${group.year}</span><h2>${esc(group.name)}</h2></div><small>${group.rows.length} component${group.rows.length === 1 ? '' : 's'}</small></header>
          <div class="paper-table" role="table" aria-label="${esc(group.name)} ${group.year}">
            ${group.rows.map(item => `<div class="paper-record" role="row"><span class="paper-code">${esc(item.code)}</span><strong>Paper ${esc(item.component)}</strong><span class="paper-kind">${item.component[0] ? `Component ${esc(item.component[0])} · Variant ${esc(item.component[1] || '')}` : ''}</span><div>${item.qp ? `<a href="${esc(item.qp)}" ${externalAttrs}>Question paper ↗</a>` : '<span class="paper-missing">QP not listed</span>'}${item.ms ? `<a href="${esc(item.ms)}" ${externalAttrs}>Mark scheme ↗</a>` : '<span class="paper-missing">MS not listed</span>'}</div></div>`).join('')}
          </div>
        </section>`).join('')}` : '<div class="empty-state">No paper matches these filters.</div>';
    };
    [code, year, series, component].forEach(control => control.addEventListener('change', draw));
    document.getElementById('paper-reset').addEventListener('click', () => { [code, year, series, component].forEach(control => control.value = 'all'); draw(); });
    draw();
  }

  function bindChapterActions(subject, chapter, key) {
    document.querySelector('[data-complete]')?.addEventListener('click', event => {
      const state = completed();
      state[key] = !state[key];
      if (!state[key]) delete state[key];
      store.set('skillpoint-complete-v2', state);
      event.currentTarget.classList.toggle('selected', !!state[key]);
      event.currentTarget.textContent = state[key] ? '✓ Completed' : 'Mark complete';
    });
    document.querySelector('[data-bookmark]')?.addEventListener('click', event => {
      const state = bookmarks();
      state[key] = !state[key];
      if (!state[key]) delete state[key];
      store.set('skillpoint-bookmarks-v2', state);
      event.currentTarget.classList.toggle('selected', !!state[key]);
      event.currentTarget.textContent = state[key] ? '★ Bookmarked' : '☆ Bookmark';
    });
  }

  function activateToc() {
    const links = [...document.querySelectorAll('[data-toc]')];
    const sections = [...document.querySelectorAll('.observe-section')];
    if (!links.length || !sections.length) return;
    const update = () => {
      const marker = Math.max(140, innerHeight * 0.28);
      let active = sections[0].id;
      sections.forEach(section => { if (section.getBoundingClientRect().top <= marker) active = section.id; });
      links.forEach(link => link.classList.toggle('active', link.dataset.toc === active));
      const current = links.find(link => link.dataset.toc === active);
      current?.scrollIntoView?.({block: 'nearest'});
    };
    addEventListener('scroll', update, {passive: true});
    update();
  }

  function renderDiagram(type, title) {
    const aliases = {
      'motion-graph':'graph', force:'force', energy:'flow', stress:'graph', magnetic:'field', rectifier:'wave', photoelectric:'flow', decay:'graph', imaging:'flow', stars:'field', capacitor:'circuit', molecules:'bonding', chromosome:'dna', 'plant-transport':'flow', alveolus:'flow', immune:'flow', selection:'flow', 'food-web':'network', 'genetic-flow':'flow', stoich:'flow', electrolysis:'circuit', equilibrium:'graph', 'organic-route':'flow', geometry:'triangle', distribution:'graph', ppc:'graph', macro:'graph', trade:'flow', stakeholders:'network', organisation:'flow', marketing:'flow', process:'flow', 'accounting-flow':'flow', statements:'flow', ratio:'graph', binary:'flow', layers:'flow', security:'network', database:'network', algorithm:'flow', 'code-flow':'flow', lifecycle:'flow', socialisation:'network', stratification:'graph', family:'network', education:'flow', justice:'flow', memory:'flow', sleep:'wave', social:'network', perception:'triangle', learning:'flow', clinical:'flow', consumer:'flow', health:'flow'
    };
    const kind = aliases[type] || type;
    const diagrams = {
      circular: `<circle cx="235" cy="125" r="75"/><circle class="fill" cx="310" cy="125" r="8"/><path d="M310 125H250" class="accent arrow"/><path d="M310 125V55" class="blue arrow"/><text x="260" y="116">inward force</text><text x="320" y="72">velocity</text><text x="212" y="129">centre</text>`,
      field: `<circle class="fill" cx="235" cy="125" r="28"/><text x="226" y="131">M</text><path d="M60 125H190M410 125H280M235 15V82M235 235V168M105 30L195 93M365 30L275 93M105 220L195 157M365 220L275 157" class="accent arrow"/><text x="20" y="22">field points towards source</text>`,
      gas: `<path d="M110 45V210H360V45M95 78H375"/><path d="M145 72V25M325 72V25" class="accent"/><circle class="fill" cx="145" cy="115" r="5"/><circle class="fill" cx="220" cy="150" r="5"/><circle class="fill" cx="302" cy="105" r="5"/><circle class="fill" cx="180" cy="185" r="5"/><circle class="fill" cx="330" cy="175" r="5"/><path d="M145 115l25 -13M220 150l-20 18M302 105l25 18M180 185l28 -10M330 175l-18 -26" class="blue arrow"/><text x="185" y="68">movable piston</text><text x="130" y="230">random molecular motion</text>`,
      pv: `<path d="M80 210V35M80 210H410" class="arrow"/><path d="M145 170C160 65 320 55 350 135C335 195 205 205 145 170Z" class="accent arrow"/><text x="40" y="45">p</text><text x="400" y="232">V</text><text x="192" y="125">cycle area = net work</text>`,
      wave: `<path d="M35 130H435"/><path d="M45 130C80 35 120 35 155 130S230 225 265 130S340 35 375 130S415 225 435 150" class="accent"/><path d="M155 70V190M265 70V190" class="blue" stroke-dasharray="5 5"/><text x="178" y="60">wavelength λ</text><path d="M160 65H260" class="blue arrow"/>`,
      circuit: `<path d="M65 70H165M305 70H405V190H65V70M165 70V50M165 90V50M185 40V100M305 70h-25l-12 -25l-24 50l-24 -50l-24 50l-12 -25h-19"/><text x="156" y="125">cell</text><text x="223" y="125">resistor</text><circle class="fill" cx="65" cy="130" r="4"/><path d="M65 130H120" class="accent arrow"/><text x="80" y="152">I</text>`,
      graph: `<path d="M70 210V35M70 210H420" class="arrow"/><path d="M90 190C150 175 155 105 215 100S305 130 390 45" class="accent"/><path d="M215 100V210M70 100H215" class="blue" stroke-dasharray="5 5"/><text x="280" y="228">independent variable</text><text x="10" y="30">response</text>`,
      force: `<rect x="175" y="85" width="120" height="80" rx="8"/><path d="M235 85V30M235 165V220M175 125H105M295 125H365" class="accent arrow"/><text x="243" y="45">N</text><text x="243" y="218">W</text><text x="95" y="115">drag</text><text x="340" y="115">drive</text>`,
      cell: `<path d="M90 45Q60 125 95 205Q235 240 380 195Q415 115 375 45Q230 15 90 45Z"/><path d="M110 62Q85 125 112 188Q235 215 360 180Q385 120 355 65Q230 40 110 62Z" class="accent"/><circle cx="245" cy="125" r="38"/><ellipse class="blue" cx="155" cy="95" rx="28" ry="12"/><ellipse class="blue" cx="325" cy="150" rx="28" ry="12"/><rect x="135" y="135" width="55" height="38" rx="8"/><text x="226" y="130">nucleus</text><text x="25" y="30">plant cell schematic</text>`,
      membrane: `<path d="M45 90H425M45 165H425"/><g class="fill"><circle cx="75" cy="90" r="10"/><circle cx="115" cy="90" r="10"/><circle cx="155" cy="90" r="10"/><circle cx="315" cy="90" r="10"/><circle cx="355" cy="90" r="10"/><circle cx="395" cy="90" r="10"/><circle cx="75" cy="165" r="10"/><circle cx="115" cy="165" r="10"/><circle cx="155" cy="165" r="10"/><circle cx="315" cy="165" r="10"/><circle cx="355" cy="165" r="10"/><circle cx="395" cy="165" r="10"/></g><path d="M185 70Q235 35 285 70V185Q235 215 185 185Z" class="accent"/><path d="M235 15V215" class="blue arrow"/><text x="195" y="125">protein</text>`,
      enzyme: `<path d="M70 180Q55 65 165 55Q240 45 275 105L245 130L210 105L175 132Q135 210 70 180Z"/><path d="M320 55l35 30l-35 30l-35 -30Z" class="accent"/><path d="M320 125V175" class="blue arrow"/><path d="M280 205l35 -30l35 30" class="accent"/><text x="120" y="225">active site specificity</text>`,
      dna: `<path d="M145 30C320 80 150 170 325 220M325 30C150 80 320 170 145 220" class="accent"/><path d="M175 50H295M150 85H320M165 120H305M155 155H315M180 195H290" class="blue"/><text x="188" y="18">base sequence</text>`,
      circulation: `<circle cx="235" cy="125" r="40" class="fill"/><text x="217" y="130">heart</text><rect x="35" y="80" width="90" height="90" rx="12"/><rect x="345" y="80" width="90" height="90" rx="12"/><text x="57" y="130">lungs</text><text x="365" y="130">body</text><path d="M125 100H190M190 150H125M280 100H345M345 150H280" class="accent arrow"/>`,
      photosynthesis: `<circle class="fill" cx="80" cy="55" r="28"/><path d="M105 70L185 108" class="accent arrow"/><path d="M220 210Q155 115 235 55Q330 115 250 210Z"/><path d="M235 55V210"/><path d="M235 125H155M235 150H325" class="blue arrow"/><text x="20" y="105">light</text><text x="95" y="130">CO₂</text><text x="300" y="140">O₂</text>`,
      atom: `<circle class="fill" cx="235" cy="125" r="22"/><ellipse cx="235" cy="125" rx="150" ry="55"/><ellipse cx="235" cy="125" rx="150" ry="55" transform="rotate(60 235 125)"/><ellipse cx="235" cy="125" rx="150" ry="55" transform="rotate(120 235 125)"/><circle class="accent-fill" cx="385" cy="125" r="7"/><circle class="accent-fill" cx="160" cy="60" r="7"/><text x="205" y="130">nucleus</text>`,
      bonding: `<circle class="fill" cx="160" cy="125" r="35"/><circle class="fill" cx="310" cy="125" r="35"/><circle class="accent-fill" cx="218" cy="112" r="7"/><circle class="accent-fill" cx="252" cy="138" r="7"/><path d="M195 125H275" class="accent"/><text x="192" y="55">shared or transferred electrons</text>`,
      'energy-profile': `<path d="M60 210V35M60 210H425" class="arrow"/><path d="M80 170C150 170 145 50 230 50S305 140 390 140" class="accent"/><path d="M80 170H145M315 140H390"/><path d="M230 55V170" class="blue arrow"/><text x="240" y="105">Eₐ</text>`,
      chromatography: `<rect x="145" y="30" width="180" height="190"/><path d="M145 185H325M145 70H325" class="blue" stroke-dasharray="5 5"/><circle class="fill" cx="210" cy="150" r="7"/><circle class="accent-fill" cx="210" cy="100" r="7"/><circle class="accent-fill" cx="260" cy="125" r="7"/><text x="335" y="75">solvent front</text><text x="335" y="190">baseline</text>`,
      triangle: `<path d="M85 200L235 45L395 200Z"/><path d="M235 45V200" class="blue" stroke-dasharray="5 5"/><text x="60" y="220">A</text><text x="228" y="35">B</text><text x="400" y="220">C</text><text x="245" y="135">height</text>`,
      tree: `<path d="M70 125H140M140 125L225 65M140 125L225 185M225 65L340 35M225 65L340 95M225 185L340 155M225 185L340 215"/><text x="350" y="40">outcomes</text><text x="20" y="118">start</text>`,
      'supply-demand': `<path d="M70 210V35M70 210H420" class="arrow"/><path d="M100 185L365 55" class="accent"/><path d="M100 55L365 185" class="blue"/><circle class="fill" cx="233" cy="120" r="6"/><text x="370" y="55">S</text><text x="370" y="190">D</text>`,
      'break-even': `<path d="M70 210V35M70 210H420" class="arrow"/><path d="M80 175H390" class="blue"/><path d="M80 190L390 55" class="accent"/><path d="M80 135L390 70"/><circle class="fill" cx="230" cy="125" r="6"/><text x="238" y="118">break-even</text>`,
      network: `<circle class="fill" cx="235" cy="125" r="28"/><circle cx="80" cy="55" r="22"/><circle cx="390" cy="55" r="22"/><circle cx="80" cy="200" r="22"/><circle cx="390" cy="200" r="22"/><path d="M100 65L210 112M370 65L260 112M100 190L210 138M370 190L260 138" class="accent arrow"/><text x="213" y="130">hub</text>`,
      cpu: `<rect x="115" y="45" width="240" height="160" rx="14"/><rect x="145" y="75" width="75" height="45"/><rect x="250" y="75" width="75" height="45"/><rect x="145" y="145" width="180" height="35"/><path d="M220 98H250M235 120V145" class="accent arrow"/><text x="160" y="102">control</text><text x="270" y="102">ALU</text><text x="205" y="168">registers</text>`,
      flow: `<rect x="35" y="90" width="110" height="70" rx="10"/><rect x="180" y="90" width="110" height="70" rx="10"/><rect x="325" y="90" width="110" height="70" rx="10"/><path d="M145 125H180M290 125H325" class="accent arrow"/><text x="68" y="130">input</text><text x="207" y="130">process</text><text x="355" y="130">outcome</text>`,
      research: `<rect x="30" y="90" width="95" height="65" rx="8"/><rect x="145" y="90" width="95" height="65" rx="8"/><rect x="260" y="90" width="95" height="65" rx="8"/><rect x="375" y="90" width="70" height="65" rx="8"/><path d="M125 122H145M240 122H260M355 122H375" class="accent arrow"/><text x="43" y="125">question</text><text x="163" y="125">method</text><text x="280" y="125">evidence</text><text x="385" y="125">claim</text>`
    };
    if (!diagrams[kind]) return '';
    return `<figure class="study-figure observe-section" id="visual-model"><div class="figure-label"><span>Teaching diagram</span><strong>${esc(title)}</strong></div><svg viewBox="0 0 470 250" role="img" aria-label="Original schematic for ${esc(title)}"><defs><marker id="sp-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" class="marker-head"/></marker></defs>${diagrams[kind]}</svg><figcaption>Original SkillPoint schematic · labels simplified for revision · not to scale</figcaption></figure>`;
  }

  function timerModal() {
    return `<div class="modal" id="timer-modal" hidden><div class="modal-backdrop" data-close-timer></div><section class="modal-card timer-card" role="dialog" aria-modal="true" aria-labelledby="timer-title"><button class="modal-close" data-close-timer aria-label="Close">×</button><span class="eyebrow">Custom study session</span><h2 id="timer-title">Focus timer</h2><p>Enter your own duration in minutes.</p><div class="timer-display" data-timer-display aria-live="polite">00:00</div><label class="timer-input"><span>Minutes</span><input id="timer-minutes" type="number" min="1" max="720" step="1" placeholder="Enter minutes"></label><p class="timer-message" data-timer-message></p><div class="timer-controls"><button class="primary" data-timer-start>Set and start</button><button class="secondary" data-timer-pause disabled>Pause</button><button class="text-button" data-timer-reset>Reset</button></div></section></div>`;
  }

  function searchModal() {
    return `<div class="modal" id="search-modal" hidden><div class="modal-backdrop" data-close-search></div><section class="modal-card search-card" role="dialog" aria-modal="true" aria-labelledby="search-title"><button class="modal-close" data-close-search aria-label="Close">×</button><span class="eyebrow">Site search</span><h2 id="search-title">Find a subject or chapter</h2><input id="global-search" type="search" placeholder="Try gravitational fields or 9702" autocomplete="off"><div id="search-results" class="search-results"><p>Type at least two characters.</p></div></section></div>`;
  }

  let timer = {remaining: 0, total: 0, running: false, interval: null};
  function bindGlobal() {
    document.querySelectorAll('[data-open-timer]').forEach(button => button.addEventListener('click', openTimer));
    document.querySelectorAll('[data-close-timer]').forEach(button => button.addEventListener('click', closeTimer));
    document.querySelectorAll('[data-open-search]').forEach(button => button.addEventListener('click', openSearch));
    document.querySelectorAll('[data-close-search]').forEach(button => button.addEventListener('click', closeSearch));
    document.querySelector('[data-timer-start]')?.addEventListener('click', startTimer);
    document.querySelector('[data-timer-pause]')?.addEventListener('click', pauseTimer);
    document.querySelector('[data-timer-reset]')?.addEventListener('click', resetTimer);
    document.getElementById('global-search')?.addEventListener('input', drawSearch);
    updateTimerUI();
  }

  function openTimer() {
    const modal = document.getElementById('timer-modal');
    if (!modal) return;
    modal.hidden = false;
    document.body.classList.add('modal-open');
    setTimeout(() => document.getElementById('timer-minutes')?.focus(), 20);
  }
  function closeTimer() { const modal = document.getElementById('timer-modal'); if (modal) modal.hidden = true; document.body.classList.remove('modal-open'); }
  function startTimer() {
    const input = document.getElementById('timer-minutes');
    const message = document.querySelector('[data-timer-message]');
    if (!timer.remaining) {
      const minutes = Number(input?.value);
      if (!Number.isInteger(minutes) || minutes < 1 || minutes > 720) {
        if (message) message.textContent = 'Enter a whole number from 1 to 720.';
        return;
      }
      timer.total = timer.remaining = minutes * 60;
    }
    if (message) message.textContent = '';
    clearInterval(timer.interval);
    timer.running = true;
    timer.interval = setInterval(() => {
      timer.remaining = Math.max(0, timer.remaining - 1);
      if (!timer.remaining) {
        clearInterval(timer.interval);
        timer.running = false;
        document.querySelector('[data-timer-message]')?.replaceChildren(document.createTextNode('Session complete.'));
        try { navigator.vibrate?.([180, 80, 180]); } catch (_) {}
      }
      updateTimerUI();
    }, 1000);
    updateTimerUI();
  }
  function pauseTimer() { clearInterval(timer.interval); timer.running = false; updateTimerUI(); }
  function resetTimer() { clearInterval(timer.interval); timer = {remaining:0,total:0,running:false,interval:null}; const input=document.getElementById('timer-minutes'); if(input) input.value=''; const message=document.querySelector('[data-timer-message]'); if(message) message.textContent=''; updateTimerUI(); }
  function updateTimerUI() {
    const minutes = Math.floor(timer.remaining / 60);
    const seconds = timer.remaining % 60;
    const text = `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
    document.querySelectorAll('[data-timer-display]').forEach(el => el.textContent = text);
    document.querySelectorAll('[data-timer-mini]').forEach(el => el.textContent = timer.remaining ? text : 'Focus timer');
    document.querySelectorAll('[data-timer-pause]').forEach(button => { button.disabled = !timer.running; });
    document.querySelectorAll('[data-timer-start]').forEach(button => { button.textContent = timer.remaining && !timer.running ? 'Resume' : timer.running ? 'Running' : 'Set and start'; button.disabled = timer.running; });
  }

  function openSearch() { const modal=document.getElementById('search-modal'); if(!modal)return; modal.hidden=false; document.body.classList.add('modal-open'); setTimeout(()=>document.getElementById('global-search')?.focus(),20); }
  function closeSearch() { const modal=document.getElementById('search-modal'); if(modal)modal.hidden=true; document.body.classList.remove('modal-open'); }
  function drawSearch(event) {
    const q = event.target.value.trim().toLowerCase();
    const target = document.getElementById('search-results');
    if (q.length < 2) { target.innerHTML = '<p>Type at least two characters.</p>'; return; }
    const rows = [];
    DATA.subjects.forEach(subject => {
      if (`${subject.title} ${subject.code} ${subject.category}`.toLowerCase().includes(q)) rows.push({type:'Subject',title:subject.title,meta:`${subject.category} · ${subject.code}`,href:`#/subject/${subject.id}`});
      subject.chapters.forEach(chapter => {
        if (`${chapter.title} ${chapter.number} ${chapter.sections.map(s=>s.title).join(' ')}`.toLowerCase().includes(q)) rows.push({type:'Chapter',title:chapter.title,meta:`${subject.title} · ${subject.code}`,href:`#/chapter/${subject.id}/${chapter.id}`});
      });
    });
    target.innerHTML = rows.length ? rows.slice(0, 18).map(row => `<a href="${esc(row.href)}" onclick="document.getElementById('search-modal').hidden=true"><span>${esc(row.type)}</span><strong>${esc(row.title)}</strong><small>${esc(row.meta)}</small></a>`).join('') : '<p>No matching chapter.</p>';
  }

  function notFound() {
    shell(`<section class="not-found"><span>404</span><h1>That revision route does not exist.</h1><a class="primary" href="#/subjects">Return to subjects</a></section>`, {title:'Not found'});
  }

  function route() {
    window.scrollTo(0, 0);
    const raw = location.hash.replace(/^#\/?/, '').split('?')[0];
    const parts = raw.split('/').filter(Boolean).map(decodeURIComponent);
    if (!parts.length) return homePage();
    if (parts[0] === 'subjects') return subjectsPage();
    if (parts[0] === 'subject' && parts[1]) return subjectPage(parts[1]);
    if (parts[0] === 'chapter' && parts[1] && parts[2]) return chapterPage(parts[1], parts[2]);
    if (parts[0] === 'papers' && parts[1]) return papersPage(parts[1]);
    return notFound();
  }

  addEventListener('hashchange', route);
  route();
})();
