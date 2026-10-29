#!/usr/bin/env node
/*
 * kodluyo.com — Ders senaryo denetleyicisi
 * ---------------------------------------------------------------------------
 * verify-lessons.js "dogru cevap gecıyor mu?" sorusuna bakar.
 * Bu arac tersini denetler: "yanlis/bos cevap da geciyor mu?".
 *
 * Her test icin su cevaplar denenir ve HICBIRI gecmemelidir:
 *   bos        : editable alanlar tamamen silinir        (<<< ❓ >>> -> "")
 *   placeholder: alanlar oldugu gibi birakilir           (<<< ❓ >>> -> " ❓ ")
 *   cop        : alanlara anlamsiz metin yazilir         (<<< ❓ >>> -> "xyz")
 *
 * Ayrica icerik kurallari denetlenir:
 *   - Her .block dosyasi aciklayici yorum satiri(lari) ile baslamali.
 *   - Ana dosyanin (main.js) yorumu, 1. testin beklenen ciktisini BIREBIR
 *     (buyuk/kucuk harf dahil) icermeli.  Boylece "Merhaba Dünya" istenen
 *     yerde "merhaba dünya" yazan bir yonerge kalmaz.
 *   - `require` kurali varsa cozum cevabi bu kurali saglamali, bos cevap
 *     saglamamali (kural gercekten bir sey denetliyor olmali).
 *
 * Kullanim:
 *   node tools/audit-lessons.js                 -> tum dersler
 *   node tools/audit-lessons.js app/@javascript101/1000-*.md
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const runner = require("../app/source/javascript-runner.js");

const COURSE_DIR = path.join(__dirname, "..", "app", "@javascript101");
const DION_PATH = path.join(__dirname, "..", "app", "library", "directive.js", "dion.js");
const SOLUTIONS_DIR = path.join(__dirname, "solutions");
const RUN_TIMEOUT = 8000; // ders dosyalari icin de ayni ust sinir

const MIN_COMMENT_LENGTH = 60;

function loadDion() {
  const context = {};
  context.window = context;
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(DION_PATH, "utf8"), context, { filename: DION_PATH });
  return context.Dion;
}
const Dion = loadDion();

function listLessonFiles() {
  return fs.readdirSync(COURSE_DIR)
    .filter((name) => name.endsWith(".md"))
    .sort()
    .map((name) => path.join(COURSE_DIR, name));
}

// LevelFixer.parseCode esdegeri.
function parseCode(codeString) {
  const pieces = String(codeString).split("<<<");
  const result = [{ type: "readonly", code: pieces[0] }];
  let label = 0;
  for (let i = 1; i < pieces.length; i++) {
    const tail = pieces[i].split(">>>");
    result.push({ type: "editable", code: tail.shift(), label: label++ });
    result.push({ type: "readonly", code: tail.join(">>>") });
  }
  return result;
}

function countEditables(block) {
  return parseCode(block).filter((piece) => piece.type === "editable").length;
}

function fillBlock(block, values) {
  let index = 0;
  return parseCode(block).map((piece) => {
    if (piece.type !== "editable") return piece.code;
    return index < values.length ? values[index++] : "";
  }).join("");
}

function normalize(text) {
  return String(text).split("&minus;").join("-").trim();
}

// Sozdizimi hatasi beklenen bir sonuc; "gecmedi" demek icin yeterli.
async function runWithTimeout(files) {
  const handle = runner.run(files);
  const result = await Promise.race([
    handle.promise,
    new Promise((resolve) => setTimeout(() => resolve({ timedOut: true }), RUN_TIMEOUT)),
  ]);
  if (result.timedOut) {
    try { handle.cancel && handle.cancel(); } catch (error) { /* yoksay */ }
  }
  return result;
}

function isBlock(value) {
  return value && typeof value === "object" && typeof value[".block"] === "string";
}

function answersForSolution(partAnswers, filePath) {
  return (partAnswers || {})[filePath];
}

function leadingComments(block) {
  const lines = String(block).split("\n");
  const comments = [];
  for (const line of lines) {
    if (line.trim().startsWith("//")) comments.push(line.trim());
    else break;
  }
  return comments;
}

function checkComments(name, partIndex, fileName, block, firstTestOutput, errors) {
  // Yalnizca JavaScript dosyalarinda yorum olabilir; .json gibi dosyalara
  // yorum eklemek dosyayi bozar.
  if (!/\.js$/.test(fileName)) return;

  const comments = leadingComments(block);
  const where = `${name} parts/${partIndex}/files/${fileName}`;

  if (comments.length === 0) {
    errors.push(`${where}: blok yorum satiri ile baslamiyor (<<< ❓ >>> oncesinde // aciklama yok)`);
    return;
  }
  const commentText = comments.join("\n");
  if (commentText.length < MIN_COMMENT_LENGTH) {
    errors.push(`${where}: yorum yeterince aciklayici degil (${commentText.length} < ${MIN_COMMENT_LENGTH} karakter)`);
  }

  // Ana dosyada beklenen cikti, yorumda birebir (buyuk/kucuk harf dahil) yer almali.
  if (fileName === "main.js" && typeof firstTestOutput === "string") {
    const lines = firstTestOutput.split("&minus;").join("-").split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
    const missing = lines.filter((line) => commentText.indexOf(line) === -1);
    if (missing.length > 0) {
      errors.push(
        `${where}: yorumda beklenen cikti birebir yok ` +
        `(eksik: ${missing.map((line) => JSON.stringify(line)).join(", ")})`
      );
    }
  }
}

async function auditLesson(file, errors) {
  const name = path.basename(file);
  const data = Dion.parse(fs.readFileSync(file, "utf8"));
  const solutionsFile = path.join(SOLUTIONS_DIR, name.replace(/\.md$/, ".json"));
  const solutions = fs.existsSync(solutionsFile)
    ? JSON.parse(fs.readFileSync(solutionsFile, "utf8"))
    : { parts: {} };

  let testCount = 0;

  for (let partIndex = 0; partIndex < (data.parts || []).length; partIndex++) {
    const part = data.parts[partIndex];
    if (!part || !part.tests) continue;
    const partAnswers = (solutions.parts || {})[String(partIndex)] || {};
    const partFiles = part.files || {};

    // 1) Yorum kurallari (her part icin bir kez, 1. testin ciktisiyla).
    const firstOutput = part.tests[0] && part.tests[0].output;
    for (const fileName of Object.keys(partFiles)) {
      const block = partFiles[fileName] && partFiles[fileName][".block"];
      if (typeof block === "string") {
        checkComments(name, partIndex, fileName, block, firstOutput, errors);
      }
    }

    for (let testIndex = 0; testIndex < part.tests.length; testIndex++) {
      const test = part.tests[testIndex];
      const expected = normalize(test.output);
      const testFiles = test.files || {};
      const paths = Array.from(new Set([...Object.keys(partFiles), ...Object.keys(testFiles)]));
      const where = `${name} parts/${partIndex}/tests/${testIndex}`;
      testCount++;

      // 2) Kolay cevaplar gecmemeli.
      for (const variant of ["", " ❓ ", "xyz"]) {
        const object = {};
        for (const filePath of paths) {
          const testFile = testFiles[filePath];
          let block = null;
          if (isBlock(testFile)) block = testFile[".block"];
          else if (isBlock(partFiles[filePath])) block = partFiles[filePath][".block"];
          else if (testFile && typeof testFile === "object" && typeof testFile[".precode"] === "string") {
            object[filePath] = testFile[".precode"];
            continue;
          } else if (typeof testFile === "string") {
            object[filePath] = testFile;
            continue;
          }
          if (block === null) continue;
          const count = countEditables(block);
          object[filePath] = fillBlock(block, new Array(count).fill(variant));
        }
        const result = await runWithTimeout(object);
        if (result.timedOut) {
          errors.push(`${where}: "${variant || "bos"}" cevabiyla sonsuz dongu (zaman asimi)`);
          continue;
        }
        if (result.error === null && normalize(result.output) === expected) {
          errors.push(
            `${where}: "${variant || "bos"}" cevabiyla test GECIYOR ` +
            `(cikti: ${JSON.stringify(expected)})`
          );
        }
      }

      // 3) `require` kurali gercekten bir sey denetliyor mu?
      const required = test.require === undefined || test.require === null
        ? []
        : (Array.isArray(test.require) ? test.require : [test.require]).map(String).filter(Boolean);
      if (required.length > 0) {
        // UYGULAMADAKI KURAL (app/source/terminal.js): `require` metni yalnizca
        // ogrencinin YAZDIGI cevaplarda aranir; sabit (readonly) kodda gecmesi
        // yetmez. Denetim de ayni sekilde davranmali, yoksa uygulama dogru
        // cevabi reddederken arac "sorun yok" der.
        const solutionAnswers = [];
        let missingAnswer = false;
        for (const filePath of paths) {
          const testFile = testFiles[filePath];
          let block = null;
          let values = answersForSolution(partAnswers, filePath);
          if (isBlock(testFile)) block = testFile[".block"];
          else if (isBlock(partFiles[filePath])) block = partFiles[filePath][".block"];
          else if (testFile && typeof testFile === "object" && typeof testFile[".precode"] === "string") {
            continue;
          } else if (typeof testFile === "string") {
            continue;
          }
          if (block === null) continue;
          const count = countEditables(block);
          if (!values || values.length !== count) {
            errors.push(`${where}: ${filePath} icin cozum cevabi eksik (require denetlenemedi)`);
            missingAnswer = true;
            continue;
          }
          solutionAnswers.push(...values.map(String));
        }
        if (!missingAnswer) {
          const answerText = solutionAnswers.join("\n");
          const unsatisfied = required.filter((item) => answerText.indexOf(item) === -1);
          if (unsatisfied.length > 0) {
            errors.push(
              `${where}: cozum cevabi require kuralini saglamiyor ` +
              `(${unsatisfied.map((item) => JSON.stringify(item)).join(", ")})`
            );
          }
        }
      }
    }
  }
  return testCount;
}

(async function main() {
  const args = process.argv.slice(2).filter((arg) => !arg.startsWith("--"));
  const files = args.length > 0
    ? args.map((file) => path.resolve(file))
    : listLessonFiles();

  const errors = [];
  let testCount = 0;

  for (const file of files) {
    if (!fs.existsSync(file)) {
      errors.push(`${file}: dosya bulunamadi`);
      continue;
    }
    try {
      testCount += await auditLesson(file, errors);
    } catch (error) {
      errors.push(`${path.basename(file)}: ${error.message}`);
    }
  }

  if (errors.length === 0) {
    console.log(`✅ ${files.length} ders, ${testCount} test — bos/yanlis cevapla gecen test yok, yorum kurallari tamam.`);
    process.exit(0);
  }
  for (const error of errors) console.log("❌ " + error);
  console.log(`\n⚠️ ${files.length} ders, ${testCount} test — ${errors.length} sorun.`);
  process.exit(1);
})();
