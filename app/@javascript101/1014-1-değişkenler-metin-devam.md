- show_content = true
- show_editor = true
- show_terminal = true
- language = "javascript"
- title = "💬 Değişkenler string : Metin Devam"
- run = "node main.js"

- parts/0:
- text
# 🎯 Şablon Metin (template literal)

Metinleri ters tırnak (backtick) `` ` `` ile de yazabiliriz. Bu biçime şablon metin denir
ve içine ``${ifade}`` yazarak değişkenleri doğrudan yerleştirebiliriz. Böylece ``+`` ile
parça parça birleştirmek zorunda kalmayız.

<code-view name="main.js" language="javascript">
let ad = "Mustafa";
let yaş = 7;
console.log(`${ad} ${yaş} yaşında.`);
</code-view>

<code-view name="Terminal" language="bash">
Mustafa 7 yaşında.
</code-view>

# 🎯 1. Görev

``ad`` ve ``yaş`` değişkenlerini şablon metin içinde kullanıp ``Mustafa 7 yaşında.``
yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: ad ve yaş değişkenlerini şablon metin içinde kullanıp yazdır.
// ${...} içine sırasıyla ad ve yaş değişkenlerini yaz; metin ters tırnak içindedir.
// Beklenen çıktı:
// Mustafa 7 yaşında.
let ad = "Mustafa";
let yaş = 7;
console.log(`${<<< ❓ >>>} ${<<< ❓ >>>} yaşında.`);
---------------------
- tests/0/output
Mustafa 7 yaşında.

---------------------
- tests/1/files/main.js/.block
// Görev: ad ve yaş değişkenlerini şablon metin içinde kullanıp yazdır.
// İkinci test farklı değerlerle aynı kuralı denetler: ${ad} ${yaş} yerleştirmesi.
// Beklenen çıktı:
// Fatma 9 yaşında.
let ad = "Fatma";
let yaş = 9;
console.log(`${<<< ❓ >>>} ${<<< ❓ >>>} yaşında.`);
- tests/1/output
Fatma 9 yaşında.

---------------------
- parts/1:
- text
# ➗ Şablon İçinde İşlem

``${...}`` içinde yalnızca değişken değil, bir işlem de yazabiliriz. JavaScript önce
ifadeyi hesaplar, sonra sonucu metnin içine yerleştirir. Bu sayede hesap sonucunu tek
satırda cümleye koyabiliriz.

<code-view name="main.js" language="javascript">
let fiyat = 250;
let adet = 3;
console.log(`Toplam: ${fiyat * adet} TL`);
</code-view>

<code-view name="Terminal" language="bash">
Toplam: 750 TL
</code-view>

# 🎯 2. Görev

``fiyat`` ve ``adet`` değişkenlerini çarpıp ``Toplam: 750 TL`` yazdıran programı yazar
mısın?

- files/main.js/.block
// Görev: fiyat ve adet değişkenlerini çarpıp "Toplam: 750 TL" yazdır.
// ${...} içinde çarpma işlemini yaz: fiyat * adet; sonuç şablon metne yerleşir.
// Beklenen çıktı:
// Toplam: 750 TL
let fiyat = 250;
let adet = 3;
console.log(`Toplam: ${<<< ❓ >>>} TL`);
---------------------
- tests/0/output
Toplam: 750 TL

---------------------
- tests/1/files/main.js/.block
// Görev: fiyat (120) ve adet (5) değerlerini çarpıp "Toplam: 600 TL" yazdır.
// İkinci test farklı sayılarla aynı kuralı denetler: ${fiyat * adet} ifadesi.
// Beklenen çıktı:
// Toplam: 600 TL
let fiyat = 120;
let adet = 5;
console.log(`Toplam: ${<<< ❓ >>>} TL`);
- tests/1/output
Toplam: 600 TL

---------------------
- parts/2:
- text
# 📝 Çok Satırlı Metin

Ters tırnakla yazılan metinler satır sonlarını olduğu gibi korur. Yani kodda Enter'a
bastığımız her yerde metin de alt satıra geçer. ``\n`` yazmaya gerek kalmaz.

<code-view name="main.js" language="javascript">
let mesaj = `Merhaba
dünya!`;
console.log(mesaj);
</code-view>

<code-view name="Terminal" language="bash">
Merhaba
dünya!
</code-view>

# 🎯 3. Görev

İki satırlı ``Merhaba`` ve ``dünya!`` metnini ters tırnakla tanımlayıp alt alta yazdıran
programı yazar mısın?

- files/main.js/.block
// Görev: "Merhaba" ve "dünya!" metnini iki satır halinde ters tırnakla yaz.
// Ters tırnak (backtick) satır sonlarını korur; kodda Enter ile alt satıra geçilir.
// Beklenen çıktı:
// Merhaba
// dünya!
let mesaj = `<<< ❓ >>>`;
console.log(mesaj);
---------------------
- tests/0/output
Merhaba
dünya!

---------------------
- parts/3:
- text
# 🔍 Başlangıç ve Bitiş: startsWith / endsWith

``.startsWith(parça)`` metnin verilen parçayla başlayıp başlamadığını,
``.endsWith(parça)`` ise bitip bitmediğini söyler. İkisi de ``true`` ya da ``false``
döndürür. Dosya adı kontrolünde çok kullanışlıdır.

<code-view name="main.js" language="javascript">
let dosya = "rapor.pdf";
console.log(dosya.startsWith("rapor"));
console.log(dosya.endsWith(".pdf"));
</code-view>

<code-view name="Terminal" language="bash">
true
true
</code-view>

# 🎯 4. Görev

``"rapor.pdf"`` dosyasının ``"rapor"`` ile başlayıp ``".pdf"`` ile bittiğini alt alta
yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: "rapor.pdf" dosyasının "rapor" ile başlayıp ".pdf" ile bittiğini yazdır.
// .startsWith() ve .endsWith() metotları true ya da false döndürür.
// Beklenen çıktı:
// true
// true
let dosya = "rapor.pdf";
console.log(dosya.<<< ❓ >>>("rapor"));
console.log(dosya.<<< ❓ >>>(".pdf"));
---------------------
- tests/0/output
true
true

---------------------
- tests/1/files/main.js/.block
// Görev: "rapor.docx" dosyasının "rapor" ile başlayıp ".pdf" ile bitmediğini yazdır.
// İkinci test farklı uzantıyla aynı kuralı denetler: startsWith ve endsWith.
// Beklenen çıktı:
// true
// false
let dosya = "rapor.docx";
console.log(dosya.<<< ❓ >>>("rapor"));
console.log(dosya.<<< ❓ >>>(".pdf"));
- tests/1/output
true
false

---------------------
- parts/4:
- text
# 🔁 Tekrarlama: .repeat()

``.repeat(sayı)`` metni verilen sayı kadar tekrar eder ve yeni bir metin döndürür. Çizgi
çekmek ya da kısa bir metni çoğaltmak için kullanılır.

<code-view name="main.js" language="javascript">
let çizgi = "=";
console.log(çizgi.repeat(12));
</code-view>

<code-view name="Terminal" language="bash">
============
</code-view>

# 🎯 5. Görev

``"="`` karakterini ``12`` kez tekrar edip terminale ``============`` yazdıran programı
yazar mısın?

- files/main.js/.block
// Görev: "=" karakterini 12 kez tekrar edip ============ yazdır.
// .repeat(12) metni verilen sayı kadar tekrarlar ve yeni bir metin döndürür.
// Beklenen çıktı:
// ============
let çizgi = "=";
console.log(çizgi.<<< ❓ >>>(12));
---------------------
- tests/0/output
============

---------------------
- tests/1/files/main.js/.block
// Görev: "*" karakterini 10 kez tekrar edip ********** yazdır.
// İkinci test farklı karakter ve sayıyla aynı kuralı denetler: .repeat(10).
// Beklenen çıktı:
// **********
let çizgi = "*";
console.log(çizgi.<<< ❓ >>>(10));
- tests/1/output
**********

---------------------
- parts/5:
- text
# ⏱️ Başı Doldurma: .padStart()

``.padStart(uzunluk, dolgu)`` metni belirtilen uzunluğa ulaşana kadar başına dolgu
ekler. Tek haneli saat ve dakika değerlerini iki haneye tamamlamak için idealdir.

<code-view name="main.js" language="javascript">
let saat = "9";
console.log(saat.padStart(2, "0") + ":00");
</code-view>

<code-view name="Terminal" language="bash">
09:00
</code-view>

# 🎯 6. Görev

``"9"`` metnini ``"0"`` ile baştan doldurup ``09:00`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: "9" metnini "0" ile baştan doldurup 09:00 yazdır.
// .padStart(2, "0") metni iki haneye tamamlar.
// Beklenen çıktı:
// 09:00
let saat = "9";
console.log(saat.<<< ❓ >>>(2, "0") + ":00");
---------------------
- tests/0/output
09:00

---------------------
- tests/1/files/main.js/.block
// Görev: "23" metnini iki haneye tamamlayıp 23:00 yazdır.
// İkinci test zaten iki haneli değerle aynı kuralı denetler: .padStart(2, "0").
// Beklenen çıktı:
// 23:00
let saat = "23";
console.log(saat.<<< ❓ >>>(2, "0") + ":00");
- tests/1/output
23:00

---------------------
- parts/6:
- text
# 🔤 Karakter Alma: .charAt()

``.charAt(index)`` metnin verilen sıradaki karakterini döndürür. Köşeli parantezden
farklı olarak aralık dışında ``undefined`` yerine boş metin döndürür. Saymaya yine
``0``'dan başlarız.

<code-view name="main.js" language="javascript">
let kelime = "kodluyo";
console.log(kelime.charAt(0));
console.log(kelime.charAt(6));
</code-view>

<code-view name="Terminal" language="bash">
k
o
</code-view>

# 🎯 7. Görev

``kelime`` metninin ilk ve son karakterini ``.charAt()`` ile alt alta yazdıran programı
yazar mısın?

- files/main.js/.block
// Görev: "kodluyo" metninin ilk ve son karakterini .charAt() ile yazdır.
// .charAt(0) ilk karakteri (k), .charAt(6) son karakteri (o) verir.
// Beklenen çıktı:
// k
// o
let kelime = "kodluyo";
console.log(kelime.<<< ❓ >>>(0));
console.log(kelime.<<< ❓ >>>(6));
---------------------
- tests/0/output
k
o

---------------------
- tests/1/files/main.js/.block
// Görev: "yazılım" metninin ilk ve son karakterini .charAt() ile yazdır.
// İkinci test farklı kelimeyle aynı kuralı denetler: .charAt(0) ve .charAt(6).
// Beklenen çıktı:
// y
// m
let kelime = "yazılım";
console.log(kelime.<<< ❓ >>>(0));
console.log(kelime.<<< ❓ >>>(6));
- tests/1/output
y
m

---------------------
- parts/7:
- text
# 🔗 Metot Zincirleme

Bir metodun döndürdüğü metin üzerinde hemen başka bir metot çağırabiliriz. Örneğin
``metin.trim().toUpperCase()`` önce boşlukları siler, sonra büyük harfe çevirir. Zincir
soldan sağa doğru çalışır.

<code-view name="main.js" language="javascript">
let metin = "  JavaScript 101  ";
console.log(metin.trim().toUpperCase());
</code-view>

<code-view name="Terminal" language="bash">
JAVASCRIPT 101
</code-view>

# 🎯 8. Görev

``"  JavaScript 101  "`` metnindeki boşlukları silip ardından büyük harfe çeviren
programı yazar mısın?

- files/main.js/.block
// Görev: "  JavaScript 101  " metnindeki boşlukları silip büyük harfe çevir.
// Metotları zincirle: önce .trim(), sonra .toUpperCase(); zincir soldan sağa çalışır.
// Beklenen çıktı:
// JAVASCRIPT 101
let metin = "  JavaScript 101  ";
console.log(metin.<<< ❓ >>>().<<< ❓ >>>());
---------------------
- tests/0/output
JAVASCRIPT 101

---------------------
- tests/1/files/main.js/.block
// Görev: "  node js  " metnindeki boşlukları silip büyük harfe çevir.
// İkinci test farklı metinle aynı kuralı denetler: trim().toUpperCase() zinciri.
// Beklenen çıktı:
// NODE JS
let metin = "  node js  ";
console.log(metin.<<< ❓ >>>().<<< ❓ >>>());
- tests/1/output
NODE JS

---------------------
- parts/8:
- text
# 🔄 Sayıyı Metne Çevirme: String()

``String(değer)`` herhangi bir değeri metne çevirir. Sayıyı metne çevirdiğimizde ``+``
artık toplama değil birleştirme yapar. ``String(2024) + " yılı"`` ifadesinin sonucu
``"2024 yılı"`` olur.

<code-view name="main.js" language="javascript">
console.log(String(2024) + " yılı");
console.log(String(false));
</code-view>

<code-view name="Terminal" language="bash">
2024 yılı
false
</code-view>

# 🎯 9. Görev

``yıl`` değişkenindeki ``2024`` sayısını ve ``değer`` değişkenindeki ``false`` değerini
``String()`` ile metne çevirip ``2024 yılı`` ve ``false`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: 2024 sayısını ve false değerini String() ile metne çevirip yazdır.
// Boşluklara String(yıl) ve String(değer) yaz; String() değerin türünü metne çevirir.
// Beklenen çıktı:
// 2024 yılı
// false
let yıl = 2024;
let değer = false;
console.log(<<< ❓ >>> + " yılı");
console.log(<<< ❓ >>>);
---------------------
- tests/0/output
2024 yılı
false

- tests/0/require = "String("

---------------------
- tests/1/files/main.js/.block
// Görev: 1919 sayısını ve true değerini String() ile metne çevirip yazdır.
// İkinci test farklı değerlerle aynı kuralı denetler: String(yıl) ve String(değer).
// Beklenen çıktı:
// 1919 yılı
// true
let yıl = 1919;
let değer = true;
console.log(<<< ❓ >>> + " yılı");
console.log(<<< ❓ >>>);
- tests/1/output
1919 yılı
true

- tests/1/require = "String("

---------------------
- parts/9:
- text
# 🔢 Metni Sayıya Çevirme: Number()

``Number(değer)`` metni sayıya çevirir. Böylece toplama ve çarpma işlemleri doğru
sonuç verir. ``"42" + 8`` metin birleştirip ``428`` üretirken,
``Number("42") + 8`` işlemi ``50`` verir.

<code-view name="main.js" language="javascript">
console.log(Number("42") + 8);
console.log(Number("3.5") * 2);
</code-view>

<code-view name="Terminal" language="bash">
50
7
</code-view>

# 🎯 10. Görev

``"42"`` metnini sayıya çevirip ``8`` ile toplayan, ``"3.5"`` metnini de sayıya çevirip
``2`` ile çarpan programı yazar mısın?

- files/main.js/.block
// Görev: "42" metnini sayıya çevirip 8 ile topla, "3.5" metnini 2 ile çarp.
// Boşluklara Number fonksiyonunu yaz: Number("42") + 8 = 50, Number("3.5") * 2 = 7.
// Beklenen çıktı:
// 50
// 7
console.log(<<< ❓ >>>("42") + 8);
console.log(<<< ❓ >>>("3.5") * 2);
---------------------
- tests/0/output
50
7

---------------------
- tests/1/files/main.js/.block
// Görev: "100" metnini sayıya çevirip 8 ile topla, "1.5" metnini 2 ile çarp.
// İkinci test farklı metinlerle aynı kuralı denetler: Number() fonksiyonu.
// Beklenen çıktı:
// 108
// 3
console.log(<<< ❓ >>>("100") + 8);
console.log(<<< ❓ >>>("1.5") * 2);
- tests/1/output
108
3

---------------------
- parts/10:
- text
# 💬 Şablon Metin İçinde Metot

Şablon metnin içinde metotları da çağırabiliriz. ``${ad.toUpperCase()}`` yazarak
değişkeni biçimlendirip cümlenin içine yerleştiririz. Bu, uzun ``+`` zincirlerinden daha
okunaklıdır.

<code-view name="main.js" language="javascript">
let ad = "kodluyo";
console.log(`${ad.toUpperCase()} hoş geldin!`);
</code-view>

<code-view name="Terminal" language="bash">
KODLUYO hoş geldin!
</code-view>

# 🎯 11. Görev

``ad`` değişkenini büyük harfe çevirip şablon metin içinde kullanarak
``KODLUYO hoş geldin!`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: ad değişkenini büyük harfe çevirip şablon metin içinde kullan.
// ${ad.toUpperCase()} yazarak değeri biçimlendirip cümlenin içine yerleştir.
// Beklenen çıktı:
// KODLUYO hoş geldin!
let ad = "kodluyo";
console.log(`${ad.<<< ❓ >>>()} hoş geldin!`);
---------------------
- tests/0/output
KODLUYO hoş geldin!

---------------------
- tests/1/files/main.js/.block
// Görev: ad değişkenini büyük harfe çevirip şablon metin içinde kullan.
// İkinci test farklı değerle aynı kuralı denetler: ${ad.toUpperCase()} ifadesi.
// Beklenen çıktı:
// JAVASCRIPT hoş geldin!
let ad = "javascript";
console.log(`${ad.<<< ❓ >>>()} hoş geldin!`);
- tests/1/output
JAVASCRIPT hoş geldin!

---------------------
- parts/11:
- text
# 🏆 Mini Tekrar

Bu derste öğrendiklerimizi birleştirelim: metnin boşluklarını temizleyip büyük harfe
çeviriyoruz ve şablon metinle sürüm numarasını ekliyoruz. Metot zincirleme ile şablon
metin birlikte çok okunaklı bir cümle kurar.

<code-view name="main.js" language="javascript">
let ad = "  kodluyo  ";
let sürüm = 2;
console.log(`${ad.trim().toUpperCase()} v${sürüm}`);
</code-view>

<code-view name="Terminal" language="bash">
KODLUYO v2
</code-view>

# 🎯 12. Görev

``"  kodluyo  "`` metnini temizleyip büyük harfe çeviren ve sürüm numarasıyla birlikte
``KODLUYO v2`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: "  kodluyo  " metnini temizleyip büyük harfe çevir ve sürümle yazdır.
// Boşluklara sırasıyla trim ve toUpperCase metotlarını yaz; sonuç KODLUYO v2 olur.
// Beklenen çıktı:
// KODLUYO v2
let ad = "  kodluyo  ";
let sürüm = 2;
console.log(`${ad.<<< ❓ >>>().<<< ❓ >>>()} v${sürüm}`);
---------------------
- tests/0/output
KODLUYO v2

---------------------
- tests/1/files/main.js/.block
// Görev: "  javascript  " metnini temizleyip büyük harfe çevir ve sürümle yazdır.
// İkinci test farklı metin ve sürümle aynı kuralı denetler: trim().toUpperCase().
// Beklenen çıktı:
// JAVASCRIPT v3
let ad = "  javascript  ";
let sürüm = 3;
console.log(`${ad.<<< ❓ >>>().<<< ❓ >>>()} v${sürüm}`);
- tests/1/output
JAVASCRIPT v3

---------------------
