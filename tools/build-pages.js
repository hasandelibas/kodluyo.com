#!/usr/bin/env node
'use strict';

/**
 * tools/build-pages.js
 * ---------------------------------------------------------------------------
 * kodluyo.com uygulamasinin PHP'siz (statik) bir kopyasini `docs/` icine uretir.
 *
 * Neden gerekli?
 *   Sitede sunucu tarafi PHP yalnizca iki is yapar:
 *     1) ders dosyasini (.md) okumak
 *     2) alfabetik olarak "siradaki ders"i bulmak
 *   Bu bilgiler uretim aninda bilindigi icin dersler sayfaya gomulebilir.
 *   Python (Skulpt) ve JavaScript (mini Node.js) calistiricilari zaten
 *   tarayicida calistigi icin site tamamen sunucusuz calisir.
 *
 * Kullanim:
 *   node tools/build-pages.js            -> docs/ uretir
 *   node tools/build-pages.js --out DIR  -> baska bir dizine uretir
 *
 * Cikti duzeni (canli sitedeki URL semasini taklit eder):
 *   docs/index.html                          -> anasayfa
 *   docs/app/@javascript101/index.html       -> kurs sayfasi
 *   docs/app/@javascript101/<ders>/index.html-> ders sayfasi
 *   docs/app/{library,views,source,...}      -> uygulama varliklari
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const APP = path.join(ROOT, 'app');

const outArg = process.argv.indexOf('--out');
const OUT = outArg > -1
  ? path.resolve(process.argv[outArg + 1])
  : path.join(ROOT, 'docs');

const ASSET_DIRS = ['library', 'views', 'source'];
const ASSET_FILES = ['skulpt.js', 'api-javascript.html', 'api-javascript-worker.js', 'api-python-skulpt.html'];
const ROOT_FILES = ['python101.png', 'javascript101.svg', 'terminal.html', 'todo.html'];

// Online editor: PHP yalnizca dili query'den alip dosyayi okuyordu.
// Statik surumde ayni sayfa iki dile de hizmet eder (app/editor/online.html).
const EDITOR_DIR = path.join(APP, 'editor');
const EDITOR_ASSETS = ['online.html', 'python.md', 'javascript.md'];

const pages = [];

// --- yardimcilar -----------------------------------------------------------

function mkdir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function write(rel, html, baseDir) {
  const file = path.join(OUT, rel);
  mkdir(path.dirname(file));
  fs.writeFileSync(file, html);

  // Sayfada <base> varsa yerel baglantilar ona gore cozulur; denetim de ayni kurali kullanmali.
  const baseTag = html.match(/<base\s+href="([^"]+)"/);
  const resolvedBase = baseTag ? path.resolve(path.dirname(file), baseTag[1]) : baseDir;

  pages.push({ rel, file, baseDir: resolvedBase, html });
}

function copy(src, dest) {
  mkdir(path.dirname(dest));
  fs.cpSync(src, dest, { recursive: true });
}

function slugOf(name) {
  return name.replace(/\.md(\.terminal)?$/, '');
}

function lessonFiles(courseDir) {
  return fs.readdirSync(courseDir)
    .filter((name) => /\.md$/.test(name) || /\.md\.terminal$/.test(name))
    .filter((name) => fs.statSync(path.join(courseDir, name)).isFile())
    .sort();
}

// --- sablonlar -------------------------------------------------------------

// frame.php: kurs sayfasi + ders sayfasi kabugu. PHP blogunu atip HTML'i aliyoruz.
const frameSource = fs.readFileSync(path.join(APP, 'frame.php'), 'utf8');
let frameHtml = frameSource.slice(frameSource.indexOf('?>') + 2);
frameHtml = frameHtml.replace(/<\?= \$file \?>/g, '{{COURSE_LABEL}}');
frameHtml = frameHtml.replace('<?= isset($content) ? $content : "" ?>', '{{CONTENT}}');
if (/<\?(php|=)/.test(frameHtml)) {
  throw new Error('frame.php icinde cozulemeyen PHP kodu kaldi.');
}

// `Program()` artik app/source/program.js icinde (kabuk onu <script> ile yukler);
// burada yeniden uretmeye gerek yok. Yalnizca varliklarin var oldugunu denetle.
for (const asset of ['source/program.js', 'api-javascript-worker.js', 'api-javascript.html']) {
  if (!fs.existsSync(path.join(APP, asset))) {
    throw new Error('Eksik calistirici varligi: app/' + asset);
  }
}

function lessonTemplate() {
  // Ders sayfasi: /app/@kurs/<ders>/index.html -> kok varliklar iki seviye yukarida.
  // NOT: "../" -> "./" donusumu <base> etiketi eklenmeden ONCE yapilmali,
  // aksi halde taban adresi de bozulur.
  return frameHtml
    .replace(/(["(])\.\.\//g, '$1./')
    .replace('<head>', '<head>\n  <base href="../../">')
    .replace(/https:\/\/kodluyo\.com\//g, './{{COURSE_DIR}}/');
}

function courseTemplate() {
  // Kurs sayfasi: /app/@kurs/index.html -> varliklar bir seviye yukarida (../ oldugu gibi kalir).
  return frameHtml.replace(/https:\/\/kodluyo\.com\//g, '../../');
}

function lessonPage(course, slug, data, next) {
  const json = JSON.stringify({ data, next }).replace(/<\//g, '<\\/');
  const content = [
    '  <script>',
    '    source = ' + json + ';',
    '    Pager(source);',
    '',
    "    window.addEventListener('keydown', function (e) {",
    '      if (e.keyCode == 121) {',
    '        e.preventDefault();',
    '        panel.nextPart();',
    '      }',
    '    });',
    '  </script>',
  ].join('\n');

  return lessonTemplate()
    .replace(/{{COURSE_LABEL}}/g, course.replace(/^@/, '') + '/' + slug)
    .replace(/{{COURSE_DIR}}/g, course)
    .replace('{{CONTENT}}', content);
}

function coursePage(course, body) {
  return courseTemplate()
    .replace(/{{COURSE_LABEL}}/g, course.replace(/^@/, ''))
    .replace(/{{COURSE_DIR}}/g, course)
    .replace('{{CONTENT}}', body);
}

// --- uretim ----------------------------------------------------------------

console.log('kodluyo.com -> statik site');
console.log('kaynak : ' + APP);
console.log('hedef  : ' + OUT);

fs.rmSync(OUT, { recursive: true, force: true });
mkdir(OUT);

// 1) uygulama varliklari
for (const dir of ASSET_DIRS) {
  copy(path.join(APP, dir), path.join(OUT, 'app', dir));
}
for (const file of ASSET_FILES) {
  copy(path.join(APP, file), path.join(OUT, 'app', file));
}
for (const file of ROOT_FILES) {
  copy(path.join(ROOT, file), path.join(OUT, file));
}
// GitHub Pages'in Jekyll islemesini kapat (alt cizgi ile baslayan yollar bozulmasin).
fs.writeFileSync(path.join(OUT, '.nojekyll'), '');

// Online editor (/app/editor/): online.html dizin indeksi olarak da yayinlanir.
const editorPages = [];
for (const file of EDITOR_ASSETS) {
  copy(path.join(EDITOR_DIR, file), path.join(OUT, 'app', 'editor', file));
}
const editorHtml = fs.readFileSync(path.join(EDITOR_DIR, 'online.html'), 'utf8');
write(path.join('app', 'editor', 'index.html'), editorHtml, path.join(OUT, 'app'));
editorPages.push('app/editor/index.html');

// 2) anasayfa (kok index.html zaten statik; yalnizca baglantilar duzeltilir)
let landing = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
landing = landing.replace(/href="\.\/app\/(@[^"\/]+)"/g, 'href="./app/$1/"');
write('index.html', landing, OUT);

// 3) kurslar ve dersler
const courses = fs.readdirSync(APP)
  .filter((name) => name.startsWith('@') && fs.statSync(path.join(APP, name)).isDirectory())
  .sort();

let lessonCount = 0;
let courseCount = 0;
const lessonKeys = new Set();
const nextChecks = [];

for (const course of courses) {
  const courseDir = path.join(APP, course);
  const files = lessonFiles(courseDir);

  // "Siradaki ders" zinciri canli siteyle ayni: yalnizca *.md dosyalari (alfabetik).
  const mdFiles = files.filter((name) => /\.md$/.test(name));
  const nextOf = {};
  mdFiles.forEach((name, index) => {
    const next = mdFiles[index + 1];
    nextOf[name] = next ? course + '/' + slugOf(next) : null;
  });

  for (const name of files) {
    const data = fs.readFileSync(path.join(courseDir, name), 'utf8');
    const slug = slugOf(name);
    const next = nextOf[name] === undefined ? null : nextOf[name];
    lessonKeys.add(course + '/' + slug);
    if (next) nextChecks.push({ from: course + '/' + slug, next });
    write(
      path.join('app', course, slug, 'index.html'),
      lessonPage(course, slug, data, next),
      path.join(OUT, 'app')
    );
    lessonCount++;
  }

  // kurs sayfasi (HTML parca -> kabuk icine gomulur)
  const indexFile = path.join(courseDir, 'index.html');
  if (fs.existsSync(indexFile)) {
    let body = fs.readFileSync(indexFile, 'utf8');
    const known = new Set(files.map(slugOf));
    body = body.replace(/href="\.\/([^"\/]+)"/g, (match, target) => {
      return known.has(target) ? 'href="./' + target + '/"' : match;
    });
    write(path.join('app', course, 'index.html'), coursePage(course, body), path.join(OUT, 'app', course));
    courseCount++;
  }
}

// "Siradaki ders" baglantilari gercekten uretilmis mi?
const brokenNext = nextChecks.filter((item) => !lessonKeys.has(item.next));

// 4) /app/ icin kurs listesi
const cards = courses.map((course) => {
  const label = course.replace(/^@/, '');
  const titles = {
    javascript101: 'JavaScript 101 — JavaScript ve Node.js',
    python101: 'Python 101 — Python 3',
  };
  const title = titles[label] || label;
  const count = lessonFiles(path.join(APP, course)).length;
  return '      <a class="course" href="./' + course + '/"><b>' + title + '</b><span>' + count + ' ders</span></a>';
}).join('\n');

const appIndex = `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>kodluyo.com — Kurslar</title>
<style>
  body { margin:0; min-height:100vh; display:grid; place-items:center; background:#141414; color:#DDD;
         font-family:'Ubuntu Mono', ui-monospace, monospace; }
  main { width:min(760px, 92vw); padding:3em 0; }
  h1 { font-size:1.8em; margin:0 0 .25em;
       background:linear-gradient(45deg,#0048ff 20%,#37d9ff);
       -webkit-background-clip:text; background-clip:text; color:transparent; }
  p.lead { color:#888; margin:0 0 2em; }
  h2 { font-size:.95em; letter-spacing:.06em; text-transform:uppercase; color:#666; margin:0 0 .75em; }
  a.course { display:flex; justify-content:space-between; align-items:center; gap:1em; padding:1em 1.25em;
             margin-bottom:.75em; color:inherit; text-decoration:none; border-radius:10px;
             box-shadow:inset 0 0 0 1px #333; transition:.2s; }
  a.course:hover { box-shadow:inset 0 0 0 1px #37d9ff; background:#0003; transform:translateY(-1px); }
  a.course span { color:#37d9ff; font-size:.85em; white-space:nowrap; }
  a.home { color:#888; font-size:.85em; }
  .tools { display:flex; flex-wrap:wrap; gap:.75em; margin:2em 0 1.5em; }
  .tools a { padding:.6em 1.2em; border-radius:1000px; text-decoration:none; color:#fff; font-weight:700;
             background:linear-gradient(45deg,#0048ff,#37d9ff); }
  .tools a.ghost { background:transparent; box-shadow:inset 0 0 0 1px #666; color:#DDD; }
  .tools a.ghost:hover { box-shadow:inset 0 0 0 1px #37d9ff; }
</style>
</head>
<body>
<main>
  <h1>⌨️ kodluyo.com</h1>
  <p class="lead">Bir kurs seçin — kurulum yok, tarayıcıda çalışır.</p>
  <h2>Kurslar</h2>
${cards}
  <div class="tools">
    <a href="./editor/?lang=python">online python editörü</a>
    <a href="./editor/?lang=javascript">online javascript editörü</a>
    <a class="ghost" href="../terminal.html">terminal</a>
  </div>
  <p><a class="home" href="../">← Anasayfa</a></p>
</main>
</body>
</html>
`;
write(path.join('app', 'index.html'), appIndex, path.join(OUT, 'app'));

// 5) 404
const notFound = `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>kodluyo.com — Sayfa bulunamadı</title>
<style>
  body { margin:0; min-height:100vh; display:grid; place-items:center; background:#1A1B1A; color:#DDD;
         font-family:'Ubuntu Mono', ui-monospace, monospace; text-align:center; }
  a { color:#FC0; }
</style>
</head>
<body>
<main>
  <h1>404</h1>
  <p>Aradığınız ders bulunamadı.</p>
  <p><a href="./">Anasayfa</a> · <a href="./app/@javascript101/">JavaScript 101</a></p>
</main>
</body>
</html>
`;
write('404.html', notFound, OUT);

// 6) Jekyll'i kapat (isimlerde Turkce karakter var)
fs.writeFileSync(path.join(OUT, '.nojekyll'), '');

// --- dogrulama: sayfalardaki yerel baglantilar/varliklar gercekten var mi? ---

const missing = [];
const checked = new Set();

for (const page of pages) {
  for (const match of page.html.matchAll(/(?:src|href)\s*=\s*"([^"]+)"/g)) {
    let url = match[1].trim();
    if (!url || url.startsWith('#') || url.startsWith('data:')) continue;
    if (/^(https?:)?\/\//.test(url) || url.startsWith('mailto:')) continue;

    url = url.split('#')[0].split('?')[0];
    if (!url) continue;

    const target = url.startsWith('/')
      ? path.join(OUT, url)
      : path.resolve(page.baseDir, url);

    const probe = (p) => {
      if (fs.existsSync(p) && fs.statSync(p).isDirectory()) {
        return fs.existsSync(path.join(p, 'index.html'));
      }
      return fs.existsSync(p);
    };

    const key = page.rel + ' -> ' + url;
    if (checked.has(key)) continue;
    checked.add(key);

    if (!probe(target)) {
      missing.push(key);
    }
  }
}

console.log('');
console.log('kurs     : ' + courseCount);
console.log('ders     : ' + lessonCount);
console.log('sayfa    : ' + pages.length);
console.log('baglanti : ' + checked.size + ' yerel referans denetlendi');
console.log('next     : ' + nextChecks.length + ' "sonraki ders" baglantisi denetlendi');

if (missing.length) {
  console.error('');
  console.error('HATA: ' + missing.length + ' kirik yerel referans:');
  for (const item of missing.slice(0, 40)) console.error('  - ' + item);
  process.exit(1);
}

if (brokenNext.length) {
  console.error('');
  console.error('HATA: ' + brokenNext.length + ' kirik "sonraki ders" baglantisi:');
  for (const item of brokenNext.slice(0, 40)) console.error('  - ' + item.from + ' -> ' + item.next);
  process.exit(1);
}

console.log('');
console.log('✅ Statik site hazir: ' + OUT);
console.log('   Onizleme: npx serve docs   |   Yayin: docs/ -> gh-pages dali');
