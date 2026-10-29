- show_content = true
- show_editor = true
- show_terminal = true
- language = "javascript"
- title = "📦 Koleksiyonlar Object : Nesneler"
- run = "node main.js"

- parts/0:
- text
# 📦 Nesne (object) Nedir?

Bir nesne (object), birbiriyle ilgili bilgileri tek bir yerde toplar. Süslü parantez
``{ }`` ile tanımlanır; içine ``anahtar: değer`` çiftleri yazarız. Bir kitabın adını ve
yılını böylece tek bir ``kitap`` değişkeninde saklayabiliriz.

<code-view name="main.js" language="javascript">
const kitap = { ad: "Suç ve Ceza", yil: 1866 };
console.log(kitap);
</code-view>

<code-view name="Terminal" language="bash">
{ ad: 'Suç ve Ceza', yil: 1866 }
</code-view>

# 🎯 1. Görev

``ad`` ve ``yil`` bilgilerini taşıyan bir ``kitap`` nesnesi tanımlayıp terminale
``{ ad: 'Suç ve Ceza', yil: 1866 }`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: ad ve yil bilgilerini taşıyan kitap nesnesini tanımlayıp yazdır.
// Nesne süslü parantez { } içinde anahtar: değer çiftleriyle yazılır.
// Metin değerleri çift tırnak içine alınır: ad için "Suç ve Ceza", yil için 1866.
// Beklenen çıktı:
// { ad: 'Suç ve Ceza', yil: 1866 }
const kitap = <<< ❓ >>>;
console.log(kitap);
---------------------
- tests/0/output
{ ad: 'Suç ve Ceza', yil: 1866 }

---------------------
- parts/1:
- text
# 🔎 Nokta (dot) ile Erişim

Bir nesnenin içindeki değere ulaşmak için ``nesne.anahtar`` yazımını kullanırız.
Noktadan sonra anahtarın adı gelir; sonuç, o anahtarın değeridir. Metinlerle
birleştirerek okunaklı çıktı üretebiliriz.

<code-view name="main.js" language="javascript">
const araba = { marka: "Tofaş", yil: 1998 };
console.log("Marka:", araba.marka);
console.log("Yıl:", araba.yil);
</code-view>

<code-view name="Terminal" language="bash">
Marka: Tofaş
Yıl: 1998
</code-view>

# 🎯 2. Görev

``araba`` nesnesinin ``marka`` ve ``yil`` değerlerini nokta ile okuyup iki satır
yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: araba nesnesinin marka ve yil değerlerini nokta ile okuyup yazdır.
// Nokta (dot) yazımı nesne.anahtar biçimindedir: araba.marka ve araba.yil.
// İki boşluğa da anahtar adını yaz: önce marka, sonra yil.
// Beklenen çıktı:
// Marka: Tofaş
// Yıl: 1998
const araba = { marka: "Tofaş", yil: 1998 };
console.log("Marka:", araba.<<< ❓ >>>);
console.log("Yıl:", araba.<<< ❓ >>>);
---------------------
- tests/0/output
Marka: Tofaş
Yıl: 1998

---------------------
- parts/2:
- text
# 🗝️ Köşeli Parantez ile Erişim

Anahtar bir metin değişkeninde saklıysa ``nesne["anahtar"]`` yazımını kullanırız.
Köşeli parantezin içine bir değişken de yazabiliriz; böylece anahtarı program
çalışırken seçebiliriz. Bu yazım, anahtarında boşluk olan nesneler için de tek yoldur.

<code-view name="main.js" language="javascript">
const ürün = { ad: "Kalem", fiyat: 15 };
const alan = "fiyat";
console.log("Fiyat:", ürün[alan]);
console.log("Ad:", ürün["ad"]);
</code-view>

<code-view name="Terminal" language="bash">
Fiyat: 15
Ad: Kalem
</code-view>

# 🎯 3. Görev

``alan`` değişkenine ``"fiyat"`` metnini verip fiyatı, ardından ``"ad"`` anahtarıyla da
ürün adını yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: alan değişkenine "fiyat" verip fiyatı ve ürün adını yazdır.
// Köşeli parantez yazımı ürün[alan] değişkenle, ürün["ad"] metin anahtarla okur.
// alan değişkenine çift tırnaklı "fiyat" metnini yaz; ikinci boşluğa "ad" anahtarını yaz.
// Beklenen çıktı:
// Fiyat: 15
// Ad: Kalem
const ürün = { ad: "Kalem", fiyat: 15 };
const alan = <<< ❓ >>>;
console.log("Fiyat:", ürün[alan]);
console.log("Ad:", ürün[<<< ❓ >>>]);
---------------------
- tests/0/output
Fiyat: 15
Ad: Kalem

---------------------
- parts/3:
- text
# 🪆 İç İçe Nesneler

Bir nesnenin değeri başka bir nesne olabilir; buna iç içe nesne (nested object) denir.
Okulun müdürünün adını bulmak için önce ``okul.müdür`` yazarız, sonra ``.ad`` ekleriz.
Zincir ne kadar uzarsa o kadar derine ineriz.

<code-view name="main.js" language="javascript">
const okul = { ad: "Atatürk Lisesi", müdür: { ad: "Ayşe", yil: 2010 } };
console.log(okul.müdür.ad);
console.log(okul.müdür.yil);
</code-view>

<code-view name="Terminal" language="bash">
Ayşe
2010
</code-view>

# 🎯 4. Görev

``okul`` nesnesinin içindeki müdürün adını ve göreve başladığı yılı yazdıran programı
yazar mısın?

- files/main.js/.block
// Görev: okul nesnesindeki müdürün adını ve göreve başladığı yılı yazdır.
// İç içe nesnede zincirleme erişim kullanılır: okul.müdür.ad ve okul.müdür.yil.
// İki boşluğa da aynı anahtar adını yaz: müdür.
// Beklenen çıktı:
// Ayşe
// 2010
const okul = { ad: "Atatürk Lisesi", müdür: { ad: "Ayşe", yil: 2010 } };
console.log(okul.<<< ❓ >>>.ad);
console.log(okul.<<< ❓ >>>.yil);
---------------------
- tests/0/output
Ayşe
2010

---------------------
- parts/4:
- text
# 🧰 Object.keys, Object.values, Object.entries

``Object.keys()`` bir nesnenin anahtarlarını dizi olarak verir. ``Object.values()``
değerlerini verir; ``Object.entries()`` ise her anahtar-değer çiftini ayrı bir küçük dizi
olarak döndürür. Nesnenin içinde ne olduğunu görmek istediğimizde bu üçlü çok işe yarar.

<code-view name="main.js" language="javascript">
const ayarlar = { tema: "koyu", dil: "tr", bildirim: true };
console.log(Object.keys(ayarlar));
console.log(Object.values(ayarlar));
console.log(Object.entries(ayarlar));
</code-view>

<code-view name="Terminal" language="bash">
[ 'tema', 'dil', 'bildirim' ]
[ 'koyu', 'tr', true ]
[ [ 'tema', 'koyu' ], [ 'dil', 'tr' ], [ 'bildirim', true ] ]
</code-view>

# 🎯 5. Görev

``ayarlar`` nesnesinin üç satırda sırasıyla anahtarlarını, değerlerini ve
anahtar-değer çiftlerini yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: ayarlar nesnesinin anahtarlarını, değerlerini ve çiftlerini yazdır.
// Object.keys() anahtarları, Object.values() değerleri, Object.entries() çiftleri verir.
// Üç boşluğa sırayla keys, values ve entries metot adlarını yaz.
// Beklenen çıktı:
// [ 'tema', 'dil', 'bildirim' ]
// [ 'koyu', 'tr', true ]
// [ [ 'tema', 'koyu' ], [ 'dil', 'tr' ], [ 'bildirim', true ] ]
const ayarlar = { tema: "koyu", dil: "tr", bildirim: true };
console.log(Object.<<< ❓ >>>(ayarlar));
console.log(Object.<<< ❓ >>>(ayarlar));
console.log(Object.<<< ❓ >>>(ayarlar));
---------------------
- tests/0/output
[ 'tema', 'dil', 'bildirim' ]
[ 'koyu', 'tr', true ]
[ [ 'tema', 'koyu' ], [ 'dil', 'tr' ], [ 'bildirim', true ] ]

---------------------
- parts/5:
- text
# 🗑️ Özellik Silmek : delete

``delete`` anahtar kelimesi bir nesneden özellik siler. Silinen özellik artık nesnede
görünmez ve nesne yazdırıldığında listelenmez. Silinmiş bir anahtarı okumak istersek
``undefined`` elde ederiz.

<code-view name="main.js" language="javascript">
const sepet = { elma: 3, armut: 5, uzum: 2 };
delete sepet.armut;
console.log(sepet);
console.log(sepet.armut);
</code-view>

<code-view name="Terminal" language="bash">
{ elma: 3, uzum: 2 }
undefined
</code-view>

# 🎯 6. Görev

``sepet`` nesnesinden ``armut`` özelliğini silip geriye kalanı ve silinen anahtarın
değerini yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: sepet nesnesinden armut özelliğini silip kalanı ve silinen değeri yazdır.
// delete anahtar kelimesi nesne.özellik yazımındaki özelliği siler.
// Boşluğa silinecek anahtar adını yaz: armut. Silinen değeri okumak undefined verir.
// Beklenen çıktı:
// { elma: 3, uzum: 2 }
// undefined
const sepet = { elma: 3, armut: 5, uzum: 2 };
delete sepet.<<< ❓ >>>;
console.log(sepet);
console.log(sepet.armut);
---------------------
- tests/0/output
{ elma: 3, uzum: 2 }
undefined

---------------------
- parts/6:
- text
# 📋 Spread (...) ile Kopyalama

``...`` (spread) bir nesnenin tüm özelliklerini yeni bir nesneye kopyalar. Yeni nesneye
aynı anahtarı bir kez daha yazarsak son yazılan değer geçerli olur. Böylece eski nesneyi
bozmadan güncellenmiş bir kopya üretebiliriz.

<code-view name="main.js" language="javascript">
const temel = { ad: "Kalem", fiyat: 15 };
const güncel = { ...temel, fiyat: 20, stok: 50 };
console.log(güncel);
</code-view>

<code-view name="Terminal" language="bash">
{ ad: 'Kalem', fiyat: 20, stok: 50 }
</code-view>

# 🎯 7. Görev

``temel`` nesnesini kopyalayıp fiyatını ``20``, stoğunu ``50`` yapan ``güncel`` nesnesini
yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: temel nesnesini spread ile kopyalayıp fiyatı 20, stok 50 yapan güncel nesneyi yazdır.
// Spread yazımı üç nokta ... ile başlar: ...temel tüm özellikleri kopyalar.
// Sonra yazılan fiyat: 20 değeri eski fiyatı ezer.
// Beklenen çıktı:
// { ad: 'Kalem', fiyat: 20, stok: 50 }
const temel = { ad: "Kalem", fiyat: 15 };
const güncel = { <<< ❓ >>>temel, fiyat: 20, stok: 50 };
console.log(güncel);
---------------------
- tests/0/output
{ ad: 'Kalem', fiyat: 20, stok: 50 }

---------------------
- tests/1/files/main.js/.block
// Görev: temel nesnesini spread ile kopyalayıp fiyatı 45, stok 10 yapan güncel nesneyi yazdır.
// İkinci test farklı veriyle aynı kuralı denetler: ...temel kopyalar, fiyat: 45 ezer.
// Beklenen çıktı:
// { ad: 'Defter', fiyat: 45, stok: 10 }
const temel = { ad: "Defter", fiyat: 30 };
const güncel = { <<< ❓ >>>temel, fiyat: 45, stok: 10 };
console.log(güncel);
- tests/1/output
{ ad: 'Defter', fiyat: 45, stok: 10 }

---------------------
- parts/7:
- text
# 🗺️ Map : Anahtar-Değer Haritası

``Map`` de anahtar-değer çiftleri saklar ama daha düzenli bir koleksiyondur.
``new Map()`` ile oluştururuz; ``set()`` ile çift ekler, ``get()`` ile değeri okuruz.
``console.log`` bir Map'i ``Map(2) { 'Ali' => 90 }`` biçiminde gösterir.

<code-view name="main.js" language="javascript">
const puanlar = new Map();
puanlar.set("Ali", 90);
puanlar.set("Ayşe", 85);
console.log(puanlar);
console.log(puanlar.get("Ali"));
</code-view>

<code-view name="Terminal" language="bash">
Map(2) { 'Ali' => 90, 'Ayşe' => 85 }
90
</code-view>

# 🎯 8. Görev

``puanlar`` haritasına Ayşe'nin ``85`` puanını ekleyip Ayşe'nin puanını yazdıran
programı yazar mısın?

- files/main.js/.block
// Görev: puanlar haritasına Ayşe'nin 85 puanını ekleyip Ayşe'nin puanını yazdır.
// new Map() haritayı oluşturur; set(anahtar, değer) çift ekler, get(anahtar) değeri okur.
// Boşluğa çift ekleyen metodun adını yaz: set.
// Beklenen çıktı:
// 85
const puanlar = new Map();
puanlar.set("Ali", 90);
puanlar.<<< ❓ >>>("Ayşe", 85);
console.log(puanlar.get("Ayşe"));
---------------------
- tests/0/output
85

---------------------
- parts/8:
- text
# 📏 Map : has, size ve delete

``has()`` bir anahtarın olup olmadığını ``true`` ya da ``false`` olarak söyler.
``size`` içeride kaç çift olduğunu verir; ``delete()`` ise bir anahtarı siler. Map'i
doğrudan ``[anahtar, değer]`` çiftlerinden de oluşturabiliriz.

<code-view name="main.js" language="javascript">
const puanlar = new Map([["Ali", 90], ["Ayşe", 85]]);
console.log(puanlar.has("Ali"));
console.log(puanlar.size);
puanlar.delete("Ali");
console.log(puanlar.size);
</code-view>

<code-view name="Terminal" language="bash">
true
2
1
</code-view>

# 🎯 9. Görev

``Ali`` anahtarının varlığını, haritanın boyutunu, ardından ``Ali`` silindikten sonraki
boyutu yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Ali anahtarının varlığını, haritanın boyutunu ve Ali silindikten sonraki boyutu yazdır.
// has("Ali") true ya da false verir; size çift sayısını verir; delete("Ali") anahtarı siler.
// Üç boşluğa sırayla has, size ve delete yaz.
// Beklenen çıktı:
// true
// 2
// 1
const puanlar = new Map([["Ali", 90], ["Ayşe", 85]]);
console.log(puanlar.<<< ❓ >>>("Ali"));
console.log(puanlar.<<< ❓ >>>);
puanlar.<<< ❓ >>>("Ali");
console.log(puanlar.size);
---------------------
- tests/0/output
true
2
1

---------------------
- parts/9:
- text
# 🆚 Map ile Object Arasındaki Fark

Object anahtarları her zaman metne çevrilir; Map anahtarı ise her tür olabilir. Bu yüzden
bir Map içine ``1`` (sayı) ve ``"1"`` (metin) ayrı iki anahtar olarak girer. Ayrıca
``Object.keys()`` Map üzerinde çalışmaz, boş dizi döndürür.

<code-view name="main.js" language="javascript">
const harita = new Map();
harita.set(1, "sayı");
harita.set("1", "metin");
console.log(Object.keys(harita));
console.log(harita.size);
console.log(harita.get(1), harita.get("1"));
</code-view>

<code-view name="Terminal" language="bash">
[]
2
sayı metin
</code-view>

# 🎯 10. Görev

Haritada iki ayrı anahtar olduğunu göstermek için ``Object.keys()`` sonucunu, haritanın
boyutunu ve iki değeri yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: haritada iki ayrı anahtar olduğunu gösterip değerleri yazdır.
// Map anahtarı her tür olabilir; 1 sayısı ile "1" metni ayrı iki anahtardır.
// Object.keys() bir Map için boş dizi döndürür; çift sayısı size ile okunur.
// Beklenen çıktı:
// []
// 2
// sayı metin
const harita = new Map();
harita.set(1, "sayı");
harita.set("1", "metin");
console.log(Object.keys(harita));
console.log(harita.<<< ❓ >>>);
console.log(harita.get(1), harita.get("1"));
---------------------
- tests/0/output
[]
2
sayı metin

---------------------
- parts/10:
- text
# 🏆 Mini Tekrar

Şimdiye kadar öğrendiklerimizi birleştirelim. Bir ürünün fiyatını nesneden, depo sayısını
ise Map'ten okuyalım. Böylece iki koleksiyonu aynı programda kullanmış oluruz.

<code-view name="main.js" language="javascript">
const ürün = { ad: "Kahve", fiyat: 120 };
const stok = new Map([["İstanbul", 5], ["İzmir", 3]]);
console.log(ürün.ad, "-", ürün.fiyat, "TL");
console.log(stok.size, "depoda");
</code-view>

<code-view name="Terminal" language="bash">
Kahve - 120 TL
2 depoda
</code-view>

# 🎯 11. Görev

Ürünün fiyatını nesneden okuyup ``Kahve - 120 TL``, depo sayısını Map'ten okuyup
``2 depoda`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: ürünün fiyatını nesneden, depo sayısını Map'ten okuyup yazdır.
// Nesnede değer ürün.fiyat nokta yazımıyla, Map'te çift sayısı stok.size ile okunur.
// Beklenen çıktı:
// Kahve - 120 TL
// 2 depoda
const ürün = { ad: "Kahve", fiyat: 120 };
const stok = new Map([["İstanbul", 5], ["İzmir", 3]]);
console.log(ürün.ad, "-", ürün.<<< ❓ >>>, "TL");
console.log(stok.<<< ❓ >>>, "depoda");
---------------------
- tests/0/output
Kahve - 120 TL
2 depoda

---------------------
