#!/usr/bin/env node
/*
 * kodluyo.com — JavaScript 101 ders doğrulayıcı
 * -------------------------------------------------
 * 1) Ders dosyalarını gerçek Dion ayrıştırıcısıyla okur ve şemayı denetler.
 * 2) Her <code-view name="main.js"> … Terminal çiftini gerçek
 *    javascript-runner motoruyla çalıştırıp beklenen çıktıyla birebir karşılaştırır.
 * 3) tools/solutions/<ders>.json içindeki cevaplarla alıştırma bloklarını doldurup
 *    her testin beklenen çıktısını gerçekten ürettiğini doğrular.
 *
 * Kullanım:
 *   node tools/verify-lessons.js                       -> tüm dersler
 *   node tools/verify-lessons.js app/@javascript101/1000-*.md
 *   node tools/verify-lessons.js --structure-only
 *
 * Çözüm dosyası biçimi (tools/solutions/<ders-adı>.json):
 *   {
 *     "parts": {
 *       "0": { "main.js": ["2023"] },
 *       "1": { "main.js": ["3"] }
 *     }
 *   }
 *   Dizideki her öğe, bloktaki <<< … >>> alanlarına sırayla yazılır.
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const runner = require("../app/source/javascript-runner.js");

const COURSE_DIR = path.join(__dirname, "..", "app", "@javascript101");
const DION_PATH = path.join(__dirname, "..", "app", "library", "directive.js", "dion.js");
const SOLUTIONS_DIR = path.join(__dirname, "solutions");

// -- Dion'u Node içinde yükle ---------------------------------------------- //
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

// <code-view name="main.js" language="javascript"> ... </code-view>
function extractCodeViews(content) {
  const re = /<code-view name="([^"]+)"([^>]*)>([\s\S]*?)<\/code-view>/g;
  const views = [];
  let match;
  while ((match = re.exec(content)) !== null) {
    views.push({
      name: match[1].trim(),
      attrs: match[2] || "",
      body: match[3],
    });
  }
  return views;
}

// Art arda gelen kaynak dosyalar + ardından gelen "Terminal" bloğu = 1 örnek.
function extractExamples(content) {
  const groups = [];
  let sources = [];
  for (const view of extractCodeViews(content)) {
    if (view.name.toLowerCase() === "terminal") {
      groups.push({ files: sources, expected: view.body });
      sources = [];
    } else {
      sources.push(view);
    }
  }
  return groups.filter((group) => group.files.length > 0 && group.expected !== undefined);
}

function normalize(text) {
  return String(text).split("&minus;").join("-").trim();
}

function isPlaceholderBlock(text) {
  return typeof text === "string" && text.includes("<<<") && text.includes(">>>");
}

// LevelFixer.parseCode'un Node tarafı eşdeğeri.
function parseCode(codeString) {
  const pieces = String(codeString).split("<<<");
  const result = [];
  const labels = [];
  result.push({ type: "readonly", code: pieces[0] });
  for (let i = 1; i < pieces.length; i++) {
    const tail = pieces[i].split(">>>");
    const editable = tail.shift();
    result.push({ type: "editable", code: editable, label: labels.length });
    labels.push(editable);
    result.push({ type: "readonly", code: tail.join(">>>") });
  }
  return result;
}

function countEditables(codeString) {
  return parseCode(codeString).filter((piece) => piece.type === "editable").length;
}

// -- Şema denetimi --------------------------------------------------------- //
function checkSchema(name, content, data, errors) {
  const fail = (message) => errors.push(`${name}: ${message}`);

  if (data.show_content !== true || data.show_editor !== true || data.show_terminal !== true) {
    fail("show_content / show_editor / show_terminal üçü de true olmalı");
  }
  if (!["javascript", "js", "node"].includes(data.language)) {
    fail(`language "javascript" olmalı (bulunan: ${JSON.stringify(data.language)})`);
  }
  if (data.run !== "node main.js") {
    fail(`run "node main.js" olmalı (bulunan: ${JSON.stringify(data.run)})`);
  }
  if (typeof data.title !== "string" || data.title.trim() === "") {
    fail("title boş olamaz");
  }
  if (!data.parts || !Array.isArray(data.parts)) {
    fail("parts bulunamadı");
    return;
  }
  if (data.parts.length < 8) {
    fail(`en az 8 part olmalı (bulunan: ${data.parts.length})`);
  }

  const views = extractCodeViews(content);

  data.parts.forEach((part, index) => {
    const where = `parts/${index}`;
    if (!part || typeof part !== "object") {
      fail(`${where} boş`);
      return;
    }
    if (typeof part.text !== "string" || part.text.trim() === "") {
      fail(`${where}/text boş`);
    }

    const partFiles = part.files || {};
    const fileNames = Object.keys(partFiles);
    if (fileNames.length === 0) {
      fail(`${where}/files yok (alıştırma bloğu bekleniyor)`);
    }
    let hasBlock = false;
    for (const fileName of fileNames) {
      const fileValue = partFiles[fileName];
      const block = fileValue && fileValue[".block"];
      if (typeof block === "string") {
        if (!isPlaceholderBlock(block)) {
          fail(`${where}/files/${fileName}/.block içinde <<< ❓ >>> yok`);
        } else {
          const opens = (block.match(/<<</g) || []).length;
          const closes = (block.match(/>>>/g) || []).length;
          if (opens !== closes) {
            fail(`${where}/files/${fileName}/.block içinde <<< ve >>> sayısı eşit değil`);
          }
          hasBlock = true;
        }
      }
    }
    if (!hasBlock) {
      fail(`${where} içinde editable blok bulunamadı`);
    }

    if (!Array.isArray(part.tests) || part.tests.length === 0) {
      fail(`${where}/tests yok`);
    } else {
      part.tests.forEach((test, testIndex) => {
        const testWhere = `${where}/tests/${testIndex}`;
        if (typeof test.output !== "string") {
          fail(`${testWhere}/output yok`);
        } else if (!test.output.endsWith("\n")) {
          fail(`${testWhere}/output sonunda boş satır yok (test asla geçmez)`);
        }
        const testFiles = test.files || {};
        for (const fileName of Object.keys(testFiles)) {
          const fileValue = testFiles[fileName];
          if (fileValue && typeof fileValue[".block"] === "string" && !isPlaceholderBlock(fileValue[".block"])) {
            fail(`${testWhere}/files/${fileName}/.block içinde <<< ❓ >>> yok`);
          }
        }
      });
    }
  });

  if (views.length === 0) {
    fail("hiç <code-view> bulunamadı");
  }
}

// -- Örnekleri çalıştır ---------------------------------------------------- //
async function runExamples(name, content, errors) {
  const examples = extractExamples(content);
  if (examples.length === 0) {
    errors.push(`${name}: çalıştırılabilir örnek (kaynak + Terminal) bulunamadı`);
    return 0;
  }

  let count = 0;
  for (let i = 0; i < examples.length; i++) {
    const group = examples[i];
    const filesObject = {};
    for (const source of group.files) {
      filesObject[source.name] = source.body.trim() + "\n";
    }
    count++;
    const result = await runner.run(filesObject).promise;
    const expected = normalize(group.expected);
    const actual = normalize(result.output);
    if (result.error !== null) {
      errors.push(`${name}: örnek #${i + 1} hata verdi: ${result.error}`);
    } else if (actual !== expected) {
      errors.push(
        `${name}: örnek #${i + 1} çıktı uyuşmuyor ` +
        `(beklenen: ${JSON.stringify(expected)}, alınan: ${JSON.stringify(actual)})`
      );
    }
  }
  return count;
}

// -- Çözümlerle testleri çalıştır ----------------------------------------- //
function loadSolutions(name) {
  const file = path.join(SOLUTIONS_DIR, name.replace(/\.md$/, ".json"));
  if (!fs.existsSync(file)) return null;
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    return { error: error.message };
  }
}

function fillBlock(blockCode, answers, where, fileName, errors) {
  const pieces = parseCode(blockCode);
  const editableCount = pieces.filter((piece) => piece.type === "editable").length;
  if (!answers) {
    errors.push(`${where}: ${fileName} için çözüm cevabı yok (tools/solutions/*.json)`);
    return null;
  }
  if (answers.length !== editableCount) {
    errors.push(
      `${where}: ${fileName} için ${editableCount} cevap gerekli, ${answers.length} verilmiş`
    );
    return null;
  }
  let index = 0;
  return pieces.map((piece) => {
    if (piece.type === "editable") {
      const value = answers[index++];
      return String(value);
    }
    return piece.code;
  }).join("");
}

async function runTests(name, data, errors) {
  if (!data.parts) return 0;
  const solutions = loadSolutions(name);
  if (solutions === null) {
    errors.push(`${name}: çözüm dosyası yok (tools/solutions/${name.replace(/\.md$/, ".json")})`);
    return 0;
  }
  if (solutions.error) {
    errors.push(`${name}: çözüm dosyası okunamadı: ${solutions.error}`);
    return 0;
  }

  let count = 0;
  for (let partIndex = 0; partIndex < data.parts.length; partIndex++) {
    const part = data.parts[partIndex];
    if (!part || !part.tests) continue;
    const partAnswers = (solutions.parts || {})[String(partIndex)] || {};
    const partFiles = part.files || {};

    for (let testIndex = 0; testIndex < part.tests.length; testIndex++) {
      const test = part.tests[testIndex];
      const where = `${name} parts/${partIndex}/tests/${testIndex}`;
      const testFiles = test.files || {};
      const filesObject = {};
      const paths = Array.from(new Set([
        ...Object.keys(partFiles),
        ...Object.keys(testFiles),
      ]));
      let broken = false;

      for (const filePath of paths) {
        const testFile = testFiles[filePath];
        let blockCode = null;
        let answers = partAnswers[filePath];

        if (testFile && typeof testFile === "object" && typeof testFile[".block"] === "string") {
          blockCode = testFile[".block"];
          answers = answers || partAnswers[filePath];
        } else if (partFiles[filePath] && typeof partFiles[filePath][".block"] === "string") {
          blockCode = partFiles[filePath][".block"];
        } else if (testFile && typeof testFile === "object" && typeof testFile[".precode"] === "string") {
          filesObject[filePath] = testFile[".precode"];
          continue;
        } else if (typeof testFile === "string") {
          filesObject[filePath] = testFile;
          continue;
        }

        if (blockCode === null) continue;
        const filled = fillBlock(blockCode, answers, where, filePath, errors);
        if (filled === null) {
          broken = true;
          continue;
        }
        filesObject[filePath] = filled;
      }

      if (broken) continue;

      count++;
      const result = await runner.run(filesObject).promise;
      const expected = normalize(test.output);
      const actual = normalize(result.output);
      if (result.error !== null) {
        errors.push(`${where}: çalışma hatası: ${result.error}`);
      } else if (actual !== expected) {
        errors.push(
          `${where}: test çıktısı uyuşmuyor ` +
          `(beklenen: ${JSON.stringify(expected)}, alınan: ${JSON.stringify(actual)})`
        );
      }
    }
  }
  return count;
}

(async function main() {
  const argv = process.argv.slice(2);
  const structureOnly = argv.includes("--structure-only");
  const noTests = argv.includes("--no-tests");
  const argFiles = argv.filter((arg) => !arg.startsWith("--"));
  const files = argFiles.length > 0
    ? argFiles.map((file) => path.resolve(file))
    : listLessonFiles();

  const errors = [];
  let exampleCount = 0;
  let testCount = 0;
  let partCount = 0;

  for (const file of files) {
    const name = path.basename(file);
    if (!fs.existsSync(file)) {
      errors.push(`${name}: dosya bulunamadı`);
      continue;
    }
    const content = fs.readFileSync(file, "utf8");
    let data;
    try {
      data = Dion.parse(content);
    } catch (error) {
      errors.push(`${name}: Dion parse hatası: ${error.message}`);
      continue;
    }

    checkSchema(name, content, data, errors);
    if (data.parts) partCount += data.parts.length;

    if (!structureOnly) {
      exampleCount += await runExamples(name, content, errors);
    }
    if (!structureOnly && !noTests) {
      testCount += await runTests(name, data, errors);
    }
  }

  if (errors.length === 0) {
    console.log(
      `\u2705 ${files.length} ders, ${partCount} part, ${exampleCount} örnek, ` +
      `${testCount} test — 0 hata.`
    );
    process.exit(0);
  }

  for (const error of errors) {
    console.log("\u274C " + error);
  }
  console.log(
    `\n\u26A0\uFE0F ${files.length} ders, ${partCount} part, ${exampleCount} örnek, ` +
    `${testCount} test — ${errors.length} hata.`
  );
  process.exit(1);
})();
