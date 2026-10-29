- show_content = true
- show_editor = true
- show_terminal = true
- language = "javascript"
- title = "📦 module.exports : Modül Yazmak"
- run = "node main.js"

- parts/0:
- text
# 📦 **module.exports** : Kendi Modülünü Yazmak

Bir projede bütün kodu ``main.js`` içine yazmak karışıklık yaratır. Kodumuzu birden
fazla dosyaya böler, her dosyaya bir iş veririz. Bir dosyanın dışarıya açtığı şeylere
**modül** (module) denir; dışarıya açmak için ``module.exports`` ya da kısaca
``exports`` kullanırız. Diğer dosya bu modülü ``require("./dosya.js")`` ile çağırır.

``selam.js`` bir fonksiyonu dışa aktarıyor, ``main.js`` onu kullanıyor:

<code-view name="main.js" language="javascript">
// main.js
const { selamVer } = require("./selam.js");

selamVer("Ada");
</code-view>

<code-view name="selam.js" language="javascript">
// selam.js
function selamVer(ad) {
  console.log("Merhaba", ad);
}

exports.selamVer = selamVer;
</code-view>

<code-view name="Terminal" language="bash">
Merhaba Ada
</code-view>

# 🎯 1. Görev

``selam.js`` modülünü ``main.js`` içinden çağıran programı tamamlar mısın?

- files/main.js/.block
// Görev: selam.js modülünü require() ile çağırıp selamVer("Ada") çıktısını yazdır.
// Boşluğa METİN olarak "./selam.js" yaz; dosya yolu ./ ile başlar ve .js uzantısı yazılır.
// Beklenen çıktı:
// Merhaba Ada
const { selamVer } = require(<<< ❓ >>>);

selamVer("Ada");
---------------------
- files/selam.js/.block
// Görev: selamVer fonksiyonunu exports.selamVer ile dışa aktar.
// Boşluğa fonksiyonun adını yaz: selamVer; burada kısa exports nesnesi kullanılıyor.
function selamVer(ad) {
  console.log("Merhaba", ad);
}

exports.selamVer = <<< ❓ >>>;
---------------------
- tests/0/output
Merhaba Ada

- tests/0/require = "\"./selam.js\""
---------------------
- parts/1:
- text
# ✅ Tebrikler

``exports.`` ön ekiyle birden çok şeyi dışa aktarabiliriz: her satır bir isim ekler.
``main.js`` modülü bir nesne gibi çağırır ve ``hesap.topla``, ``hesap.çıkar`` gibi
nokta ile erişir. Bu şekilde bir dosyada küçük bir araç kutusu (utility) oluşur.

<code-view name="main.js" language="javascript">
// main.js
const hesap = require("./hesap.js");

console.log("Topla:", hesap.topla(3, 4));
console.log("Çıkar:", hesap.çıkar(10, 4));
</code-view>

<code-view name="hesap.js" language="javascript">
// hesap.js
function topla(a, b) {
  return a + b;
}

function çıkar(a, b) {
  return a - b;
}

exports.topla = topla;
exports.çıkar = çıkar;
</code-view>

<code-view name="Terminal" language="bash">
Topla: 7
Çıkar: 6
</code-view>

# 🎯 2. Görev

İki fonksiyonu dışa aktarıp kullanan programı tamamlar mısın?

- files/main.js/.block
// Görev: hesap.js modülünün topla ve çıkar fonksiyonlarını çağırıp sonuçları yazdır.
// Boşluğa hesap nesnesinin metodunu yaz: çıkar; nokta ile erişilir ve sonuç 6 olur.
// Beklenen çıktı:
// Topla: 7
// Çıkar: 6
const hesap = require("./hesap.js");

console.log("Topla:", hesap.topla(3, 4));
console.log("Çıkar:", hesap.<<< ❓ >>>(10, 4));
---------------------
- files/hesap.js/.block
// Görev: topla fonksiyonunu tamamla: iki sayıyı + operatörü ile topla.
// Boşluğa return değerini yaz: a + b; çıkarma fonksiyonu zaten hazır.
function topla(a, b) {
  return <<< ❓ >>>;
}

function çıkar(a, b) {
  return a - b;
}

exports.topla = topla;
exports.çıkar = çıkar;
---------------------
- tests/0/output
Topla: 7
Çıkar: 6

- tests/0/require = "a + b"
---------------------
- tests/1/files/main.js/.block
// Görev: İkinci testte de aynı modülü farklı sayılarla kullan: topla(12, 8), çıkar(9, 4).
// Boşluğa yine çıkar yaz; topla sonucu 20, çıkarma sonucu 5 olarak yazılır.
const hesap = require("./hesap.js");

console.log("Topla:", hesap.topla(12, 8));
console.log("Çıkar:", hesap.<<< ❓ >>>(9, 4));
- tests/1/output
Topla: 20
Çıkar: 5

- tests/1/require = "çıkar"
---------------------
- parts/2:
- text
# 🧰 module.exports = { ... }

``exports.topla = topla`` satırlarını uzun bulursan tüm modülü tek seferde bir nesne
olarak da verebilirsin: ``module.exports = { topla, çarp }``. Buradaki kısa yazım
``topla: topla`` demektir. Artık ``exports`` yerine ``module.exports`` kullanıyoruz;
ikisi aynı nesneyi gösterir.

<code-view name="main.js" language="javascript">
// main.js
const hesap = require("./hesap.js");

console.log(hesap.topla(2, 3));
console.log(hesap.çarp(2, 3));
</code-view>

<code-view name="hesap.js" language="javascript">
// hesap.js
function topla(a, b) {
  return a + b;
}

function çarp(a, b) {
  return a * b;
}

module.exports = {
  topla: topla,
  çarp: çarp
};
</code-view>

<code-view name="Terminal" language="bash">
5
6
</code-view>

# 🎯 3. Görev

Modülü tek bir nesne olarak dışa aktaran programı tamamlar mısın?

- files/main.js/.block
// Görev: hesap.js modülünü require() ile çağırıp topla ve çarp fonksiyonlarını kullan.
// Boşluğa METİN olarak "./hesap.js" yaz; dosya yolu ./ ile başlar, .js uzantısı yazılır.
// Beklenen çıktı:
// 5
// 6
const hesap = require(<<< ❓ >>>);

console.log(hesap.topla(2, 3));
console.log(hesap.çarp(2, 3));
---------------------
- files/hesap.js/.block
// Görev: module.exports = { ... } ile topla ve çarp fonksiyonlarını tek nesnede dışa aktar.
// Boşluğa topla fonksiyonunun adını yaz: topla; kısa yazım topla: topla anlamına gelir.
function topla(a, b) {
  return a + b;
}

function çarp(a, b) {
  return a * b;
}

module.exports = {
  topla: <<< ❓ >>>,
  çarp: çarp
};
---------------------
- tests/0/output
5
6

- tests/0/require = "\"./hesap.js\""
---------------------
- parts/3:
- text
# 🔢 Fonksiyon Export Etmek

Bir modül tek bir şey yapıyorsa doğrudan bir **fonksiyon** dışa aktarabilir.
``module.exports = function ...`` yazınca ``require`` doğrudan fonksiyonu döndürür;
artık nokta ile alan çağırmayız. Bu yöntem küçük yardımcı fonksiyonlar için çok temizdir.

<code-view name="main.js" language="javascript">
// main.js
const kare = require("./kare.js");

console.log("Kare:", kare(6));
</code-view>

<code-view name="kare.js" language="javascript">
// kare.js
module.exports = function (sayı) {
  return sayı * sayı;
};
</code-view>

<code-view name="Terminal" language="bash">
Kare: 36
</code-view>

# 🎯 4. Görev

Tek bir fonksiyonu dışa aktaran modülü tamamlar mısın?

- files/main.js/.block
// Görev: kare.js modülünü require() ile çağırıp kare fonksiyonunu kullan.
// Boşluğa METİN olarak "./kare.js" yaz; modül tek bir fonksiyon dışa aktarıyor.
// Beklenen çıktı:
// Kare: 36
const kare = require(<<< ❓ >>>);

console.log("Kare:", kare(6));
---------------------
- files/kare.js/.block
// Görev: sayının karesini döndüren fonksiyonu module.exports ile dışa aktar.
// Boşluğa return değerini yaz: sayı * sayı; aynı sayıyı kendisiyle çarpar.
module.exports = function (sayı) {
  return <<< ❓ >>>;
};
---------------------
- tests/0/output
Kare: 36

- tests/0/require = "sayı * sayı"
---------------------
- tests/1/files/main.js/.block
// Görev: İkinci testte de kare.js modülünü çağır; bu kez kare(9) çalıştırılır.
// Boşluğa yine METİN olarak "./kare.js" yaz; çıktı "Kare: 81" olur.
const kare = require(<<< ❓ >>>);

console.log("Kare:", kare(9));
- tests/1/output
Kare: 81

- tests/1/require = "\"./kare.js\""
---------------------
- parts/4:
- text
# 🔁 require Önbelleği (Cache)

Bir modül ilk ``require`` çağrısında çalışır ve **hatırlanır** (cache). İkinci kez
``require`` ettiğimizde dosya yeniden çalışmaz, aynı nesne geri gelir. Bu yüzden
modül içindeki bir değişken iki kullanımda da aynı kalır. Test etmek için modülün
en üstüne bir ``console.log`` koyabiliriz.

<code-view name="main.js" language="javascript">
// main.js
const sayac = require("./sayac.js");
const sayac2 = require("./sayac.js");

console.log(sayac.artır());
console.log(sayac.artır());
console.log("Aynı modül mü?", sayac === sayac2);
</code-view>

<code-view name="sayac.js" language="javascript">
// sayac.js
console.log("sayac.js yüklendi");

let sayı = 0;

module.exports = {
  artır: function () {
    return ++sayı;
  }
};
</code-view>

<code-view name="Terminal" language="bash">
sayac.js yüklendi
1
2
Aynı modül mü? true
</code-view>

# 🎯 5. Görev

Aynı modülü ikinci kez çağırıp sayacı artıran programı tamamlar mısın?

- files/main.js/.block
// Görev: Aynı modülü require() ile ikinci kez çağır ve sayaç değerlerini yazdır.
// Boşluğa require("./sayac.js") yaz; modül önbellekten gelir ve dosya yeniden çalışmaz.
// Beklenen çıktı:
// sayac.js yüklendi
// 1
// 2
// Aynı modül mü? true
const sayac = require("./sayac.js");
const sayac2 = <<< ❓ >>>;

console.log(sayac.artır());
console.log(sayac.artır());
console.log("Aynı modül mü?", sayac === sayac2);
---------------------
- files/sayac.js/.block
// Görev: Modülün sayaç fonksiyonunu tamamla: her çağrıda sayıyı bir artır.
// Boşluğa return değerini yaz: ++sayı; önce artırır, sonra yeni değeri döndürür.
console.log("sayac.js yüklendi");

let sayı = 0;

module.exports = {
  artır: function () {
    return <<< ❓ >>>;
  }
};
---------------------
- tests/0/output
sayac.js yüklendi
1
2
Aynı modül mü? true

- tests/0/require = "require(\"./sayac.js\")"
---------------------
- parts/5:
- text
# ⚠️ exports ve module.exports Farkı

``exports`` başlangıçta ``module.exports`` ile aynı nesneyi gösterir. Ama
``module.exports = { ... }`` yazdığında artık **yeni** bir nesne gösterir; eski
``exports`` bağlantısı kopar. Bu yüzden ``module.exports``'u değiştirdikten sonra
``exports.`` ile ekleme yapmak işe yaramaz. Aşağıdaki modülde ``yarı`` fonksiyonu
bu yüzden görünmez.

<code-view name="main.js" language="javascript">
// main.js
const hesap = require("./hesap.js");

console.log(Object.keys(hesap));
console.log("yarı var mı?", hesap.yarı === undefined);
</code-view>

<code-view name="hesap.js" language="javascript">
// hesap.js
function ikiKat(n) {
  return n * 2;
}

module.exports = { ikiKat: ikiKat };

// Dikkat: module.exports yukarıda değişti, bu satır işe yaramaz.
exports.yarı = function (n) {
  return n / 2;
};
</code-view>

<code-view name="Terminal" language="bash">
[ 'ikiKat' ]
yarı var mı? true
</code-view>

# 🎯 6. Görev

Modülün yalnızca ``ikiKat`` fonksiyonunu taşımasını sağlar mısın?

- files/main.js/.block
// Görev: module.exports = { ... } ile yalnızca ikiKat fonksiyonunu taşıyan modülü kullan.
// Boşluğa === yaz; hesap.yarı tanımsız olduğu için karşılaştırma true döner.
// Beklenen çıktı:
// [ 'ikiKat' ]
// yarı var mı? true
const hesap = require("./hesap.js");

console.log(Object.keys(hesap));
console.log("yarı var mı?", hesap.yarı <<< ❓ >>> undefined);
---------------------
- files/hesap.js/.block
// Görev: module.exports'a yalnızca ikiKat fonksiyonunu içeren YENİ bir nesne ata.
// Boşluğa module.exports = { ikiKat: ikiKat } yaz; böylece exports bağlantısı kopar.
function ikiKat(n) {
  return n * 2;
}

<<< ❓ >>>;

// Dikkat: module.exports yukarıda değişti, bu satır işe yaramaz.
exports.yarı = function (n) {
  return n / 2;
};
---------------------
- tests/0/output
[ 'ikiKat' ]
yarı var mı? true

---------------------
- parts/6:
- text
# 🚦 require.main === module

``require.main`` programı başlatan **ana modülü** gösterir; ``require.main.id`` bu
modülün adıdır. ``module`` ise o an çalışan dosyanın modülüdür. Bu yüzden
``require.main === module`` yalnızca doğrudan çalıştırılan dosyada ``true``, başka
dosyadan ``require`` edilen modülde ``false`` olur. Bu kontrolü kullanan bir modül,
hem kütüphane olarak hem de tek başına çalışabilir.

<code-view name="main.js" language="javascript">
// main.js
const { selamVer } = require("./selam.js");

console.log("main.js ana modül mü?", require.main === module);
console.log("Ana modülün adı:", require.main.id);
selamVer("Ada");
</code-view>

<code-view name="selam.js" language="javascript">
// selam.js
function selamVer(ad) {
  console.log("Merhaba", ad);
}

module.exports = { selamVer };

console.log("selam.js ana modül mü?", require.main === module);

// Bu dosya doğrudan çalıştırılırsa da selam versin
if (require.main === module) {
  selamVer("Dünya");
}
</code-view>

<code-view name="Terminal" language="bash">
selam.js ana modül mü? false
main.js ana modül mü? true
Ana modülün adı: main.js
Merhaba Ada
</code-view>

# 🎯 7. Görev

Ana modül kontrolünü ekleyen programı tamamlar mısın? Çıktıda ``main.js`` için
``true``, ``selam.js`` için ``false`` görünmeli.

- files/main.js/.block
// Görev: require.main === module kontrolüyle dosyanın ana modül olup olmadığını yazdır.
// Boşluğa METİN olarak "./selam.js", ikinci boşluğa require.main === module yaz.
// Beklenen çıktı:
// selam.js ana modül mü? false
// main.js ana modül mü? true
// Ana modülün adı: main.js
// Merhaba Ada
const { selamVer } = require(<<< ❓ >>>);

console.log("main.js ana modül mü?", <<< ❓ >>>);
console.log("Ana modülün adı:", require.main.id);
selamVer("Ada");
---------------------
- files/selam.js/.block
// Görev: selam.js içinde require.main === module kontrolünü tamamla.
// Boşluğa === yaz; require edilen modülde bu kontrol false döner, modül yine çalışır.
function selamVer(ad) {
  console.log("Merhaba", ad);
}

module.exports = { selamVer };

console.log("selam.js ana modül mü?", require.main <<< ❓ >>> module);

// Bu dosya doğrudan çalıştırılırsa da selam versin
if (require.main === module) {
  selamVer("Dünya");
}
---------------------
- tests/0/output
selam.js ana modül mü? false
main.js ana modül mü? true
Ana modülün adı: main.js
Merhaba Ada

- tests/0/require = "require.main"
---------------------
- parts/7:
- text
# ⚙️ Ayar Modülü

Modüller yalnızca fonksiyon değil, veri de saklayabilir. Ayarları (dil, sürüm gibi)
bir nesnede toplayıp dışa aktarmak yaygın bir alışkanlıktır. ``main.js`` bu değerleri
nokta ile okur; değerleri değiştirmek için tek bir yeri düzenlemek yeterlidir.

<code-view name="ayar.js" language="javascript">
// ayar.js
module.exports = {
  dil: "Türkçe",
  sürüm: 2
};
</code-view>

<code-view name="main.js" language="javascript">
// main.js
const ayar = require("./ayar.js");

console.log("Dil:", ayar.dil);
console.log("Sürüm:", ayar.sürüm);
</code-view>

<code-view name="Terminal" language="bash">
Dil: Türkçe
Sürüm: 2
</code-view>

# 🎯 8. Görev

Ayar nesnesini dışa aktarıp kullanan programı tamamlar mısın?

- files/main.js/.block
// Görev: ayar.js modülünün dışa aktardığı dil ve sürüm değerlerini yazdır.
// Boşluğa ayar nesnesinin alan adını yaz: dil; değer "Türkçe" olarak okunur.
// Beklenen çıktı:
// Dil: Türkçe
// Sürüm: 2
const ayar = require("./ayar.js");

console.log("Dil:", ayar.<<< ❓ >>>);
console.log("Sürüm:", ayar.sürüm);
---------------------
- files/ayar.js/.block
// Görev: dil ve sürüm ayarlarını içeren nesneyi module.exports ile dışa aktar.
// Boşluğa nesneyi yaz: { dil: "Türkçe", sürüm: 2 }; main.js değerleri nokta ile okur.
module.exports = <<< ❓ >>>;
---------------------
- tests/0/output
Dil: Türkçe
Sürüm: 2

- tests/0/require = "\"Türkçe\""
---------------------
- parts/8:
- text
# 🔗 Modüller Zinciri

Bir modül başka bir modülü ``require`` edebilir; böylece küçük parçalardan büyük
işler kurulur. ``hesap.js`` içindeki ``util.js``'i kullanıyor, ``main.js`` de
``hesap.js``'i kullanıyor. Her dosya yalnızca kendi işini bilir, bu da kodu
okunur ve test edilebilir yapar.

<code-view name="main.js" language="javascript">
// main.js
const { dörtKat } = require("./hesap.js");

console.log("Sonuç:", dörtKat(5));
</code-view>

<code-view name="util.js" language="javascript">
// util.js
function ikiKat(n) {
  return n * 2;
}

module.exports = { ikiKat };
</code-view>

<code-view name="hesap.js" language="javascript">
// hesap.js
const { ikiKat } = require("./util.js");

function dörtKat(n) {
  return ikiKat(n) * 2;
}

module.exports = { dörtKat };
</code-view>

<code-view name="Terminal" language="bash">
Sonuç: 20
</code-view>

# 🎯 9. Görev

Alt modülü kullanarak sayının dört katını hesaplayan programı tamamlar mısın?

- files/main.js/.block
// Görev: hesap.js modülünü require() ile çağırıp dörtKat fonksiyonunu kullan.
// Boşluğa METİN olarak "./hesap.js" yaz; hesap.js de kendi içinde util.js modülünü kullanır.
// Beklenen çıktı:
// Sonuç: 20
const { dörtKat } = require(<<< ❓ >>>);

console.log("Sonuç:", dörtKat(5));
---------------------
- files/hesap.js/.block
// Görev: util.js modülündeki ikiKat fonksiyonunu kullanarak sayının dört katını hesapla.
// Boşluğa ikiKat(n) yaz; sonucu bir kez daha 2 ile çarpınca dört katı bulunur.
const { ikiKat } = require("./util.js");

function dörtKat(n) {
  return <<< ❓ >>> * 2;
}

module.exports = { dörtKat };
---------------------
- files/util.js
function ikiKat(n) {
  return n * 2;
}

module.exports = { ikiKat };
---------------------
- tests/0/files/util.js
function ikiKat(n) {
  return n * 2;
}

module.exports = { ikiKat };
- tests/0/output
Sonuç: 20

- tests/0/require = "ikiKat(n)"
---------------------
- tests/1/files/main.js/.block
// Görev: İkinci testte de hesap.js modülünü çağır; bu kez dörtKat(3) çalıştırılır.
// Boşluğa yine METİN olarak "./hesap.js" yaz; çıktı "Sonuç: 12" olur.
const { dörtKat } = require(<<< ❓ >>>);

console.log("Sonuç:", dörtKat(3));
- tests/1/files/util.js
function ikiKat(n) {
  return n * 2;
}

module.exports = { ikiKat };
- tests/1/output
Sonuç: 12

- tests/1/require = "\"./hesap.js\""
---------------------
- parts/9:
- text
# 🏆 Mini Tekrar

Küçük bir matematik modülü yazalım. ``kare`` ve ``küp`` fonksiyonları tek bir nesnede
dışa aktarılıyor; ``main.js`` ikisini de kullanıyor. Kendi modüllerini yazmak,
kodunu dosyalara bölmek ve tekrar kullanmak için artık gereken her şeyi biliyorsun.

<code-view name="matematik.js" language="javascript">
// matematik.js
function kare(n) {
  return n * n;
}

function küp(n) {
  return n * n * n;
}

module.exports = { kare, küp };
</code-view>

<code-view name="main.js" language="javascript">
// main.js
const { kare, küp } = require("./matematik.js");

console.log("Kare:", kare(4));
console.log("Küp:", küp(2));
</code-view>

<code-view name="Terminal" language="bash">
Kare: 16
Küp: 8
</code-view>

# 🎯 10. Görev

İki fonksiyonu dışa aktaran matematik modülünü tamamlar mısın?

- files/main.js/.block
// Görev: matematik.js modülünden kare ve küp fonksiyonlarını alıp sonuçları yazdır.
// Boşluğa küp fonksiyonunun adını yaz: küp; küp(2) sonucu 8 olur.
// Beklenen çıktı:
// Kare: 16
// Küp: 8
const { kare, küp } = require("./matematik.js");

console.log("Kare:", kare(4));
console.log("Küp:", <<< ❓ >>>(2));
---------------------
- files/matematik.js/.block
// Görev: kare ve küp fonksiyonlarını tek nesnede module.exports ile dışa aktar.
// Boşluğa fonksiyonun adını yaz: küp; kısa yazım küp: küp anlamına gelir.
function kare(n) {
  return n * n;
}

function küp(n) {
  return n * n * n;
}

module.exports = { kare, <<< ❓ >>> };
---------------------
- tests/0/output
Kare: 16
Küp: 8

- tests/0/require = "küp"
---------------------
