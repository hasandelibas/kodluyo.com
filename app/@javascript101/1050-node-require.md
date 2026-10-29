- show_content = true
- show_editor = true
- show_terminal = true
- language = "javascript"
- title = "📦 Node.js : require"
- run = "node main.js"

- parts/0:
- text
# 🎯 Node.js : require

``require`` başka bir dosyayı ya da çekirdek modülü programımıza dahil eder. Çekirdek
modüller Node.js ile birlikte gelir; ``path``, ``fs``, ``os`` gibi isimlerle çağrılırlar.
Dönen değeri bir değişkene alıp içindeki fonksiyonları kullanırız.

<code-view name="main.js" language="javascript">
const path = require("path");
console.log(path.join("dersler", "notlar.txt"));
</code-view>

<code-view name="Terminal" language="bash">
dersler/notlar.txt
</code-view>

# 🎯 1. Görev

``path`` modülünü yükleyip parçaları birleştiren ``path.join`` fonksiyonunu kullanan
programı yazar mısın? Terminale ``dersler/notlar.txt`` yazmalı.

- files/main.js/.block
// Görev: path çekirdek modülünü require ile yükle.
// Çekirdek modül adı çift tırnak içinde yazılır: require("path")
// Beklenen çıktı:
// dersler/notlar.txt
const path = require(<<< ❓ >>>);
console.log(path.join("dersler", "notlar.txt"));
---------------------
- tests/0/output
dersler/notlar.txt

---------------------
- parts/1:
- text
# ✅ path ile Dosya Adı ve Uzantı

``path.basename`` bir yolun son parçasını (dosya adını), ``path.extname`` ise uzantısını
verir. Bu fonksiyonlar işletim sistemi farkını bizim için kapatır. Uzun bir yoldan sadece
dosya adını almak istediğimizde çok işe yararlar.

<code-view name="main.js" language="javascript">
const path = require("path");
console.log(path.basename("/app/ders/notlar.txt"));
console.log(path.extname("resim.png"));
</code-view>

<code-view name="Terminal" language="bash">
notlar.txt
.png
</code-view>

# 🎯 2. Görev

Yoldan dosya adını alan ve uzantıyı yazdıran programı yazar mısın? Çıktı ``notlar.txt``
ve ``.png`` olmalı.

- files/main.js/.block
// Görev: yolun dosya adını veren path metodunu tamamla.
// Yolun son parçasını (dosya adını) path.basename verir; uzantıyı ise path.extname verir.
// Beklenen çıktı:
// notlar.txt
// .png
const path = require("path");
console.log(path.<<< ❓ >>>("/app/ders/notlar.txt"));
console.log(path.extname("resim.png"));
---------------------
- tests/0/output
notlar.txt
.png

---------------------
- tests/1/files/main.js/.block
// Görev: yolun dosya adını veren path metodunu tamamla.
// İkinci test farklı yolla aynı kuralı denetler: dosya adını path.basename verir.
// Beklenen çıktı:
// rapor.pdf
// .mp3
const path = require("path");
console.log(path.<<< ❓ >>>("/app/belge/rapor.pdf"));
console.log(path.extname("ses.mp3"));
- tests/1/output
rapor.pdf
.mp3

---------------------
- parts/2:
- text
# ✅ Göreli Dosyayı require Etmek

Kendi yazdığımız bir dosyayı ``require("./hesap.js")`` biçiminde, yani ``./`` ile
çağırırız. ``./`` "bu dosyanın yanındaki" demektir. Çağrılan dosya ``module.exports`` ile
dışarıya değer verir; biz de onu ``const { topla } = ...`` diye alırız.

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

# 🎯 3. Görev

``main.js`` yanındaki ``hesap.js`` dosyasını yükleyip ``topla(2, 3)`` çağrısının sonucunu
``5`` olarak yazdırır mısın?

- files/main.js/.block
// Görev: yanındaki hesap.js dosyasını require ile yükle.
// Göreli dosya "./" ile çağrılır: require("./hesap.js")
// Beklenen çıktı:
// 5
const { topla } = require(<<< ❓ >>>);
console.log(topla(2, 3));

- files/hesap.js/.block
// Görev: iki sayıyı toplayan ifadeyi tamamla.
// topla fonksiyonu a + b döndürsün; sonuç module.exports ile dışa aktarılır.
function topla(a, b) {
  return <<< ❓ >>>;
}
module.exports = { topla };

- tests/0/output
5

---------------------
- parts/3:
- text
# ✅ Tek Fonksiyon Dışa Aktarmak

``module.exports`` bir değere eşitlenebilir; o zaman dosya doğrudan o değeri verir. Yani
``hesap.js`` tek bir fonksiyonu dışa aktarıyorsa ``const carp = require("./hesap.js")``
yazmak yeterlidir. Köşeli parantezli seçmeli alma (destructuring) burada gerekmez.

<code-view name="main.js" language="javascript">
const carp = require("./hesap.js");
console.log(carp(4, 5));
</code-view>

<code-view name="hesap.js" language="javascript">
module.exports = (a, b) => a * b;
</code-view>

<code-view name="Terminal" language="bash">
20
</code-view>

# 🎯 4. Görev

``hesap.js`` çarpma yapan tek bir ok fonksiyon dışa aktarsın. ``main.js`` onu yükleyip
``carp(4, 5)`` sonucunu ``20`` olarak yazdırsın; iki dosyayı da tamamlar mısın?

- files/main.js/.block
// Görev: yanındaki hesap.js dosyasını require ile yükle.
// Dosya tek bir fonksiyon dışa aktarıyorsa const carp = require("./hesap.js") yeterlidir.
// Beklenen çıktı:
// 20
const carp = require(<<< ❓ >>>);
console.log(carp(4, 5));

- files/hesap.js/.block
// Görev: çarpma yapan ok fonksiyonu tamamla.
// module.exports = (a, b) => a * b yaz; dosya doğrudan fonksiyonu dışa aktarır.
module.exports = (a, b) => <<< ❓ >>>;

- tests/0/output
20

---------------------
- parts/4:
- text
# ✅ { } ile Seçmeli Alma

Bir dosya birden fazla şey dışa aktarabilir: ``module.exports = { topla, cikar }``. Karşı
tarafta süslü parantezle sadece ihtiyacımız olanı alırız. Böylece kullanmadığımız
fonksiyonları yüklemiş olmayız ve adlar okunaklı kalır.

<code-view name="main.js" language="javascript">
const { cikar } = require("./hesap.js");
console.log(cikar(10, 4));
</code-view>

<code-view name="hesap.js" language="javascript">
function topla(a, b) {
  return a + b;
}
function cikar(a, b) {
  return a - b;
}
module.exports = { topla, cikar };
</code-view>

<code-view name="Terminal" language="bash">
6
</code-view>

# 🎯 5. Görev

İki dosya iki fonksiyon dışa aktarsın; ``main.js`` yalnızca ``cikar`` fonksiyonunu seçip
``cikar(10, 4)`` sonucunu ``6`` olarak yazdırsın.

- files/main.js/.block
// Görev: yanındaki hesap.js dosyasından yalnızca çıkarma fonksiyonunu seç.
// Süslü parantezle seçmeli alma: const { cikar } = require("./hesap.js")
// Beklenen çıktı:
// 6
const { <<< ❓ >>> } = require("./hesap.js");
console.log(cikar(10, 4));

- files/hesap.js/.block
// Görev: iki fonksiyonu birden dışa aktar.
// module.exports = { topla, cikar } yazımı iki fonksiyonu da dışa aktarır.
function topla(a, b) {
  return a + b;
}
function cikar(a, b) {
  return a - b;
}
module.exports = { topla, <<< ❓ >>> };

- tests/0/output
6

---------------------
- parts/5:
- text
# ✅ Modülün Tamamını Almak

``const hesap = require("./hesap.js")`` dersek dışa aktarılan nesnenin tamamını alırız ve
fonksiyonları ``hesap.topla(...)`` diye çağırırız. Dosya tarafında ``exports.topla = ...``
yazımı da ``module.exports.topla = ...`` ile aynı işi yapar. Adların çakışmadığı büyük
projelerde bu yazım tercih edilir.

<code-view name="main.js" language="javascript">
const hesap = require("./hesap.js");
console.log(hesap.topla(3, 4));
console.log(hesap.carp(3, 4));
</code-view>

<code-view name="hesap.js" language="javascript">
exports.topla = function (a, b) {
  return a + b;
};
exports.carp = function (a, b) {
  return a * b;
};
</code-view>

<code-view name="Terminal" language="bash">
7
12
</code-view>

# 🎯 6. Görev

``hesap.topla(3, 4)`` çıktısı ``7``, ``hesap.carp(3, 4)`` çıktısı ``12`` olsun. Modülün
tamamını alan ve eksik operatörü tamamlayan programı yazar mısın?

- files/main.js/.block
// Görev: modülün tamamını alıp çarpma fonksiyonunu çağır.
// const hesap = require("./hesap.js") ile nesnenin tamamı alınır: hesap.carp(3, 4)
// Beklenen çıktı:
// 7
// 12
const hesap = require("./hesap.js");
console.log(hesap.topla(3, 4));
console.log(hesap.<<< ❓ >>>(3, 4));

- files/hesap.js/.block
// Görev: çarpma fonksiyonundaki operatörü tamamla.
// exports.carp içinde a * b döndür; exports.topla = ... yazımı module.exports.topla ile aynıdır.
exports.topla = function (a, b) {
  return a + b;
};
exports.carp = function (a, b) {
  return a <<< ❓ >>> b;
};

- tests/0/output
7
12

---------------------
- tests/1/files/main.js/.block
// Görev: modülün tamamını alıp çarpma fonksiyonunu çağır.
// İkinci test farklı sayılarla aynı kuralı denetler: hesap.carp(2, 5)
// Beklenen çıktı:
// 30
// 10
const hesap = require("./hesap.js");
console.log(hesap.topla(10, 20));
console.log(hesap.<<< ❓ >>>(2, 5));
- tests/1/output
30
10

---------------------
- parts/6:
- text
# ✅ JSON Dosyasını require Etmek

Node.js ``.json`` uzantılı dosyaları da ``require`` ile yükleyebilir. Dosya otomatik
olarak ``JSON.parse`` edilir ve elimize hazır bir nesne geçer. Ayar dosyaları ve küçük veri
dosyaları için çok pratiktir.

<code-view name="main.js" language="javascript">
const veri = require("./veri.json");
console.log(veri.ad);
console.log(veri.baskent);
</code-view>

<code-view name="veri.json" language="json">
{ "ad": "Türkiye", "baskent": "Ankara" }
</code-view>

<code-view name="Terminal" language="bash">
Türkiye
Ankara
</code-view>

# 🎯 7. Görev

``veri.json`` dosyasındaki ``ad`` ve ``baskent`` değerlerini yazdıran programı yazar
mısın? Çıktı ``Türkiye`` ve ``Ankara`` olmalı.

- files/main.js/.block
// Görev: veri.json dosyasını require ile yükle.
// JSON dosyası require("./veri.json") ile otomatik olarak JSON.parse edilir.
// Beklenen çıktı:
// Türkiye
// Ankara
const veri = require(<<< ❓ >>>);
console.log(veri.ad);
console.log(veri.baskent);

- files/veri.json/.block
{ "ad": <<< ❓ >>>, "baskent": "Ankara" }

- tests/0/output
Türkiye
Ankara

---------------------
- parts/7:
- text
# ✅ require Bir Kez Çalışır

Aynı dosya iki kez ``require`` edilse bile Node.js onu yalnızca bir kez çalıştırır ve
sonucu önbelleğe alır (cache). İkinci çağrıda dosyanın kodu yeniden çalışmaz, aynı
``module.exports`` değeri döner. Bu yüzden bir modülün yan etkileri de yalnızca bir kere
gerçekleşir.

<code-view name="main.js" language="javascript">
require("./sayac.js");
require("./sayac.js");
console.log("main.js bitti");
</code-view>

<code-view name="sayac.js" language="javascript">
console.log("sayac.js yüklendi");
module.exports = "hazır";
</code-view>

<code-view name="Terminal" language="bash">
sayac.js yüklendi
main.js bitti
</code-view>

# 🎯 8. Görev

``sayac.js`` iki kez require edilse de ekrana yalnızca bir kez ``sayac.js yüklendi``
yazsın, ardından ``main.js bitti`` gelsin. İki dosyayı tamamlar mısın?

- files/main.js/.block
// Görev: sayac.js dosyasını ikinci kez require et.
// Aynı dosya iki kez require edilse de Node.js kodu yalnızca bir kez çalıştırır (önbellek).
// Beklenen çıktı:
// sayac.js yüklendi
// main.js bitti
require("./sayac.js");
require(<<< ❓ >>>);
console.log("main.js bitti");

- files/sayac.js/.block
// Görev: yüklendiğini bildiren mesajı tamamla.
// console.log("sayac.js yüklendi") yaz; modül önbelleğe alındığı için mesaj bir kez çıkar.
console.log(<<< ❓ >>>);
module.exports = "hazır";

- tests/0/output
sayac.js yüklendi
main.js bitti

---------------------
- parts/8:
- text
# ✅ Üç Dosyalı Uygulama

Gerçek bir Node.js programı bu şekilde büyür: ``main.js`` giriş dosyasıdır, hesap işini
``hesap.js`` yapar, veri ``sepet.json`` içinde durur. ``main.js`` ikisini de ``require``
ile çağırır. Her dosya tek bir işi yaptığı için kod okunaklı kalır.

<code-view name="main.js" language="javascript">
const { topla } = require("./hesap.js");
const sepet = require("./sepet.json");
console.log("Toplam:", topla(sepet.elma, sepet.armut), "TL");
</code-view>

<code-view name="hesap.js" language="javascript">
function topla(a, b) {
  return a + b;
}
module.exports = { topla };
</code-view>

<code-view name="sepet.json" language="json">
{ "elma": 12, "armut": 8 }
</code-view>

<code-view name="Terminal" language="bash">
Toplam: 20 TL
</code-view>

# 🎯 9. Görev

Sepetteki elma ve armut değerlerini ``topla`` fonksiyonuna verip ``Toplam: 20 TL``
yazdıran programı üç dosyada da tamamlar mısın?

- files/main.js/.block
// Görev: sepetteki değerleri topla fonksiyonuna ver.
// JSON'dan gelen değerler sepet.elma ve sepet.armut alanlarında durur.
// Beklenen çıktı:
// Toplam: 20 TL
const { topla } = require("./hesap.js");
const sepet = require("./sepet.json");
console.log("Toplam:", topla(<<< ❓ >>>, <<< ❓ >>>), "TL");

- files/hesap.js/.block
// Görev: toplama ifadesini tamamla.
// topla fonksiyonu a + b döndürsün; sonuç module.exports ile dışa aktarılır.
function topla(a, b) {
  return <<< ❓ >>>;
}
module.exports = { topla };

- files/sepet.json/.block
{ "elma": <<< ❓ >>>, "armut": 8 }

- tests/0/output
Toplam: 20 TL

- tests/0/require/0 = "sepet.elma"
- tests/0/require/1 = "sepet.armut"

---------------------
- parts/9:
- text
# ✅ Giriş Dosyası main.js

``node main.js`` komutuyla çalıştığımız dosya programın **giriş** dosyasıdır ve ``module.id``
değeri ``main.js`` olur. Diğer dosyalar gibi giriş dosyası da ``module.exports``
kullanabilir, ama genelde kullanmaz. Bu yüzden işi ``main.js`` düzenler, ayrıntıları
yardımcı dosyalara dağıtırız.

<code-view name="main.js" language="javascript">
const { selamla } = require("./mesaj.js");
console.log("Çalışan dosya:", module.id);
console.log(selamla("Kodluyo"));
</code-view>

<code-view name="mesaj.js" language="javascript">
function selamla(ad) {
  return "Merhaba " + ad + "!";
}
module.exports = { selamla };
</code-view>

<code-view name="Terminal" language="bash">
Çalışan dosya: main.js
Merhaba Kodluyo!
</code-view>

# 🎯 10. Görev

Giriş dosyasının adını ve selam mesajını yazdıran programı tamamlar mısın? Çıktı
``Çalışan dosya: main.js`` ve ``Merhaba Kodluyo!`` olmalı.

- files/main.js/.block
// Görev: yanındaki mesaj.js dosyasını require ile yükle.
// Göreli dosya require("./mesaj.js") ile çağrılır; selamla seçmeli olarak alınır.
// Beklenen çıktı:
// Çalışan dosya: main.js
// Merhaba Kodluyo!
const { selamla } = require(<<< ❓ >>>);
console.log("Çalışan dosya:", module.id);
console.log(selamla("Kodluyo"));

- files/mesaj.js/.block
// Görev: selam mesajındaki değişkeni tamamla.
// "Merhaba " + ad + "!" ifadesinde ad parametresi kullanılır; sonuç modül olarak dışa aktarılır.
function selamla(ad) {
  return "Merhaba " + <<< ❓ >>> + "!";
}
module.exports = { selamla };

- tests/0/output
Çalışan dosya: main.js
Merhaba Kodluyo!

---------------------
- parts/10:
- text
# 🏆 Mini Tekrar

Öğrendiklerimizi birleştirelim: ``main.js`` bir hesap modülünü ve bir JSON dosyasını
``require`` etsin. KDV'li tutarı hesaplayan fonksiyon ``hesap.js`` içinde, ham tutar ise
``fatura.json`` içinde dursun.

<code-view name="main.js" language="javascript">
const { kdvli } = require("./hesap.js");
const fatura = require("./fatura.json");
console.log("Ödenecek:", kdvli(fatura.tutar), "TL");
</code-view>

<code-view name="hesap.js" language="javascript">
function kdvli(tutar) {
  return tutar * 1.2;
}
module.exports = { kdvli };
</code-view>

<code-view name="fatura.json" language="json">
{ "tutar": 100 }
</code-view>

<code-view name="Terminal" language="bash">
Ödenecek: 120 TL
</code-view>

# 🎯 11. Görev

100 liralık tutara %20 KDV ekleyip ``Ödenecek: 120 TL`` yazdıran programı üç dosyada da
tamamlar mısın?

- files/main.js/.block
// Görev: fatura tutarını hesaplama fonksiyonuna ver.
// JSON dosyasındaki ham tutar fatura.tutar alanında durur.
// Beklenen çıktı:
// Ödenecek: 120 TL
const { kdvli } = require("./hesap.js");
const fatura = require("./fatura.json");
console.log("Ödenecek:", kdvli(<<< ❓ >>>), "TL");

- files/hesap.js/.block
// Görev: KDV ekleyen operatörü tamamla.
// kdvli fonksiyonu tutar * 1.2 döndürsün; böylece %20 KDV eklenmiş olur.
function kdvli(tutar) {
  return tutar <<< ❓ >>> 1.2;
}
module.exports = { kdvli };

- files/fatura.json/.block
{ "tutar": <<< ❓ >>> }

- tests/0/output
Ödenecek: 120 TL

- tests/0/require = "fatura.tutar"

---------------------
