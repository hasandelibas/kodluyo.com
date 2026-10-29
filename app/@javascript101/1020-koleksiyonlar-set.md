- show_content = true
- show_editor = true
- show_terminal = true
- language = "javascript"
- title = "🍎 Koleksiyonlar Set : Kümeler"
- run = "node main.js"

- parts/0:
- text
# 🎯 **Set** : Kümeler

``Set``, birbirinden farklı değerleri saklayan bir koleksiyondur. Aynı değeri birden fazla
kez eklersek ``Set`` onu yalnızca bir kez tutar. ``new Set([...])`` ile bir diziden küme
oluştururuz; terminalde ``Set(3) { 1, 2, 3 }`` biçiminde görünür.

<code-view name="main.js" language="javascript">
let sayılar = new Set([1, 2, 2, 3, 3]);
console.log(sayılar);
</code-view>

<code-view name="Terminal" language="bash">
Set(3) { 1, 2, 3 }
</code-view>

# 🎯 1. Görev

``[1, 2, 2, 3, 3]`` dizisinden bir küme oluşturup tekrar eden sayıları ayıklayan
programı yazar mısın? Terminale ``Set(3) { 1, 2, 3 }`` yazmalı.

- files/main.js/.block
// Görev: [1, 2, 2, 3, 3] dizisinden küme oluşturup tekrar eden sayıları ayıkla.
// Küme için new Set(dizi) yaz; Set her değeri yalnızca bir kez tutar, tekrarlar gider.
// Beklenen çıktı:
// Set(3) { 1, 2, 3 }
let sayılar = <<< ❓ >>>([1, 2, 2, 3, 3]);
console.log(sayılar);
---------------------
- tests/0/output
Set(3) { 1, 2, 3 }

---------------------
- tests/1/files/main.js/.block
// Görev: [4, 4, 5, 6, 6] dizisinden küme oluşturup tekrar eden sayıları ayıkla.
// İkinci test aynı kuralı farklı sayılarla denetler: boşluğa yine new Set yaz.
// Beklenen çıktı:
// Set(3) { 4, 5, 6 }
let sayılar = <<< ❓ >>>([4, 4, 5, 6, 6]);
console.log(sayılar);
- tests/1/output
Set(3) { 4, 5, 6 }

---------------------
- parts/1:
- text
# ➕ Eleman Ekleme: .add()

``.add(değer)`` kümeye yeni bir eleman ekler. Eklenen değer kümede zaten varsa hiçbir şey
değişmez; küme tekrar eden eleman tutmaz. Metinler terminalde tek tırnak içinde görünür.

<code-view name="main.js" language="javascript">
let meyveler = new Set();
meyveler.add("elma");
meyveler.add("armut");
console.log(meyveler);
</code-view>

<code-view name="Terminal" language="bash">
Set(2) { 'elma', 'armut' }
</code-view>

# 🎯 2. Görev

Boş bir kümeye ``"elma"`` ve ``"armut"`` elemanlarını ekleyip
``Set(2) { 'elma', 'armut' }`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Boş bir kümeye "elma" ve "armut" elemanlarını ekle.
// Eleman eklemek için .add() metodunu kullan: meyveler.add("elma"). Metinleri ÇİFT TIRNAK ile yaz.
// Beklenen çıktı:
// Set(2) { 'elma', 'armut' }
let meyveler = new Set();
meyveler.<<< ❓ >>>("elma");
meyveler.<<< ❓ >>>("armut");
console.log(meyveler);
---------------------
- tests/0/output
Set(2) { 'elma', 'armut' }

---------------------
- tests/1/files/main.js/.block
// Görev: Boş bir kümeye "kiraz" ve "muz" elemanlarını ekle.
// İkinci test aynı kuralı farklı meyvelerle denetler: iki boşluğa da add yaz.
// Beklenen çıktı:
// Set(2) { 'kiraz', 'muz' }
let meyveler = new Set();
meyveler.<<< ❓ >>>("kiraz");
meyveler.<<< ❓ >>>("muz");
console.log(meyveler);
- tests/1/output
Set(2) { 'kiraz', 'muz' }

---------------------
- parts/2:
- text
# ❓ Var mı? .has()

``.has(değer)`` kümede aranan değer varsa ``true``, yoksa ``false`` döndürür. Bir değerin
koleksiyonda olup olmadığını kontrol etmenin en hızlı yoludur.

<code-view name="main.js" language="javascript">
let sayılar = new Set([1, 2, 3]);
console.log(sayılar.has(2));
console.log(sayılar.has(5));
</code-view>

<code-view name="Terminal" language="bash">
true
false
</code-view>

# 🎯 3. Görev

``[1, 2, 3]`` kümesinde ``2`` ve ``5`` değerlerinin olup olmadığını alt alta yazdıran
programı yazar mısın?

- files/main.js/.block
// Görev: [1, 2, 3] kümesinde 2 ve 5 değerlerinin olup olmadığını alt alta yazdır.
// Kontrol için .has(2) ve .has(5) yaz: varsa true, yoksa false döndürür. delete DEĞİL.
// Beklenen çıktı:
// true
// false
let sayılar = new Set([1, 2, 3]);
console.log(sayılar.<<< ❓ >>>(2));
console.log(sayılar.<<< ❓ >>>(5));
---------------------
- tests/0/output
true
false

- tests/0/require = "has"

---------------------
- tests/1/files/main.js/.block
// Görev: [4, 5, 6] kümesinde 5 ve 1 değerlerinin olup olmadığını alt alta yazdır.
// İkinci test aynı kuralı farklı değerlerle denetler: iki boşluğa da has yaz.
// Beklenen çıktı:
// true
// false
let sayılar = new Set([4, 5, 6]);
console.log(sayılar.<<< ❓ >>>(5));
console.log(sayılar.<<< ❓ >>>(1));
- tests/1/output
true
false

- tests/1/require = "has"

---------------------
- parts/3:
- text
# 🗑️ Eleman Silme: .delete()

``.delete(değer)`` verilen elemanı kümeden siler. İşlem başarılıysa ``true``, eleman
kümede yoksa ``false`` döndürür. Silme işleminden sonra kümeyi yazdırırsak kalan
elemanları görürüz.

<code-view name="main.js" language="javascript">
let sayılar = new Set([1, 2, 3]);
sayılar.delete(2);
console.log(sayılar);
</code-view>

<code-view name="Terminal" language="bash">
Set(2) { 1, 3 }
</code-view>

# 🎯 4. Görev

``[1, 2, 3]`` kümesinden ``2`` değerini silip kalan elemanları ``Set(2) { 1, 3 }``
biçiminde yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: [1, 2, 3] kümesinden 2 değerini silip kalan elemanları yazdır.
// Silmek için .delete(2) metodunu kullan; silme sonrası kümede 1 ve 3 kalır.
// Beklenen çıktı:
// Set(2) { 1, 3 }
let sayılar = new Set([1, 2, 3]);
sayılar.<<< ❓ >>>(2);
console.log(sayılar);
---------------------
- tests/0/output
Set(2) { 1, 3 }

---------------------
- tests/1/files/main.js/.block
// Görev: [4, 5, 6] kümesinden 5 değerini silip kalan elemanları yazdır.
// İkinci test aynı kuralı farklı değerlerle denetler: boşluğa yine delete yaz.
// Beklenen çıktı:
// Set(2) { 4, 6 }
let sayılar = new Set([4, 5, 6]);
sayılar.<<< ❓ >>>(5);
console.log(sayılar);
- tests/1/output
Set(2) { 4, 6 }

---------------------
- parts/4:
- text
# 📏 Eleman Sayısı: .size

``.size`` kümede kaç eleman olduğunu söyler. Bu bir metot değil özelliktir; bu yüzden
parantez koymayız. Dizilerdeki ``.length`` ile aynı işi görür.

<code-view name="main.js" language="javascript">
let harfler = new Set(["a", "b", "c"]);
console.log(harfler.size);
</code-view>

<code-view name="Terminal" language="bash">
3
</code-view>

# 🎯 5. Görev

``["a", "b", "c"]`` kümesinin eleman sayısını terminale ``3`` olarak yazdıran programı
yazar mısın?

- files/main.js/.block
// Görev: ["a", "b", "c"] kümesinin eleman sayısını yazdır.
// .size bir ÖZELLİKTİR, metot değildir: parantez koymadan harfler.size yaz.
// Beklenen çıktı:
// 3
let harfler = new Set(["a", "b", "c"]);
console.log(harfler.<<< ❓ >>>);
---------------------
- tests/0/output
3

---------------------
- tests/1/files/main.js/.block
// Görev: ["x", "y"] kümesinin eleman sayısını yazdır.
// İkinci test aynı kuralı farklı elemanlarla denetler: boşluğa yine size yaz.
// Beklenen çıktı:
// 2
let harfler = new Set(["x", "y"]);
console.log(harfler.<<< ❓ >>>);
- tests/1/output
2

---------------------
- parts/5:
- text
# 🧼 Diziyi Tekilleştirme: [...new Set()]

Bir dizideki tekrarları silmek için diziyi ``Set``'e çevirip tekrar diziye açabiliriz.
``[...new Set(dizi)]`` ifadesi yayma (spread) operatörüyle benzersiz bir dizi üretir.
Sonuç terminalde köşeli parantezli bir dizi olarak görünür.

<code-view name="main.js" language="javascript">
let sayılar = [1, 2, 2, 3, 3, 3, 4];
let benzersiz = [...new Set(sayılar)];
console.log(benzersiz);
</code-view>

<code-view name="Terminal" language="bash">
[ 1, 2, 3, 4 ]
</code-view>

# 🎯 6. Görev

``[1, 2, 2, 3, 3, 3, 4]`` dizisindeki tekrar eden sayıları silip
``[ 1, 2, 3, 4 ]`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: [1, 2, 2, 3, 3, 3, 4] dizisindeki tekrarları silip benzersiz bir dizi üret.
// [...new Set(sayılar)] yaz: yayma (...) operatörü kümeyi yeniden diziye açar.
// Beklenen çıktı:
// [ 1, 2, 3, 4 ]
let sayılar = [1, 2, 2, 3, 3, 3, 4];
let benzersiz = <<< ❓ >>>;
console.log(benzersiz);
---------------------
- tests/0/output
[ 1, 2, 3, 4 ]

---------------------
- tests/1/files/main.js/.block
// Görev: [5, 5, 6, 7, 7, 8] dizisindeki tekrarları silip benzersiz bir dizi üret.
// İkinci test aynı kuralı farklı sayılarla denetler: boşluğa yine [...new Set(...)] yaz.
// Beklenen çıktı:
// [ 5, 6, 7, 8 ]
let sayılar = [5, 5, 6, 7, 7, 8];
let benzersiz = <<< ❓ >>>;
console.log(benzersiz);
- tests/1/output
[ 5, 6, 7, 8 ]

---------------------
- parts/6:
- text
# 🔁 for-of ile Gezmek

``for-of`` döngüsü ``Set``'in elemanlarını sırayla gezer. Her turda ``renk`` değişkeni o
anki elemanı alır ve döngü gövdesi çalışır. Elemanlar eklenme sırasına göre gelir.

<code-view name="main.js" language="javascript">
let renkler = new Set(["mavi", "yeşil", "kırmızı"]);
for (const renk of renkler) {
  console.log(renk);
}
</code-view>

<code-view name="Terminal" language="bash">
mavi
yeşil
kırmızı
</code-view>

# 🎯 7. Görev

``["mavi", "yeşil", "kırmızı"]`` kümesinin elemanlarını ``for-of`` ile alt alta yazdıran
programı yazar mısın?

- files/main.js/.block
// Görev: ["mavi", "yeşil", "kırmızı"] kümesinin elemanlarını alt alta yazdır.
// Döngü başlığı for (const renk of renkler) biçimindedir; boşluğa of yaz (in değil).
// Beklenen çıktı:
// mavi
// yeşil
// kırmızı
let renkler = new Set(["mavi", "yeşil", "kırmızı"]);
for (const renk <<< ❓ >>> renkler) {
  console.log(renk);
}
---------------------
- tests/0/output
mavi
yeşil
kırmızı

---------------------
- tests/1/files/main.js/.block
// Görev: ["sarı", "mor"] kümesinin elemanlarını alt alta yazdır.
// İkinci test aynı kuralı farklı renklerle denetler: boşluğa yine of yaz.
// Beklenen çıktı:
// sarı
// mor
let renkler = new Set(["sarı", "mor"]);
for (const renk <<< ❓ >>> renkler) {
  console.log(renk);
}
- tests/1/output
sarı
mor

---------------------
- parts/7:
- text
# 🔂 forEach ile Gezmek

``Set``'in ``.forEach()`` metodu her eleman için verdiğimiz fonksiyonu çalıştırır. Ok
fonksiyonu (arrow function) ile elemanı alıp işleyebiliriz. Bu yöntem, döngü yazmadan
kümenin tüm elemanları üzerinde işlem yapmayı sağlar.

<code-view name="main.js" language="javascript">
let sayılar = new Set([1, 2, 3]);
sayılar.forEach((sayı) => {
  console.log(sayı * 2);
});
</code-view>

<code-view name="Terminal" language="bash">
2
4
6
</code-view>

# 🎯 8. Görev

``[1, 2, 3]`` kümesinin her elemanını ``forEach`` ile gezdirip iki katını alt alta
yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: [1, 2, 3] kümesinin her elemanının iki katını alt alta yazdır.
// sayılar.forEach((sayı) => { ... }) yaz: ok fonksiyonu her turda bir elemanı alır.
// Beklenen çıktı:
// 2
// 4
// 6
let sayılar = new Set([1, 2, 3]);
sayılar.<<< ❓ >>>((sayı) => {
  console.log(sayı * 2);
});
---------------------
- tests/0/output
2
4
6

---------------------
- tests/1/files/main.js/.block
// Görev: [5, 6] kümesinin her elemanının iki katını alt alta yazdır.
// İkinci test aynı kuralı farklı sayılarla denetler: boşluğa yine forEach yaz.
// Beklenen çıktı:
// 10
// 12
let sayılar = new Set([5, 6]);
sayılar.<<< ❓ >>>((sayı) => {
  console.log(sayı * 2);
});
- tests/1/output
10
12

---------------------
- parts/8:
- text
# 🤝 Birleşim

İki kümenin birleşimi, iki kümedeki tüm elemanları tekrarsız olarak içerir. ``[...a, ...b]``
ile iki kümenin elemanlarını açıp yeni bir ``Set`` oluştururuz. Ortak eleman bir kez
bulunur.

<code-view name="main.js" language="javascript">
let a = new Set(["elma", "armut"]);
let b = new Set(["armut", "muz"]);
let birleşim = new Set([...a, ...b]);
console.log(birleşim);
</code-view>

<code-view name="Terminal" language="bash">
Set(3) { 'elma', 'armut', 'muz' }
</code-view>

# 🎯 9. Görev

``a`` ve ``b`` kümelerinin birleşimini yeni bir küme olarak yazdıran programı yazar
mısın?

- files/main.js/.block
// Görev: a ve b kümelerinin birleşimini yeni bir küme olarak yazdır.
// new Set([...a, ...b]) yaz: iki kümenin elemanlarını yayma (...) ile tek kümeye topla.
// Beklenen çıktı:
// Set(3) { 'elma', 'armut', 'muz' }
let a = new Set(["elma", "armut"]);
let b = new Set(["armut", "muz"]);
let birleşim = <<< ❓ >>>;
console.log(birleşim);
---------------------
- tests/0/output
Set(3) { 'elma', 'armut', 'muz' }

---------------------
- tests/1/files/main.js/.block
// Görev: a ve b kümelerinin birleşimini yeni bir küme olarak yazdır.
// İkinci test aynı kuralı farklı meyvelerle denetler: boşluğa yine new Set([...a, ...b]) yaz.
// Beklenen çıktı:
// Set(3) { 'kiraz', 'muz', 'çilek' }
let a = new Set(["kiraz", "muz"]);
let b = new Set(["muz", "çilek"]);
let birleşim = <<< ❓ >>>;
console.log(birleşim);
- tests/1/output
Set(3) { 'kiraz', 'muz', 'çilek' }

---------------------
- parts/9:
- text
# ⊙ Kesişim

İki kümenin kesişimi, her ikisinde de bulunan elemanlardan oluşur. ``[...a].filter(...)``
ile ``a``'nın elemanlarını gezip yalnızca ``b``'de olanları seçeriz. Kalan elemanlardan
yeni bir ``Set`` oluştururuz.

<code-view name="main.js" language="javascript">
let a = new Set([1, 2, 3]);
let b = new Set([3, 4, 5]);
let kesişim = new Set([...a].filter((x) => b.has(x)));
console.log(kesişim);
</code-view>

<code-view name="Terminal" language="bash">
Set(1) { 3 }
</code-view>

# 🎯 10. Görev

``a`` ve ``b`` kümelerinin ortak elemanlarından yeni bir küme oluşturup yazdıran programı
yazar mısın?

- files/main.js/.block
// Görev: a ve b kümelerinin ortak elemanlarından yeni bir küme oluştur (kesişim).
// [...a].filter((x) => b.has(x)) yaz: filter yalnızca iki kümede de olanları seçer.
// Beklenen çıktı:
// Set(1) { 3 }
let a = new Set([1, 2, 3]);
let b = new Set([3, 4, 5]);
let kesişim = new Set([...a].<<< ❓ >>>((x) => b.has(x)));
console.log(kesişim);
---------------------
- tests/0/output
Set(1) { 3 }

---------------------
- tests/1/files/main.js/.block
// Görev: a ve b kümelerinin ortak elemanlarından yeni bir küme oluştur (kesişim).
// İkinci test aynı kuralı farklı sayılarla denetler: boşluğa yine filter yaz.
// Beklenen çıktı:
// Set(2) { 2, 3 }
let a = new Set([1, 2, 3]);
let b = new Set([2, 3, 4]);
let kesişim = new Set([...a].<<< ❓ >>>((x) => b.has(x)));
console.log(kesişim);
- tests/1/output
Set(2) { 2, 3 }

---------------------
