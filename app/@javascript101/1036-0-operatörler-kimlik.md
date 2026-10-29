- show_content = true
- show_editor = true
- show_terminal = true
- language = "javascript"
- title = "🪪 Operatörler : Kimlik"
- run = "node main.js"

- parts/0:
- text
# 🪪 **==** ve **===** : İlk Karşılaşma

JavaScript'te eşitlik için iki operatör vardır: ``==`` ve ``===``. ``==`` değerleri
karşılaştırmadan önce tipleri birbirine çevirebilir (type coercion), ``===`` ise hem
değerin hem de tipin aynı olmasını ister. ``1 == "1"`` bu yüzden ``true``, ``1 === "1"``
ise ``false`` olur.

<code-view name="main.js" language="javascript">
console.log(1 == "1");
console.log(1 === "1");
</code-view>

<code-view name="Terminal" language="bash">
true
false
</code-view>

# 🎯 1. Görev

Birinci satırda ``true``, ikinci satırda ``false`` çıkacak şekilde karşılaştırma
operatörlerini yerleştirir misin?

- files/main.js/.block
// Görev: Birinci satır true, ikinci satır false çıksın diye karşılaştırma operatörlerini yaz.
// Birinci boşluğa == (gevşek eşitlik), ikinci boşluğa === (katı eşitlik) yaz.
// Beklenen çıktı:
// true
// false
console.log(1 <<< ❓ >>> "1");
console.log(1 <<< ❓ >>> "1");
---------------------
- tests/0/output
true
false

- tests/0/require/0 = "\u003d\u003d"
- tests/0/require/1 = "\u003d\u003d\u003d"

---------------------
- parts/1:
- text
# 🔁 **==** Tipleri Çevirir

``==`` iki değeri karşılaştırırken birinin tipini diğerine uydurur. Bu yüzden
``0 == false`` ve ``null == undefined`` sonuçları ``true`` olur. ``===`` ise tip
değiştirmez, ``null === undefined`` dediğimizde ``false`` alırız.

<code-view name="main.js" language="javascript">
console.log(0 == false);
console.log(null == undefined);
console.log(null === undefined);
</code-view>

<code-view name="Terminal" language="bash">
true
true
false
</code-view>

# 🎯 2. Görev

İlk iki satır ``true``, üçüncü satır ``false`` olacak şekilde operatörleri yerleştirir
misin?

- files/main.js/.block
// Görev: İlk iki satır true, üçüncü satır false olacak şekilde operatörleri yaz.
// Birinci ve ikinci boşluğa ==, üçüncü boşluğa === operatörünü yaz.
// Beklenen çıktı:
// true
// true
// false
console.log(0 <<< ❓ >>> false);
console.log(null <<< ❓ >>> undefined);
console.log(null <<< ❓ >>> undefined);
---------------------
- tests/0/output
true
true
false

- tests/0/require/0 = "\u003d\u003d"
- tests/0/require/1 = "\u003d\u003d"
- tests/0/require/2 = "\u003d\u003d\u003d"

---------------------
- parts/2:
- text
# ✅ **===** : Hem Tip Hem Değer

``===`` operatörü "katı eşitlik" (strict equality) demektir: tipler farklıysa sonuç hemen
``false`` olur. Kod yazarken neredeyse her zaman ``===`` tercih edilir; böylece beklenmedik
tip dönüşümlerinden korunuruz.

<code-view name="main.js" language="javascript">
let yaş = 30;
console.log(yaş === 30);
console.log(yaş === "30");
console.log(yaş == "30");
</code-view>

<code-view name="Terminal" language="bash">
true
false
true
</code-view>

# 🎯 3. Görev

``yaş`` değişkenini hem sayıyla hem metinle ``===`` ile karşılaştıran programı yazar
mısın? Çıktı sırasıyla ``true`` ve ``false`` olmalı.

- files/main.js/.block
// Görev: yaş değişkenini hem sayı hem metinle === (katı eşitlik) ile karşılaştır.
// İki boşluğa da === operatörünü yaz: yaş === 30 ve yaş === "30".
// Beklenen çıktı:
// true
// false
let yaş = 30;
console.log(yaş <<< ❓ >>> 30);
console.log(yaş <<< ❓ >>> "30");
---------------------
- tests/0/output
true
false

- tests/0/require = "\u003d\u003d\u003d"

---------------------
- tests/1/files/main.js/.block
// Görev: yaş değişkenini 45 sayısı ve "45" metni ile === kullanarak karşılaştır.
// İkinci test aynı kuralı farklı değerle denetler: === (katı eşitlik) operatörü.
// Beklenen çıktı:
// true
// false
let yaş = 45;
console.log(yaş <<< ❓ >>> 45);
console.log(yaş <<< ❓ >>> "45");
- tests/1/output
true
false

- tests/1/require = "\u003d\u003d\u003d"

---------------------
- parts/3:
- text
# 🤔 **NaN** : Kendine Bile Eşit Değil

``NaN`` (Not a Number) "sayı değil" demektir ve JavaScript'te en ilginç değerdir:
``NaN === NaN`` sonucu ``false`` olur! Bu yüzden NaN kontrolü için ``Object.is(NaN, NaN)``
kullanırız; bu ifade ``true`` döner.

<code-view name="main.js" language="javascript">
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));
console.log(Number.isNaN(NaN));
</code-view>

<code-view name="Terminal" language="bash">
false
true
true
</code-view>

# 🎯 4. Görev

``NaN`` değerinin kendine ``===`` ile eşit olmadığını, ama ``Object.is`` ile eşit
olduğunu yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: NaN'ın kendine === ile eşit olmadığını, Object.is ile eşit olduğunu yazdır.
// İlk boşluğa ===, ikinci boşluğa Object.is yaz: Object.is(NaN, NaN) true döner.
// Beklenen çıktı:
// false
// true
console.log(NaN <<< ❓ >>> NaN);
console.log(<<< ❓ >>>(NaN, NaN));
---------------------
- tests/0/output
false
true

- tests/0/require/0 = "\u003d\u003d\u003d"
- tests/0/require/1 = "Object.is"

---------------------
- parts/4:
- text
# 🔢 **Number.isNaN** : Sayı Değil mi?

Bir hesaplamanın sonucu geçersiz olduğunda ``NaN`` elde ederiz; örneğin ``0 / 0``.
``Number.isNaN(değer)`` bu değerin NaN olup olmadığını söyler.
``Object.is(değer, NaN)`` de aynı işi yapar.

<code-view name="main.js" language="javascript">
let sonuç = 0 / 0;
console.log(sonuç);
console.log(Number.isNaN(sonuç));
console.log(Object.is(sonuç, NaN));
</code-view>

<code-view name="Terminal" language="bash">
NaN
true
true
</code-view>

# 🎯 5. Görev

``0 / 0`` sonucunu bir değişkende tutup NaN olup olmadığını yazdıran programı yazar
mısın?

- files/main.js/.block
// Görev: 0 / 0 sonucunun NaN olup olmadığını Number.isNaN ve Object.is ile denetle.
// Birinci boşluğa sonuç, ikinci boşluğa NaN yaz; sonuç değişkende tutulur.
// Beklenen çıktı:
// NaN
// true
// true
let sonuç = 0 / 0;
console.log(sonuç);
console.log(Number.isNaN(<<< ❓ >>>));
console.log(Object.is(sonuç, <<< ❓ >>>));
---------------------
- tests/0/output
NaN
true
true

---------------------
- parts/5:
- text
# ⚠️ **0** ve **-0** : İki Sıfır

JavaScript'te iki tane sıfır vardır: ``0`` ve ``-0``. ``===`` ile karşılaştırınca ikisi
"eşit" görünür, çünkü değerleri aynıdır. Ama ``Object.is`` bu iki sıfırı ayırt eder ve
``false`` döner. Bir de ``1 / -0`` işleminin sonucu ``-Infinity`` olur.

<code-view name="main.js" language="javascript">
let sıfır = 0;
let eksiSıfır = -0;
console.log(sıfır === eksiSıfır);
console.log(Object.is(sıfır, eksiSıfır));
console.log(1 / eksiSıfır);
</code-view>

<code-view name="Terminal" language="bash">
true
false
&minus;Infinity
</code-view>

# 🎯 6. Görev

``0`` ile ``-0`` arasındaki farkı gösteren programı yazar mısın?

- files/main.js/.block
// Görev: 0 ile -0 arasındaki farkı göster: === true, Object.is false, 1 / -0 -Infinity.
// Birinci boşluğa ===, ikinci boşluğa eksiSıfır yaz; son satır sabittir.
// Beklenen çıktı:
// true
// false
// -Infinity
let eksiSıfır = -0;
console.log(0 <<< ❓ >>> eksiSıfır);
console.log(Object.is(0, <<< ❓ >>>));
console.log(1 / eksiSıfır);
---------------------
- tests/0/output
true
false
&minus;Infinity

- tests/0/require/0 = "\u003d\u003d\u003d"
- tests/0/require/1 = "eksiSıfır"

---------------------
- parts/6:
- text
# 📚 Dizilerin Referans Eşitliği

Diziler (array) referans tiplidir: içerikleri aynı olsa bile iki farklı dizi
**eşit değildir**. ``[1, 2] === [1, 2]`` sonucu ``false`` olur, çünkü bellekte iki ayrı
dizi vardır. Aynı diziye iki değişkenle bakarsak ``true`` alırız.

<code-view name="main.js" language="javascript">
let a = [1, 2, 3];
let b = [1, 2, 3];
let c = a;
console.log(a === b);
console.log(a === c);
</code-view>

<code-view name="Terminal" language="bash">
false
true
</code-view>

# 🎯 7. Görev

Aynı içerikli iki ayrı dizinin eşit olmadığını, aynı diziye bakan iki değişkenin ise eşit
olduğunu yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Aynı içerikli iki ayrı dizinin eşit olmadığını === ile göster.
// İki boşluğa da === yaz: a === b false, a === c true döner.
// Beklenen çıktı:
// false
// true
let a = [1, 2, 3];
let b = [1, 2, 3];
let c = a;
console.log(a <<< ❓ >>> b);
console.log(a <<< ❓ >>> c);
---------------------
- tests/0/output
false
true

- tests/0/require = "\u003d\u003d\u003d"

---------------------
- tests/1/files/main.js/.block
// Görev: Aynı içerikli iki ayrı metin dizisinin eşit olmadığını === ile göster.
// İkinci test aynı kuralı farklı dizilerle denetler: === (katı eşitlik).
// Beklenen çıktı:
// false
// true
let a = ["elma", "armut"];
let b = ["elma", "armut"];
let c = a;
console.log(a <<< ❓ >>> b);
console.log(a <<< ❓ >>> c);
- tests/1/output
false
true

- tests/1/require = "\u003d\u003d\u003d"

---------------------
- parts/7:
- text
# 📦 Nesnelerin Referans Eşitliği

Nesneler (object) için de durum aynıdır: ``{ ad: "Ayşe" } === { ad: "Ayşe" }`` sonucu
``false`` olur. Sadece **içeriği** karşılaştırmak istiyorsak ``JSON.stringify`` ile ikisini
metne çevirip öyle karşılaştırabiliriz.

<code-view name="main.js" language="javascript">
let kullanıcı1 = { ad: "Ayşe" };
let kullanıcı2 = { ad: "Ayşe" };
console.log(kullanıcı1 === kullanıcı2);
console.log(kullanıcı1 === kullanıcı1);
console.log(JSON.stringify(kullanıcı1) === JSON.stringify(kullanıcı2));
</code-view>

<code-view name="Terminal" language="bash">
false
true
true
</code-view>

# 🎯 8. Görev

İki ayrı nesnenin eşit olmadığını, aynı nesnenin kendine eşit olduğunu ve içeriklerinin
``JSON.stringify`` ile karşılaştırılınca eşit olduğunu yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: İki ayrı nesnenin eşit olmadığını === ile, içerik eşitliğini JSON.stringify ile göster.
// İlk iki boşluğa ===, üçüncü boşluğa JSON.stringify yaz.
// Beklenen çıktı:
// false
// true
// true
let kullanıcı1 = { ad: "Ayşe" };
let kullanıcı2 = { ad: "Ayşe" };
console.log(kullanıcı1 <<< ❓ >>> kullanıcı2);
console.log(kullanıcı1 <<< ❓ >>> kullanıcı1);
console.log(<<< ❓ >>>(kullanıcı1) === JSON.stringify(kullanıcı2));
---------------------
- tests/0/output
false
true
true

- tests/0/require/0 = "\u003d\u003d\u003d"
- tests/0/require/1 = "\u003d\u003d\u003d"
- tests/0/require/2 = "JSON.stringify"

---------------------
- parts/8:
- text
# 📝 Formdan Gelen Değer Metindir

Formdan ya da terminalden gelen değerler her zaman **metin**tir. ``"18"`` ile ``18``
sayısını ``===`` ile karşılaştırırsak ``false`` alırız. Önce ``Number()`` ile sayıya
çevirmeliyiz; ancak o zaman ``true`` olur.

<code-view name="main.js" language="javascript">
let formYaş = "18";
let sınır = 18;
console.log(formYaş === sınır);
console.log(Number(formYaş) === sınır);
</code-view>

<code-view name="Terminal" language="bash">
false
true
</code-view>

# 🎯 9. Görev

Metin olarak gelen ``formYaş`` değerini önce olduğu gibi, sonra sayıya çevirerek ``sınır``
ile karşılaştıran programı yazar mısın?

- files/main.js/.block
// Görev: Metin olarak gelen formYaş'ı önce olduğu gibi, sonra Number() ile karşılaştır.
// İki boşluğa da === operatörünü yaz: formYaş === sınır ve Number(formYaş) === sınır.
// Beklenen çıktı:
// false
// true
let formYaş = "18";
let sınır = 18;
console.log(formYaş <<< ❓ >>> sınır);
console.log(Number(formYaş) <<< ❓ >>> sınır);
---------------------
- tests/0/output
false
true

- tests/0/require = "\u003d\u003d\u003d"

---------------------
- tests/1/files/main.js/.block
// Görev: formYaş metnini 24 sayısı ile === kullanarak karşılaştır.
// İkinci test aynı kuralı farklı değerle denetler: === ve Number() dönüşümü.
// Beklenen çıktı:
// false
// true
let formYaş = "24";
let sınır = 24;
console.log(formYaş <<< ❓ >>> sınır);
console.log(Number(formYaş) <<< ❓ >>> sınır);
- tests/1/output
false
true

- tests/1/require = "\u003d\u003d\u003d"

---------------------
- parts/9:
- text
# 🏆 Mini Tekrar

Öğrendiklerimizi bir araya getirelim: ``NaN``, referans eşitliği, ``-0`` ve ``===`` ile
``Object.is`` farkını tek bir programda görelim. Cevapları yazarken önce hangi satırın ne
yazdırması gerektiğini düşün.

<code-view name="main.js" language="javascript">
let n = NaN;
let dizi1 = [1, 2];
let dizi2 = [1, 2];
console.log(n === n);
console.log(Object.is(n, n));
console.log(dizi1 === dizi2);
console.log(0 === -0);
console.log(Object.is(0, -0));
console.log(1 === "1");
</code-view>

<code-view name="Terminal" language="bash">
false
true
false
true
false
false
</code-view>

# 🎯 10. Görev

Altı satırın tamamını doğru yazdıracak şekilde operatörleri ve fonksiyon adlarını
tamamlar mısın?

- files/main.js/.block
// Görev: Altı satırı da doğru cevapla: NaN, referans eşitliği, -0 ve === / Object.is farkı.
// Boşluklara sırasıyla ===, Object.is, ===, ===, Object.is ve === yaz.
// Beklenen çıktı:
// false
// true
// false
// true
// false
// false
let n = NaN;
let dizi1 = [1, 2];
let dizi2 = [1, 2];
console.log(n <<< ❓ >>> n);
console.log(<<< ❓ >>>(n, n));
console.log(dizi1 <<< ❓ >>> dizi2);
console.log(0 <<< ❓ >>> -0);
console.log(<<< ❓ >>>(0, -0));
console.log(1 <<< ❓ >>> "1");
---------------------
- tests/0/output
false
true
false
true
false
false

- tests/0/require/0 = "\u003d\u003d\u003d"
- tests/0/require/1 = "Object.is"

---------------------
