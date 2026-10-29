# JavaScript 101 — Ders Yazım Şartnamesi

Bu belge, kodluyo.com `app/@javascript101/` kursundaki derslerin **birebir uyması gereken**
formatı, üslubu ve doğrulama kurallarını tanımlar. Amaç: `app/@python101/` kursuyla aynı
öğretim derinliği ve aynı Dion ders formatı.

> Altın standart örnek: `app/@javascript101/1010-değişkenler-number-tam-sayılar.md`
> Referans format: `app/@python101/1042-0-döngüler-for.md`

---

## 1. Dosya adlandırma ve sıralama

Dersler `app/@javascript101/` altında, önündeki sayıya göre **alfabetik** sıralanır
(`glob` ile bulunur). Bu yüzden sayı öneki zorunludur.

| Dosya | Konu |
|---|---|
| `1000-merhaba-dünya.md` | console.log temelleri |
| `1001-merhaba-dünya-çoklu.md` | çoklu değer, virgül, sayı + metin |
| `1002-merhaba-dünya-uygulama.md` | çok satır, kaçış karakterleri, şablon metin |
| `1010-değişkenler-number-tam-sayılar.md` | number / tam sayılar |
| `1011-değişkenler-number-ondalıklı.md` | ondalıklı sayılar |
| `1012-değişkenler-bigint.md` | bigint |
| `1013-değişkenler-boolean.md` | boolean |
| `1014-0-değişkenler-metin.md` | string |
| `1014-1-değişkenler-metin-devam.md` | string devam (şablon metin, metotlar) |
| `1020-koleksiyonlar-set.md` | Set (kümeler) |
| `1022-koleksiyonlar-demetler.md` | değiştirilemez diziler (Object.freeze) |
| `1023-0-koleksiyonlar-diziler.md` | Array |
| `1023-1-koleksiyonlar-diziler-devam.md` | Array metotları |
| `1024-koleksiyonlar-nesne.md` | Object / Map |
| `1030-0-operatörler-aritmetik.md` | aritmetik |
| `1031-0-operatörler-karşılaştırma.md` | karşılaştırma |
| `1032-0-operatörler-mantıksal.md` | mantıksal |
| `1033-0-operatörler-bitsel.md` | bitsel |
| `1034-0-operatörler-atama.md` | atama |
| `1035-0-operatörler-aitlik.md` | aitlik (in, includes, instanceof) |
| `1036-0-operatörler-kimlik.md` | kimlik (===, Object.is) |
| `1040-0-şartlar-if-else.md` | if / else / switch |
| `1041-0-döngüler-while.md` | while / do-while |
| `1042-0-döngüler-for.md` | for / for-of / for-in |
| `1043-0-fonksiyonlar.md` | function |
| `1044-0-fonksiyonlar-ok-fonksiyonlar.md` | arrow function |
| `1045-0-hata-yönetimi-try-catch.md` | try / catch / throw |
| `1050-node-require.md` | require |
| `1051-node-fs.md` | fs |
| `1052-node-path.md` | path |
| `1053-node-process.md` | process |
| `1054-node-module-exports.md` | module.exports |

Ders dosyası dışında her ders için ayrı bir şey oluşturma; `index.html` elle güncellenir.

---

## 2. Dosya iskeleti

```markdown
- show_content = true
- show_editor = true
- show_terminal = true
- language = "javascript"
- title = "🔢 Değişkenler number : Tam Sayılar"
- run = "node main.js"

- parts/0:
- text
# 🔢 **number** : Tam Sayılar
…

<code-view name="main.js" language="javascript">
let yıl = 2023;
console.log(yıl);
</code-view>

<code-view name="Terminal" language="bash">
2023
</code-view>

# 🎯 1. Görev
…

- files/main.js/.block
// yıl değişkenini 2023 yapar mısın?
let yıl = <<< ❓ >>>;
console.log(yıl);
---------------------
- parts/0/tests/0/output
2023

---------------------
```

Zorunlu kurallar:

1. Front matter **tam olarak** yukarıdaki 6 satırdır (`title` ve `run` değerleri değişir).
2. Her ders en az **8 part** içerir; hedef **10–14 part**. Son part bir tekrar/özet
   partı olabilir (ör. "mini sınav").
3. Part başlığı `- parts/N:` satırı ile, ardından `- text` satırı ile açılır.
4. Part içindeki tüm dosya/test yolları part öneki altına yazılır; ancak **yola
   `parts/N/` tekrar yazılmaz** (prefix `parts/N` zaten aktif):
   `- files/main.js/.block`, `- tests/0/files/main.js/.block`, `- tests/0/output`.
   Yanlış: `- parts/3/tests/0/output` (bu, `parts/3/parts/3/tests/...` üretir).
5. Partlar arasına `---------------------` (en az 5 tire) ayırıcı satır konur.
6. **Test çıktısının sonunda MUTLAKA bir boş satır** bırakılır. Dion ayrıştırıcısı
   metin bloğunun son karakterini (son `\n`) kırptığı için, boş satır olmazsa beklenen
   çıktı `"2023"` olur; runner ise `"2023\n"` üretir ve test asla geçmez.
7. `&minus;` yalnızca negatif sayı gösteriminde tercih edilir (Dion bunu `-` yapar);
   zorunlu değildir. Normal `-` de çalışır.
8. Part numaraları 0'dan başlar ve boşluksuz artar. Test numaraları her part içinde
   0'dan başlar.

---

## 3. Öğretim akışı (her part)

Her part şu sırayı izler:

1. **Başlık + açıklama** (2–5 cümle, Türkçe, sade). İlk partta `# 🎯` konu başlığı,
   sonraki partlarda `# ✅ Tebrikler` ile başlayıp yeni bilgiyi anlatmak serbesttir.
2. **Çalışan örnek**: `<code-view name="main.js" language="javascript"> … </code-view>`
3. **Çıktı**: hemen ardından `<code-view name="Terminal" language="bash"> … </code-view>`
4. **Görev**: `# 🎯 N. Görev` + net bir cümle ("… yazar mısın?").
5. **Alıştırma bloğu**: `- files/main.js/.block` altında, ipucu yorumlarıyla birlikte
   şablon kod. Öğrencinin dolduracağı yer(ler) `<<< ❓ >>>` ile işaretlenir.
6. **Test(ler)**: `- tests/0/output` beklenen terminal çıktısı. Anlamlıysa ikinci bir
   test (`- tests/1/files/main.js/.block` + `- tests/1/output`) farklı veriyle eklenir.

### Blok (alıştırma) kuralları

- Her partta **en az 1** editable bölge olmalı: `<<< ❓ >>>`.
- Editable bölge çözüldüğünde kod **geçerli JavaScript** olmalı.
  İyi: `let yıl = <<< ❓ >>>;`, `console.log("<<< ❓ >>>");`
  Kötü: satırın yarısını kapatmayan, sözdizimini bozan boşluklar.
- Çoklu boşluk gerekiyorsa aynı partta birden fazla `<<< ❓ >>>` kullanılabilir
  (editör her birini ayrı editable aralık yapar). Ör. şablon metinde
  ``console.log(`${<<< ❓ >>>} ${<<< ❓ >>>} yaşındadır.`);``
- Boşluk içine cevabı yazma; öğrenci dolduracak. İpucu yorumu (`// … yapar mısın?`)
  cevabı fazla vermeden yönlendirir.
- `tests/N/files/main.js/.block` verilirse test, öğrencinin editördeki cevabını bu
  şablonla birleştirir. İkinci testte **farklı veri** (farklı sayı/metin) kullan ki
  öğrenci cevabını kopyalamak zorunda kalmasın.
- **Önemli:** ikinci test, editördeki cevabı yeniden kullanır. Bu yüzden ikinci test
  yalnızca boşluk **genel bir ifade/operatör** olduğunda anlamlıdır
  (`elma <<< ❓ >>> armut` gibi). Boşluk sabit bir değerse (`let yıl = <<< ❓ >>>;`)
  ikinci test ekleme; tek test yeterlidir. Aksi hâlde öğrencinin cevabı (2023) yeni
  veriyle (1919) çelişir.

### Test kuralları

- Beklenen çıktı, örnekteki `Terminal` bloğunun **birebir** aynısı olmalı
  (boşluklar, Türkçe karakterler, ondalık noktası dahil).
- Test çıktısı, `console.log`'un ürettiği **tam** metindir; runner her `console.log`
  için sonuna `\n` ekler.
- Sayı biçimlendirmesine dikkat: `0.1 + 0.2` → `0.30000000000000004`,
  `10 / 3` → `3.3333333333333335`, `1n + 2n` → `3` (bigint `n`siz yazılır).
- İkinci testin çıktısını mutlaka `node tools/verify-lessons.js <dosya>` ile doğrula
  (araç örnekleri çalıştırır; testler için mantık kontrolü sana aittir).

---

### Çok dosyalı örnek (Node.js dersleri)

Node.js derslerinde birden fazla dosya aynı örnekte gösterilebilir. Art arda gelen
`<code-view>` kaynakları ve son `Terminal` bloğu tek örnek sayılır; giriş dosyası
`main.js`'tir.

```markdown
<code-view name="main.js" language="javascript">
const { topla } = require("./hesap.js");
console.log(topla(2, 3));
</code-view>

<code-view name="hesap.js" language="javascript">
function topla(a, b) {
  return a + b;
}
module.exports = { topla };
</code-view>

<code-view name="Terminal" language="bash">
5
</code-view>
```

Alıştırma bloğu da aynı şekilde iki dosya içerebilir:

```markdown
- files/main.js/.block
const { topla } = require("./hesap.js");
console.log(topla(2, 3));

- files/hesap.js/.block
function topla(a, b) {
  return <<< ❓ >>>;
}

- tests/0/output
5

---------------------
```

Çözüm dosyasında her iki dosya için cevaplar ayrı ayrı verilir:

```json
{ "parts": { "0": { "hesap.js": ["a + b"] } } }
```

## 4. `javascript-runner` yetenekleri ve çıktı biçimi

Dersler tarayıcı içindeki `app/source/javascript-runner.js` ile çalışır. **Sadece
aşağıdaki ortam garanti edilir** (gerçek Node.js'in tamamı yok):

- `console.log`, `console.error`, `console.warn`, `console.info` — çıktı terminale gider.
- `require` ile çekirdek modüller: `path`, `path/posix`, `fs`, `fs/promises`, `os`,
  `util`, `events`, `buffer` ve **göreli dosyalar** (`./hesap.js`, `./veri.json`).
- `path` fonksiyonları: `join`, `resolve`, `normalize`, `dirname`, `basename`,
  `extname`, `relative`, `parse`, `format`, `isAbsolute`, `sep` (Node.js ile uyumlu;
  mutlak yollarda baştaki `/` korunur).
- `module.exports`, `exports`, `require.main` (giriş dosyasında `true`, require edilen
  modülde `false`), `module.id`, `__filename`, `__dirname`.
- `process` (`argv`, `env`, `platform`, `arch`, `version`, `versions`, `cwd`,
  `exit`, `stdout.write`, …), `Buffer`, `setTimeout/setInterval/clearTimeout`
  (asenkron derslerde kullanma; basit tut).
- `fs` **senkron** fonksiyonları: `readFileSync`, `writeFileSync`, `appendFileSync`,
  `existsSync`, `readdirSync`, `statSync`, `unlinkSync`, `mkdirSync`, `copyFileSync`,
  `renameSync` + `fs.promises` (kullanma).
- Sanal dosya sistemi: `main.js` dışında ders içinde tanımlanan dosyalar (`veri.txt`,
  `selam.js`) ve çalışma anında `writeFileSync` ile yazılanlar okunabilir.
  `readFileSync` varsayılan olarak `utf8` metin döndürür; `Buffer` desteği sınırlıdır.
- **Yok:** `http`, `https`, `fs.watch`, `child_process`, `readline`, `net`, `crypto`,
  `Intl` gibi platform API'leri; tarayıcı DOM API'leri; `npm` paketleri; `import`.

### console.log biçimi (birebir)

```
console.log([1, 2, 3])            -> [ 1, 2, 3 ]
console.log([1, [2, 3]])          -> [ 1, [ 2, 3 ] ]
console.log({ a: 1, b: "x" })     -> { a: 1, b: 'x' }
console.log({})                   -> {}
console.log(new Set([1, 2, 2]))   -> Set(2) { 1, 2 }
console.log(new Map([["a", 1]]))  -> Map(1) { 'a' => 1 }
console.log(undefined, null, true) -> undefined null true
console.log(1n + 2n)              -> 3
console.log(typeof 1n)            -> bigint
console.log("3" + 4)              -> 34
console.log("3" - 4)              -> -1
console.log("%s var %d", "x", 5)  -> x var 5
```

Birden fazla argüman **tek boşlukla** birleştirilir. Metinler üst düzeyde tırnaksız,
nesne/dizi içinde tek tırnaklı yazılır. `undefined` ve `null` aynen yazılır.

### Hata mesajları

`throw new Error("mesaj")` → terminale `Error: mesaj` yazar ve test **başarısız** olur
(çıktı karşılaştırması hata durumunda yapılmaz). Bu yüzden `try/catch` dersinde
hatayı **yakalayıp** `console.log` ile yazdır; yakalanmamış hata örneği verme.

---

## 5. Üslup

- Türkçe, samimi ve öğretici; "yazar mısın?", "eder misin?" gibi rica kipi.
- Teknik terimlerin İngilizcesi parantez içinde verilir: "dizi (array)".
- Her partta **tek** yeni kavram; kavramlar önceki derslerle bağlanır.
- Emoji başlıklar: `# 🎯`, `# ✅ Tebrikler`, `# 💡 İpucu`, `# ⚠️ Dikkat`.
- Kod içi yorumlar Türkçe ve kısa (`// …`).
- Değişken adları Türkçe olabilir (`let yıl = 2023;`) — python101 ile aynı üslup.
- Uzun anlatım yerine **çalışan örnek → çıktı → görev** döngüsü tercih edilir.

---

## 6. Çözüm dosyaları (zorunlu)

Her dersin yanında `tools/solutions/<ders-adı>.json` bulunur. Doğrulayıcı, alıştırma
bloklarını bu cevaplarla doldurup her testin beklenen çıktıyı **gerçekten** ürettiğini
kontrol eder.

```json
{
  "parts": {
    "0": { "main.js": ["2023"] },
    "3": { "main.js": ["+"] }
  }
}
```

- Anahtar: part numarası (string), değer: dosya adı → cevap dizisi.
- Dizi, bloktaki `<<< … >>>` alanlarına **sırayla** yazılır.
- Boşluğu olmayan dosyaları yazmana gerek yok.
- Testlerin kendi `.block` şablonu varsa aynı cevaplar onlara da uygulanır; bu yüzden
  test şablonundaki boşluk sayısı part şablonuyla aynı olmalıdır.
- Cevap dosyası yoksa doğrulayıcı hata verir.

---

## 7. Doğrulama

Her ders yazıldıktan sonra:

```bash
node tools/verify-lessons.js app/@javascript101/1010-değişkenler-number-tam-sayılar.md
```

Araç şunları kontrol eder:

- Dion ile parse edilebilirlik ve şema (front matter, part, blok, test).
- Her `<code-view name="main.js">` + `Terminal` çiftinin gerçek runner çıktısıyla
  **birebir** eşleşmesi (çoklu dosya örnekleri dahil).
- Her partta editable `<<< … >>>` bloğu, en az 1 test ve test çıktısının sonunda
  boş satır (yani `\n` ile bitmesi).
- Part/test numaralarının sıralı olması.

Tüm kurs için:

```bash
node tools/verify-lessons.js
```

Hedef: **tüm derslerde 0 hata**.
