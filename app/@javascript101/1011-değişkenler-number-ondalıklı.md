- show_content = true
- show_editor = true
- show_terminal = true
- language = "javascript"
- title = "🔢 Değişkenler number : Ondalıklı Sayılar"
- run = "node main.js"

- parts/0:
- text
# 🎯 **number** : Ondalıklı Sayılar

Sayılar her zaman tam sayı değildir; fiyat, kilo, sıcaklık gibi değerlerin küsuratı olur.
JavaScript'te **ondalık ayracı virgül değil noktadır** (``.``). Yani ``3,14`` değil ``3.14``
yazarız. Bu sayılar da tıpkı tam sayılar gibi ``number`` türündedir.

<code-view name="main.js" language="javascript">
let piYaklaşık = 3.14;
console.log("Pi yaklaşık:", piYaklaşık);
</code-view>

<code-view name="Terminal" language="bash">
Pi yaklaşık: 3.14
</code-view>

# 🎯 1. Görev

Terminale ``Pi yaklaşık: 3.14`` yazdıran programı yazar mısın? Değişkene değer verirken
ondalık ayracı olarak **nokta** kullanmayı unutma.

- files/main.js/.block
// Görev: Terminale "Pi yaklaşık: 3.14" yazdır.
// piYaklaşık değişkenine 3.14 değerini ver; ondalık ayracı NOKTA olmalı.
// Ondalıklı sayılar da tam sayılar gibi tırnaksız yazılır.
// Beklenen çıktı:
// Pi yaklaşık: 3.14
let piYaklaşık = <<< ❓ >>>;
console.log("Pi yaklaşık:", piYaklaşık);
---------------------
- tests/0/output
Pi yaklaşık: 3.14

---------------------
- parts/1:
- text
# ✅ Birden Küçük Sayılar

Sıfırdan büyük, birden küçük sayıların başına ``0`` yazarız: ``0.5``, ``0.25`` gibi.
Buradaki ``0`` isteğe bağlı görünse de okunabilirlik için her zaman yazılır. ``0.5`` demek
"yarım" demektir.

<code-view name="main.js" language="javascript">
let indirimOranı = 0.5;
console.log("İndirim oranı:", indirimOranı);
</code-view>

<code-view name="Terminal" language="bash">
İndirim oranı: 0.5
</code-view>

# 🎯 2. Görev

``İndirim oranı: 0.5`` yazdıran programı yazar mısın? Değişkenin değeri yarım olacak.

- files/main.js/.block
// Görev: Terminale "İndirim oranı: 0.5" yazdır.
// indirimOranı değişkenine yarım değerini ondalıklı yaz: 0.5
// Sıfırdan büyük, birden küçük sayıların başına 0 yazılır.
// Beklenen çıktı:
// İndirim oranı: 0.5
let indirimOranı = <<< ❓ >>>;
console.log("İndirim oranı:", indirimOranı);
---------------------
- tests/0/output
İndirim oranı: 0.5

---------------------
- parts/2:
- text
# ➕ Ondalıklı Sayılarla Toplama

Ondalıklı sayılar da ``+`` ve ``-`` ile tam sayılar gibi işlem görür. Sonuç ondalıklı
kalabilir; JavaScript virgül değil nokta ile yazdırır.

<code-view name="main.js" language="javascript">
let litre = 2.5;
litre = litre + 1.25;
console.log("Toplam:", litre, "litre");
</code-view>

<code-view name="Terminal" language="bash">
Toplam: 3.75 litre
</code-view>

# 🎯 3. Görev

``2.5`` litre suya ``1.25`` litre daha eklersek ``Toplam: 3.75 litre`` yazdıran programı yazar
mısın?

- files/main.js/.block
// Görev: 2.5 litre suya 1.25 litre daha ekleyip "Toplam: 3.75 litre" yazdır.
// litre = litre + 1.25 yaz; + operatörü ondalıklı sayıları da toplar.
// Sonuç ondalıklı olabilir; JavaScript virgül yerine nokta ile yazdırır.
// Beklenen çıktı:
// Toplam: 3.75 litre
let litre = 2.5;
litre = litre <<< ❓ >>> 1.25;
console.log("Toplam:", litre, "litre");
---------------------
- tests/0/output
Toplam: 3.75 litre

---------------------
- tests/1/files/main.js/.block
// Görev: 4.5 litre suya 0.75 litre daha ekleyip "Toplam: 5.25 litre" yazdır.
// İkinci test aynı kuralı farklı sayılarla denetler: toplama için + operatörü.
// litre = litre + 0.75 yaz ve sonucu console.log() ile yazdır.
// Beklenen çıktı:
// Toplam: 5.25 litre
let litre = 4.5;
litre = litre <<< ❓ >>> 0.75;
console.log("Toplam:", litre, "litre");
- tests/1/output
Toplam: 5.25 litre

---------------------
- parts/3:
- text
# 🥧 Math.PI : Hazır Pi Sayısı

``Math.PI`` JavaScript'in içinde hazır gelen pi sayısıdır (yaklaşık 3.14159…). Bir dairenin
çevresini ``2 * Math.PI * yarıçap`` formülüyle hesaplarız. Hazır değerleri elimizle yazmak
yerine ``Math`` nesnesinden almak daha doğrudur.

<code-view name="main.js" language="javascript">
let yarıçap = 5;
console.log("Dairenin çevresi:", 2 * Math.PI * yarıçap);
</code-view>

<code-view name="Terminal" language="bash">
Dairenin çevresi: 31.41592653589793
</code-view>

# 🎯 4. Görev

Yarıçapı ``5`` olan dairenin çevresini ``Dairenin çevresi: 31.41592653589793`` şeklinde
yazdıran programı yazar mısın? ``Math.PI`` kullanacaksın.

- files/main.js/.block
// Görev: Yarıçapı 5 olan dairenin çevresini "Dairenin çevresi: 31.41592653589793" şeklinde yazdır.
// Boşluğa Math.PI yaz; formül 2 * Math.PI * yarıçap şeklindedir.
// Hazır değeri elle yazmak yerine Math nesnesinden almak daha doğrudur.
// Beklenen çıktı:
// Dairenin çevresi: 31.41592653589793
let yarıçap = 5;
console.log("Dairenin çevresi:", 2 * <<< ❓ >>> * yarıçap);
---------------------
- tests/0/output
Dairenin çevresi: 31.41592653589793

- tests/0/require = "Math.PI"

---------------------
- parts/4:
- text
# 💰 toFixed : Basamak Sayısını Sınırlama

Ondalıklı sayılar çok uzun basamaklarla gelebilir; para yazarken genelde iki basamak
yeterlidir. ``toFixed(2)`` sayıyı iki ondalık basamağa yuvarlayıp **metin** olarak verir.
Parantez içine istediğin basamak sayısını yazabilirsin.

<code-view name="main.js" language="javascript">
let fiyat = 12.3456;
console.log("Fiyat:", fiyat.toFixed(2), "TL");
</code-view>

<code-view name="Terminal" language="bash">
Fiyat: 12.35 TL
</code-view>

# 🎯 5. Görev

``12.3456`` liralık fiyatı iki basamağa yuvarlayıp ``Fiyat: 12.35 TL`` yazdıran programı
yazar mısın?

- files/main.js/.block
// Görev: 12.3456 liralık fiyatı iki basamağa yuvarlayıp "Fiyat: 12.35 TL" yazdır.
// Boşluğa toFixed metodunun adını yaz; fiyat.toFixed(2) iki ondalık basamak verir.
// toFixed() sayıyı yuvarlar ve sonucu METİN olarak döner.
// Beklenen çıktı:
// Fiyat: 12.35 TL
let fiyat = 12.3456;
console.log("Fiyat:", fiyat.<<< ❓ >>>(2), "TL");
---------------------
- tests/0/output
Fiyat: 12.35 TL

---------------------
- parts/5:
- text
# 🔵 Math.round : En Yakın Tam Sayı

``Math.round()`` verilen sayıyı en yakın tam sayıya yuvarlar. ``2.5`` gibi tam ortadaki
sayılar **yukarı** yuvarlanır. Yani ``Math.round(2.5)`` sonucu ``3`` olur.

<code-view name="main.js" language="javascript">
console.log(Math.round(2.5), Math.round(2.4));
</code-view>

<code-view name="Terminal" language="bash">
3 2
</code-view>

# 🎯 6. Görev

``Math.round()`` ile ``2.5`` değerini ``3``, ``2.4`` değerini ``2`` yapan ve ikisini aynı
satırda yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Math.round() ile 2.5 değerini 3, 2.4 değerini 2 yapıp ikisini aynı satırda yazdır.
// Birinci boşluğa 2.5, ikinci boşluğa 2.4 yaz (iki değer de tırnaksız sayı).
// Math.round() en yakın tam sayıya yuvarlar; tam ortadaki sayılar yukarı gider.
// Beklenen çıktı:
// 3 2
console.log(Math.round(<<< ❓ >>>), Math.round(<<< ❓ >>>));
---------------------
- tests/0/output
3 2

- tests/0/require/0 = "2.5"
- tests/0/require/1 = "2.4"

---------------------
- parts/6:
- text
# 🔽 Math.floor ve Math.ceil

``Math.round()`` en yakına yuvarlar; bazen bilerek aşağı ya da yukarı gitmek isteriz.
``Math.floor()`` sayıyı aşağıya, ``Math.ceil()`` yukarıya yuvarlar. ``21.7`` için aşağı
``21``, yukarı ``22`` olur.

<code-view name="main.js" language="javascript">
let sıcaklık = 21.7;
console.log("Aşağı:", Math.floor(sıcaklık), "Yukarı:", Math.ceil(sıcaklık));
</code-view>

<code-view name="Terminal" language="bash">
Aşağı: 21 Yukarı: 22
</code-view>

# 🎯 7. Görev

``21.7`` sıcaklığını aşağı ve yukarı yuvarlayıp ``Aşağı: 21 Yukarı: 22`` yazdıran programı
yazar mısın?

- files/main.js/.block
// Görev: 21.7 sıcaklığını aşağı ve yukarı yuvarlayıp "Aşağı: 21 Yukarı: 22" yazdır.
// Birinci boşluğa floor, ikinci boşluğa ceil yaz.
// Math.floor() aşağıya, Math.ceil() yukarıya yuvarlar.
// Beklenen çıktı:
// Aşağı: 21 Yukarı: 22
let sıcaklık = 21.7;
console.log("Aşağı:", Math.<<< ❓ >>>(sıcaklık), "Yukarı:", Math.<<< ❓ >>>(sıcaklık));
---------------------
- tests/0/output
Aşağı: 21 Yukarı: 22

---------------------
- tests/1/files/main.js/.block
// Görev: 8.2 sıcaklığını aşağı ve yukarı yuvarlayıp "Aşağı: 8 Yukarı: 9" yazdır.
// İkinci test aynı kuralı farklı sayıyla denetler: floor ve ceil.
// Birinci boşluğa floor, ikinci boşluğa ceil yaz.
// Beklenen çıktı:
// Aşağı: 8 Yukarı: 9
let sıcaklık = 8.2;
console.log("Aşağı:", Math.<<< ❓ >>>(sıcaklık), "Yukarı:", Math.<<< ❓ >>>(sıcaklık));
- tests/1/output
Aşağı: 8 Yukarı: 9

---------------------
- parts/7:
- text
# 🔍 Number.isInteger : Tam Sayı mı?

``Number.isInteger()`` bir değerin tam sayı olup olmadığını söyler. Tam sayıysa ``true``,
küsuratlıysa ``false`` döner. Bu kontrol, ``0.1 + 0.2`` gibi işlemlerden sonra değerin
beklediğin gibi olup olmadığını anlamak için işe yarar.

<code-view name="main.js" language="javascript">
console.log(Number.isInteger(3.14));
console.log(Number.isInteger(7));
</code-view>

<code-view name="Terminal" language="bash">
false
true
</code-view>

# 🎯 8. Görev

``3.14`` için ``false``, ``7`` için ``true`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: 3.14 için false, 7 için true yazdır.
// Birinci boşluğa 3.14, ikinci boşluğa 7 yaz (ikisi de tırnaksız sayı).
// Number.isInteger() tam sayıysa true, küsuratlıysa false döner.
// Beklenen çıktı:
// false
// true
console.log(Number.isInteger(<<< ❓ >>>));
console.log(Number.isInteger(<<< ❓ >>>));
---------------------
- tests/0/output
false
true

---------------------
- parts/8:
- text
# ⚠️ 0.1 + 0.2 Sürprizi

Bilgisayarlar ondalıklı sayıları ikilik sistemde sakladığı için ``0.1 + 0.2`` tam olarak
``0.3`` çıkmaz; ``0.30000000000000004`` gibi çok küçük bir hata oluşur. Bu bir JavaScript
hatası değil, tüm dillerde görülen bir yaklaşımdır. Çözüm: sonucu ``toFixed()`` ile
yuvarlamak.

<code-view name="main.js" language="javascript">
console.log(0.1 + 0.2);
console.log((0.1 + 0.2).toFixed(2));
</code-view>

<code-view name="Terminal" language="bash">
0.30000000000000004
0.30
</code-view>

# 🎯 9. Görev

``0.1`` ile ``0.2`` sayılarını toplayan ve sonucu iki basamağa yuvarlayan programı yazar
mısın? İki satır da ``0.3`` çıkmayacak; sürprizi göreceksin.

- files/main.js/.block
// Görev: 0.1 ile 0.2 sayılarını topla ve toplamı iki basamağa yuvarla.
// Birinci boşluğa + operatörünü, ikinci boşluğa 2 sayısını yaz.
// toFixed(2) toplamı iki ondalık basamağa yuvarlar; sonuç metin olur.
// Beklenen çıktı:
// 0.30000000000000004
// 0.30
console.log(0.1 <<< ❓ >>> 0.2);
// İkinci satır: toplamı toFixed(2) ile iki basamaklı metne çevir (boşluğa 2 yaz).
console.log((0.1 + 0.2).toFixed(<<< ❓ >>>));
---------------------
- tests/0/output
0.30000000000000004
0.30

---------------------
- tests/1/files/main.js/.block
// Görev: 0.7 ile 0.1 sayılarını topla ve toplamı iki basamağa yuvarla.
// İkinci test aynı kuralı farklı sayılarla denetler: toplama ve toFixed(2).
// Birinci boşluğa + operatörünü, ikinci boşluğa 2 sayısını yaz.
// Beklenen çıktı:
// 0.7999999999999999
// 0.80
console.log(0.7 <<< ❓ >>> 0.1);
// İkinci satır: toplamı toFixed(2) ile iki basamaklı metne çevir (boşluğa 2 yaz).
console.log((0.7 + 0.1).toFixed(<<< ❓ >>>));
- tests/1/output
0.7999999999999999
0.80

---------------------
- parts/9:
- text
# 📊 Yüzde Hesabı

Bir sayının yüzdesini almak için önce çarpıp sonra ``100``'e böleriz. Fiyat ``200`` ve KDV
oranı ``18`` ise KDV tutarı ``200 * 18 / 100`` yani ``36`` olur.

<code-view name="main.js" language="javascript">
let fiyat = 200;
let kdv = 18;
console.log("KDV tutarı:", fiyat * kdv / 100);
</code-view>

<code-view name="Terminal" language="bash">
KDV tutarı: 36
</code-view>

# 🎯 10. Görev

200 liralık ürünün %18'lik KDV tutarını ``KDV tutarı: 36`` şeklinde yazdıran programı yazar
mısın?

- files/main.js/.block
// Görev: 200 liralık ürünün %18'lik KDV tutarını "KDV tutarı: 36" şeklinde yazdır.
// fiyat * kdv ifadesini 100'e bölmek için / operatörünü yaz.
// Yüzde hesabı: önce çarp, sonra 100'e böl.
// Beklenen çıktı:
// KDV tutarı: 36
let fiyat = 200;
let kdv = 18;
console.log("KDV tutarı:", fiyat * kdv <<< ❓ >>> 100);
---------------------
- tests/0/output
KDV tutarı: 36

---------------------
- tests/1/files/main.js/.block
// Görev: 500 liralık ürünün %8'lik KDV tutarını "KDV tutarı: 40" şeklinde yazdır.
// İkinci test aynı kuralı farklı değerlerle denetler: bölme için / operatörü.
// fiyat * kdv ifadesini 100'e böl.
// Beklenen çıktı:
// KDV tutarı: 40
let fiyat = 500;
let kdv = 8;
console.log("KDV tutarı:", fiyat * kdv <<< ❓ >>> 100);
- tests/1/output
KDV tutarı: 40

---------------------
- parts/10:
- text
# 📈 Ortalama Hesabı

Ortalamayı bulmak için değerleri toplayıp sayı adedine böleriz. Parantez kullanmak
önemlidir: ``vize + finalNotu / 2`` sadece finali böler, ``(vize + finalNotu) / 2`` ise
toplamı böler. Bu yüzden önce toplamı parantez içine alıyoruz.

<code-view name="main.js" language="javascript">
let vize = 70;
let finalNotu = 90;
console.log("Ortalama:", (vize + finalNotu) / 2);
</code-view>

<code-view name="Terminal" language="bash">
Ortalama: 80
</code-view>

# 🎯 11. Görev

Vizeden ``70``, finalden ``90`` alan öğrencinin ortalamasını ``Ortalama: 80`` şeklinde
yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Vizeden 70, finalden 90 alan öğrencinin ortalamasını "Ortalama: 80" şeklinde yazdır.
// (vize + finalNotu) toplamını 2'ye bölmek için / operatörünü yaz.
// Parantez olmadan sadece finalNotu bölünür; bu yüzden parantezi koru.
// Beklenen çıktı:
// Ortalama: 80
let vize = 70;
let finalNotu = 90;
console.log("Ortalama:", (vize + finalNotu) <<< ❓ >>> 2);
---------------------
- tests/0/output
Ortalama: 80

---------------------
- tests/1/files/main.js/.block
// Görev: Vizeden 60, finalden 80 alan öğrencinin ortalamasını "Ortalama: 70" şeklinde yazdır.
// İkinci test aynı kuralı farklı notlarla denetler: bölme için / operatörü.
// (vize + finalNotu) toplamını 2'ye böl.
// Beklenen çıktı:
// Ortalama: 70
let vize = 60;
let finalNotu = 80;
console.log("Ortalama:", (vize + finalNotu) <<< ❓ >>> 2);
- tests/1/output
Ortalama: 70

---------------------
- parts/11:
- text
# 🏆 Mini Tekrar

Öğrendiklerini birleştirelim: bir ürünün fiyatından ``0.2`` (%20) indirim yapıp sonucu iki
basamakla yazdıralım. İndirim tutarı ``fiyat * indirim`` formülüyle bulunur, kalan fiyat
ise çıkarma ile.

<code-view name="main.js" language="javascript">
let fiyat = 250.5;
let indirim = 0.2;
let sonFiyat = fiyat - fiyat * indirim;
console.log("İndirimli fiyat:", sonFiyat.toFixed(2), "TL");
</code-view>

<code-view name="Terminal" language="bash">
İndirimli fiyat: 200.40 TL
</code-view>

# 🎯 12. Görev

Fiyatı ``250.5`` olan ürüne %20 indirim uygulayıp ``İndirimli fiyat: 200.40 TL`` yazdıran
programı yazar mısın?

- files/main.js/.block
// Görev: Fiyatı 250.5 olan ürüne %20 indirim uygulayıp "İndirimli fiyat: 200.40 TL" yazdır.
// sonFiyat = fiyat - fiyat * indirim yaz; indirim tutarını - operatörü ile çıkar.
// toFixed(2) sonucu iki ondalık basamaklı METİN olarak verir.
// Beklenen çıktı:
// İndirimli fiyat: 200.40 TL
let fiyat = 250.5;
let indirim = 0.2;
let sonFiyat = fiyat <<< ❓ >>> fiyat * indirim;
console.log("İndirimli fiyat:", sonFiyat.toFixed(2), "TL");
---------------------
- tests/0/output
İndirimli fiyat: 200.40 TL

---------------------
- tests/1/files/main.js/.block
// Görev: Fiyatı 100 olan ürüne %25 indirim uygulayıp "İndirimli fiyat: 75.00 TL" yazdır.
// İkinci test aynı kuralı farklı değerlerle denetler: çıkarma için - operatörü.
// sonFiyat = fiyat - fiyat * indirim yaz; sonucu toFixed(2) ile yazdır.
// Beklenen çıktı:
// İndirimli fiyat: 75.00 TL
let fiyat = 100;
let indirim = 0.25;
let sonFiyat = fiyat <<< ❓ >>> fiyat * indirim;
console.log("İndirimli fiyat:", sonFiyat.toFixed(2), "TL");
- tests/1/output
İndirimli fiyat: 75.00 TL

---------------------
