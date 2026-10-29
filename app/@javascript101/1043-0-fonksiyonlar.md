- show_content = true
- show_editor = true
- show_terminal = true
- language = "javascript"
- title = "🧩 Fonksiyonlar"
- run = "node main.js"

- parts/0:
- text
# 🧩 **function** : Kendi Komutunu Tanımla

Fonksiyon, bir işi yapan kod parçasına isim vermektir. ``function`` anahtar kelimesiyle
tanımlarız, sonra adını ve parantezi yazarak **çağırırız**. Tanımlamak kodu sadece
hazırlar; çalışması için çağırman gerekir.

<code-view name="main.js" language="javascript">
function selamla() {
  console.log("Merhaba dünya!");
}
selamla();
</code-view>

<code-view name="Terminal" language="bash">
Merhaba dünya!
</code-view>

# 🎯 1. Görev

Çağrıldığında ``Merhaba dünya!`` yazan ``selamla`` fonksiyonunu tanımlar mısın? İsim
tanımla çağrının aynı olması gerekiyor.

- files/main.js/.block
// Görev: Çağrıldığında "Merhaba dünya!" yazan selamla fonksiyonunu tanımla.
// function anahtar kelimesinden sonra fonksiyonun adını yaz: function selamla()
// Ad, en alttaki selamla() çağrısıyla birebir aynı olmalı.
// Beklenen çıktı:
// Merhaba dünya!
function <<< ❓ >>>() {
  console.log("Merhaba dünya!");
}
selamla();
---------------------
- tests/0/output
Merhaba dünya!

---------------------
- parts/1:
- text
# 📨 Parametre : Fonksiyona Bilgi Ver

Fonksiyona dışarıdan bilgi göndermek için **parametre** kullanırız. ``selamla(isim)``
tanımında ``isim`` bir parametredir; fonksiyonu ``selamla("Ayşe")`` diye çağırınca ``isim``
değişkeninin içine ``"Ayşe"`` konur. Aynı fonksiyonu farklı değerlerle tekrar tekrar
kullanabiliriz.

<code-view name="main.js" language="javascript">
function selamla(isim) {
  console.log("Merhaba " + isim + "!");
}
selamla("Ayşe");
selamla("Mehmet");
</code-view>

<code-view name="Terminal" language="bash">
Merhaba Ayşe!
Merhaba Mehmet!
</code-view>

# 🎯 2. Görev

Adı parametre olarak alan ``selamla`` fonksiyonunu yazar mısın?

- files/main.js/.block
// Görev: Adı parametre olarak alan selamla fonksiyonunu tamamla.
// Parantez içine parametre adını yaz: function selamla(isim)
// Gövdedeki "Merhaba " + isim + "!" ifadesi bu parametreyi kullanıyor.
// Beklenen çıktı:
// Merhaba Ayşe!
// Merhaba Mehmet!
function selamla(<<< ❓ >>>) {
  console.log("Merhaba " + isim + "!");
}
selamla("Ayşe");
selamla("Mehmet");
---------------------
- tests/0/output
Merhaba Ayşe!
Merhaba Mehmet!

---------------------
- parts/2:
- text
# 🔙 **return** : Değer Geri Döndür

``return`` fonksiyonun ürettiği sonucu çağıran yere geri verir. Böylece sonucu bir
değişkende saklayabilir ya da başka bir hesapta kullanabiliriz. ``return`` gördüğü anda
fonksiyon biter, altındaki satırlar çalışmaz.

<code-view name="main.js" language="javascript">
function topla(a, b) {
  return a + b;
}
console.log(topla(3, 5));
console.log(topla(10, 20));
</code-view>

<code-view name="Terminal" language="bash">
8
30
</code-view>

# 🎯 3. Görev

İki sayının toplamını ``return`` ile geri döndüren fonksiyonu yazar mısın?

- files/main.js/.block
// Görev: İki sayının toplamını return ile geri döndür.
// İki parametreyi toplamak için artı operatörünü yaz: return a + b
// Beklenen çıktı:
// 8
// 30
function topla(a, b) {
  return a <<< ❓ >>> b;
}
console.log(topla(3, 5));
console.log(topla(10, 20));
---------------------
- tests/0/output
8
30

---------------------
- tests/1/files/main.js/.block
// Görev: İki sayının toplamını return ile geri döndür.
// İkinci test farklı sayılarla aynı kuralı denetler: return a + b
// Beklenen çıktı:
// 9
// 2
function topla(a, b) {
  return a <<< ❓ >>> b;
}
console.log(topla(7, 2));
console.log(topla(1, 1));
- tests/1/output
9
2

---------------------
- parts/3:
- text
# 📦 Dönen Değeri Kullanmak

``return`` ile dönen değeri bir değişkene alabiliriz. ``let sonuç = kare(6);`` satırında
``kare`` fonksiyonu çalışır, ``36`` döner ve ``sonuç`` değişkenine konur. ⚠️ ``return``
yazmayı unutursan fonksiyon ``undefined`` döndürür.

<code-view name="main.js" language="javascript">
function kare(x) {
  return x * x;
}
let sonuç = kare(6);
console.log("Kare:", sonuç);
</code-view>

<code-view name="Terminal" language="bash">
Kare: 36
</code-view>

# 🎯 4. Görev

Sayının karesini döndüren fonksiyonu yazar mısın?

- files/main.js/.block
// Görev: Sayının karesini return ile geri döndür.
// x değişkenini kendisiyle çarpmak için çarpma operatörünü yaz: return x * x
// Beklenen çıktı:
// Kare: 36
function kare(x) {
  return x <<< ❓ >>> x;
}
let sonuç = kare(6);
console.log("Kare:", sonuç);
---------------------
- tests/0/output
Kare: 36

---------------------
- tests/1/files/main.js/.block
// Görev: Sayının karesini return ile geri döndür.
// İkinci test farklı sayıyla aynı kuralı denetler: return x * x
// Beklenen çıktı:
// Kare: 81
function kare(x) {
  return x <<< ❓ >>> x;
}
let sonuç = kare(9);
console.log("Kare:", sonuç);
- tests/1/output
Kare: 81

---------------------
- parts/4:
- text
# 🎁 Varsayılan Parametre

Parametreye ``=`` ile bir başlangıç değeri verebiliriz. Çağırırken değer gönderilmezse
varsayılan değer kullanılır; gönderilirse gönderilen değer geçerli olur. Bu sayede
fonksiyon hem boş hem dolu çağrılarda çalışır.

<code-view name="main.js" language="javascript">
function selamla(isim = "misafir") {
  console.log("Merhaba " + isim + "!");
}
selamla();
selamla("Zeynep");
</code-view>

<code-view name="Terminal" language="bash">
Merhaba misafir!
Merhaba Zeynep!
</code-view>

# 🎯 5. Görev

Değer verilmezse ``"misafir"`` kullanan fonksiyonu yazar mısın?

- files/main.js/.block
// Görev: Değer verilmezse "misafir" kullanan selamla fonksiyonunu tamamla.
// Varsayılan değeri eşittir işaretiyle ver: function selamla(isim = "misafir")
// Beklenen çıktı:
// Merhaba misafir!
// Merhaba Zeynep!
function selamla(isim <<< ❓ >>> "misafir") {
  console.log("Merhaba " + isim + "!");
}
selamla();
selamla("Zeynep");
---------------------
- tests/0/output
Merhaba misafir!
Merhaba Zeynep!

---------------------
- tests/1/files/main.js/.block
// Görev: Değer verilmezse "konuk" kullanan selamla fonksiyonunu tamamla.
// İkinci test varsayılan değeri farklı kelimeyle denetler: isim = "konuk"
// Beklenen çıktı:
// Merhaba konuk!
// Merhaba Can!
function selamla(isim <<< ❓ >>> "konuk") {
  console.log("Merhaba " + isim + "!");
}
selamla();
selamla("Can");
- tests/1/output
Merhaba konuk!
Merhaba Can!

---------------------
- parts/5:
- text
# ♾️ **Rest** Parametre : ``...``

Bir fonksiyona kaç tane argüman geleceğini bilmiyorsak ``...`` (rest) kullanırız.
``...sayılar`` gelen bütün değerleri bir **dizi** içinde toplar. İçeride ``for...of`` ile
bu diziyi dolaşıp toplamı hesaplayabiliriz.

<code-view name="main.js" language="javascript">
function topla(...sayılar) {
  let toplam = 0;
  for (const sayı of sayılar) {
    toplam += sayı;
  }
  return toplam;
}
console.log(topla(1, 2, 3));
console.log(topla(4, 5, 6, 7));
</code-view>

<code-view name="Terminal" language="bash">
6
22
</code-view>

# 🎯 6. Görev

Kaç argüman gelirse gelsin hepsini toplayan fonksiyonu yazar mısın?

- files/main.js/.block
// Görev: Kaç argüman gelirse gelsin hepsini toplayan fonksiyonu tamamla.
// Rest parametre için üç noktayı yaz: function topla(...sayılar)
// Gelen bütün değerler sayılar adlı dizide toplanır.
// Beklenen çıktı:
// 6
// 22
function topla(<<< ❓ >>>sayılar) {
  let toplam = 0;
  for (const sayı of sayılar) {
    toplam += sayı;
  }
  return toplam;
}
console.log(topla(1, 2, 3));
console.log(topla(4, 5, 6, 7));
---------------------
- tests/0/output
6
22

---------------------
- tests/1/files/main.js/.block
// Görev: Kaç argüman gelirse gelsin hepsini toplayan fonksiyonu tamamla.
// İkinci test farklı argüman sayısıyla aynı kuralı denetler: ...sayılar
// Beklenen çıktı:
// 30
// 1
function topla(<<< ❓ >>>sayılar) {
  let toplam = 0;
  for (const sayı of sayılar) {
    toplam += sayı;
  }
  return toplam;
}
console.log(topla(10, 20));
console.log(topla(1));
- tests/1/output
30
1

---------------------
- parts/6:
- text
# 🫥 Kapsam (scope) : İçeride mi, Dışarıda mı?

Fonksiyonun içinde ``let`` ile tanımlanan değişken yalnızca o fonksiyonun içinde yaşar.
Aynı ismi dışarıda tanımlarsak iki ayrı değişken olur ve birbirlerini ezmezler. Fonksiyon
bittiğinde içerideki değişken yok olur.

<code-view name="main.js" language="javascript">
let mesaj = "dışarıda";
function göster() {
  let mesaj = "içeride";
  console.log(mesaj);
}
göster();
console.log(mesaj);
</code-view>

<code-view name="Terminal" language="bash">
içeride
dışarıda
</code-view>

# 🎯 7. Görev

Fonksiyonun içinde aynı isimde bir değişken tanımlayıp kapsamı gösteren programı yazar
mısın?

- files/main.js/.block
// Görev: Fonksiyonun içinde aynı isimde değişken tanımlayıp kapsamı göster.
// let ile içeride yeni bir mesaj değişkeni tanımla: let mesaj = "içeride"
// Böylece fonksiyonun dışındaki mesaj değişkeni ezilmez.
// Beklenen çıktı:
// içeride
// dışarıda
let mesaj = "dışarıda";
function göster() {
  let <<< ❓ >>> = "içeride";
  console.log(mesaj);
}
göster();
console.log(mesaj);
---------------------
- tests/0/output
içeride
dışarıda

---------------------
- parts/7:
- text
# 🌀 Özyineleme : Kendini Çağıran Fonksiyon

Bir fonksiyonun kendi kendini çağırmasına **özyineleme** (recursion) denir. Faktöriyelin
tanımı buna çok uygundur: ``5! = 5 * 4!``. Durdurma koşulu (``n <= 1``) olmazsa fonksiyon
sonsuza kadar kendini çağırır, bu yüzden o koşul zorunludur.

<code-view name="main.js" language="javascript">
function faktöriyel(n) {
  if (n <= 1) {
    return 1;
  }
  return n * faktöriyel(n - 1);
}
console.log(faktöriyel(5));
</code-view>

<code-view name="Terminal" language="bash">
120
</code-view>

# 🎯 8. Görev

Faktöriyeli özyineleme ile hesaplayan fonksiyonu yazar mısın?

- files/main.js/.block
// Görev: Faktöriyeli özyineleme ile hesaplayan fonksiyonu tamamla.
// n ile faktöriyel(n - 1) sonucunu çarpmak için çarpma operatörünü yaz: n * faktöriyel(n - 1)
// Durdurma koşulu (n <= 1) zaten yazılı olduğu için fonksiyon sonsuza gitmez.
// Beklenen çıktı:
// 120
function faktöriyel(n) {
  if (n <= 1) {
    return 1;
  }
  return n <<< ❓ >>> faktöriyel(n - 1);
}
console.log(faktöriyel(5));
---------------------
- tests/0/output
120

---------------------
- tests/1/files/main.js/.block
// Görev: Faktöriyeli özyineleme ile hesaplayan fonksiyonu tamamla.
// İkinci test farklı sayıyla aynı kuralı denetler: n * faktöriyel(n - 1)
// Beklenen çıktı:
// 24
function faktöriyel(n) {
  if (n <= 1) {
    return 1;
  }
  return n <<< ❓ >>> faktöriyel(n - 1);
}
console.log(faktöriyel(4));
- tests/1/output
24

---------------------
- parts/8:
- text
# 🔔 Geri Çağırma (callback)

Bir fonksiyonu başka bir fonksiyona **argüman** olarak verebiliriz. Parametreye gelen
fonksiyona sonradan çağrıldığı için **geri çağırma** (callback) denir. Parantezsiz yazmak
önemlidir: ``zıpla`` fonksiyonun kendisini verir, ``zıpla()`` ise hemen çağırır.

<code-view name="main.js" language="javascript">
function ikiKereYap(işlem) {
  işlem();
  işlem();
}
function zıpla() {
  console.log("Zıpla!");
}
ikiKereYap(zıpla);
</code-view>

<code-view name="Terminal" language="bash">
Zıpla!
Zıpla!
</code-view>

# 🎯 9. Görev

``ikiKereYap`` fonksiyonuna ``zıpla`` fonksiyonunu argüman olarak verir misin?

- files/main.js/.block
// Görev: ikiKereYap fonksiyonuna zıpla fonksiyonunu argüman olarak ver.
// Fonksiyonu PARANTEZSİZ yaz: ikiKereYap(zıpla)
// Parantezli yazsan fonksiyon hemen çalışır ve sonucu gönderilir.
// Beklenen çıktı:
// Zıpla!
// Zıpla!
function ikiKereYap(işlem) {
  işlem();
  işlem();
}
function zıpla() {
  console.log("Zıpla!");
}
ikiKereYap(<<< ❓ >>>);
---------------------
- tests/0/output
Zıpla!
Zıpla!

---------------------
- parts/9:
- text
# 🧮 Callback'e Parametre Geçmek

Callback de bir fonksiyondur, bu yüzden ona da değer gönderebiliriz. ``uygula(sayı, işlem)``
fonksiyonu aldığı sayıyı ``işlem`` fonksiyonuna verir ve sonucu geri döndürür. Böylece tek
bir fonksiyonla farklı işlemleri çalıştırabiliriz.

<code-view name="main.js" language="javascript">
function uygula(sayı, işlem) {
  return işlem(sayı);
}
function karesi(x) {
  return x * x;
}
console.log(uygula(5, karesi));
</code-view>

<code-view name="Terminal" language="bash">
25
</code-view>

# 🎯 10. Görev

Aldığı sayıyı callback'e veren ``uygula`` fonksiyonunu tamamlar mısın?

- files/main.js/.block
// Görev: Aldığı sayıyı callback fonksiyona veren uygula fonksiyonunu tamamla.
// işlem fonksiyonuna sayı değişkenini argüman olarak geçir: işlem(sayı)
// Beklenen çıktı:
// 25
function uygula(sayı, işlem) {
  return işlem(<<< ❓ >>>);
}
function karesi(x) {
  return x * x;
}
console.log(uygula(5, karesi));
---------------------
- tests/0/output
25

---------------------
- tests/1/files/main.js/.block
// Görev: Aldığı sayıyı callback fonksiyona veren uygula fonksiyonunu tamamla.
// İkinci test farklı sayıyla aynı kuralı denetler: işlem(sayı)
// Beklenen çıktı:
// 36
function uygula(sayı, işlem) {
  return işlem(<<< ❓ >>>);
}
function karesi(x) {
  return x * x;
}
console.log(uygula(6, karesi));
- tests/1/output
36

---------------------
- parts/10:
- text
# 🏆 Mini Tekrar : Ortalama Fonksiyonu

Şimdiye kadarki her şeyi birleştirelim: bir fonksiyon, içinde ``for...of`` döngüsü ve
``return`` ile sonuç döndürme. Fonksiyon artık tekrar kullanılabilir bir araç oldu;
``ortalamaAl([5, 10, 15])`` çağrısı aynı kodu yeniden yazmadan sonuç verir.

<code-view name="main.js" language="javascript">
function ortalamaAl(sayılar) {
  let toplam = 0;
  for (const sayı of sayılar) {
    toplam += sayı;
  }
  return toplam / sayılar.length;
}
console.log("Ortalama:", ortalamaAl([10, 20, 30, 40]));
</code-view>

<code-view name="Terminal" language="bash">
Ortalama: 25
</code-view>

# 🎯 11. Görev

Dizinin ortalamasını döndüren fonksiyonu yazar mısın?

- files/main.js/.block
// Görev: Dizinin ortalamasını döndüren ortalamaAl fonksiyonunu tamamla.
// Toplamı eleman sayısına bölmek için bölme operatörünü yaz: toplam / sayılar.length
// Beklenen çıktı:
// Ortalama: 25
function ortalamaAl(sayılar) {
  let toplam = 0;
  for (const sayı of sayılar) {
    toplam += sayı;
  }
  return toplam <<< ❓ >>> sayılar.length;
}
console.log("Ortalama:", ortalamaAl([10, 20, 30, 40]));
---------------------
- tests/0/output
Ortalama: 25

---------------------
- tests/1/files/main.js/.block
// Görev: Dizinin ortalamasını döndüren ortalamaAl fonksiyonunu tamamla.
// İkinci test farklı diziyle aynı kuralı denetler: toplam / sayılar.length
// Beklenen çıktı:
// Ortalama: 10
function ortalamaAl(sayılar) {
  let toplam = 0;
  for (const sayı of sayılar) {
    toplam += sayı;
  }
  return toplam <<< ❓ >>> sayılar.length;
}
console.log("Ortalama:", ortalamaAl([5, 10, 15]));
- tests/1/output
Ortalama: 10

---------------------
