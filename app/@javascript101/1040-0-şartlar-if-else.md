- show_content = true
- show_editor = true
- show_terminal = true
- language = "javascript"
- title = "🚦 Şartlar : if / else / switch"
- run = "node main.js"

- parts/0:
- text
# 🚦 **if** : Koşul Doğruysa Çalış

``if`` (eğer) yapısı, parantez içindeki koşul ``true`` olduğunda süslü parantezlerin
içindeki kodu çalıştırır. Koşul ``false`` ise blok atlanır ve program aşağıdan devam eder.
Koşul yazarken karşılaştırma operatörlerini (``>``, ``<``, ``>=``, ``===``) kullanırız.

<code-view name="main.js" language="javascript">
let sıcaklık = 30;
if (sıcaklık > 25) {
  console.log("Hava çok sıcak.");
}
</code-view>

<code-view name="Terminal" language="bash">
Hava çok sıcak.
</code-view>

# 🎯 1. Görev

Sıcaklık ``25``'ten büyükse ``Hava çok sıcak.`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Sıcaklık 25'ten büyükse ekrana "Hava çok sıcak." yazdır.
// if parantezinde büyüktür operatörünü kullan: sıcaklık > 25
// Beklenen çıktı:
// Hava çok sıcak.
let sıcaklık = 30;
if (sıcaklık <<< ❓ >>> 25) {
  console.log("Hava çok sıcak.");
}
---------------------
- tests/0/output
Hava çok sıcak.

- tests/0/require = ">"

---------------------
- parts/1:
- text
# 🔀 **if / else** : Değilse

Koşul tutmadığında başka bir şey yapmak istiyorsak ``else`` (değilse) bloğunu kullanırız.
İkisinden yalnızca biri çalışır; asla ikisi birlikte çalışmaz. Bu yüzden çıktıda her
zaman tek bir satır görürüz.

<code-view name="main.js" language="javascript">
let sayı = 7;
if (sayı % 2 === 0) {
  console.log("Çift sayı");
} else {
  console.log("Tek sayı");
}
</code-view>

<code-view name="Terminal" language="bash">
Tek sayı
</code-view>

# 🎯 2. Görev

Sayı çift ise ``Çift sayı``, değilse ``Tek sayı`` yazdıran programı tamamlar mısın?

- files/main.js/.block
// Görev: Sayı çift ise "Çift sayı", değilse "Tek sayı" yazdır.
// Mod operatörünün sonucunu eşittir operatörüyle karşılaştır: sayı % 2 === 0
// Beklenen çıktı:
// Tek sayı
let sayı = 7;
if (sayı % 2 <<< ❓ >>> 0) {
  console.log("Çift sayı");
} else {
  console.log("Tek sayı");
}
---------------------
- tests/0/output
Tek sayı

---------------------
- tests/1/files/main.js/.block
// Görev: Sayı çift ise "Çift sayı", değilse "Tek sayı" yazdır.
// İkinci test çift sayıyla aynı kuralı denetler: sayı % 2 === 0
// Beklenen çıktı:
// Çift sayı
let sayı = 8;
if (sayı % 2 <<< ❓ >>> 0) {
  console.log("Çift sayı");
} else {
  console.log("Tek sayı");
}
- tests/1/output
Çift sayı

---------------------
- parts/2:
- text
# 🪜 **else if** : Birkaç İhtimal

İkiden fazla ihtimal varsa ``else if`` ile zincir kurarız. Program **yukarıdan aşağıya**
bakar ve ilk tutan koşulun bloğunu çalıştırıp zincirden çıkar. Hiçbiri tutmazsa en
sondaki ``else`` bloğu çalışır.

<code-view name="main.js" language="javascript">
let not = 75;
if (not >= 90) {
  console.log("Pekiyi");
} else if (not >= 70) {
  console.log("İyi");
} else {
  console.log("Orta");
}
</code-view>

<code-view name="Terminal" language="bash">
İyi
</code-view>

# 🎯 3. Görev

``90`` ve üzeri ``Pekiyi``, ``70`` ve üzeri ``İyi``, kalanlar ``Orta`` yazacak şekilde
koşulları tamamlar mısın?

- files/main.js/.block
// Görev: 90 ve üzeri "Pekiyi", 70 ve üzeri "İyi", kalanlar "Orta" yazsın.
// İki koşulda da büyük veya eşit operatörünü kullan: not >= 90 ve not >= 70
// Beklenen çıktı:
// İyi
let not = 75;
if (not <<< ❓ >>> 90) {
  console.log("Pekiyi");
} else if (not <<< ❓ >>> 70) {
  console.log("İyi");
} else {
  console.log("Orta");
}
---------------------
- tests/0/output
İyi

---------------------
- tests/1/files/main.js/.block
// Görev: 90 ve üzeri "Pekiyi", 70 ve üzeri "İyi", kalanlar "Orta" yazsın.
// İkinci test 95 puanla ilk koşulun tuttuğunu denetler: not >= 90
// Beklenen çıktı:
// Pekiyi
let not = 95;
if (not <<< ❓ >>> 90) {
  console.log("Pekiyi");
} else if (not <<< ❓ >>> 70) {
  console.log("İyi");
} else {
  console.log("Orta");
}
- tests/1/output
Pekiyi

---------------------
- parts/3:
- text
# 🔗 Koşulları Birleştirmek

Bir koşulun **iki şartı birlikte** sağlamasını istiyorsak ``&&`` (ve) operatörünü
kullanırız. ``yaş >= 18 && ehliyet`` ifadesi yalnızca iki taraf da doğruysa ``true``
olur. Mantıksal operatörlerin ayrıntılarını önceki derslerde görmüştük.

<code-view name="main.js" language="javascript">
let yaş = 25;
let ehliyet = true;
if (yaş >= 18 && ehliyet) {
  console.log("Araba kullanabilirsin.");
}
</code-view>

<code-view name="Terminal" language="bash">
Araba kullanabilirsin.
</code-view>

# 🎯 4. Görev

Yaş ``18`` ve üzeri **ve** ehliyeti varsa ``Araba kullanabilirsin.`` yazdıran programı
tamamlar mısın?

- files/main.js/.block
// Görev: Yaş 18 ve üzeri VE ehliyeti varsa "Araba kullanabilirsin." yazdır.
// İki koşulu ve operatörüyle birleştir: yaş >= 18 && ehliyet
// Beklenen çıktı:
// Araba kullanabilirsin.
let yaş = 25;
let ehliyet = true;
if (yaş <<< ❓ >>> 18 <<< ❓ >>> ehliyet) {
  console.log("Araba kullanabilirsin.");
}
---------------------
- tests/0/output
Araba kullanabilirsin.

- tests/0/require = "&&"

---------------------
- parts/4:
- text
# 🪆 İç İçe **if**

``if`` bloklarının içine yeni ``if`` blokları yazabiliriz. Dış koşul sağlanmadan iç
koşula hiç bakılmaz. İç içe yapılarda girintiyi (indentation) artırmak kodu okunur kılar;
böylece hangi blok nereye ait, hemen görürüz.

<code-view name="main.js" language="javascript">
let puan = 85;
let üye = true;
if (puan >= 80) {
  if (üye) {
    console.log("İndirim kazandın!");
  } else {
    console.log("Üye ol, indirim kazan.");
  }
} else {
  console.log("Biraz daha çalış.");
}
</code-view>

<code-view name="Terminal" language="bash">
İndirim kazandın!
</code-view>

# 🎯 5. Görev

Puan ``80`` ve üzeriyse içeri girsin; içeride ``üye`` ise ``İndirim kazandın!`` yazsın.
Eksik iki yeri tamamlar mısın?

- files/main.js/.block
// Görev: Puan 80 ve üzeriyse içeri gir; üye ise "İndirim kazandın!" yazdır.
// Dış koşulda büyük veya eşit operatörünü kullan (puan >= 80); iç koşula üye değişkenini yaz.
// Beklenen çıktı:
// İndirim kazandın!
let puan = 85;
let üye = true;
if (puan <<< ❓ >>> 80) {
  if (<<< ❓ >>>) {
    console.log("İndirim kazandın!");
  } else {
    console.log("Üye ol, indirim kazan.");
  }
} else {
  console.log("Biraz daha çalış.");
}
---------------------
- tests/0/output
İndirim kazandın!

---------------------
- parts/5:
- text
# ❓ Üçlü Operatör (**? :**)

Basit bir ``if / else`` yerine tek satırda karar verebiliriz:
``koşul ? doğruysa : yanlışsa``. Üçlü operatörün (ternary operator) sonucu bir değerdir,
bu yüzden onu doğrudan bir değişkene atayabiliriz.

<code-view name="main.js" language="javascript">
let yaş = 20;
let durum = yaş >= 18 ? "Yetişkin" : "Çocuk";
console.log(durum);
</code-view>

<code-view name="Terminal" language="bash">
Yetişkin
</code-view>

# 🎯 6. Görev

``yaş`` ``18`` ve üzeriyse ``Yetişkin``, değilse ``Çocuk`` değerini üreten programı
tamamlar mısın?

- files/main.js/.block
// Görev: Yaş 18 ve üzeriyse "Yetişkin", değilse "Çocuk" değerini üret.
// Üçlü operatörün iki işaretini yaz: koşul ? doğruysa : yanlışsa
// Beklenen çıktı:
// Yetişkin
let yaş = 20;
let durum = yaş >= 18 <<< ❓ >>> "Yetişkin" <<< ❓ >>> "Çocuk";
console.log(durum);
---------------------
- tests/0/output
Yetişkin

- tests/0/require/0 = "?"
- tests/0/require/1 = ":"

---------------------
- tests/1/files/main.js/.block
// Görev: Yaş 18 ve üzeriyse "Yetişkin", değilse "Çocuk" değerini üret.
// İkinci test 15 yaşla üçlü operatörün yanlış dalını denetler: ? ve :
// Beklenen çıktı:
// Çocuk
let yaş = 15;
let durum = yaş >= 18 <<< ❓ >>> "Yetişkin" <<< ❓ >>> "Çocuk";
console.log(durum);
- tests/1/output
Çocuk

- tests/1/require/0 = "?"
- tests/1/require/1 = ":"

---------------------
- parts/6:
- text
# 🖨️ Üçlü Operatörü **console.log** İçinde Kullanmak

Üçlü operatörü doğrudan ``console.log`` içine de yazabiliriz; ayrı bir değişkene gerek
kalmaz. Aşağıdaki örnekte sayı çiftse ``Çift``, tekse ``Tek`` yazdırıyoruz.

<code-view name="main.js" language="javascript">
let sayı = 7;
console.log(sayı % 2 === 0 ? "Çift" : "Tek");
</code-view>

<code-view name="Terminal" language="bash">
Tek
</code-view>

# 🎯 7. Görev

``console.log`` içindeki koşulu tamamlayıp tek sayılar için ``Tek`` yazdıran programı
yazar mısın?

- files/main.js/.block
// Görev: console.log içindeki üçlü operatörle tek sayı için "Tek" yazdır.
// Mod sonucunu eşittir operatörüyle sıfıra karşılaştır: sayı % 2 === 0
// Beklenen çıktı:
// Tek
let sayı = 7;
console.log(sayı % 2 <<< ❓ >>> 0 ? "Çift" : "Tek");
---------------------
- tests/0/output
Tek

---------------------
- tests/1/files/main.js/.block
// Görev: console.log içindeki üçlü operatörle çift sayı için "Çift" yazdır.
// İkinci test çift sayıyı denetler; karşılaştırma yine sayı % 2 === 0
// Beklenen çıktı:
// Çift
let sayı = 10;
console.log(sayı % 2 <<< ❓ >>> 0 ? "Çift" : "Tek");
- tests/1/output
Çift

---------------------
- parts/7:
- text
# 🔘 **switch / case / break**

Tek bir değere göre çok sayıda ihtimali ayırmak için ``switch`` kullanırız.
``case`` değerlerinden biri eşleşirse altındaki kod çalışır. ``break`` ise o case'den
çıkmamızı sağlar; unutursak program aşağıdaki case'lere de devam eder.

<code-view name="main.js" language="javascript">
let gün = 3;
switch (gün) {
  case 1:
    console.log("Pazartesi");
    break;
  case 3:
    console.log("Çarşamba");
    break;
  default:
    console.log("Bilinmeyen gün");
}
</code-view>

<code-view name="Terminal" language="bash">
Çarşamba
</code-view>

# 🎯 8. Görev

``gün`` ``3`` olduğunda ``Çarşamba`` yazdıran switch yapısını tamamlar mısın?

- files/main.js/.block
// Görev: gün 3 olduğunda "Çarşamba" yazdıran switch yapısını tamamla.
// Değer eşleştirmesi için case, case'den çıkmak için break anahtar kelimesini yaz.
// Beklenen çıktı:
// Çarşamba
let gün = 3;
switch (gün) {
  <<< ❓ >>> 3:
    console.log("Çarşamba");
    <<< ❓ >>>;
  default:
    console.log("Bilinmeyen gün");
}
---------------------
- tests/0/output
Çarşamba

---------------------
- parts/8:
- text
# 🛟 **default** : Hiçbiri Uymazsa

Hiçbir ``case`` eşleşmezse ``default`` bloğu çalışır. ``switch`` içinde ``default``
genellikle en sonda yazılır ve ``if / else`` zincirindeki son ``else`` gibi düşünülebilir.
``break`` yazmaya gerek yoktur; zaten son bloktur.

<code-view name="main.js" language="javascript">
let meyve = "karpuz";
switch (meyve) {
  case "elma":
    console.log("Kırmızı");
    break;
  case "muz":
    console.log("Sarı");
    break;
  default:
    console.log("Rengi bilinmiyor");
}
</code-view>

<code-view name="Terminal" language="bash">
Rengi bilinmiyor
</code-view>

# 🎯 9. Görev

``karpuz`` hiçbir case'e uymadığı için ``Rengi bilinmiyor`` yazsın. İki anahtar kelimeyi
yerleştirir misin?

- files/main.js/.block
// Görev: karpuz hiçbir case'e uymadığı için "Rengi bilinmiyor" yazsın.
// İlk eşleşme için case, eşleşme olmazsa çalışacak blok için default yaz.
// Beklenen çıktı:
// Rengi bilinmiyor
let meyve = "karpuz";
switch (meyve) {
  <<< ❓ >>> "elma":
    console.log("Kırmızı");
    break;
  <<< ❓ >>>:
    console.log("Rengi bilinmiyor");
}
---------------------
- tests/0/output
Rengi bilinmiyor

---------------------
- parts/9:
- text
# 🕳️ Truthy ve Falsy : Boş Değerler

``if`` parantezine mutlaka bir karşılaştırma yazmak zorunda değiliz; bir değerin kendisini
de yazabiliriz. JavaScript'te ``false``, ``0``, ``""`` (boş metin), ``null``,
``undefined`` ve ``NaN`` değerleri **falsy**'dir; yani ``if`` içinde ``false`` gibi
davranır. Geri kalan her şey **truthy**'dir.

<code-view name="main.js" language="javascript">
let mesaj = "";
if (mesaj) {
  console.log("Mesaj dolu.");
} else {
  console.log("Mesaj boş.");
}
</code-view>

<code-view name="Terminal" language="bash">
Mesaj boş.
</code-view>

# 🎯 10. Görev

``mesaj`` boş metin olduğu için ``Mesaj boş.`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: mesaj boş metin olduğu için "Mesaj boş." yazsın.
// Boş metni çift tırnakla yaz: mesaj = ""
// Beklenen çıktı:
// Mesaj boş.
let mesaj = <<< ❓ >>>;
if (mesaj) {
  console.log("Mesaj dolu.");
} else {
  console.log("Mesaj boş.");
}
---------------------
- tests/0/output
Mesaj boş.

- tests/0/require = "\"\""

---------------------
- parts/10:
- text
# 🔎 **Boolean()** ile Değerleri Test Etmek

``Boolean(değer)`` bir değeri ``true`` ya da ``false`` a çevirir ve bize truthy mi falsy mi
olduğunu gösterir. İlginç bir nokta: ``0`` sayısı falsy, ama ``"0"`` metni truthy'dir.
Boş dizi ``[]`` de truthy'dir; çünkü dolu bir nesnedir.

<code-view name="main.js" language="javascript">
console.log(Boolean(0));
console.log(Boolean("0"));
console.log(Boolean([]));
</code-view>

<code-view name="Terminal" language="bash">
false
true
true
</code-view>

# 🎯 11. Görev

Sırasıyla ``0`` sayısı, ``"0"`` metni ve boş dizi için ``Boolean()`` sonucunu yazdıran
programı tamamlar mısın?

- files/main.js/.block
// Görev: Sırasıyla 0 sayısı, "0" metni ve boş dizi için Boolean() sonucunu yazdır.
// console.log(Boolean(...)) içine önce 0, sonra "0" metnini, sonra [] yaz.
// Beklenen çıktı:
// false
// true
// true
console.log(Boolean(<<< ❓ >>>));
console.log(Boolean(<<< ❓ >>>));
console.log(Boolean(<<< ❓ >>>));
---------------------
- tests/0/output
false
true
true

---------------------
- parts/11:
- text
# 🏆 Mini Tekrar

Her şeyi birleştirelim: üçlü operatörle bir harf notu bulalım, sonra ``switch`` ile o
nota göre mesaj yazdıralım. Böylece ``if / else`` yerine kullanılan iki pratik aracı
birlikte görmüş olacağız.

<code-view name="main.js" language="javascript">
let puan = 92;
let harf = puan >= 90 ? "A" : "B";
switch (harf) {
  case "A":
    console.log("Mükemmel!");
    break;
  default:
    console.log("İyi.");
}
</code-view>

<code-view name="Terminal" language="bash">
Mükemmel!
</code-view>

# 🎯 12. Görev

``92`` puanla ``Mükemmel!`` yazdıran programı tamamlar mısın?

- files/main.js/.block
// Görev: 92 puanla "Mükemmel!" yazdır: üçlü operatörle harf bul, switch ile yazdır.
// Üçlü operatörde ? ve : kullan; switch içinde "A" değeri için case yaz.
// Beklenen çıktı:
// Mükemmel!
let puan = 92;
let harf = puan >= 90 <<< ❓ >>> "A" <<< ❓ >>> "B";
switch (harf) {
  <<< ❓ >>> "A":
    console.log("Mükemmel!");
    break;
  default:
    console.log("İyi.");
}
---------------------
- tests/0/output
Mükemmel!

- tests/0/require = "?"

---------------------
