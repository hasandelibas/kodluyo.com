# tools/ — JavaScript 101 ders araçları

Bu klasör, `app/@javascript101/` kursunun içeriğini üretmek ve doğrulamak için kullanılan
yardımcı araçları barındırır. Uygulamanın çalışması için gerekli değildir.

## Dosyalar

| Dosya | Açıklama |
|---|---|
| `javascript101-spec.md` | Ders yazım şartnamesi (format, üslup, kurallar) |
| `verify-lessons.js` | Dersleri Dion ile ayrıştırır, örnekleri ve testleri gerçek runner ile çalıştırır |
| `audit-lessons.js` | Ters yönden denetler: boş/`❓`/anlamsız cevapla geçen test ve eksik yorum kalmış mı? |
| `build-pages.js` | PHP'siz (GitHub Pages) statik siteyi `docs/` içine üretir ve kendi bağlantılarını denetler |
| `solutions/<ders>.json` | Her partın `<<< ❓ >>>` alanlarına yazılacak cevaplar |

## Doğrulama

```bash
# tüm kurs
node tools/verify-lessons.js

# tek ders
node tools/verify-lessons.js app/@javascript101/1051-node-fs.md

# yalnızca şema (örnek/test çalıştırmadan)
node tools/verify-lessons.js --structure-only

# testleri atla, sadece örnekleri çalıştır
node tools/verify-lessons.js --no-tests
```

Araç şunları denetler:

1. **Dion şeması** — front matter, `parts/N`, `files`, `tests`, editable bloklar,
   test çıktısının sonundaki boş satır.
2. **Örnekler** — her `<code-view>` kaynağı + `Terminal` çifti `app/source/javascript-runner.js`
   ile çalıştırılır ve çıktı birebir karşılaştırılır (çok dosyalı Node.js örnekleri dahil).
3. **Testler** — `solutions/` içindeki cevaplarla blok doldurulur, çalıştırılır ve
   `tests/N/output` ile karşılaştırılır. Platformun `Terminal` panelindeki
   (`app/source/terminal.js`) davranışının aynısı taklit edilir.

## Senaryo denetimi

```bash
# tüm kurs
node tools/audit-lessons.js

# tek ders
node tools/audit-lessons.js app/@javascript101/1041-0-döngüler-while.md
```

`verify-lessons.js` "doğru cevap geçiyor mu?" diye bakar; `audit-lessons.js` ise
"**yanlış** cevap da geçiyor mu?" sorusunu sorar. Her test üç sahte cevapla denenir:

| Cevap | Ne olur |
|---|---|
| boş | `<<< ❓ >>>` alanları silinir |
| `❓` | yer tutucu olduğu gibi bırakılır |
| `xyz` | alanlara anlamsız metin yazılır |

Bu üçünden biriyle geçen test, öğrenciden hiçbir şey istemiyor demektir; düzeltilmelidir.
Araç ayrıca (a) her `.js` bloğunun açıklayıcı yorumla başlamasını, (b) `main.js` yorumunun
1. testin beklenen çıktısını **birebir** (aynı büyük/küçük harf) içermesini ve (c) `require`
kuralı varsa çözüm cevabının bu kuralı sağlamasını denetler.

Hedef: iki araçta da `0 hata`. Değişiklikten sonra bu komutları çalıştırmadan ders
dosyalarını gönderme.
