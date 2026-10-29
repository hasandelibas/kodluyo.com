- show_content = true
- show_editor = true
- show_terminal = true
- language = "javascript"
- title = "🧊 Koleksiyonlar : Değiştirilemez Diziler"
- run = "node main.js"

- parts/0:
- text
# 🧊 Değiştirilemez Diziler

Dizi (array), birden fazla değeri tek bir isim altında saklayan koleksiyondur. ``const``
ile tanımlanan bir dizide **bağlantı** kilitlenir; yani değişkene yeni bir dizi atayamayız.
Ama dizinin **içeriği** hâlâ değiştirilebilir: bir elemanı güncelleyebilir, eleman
ekleyebilir veya çıkarabiliriz.

<code-view name="main.js" language="javascript">
const renkler = ["kırmızı", "yeşil"];
renkler[0] = "mavi";
console.log(renkler);
</code-view>

<code-view name="Terminal" language="bash">
[ 'mavi', 'yeşil' ]
</code-view>

# 🎯 1. Görev

``renkler`` dizisinin ilk elemanını ``"mavi"`` yapan programı yazar mısın?

- files/main.js/.block
// Görev: renkler dizisinin ilk elemanını "mavi" yap.
// Index 0 ilk elemandır: renkler[0] = "mavi" yaz. const dizide eleman güncellenebilir.
// Beklenen çıktı:
// [ 'mavi', 'yeşil' ]
const renkler = ["kırmızı", "yeşil"];
renkler[0] = <<< ❓ >>>;
console.log(renkler);
---------------------
- tests/0/output
[ 'mavi', 'yeşil' ]

---------------------
- parts/1:
- text
# ✅ Tebrikler

``const`` dizisine yeni eleman **ekleyebiliriz**. ``push`` metodu dizinin sonuna eleman
koyar. Kilitlenen şey dizinin kendisi değil, ``const`` değişkeninin gösterdiği adrestir;
yani ``renkler = ["başka"]`` yazamayız, ama ``renkler.push(...)`` yazabiliriz.

<code-view name="main.js" language="javascript">
const sayılar = [1, 2, 3];
sayılar.push(4);
console.log(sayılar);
console.log(sayılar.length);
</code-view>

<code-view name="Terminal" language="bash">
[ 1, 2, 3, 4 ]
4
</code-view>

# 🎯 2. Görev

``sayılar`` dizisinin sonuna ``4`` ekleyen programı yazar mısın?

- files/main.js/.block
// Görev: sayılar dizisinin sonuna 4 ekle.
// .push(değer) dizinin sonuna eleman ekler: sayılar.push(4). 4 sayıdır, tırnak kullanma.
// Beklenen çıktı:
// [ 1, 2, 3, 4 ]
// 4
const sayılar = [1, 2, 3];
sayılar.push(<<< ❓ >>>);
console.log(sayılar);
console.log(sayılar.length);
---------------------
- tests/0/output
[ 1, 2, 3, 4 ]
4

---------------------
- parts/2:
- text
# 🔒 Object.freeze

Dizinin içeriğinin de değişmemesini istiyorsak ``Object.freeze()`` kullanırız. Bu
fonksiyon diziyi **dondurur**: artık ne eleman eklenebilir ne de mevcut eleman
değiştirilebilir. ``Object.freeze()`` dondurduğu diziyi geri döndürür, bu yüzden
``const dizi = Object.freeze([...])`` diye tek satırda yazabiliriz.

<code-view name="main.js" language="javascript">
const sayılar = Object.freeze([1, 2, 3]);
console.log(sayılar);
console.log(Object.isFrozen(sayılar));
</code-view>

<code-view name="Terminal" language="bash">
[ 1, 2, 3 ]
true
</code-view>

# 🎯 3. Görev

``[1, 2, 3]`` dizisini dondurup ``true`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: [1, 2, 3] dizisini Object.freeze() ile dondur.
// Object.freeze(dizi) diziyi dondurup aynı diziyi geri döndürür; boşluğa freeze yaz.
// Beklenen çıktı:
// [ 1, 2, 3 ]
// true
const sayılar = Object.<<< ❓ >>>([1, 2, 3]);
console.log(sayılar);
console.log(Object.isFrozen(sayılar));
---------------------
- tests/0/output
[ 1, 2, 3 ]
true

---------------------
- parts/3:
- text
# 🔍 Object.isFrozen

``Object.isFrozen()`` bir dizinin dondurulmuş olup olmadığını söyler. Sonuç ``true``
(donmuş) ya da ``false`` (donmamış) olur. Normal yolla oluşturduğumuz diziler
donmamıştır; sadece ``Object.freeze()`` ile dondurulanlar ``true`` verir.

<code-view name="main.js" language="javascript">
const dondurulmuş = Object.freeze(["a", "b"]);
const serbest = ["a", "b"];
console.log(Object.isFrozen(dondurulmuş));
console.log(Object.isFrozen(serbest));
</code-view>

<code-view name="Terminal" language="bash">
true
false
</code-view>

# 🎯 4. Görev

Önce ``dondurulmuş`` dizisini, sonra ``serbest`` dizisini kontrol eden programı yazar
mısın?

- files/main.js/.block
// Görev: Önce dondurulmuş diziyi, sonra serbest diziyi Object.isFrozen() ile kontrol et.
// Birinci boşluğa dondurulmuş, ikinci boşluğa serbest yaz; sonuçlar true ve false olur.
// Beklenen çıktı:
// true
// false
const dondurulmuş = Object.freeze(["a", "b"]);
const serbest = ["a", "b"];
console.log(Object.isFrozen(<<< ❓ >>>));
console.log(Object.isFrozen(<<< ❓ >>>));
---------------------
- tests/0/output
true
false

---------------------
- parts/4:
- text
# 🚫 Donmuş Diziye Ekleme Yok Sayılır

Donmuş bir diziye köşeli parantezle eleman eklemeye ya da var olan elemanı değiştirmeye
çalışırsan program hata vermez; bu istek **sessizce yok sayılır**. Dizi olduğu gibi kalır,
``length`` değişmez. (``push`` gibi metotlar ise hata verebilir, o yüzden dondurulmuş
dizide onları kullanmayız.)

<code-view name="main.js" language="javascript">
const dondurulmuş = Object.freeze([1, 2, 3]);
dondurulmuş[3] = 4;
dondurulmuş[0] = 9;
console.log(dondurulmuş);
console.log(dondurulmuş.length);
</code-view>

<code-view name="Terminal" language="bash">
[ 1, 2, 3 ]
3
</code-view>

# 🎯 5. Görev

Donmuş diziye ``4`` eklemeye ve ilk elemanı ``9`` yapmaya çalışan programı yazar mısın?
Terminalde dizinin hiç değişmediğini göreceksin.

- files/main.js/.block
// Görev: Donmuş diziye 4 eklemeye ve ilk elemanı 9 yapmaya çalış.
// dondurulmuş[3] = 4 ve dondurulmuş[0] = 9 yaz; donmuş dizide bu atamalar yok sayılır.
// Beklenen çıktı:
// [ 1, 2, 3 ]
// 3
const dondurulmuş = Object.freeze([1, 2, 3]);
dondurulmuş[3] = <<< ❓ >>>;
dondurulmuş[0] = <<< ❓ >>>;
console.log(dondurulmuş);
console.log(dondurulmuş.length);
---------------------
- tests/0/output
[ 1, 2, 3 ]
3

- tests/0/require/0 = "4"
- tests/0/require/1 = "9"

---------------------
- parts/5:
- text
# 📋 Spread ile Kopyalayıp Değiştirme

Donmuş bir diziyi değiştirmek istiyorsak **kopyasını** çıkarırız. Üç nokta (``...``)
işareti diziyi yayar (spread); ``[...dizi, 4]`` demek "dizinin tüm elemanları, sonra da
``4``" demektir. Bu yeni dizi donmuş değildir, dilediğin gibi kullanabilirsin.

<code-view name="main.js" language="javascript">
const dondurulmuş = Object.freeze([1, 2, 3]);
const yeni = [...dondurulmuş, 4];
yeni.push(5);
console.log(yeni);
console.log(Object.isFrozen(yeni));
</code-view>

<code-view name="Terminal" language="bash">
[ 1, 2, 3, 4, 5 ]
false
</code-view>

# 🎯 6. Görev

Donmuş dizinin kopyasını çıkarıp sonuna ``4`` ekleyen programı yazar mısın?

- files/main.js/.block
// Görev: Donmuş dizinin kopyasını çıkarıp sonuna 4 ekle.
// const yeni = [...dondurulmuş, 4] yaz: yayma (...) operatörü diziyi kopyalar, aslı bozulmaz.
// Beklenen çıktı:
// [ 1, 2, 3, 4, 5 ]
// false
const dondurulmuş = Object.freeze([1, 2, 3]);
const yeni = [<<< ❓ >>>, 4];
yeni.push(5);
console.log(yeni);
console.log(Object.isFrozen(yeni));
---------------------
- tests/0/output
[ 1, 2, 3, 4, 5 ]
false

- tests/0/require = "...dondurulmuş"

---------------------
- parts/6:
- text
# ⚠️ Sığ (Shallow) Dondurma

``Object.freeze()`` yalnızca **en dış** kutuyu dondurur. İçinde başka bir dizi veya nesne
varsa, onun içi hâlâ değiştirilebilir. Buna **sığ dondurma** (shallow freeze) denir.
Aşağıdaki örnekte ``kutu`` donmuştur ama ``kutu.iç`` dizisi donmamıştır.

<code-view name="main.js" language="javascript">
const kutu = Object.freeze({ iç: [1, 2] });
kutu.iç.push(3);
console.log(kutu.iç);
console.log(Object.isFrozen(kutu));
console.log(Object.isFrozen(kutu.iç));
</code-view>

<code-view name="Terminal" language="bash">
[ 1, 2, 3 ]
true
false
</code-view>

# 🎯 7. Görev

Sığ dondurmayı kendi gözünle gör: ``kutu.iç`` dizisine ``3`` ekleyen programı yazar
mısın? Dışarısı donmuş, içerisi hâlâ serbest olacak.

- files/main.js/.block
// Görev: Donmuş kutunun içindeki kutu.iç dizisine 3 ekle.
// Object.freeze() sığ dondurur: kutu.iç.push(3) çalışır. Boşluğa push yaz.
// Beklenen çıktı:
// [ 1, 2, 3 ]
// true
// false
const kutu = Object.freeze({ iç: [1, 2] });
kutu.iç.<<< ❓ >>>(3);
console.log(kutu.iç);
console.log(Object.isFrozen(kutu));
console.log(Object.isFrozen(kutu.iç));
---------------------
- tests/0/output
[ 1, 2, 3 ]
true
false

---------------------
- parts/7:
- text
# 🧰 Metotlar Yeni Dizi Döndürür

İyi haber: ``slice`` ve ``concat`` gibi metotlar diziyi değiştirmez, **yeni bir dizi**
üretir. Bu yüzden donmuş dizilerle güvenle çalışırız. Donmuş dizi yerinde kalır, sonuç
yeni bir değişkende yaşar.

<code-view name="main.js" language="javascript">
const dondurulmuş = Object.freeze([1, 2, 3]);
const büyük = dondurulmuş.concat([4, 5]);
const kısmi = dondurulmuş.slice(1);
console.log(büyük);
console.log(kısmi);
console.log(dondurulmuş);
</code-view>

<code-view name="Terminal" language="bash">
[ 1, 2, 3, 4, 5 ]
[ 2, 3 ]
[ 1, 2, 3 ]
</code-view>

# 🎯 8. Görev

Donmuş dizinin sonuna ``[4, 5]`` ekleyen ve ilk elemanını atlayan programı yazar mısın?

- files/main.js/.block
// Görev: Donmuş diziyi concat ile birleştir, slice ile ilk elemanı atlayan kopya çıkar.
// dondurulmuş.concat([4, 5]) yeni dizi verir; dondurulmuş.slice(1) ilk elemanı atlar.
// Beklenen çıktı:
// [ 1, 2, 3, 4, 5 ]
// [ 2, 3 ]
// [ 1, 2, 3 ]
const dondurulmuş = Object.freeze([1, 2, 3]);
const büyük = dondurulmuş.<<< ❓ >>>([4, 5]);
const kısmi = dondurulmuş.<<< ❓ >>>(1);
console.log(büyük);
console.log(kısmi);
console.log(dondurulmuş);
---------------------
- tests/0/output
[ 1, 2, 3, 4, 5 ]
[ 2, 3 ]
[ 1, 2, 3 ]

---------------------
- parts/8:
- text
# 🏆 Mini Tekrar

Öğrendiklerini birleştirelim. Alışveriş sepetinde başlangıç listesi **donmuş** olsun;
yeni ürünü eklemek için listenin kopyasını çıkaralım. Böylece hem başlangıç listesi
bozulmaz hem de yeni bir sepetimiz olur.

<code-view name="main.js" language="javascript">
const başlangıç = Object.freeze(["ekmek", "süt"]);
const sepet = [...başlangıç, "peynir"];
console.log(sepet);
console.log(Object.isFrozen(başlangıç));
console.log(başlangıç.length);
</code-view>

<code-view name="Terminal" language="bash">
[ 'ekmek', 'süt', 'peynir' ]
true
2
</code-view>

# 🎯 9. Görev

``başlangıç`` listesini bozmadan, ``"peynir"`` ürününü de içeren yeni bir sepet
oluşturan programı yazar mısın?

- files/main.js/.block
// Görev: başlangıç listesini bozmadan "peynir" ürününü de içeren yeni bir sepet oluştur.
// const sepet = [...başlangıç, "peynir"] yaz: yayma (...) donmuş diziyi kopyalar.
// Beklenen çıktı:
// [ 'ekmek', 'süt', 'peynir' ]
// true
// 2
const başlangıç = Object.freeze(["ekmek", "süt"]);
const sepet = [<<< ❓ >>>, "peynir"];
console.log(sepet);
console.log(Object.isFrozen(başlangıç));
console.log(başlangıç.length);
---------------------
- tests/0/output
[ 'ekmek', 'süt', 'peynir' ]
true
2

- tests/0/require = "...başlangıç"

---------------------
