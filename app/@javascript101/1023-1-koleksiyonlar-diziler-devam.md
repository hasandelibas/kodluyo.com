- show_content = true
- show_editor = true
- show_terminal = true
- language = "javascript"
- title = "🧰 Koleksiyonlar : Dizi Metotları"
- run = "node main.js"

- parts/0:
- text
# 🧰 Dizi Metotları

Dizilerin en güçlü yanı, her elemanı tek tek dolaşmadan işlem yapmamızı sağlayan
metotlarıdır. ``map()`` her elemanı alır ve fonksiyona verir; fonksiyonun döndürdüğü
değerlerle **yeni bir dizi** oluşturur. Asıl dizi hiç değişmez.

<code-view name="main.js" language="javascript">
const sayılar = [1, 2, 3, 4];
const ikiKatı = sayılar.map((sayı) => sayı * 2);
console.log(ikiKatı);
console.log(sayılar);
</code-view>

<code-view name="Terminal" language="bash">
[ 2, 4, 6, 8 ]
[ 1, 2, 3, 4 ]
</code-view>

# 🎯 1. Görev

``sayılar`` dizisindeki her sayıyı ikiye katlayan programı yazar mısın? Sonuç
``[2, 4, 6, 8]`` olmalı, asıl dizi değişmemeli.

- files/main.js/.block
// Görev: sayılar dizisindeki her sayıyı ikiye katla, asıl dizi değişmesin.
// sayılar.map((sayı) => sayı * 2) yaz; boşluğa çarpma (*) operatörünü koy.
// Beklenen çıktı:
// [ 2, 4, 6, 8 ]
// [ 1, 2, 3, 4 ]
const sayılar = [1, 2, 3, 4];
const ikiKatı = sayılar.map((sayı) => sayı <<< ❓ >>> 2);
console.log(ikiKatı);
console.log(sayılar);
---------------------
- tests/0/output
[ 2, 4, 6, 8 ]
[ 1, 2, 3, 4 ]

---------------------
- tests/1/files/main.js/.block
// Görev: sayılar dizisindeki her sayıyı ikiye katla, asıl dizi değişmesin.
// İkinci test aynı kuralı farklı sayılarla denetler: boşluğa yine * operatörünü koy.
// Beklenen çıktı:
// [ 10, 20, 4 ]
// [ 5, 10, 2 ]
const sayılar = [5, 10, 2];
const ikiKatı = sayılar.map((sayı) => sayı <<< ❓ >>> 2);
console.log(ikiKatı);
console.log(sayılar);
- tests/1/output
[ 10, 20, 4 ]
[ 5, 10, 2 ]

---------------------
- parts/1:
- text
# ✅ Tebrikler

``map()`` fonksiyonuna ikinci bir parametre de geçer: elemanın **indexi**. Böylece
sıra numarasına göre etiket üretebiliriz. Şablon metin (template literal) ile
``${sıra + 1}. ${isim}`` yazarak ``1. ali`` gibi metinler elde ederiz.

<code-view name="main.js" language="javascript">
const isimler = ["ali", "ayşe", "mehmet"];
const etiketler = isimler.map((isim, sıra) => `${sıra + 1}. ${isim}`);
console.log(etiketler);
</code-view>

<code-view name="Terminal" language="bash">
[ '1. ali', '2. ayşe', '3. mehmet' ]
</code-view>

# 🎯 2. Görev

İsimleri ``1. ali``, ``2. ayşe``, ``3. mehmet`` biçiminde numaralandıran programı yazar
mısın?

- files/main.js/.block
// Görev: isimleri 1. ali, 2. ayşe, 3. mehmet biçiminde numaralandır.
// map() ikinci parametre olarak indexi verir; şablonda ${sıra + 1} yaz, index 0'dan başlar.
// Beklenen çıktı:
// [ '1. ali', '2. ayşe', '3. mehmet' ]
const isimler = ["ali", "ayşe", "mehmet"];
const etiketler = isimler.map((isim, sıra) => `${<<< ❓ >>>}. ${isim}`);
console.log(etiketler);
---------------------
- tests/0/output
[ '1. ali', '2. ayşe', '3. mehmet' ]

---------------------
- tests/1/files/main.js/.block
// Görev: isimleri 1. zeynep, 2. can biçiminde numaralandır.
// İkinci test aynı kuralı farklı isimlerle denetler: boşluğa yine sıra + 1 yaz.
// Beklenen çıktı:
// [ '1. zeynep', '2. can' ]
const isimler = ["zeynep", "can"];
const etiketler = isimler.map((isim, sıra) => `${<<< ❓ >>>}. ${isim}`);
console.log(etiketler);
- tests/1/output
[ '1. zeynep', '2. can' ]

---------------------
- parts/2:
- text
# 🎛 filter

``filter()`` diziyi süzer ve fonksiyonun ``true`` döndürdüğü elemanlardan **yeni bir
dizi** yapar. Yani "bana sadece koşulu sağlayanları ver" demenin yolu. Asıl dizi yine
yerinde kalır.

<code-view name="main.js" language="javascript">
const sayılar = [3, 8, 12, 5, 20];
const çiftler = sayılar.filter((sayı) => sayı % 2 === 0);
console.log(çiftler);
</code-view>

<code-view name="Terminal" language="bash">
[ 8, 12, 20 ]
</code-view>

# 🎯 3. Görev

``sayılar`` dizisinden yalnızca çift sayıları seçen programı yazar mısın?

- files/main.js/.block
// Görev: sayılar dizisinden yalnızca çift sayıları seç.
// Koşul sayı % 2 === 0 biçimindedir; boşluğa kalan (%) operatörünü yaz.
// Beklenen çıktı:
// [ 8, 12, 20 ]
const sayılar = [3, 8, 12, 5, 20];
const çiftler = sayılar.filter((sayı) => sayı <<< ❓ >>> 2 === 0);
console.log(çiftler);
---------------------
- tests/0/output
[ 8, 12, 20 ]

---------------------
- tests/1/files/main.js/.block
// Görev: sayılar dizisinden yalnızca çift sayıları seç.
// İkinci test aynı kuralı farklı sayılarla denetler: boşluğa yine % operatörünü yaz.
// Beklenen çıktı:
// [ 4, 16 ]
const sayılar = [7, 4, 9, 16];
const çiftler = sayılar.filter((sayı) => sayı <<< ❓ >>> 2 === 0);
console.log(çiftler);
- tests/1/output
[ 4, 16 ]

---------------------
- parts/3:
- text
# ➕ reduce

``reduce()`` diziyi tek bir değere indirger. Fonksiyon iki parametre alır: biriken
(akümülatör) değer ve o anki eleman. Başlangıç değeri ikinci parametre olarak verilir
(burada ``0``). Toplam, ortalama, en büyük değer gibi işlerin hepsi ``reduce`` ile yapılır.

<code-view name="main.js" language="javascript">
const fiyatlar = [10, 20, 30];
const toplam = fiyatlar.reduce((biriken, fiyat) => biriken + fiyat, 0);
console.log(toplam);
</code-view>

<code-view name="Terminal" language="bash">
60
</code-view>

# 🎯 4. Görev

``fiyatlar`` dizisindeki tüm fiyatları toplayan programı yazar mısın?

- files/main.js/.block
// Görev: fiyatlar dizisindeki tüm fiyatları topla.
// reduce((biriken, fiyat) => biriken + fiyat, 0) yaz; boşluğa toplama (+) operatörünü koy.
// Beklenen çıktı:
// 60
const fiyatlar = [10, 20, 30];
const toplam = fiyatlar.reduce((biriken, fiyat) => biriken <<< ❓ >>> fiyat, 0);
console.log(toplam);
---------------------
- tests/0/output
60

---------------------
- tests/1/files/main.js/.block
// Görev: fiyatlar dizisindeki tüm fiyatları topla.
// İkinci test aynı kuralı farklı fiyatlarla denetler: boşluğa yine + operatörünü koy.
// Beklenen çıktı:
// 62
const fiyatlar = [5, 15, 40, 2];
const toplam = fiyatlar.reduce((biriken, fiyat) => biriken <<< ❓ >>> fiyat, 0);
console.log(toplam);
- tests/1/output
62

---------------------
- parts/4:
- text
# 🔎 find ve findIndex

``find()`` koşulu sağlayan **ilk** elemanı verir, ``findIndex()`` ise onun indexini.
Aradığın eleman yoksa ``find`` → ``undefined``, ``findIndex`` → ``-1`` döner. İkisi de
``filter`` gibi yeni dizi üretmez, tek bir sonuç verir.

<code-view name="main.js" language="javascript">
const sayılar = [4, 9, 16, 25];
console.log(sayılar.find((sayı) => sayı > 10));
console.log(sayılar.findIndex((sayı) => sayı > 10));
console.log(sayılar.find((sayı) => sayı > 100));
</code-view>

<code-view name="Terminal" language="bash">
16
2
undefined
</code-view>

# 🎯 5. Görev

10'dan büyük ilk sayıyı ve onun indexini yazdıran programı yazar mısın? Son satır
hiçbir sayı 100'den büyük olmadığı için ``undefined`` yazacak.

- files/main.js/.block
// Görev: 10'dan büyük ilk sayıyı ve onun indexini bul.
// find ve findIndex koşulu sağlayan ilk elemanı arar; 10'dan büyük için > operatörünü yaz.
// Beklenen çıktı:
// 16
// 2
// undefined
const sayılar = [4, 9, 16, 25];
console.log(sayılar.find((sayı) => sayı <<< ❓ >>> 10));
console.log(sayılar.findIndex((sayı) => sayı > 10));
console.log(sayılar.find((sayı) => sayı > 100));
---------------------
- tests/0/output
16
2
undefined

---------------------
- tests/1/files/main.js/.block
// Görev: 10'dan büyük ilk sayıyı ve onun indexini bul.
// İkinci testte 10 da var: >= yazarsan ilk eleman 10 olur ve sonuç yanlış çıkar, > kullan.
// Beklenen çıktı:
// 40
// 3
// undefined
const sayılar = [2, 5, 10, 40];
console.log(sayılar.find((sayı) => sayı <<< ❓ >>> 10));
console.log(sayılar.findIndex((sayı) => sayı > 10));
console.log(sayılar.find((sayı) => sayı > 100));
- tests/1/output
40
3
undefined

---------------------
- parts/5:
- text
# 🧪 some ve every

``some()`` en az bir eleman koşulu sağlıyorsa ``true`` verir. ``every()`` ise **tüm**
elemanlar sağlıyorsa ``true`` verir. İkisi de boolean sonuç döndürür; "hepsi geçti mi?",
"içinde geçen var mı?" sorularının cevabıdır.

<code-view name="main.js" language="javascript">
const notlar = [70, 85, 92];
console.log(notlar.some((not) => not > 90));
console.log(notlar.every((not) => not > 60));
</code-view>

<code-view name="Terminal" language="bash">
true
true
</code-view>

# 🎯 6. Görev

Notlardan en az biri 90'ın üstünde mi, hepsi 60'ın üstünde mi? İki kontrolü de yapan
programı yazar mısın?

- files/main.js/.block
// Görev: Notlardan en az biri 90'dan büyük mü, hepsi 60'tan büyük mü kontrol et.
// some en az bir eleman için, every tüm elemanlar için bakar; iki boşluğa da > yaz.
// Beklenen çıktı:
// true
// true
const notlar = [70, 85, 92];
console.log(notlar.some((not) => not <<< ❓ >>> 90));
console.log(notlar.every((not) => not <<< ❓ >>> 60));
---------------------
- tests/0/output
true
true

---------------------
- tests/1/files/main.js/.block
// Görev: Notlardan en az biri 90'dan büyük mü, hepsi 60'tan büyük mü kontrol et.
// İkinci testte 90 tam sınırda: >= yazarsan some sonucu yanlış çıkar, > kullan.
// Beklenen çıktı:
// false
// true
const notlar = [70, 90, 80];
console.log(notlar.some((not) => not <<< ❓ >>> 90));
console.log(notlar.every((not) => not <<< ❓ >>> 60));
- tests/1/output
false
true

---------------------
- parts/6:
- text
# 🔤 sort

``sort()`` diziyi sıralar. Hiçbir şey vermezsen elemanları **metin** gibi karşılaştırır;
bu yüzden ``[10, 9, 100]`` dizisi ``[10, 100, 9]`` olur. Sayıları doğru sıralamak için
``(a, b) => a - b`` karşılaştırma fonksiyonunu vermelisin. ``sort`` diziyi **yerinde**
değiştirir.

<code-view name="main.js" language="javascript">
const isimler = ["zeynep", "ali", "mehmet"];
console.log(isimler.sort());
const sayılar = [10, 9, 100];
console.log(sayılar.sort());
console.log(sayılar.sort((a, b) => a - b));
</code-view>

<code-view name="Terminal" language="bash">
[ 'ali', 'mehmet', 'zeynep' ]
[ 10, 100, 9 ]
[ 9, 10, 100 ]
</code-view>

# 🎯 7. Görev

Sayıları küçükten büyüğe doğru sıralayan programı yazar mısın? Karşılaştırma fonksiyonu
``(a, b) => a - b`` biçimindedir.

- files/main.js/.block
// Görev: Sayıları küçükten büyüğe doğru sırala.
// sort((a, b) => a - b) sayıları doğru sıralar; boşluğa eksi (-) işareti yaz.
// Beklenen çıktı:
// [ 'ali', 'mehmet', 'zeynep' ]
// [ 10, 100, 9 ]
// [ 9, 10, 100 ]
const isimler = ["zeynep", "ali", "mehmet"];
console.log(isimler.sort());
const sayılar = [10, 9, 100];
console.log(sayılar.sort());
console.log(sayılar.sort((a, b) => a <<< ❓ >>> b));
---------------------
- tests/0/output
[ 'ali', 'mehmet', 'zeynep' ]
[ 10, 100, 9 ]
[ 9, 10, 100 ]

---------------------
- tests/1/files/main.js/.block
// Görev: Sayıları küçükten büyüğe doğru sırala.
// İkinci test farklı sayılarla aynı kuralı denetler: boşluğa yine eksi (-) yaz.
// Beklenen çıktı:
// [ 'ahmet', 'veli' ]
// [ 200, 30, 4 ]
// [ 4, 30, 200 ]
const isimler = ["veli", "ahmet"];
console.log(isimler.sort());
const sayılar = [30, 4, 200];
console.log(sayılar.sort());
console.log(sayılar.sort((a, b) => a <<< ❓ >>> b));
- tests/1/output
[ 'ahmet', 'veli' ]
[ 200, 30, 4 ]
[ 4, 30, 200 ]

---------------------
- parts/7:
- text
# 🪆 flat

İç içe dizileri tek seviyeye indirmek için ``flat()`` kullanılır. Hiçbir sayı vermezsen
bir seviye açar; parantez içine ``2`` yazarsan iki seviye açar. Ne kadar derin olduğunu
bilmiyorsan ``flat(Infinity)`` yazabilirsin.

<code-view name="main.js" language="javascript">
const liste = [1, [2, 3], [4, [5, 6]]];
console.log(liste.flat());
console.log(liste.flat(2));
</code-view>

<code-view name="Terminal" language="bash">
[ 1, 2, 3, 4, [ 5, 6 ] ]
[ 1, 2, 3, 4, 5, 6 ]
</code-view>

# 🎯 8. Görev

``liste`` dizisini önce bir, sonra iki seviye düzleştiren programı yazar mısın?

- files/main.js/.block
// Görev: liste dizisini önce bir, sonra iki seviye düzleştir.
// İlk satır için .flat() (varsayılan 1 seviye), ikinci satır için .flat(2) yaz.
// Beklenen çıktı:
// [ 1, 2, 3, 4, [ 5, 6 ] ]
// [ 1, 2, 3, 4, 5, 6 ]
const liste = [1, [2, 3], [4, [5, 6]]];
console.log(liste.<<< ❓ >>>());
console.log(liste.flat(<<< ❓ >>>));
---------------------
- tests/0/output
[ 1, 2, 3, 4, [ 5, 6 ] ]
[ 1, 2, 3, 4, 5, 6 ]

- tests/0/require = "2"

---------------------
- parts/8:
- text
# 🔁 forEach

``forEach()`` dizinin her elemanını dolaşır ve verdiğin fonksiyonu çalıştırır. ``map``
gibi yeni dizi **üretmez**, geriye ``undefined`` döndürür. Sadece yazdırma, toplama gibi
yan etkili işler için kullanılır.

<code-view name="main.js" language="javascript">
const meyveler = ["elma", "armut"];
const dönüş = meyveler.forEach((meyve) => console.log("Meyve:", meyve));
console.log(dönüş);
</code-view>

<code-view name="Terminal" language="bash">
Meyve: elma
Meyve: armut
undefined
</code-view>

# 🎯 9. Görev

Meyveleri tek tek ``Meyve: …`` biçiminde yazdıran programı yazar mısın? ``forEach``
geriye bir şey döndürmediği için son satır ``undefined`` olacak.

- files/main.js/.block
// Görev: Meyveleri tek tek "Meyve: ..." biçiminde yazdır.
// meyveler.forEach((meyve) => console.log("Meyve:", meyve)) yaz; geriye undefined döner.
// Beklenen çıktı:
// Meyve: elma
// Meyve: armut
// undefined
const meyveler = ["elma", "armut"];
const dönüş = meyveler.<<< ❓ >>>((meyve) => console.log("Meyve:", meyve));
console.log(dönüş);
---------------------
- tests/0/output
Meyve: elma
Meyve: armut
undefined

---------------------
- parts/9:
- text
# ⛓️ Metotları Zincirleme

Metotlar yeni dizi döndürdüğü için art arda bağlanabilir. ``filter`` ile süz, ``map`` ile
dönüştür: ``dizi.filter(...).map(...)``. Bu zincirleme (chaining) okunaklı ve kısadır;
her adım bir öncekinin sonucu üzerinde çalışır.

<code-view name="main.js" language="javascript">
const sayılar = [1, 2, 3, 4, 5, 6];
const sonuç = sayılar.filter((sayı) => sayı % 2 === 0).map((sayı) => sayı * 10);
console.log(sonuç);
</code-view>

<code-view name="Terminal" language="bash">
[ 20, 40, 60 ]
</code-view>

# 🎯 10. Görev

Önce çift sayıları süzüp sonra her birini 10 ile çarpan programı yazar mısın?

- files/main.js/.block
// Görev: Önce çift sayıları süz, sonra her birini 10 ile çarp.
// filter ile çiftleri seç, map ile 10 çarp: .map((sayı) => sayı * 10). Boşluğa * yaz.
// Beklenen çıktı:
// [ 20, 40, 60 ]
const sayılar = [1, 2, 3, 4, 5, 6];
const sonuç = sayılar
  .filter((sayı) => sayı % 2 === 0)
  .map((sayı) => sayı <<< ❓ >>> 10);
console.log(sonuç);
---------------------
- tests/0/output
[ 20, 40, 60 ]

---------------------
- tests/1/files/main.js/.block
// Görev: Önce çift sayıları süz, sonra her birini 10 ile çarp.
// İkinci test farklı sayılarla aynı zinciri denetler: boşluğa yine * yaz.
// Beklenen çıktı:
// [ 20, 100, 120 ]
const sayılar = [2, 3, 7, 10, 12];
const sonuç = sayılar
  .filter((sayı) => sayı % 2 === 0)
  .map((sayı) => sayı <<< ❓ >>> 10);
console.log(sonuç);
- tests/1/output
[ 20, 100, 120 ]

---------------------
- parts/10:
- text
# 🏆 Mini Tekrar

Öğrendiklerini birleştirelim. Sepetteki uzun isimli ürünleri ``filter`` ile seçip
``map`` ile uzunluklarına çevirelim. ``length`` metinlerde karakter sayısını verir;
``"peynir"`` altı karakter olduğu için ``5``'ten uzunları yakalar.

<code-view name="main.js" language="javascript">
const sepet = ["ekmek", "süt", "peynir"];
const uzunlar = sepet.filter((ürün) => ürün.length > 5);
console.log(uzunlar);
console.log(uzunlar.map((ürün) => ürün.length));
</code-view>

<code-view name="Terminal" language="bash">
[ 'peynir' ]
[ 6 ]
</code-view>

# 🎯 11. Görev

Adı 5 karakterden uzun ürünleri seçip uzunluklarını yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Adı 5 karakterden uzun ürünleri seçip uzunluklarını yazdır.
// sepet.filter((ürün) => ürün.length > 5) yaz; length karakter sayısıdır, > kullan.
// Beklenen çıktı:
// [ 'peynir' ]
// [ 6 ]
const sepet = ["ekmek", "süt", "peynir"];
const uzunlar = sepet.filter((ürün) => ürün.length <<< ❓ >>> 5);
console.log(uzunlar);
console.log(uzunlar.map((ürün) => ürün.length));
---------------------
- tests/0/output
[ 'peynir' ]
[ 6 ]

---------------------
- tests/1/files/main.js/.block
// Görev: Adı 5 karakterden uzun ürünleri seçip uzunluklarını yazdır.
// İkinci testte "reçel" tam 5 karakter: >= yazarsan sonuç yanlış çıkar, > kullan.
// Beklenen çıktı:
// [ 'makarna' ]
// [ 7 ]
const sepet = ["bal", "reçel", "makarna"];
const uzunlar = sepet.filter((ürün) => ürün.length <<< ❓ >>> 5);
console.log(uzunlar);
console.log(uzunlar.map((ürün) => ürün.length));
- tests/1/output
[ 'makarna' ]
[ 7 ]

---------------------
