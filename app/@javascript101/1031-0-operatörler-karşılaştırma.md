- show_content = true
- show_editor = true
- show_terminal = true
- language = "javascript"
- title = "⚖️ Operatörler : Karşılaştırma"
- run = "node main.js"

- parts/0:
- text
# ⚖️ Karşılaştırma Operatörleri

Karşılaştırma operatörleri iki değeri kıyaslar ve sonuç olarak ``true`` (doğru) ya da
``false`` (yanlış) verir. Büyüktür için ``>``, küçüktür için ``<`` kullanırız. Sonuç bir
boolean olduğu için terminalde ``true`` veya ``false`` görürüz.

<code-view name="main.js" language="javascript">
let yaş = 20;
console.log(yaş > 18);
console.log(yaş < 18);
</code-view>

<code-view name="Terminal" language="bash">
true
false
</code-view>

# 🎯 1. Görev

``yaş`` 18'den büyükse ``true``, 18'den küçükse ``false`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: yaş 18'den büyükse true, 18'den küçükse false yazdır.
// Büyüktür için > , küçüktür için < operatörünü kullan: yaş > 18 ve yaş < 18.
// Eşitlik payı yoktur; sınır değerde iki karşılaştırma da false verir.
// Beklenen çıktı:
// true
// false
let yaş = 20;
console.log(yaş <<< ❓ >>> 18);
console.log(yaş <<< ❓ >>> 18);
---------------------
- tests/0/output
true
false

---------------------
- tests/1/files/main.js/.block
// Görev: yaş 18'den büyükse true, 18'den küçükse false yazdır.
// İkinci test farklı yaşla aynı kuralı denetler: > ve < operatörleri.
// Beklenen çıktı:
// false
// true
let yaş = 15;
console.log(yaş <<< ❓ >>> 18);
console.log(yaş <<< ❓ >>> 18);
- tests/1/output
false
true

---------------------
- tests/2/files/main.js/.block
// Görev: yaş 18'den büyükse true, 18'den küçükse false yazdır.
// Üçüncü test sınır değeri dener: 18 yaşında > ve < operatörleri false verir.
// Böylece >= ya da <= yazan bir cevap bu testi geçemez.
// Beklenen çıktı:
// false
// false
let yaş = 18;
console.log(yaş <<< ❓ >>> 18);
console.log(yaş <<< ❓ >>> 18);
- tests/2/output
false
false

---------------------
- parts/1:
- text
# 🔼 Büyük Eşit ve Küçük Eşit

``>=`` "büyük veya eşit", ``<=`` ise "küçük veya eşit" demektir. Sınır değerin kendisi de
karşılaştırmaya dahildir; bu yüzden ``50 >= 50`` sonucu ``true`` olur. Eşitlik payı
olmayan ``>`` ve ``<`` operatörleriyle karıştırmamalıyız.

<code-view name="main.js" language="javascript">
let puan = 50;
console.log(puan >= 50);
console.log(puan <= 40);
</code-view>

<code-view name="Terminal" language="bash">
true
false
</code-view>

# 🎯 2. Görev

``50`` puanın ``50``ye eşit ya da büyük olduğunu, ``40``a eşit ya da küçük olmadığını
yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: 50 puanın 50'ye eşit ya da büyük olduğunu, 40'a eşit ya da küçük olmadığını yazdır.
// Büyük eşit için >= , küçük eşit için <= operatörünü kullan.
// Sınır değer karşılaştırmaya dahildir; bu yüzden 50 >= 50 true verir.
// Beklenen çıktı:
// true
// false
let puan = 50;
console.log(puan <<< ❓ >>> 50);
console.log(puan <<< ❓ >>> 40);
---------------------
- tests/0/output
true
false

---------------------
- tests/1/files/main.js/.block
// Görev: 40 puanın 50'ye eşit ya da büyük olmadığını, 40'a eşit olduğunu yazdır.
// Büyük eşit için >= , küçük eşit için <= operatörünü kullan.
// Sınır değer karşılaştırmaya dahildir; bu yüzden 40 <= 40 true verir.
// Beklenen çıktı:
// false
// true
let puan = 40;
console.log(puan <<< ❓ >>> 50);
console.log(puan <<< ❓ >>> 40);
- tests/1/output
false
true

---------------------
- tests/2/files/main.js/.block
// Görev: 60 puanın 50'ye eşit ya da büyük olduğunu, 40'a eşit ya da küçük olmadığını yazdır.
// Üçüncü test 50'den büyük bir puanla == yerine >= kullanıldığını denetler.
// 60 >= 50 true verir; 60 == 50 ise false kalır ve test geçmez.
// Beklenen çıktı:
// true
// false
let puan = 60;
console.log(puan <<< ❓ >>> 50);
console.log(puan <<< ❓ >>> 40);
- tests/2/output
true
false

---------------------
- parts/2:
- text
# 🟰 Gevşek Eşitlik : == ve !=

``==`` iki değerin eşit olup olmadığını sorar, ``!=`` ise eşit olmadığını. Gevşek
eşitlikte JavaScript türleri kendiliğinden çevirir; ``5 == "5"`` bu yüzden ``true``
olur. Yalnız bu çevirme bazen sürpriz sonuçlar doğurur, dikkatli olmalıyız.

<code-view name="main.js" language="javascript">
let sayı = 5;
let metin = "5";
console.log(sayı == metin);
console.log(sayı != metin);
</code-view>

<code-view name="Terminal" language="bash">
true
false
</code-view>

# 🎯 3. Görev

``5`` sayısı ile ``"5"`` metninin gevşek eşitlikte eşit olduğunu, eşitsizlikte ise
eşit olmadığını yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: 5 sayısı ile "5" metninin gevşek eşitlikte eşit, eşitsizlikte eşit olmadığını yazdır.
// Gevşek eşitlik için == , gevşek eşitsizlik için != operatörünü kullan.
// == türleri kendiliğinden çevirir; 5 == "5" bu yüzden true olur.
// Beklenen çıktı:
// true
// false
let sayı = 5;
let metin = "5";
console.log(sayı <<< ❓ >>> metin);
console.log(sayı <<< ❓ >>> metin);
---------------------
- tests/0/output
true
false

---------------------
- tests/1/files/main.js/.block
// Görev: 8 sayısı ile "8" metninin gevşek eşitlikte eşit olduğunu yazdır.
// İkinci test farklı değerlerle aynı kuralı denetler: == ve != operatörleri.
// Beklenen çıktı:
// true
// false
let sayı = 8;
let metin = "8";
console.log(sayı <<< ❓ >>> metin);
console.log(sayı <<< ❓ >>> metin);
- tests/1/output
true
false

---------------------
- tests/2/files/main.js/.block
// Görev: 3 sayısı ile "5" metninin gevşek eşitlikte eşit olmadığını yazdır.
// Bu testte sayı metinden küçüktür; <= yazan bir cevap true verip elenir.
// Beklenen çıktı:
// false
// true
let sayı = 3;
let metin = "5";
console.log(sayı <<< ❓ >>> metin);
console.log(sayı <<< ❓ >>> metin);
- tests/2/output
false
true

---------------------
- tests/3/files/main.js/.block
// Görev: 7 sayısı ile "5" metninin gevşek eşitlikte eşit olmadığını yazdır.
// Bu testte sayı metinden büyüktür; >= ve < ikilisi burada elenir.
// Beklenen çıktı:
// false
// true
let sayı = 7;
let metin = "5";
console.log(sayı <<< ❓ >>> metin);
console.log(sayı <<< ❓ >>> metin);
- tests/3/output
false
true

---------------------
- parts/3:
- text
# 🔒 Sıkı Eşitlik : ===

``===`` hem değerin hem de türün aynı olmasını ister; buna sıkı eşitlik (strict equality)
denir. ``5 === "5"`` sonucu ``false`` olur, çünkü biri sayı diğeri metindir. Tür çevirisi
yapılmadığı için sıkı eşitlik daha güvenlidir.

<code-view name="main.js" language="javascript">
let sayı = 5;
let metin = "5";
console.log(sayı === sayı);
console.log(sayı === metin);
console.log(0 === false);
</code-view>

<code-view name="Terminal" language="bash">
true
false
false
</code-view>

# 🎯 4. Görev

İki sayının sıkı eşitlikte eşit olduğunu, sayı ile metnin ise eşit olmadığını yazdıran
programı yazar mısın?

- files/main.js/.block
// Görev: iki sayının sıkı eşitlikte eşit, sayı ile metnin ise eşit olmadığını yazdır.
// Sıkı eşitlik için === operatörünü kullan; == türleri çevirdiği için bu dersi geçirmez.
// 5 === "5" false verir çünkü biri sayı, diğeri metindir.
// Beklenen çıktı:
// true
// false
let sayı = 5;
let metin = "5";
console.log(sayı <<< ❓ >>> sayı);
console.log(sayı <<< ❓ >>> metin);
---------------------
- tests/0/output
true
false

---------------------
- tests/1/files/main.js/.block
// Görev: iki değerin sıkı eşitlikte eşit olduğunu iki satırda yazdır.
// İkinci testte metin değişkeni de sayıdır; sıkı eşitlik için === zorunludur.
// Beklenen çıktı:
// true
// true
let sayı = 5;
let metin = 5;
console.log(sayı <<< ❓ >>> sayı);
console.log(sayı <<< ❓ >>> metin);
- tests/1/output
true
true

---------------------
- parts/4:
- text
# 🚫 Sıkı Eşitsizlik : !==

``!==`` sıkı eşitliğin tersidir; değer ya da tür farklıysa ``true`` verir. ``5 !== "5"``
sonucu ``true`` olur çünkü türler farklıdır. Aynı sayı ve tür için ise ``false`` alırız.

<code-view name="main.js" language="javascript">
let sayı = 5;
let metin = "5";
console.log(sayı !== metin);
console.log(sayı !== sayı);
console.log(sayı !== 6);
</code-view>

<code-view name="Terminal" language="bash">
true
false
true
</code-view>

# 🎯 5. Görev

Sayı ile metnin sıkı eşitsizlikte farklı olduğunu, aynı değerin ise farklı olmadığını
yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: sayı ile metnin sıkı eşitsizlikte farklı olduğunu yazdır.
// Sıkı eşitsizlik için !== operatörünü kullan; tür ya da değer farklıysa true verir.
// 5 !== "5" true, 5 !== 5 false, 5 !== 6 true olur.
// Beklenen çıktı:
// true
// false
// true
let sayı = 5;
let metin = "5";
console.log(sayı <<< ❓ >>> metin);
console.log(sayı <<< ❓ >>> sayı);
console.log(sayı <<< ❓ >>> 6);
---------------------
- tests/0/output
true
false
true

---------------------
- tests/1/files/main.js/.block
// Görev: aynı değerlerin sıkı eşitsizlikte farklı olmadığını yazdır.
// İkinci testte metin değişkeni sayıdır; !== yalnızca değer farkına bakar.
// Beklenen çıktı:
// false
// false
// true
let sayı = 5;
let metin = 5;
console.log(sayı <<< ❓ >>> metin);
console.log(sayı <<< ❓ >>> sayı);
console.log(sayı <<< ❓ >>> 6);
- tests/1/output
false
false
true

---------------------
- parts/5:
- text
# 🔤 Metinleri Karşılaştırma

Metinler de karşılaştırılabilir; bu kez harflerin alfabedeki sırasına bakılır.
``"a" < "b"`` sonucu ``true`` olur çünkü ``a`` harfi ``b``den önce gelir. Metinlerin
eşitliğinde ise ``===`` kullanırız.

<code-view name="main.js" language="javascript">
console.log("a" < "b");
console.log("elma" < "armut");
console.log("Ayşe" === "Ayşe");
</code-view>

<code-view name="Terminal" language="bash">
true
false
true
</code-view>

# 🎯 6. Görev

``"elma"``nın ``"armut"``tan sonra geldiğini ve ``"elma"``nın kendisiyle eşit olduğunu
yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: "elma"nın "armut"tan sonra geldiğini ve iki aynı ismin eşit olduğunu yazdır.
// Metinleri alfabe sırasına göre < operatörüyle karşılaştır; eşitlik için === kullan.
// elma < armut false verir; a === "elma" true verir.
// Beklenen çıktı:
// false
// true
let a = "elma";
let b = "armut";
console.log(a <<< ❓ >>> b);
console.log(a <<< ❓ >>> "elma");
---------------------
- tests/0/output
false
true

---------------------
- tests/1/files/main.js/.block
// Görev: "kedi"nin "köpek"ten önce geldiğini ve "kedi"nin "elma"ya eşit olmadığını yazdır.
// İkinci test farklı metinlerle aynı kuralı denetler: < ve === operatörleri.
// Beklenen çıktı:
// true
// false
let a = "kedi";
let b = "köpek";
console.log(a <<< ❓ >>> b);
console.log(a <<< ❓ >>> "elma");
- tests/1/output
true
false

---------------------
- parts/6:
- text
# 🧮 NaN Karşılaştırması

``NaN`` "sayı değil" (Not a Number) demektir ve sayı olmayan bir işlemin sonucudur.
``NaN`` kendisiyle bile eşit değildir; bu yüzden ``NaN === NaN`` sonucu ``false`` olur.
Bir değerin NaN olup olmadığını anlamak için ``Number.isNaN()`` kullanırız.

<code-view name="main.js" language="javascript">
let sonuç = "abc" * 2;
console.log(sonuç);
console.log(sonuç === NaN);
console.log(Number.isNaN(sonuç));
</code-view>

<code-view name="Terminal" language="bash">
NaN
false
true
</code-view>

# 🎯 7. Görev

``"abc" * 2`` işleminin sonucunu, bu sonucun ``NaN`` ile sıkı eşitliğini ve
``Number.isNaN()`` ile kontrolünü yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: "abc" * 2 sonucunu, NaN ile sıkı eşitliğini ve Number.isNaN kontrolünü yazdır.
// NaN "sayı değil" demektir ve kendisiyle bile eşit değildir: NaN === NaN false verir.
// Kontrol için Number.isNaN() kullan; sonuç true çıkar.
// Beklenen çıktı:
// NaN
// false
// true
let sonuç = "abc" * 2;
console.log(sonuç);
console.log(sonuç <<< ❓ >>> NaN);
console.log(Number.<<< ❓ >>>(sonuç));
---------------------
- tests/0/output
NaN
false
true

---------------------
- parts/7:
- text
# 🕳️ null ve undefined Karşılaştırması

Değer verilmemiş değişken ``undefined`` olur; ``null`` ise bilerek boş bırakılmış değerdir.
Gevşek eşitlikte ``null == undefined`` sonucu ``true`` olur ama sıkı eşitlikte ``false``
alırız. Yani ayırt etmek istiyorsak ``===`` kullanmalıyız.

<code-view name="main.js" language="javascript">
let kutu;
let boş = null;
console.log(kutu === undefined);
console.log(kutu == boş);
console.log(kutu === boş);
</code-view>

<code-view name="Terminal" language="bash">
true
true
false
</code-view>

# 🎯 8. Görev

``undefined`` bir değişkenin ``undefined``a eşit olduğunu, gevşek eşitlikte ``null``a
eşit olduğunu, sıkı eşitlikte ise eşit olmadığını yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: undefined bir değişkenin null ile gevşek ve sıkı eşitliğini yazdır.
// Gevşek eşitlikte null == undefined true olur; sıkı eşitlikte === false olur.
// undefined değişkeni undefined ile sıkı eşitlikte true verir.
// Beklenen çıktı:
// true
// true
// false
let kutu;
let boş = null;
console.log(kutu <<< ❓ >>> undefined);
console.log(kutu <<< ❓ >>> boş);
console.log(kutu <<< ❓ >>> boş);
---------------------
- tests/0/output
true
true
false

---------------------
- parts/8:
- text
# 🎯 Çift mi, Tek mi?

Karşılaştırma sonuçlarını aritmetikle birleştirebiliriz. Kalan operatörü ``%`` ile
sayının 2'ye bölümünden kalanı bulur, ``===`` ile bu kalanı sıfıra eşitleriz.
Kalan ``0`` ise sayı çifttir.

<code-view name="main.js" language="javascript">
let sayı = 42;
console.log("Çift mi?", sayı % 2 === 0);
</code-view>

<code-view name="Terminal" language="bash">
Çift mi? true
</code-view>

# 🎯 9. Görev

``42`` sayısının çift olup olmadığını ``Çift mi? true`` biçiminde yazdıran programı yazar
mısın?

- files/main.js/.block
// Görev: 42 sayısının çift olup olmadığını "Çift mi? true" biçiminde yazdır.
// Kalan operatörü % ile sayı % 2 hesaplanır; kalan 0 ise sayı çifttir.
// Karşılaştırma için === operatörünü kullan: sayı % 2 === 0.
// Beklenen çıktı:
// Çift mi? true
let sayı = 42;
console.log("Çift mi?", sayı <<< ❓ >>> 2 <<< ❓ >>> 0);
---------------------
- tests/0/output
Çift mi? true

---------------------
- tests/1/files/main.js/.block
// Görev: 41 sayısının çift olup olmadığını "Çift mi? false" biçiminde yazdır.
// Kalan 1 olduğu için 41 % 2 === 0 karşılaştırması false verir.
// Beklenen çıktı:
// Çift mi? false
let sayı = 41;
console.log("Çift mi?", sayı <<< ❓ >>> 2 <<< ❓ >>> 0);
- tests/1/output
Çift mi? false

---------------------
- parts/9:
- text
# 🔢 Metin mi, Sayı mı?

``>`` ve ``<`` operatörleri de tür çevirisi yapar. ``"10" > 9`` karşılaştırmasında metin
sayıya çevrilir ve sonuç ``true`` olur. Ama iki taraf da metinse bu kez harf sırasına
bakılır; ``"10" > "9"`` sonucu ``false`` olur çünkü ``"1"`` harfi ``"9"``dan önce gelir.

<code-view name="main.js" language="javascript">
console.log("10" > 9);
console.log("10" > "9");
</code-view>

<code-view name="Terminal" language="bash">
true
false
</code-view>

# 🎯 10. Görev

``"10"`` metnini ``9`` sayısıyla karşılaştırınca ``true``, ``"9"`` metniyle
karşılaştırınca ``false`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: "10" metnini 9 sayısıyla karşılaştırınca true, "9" metniyle karşılaştırınca false yazdır.
// Metin ile sayı karşılaştırılırken metin sayıya çevrilir: "10" > 9 true olur.
// İki taraf da metinse harf sırasına bakılır: "10" > "9" false olur.
// Beklenen çıktı:
// true
// false
console.log("10" <<< ❓ >>> 9);
console.log("10" <<< ❓ >>> "9");
---------------------
- tests/0/output
true
false

---------------------
- tests/1/files/main.js/.block
// Görev: "9" metnini 9 sayısıyla ve "9" metniyle karşılaştırıp sonuçları yazdır.
// İkinci test sınır değeri dener: "9" > 9 false, "9" > "9" false olur.
// Böylece >= yazan bir cevap bu testi geçemez; > operatörü zorunludur.
// Beklenen çıktı:
// false
// false
console.log("9" <<< ❓ >>> 9);
console.log("9" <<< ❓ >>> "9");
- tests/1/output
false
false

---------------------
- parts/10:
- text
# 🏆 Mini Tekrar

Son derslerde öğrendiklerimizi birleştirelim. Bir nesnenin içindeki değerleri okuyup
karşılaştırma operatörleriyle sorular soralım. Böylece nesne erişimi ile karşılaştırma
aynı programda yer alır.

<code-view name="main.js" language="javascript">
const ürün = { ad: "Kalem", fiyat: 15 };
console.log(ürün.fiyat < 20);
console.log(ürün.ad === "Kalem");
console.log(ürün.fiyat !== 15);
</code-view>

<code-view name="Terminal" language="bash">
true
true
false
</code-view>

# 🎯 11. Görev

``ürün`` nesnesinin fiyatının ``20``den küçük olduğunu, adının ``"Kalem"``e eşit
olduğunu ve fiyatının ``15``ten farklı olmadığını yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: ürün nesnesinin fiyatını ve adını karşılaştırıp sonuçları yazdır.
// Nesneden okumak için ürün.fiyat ve ürün.ad nokta yazımını kullan.
// Fiyat 20'den küçük, ad "Kalem"e eşit ve fiyat 15'ten farklı değildir.
// Beklenen çıktı:
// true
// true
// false
const ürün = { ad: "Kalem", fiyat: 15 };
console.log(ürün.fiyat <<< ❓ >>> 20);
console.log(ürün.ad <<< ❓ >>> "Kalem");
console.log(ürün.fiyat <<< ❓ >>> 15);
---------------------
- tests/0/output
true
true
false

---------------------
- tests/1/files/main.js/.block
// Görev: "Defter" ürününün fiyat ve ad karşılaştırmalarını yazdır.
// İkinci test farklı veriyle aynı kuralı denetler: < , === ve !== operatörleri.
// Beklenen çıktı:
// false
// false
// true
const ürün = { ad: "Defter", fiyat: 25 };
console.log(ürün.fiyat <<< ❓ >>> 20);
console.log(ürün.ad <<< ❓ >>> "Kalem");
console.log(ürün.fiyat <<< ❓ >>> 15);
- tests/1/output
false
false
true

---------------------
