- show_content = true
- show_editor = true
- show_terminal = true
- language = "javascript"
- title = "✅ Değişkenler boolean : Doğru ve Yanlış"
- run = "node main.js"

- parts/0:
- text
# 🎯 **boolean** : Doğru ve Yanlış

Bir şeyin "evet/hayır" durumunu saklamak için **boolean** türünü kullanırız. Bu türün
yalnızca iki değeri vardır: ``true`` (doğru) ve ``false`` (yanlış). Bu kelimeler tırnak
içine yazılmaz; yazılırsa metin olur, boolean olmaz.

<code-view name="main.js" language="javascript">
let yağmurVar = true;
console.log("Yağmur var mı?", yağmurVar);
console.log("Hava açık mı?", false);
</code-view>

<code-view name="Terminal" language="bash">
Yağmur var mı? true
Hava açık mı? false
</code-view>

# 🎯 1. Görev

Terminale ``Yağmur var mı? true`` ve ``Hava açık mı? false`` yazdıran programı yazar
mısın? Değerleri tırnak içine almadan yaz.

- files/main.js/.block
// Görev: yağmurVar değişkenine true, ikinci satırın boşluğuna false yaz.
// Boolean değerler tırnak içine YAZILMAZ; tırnak içine yazılırsa metin olur.
// Beklenen çıktı:
// Yağmur var mı? true
// Hava açık mı? false
let yağmurVar = <<< ❓ >>>;
console.log("Yağmur var mı?", yağmurVar);
console.log("Hava açık mı?", <<< ❓ >>>);
---------------------
- tests/0/output
Yağmur var mı? true
Hava açık mı? false

---------------------
- parts/1:
- text
# ✅ Karşılaştırmadan Doğan boolean

Boolean değerlerin çoğu elimizle yazılmaz; **karşılaştırma** sonucunda kendiliğinden
oluşur. ``>``, ``<``, ``===`` gibi operatörler bir boolean üretir. ``20 > 18`` ifadesinin
değeri ``true`` olur.

<code-view name="main.js" language="javascript">
let yaş = 20;
console.log(yaş > 18);
console.log(yaş === 20);
</code-view>

<code-view name="Terminal" language="bash">
true
true
</code-view>

# 🎯 2. Görev

``20`` yaşın ``18``'den büyük olup olmadığını yazdıran programı yazar mısın? İkinci satır
aynı kalacak.

- files/main.js/.block
// Görev: yaş (20) değerinin 18'den büyük olup olmadığını yazdır.
// Boşluğa büyüktür operatörünü (>) yaz; karşılaştırma sonucu boolean olur.
// Beklenen çıktı:
// true
// true
let yaş = 20;
console.log(yaş <<< ❓ >>> 18);
console.log(yaş === 20);
---------------------
- tests/0/output
true
true

---------------------
- tests/1/files/main.js/.block
// Görev: yaş (15) değerinin 18'den büyük olup olmadığını yazdır.
// İkinci test farklı yaşla aynı kuralı denetler: > operatörü.
// Beklenen çıktı:
// false
// false
let yaş = 15;
console.log(yaş <<< ❓ >>> 18);
console.log(yaş === 20);
- tests/1/output
false
false

---------------------
- parts/2:
- text
# ❗ Değil (!) Operatörü

``!`` işareti bir boolean'ın **tersini** alır: ``true`` ise ``false``, ``false`` ise
``true`` olur. Parantezle birlikte de kullanılır: ``!(5 > 3)`` sonucu ``false`` olur. Bu
operatör "değil mi?" diye sormanın kısa yoludur.

<code-view name="main.js" language="javascript">
let yağmurVar = true;
console.log("Yağmur var mı?", yağmurVar);
console.log("Dışarı çıkayım mı?", !yağmurVar);
</code-view>

<code-view name="Terminal" language="bash">
Yağmur var mı? true
Dışarı çıkayım mı? false
</code-view>

# 🎯 3. Görev

Yağmur yağdığında ``Dışarı çıkayım mı? false`` yazdıran programı yazar mısın? ``!``
operatörünü kullanacaksın.

- files/main.js/.block
// Görev: yağmurVar true iken "Dışarı çıkayım mı? false" yazdır.
// console.log() içinde değerin tersini almak için ! (değil) operatörünü kullan.
// Beklenen çıktı:
// Yağmur var mı? true
// Dışarı çıkayım mı? false
let yağmurVar = true;
console.log("Yağmur var mı?", yağmurVar);
console.log("Dışarı çıkayım mı?", <<< ❓ >>>yağmurVar);
---------------------
- tests/0/output
Yağmur var mı? true
Dışarı çıkayım mı? false

---------------------
- tests/1/files/main.js/.block
// Görev: yağmurVar false iken "Dışarı çıkayım mı? true" yazdır.
// İkinci test farklı değerle aynı kuralı denetler: ! operatörü.
// Beklenen çıktı:
// Yağmur var mı? false
// Dışarı çıkayım mı? true
let yağmurVar = false;
console.log("Yağmur var mı?", yağmurVar);
console.log("Dışarı çıkayım mı?", <<< ❓ >>>yağmurVar);
- tests/1/output
Yağmur var mı? false
Dışarı çıkayım mı? true

---------------------
- parts/3:
- text
# 0️⃣ Boolean(0) ve Boolean(1)

``Boolean()`` fonksiyonu bir değeri boolean'a çevirir. Sayılarda kural basittir: ``0``
``false`` olur, ``0`` dışındaki her sayı ``true`` olur. Yani ``Boolean(1)`` ve
``Boolean(42)`` ikisi de ``true`` verir.

<code-view name="main.js" language="javascript">
console.log(Boolean(0));
console.log(Boolean(1));
</code-view>

<code-view name="Terminal" language="bash">
false
true
</code-view>

# 🎯 4. Görev

``0`` için ``false``, ``1`` için ``true`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: 0 değeri için false, 1 değeri için true yazdır.
// Boolean() fonksiyonunun parantezine sırasıyla 0 ve 1 yaz; sayılar tırnaksız olur.
// Beklenen çıktı:
// 0 -> false
// 1 -> true
console.log("0 ->", Boolean(<<< ❓ >>>));
console.log("1 ->", Boolean(<<< ❓ >>>));
---------------------
- tests/0/output
0 -> false
1 -> true

---------------------
- parts/4:
- text
# 🔤 Boolean("") ve Boolean("a")

Metinlerde kural farklıdır: **boş metin** ``""`` falsy yani ``false`` olur; içinde en az
bir karakter olan her metin ``true`` olur. ``Boolean("a")`` sonucu ``true``,
``Boolean("")`` sonucu ``false`` gelir.

<code-view name="main.js" language="javascript">
console.log(Boolean(""));
console.log(Boolean("a"));
</code-view>

<code-view name="Terminal" language="bash">
false
true
</code-view>

# 🎯 5. Görev

Boş metin için ``false``, ``"a"`` için ``true`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Boş metin için false, "a" metni için true yazdır.
// Boolean() parantezine sırasıyla "" (boş metin) ve "a" yaz; metinler tırnak içinde.
// Beklenen çıktı:
// Boş metin -> false
// Dolu metin -> true
console.log("Boş metin ->", Boolean(<<< ❓ >>>));
console.log("Dolu metin ->", Boolean(<<< ❓ >>>));
---------------------
- tests/0/output
Boş metin -> false
Dolu metin -> true

---------------------
- parts/5:
- text
# 💡 truthy ve falsy

Boolean'a çevrildiğinde ``false`` olan değerlere **falsy**, ``true`` olanlara **truthy**
denir. Falsy değerler azdır: ``0``, ``""``, ``null``, ``undefined`` ve ``NaN``. Dikkat
et: ``"0"`` bir metindir ve **truthy**'dir; çünkü içinde bir karakter vardır.

<code-view name="main.js" language="javascript">
let boş = "";
let sıfır = 0;
let metinSıfır = "0";
console.log(Boolean(boş), Boolean(sıfır), Boolean(metinSıfır));
</code-view>

<code-view name="Terminal" language="bash">
false false true
</code-view>

# 🎯 6. Görev

Boş metnin ``false``, ``"0"`` metninin ise ``true`` olduğunu gösteren programı yazar
mısın?

- files/main.js/.block
// Görev: Boş metnin false, "0" metninin true olduğunu göster.
// Boolean() parantezine sırasıyla "" ve "0" yaz; metinleri tek tırnakla da yazabilirsin.
// Beklenen çıktı:
// boş metin -> false
// "0" metni -> true
console.log('boş metin ->', Boolean(<<< ❓ >>>));
console.log('"0" metni ->', Boolean(<<< ❓ >>>));
---------------------
- tests/0/output
boş metin -> false
"0" metni -> true

---------------------
- parts/6:
- text
# 🔗 && Operatörü Önizleme

``&&`` (ve) operatörü iki koşulun **ikisi de** doğruysa ``true`` verir. Bir koşul bile
yanlışsa sonuç ``false`` olur. Buna "ve" bağlacı diyebiliriz: hem yaş yetmeli hem de
ehliyet olmalı.

<code-view name="main.js" language="javascript">
let yaş = 20;
let ehliyetVar = true;
console.log("Araba kullanabilir mi?", yaş >= 18 && ehliyetVar);
</code-view>

<code-view name="Terminal" language="bash">
Araba kullanabilir mi? true
</code-view>

# 🎯 7. Görev

Yaşı ``20`` olan ve ehliyeti bulunan kişi için ``Araba kullanabilir mi? true`` yazdıran
programı yazar mısın?

- files/main.js/.block
// Görev: yaş 20 ve ehliyetVar true iken "Araba kullanabilir mi? true" yazdır.
// İki koşulu "ve" bağlacı (&&) ile birleştir; iki koşul da doğruysa true olur.
// Beklenen çıktı:
// Araba kullanabilir mi? true
let yaş = 20;
let ehliyetVar = true;
console.log("Araba kullanabilir mi?", yaş >= 18 <<< ❓ >>> ehliyetVar);
---------------------
- tests/0/output
Araba kullanabilir mi? true

---------------------
- tests/1/files/main.js/.block
// Görev: yaş 20 ama ehliyetVar false iken "Araba kullanabilir mi? false" yazdır.
// İkinci test ehliyetsiz durumla aynı kuralı denetler: ve bağlacı (&&).
// Beklenen çıktı:
// Araba kullanabilir mi? false
let yaş = 20;
let ehliyetVar = false;
console.log("Araba kullanabilir mi?", yaş >= 18 <<< ❓ >>> ehliyetVar);
- tests/1/output
Araba kullanabilir mi? false

---------------------
- parts/7:
- text
# 🔀 || Operatörü Önizleme

``||`` (veya) operatörü koşullardan **en az biri** doğruysa ``true`` verir. Metinlerde de
işe yarar: boş bir değişken falsy olduğu için ``||`` sağındaki yedek değer devreye girer.

<code-view name="main.js" language="javascript">
let kullanıcıAdı = "";
console.log("Merhaba", kullanıcıAdı || "misafir");
</code-view>

<code-view name="Terminal" language="bash">
Merhaba misafir
</code-view>

# 🎯 8. Görev

Kullanıcı adı boş olduğunda ``Merhaba misafir`` yazdıran programı yazar mısın? ``||``
operatörünü kullanacaksın.

- files/main.js/.block
// Görev: kullanıcıAdı boşken "Merhaba misafir" yazdır.
// Boşluğa "veya" operatörünü (||) yaz; sol taraf falsy ise sağdaki yedek değer gelir.
// Beklenen çıktı:
// Merhaba misafir
let kullanıcıAdı = "";
console.log("Merhaba", kullanıcıAdı <<< ❓ >>> "misafir");
---------------------
- tests/0/output
Merhaba misafir

---------------------
- tests/1/files/main.js/.block
// Görev: kullanıcıAdı "ayşe" iken "Merhaba ayşe" yazdır.
// İkinci test dolu değerle aynı kuralı denetler: veya operatörü (||).
// Beklenen çıktı:
// Merhaba ayşe
let kullanıcıAdı = "ayşe";
console.log("Merhaba", kullanıcıAdı <<< ❓ >>> "misafir");
- tests/1/output
Merhaba ayşe

---------------------
- parts/8:
- text
# 🧩 && ve || Birlikte

İki operatörü aynı programda kullanabiliriz. ``&&`` tüm koşullar doğruysa ``true``,
``||`` ise bir koşul doğruysa ``true`` verir. Aşağıdaki örnekte stok var ama fiyat
``0`` olduğu için sonuçlar farklı çıkıyor.

<code-view name="main.js" language="javascript">
let stok = 5;
let fiyat = 0;
console.log(stok > 0 && fiyat > 0);
console.log(stok > 0 || fiyat > 0);
</code-view>

<code-view name="Terminal" language="bash">
false
true
</code-view>

# 🎯 9. Görev

Birinci satırda "ve", ikinci satırda "veya" kullanıp ``false`` ve ``true`` yazdıran
programı yazar mısın?

- files/main.js/.block
// Görev: Birinci satırda "ve" (&&), ikinci satırda "veya" (||) kullanıp yazdır.
// stok 5, fiyat 0: stok > 0 && fiyat > 0 false, stok > 0 || fiyat > 0 true verir.
// Beklenen çıktı:
// false
// true
let stok = 5;
let fiyat = 0;
console.log(stok > 0 <<< ❓ >>> fiyat > 0);
console.log(stok > 0 <<< ❓ >>> fiyat > 0);
---------------------
- tests/0/output
false
true

---------------------
- parts/9:
- text
# 🔎 typeof : Değerin Türü

``true`` ve ``false`` değerlerinin türü ``boolean``dır. Karşılaştırma sonuçları da
boolean'dır. Ama ``"true"`` yazarsan bu bir **metindir** ve türü ``string`` olur; bu
ayrımı ``typeof`` ile görebilirsin.

<code-view name="main.js" language="javascript">
console.log(typeof true);
console.log(typeof (5 > 3));
console.log(typeof "true");
</code-view>

<code-view name="Terminal" language="bash">
boolean
boolean
string
</code-view>

# 🎯 10. Görev

``true`` ve ``5 > 3`` ifadelerinin türünü ``boolean``, ``"true"`` metnininkini ``string``
yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: true ve 5 > 3 ifadelerinin türünü, "true" metninin türünü yazdır.
// İlk iki boşluğa sırasıyla true ve 5 > 3 yaz; typeof boolean, boolean, string verir.
// Beklenen çıktı:
// boolean
// boolean
// string
console.log(typeof <<< ❓ >>>);
console.log(typeof (<<< ❓ >>>));
console.log(typeof "true");
---------------------
- tests/0/output
boolean
boolean
string

---------------------
- parts/10:
- text
# 🏆 Mini Tekrar

Öğrendiklerini birleştirelim: şifrenin hem uzun hem de sayı içermesi gerekiyor. İki boolean
değişkeni ``&&`` ile birleştirip sonucu, ardından ``!`` ile tersini yazdırıyoruz.

<code-view name="main.js" language="javascript">
let uzunŞifre = true;
let sayıVar = false;
console.log("Şifre güçlü mü?", uzunŞifre && sayıVar);
console.log("Eksik var mı?", !(uzunŞifre && sayıVar));
</code-view>

<code-view name="Terminal" language="bash">
Şifre güçlü mü? false
Eksik var mı? true
</code-view>

# 🎯 11. Görev

Şifre uzun ama sayı içermiyorsa ``Şifre güçlü mü? false`` ve ``Eksik var mı? true``
yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: uzunŞifre true, sayıVar false iken iki durumu "ve" ile birleştirip yazdır.
// Boşluğa ve bağlacını (&&) yaz; ikinci satır !(&&) ile sonucun tersini alır.
// Beklenen çıktı:
// Şifre güçlü mü? false
// Eksik var mı? true
let uzunŞifre = true;
let sayıVar = false;
console.log("Şifre güçlü mü?", uzunŞifre <<< ❓ >>> sayıVar);
console.log("Eksik var mı?", !(uzunŞifre && sayıVar));
---------------------
- tests/0/output
Şifre güçlü mü? false
Eksik var mı? true

---------------------
- tests/1/files/main.js/.block
// Görev: uzunŞifre ve sayıVar ikisi de true iken şifrenin güçlü olduğunu yazdır.
// İkinci test iki durum da doğruyken aynı kuralı denetler: ve bağlacı (&&).
// Beklenen çıktı:
// Şifre güçlü mü? true
// Eksik var mı? false
let uzunŞifre = true;
let sayıVar = true;
console.log("Şifre güçlü mü?", uzunŞifre <<< ❓ >>> sayıVar);
console.log("Eksik var mı?", !(uzunŞifre && sayıVar));
- tests/1/output
Şifre güçlü mü? true
Eksik var mı? false

---------------------
