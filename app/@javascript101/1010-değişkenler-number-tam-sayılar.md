- show_content = true
- show_editor = true
- show_terminal = true
- language = "javascript"
- title = "🔢 Değişkenler number : Tam Sayılar"
- run = "node main.js"

- parts/0:
- text
# 🔢 **number** : Tam Sayılar

JavaScript'te bir tam sayıyı saklamak için ``let`` anahtar kelimesini kullanırız.
``let`` "değişken tanımla" demektir; sağındaki değer değişkenin içine konur.

<code-view name="main.js" language="javascript">
let yıl = 2023;
console.log(yıl);
</code-view>

<code-view name="Terminal" language="bash">
2023
</code-view>

# 🎯 1. Görev

Terminale ``2023`` yazdıran programı yazar mısın? ``yıl`` değişkenine ``2023`` değerini ver.

- files/main.js/.block
// Görev: Terminale 2023 yazdır.
// yıl değişkenine 2023 değerini ver; sayıyı TIRNAKSIZ yaz.
// let anahtar kelimesi değişken tanımlar; sağındaki değer değişkenin içine konur.
// Beklenen çıktı:
// 2023
let yıl = <<< ❓ >>>;
console.log(yıl);
---------------------
- tests/0/output
2023

---------------------
- parts/1:
- text
# ✅ Tebrikler

Bir değişkenin değerini sonradan değiştirebiliriz. Yeni değeri ``=`` işareti ile yazarız;
program yukarıdan aşağıya çalıştığı için en son atanan değer geçerli olur.

<code-view name="main.js" language="javascript">
let sayaç = 1;
sayaç = 2;
sayaç = 3;
console.log(sayaç);
</code-view>

<code-view name="Terminal" language="bash">
3
</code-view>

# 🎯 2. Görev

``sayaç`` değişkenine önce ``1``, sonra ``2``, en son ``3`` değerini veren programı yazar mısın?

- files/main.js/.block
// Görev: sayaç değişkenine önce 1, sonra 2, en son 3 değerini ver.
// Boşluğa en son atanacak değeri yaz: 3 (tırnaksız sayı).
// Program yukarıdan aşağıya çalışır; bu yüzden en son atanan değer geçerli olur.
// Beklenen çıktı:
// 3
let sayaç = 1;
sayaç = <<< ❓ >>>;
console.log(sayaç);
---------------------
- tests/0/output
3

---------------------
- parts/2:
- text
# 💡 const : Sabit Değer

Değeri hiç değişmeyecek sayılar için ``const`` kullanırız. ``const`` ile tanımlanan
değişkene sonradan yeni bir değer atanamaz; atamaya çalışırsan program hata verir.

<code-view name="main.js" language="javascript">
const birGün = 24;
console.log("Bir günde", birGün, "saat vardır.");
</code-view>

<code-view name="Terminal" language="bash">
Bir günde 24 saat vardır.
</code-view>

# 🎯 3. Görev

``Bir günde 24 saat vardır.`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Terminale "Bir günde 24 saat vardır." yazdır.
// const birGün değişkenine 24 değerini tırnaksız yaz.
// const ile tanımlanan değişkene sonradan yeni değer atanamaz.
// Beklenen çıktı:
// Bir günde 24 saat vardır.
const birGün = <<< ❓ >>>;
console.log("Bir günde", birGün, "saat vardır.");
---------------------
- tests/0/output
Bir günde 24 saat vardır.

---------------------
- parts/3:
- text
# ➕ Toplama Operatörü

Sayıları ``+`` işareti ile toplarız. Değişkenleri de birbirine ekleyebiliriz.

<code-view name="main.js" language="javascript">
let elma = 3;
let armut = 5;
console.log("Toplam meyve:", elma + armut);
</code-view>

<code-view name="Terminal" language="bash">
Toplam meyve: 8
</code-view>

# 🎯 4. Görev

``elma`` ve ``armut`` sayılarını toplayıp ``Toplam meyve: 8`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: elma ve armut sayılarını toplayıp "Toplam meyve: 8" yazdır.
// İki değişkeni + operatörü ile topla: elma + armut
// console.log() değerleri virgülle ayırır; önce hesap yapılır, sonra sonuç yazılır.
// Beklenen çıktı:
// Toplam meyve: 8
let elma = 3;
let armut = 5;
console.log("Toplam meyve:", elma <<< ❓ >>> armut);
---------------------
- tests/0/output
Toplam meyve: 8

---------------------
- tests/1/files/main.js/.block
// Görev: elma ve armut sayılarını toplayıp "Toplam meyve: 17" yazdır.
// İkinci test aynı kuralı farklı sayılarla denetler: toplama için + operatörü.
// elma 10, armut 7; sonucu console.log() içinde + ile hesapla.
// Beklenen çıktı:
// Toplam meyve: 17
let elma = 10;
let armut = 7;
console.log("Toplam meyve:", elma <<< ❓ >>> armut);
- tests/1/output
Toplam meyve: 17

---------------------
- parts/4:
- text
# ➖ Çıkarma Operatörü ve Negatif Sayılar

``-`` işareti sayıları çıkarır. Sonuç sıfırdan küçükse **negatif** bir sayı elde ederiz.

<code-view name="main.js" language="javascript">
let sıcaklık = 5;
sıcaklık = sıcaklık - 12;
console.log(sıcaklık);
</code-view>

<code-view name="Terminal" language="bash">
&minus;7
</code-view>

# 🎯 5. Görev

Hava sıcaklığı ``5`` iken ``12`` derece düşerse terminale ``-7`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Hava 5 dereceyken 12 derece düşünce terminale -7 yazdır.
// sıcaklık = sıcaklık - 12 yaz; - operatörü çıkarma yapar.
// Sonuç sıfırdan küçükse negatif sayı elde ederiz.
// Beklenen çıktı:
// -7
let sıcaklık = 5;
sıcaklık = sıcaklık <<< ❓ >>> 12;
console.log(sıcaklık);
---------------------
- tests/0/output
&minus;7

---------------------
- tests/1/files/main.js/.block
// Görev: Hava 20 dereceyken 12 derece düşünce terminale 8 yazdır.
// İkinci test aynı kuralı farklı sayılarla denetler: çıkarma için - operatörü.
// sıcaklık = sıcaklık - 12 yaz; sonuç pozitif kalır.
// Beklenen çıktı:
// 8
let sıcaklık = 20;
sıcaklık = sıcaklık <<< ❓ >>> 12;
console.log(sıcaklık);
- tests/1/output
8

---------------------
- parts/5:
- text
# ✖️ Çarpma Operatörü

Sayıları çarpmak için ``*`` işaretini kullanırız.

<code-view name="main.js" language="javascript">
let kutu = 4;
let kalem = 6;
console.log(kutu * kalem, "kalem vardır.");
</code-view>

<code-view name="Terminal" language="bash">
24 kalem vardır.
</code-view>

# 🎯 6. Görev

4 kutuda, her kutuda 6 kalem varsa ``24 kalem vardır.`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: 4 kutuda, her kutuda 6 kalem varken "24 kalem vardır." yazdır.
// kutu ile kalem değişkenlerini * operatörü ile çarp.
// console.log() sonucu ve metni virgülle ayırıp tek satıra yazar.
// Beklenen çıktı:
// 24 kalem vardır.
let kutu = 4;
let kalem = 6;
console.log(kutu <<< ❓ >>> kalem, "kalem vardır.");
---------------------
- tests/0/output
24 kalem vardır.

---------------------
- tests/1/files/main.js/.block
// Görev: 7 kutuda, her kutuda 8 kalem varken "56 kalem vardır." yazdır.
// İkinci test aynı kuralı farklı sayılarla denetler: çarpma için * operatörü.
// kutu * kalem ifadesini console.log() içinde kullan.
// Beklenen çıktı:
// 56 kalem vardır.
let kutu = 7;
let kalem = 8;
console.log(kutu <<< ❓ >>> kalem, "kalem vardır.");
- tests/1/output
56 kalem vardır.

---------------------
- parts/6:
- text
# ➗ Bölme Operatörü

``/`` işareti bölme yapar. Tam bölünen sayılarda sonuç yine tam sayı olur.

<code-view name="main.js" language="javascript">
let para = 100;
let kişi = 4;
console.log("Kişi başına", para / kişi, "lira düşer.");
</code-view>

<code-view name="Terminal" language="bash">
Kişi başına 25 lira düşer.
</code-view>

# 🎯 7. Görev

100 lirayı 4 kişiye eşit paylaştırıp ``Kişi başına 25 lira düşer.`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: 100 lirayı 4 kişiye eşit paylaştırıp "Kişi başına 25 lira düşer." yazdır.
// para değişkenini kişi sayısına / operatörü ile böl: para / kişi
// Tam bölünen sayılarda sonuç yine tam sayı olur.
// Beklenen çıktı:
// Kişi başına 25 lira düşer.
let para = 100;
let kişi = 4;
console.log("Kişi başına", para <<< ❓ >>> kişi, "lira düşer.");
---------------------
- tests/0/output
Kişi başına 25 lira düşer.

---------------------
- tests/1/files/main.js/.block
// Görev: 120 lirayı 6 kişiye eşit paylaştırıp "Kişi başına 20 lira düşer." yazdır.
// İkinci test aynı kuralı farklı sayılarla denetler: bölme için / operatörü.
// para / kişi ifadesini console.log() içinde kullan.
// Beklenen çıktı:
// Kişi başına 20 lira düşer.
let para = 120;
let kişi = 6;
console.log("Kişi başına", para <<< ❓ >>> kişi, "lira düşer.");
- tests/1/output
Kişi başına 20 lira düşer.

---------------------
- parts/7:
- text
# 🍬 Kalan (mod) Operatörü

``%`` işareti bölme işleminden kalanı verir. Bir sayının başka bir sayıya tam bölünüp
bölünmediğini anlamak için çok kullanışlıdır. ``17 % 5`` işleminin sonucu ``2`` olur;
çünkü 17 içinde 3 tane 5 vardır ve 2 artar.

<code-view name="main.js" language="javascript">
let şeker = 17;
let çocuk = 5;
console.log(şeker % çocuk, "şeker artar.");
</code-view>

<code-view name="Terminal" language="bash">
2 şeker artar.
</code-view>

# 🎯 8. Görev

17 şekeri 5 çocuğa eşit paylaştırınca ``2 şeker artar.`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: 17 şekeri 5 çocuğa paylaştırınca "2 şeker artar." yazdır.
// Kalanı bulmak için % (mod) operatörünü yaz: şeker % çocuk
// 17 içinde 3 tane 5 vardır ve 2 artar.
// Beklenen çıktı:
// 2 şeker artar.
let şeker = 17;
let çocuk = 5;
console.log(şeker <<< ❓ >>> çocuk, "şeker artar.");
---------------------
- tests/0/output
2 şeker artar.

---------------------
- tests/1/files/main.js/.block
// Görev: 23 şekeri 5 çocuğa paylaştırınca "3 şeker artar." yazdır.
// İkinci test aynı kuralı farklı sayılarla denetler: kalan için % operatörü.
// şeker % çocuk ifadesini console.log() içinde kullan.
// Beklenen çıktı:
// 3 şeker artar.
let şeker = 23;
let çocuk = 5;
console.log(şeker <<< ❓ >>> çocuk, "şeker artar.");
- tests/1/output
3 şeker artar.

---------------------
- parts/8:
- text
# ⏫ Üs Alma Operatörü

``**`` işareti bir sayının kuvvetini alır. ``3 ** 2`` demek "3'ün 2. kuvveti" yani
``3 * 3`` demektir.

<code-view name="main.js" language="javascript">
let kenar = 3;
console.log("Karenin alanı:", kenar ** 2);
</code-view>

<code-view name="Terminal" language="bash">
Karenin alanı: 9
</code-view>

# 🎯 9. Görev

Bir kenarı ``3`` olan karenin alanını ``Karenin alanı: 9`` şeklinde yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Kenarı 3 olan karenin alanını "Karenin alanı: 9" şeklinde yazdır.
// kenar ** 2 yaz; ** operatörü kuvvet alır (3 ** 2 = 3 * 3).
// Karenin alanı kenar çarpı kenardır.
// Beklenen çıktı:
// Karenin alanı: 9
let kenar = 3;
console.log("Karenin alanı:", kenar <<< ❓ >>> 2);
---------------------
- tests/0/output
Karenin alanı: 9

---------------------
- tests/1/files/main.js/.block
// Görev: Kenarı 5 olan karenin alanını "Karenin alanı: 25" şeklinde yazdır.
// İkinci test aynı kuralı farklı sayıyla denetler: kuvvet için ** operatörü.
// kenar ** 2 ifadesini console.log() içinde kullan.
// Beklenen çıktı:
// Karenin alanı: 25
let kenar = 5;
console.log("Karenin alanı:", kenar <<< ❓ >>> 2);
- tests/1/output
Karenin alanı: 25

---------------------
- parts/9:
- text
# 💡 Okunaklı Büyük Sayılar

Çok sıfırlı sayıları okumak zordur. JavaScript'te sayıları ``_`` ile gruplayabiliriz;
bu işaret sayının değerini değiştirmez, sadece okunmasını kolaylaştırır.

<code-view name="main.js" language="javascript">
let nüfus = 84_000_000;
console.log(nüfus);
</code-view>

<code-view name="Terminal" language="bash">
84000000
</code-view>

# 🎯 10. Görev

Türkiye'nin nüfusunu ``84_000_000`` olarak tanımlayıp terminale ``84000000`` yazdıran
programı yazar mısın?

- files/main.js/.block
// Görev: Türkiye'nin nüfusunu 84_000_000 olarak tanımlayıp terminale 84000000 yazdır.
// Sayıyı _ ile gruplayarak yaz: 84_000_000
// _ işareti sayının değerini değiştirmez, sadece okunmasını kolaylaştırır.
// Beklenen çıktı:
// 84000000
let nüfus = <<< ❓ >>>;
console.log(nüfus);
---------------------
- tests/0/output
84000000

- tests/0/require = "_"

---------------------
- parts/10:
- text
# 🔍 Sayı mı, Değil mi?

``Number.isInteger()`` verilen değerin tam sayı olup olmadığını söyler. Sonuç
``true`` (doğru) ya da ``false`` (yanlış) olur. ``Number.MAX_SAFE_INTEGER`` ise
JavaScript'in güvenle saklayabildiği en büyük tam sayıdır.

<code-view name="main.js" language="javascript">
console.log(Number.isInteger(42));
console.log(Number.isInteger(3.14));
console.log(Number.MAX_SAFE_INTEGER);
</code-view>

<code-view name="Terminal" language="bash">
true
false
9007199254740991
</code-view>

# 🎯 11. Görev

``42`` ve ``3.14`` değerlerinin tam sayı olup olmadığını, ardından güvenli en büyük tam
sayıyı yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: 42 ve 3.14 değerlerinin tam sayı olup olmadığını, ardından güvenli en büyük tam sayıyı yazdır.
// Birinci boşluğa 42, ikinci boşluğa 3.14 yaz (ikisi de tırnaksız sayı).
// Number.isInteger() tam sayıysa true, değilse false döner.
// Beklenen çıktı:
// true
// false
// 9007199254740991
console.log(Number.isInteger(<<< ❓ >>>));
console.log(Number.isInteger(<<< ❓ >>>));
console.log(Number.MAX_SAFE_INTEGER);
---------------------
- tests/0/output
true
false
9007199254740991

---------------------
- parts/11:
- text
# 🔄 Metni Sayıya Çevirme

Terminalden ya da bir metinden gelen sayılar aslında metindir. ``Number()``
fonksiyonu metni gerçek sayıya çevirir. Böylece toplama yapabiliriz.

<code-view name="main.js" language="javascript">
let metin = "42";
let sayı = Number(metin);
console.log(sayı + 8);
</code-view>

<code-view name="Terminal" language="bash">
50
</code-view>

# 🎯 12. Görev

``"42"`` metnini sayıya çevirip ``8`` ile toplayan ve terminale ``50`` yazdıran programı
yazar mısın?

- files/main.js/.block
// Görev: "42" metnini sayıya çevirip 8 ile topla; terminale 50 yazdır.
// Number() fonksiyonunu yaz: Number(metin)
// Metin sayıya çevrilince + ile toplama yapılır; çevrilmezse birleştirme olur.
// Beklenen çıktı:
// 50
let metin = "42";
let sayı = <<< ❓ >>>(metin);
console.log(sayı + 8);
---------------------
- tests/0/output
50

- tests/0/require = "Number"

---------------------
- tests/1/files/main.js/.block
// Görev: "100" metnini sayıya çevirip 8 ile topla; terminale 108 yazdır.
// İkinci test aynı kuralı farklı metinle denetler: Number() fonksiyonu.
// Number(metin) ifadesini kullan; ardından 8 ile topla.
// Beklenen çıktı:
// 108
let metin = "100";
let sayı = <<< ❓ >>>(metin);
console.log(sayı + 8);
- tests/1/output
108

---------------------
- parts/12:
- text
# 🏆 Mini Tekrar

Öğrendiklerini birleştirelim: bir ürünün fiyatı ile adetini çarpıp toplam tutarı
yazdıralım.

<code-view name="main.js" language="javascript">
let fiyat = 250;
let adet = 3;
let toplam = fiyat * adet;
console.log("Toplam:", toplam, "TL");
</code-view>

<code-view name="Terminal" language="bash">
Toplam: 750 TL
</code-view>

# 🎯 13. Görev

3 adet ürünün tanesi 250 lira ise ``Toplam: 750 TL`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: 3 adet ürünün tanesi 250 lira ise "Toplam: 750 TL" yazdır.
// toplam değişkeninde fiyat ile adet değişkenlerini * operatörü ile çarp.
// console.log() "Toplam:" metnini, sonucu ve "TL" metnini virgülle ayırır.
// Beklenen çıktı:
// Toplam: 750 TL
let fiyat = 250;
let adet = 3;
let toplam = fiyat <<< ❓ >>> adet;
console.log("Toplam:", toplam, "TL");
---------------------
- tests/0/output
Toplam: 750 TL

---------------------
- tests/1/files/main.js/.block
// Görev: 5 adet ürünün tanesi 120 lira ise "Toplam: 600 TL" yazdır.
// İkinci test aynı kuralı farklı değerlerle denetler: toplam için fiyat * adet.
// fiyat 120, adet 5; sonucu * operatörü ile hesapla.
// Beklenen çıktı:
// Toplam: 600 TL
let fiyat = 120;
let adet = 5;
let toplam = fiyat <<< ❓ >>> adet;
console.log("Toplam:", toplam, "TL");
- tests/1/output
Toplam: 600 TL

---------------------
