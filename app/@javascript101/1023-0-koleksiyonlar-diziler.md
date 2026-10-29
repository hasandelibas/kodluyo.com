- show_content = true
- show_editor = true
- show_terminal = true
- language = "javascript"
- title = "📚 Koleksiyonlar : Diziler"
- run = "node main.js"

- parts/0:
- text
# 📚 Diziler (Array)

Dizi (array), aynı isim altında saklanan sıralı değerler listesidir. Köşeli parantez
``[...]`` ile tanımlanır, elemanlar virgülle ayrılır. Her elemanın bir **index**
(numara) vardır ve sayma **0'dan** başlar: ilk eleman ``dizi[0]``, ikinci ``dizi[1]``.

<code-view name="main.js" language="javascript">
const meyveler = ["elma", "armut", "kiraz"];
console.log(meyveler);
console.log(meyveler[0]);
console.log(meyveler[2]);
</code-view>

<code-view name="Terminal" language="bash">
[ 'elma', 'armut', 'kiraz' ]
elma
kiraz
</code-view>

# 🎯 1. Görev

``meyveler`` dizisinin ilk ve son elemanını yazdıran programı yazar mısın? Bunun için
0 ve 2 indexlerini kullan.

- files/main.js/.block
// Görev: meyveler dizisinin ilk ve son elemanını index kullanarak yazdır.
// Index 0'dan başlar: ilk eleman meyveler[0], üç elemanlı dizide son eleman meyveler[2].
// Beklenen çıktı:
// [ 'elma', 'armut', 'kiraz' ]
// elma
// kiraz
const meyveler = ["elma", "armut", "kiraz"];
console.log(meyveler);
console.log(meyveler[<<< ❓ >>>]);
console.log(meyveler[<<< ❓ >>>]);
---------------------
- tests/0/output
[ 'elma', 'armut', 'kiraz' ]
elma
kiraz

---------------------
- parts/1:
- text
# ✅ Tebrikler

``length`` özelliği dizide kaç eleman olduğunu söyler. Son elemana ulaşmak için
``dizi.length - 1`` yazarız; çünkü son elemanın indexi her zaman uzunluğun bir eksiğidir.
``dizi.length`` yazıp bir çıkarmayı unutursan ``undefined`` alırsın.

<code-view name="main.js" language="javascript">
const notlar = [90, 85, 70];
console.log(notlar.length);
console.log(notlar[notlar.length - 1]);
</code-view>

<code-view name="Terminal" language="bash">
3
70
</code-view>

# 🎯 2. Görev

``notlar`` dizisinin uzunluğunu ve son notunu yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: notlar dizisinin uzunluğunu ve son elemanını yazdır.
// Son elemanın indexi notlar.length - 1'dir; boşluğa eksi (-) işareti yaz.
// Beklenen çıktı:
// 3
// 70
const notlar = [90, 85, 70];
console.log(notlar.length);
console.log(notlar[notlar.length <<< ❓ >>> 1]);
---------------------
- tests/0/output
3
70

---------------------
- parts/2:
- text
# 📥 push ve pop

``push`` dizinin **sonuna** eleman ekler, ``pop`` ise **sondaki** elemanı çıkarır ve o
elemanı geri döndürür. İkisi de diziyi yerinde değiştirir. ``push`` ekleme yaparken
``pop`` çıkarma yapar.

<code-view name="main.js" language="javascript">
const kuyruk = ["ali", "ayşe"];
kuyruk.push("mehmet");
console.log(kuyruk);
const çıkan = kuyruk.pop();
console.log(çıkan);
console.log(kuyruk);
</code-view>

<code-view name="Terminal" language="bash">
[ 'ali', 'ayşe', 'mehmet' ]
mehmet
[ 'ali', 'ayşe' ]
</code-view>

# 🎯 3. Görev

Kuyruğun sonuna ``"mehmet"`` ekleyen, sonra sondaki elemanı çıkaran programı yazar
mısın?

- files/main.js/.block
// Görev: kuyruğun sonuna "mehmet" ekle, sonra sondaki elemanı çıkar.
// .push(değer) sona ekler, .pop() sondaki elemanı çıkarıp döndürür; boşluklara sırayla push ve pop yaz.
// Beklenen çıktı:
// [ 'ali', 'ayşe', 'mehmet' ]
// mehmet
// [ 'ali', 'ayşe' ]
const kuyruk = ["ali", "ayşe"];
kuyruk.<<< ❓ >>>("mehmet");
console.log(kuyruk);
const çıkan = kuyruk.<<< ❓ >>>();
console.log(çıkan);
console.log(kuyruk);
---------------------
- tests/0/output
[ 'ali', 'ayşe', 'mehmet' ]
mehmet
[ 'ali', 'ayşe' ]

---------------------
- parts/3:
- text
# 📤 shift ve unshift

``unshift`` dizinin **başına** eleman ekler, ``shift`` ise **baştaki** elemanı çıkarır.
Sıra numarası önemli olan listelerde (ör. banka kuyruğu) bu ikisi çok işe yarar.

<code-view name="main.js" language="javascript">
const sıra = ["ayşe", "mehmet"];
sıra.unshift("ali");
console.log(sıra);
const ilk = sıra.shift();
console.log(ilk);
console.log(sıra);
</code-view>

<code-view name="Terminal" language="bash">
[ 'ali', 'ayşe', 'mehmet' ]
ali
[ 'ayşe', 'mehmet' ]
</code-view>

# 🎯 4. Görev

Sıranın başına ``"ali"`` ekleyen, sonra baştaki elemanı çıkaran programı yazar mısın?

- files/main.js/.block
// Görev: sıranın başına "ali" ekle, sonra baştaki elemanı çıkar.
// .unshift(değer) başa ekler, .shift() baştaki elemanı çıkarıp döndürür; boşluklara unshift ve shift yaz.
// Beklenen çıktı:
// [ 'ali', 'ayşe', 'mehmet' ]
// ali
// [ 'ayşe', 'mehmet' ]
const sıra = ["ayşe", "mehmet"];
sıra.<<< ❓ >>>("ali");
console.log(sıra);
const ilk = sıra.<<< ❓ >>>();
console.log(ilk);
console.log(sıra);
---------------------
- tests/0/output
[ 'ali', 'ayşe', 'mehmet' ]
ali
[ 'ayşe', 'mehmet' ]

---------------------
- parts/4:
- text
# ✏️ Index ile Güncelleme

Var olan bir elemanı değiştirmek için indexini kullanırız: ``dizi[1] = 65``. Bu işlem
dizinin uzunluğunu değiştirmez, sadece o sıradaki değeri günceller.

<code-view name="main.js" language="javascript">
const notlar = [50, 60, 70];
notlar[1] = 65;
console.log(notlar);
</code-view>

<code-view name="Terminal" language="bash">
[ 50, 65, 70 ]
</code-view>

# 🎯 5. Görev

``notlar`` dizisinin ikinci elemanını ``65`` yapan programı yazar mısın?

- files/main.js/.block
// Görev: notlar dizisinin ikinci elemanını 65 yap.
// Index 1 ikinci elemandır: notlar[1] = 65 yaz. 65 sayıdır, tırnak kullanma.
// Beklenen çıktı:
// [ 50, 65, 70 ]
const notlar = [50, 60, 70];
notlar[1] = <<< ❓ >>>;
console.log(notlar);
---------------------
- tests/0/output
[ 50, 65, 70 ]

---------------------
- parts/5:
- text
# 🔍 includes ve indexOf

``includes()`` aranan değerin dizide olup olmadığını ``true``/``false`` olarak söyler.
``indexOf()`` ise o değerin **indexini** verir; değer yoksa ``-1`` döner. ``-1``
"bulunamadı" demenin JavaScript'teki yoludur.

<code-view name="main.js" language="javascript">
const sayılar = [4, 8, 15, 16];
console.log(sayılar.includes(15));
console.log(sayılar.indexOf(15));
console.log(sayılar.indexOf(99));
</code-view>

<code-view name="Terminal" language="bash">
true
2
&minus;1
</code-view>

# 🎯 6. Görev

``sayılar`` dizisinde ``15`` var mı, varsa kaçıncı indexte? Üçüncü satır ``99``
bulunamadığı için ``-1`` yazacak.

- files/main.js/.block
// Görev: 15 dizide var mı ve kaçıncı indexte olduğunu yazdır.
// .indexOf(15) değerin indexini verir; [4, 8, 15, 16] dizisinde 15 ikinci indexte (2).
// Beklenen çıktı:
// true
// 2
// -1
const sayılar = [4, 8, 15, 16];
console.log(sayılar.includes(15));
console.log(sayılar.indexOf(<<< ❓ >>>));
console.log(sayılar.indexOf(99));
---------------------
- tests/0/output
true
2
&minus;1

---------------------
- parts/6:
- text
# 🔗 join

``join()`` dizinin elemanlarını tek bir metne çevirir. Parantez içine verdiğin metin
elemanların arasına girer. Boş metin ``""`` verirsen elemanlar hiçbir şey olmadan
birleşir; bu, harf listesinden kelime yapmanın kestirme yoludur.

<code-view name="main.js" language="javascript">
const harfler = ["J", "S"];
console.log(harfler.join(""));
console.log(harfler.join(" - "));
console.log([1, 2, 3].join("+"));
</code-view>

<code-view name="Terminal" language="bash">
JS
J - S
1+2+3
</code-view>

# 🎯 7. Görev

``harfler`` dizisini ``J - S`` biçiminde yazdıran programı yazar mısın? Yani elemanları
``" - "`` metniyle birleştir.

- files/main.js/.block
// Görev: harfler dizisini " - " metniyle birleştirip J - S yazdır.
// .join(" - ") elemanların arasına verilen metni koyar; boşluğa çift tırnakla " - " yaz.
// Beklenen çıktı:
// JS
// J - S
// 1+2+3
const harfler = ["J", "S"];
console.log(harfler.join(""));
console.log(harfler.join(<<< ❓ >>>));
console.log([1, 2, 3].join("+"));
---------------------
- tests/0/output
JS
J - S
1+2+3

---------------------
- parts/7:
- text
# ✂️ slice

``slice(baslangıç, bitiş)`` dizinin bir bölümünü **kopyalar**, asıl diziyi bozmaz. Bitiş
indexi dahil değildir. Tek sayı verirsen o index dahil sonuna kadar alır. Negatif sayı
verirsen sondan saymaya başlar: ``slice(-2)`` son iki elemanı verir.

<code-view name="main.js" language="javascript">
const sayılar = [10, 20, 30, 40, 50];
console.log(sayılar.slice(1, 3));
console.log(sayılar.slice(2));
console.log(sayılar.slice(-2));
</code-view>

<code-view name="Terminal" language="bash">
[ 20, 30 ]
[ 30, 40, 50 ]
[ 40, 50 ]
</code-view>

# 🎯 8. Görev

``sayılar`` dizisinden ``[20, 30]`` bölümünü alan programı yazar mısın?

- files/main.js/.block
// Görev: sayılar dizisinden [20, 30] bölümünü slice ile al.
// slice(1, 3) 1. index dahil, 3. index hariç kopyalar; boşluğa 1 yaz.
// Beklenen çıktı:
// [ 20, 30 ]
// [ 30, 40, 50 ]
// [ 40, 50 ]
const sayılar = [10, 20, 30, 40, 50];
console.log(sayılar.slice(<<< ❓ >>>, 3));
console.log(sayılar.slice(2));
console.log(sayılar.slice(-2));
---------------------
- tests/0/output
[ 20, 30 ]
[ 30, 40, 50 ]
[ 40, 50 ]

---------------------
- parts/8:
- text
# ➕ concat

``concat()`` iki diziyi birleştirip **yeni** bir dizi döndürür. Kaynak diziler olduğu gibi
kalır. Birden fazla dizi de verebilirsin: ``a.concat([5], [6, 7])`` hepsini sırayla ekler.

<code-view name="main.js" language="javascript">
const a = [1, 2];
const b = [3, 4];
console.log(a.concat(b));
console.log(a.concat([5], [6, 7]));
console.log(a);
</code-view>

<code-view name="Terminal" language="bash">
[ 1, 2, 3, 4 ]
[ 1, 2, 5, 6, 7 ]
[ 1, 2 ]
</code-view>

# 🎯 9. Görev

``a`` ve ``b`` dizilerini birleştirip ``[1, 2, 3, 4]`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: a ve b dizilerini .concat() metoduyla birleştirip yazdır.
// a.concat(b) iki diziyi birleştirip YENİ bir dizi döndürür; a dizisi değişmez.
// Beklenen çıktı:
// [ 1, 2, 3, 4 ]
// [ 1, 2, 5, 6, 7 ]
// [ 1, 2 ]
const a = [1, 2];
const b = [3, 4];
console.log(a.<<< ❓ >>>(b));
console.log(a.concat([5], [6, 7]));
console.log(a);
---------------------
- tests/0/output
[ 1, 2, 3, 4 ]
[ 1, 2, 5, 6, 7 ]
[ 1, 2 ]

---------------------
- parts/9:
- text
# 🪆 İç İçe Diziler

Bir dizinin elemanları başka diziler olabilir. Buna iç içe dizi (nested array) denir.
İçteki elemana ulaşmak için indexleri art arda yazarsın: ``sınıf[1][0]`` demek "ikinci
grubun ilk elemanı" demektir. ``console.log`` iç içe dizileri köşeli parantezlerle basar.

<code-view name="main.js" language="javascript">
const sınıf = [["ali", "ayşe"], ["mehmet", "zeynep"]];
console.log(sınıf);
console.log(sınıf[1][0]);
console.log(sınıf.length);
console.log(sınıf[0].length);
</code-view>

<code-view name="Terminal" language="bash">
[ [ 'ali', 'ayşe' ], [ 'mehmet', 'zeynep' ] ]
mehmet
2
2
</code-view>

# 🎯 10. Görev

İkinci grubun ilk elemanını (``mehmet``) yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: sınıf dizisindeki ikinci grubun ilk elemanını (mehmet) yazdır.
// İç içe dizide indexleri art arda yaz: sınıf[1][0]. Boşluğa 0 yaz.
// Beklenen çıktı:
// [ [ 'ali', 'ayşe' ], [ 'mehmet', 'zeynep' ] ]
// mehmet
// 2
// 2
const sınıf = [["ali", "ayşe"], ["mehmet", "zeynep"]];
console.log(sınıf);
console.log(sınıf[1][<<< ❓ >>>]);
console.log(sınıf.length);
console.log(sınıf[0].length);
---------------------
- tests/0/output
[ [ 'ali', 'ayşe' ], [ 'mehmet', 'zeynep' ] ]
mehmet
2
2

---------------------
- parts/10:
- text
# 🏆 Mini Tekrar

Öğrendiklerini birleştirelim. Alışveriş listesine ``push`` ile eleman ekleyip ``join`` ile
tek satırda yazdıralım, ``includes`` ile de listede süt olup olmadığını kontrol edelim.

<code-view name="main.js" language="javascript">
const liste = ["ekmek", "süt"];
liste.push("yumurta");
console.log(liste.join(", "));
console.log(liste.includes("süt"));
console.log(liste.length);
</code-view>

<code-view name="Terminal" language="bash">
ekmek, süt, yumurta
true
3
</code-view>

# 🎯 11. Görev

Alışveriş listesine ``"yumurta"`` ekleyip listeyi ``ekmek, süt, yumurta`` biçiminde
yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Alışveriş listesine "yumurta" ekleyip listeyi tek satırda yazdır.
// .push("yumurta") sona ekler; join(", ") elemanları virgül ve boşlukla birleştirir.
// Beklenen çıktı:
// ekmek, süt, yumurta
// true
// 3
const liste = ["ekmek", "süt"];
liste.<<< ❓ >>>("yumurta");
console.log(liste.join(", "));
console.log(liste.includes("süt"));
console.log(liste.length);
---------------------
- tests/0/output
ekmek, süt, yumurta
true
3

---------------------
