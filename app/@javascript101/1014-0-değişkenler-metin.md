- show_content = true
- show_editor = true
- show_terminal = true
- language = "javascript"
- title = "💬 Değişkenler string : Metin"
- run = "node main.js"

- parts/0:
- text
# 🎯 **string** : Metin

JavaScript'te yazıları saklamak için metin (string) türünü kullanırız. Metni çift tırnak
``"…"`` ya da tek tırnak ``'…'`` arasına yazarız. Bir değişkene metin atamak için ``let``
anahtar kelimesini kullanırız.

<code-view name="main.js" language="javascript">
let isim = "Atatürk";
console.log(isim);
</code-view>

<code-view name="Terminal" language="bash">
Atatürk
</code-view>

# 🎯 1. Görev

``isim`` değişkenine ``"Atatürk"`` metnini verip terminale ``Atatürk`` yazdıran programı
yazar mısın?

- files/main.js/.block
// Görev: isim değişkenine "Atatürk" metnini verip ekrana Atatürk yazdır.
// Metni çift tırnak içinde yaz: "Atatürk"; console.log(isim) tırnaksız olur.
// Beklenen çıktı:
// Atatürk
let isim = <<< ❓ >>>;
console.log(isim);
---------------------
- tests/0/output
Atatürk

---------------------
- parts/1:
- text
# ✅ Tebrikler

Tek tırnak (``'``) ve çift tırnak (``"``) aynı işi görür; ikisi de metin oluşturur.
Önemli olan açtığın tırnağı aynı türden kapatmaktır. İkisini karıştırırsan program hata
verir.

<code-view name="main.js" language="javascript">
const uygulama = 'kodluyo';
console.log(uygulama, "ile JavaScript öğreniyorum.");
</code-view>

<code-view name="Terminal" language="bash">
kodluyo ile JavaScript öğreniyorum.
</code-view>

# 🎯 2. Görev

``uygulama`` değişkenine tek tırnakla ``'kodluyo'`` metnini verip
``kodluyo ile JavaScript öğreniyorum.`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: uygulama değişkenine tek tırnakla 'kodluyo' metnini ver.
// console.log(uygulama, "...") iki değeri araya bir boşluk koyarak yazar.
// Beklenen çıktı:
// kodluyo ile JavaScript öğreniyorum.
const uygulama = <<< ❓ >>>;
console.log(uygulama, "ile JavaScript öğreniyorum.");
---------------------
- tests/0/output
kodluyo ile JavaScript öğreniyorum.

---------------------
- parts/2:
- text
# 📏 Metnin Uzunluğu: .length

``.length`` bir metnin kaç karakter olduğunu söyler. Bu bir metot değil özelliktir; bu
yüzden parantez koymayız. Boşluklar ve noktalama işaretleri de birer karakter sayılır.

<code-view name="main.js" language="javascript">
let metin = "JavaScript";
console.log(metin.length);
</code-view>

<code-view name="Terminal" language="bash">
10
</code-view>

# 🎯 3. Görev

``metin`` değişkenindeki ``"JavaScript"`` yazısının kaç karakter olduğunu terminale ``10``
olarak yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: "JavaScript" metninin kaç karakter olduğunu (10) yazdır.
// .length bir özelliktir; parantez koymadan metin.length biçiminde yazılır.
// Beklenen çıktı:
// 10
let metin = "JavaScript";
console.log(metin.<<< ❓ >>>);
---------------------
- tests/0/output
10

---------------------
- parts/3:
- text
# 🔤 Harflere Erişim: index

Metindeki her harfin bir sıra numarası (index) vardır ve saymaya ``0``'dan başlarız.
Köşeli parantez içine index yazarak istediğimiz harfi alabiliriz. ``"kodluyo"``
metninde ``0``. harf ``k``, ``6``. harf ``o`` olur.

<code-view name="main.js" language="javascript">
let kelime = "kodluyo";
console.log(kelime[0]);
console.log(kelime[6]);
</code-view>

<code-view name="Terminal" language="bash">
k
o
</code-view>

# 🎯 4. Görev

``kelime`` metninin ilk harfini ve son harfini alt alta yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: "kodluyo" metninin ilk harfini (k) ve son harfini (o) alt alta yazdır.
// Köşeli parantez içine index yaz: ilk harf 0, son harf 6 (saymaya 0'dan başlanır).
// Beklenen çıktı:
// k
// o
let kelime = "kodluyo";
console.log(kelime[<<< ❓ >>>]);
console.log(kelime[<<< ❓ >>>]);
---------------------
- tests/0/output
k
o

---------------------
- tests/1/files/main.js/.block
// Görev: "yazılım" metninin ilk harfini (y) ve son harfini (m) alt alta yazdır.
// İkinci test farklı kelimeyle aynı kuralı denetler: 0 ve 6 index'leri.
// Beklenen çıktı:
// y
// m
let kelime = "yazılım";
console.log(kelime[<<< ❓ >>>]);
console.log(kelime[<<< ❓ >>>]);
- tests/1/output
y
m

---------------------
- parts/4:
- text
# 🔠 Büyük / Küçük Harf

``.toUpperCase()`` metnin tüm harflerini büyütür, ``.toLowerCase()`` ise küçültür. Bu
metotlar metnin kendisini değiştirmez; yeni bir metin döndürür.

<code-view name="main.js" language="javascript">
let uygulama = "kodluyo";
console.log(uygulama.toUpperCase());
console.log("JAVASCRIPT".toLowerCase());
</code-view>

<code-view name="Terminal" language="bash">
KODLUYO
javascript
</code-view>

# 🎯 5. Görev

``uygulama`` metnini büyük harfe, ``"JAVASCRIPT"`` metnini küçük harfe çeviren programı
yazar mısın?

- files/main.js/.block
// Görev: "kodluyo" metnini büyük harfe, "JAVASCRIPT" metnini küçük harfe çevir.
// Büyütmek için toUpperCase(), küçültmek için toLowerCase() metotlarını kullan.
// Beklenen çıktı:
// KODLUYO
// javascript
let uygulama = "kodluyo";
console.log(uygulama.<<< ❓ >>>());
console.log("JAVASCRIPT".<<< ❓ >>>());
---------------------
- tests/0/output
KODLUYO
javascript

---------------------
- tests/1/files/main.js/.block
// Görev: "kitap" metnini büyük harfe, "KALEM" metnini küçük harfe çevir.
// İkinci test farklı metinlerle aynı kuralı denetler: toUpperCase, toLowerCase.
// Beklenen çıktı:
// KITAP
// kalem
let uygulama = "kitap";
console.log(uygulama.<<< ❓ >>>());
console.log("KALEM".<<< ❓ >>>());
- tests/1/output
KITAP
kalem

---------------------
- parts/5:
- text
# 🔎 İçinde Var mı? .includes()

``.includes()`` metnin içinde aradığımız parçanın olup olmadığını söyler. Sonuç ``true``
(doğru) ya da ``false`` (yanlış) olur. Arama büyük-küçük harfe duyarlıdır.

<code-view name="main.js" language="javascript">
let cümle = "JavaScript öğrenmek çok keyifli";
console.log(cümle.includes("keyifli"));
console.log(cümle.includes("Python"));
</code-view>

<code-view name="Terminal" language="bash">
true
false
</code-view>

# 🎯 6. Görev

``cümle`` içinde ``"keyifli"`` ve ``"Python"`` kelimelerinin geçip geçmediğini alt alta
yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: cümle içinde "keyifli" ve "Python" kelimelerinin olup olmadığını yazdır.
// .includes() metodu aradığı metin varsa true, yoksa false döndürür.
// Beklenen çıktı:
// true
// false
let cümle = "JavaScript öğrenmek çok keyifli";
console.log(cümle.<<< ❓ >>>("keyifli"));
console.log(cümle.<<< ❓ >>>("Python"));
---------------------
- tests/0/output
true
false

---------------------
- parts/6:
- text
# ✂️ Metni Kesmek: .slice()

``.slice(başlangıç, bitiş)`` metnin belirtilen aralığını alır. Başlangıç index'i dahil,
bitiş index'i dahil değildir. Böylece ``0`` ile ``4`` arasında ilk dört harfi alırız.

<code-view name="main.js" language="javascript">
let metin = "JavaScript101";
console.log(metin.slice(0, 4));
console.log(metin.slice(4, 10));
</code-view>

<code-view name="Terminal" language="bash">
Java
Script
</code-view>

# 🎯 7. Görev

``"JavaScript101"`` metninden ``Java`` ve ``Script`` parçalarını alt alta yazdıran
programı yazar mısın?

- files/main.js/.block
// Görev: "JavaScript101" metninden "Java" ve "Script" parçalarını alt alta yazdır.
// .slice(başlangıç, bitiş) kullan: başlangıç dahil, bitiş dahil değildir.
// Beklenen çıktı:
// Java
// Script
let metin = "JavaScript101";
console.log(metin.<<< ❓ >>>(0, 4));
console.log(metin.<<< ❓ >>>(4, 10));
---------------------
- tests/0/output
Java
Script

---------------------
- tests/1/files/main.js/.block
// Görev: "kodluyo2024" metninden "kodl" ve "uyo202" parçalarını yazdır.
// İkinci test farklı metinle aynı kuralı denetler: slice(0, 4) ve slice(4, 10).
// Beklenen çıktı:
// kodl
// uyo202
let metin = "kodluyo2024";
console.log(metin.<<< ❓ >>>(0, 4));
console.log(metin.<<< ❓ >>>(4, 10));
- tests/1/output
kodl
uyo202

---------------------
- parts/7:
- text
# 🧹 Boşlukları Temizleme: .trim()

``.trim()`` metnin başındaki ve sonundaki boşlukları siler. Metnin ortasındaki boşluklara
dokunmaz. Kullanıcıdan gelen metinlerdeki fazla boşlukları temizlemek için çok işe yarar.

<code-view name="main.js" language="javascript">
let metin = "   Ankara   ";
console.log(metin.trim());
</code-view>

<code-view name="Terminal" language="bash">
Ankara
</code-view>

# 🎯 8. Görev

``"   Ankara   "`` metninin başındaki ve sonundaki boşlukları silip terminale ``Ankara``
yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: "   Ankara   " metninin başındaki ve sonundaki boşlukları silip yazdır.
// .trim() metodu yalnızca baş ve sondaki boşlukları siler, ortadakine dokunmaz.
// Beklenen çıktı:
// Ankara
let metin = "   Ankara   ";
console.log(metin.<<< ❓ >>>());
---------------------
- tests/0/output
Ankara

---------------------
- tests/1/files/main.js/.block
// Görev: "   İzmir   " metninin başındaki ve sonundaki boşlukları silip yazdır.
// İkinci test farklı şehirle aynı kuralı denetler: .trim() metodu.
// Beklenen çıktı:
// İzmir
let metin = "   İzmir   ";
console.log(metin.<<< ❓ >>>());
- tests/1/output
İzmir

---------------------
- parts/8:
- text
# 🔁 Değiştirme: .replace()

``.replace(eski, yeni)`` metindeki bir parçayı başka bir parçayla değiştirir. Yalnızca ilk
eşleşmeyi değiştirir. Aradığı metin bulunamazsa metin olduğu gibi kalır.

<code-view name="main.js" language="javascript">
let cümle = "Ankara Türkiye'nin başkentidir.";
console.log(cümle.replace("Ankara", "İstanbul"));
</code-view>

<code-view name="Terminal" language="bash">
İstanbul Türkiye'nin başkentidir.
</code-view>

# 🎯 9. Görev

``cümle`` içindeki ``"Ankara"`` kelimesini ``"İstanbul"`` ile değiştirip yeni cümleyi
yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: cümle içindeki "Ankara" kelimesini "İstanbul" ile değiştir.
// .replace("Ankara", "İstanbul") yalnızca ilk eşleşmeyi değiştirir.
// Beklenen çıktı:
// İstanbul Türkiye'nin başkentidir.
let cümle = "Ankara Türkiye'nin başkentidir.";
console.log(cümle.<<< ❓ >>>("Ankara", "İstanbul"));
---------------------
- tests/0/output
İstanbul Türkiye'nin başkentidir.

---------------------
- tests/1/files/main.js/.block
// Görev: cümle içindeki "Ankara" kelimesini "İstanbul" ile değiştir.
// İkinci test farklı cümleyle aynı kuralı denetler: .replace() metodu.
// Beklenen çıktı:
// İstanbul Türkiye'nin en kalabalık şehridir.
let cümle = "Ankara Türkiye'nin en kalabalık şehridir.";
console.log(cümle.<<< ❓ >>>("Ankara", "İstanbul"));
- tests/1/output
İstanbul Türkiye'nin en kalabalık şehridir.

---------------------
- parts/9:
- text
# 🧩 Metni Parçalara Ayırma: .split()

``.split(ayırıcı)`` metni verilen ayırıcıya göre böler ve bir dizi (array) döndürür.
Virgülle ayrılmış bir listeyi tek tek elemanlara ayırmak için kullanırız.

<code-view name="main.js" language="javascript">
let iller = "Ankara,İstanbul,İzmir";
console.log(iller.split(","));
</code-view>

<code-view name="Terminal" language="bash">
[ 'Ankara', 'İstanbul', 'İzmir' ]
</code-view>

# 🎯 10. Görev

``"Ankara,İstanbul,İzmir"`` metnini virgülden ayırıp bir dizi olarak yazdıran programı
yazar mısın?

- files/main.js/.block
// Görev: "Ankara,İstanbul,İzmir" metnini virgülden ayırıp dizi olarak yazdır.
// .split(",") metni virgüllerden böler ve bir dizi döndürür.
// Beklenen çıktı:
// [ 'Ankara', 'İstanbul', 'İzmir' ]
let iller = "Ankara,İstanbul,İzmir";
console.log(iller.<<< ❓ >>>(","));
---------------------
- tests/0/output
[ 'Ankara', 'İstanbul', 'İzmir' ]

---------------------
- tests/1/files/main.js/.block
// Görev: "Bursa,Antalya" metnini virgülden ayırıp dizi olarak yazdır.
// İkinci test farklı listeyle aynı kuralı denetler: .split(",") metodu.
// Beklenen çıktı:
// [ 'Bursa', 'Antalya' ]
let iller = "Bursa,Antalya";
console.log(iller.<<< ❓ >>>(","));
- tests/1/output
[ 'Bursa', 'Antalya' ]

---------------------
- parts/10:
- text
# ➕ Metinleri Birleştirme

``+`` operatörü metinleri birleştirir. Değişkenleri ve sabit metinleri art arda ekleyerek
yeni bir cümle kurabiliriz. Araya boşluk koymak için ``" "`` metnini eklemeyi unutmayalım.

<code-view name="main.js" language="javascript">
let ad = "Mustafa";
let soyad = "Kemal";
console.log(ad + " " + soyad);
</code-view>

<code-view name="Terminal" language="bash">
Mustafa Kemal
</code-view>

# 🎯 11. Görev

``ad`` ve ``soyad`` değişkenlerini aralarına bir boşluk koyarak birleştirip
``Mustafa Kemal`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: ad ve soyad değişkenlerini araya bir boşluk koyarak "Mustafa Kemal" yap.
// İki boşluğa da + operatörünü yaz; araya " " metni eklenir.
// Beklenen çıktı:
// Mustafa Kemal
let ad = "Mustafa";
let soyad = "Kemal";
console.log(ad <<< ❓ >>> " " <<< ❓ >>> soyad);
---------------------
- tests/0/output
Mustafa Kemal

---------------------
- tests/1/files/main.js/.block
// Görev: ad ve soyad değişkenlerini araya bir boşluk koyarak "Aziz Sancar" yap.
// İkinci test farklı isimlerle aynı kuralı denetler: + operatörü ve " " metni.
// Beklenen çıktı:
// Aziz Sancar
let ad = "Aziz";
let soyad = "Sancar";
console.log(ad <<< ❓ >>> " " <<< ❓ >>> soyad);
- tests/1/output
Aziz Sancar

---------------------
- parts/11:
- text
# 🏆 Mini Tekrar

Öğrendiklerimizi birleştirelim: önce metnin başındaki ve sonundaki boşlukları temizliyoruz,
sonra büyük harfe çeviriyoruz ve son olarak harf sayısını yazdırıyoruz.

<code-view name="main.js" language="javascript">
let ad = "  kodluyo  ";
let temiz = ad.trim();
let büyük = temiz.toUpperCase();
console.log(büyük + " (" + temiz.length + " harf)");
</code-view>

<code-view name="Terminal" language="bash">
KODLUYO (7 harf)
</code-view>

# 🎯 12. Görev

``"  kodluyo  "`` metnini temizleyip büyük harfe çeviren ve harf sayısını
``KODLUYO (7 harf)`` biçiminde yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: "  kodluyo  " metnini temizleyip büyük harfe çevir ve harf sayısını yazdır.
// Sırasıyla .trim(), .toUpperCase() ve .length kullan; çıktı KODLUYO (7 harf) olur.
// Beklenen çıktı:
// KODLUYO (7 harf)
let ad = "  kodluyo  ";
let temiz = ad.<<< ❓ >>>();
let büyük = temiz.<<< ❓ >>>();
console.log(büyük + " (" + temiz.<<< ❓ >>> + " harf)");
---------------------
- tests/0/output
KODLUYO (7 harf)

---------------------
- tests/1/files/main.js/.block
// Görev: "  javascript  " metnini temizleyip büyük harfe çevir ve harf sayısını yazdır.
// İkinci test farklı metinle aynı kuralı denetler: trim(), toUpperCase(), length.
// Beklenen çıktı:
// JAVASCRIPT (10 harf)
let ad = "  javascript  ";
let temiz = ad.<<< ❓ >>>();
let büyük = temiz.<<< ❓ >>>();
console.log(büyük + " (" + temiz.<<< ❓ >>> + " harf)");
- tests/1/output
JAVASCRIPT (10 harf)

---------------------
