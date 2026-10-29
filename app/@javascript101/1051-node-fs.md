- show_content = true
- show_editor = true
- show_terminal = true
- language = "javascript"
- title = "🗂️ fs : Dosya Sistemi (Senkron)"
- run = "node main.js"

- parts/0:
- text
# 🗂️ **fs** : Dosya Sistemi

Node.js'in en güçlü yanlarından biri dosyalarla çalışabilmesidir. ``fs`` (file system)
modülü dosya okuma, yazma, silme ve listeleme işlerini yapar. Modülü ``require("fs")``
ile programa çağırırız. Bu derste ``fs``'in **senkron** (synchronous) fonksiyonlarını
öğreneceğiz: kod bir işlemi bitirmeden sonraki satıra geçmez, bu yüzden sıra bellidir.

En çok kullanılan fonksiyon ``readFileSync``'tir. Dosyanın yolunu ve kodlamayı
(``"utf8"``) alır, dosyanın içeriğini metin olarak döndürür. Önce ``veri.txt``
dosyamıza bakalım:

<code-view name="veri.txt" language="text">
Merhaba dünya
</code-view>

<code-view name="main.js" language="javascript">
const fs = require("fs");

let metin = fs.readFileSync("veri.txt", "utf8");
console.log(metin.trim());
</code-view>

<code-view name="Terminal" language="bash">
Merhaba dünya
</code-view>

# 🎯 1. Görev

``veri.txt`` dosyasını okuyup içeriğini terminale yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: veri.txt dosyasını okuyup içeriğini terminale yazdır.
// fs.readFileSync("veri.txt", "utf8") dosyayı metin olarak okur; trim() baş ve sondaki boşlukları siler.
// Beklenen çıktı:
// Merhaba dünya
const fs = require("fs");

let metin = fs.readFileSync(<<< ❓ >>>, "utf8");
console.log(metin.trim());
---------------------
- files/veri.txt
Merhaba dünya
---------------------
- tests/0/files/veri.txt
Merhaba dünya
- tests/0/output
Merhaba dünya

---------------------
- tests/1/files/main.js/.block
// Görev: veri.txt dosyasını okuyup içeriğini terminale yazdır.
// İkinci test farklı veriyle aynı kuralı denetler: fs.readFileSync(yol, "utf8") ile okunur.
// Beklenen çıktı:
// Sabah oldu
const fs = require("fs");

let metin = fs.readFileSync(<<< ❓ >>>, "utf8");
console.log(metin.trim());
- tests/1/files/veri.txt
Sabah oldu
- tests/1/output
Sabah oldu

---------------------
- parts/1:
- text
# ✅ Tebrikler

Dosyadan gelen metin tek bir uzun metindir; satır sonları ``\n`` karakteriyle
gösterilir. ``split("\n")`` metni satırlara böler ve bir dizi (array) verir.
Böylece satır sayısını ``length`` ile bulabilir, tek bir satırı köşeli parantezle
seçebiliriz.

<code-view name="notlar.txt" language="text">
ilk satır
ikinci satır
üçüncü satır
</code-view>

<code-view name="main.js" language="javascript">
const fs = require("fs");

let metin = fs.readFileSync("notlar.txt", "utf8");
let satırlar = metin.trim().split("\n");
console.log(satırlar.length, "satır var.");
console.log("İlk satır:", satırlar[0]);
</code-view>

<code-view name="Terminal" language="bash">
3 satır var.
İlk satır: ilk satır
</code-view>

# 🎯 2. Görev

``notlar.txt`` dosyasını satırlara bölüp satır sayısını ve ilk satırı yazdıran
programı yazar mısın?

- files/main.js/.block
// Görev: notlar.txt dosyasını satırlara bölüp satır sayısını ve ilk satırı yazdır.
// Metni split("\n") metodu satırlara böler; satır sayısı length ile bulunur, ilk satır [0] ile seçilir.
// Beklenen çıktı:
// 3 satır var.
// İlk satır: ilk satır
const fs = require("fs");

let metin = fs.readFileSync("notlar.txt", "utf8");
let satırlar = metin.trim().<<< ❓ >>>("\n");
console.log(satırlar.length, "satır var.");
console.log("İlk satır:", satırlar[0]);
---------------------
- files/notlar.txt
ilk satır
ikinci satır
üçüncü satır
---------------------
- tests/0/files/notlar.txt
ilk satır
ikinci satır
üçüncü satır
- tests/0/output
3 satır var.
İlk satır: ilk satır

---------------------
- tests/1/files/main.js/.block
// Görev: notlar.txt dosyasını satırlara bölüp satır sayısını ve ilk satırı yazdır.
// İkinci test farklı veriyle aynı kuralı denetler: split("\n") ve length.
// Beklenen çıktı:
// 2 satır var.
// İlk satır: elma
const fs = require("fs");

let metin = fs.readFileSync("notlar.txt", "utf8");
let satırlar = metin.trim().<<< ❓ >>>("\n");
console.log(satırlar.length, "satır var.");
console.log("İlk satır:", satırlar[0]);
- tests/1/files/notlar.txt
elma
armut
- tests/1/output
2 satır var.
İlk satır: elma

---------------------
- parts/2:
- text
# ✍️ writeFileSync : Dosyaya Yazmak

``writeFileSync`` bir dosyaya metin yazar. Dosya yoksa oluşturur, varsa içeriğini
tamamen silip yeniden yazar. Yazdığımız metni hemen ``readFileSync`` ile geri
okuyarak kontrol edebiliriz.

<code-view name="main.js" language="javascript">
const fs = require("fs");

fs.writeFileSync("çıktı.txt", "Merhaba dosya!");
console.log(fs.readFileSync("çıktı.txt", "utf8"));
</code-view>

<code-view name="Terminal" language="bash">
Merhaba dosya!
</code-view>

# 🎯 3. Görev

``çıktı.txt`` dosyasına ``Merhaba dosya!`` yazan ve geri okuyan programı yazar mısın?

- files/main.js/.block
// Görev: çıktı.txt dosyasına "Merhaba dosya!" yaz ve geri oku.
// fs.writeFileSync("çıktı.txt", "Merhaba dosya!") metni çift tırnak içinde yazar; readFileSync geri okur.
// Beklenen çıktı:
// Merhaba dosya!
const fs = require("fs");

fs.writeFileSync("çıktı.txt", <<< ❓ >>>);
console.log(fs.readFileSync("çıktı.txt", "utf8"));
---------------------
- tests/0/output
Merhaba dosya!

---------------------
- parts/3:
- text
# ➕ appendFileSync : Sonuna Eklemek

``appendFileSync`` dosyanın **sonuna** metin ekler, eski içeriği silmez. ``writeFileSync``
ile başlayıp ``appendFileSync`` ile devam edersek bir günlük (log) dosyası oluşur.
Eklediğimiz satırın sonuna ``\n`` koymayı unutmayalım, yoksa satırlar birbirine yapışır.

<code-view name="main.js" language="javascript">
const fs = require("fs");

fs.writeFileSync("günlük.txt", "Bugün fs öğrendim.\n");
fs.appendFileSync("günlük.txt", "Yarın path öğreneceğim.\n");
console.log(fs.readFileSync("günlük.txt", "utf8").trim());
</code-view>

<code-view name="Terminal" language="bash">
Bugün fs öğrendim.
Yarın path öğreneceğim.
</code-view>

# 🎯 4. Görev

``günlük.txt`` dosyasına ikinci satırı ekleyen programı yazar mısın?

- files/main.js/.block
// Görev: günlük.txt dosyasının sonuna ikinci satırı ekle.
// fs.appendFileSync dosyanın sonuna ekler, eski içeriği silmez; satır sonuna \n koymayı unutma.
// Beklenen çıktı:
// Bugün fs öğrendim.
// Yarın path öğreneceğim.
const fs = require("fs");

fs.writeFileSync("günlük.txt", "Bugün fs öğrendim.\n");
fs.<<< ❓ >>>("günlük.txt", "Yarın path öğreneceğim.\n");
console.log(fs.readFileSync("günlük.txt", "utf8").trim());
---------------------
- tests/0/output
Bugün fs öğrendim.
Yarın path öğreneceğim.

---------------------
- tests/1/files/main.js/.block
// Görev: günlük.txt dosyasının sonuna ikinci satırı ekle.
// İkinci test farklı metinlerle aynı kuralı denetler: fs.appendFileSync dosyanın sonuna ekler.
// Beklenen çıktı:
// Bugün path öğrendim.
// Yarın process gelecek.
const fs = require("fs");

fs.writeFileSync("günlük.txt", "Bugün path öğrendim.\n");
fs.<<< ❓ >>>("günlük.txt", "Yarın process gelecek.\n");
console.log(fs.readFileSync("günlük.txt", "utf8").trim());
- tests/1/output
Bugün path öğrendim.
Yarın process gelecek.

---------------------
- parts/4:
- text
# ❓ existsSync : Dosya Var mı?

Her dosya okunamaz; dosya silinmiş ya da adı yanlış yazılmış olabilir.
``existsSync`` bir dosyanın olup olmadığını kontrol eder ve ``true`` / ``false``
döndürür. Okumadan önce bu kontrolü yapmak programı güvenli hale getirir.

<code-view name="main.js" language="javascript">
const fs = require("fs");

fs.writeFileSync("ayar.txt", "tema=koyu");

console.log(fs.existsSync("ayar.txt"));
console.log(fs.existsSync("yok.txt"));
</code-view>

<code-view name="Terminal" language="bash">
true
false
</code-view>

# 🎯 5. Görev

``ayar.txt`` dosyasının var olup olmadığını yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: ayar.txt dosyasının var olup olmadığını yazdır.
// fs.existsSync("ayar.txt") dosya varsa true, yoksa false döndürür.
// Beklenen çıktı:
// true
// false
const fs = require("fs");

fs.writeFileSync("ayar.txt", "tema=koyu");

console.log(<<< ❓ >>>);
console.log(fs.existsSync("yok.txt"));
---------------------
- tests/0/output
true
false

- tests/0/require = "existsSync(\"ayar.txt\")"

---------------------
- tests/1/files/main.js/.block
// Görev: olmayan ayar.txt dosyasının var olup olmadığını yazdır.
// İkinci test ters değerlerle aynı kuralı denetler: var olan dosya true, olmayan false döner.
// Beklenen çıktı:
// false
// true
const fs = require("fs");

fs.writeFileSync("yok.txt", "tema=acik");

console.log(<<< ❓ >>>);
console.log(fs.existsSync("yok.txt"));
- tests/1/output
false
true

- tests/1/require = "existsSync(\"ayar.txt\")"

---------------------
- parts/5:
- text
# 🔀 existsSync ile Karar Vermek

``existsSync`` çoğu zaman bir ``if`` cümlesinin içinde kullanılır. Dosya varsa
okuruz, yoksa kullanıcıya bilgi veririz. Böylece program hata vermeden devam eder.
Bu, hata yönetiminden (``try/catch``) önce gelen en basit koruma yöntemidir.

<code-view name="main.js" language="javascript">
const fs = require("fs");

fs.writeFileSync("not.txt", "kayıtlı");

if (fs.existsSync("not.txt")) {
  console.log("Dosya var:", fs.readFileSync("not.txt", "utf8"));
} else {
  console.log("Dosya yok, önce oluşturmalısın.");
}
</code-view>

<code-view name="Terminal" language="bash">
Dosya var: kayıtlı
</code-view>

# 🎯 6. Görev

Dosya varsa içeriğini, yoksa uyarı yazan programı tamamlar mısın?

- files/main.js/.block
// Görev: dosya varsa içeriğini, yoksa uyarı yazdır.
// if koşulunda fs.existsSync("not.txt") kullan; true ise dosya readFileSync ile okunur.
// Beklenen çıktı:
// Dosya var: kayıtlı
const fs = require("fs");

fs.writeFileSync("not.txt", "kayıtlı");

if (<<< ❓ >>>) {
  console.log("Dosya var:", fs.readFileSync("not.txt", "utf8"));
} else {
  console.log("Dosya yok, önce oluşturmalısın.");
}
---------------------
- tests/0/output
Dosya var: kayıtlı

- tests/0/require = "existsSync(\"not.txt\")"

---------------------
- parts/6:
- text
# 📁 readdirSync : Klasörü Listelemek

``readdirSync`` bir klasörün içindeki dosya ve klasör adlarını bir dizi olarak verir.
Klasör oluşturmak için ``mkdirSync`` kullanırız; bu fonksiyon klasör zaten varsa
hata verir, o yüzden bir kez çağırmak yeterlidir. Listeyi alfabetik görmek için
``sort()`` metodunu ekleyelim.

<code-view name="main.js" language="javascript">
const fs = require("fs");

fs.mkdirSync("notlar");
fs.writeFileSync("notlar/bir.txt", "bir");
fs.writeFileSync("notlar/iki.txt", "iki");

console.log(fs.readdirSync("notlar").sort());
</code-view>

<code-view name="Terminal" language="bash">
[ 'bir.txt', 'iki.txt' ]
</code-view>

# 🎯 7. Görev

``notlar`` klasöründeki dosyaları listeleyen programı yazar mısın?

- files/main.js/.block
// Görev: notlar klasöründeki dosyaları listele.
// fs.readdirSync("notlar") klasördeki adları dizi olarak verir; sort() alfabetik sıralar.
// Beklenen çıktı:
// [ 'bir.txt', 'iki.txt' ]
const fs = require("fs");

fs.mkdirSync("notlar");
fs.writeFileSync("notlar/bir.txt", "bir");
fs.writeFileSync("notlar/iki.txt", "iki");

console.log(fs.<<< ❓ >>>("notlar").sort());
---------------------
- tests/0/output
[ 'bir.txt', 'iki.txt' ]

---------------------
- tests/1/files/main.js/.block
// Görev: notlar klasöründeki dosyaları listele.
// İkinci test farklı dosya adlarıyla aynı kuralı denetler: fs.readdirSync ve sort().
// Beklenen çıktı:
// [ 'armut.txt', 'elma.txt' ]
const fs = require("fs");

fs.mkdirSync("notlar");
fs.writeFileSync("notlar/elma.txt", "elma");
fs.writeFileSync("notlar/armut.txt", "armut");

console.log(fs.<<< ❓ >>>("notlar").sort());
- tests/1/output
[ 'armut.txt', 'elma.txt' ]

---------------------
- parts/7:
- text
# 📏 statSync : Dosya Bilgisi

``statSync`` bir dosyanın boyutu (``size``), dosya olup olmadığı (``isFile``) gibi
bilgilerini döndürür. Boyut **bayt** (byte) cinsindendir; Türkçe karakterler birden
fazla bayt tutabilir. Dönen nesneyi bir değişkende saklayıp alanlarını okuyabiliriz.

<code-view name="main.js" language="javascript">
const fs = require("fs");

fs.writeFileSync("rapor.txt", "Merhaba dünya");

let bilgi = fs.statSync("rapor.txt");
console.log("Boyut:", bilgi.size, "bayt");
console.log("Dosya mı?", bilgi.isFile());
</code-view>

<code-view name="Terminal" language="bash">
Boyut: 13 bayt
Dosya mı? true
</code-view>

# 🎯 8. Görev

``rapor.txt`` dosyasının boyutunu bayt olarak yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: rapor.txt dosyasının boyutunu bayt olarak yazdır.
// fs.statSync("rapor.txt") nesnesinin size alanı boyutu bayt cinsinden verir; isFile() dosya olup olmadığını söyler.
// Beklenen çıktı:
// Boyut: 13 bayt
// Dosya mı? true
const fs = require("fs");

fs.writeFileSync("rapor.txt", "Merhaba dünya");

let bilgi = fs.statSync("rapor.txt");
console.log("Boyut:", bilgi.<<< ❓ >>>, "bayt");
console.log("Dosya mı?", bilgi.isFile());
---------------------
- tests/0/output
Boyut: 13 bayt
Dosya mı? true

---------------------
- tests/1/files/main.js/.block
// Görev: rapor.txt dosyasının boyutunu bayt olarak yazdır.
// İkinci test farklı metinle aynı kuralı denetler: statSync nesnesinin size alanı.
// Beklenen çıktı:
// Boyut: 14 bayt
// Dosya mı? true
const fs = require("fs");

fs.writeFileSync("rapor.txt", "Merhaba dünya!");

let bilgi = fs.statSync("rapor.txt");
console.log("Boyut:", bilgi.<<< ❓ >>>, "bayt");
console.log("Dosya mı?", bilgi.isFile());
- tests/1/output
Boyut: 14 bayt
Dosya mı? true

---------------------
- parts/8:
- text
# 🗑️ unlinkSync : Dosya Silmek

``unlinkSync`` bir dosyayı siler. Silinen dosyayı geri getirmek mümkün olmadığı için
silmekten emin olmak gerekir. ``existsSync`` ile kontrol etmek iyi bir alışkanlıktır.
Geçici (temp) dosyaları işimiz bitince silmek düzeni korur.

<code-view name="main.js" language="javascript">
const fs = require("fs");

fs.writeFileSync("geçici.txt", "sil beni");
console.log("Önce:", fs.existsSync("geçici.txt"));

fs.unlinkSync("geçici.txt");
console.log("Sonra:", fs.existsSync("geçici.txt"));
</code-view>

<code-view name="Terminal" language="bash">
Önce: true
Sonra: false
</code-view>

# 🎯 9. Görev

``geçici.txt`` dosyasını silen programı yazar mısın?

- files/main.js/.block
// Görev: geçici.txt dosyasını sil.
// fs.unlinkSync("geçici.txt") dosyayı siler; existsSync ile silmeden önce ve sonra kontrol edilir.
// Beklenen çıktı:
// Önce: true
// Sonra: false
const fs = require("fs");

fs.writeFileSync("geçici.txt", "sil beni");
console.log("Önce:", fs.existsSync("geçici.txt"));

fs.<<< ❓ >>>("geçici.txt");
console.log("Sonra:", fs.existsSync("geçici.txt"));
---------------------
- tests/0/output
Önce: true
Sonra: false

---------------------
- parts/9:
- text
# 📄 copyFileSync : Kopyalamak

``copyFileSync`` bir dosyayı başka bir ada kopyalar; kaynak dosya yerinde kalır.
Yedek almak ya da bir şablonu çoğaltmak için kullanılır. İlk parametre kaynak,
ikinci parametre hedef dosyadır.

<code-view name="main.js" language="javascript">
const fs = require("fs");

fs.writeFileSync("kaynak.txt", "yedeklenecek metin");
fs.copyFileSync("kaynak.txt", "yedek.txt");

console.log("Yedek:", fs.readFileSync("yedek.txt", "utf8"));
</code-view>

<code-view name="Terminal" language="bash">
Yedek: yedeklenecek metin
</code-view>

# 🎯 10. Görev

``kaynak.txt`` dosyasını ``yedek.txt`` olarak kopyalayan programı yazar mısın?

- files/main.js/.block
// Görev: kaynak.txt dosyasını yedek.txt olarak kopyala.
// fs.copyFileSync("kaynak.txt", "yedek.txt") ilk parametre kaynak, ikinci parametre hedeftir.
// Beklenen çıktı:
// Yedek: yedeklenecek metin
const fs = require("fs");

fs.writeFileSync("kaynak.txt", "yedeklenecek metin");
fs.copyFileSync(<<< ❓ >>>, "yedek.txt");

console.log("Yedek:", fs.readFileSync("yedek.txt", "utf8"));
---------------------
- tests/0/output
Yedek: yedeklenecek metin

---------------------
- parts/10:
- text
# 🛡️ Olmayan Dosya ve try/catch

Olmayan bir dosyayı okumaya çalışmak hata (error) üretir ve program durur.
``try/catch`` ile bu hatayı yakalayıp programı çalıştırmaya devam ettirebiliriz.
Hata nesnesinin ``code`` alanı hatanın türünü söyler; dosya yoksa ``ENOENT`` olur.

<code-view name="main.js" language="javascript">
const fs = require("fs");

try {
  console.log(fs.readFileSync("olmayan.txt", "utf8"));
} catch (hata) {
  console.log("Dosya bulunamadı:", hata.code);
}
</code-view>

<code-view name="Terminal" language="bash">
Dosya bulunamadı: ENOENT
</code-view>

# 🎯 11. Görev

Olmayan bir dosyayı okumaya çalışıp hatayı yakalayan programı tamamlar mısın?

- files/main.js/.block
// Görev: olmayan dosyayı okumaya çalışıp hatayı catch ile yakala.
// catch bloğunda hatanın kodu hata.code alanındadır; dosya yoksa ENOENT olur.
// Beklenen çıktı:
// Dosya bulunamadı: ENOENT
const fs = require("fs");

try {
  console.log(fs.readFileSync("olmayan.txt", "utf8"));
} catch (hata) {
  console.log("Dosya bulunamadı:", <<< ❓ >>>);
}
---------------------
- tests/0/output
Dosya bulunamadı: ENOENT

- tests/0/require = "hata.code"

---------------------
- parts/11:
- text
# 🏆 Mini Tekrar

Öğrendiklerimizi birleştirelim: dosyayı okuyup metni büyük harfe çeviriyoruz ve yeni
bir dosyaya yazıyoruz. Kaynak dosya ``veri.txt`` değişmeden kalır. Metin metotları
(``trim``, ``toUpperCase``) ile ``fs`` fonksiyonları birlikte çalışır.

<code-view name="veri.txt" language="text">
merhaba dünya
</code-view>

<code-view name="main.js" language="javascript">
const fs = require("fs");

let metin = fs.readFileSync("veri.txt", "utf8").trim();
fs.writeFileSync("büyük.txt", metin.toUpperCase());

console.log(fs.readFileSync("büyük.txt", "utf8"));
</code-view>

<code-view name="Terminal" language="bash">
MERHABA DÜNYA
</code-view>

# 🎯 12. Görev

``veri.txt`` içeriğini büyük harfe çevirip ``büyük.txt`` dosyasına yazan programı
yazar mısın?

- files/main.js/.block
// Görev: veri.txt içeriğini büyük harfe çevirip büyük.txt dosyasına yaz.
// Metni toUpperCase() metodu büyük harfe çevirir; sonuç writeFileSync ile yeni dosyaya yazılır.
// Beklenen çıktı:
// MERHABA DÜNYA
const fs = require("fs");

let metin = fs.readFileSync("veri.txt", "utf8").trim();
fs.writeFileSync("büyük.txt", metin.<<< ❓ >>>());

console.log(fs.readFileSync("büyük.txt", "utf8"));
---------------------
- files/veri.txt
merhaba dünya
---------------------
- tests/0/files/veri.txt
merhaba dünya
- tests/0/output
MERHABA DÜNYA

---------------------
- tests/1/files/main.js/.block
// Görev: veri.txt içeriğini büyük harfe çevirip büyük.txt dosyasına yaz.
// İkinci test farklı metinle aynı kuralı denetler: toUpperCase() ve writeFileSync.
// Beklenen çıktı:
// GÜNAYDIN DÜNYA
const fs = require("fs");

let metin = fs.readFileSync("veri.txt", "utf8").trim();
fs.writeFileSync("büyük.txt", metin.<<< ❓ >>>());

console.log(fs.readFileSync("büyük.txt", "utf8"));
- tests/1/files/veri.txt
günaydın dünya
- tests/1/output
GÜNAYDIN DÜNYA

---------------------
