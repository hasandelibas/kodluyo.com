- show_content = true
- show_editor = true
- show_terminal = true
- language = "javascript"
- title = "🔍 Operatörler : Aitlik"
- run = "node main.js"

- parts/0:
- text
# 🔍 **in** Operatörü : Anahtar Var mı?

Bir nesnede (object) belirli bir anahtarın (key) olup olmadığını ``in`` operatörü ile
öğreniriz. Operatörün soluna anahtarı metin olarak, sağına nesneyi yazarız. Sonuç
``true`` (var) ya da ``false`` (yok) olur.

<code-view name="main.js" language="javascript">
let kişi = { ad: "Ayşe", yaş: 30 };
console.log("ad" in kişi);
console.log("maaş" in kişi);
</code-view>

<code-view name="Terminal" language="bash">
true
false
</code-view>

# 🎯 1. Görev

``kişi`` nesnesinde ``ad`` anahtarının olduğunu, ``maaş`` anahtarının olmadığını
yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: "ad" ve "maaş" anahtarlarının kişi nesnesinde olup olmadığını in ile sor.
// İki boşluğa da in operatörünü yaz: "ad" in kişi ve "maaş" in kişi.
// Beklenen çıktı:
// true
// false
let kişi = { ad: "Ayşe", yaş: 30 };
console.log("ad" <<< ❓ >>> kişi);
console.log("maaş" <<< ❓ >>> kişi);
---------------------
- tests/0/output
true
false

- tests/0/require = "in"

---------------------
- tests/1/files/main.js/.block
// Görev: "fiyat" ve "stok" anahtarlarını ürün nesnesinde in ile kontrol et.
// İkinci test aynı kuralı farklı anahtarlarla denetler: in operatörü.
// Beklenen çıktı:
// true
// false
let ürün = { ad: "Kalem", fiyat: 25 };
console.log("fiyat" <<< ❓ >>> ürün);
console.log("stok" <<< ❓ >>> ürün);
- tests/1/output
true
false

- tests/1/require = "in"

---------------------
- parts/1:
- text
# ⚠️ **in** ve Prototip (Prototype)

``in`` yalnızca nesnenin kendi anahtarlarına değil, miras aldığı (prototype) anahtarlara da
bakar. JavaScript'te her nesne ``Object``'ten miras aldığı için ``toString`` gibi hazır
anahtarlar da ``true`` döner. Bu ayrıntıyı aklımızda tutalım; bir sonraki partta yalnızca
nesnenin kendi anahtarlarını nasıl kontrol edeceğimizi göreceğiz.

<code-view name="main.js" language="javascript">
let kitap = { ad: "Kürk Mantolu Madonna" };
console.log("ad" in kitap);
console.log("yazar" in kitap);
console.log("toString" in kitap);
</code-view>

<code-view name="Terminal" language="bash">
true
false
true
</code-view>

# 🎯 2. Görev

``ad`` anahtarının var, ``yazar`` anahtarının yok, ``toString`` anahtarının ise (miras
aldığı için) var olduğunu yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: "ad", "yazar" ve "toString" anahtarlarını kitap nesnesinde in ile kontrol et.
// Üç boşluğa da in operatörünü yaz; toString miras alındığı için true döner.
// Beklenen çıktı:
// true
// false
// true
let kitap = { ad: "Kürk Mantolu Madonna" };
console.log("ad" <<< ❓ >>> kitap);
console.log("yazar" <<< ❓ >>> kitap);
console.log("toString" <<< ❓ >>> kitap);
---------------------
- tests/0/output
true
false
true

- tests/0/require = "in"

---------------------
- parts/2:
- text
# ✅ **Object.hasOwn** : Yalnızca Kendi Anahtarları

``Object.hasOwn(nesne, anahtar)`` yalnızca nesnenin **kendi** anahtarlarına bakar, miras
aldıklarını saymaz. Bu yüzden ``toString`` için ``false`` döner. Kısacası: "bu anahtar
gerçekten nesnede tanımlı mı?" sorusunun en güvenli cevabıdır.

<code-view name="main.js" language="javascript">
let kitap = { ad: "Kürk Mantolu Madonna" };
console.log(Object.hasOwn(kitap, "ad"));
console.log(Object.hasOwn(kitap, "toString"));
</code-view>

<code-view name="Terminal" language="bash">
true
false
</code-view>

# 🎯 3. Görev

``kitap`` nesnesinin kendi anahtarlarını ``Object.hasOwn`` ile kontrol eden programı yazar
mısın?

- files/main.js/.block
// Görev: Yalnızca nesnenin kendi anahtarlarını Object.hasOwn ile kontrol et.
// İki boşluğa da Object.hasOwn yaz: Object.hasOwn(kitap, "ad") ve ("toString").
// Beklenen çıktı:
// true
// false
let kitap = { ad: "Kürk Mantolu Madonna" };
console.log(<<< ❓ >>>(kitap, "ad"));
console.log(<<< ❓ >>>(kitap, "toString"));
---------------------
- tests/0/output
true
false

- tests/0/require = "Object.hasOwn"

---------------------
- tests/1/files/main.js/.block
// Görev: öğrenci nesnesinin kendi anahtarlarını Object.hasOwn ile kontrol et.
// İkinci test aynı kuralı farklı anahtarlarla denetler: Object.hasOwn.
// Beklenen çıktı:
// true
// false
let öğrenci = { ad: "Mert", sınıf: 9 };
console.log(<<< ❓ >>>(öğrenci, "sınıf"));
console.log(<<< ❓ >>>(öğrenci, "not"));
- tests/1/output
true
false

- tests/1/require = "Object.hasOwn"

---------------------
- parts/3:
- text
# 📚 **Array.includes** : Dizide Değer Var mı?

Bir dizinin (array) içinde aradığımız değer var mı diye ``includes()`` metodu ile
bakabiliriz. Metot ``true`` ya da ``false`` döner. Dikkat: ``includes`` nesnede anahtar
değil, dizide **değer** arar.

<code-view name="main.js" language="javascript">
let meyveler = ["elma", "armut", "çilek"];
console.log(meyveler.includes("armut"));
console.log(meyveler.includes("karpuz"));
</code-view>

<code-view name="Terminal" language="bash">
true
false
</code-view>

# 🎯 4. Görev

``meyveler`` dizisinde ``armut`` olduğunu, ``karpuz`` olmadığını yazdıran programı yazar
mısın?

- files/main.js/.block
// Görev: meyveler dizisinde "armut" ve "karpuz" değerlerini includes ile ara.
// İki boşluğa da includes yaz: meyveler.includes("armut") ve ("karpuz").
// Beklenen çıktı:
// true
// false
let meyveler = ["elma", "armut", "çilek"];
console.log(meyveler.<<< ❓ >>>("armut"));
console.log(meyveler.<<< ❓ >>>("karpuz"));
---------------------
- tests/0/output
true
false

- tests/0/require = "includes"

---------------------
- tests/1/files/main.js/.block
// Görev: şehirler dizisinde "İzmir" ve "Adana" değerlerini includes ile ara.
// İkinci test aynı kuralı farklı değerlerle denetler: includes metodu.
// Beklenen çıktı:
// true
// false
let şehirler = ["Ankara", "İzmir", "Bursa"];
console.log(şehirler.<<< ❓ >>>("İzmir"));
console.log(şehirler.<<< ❓ >>>("Adana"));
- tests/1/output
true
false

- tests/1/require = "includes"

---------------------
- parts/4:
- text
# 🔤 **String.includes** : Metin İçinde Metin

Bir metnin (string) içinde başka bir metin geçiyor mu diye ``includes()`` ile
bakabiliriz. Dizi metodunun metin hâli gibi düşünebilirsin. Sonuca göre ``true`` ya da
``false`` yazdırırız.

<code-view name="main.js" language="javascript">
let cümle = "JavaScript çok eğlenceli";
console.log(cümle.includes("eğlenceli"));
console.log(cümle.includes("sıkıcı"));
</code-view>

<code-view name="Terminal" language="bash">
true
false
</code-view>

# 🎯 5. Görev

``cümle`` içinde ``eğlenceli`` kelimesinin geçtiğini, ``sıkıcı`` kelimesinin geçmediğini
yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: cümle içinde "eğlenceli" ve "sıkıcı" kelimelerini includes ile ara.
// İki boşluğa da includes yaz: cümle.includes("eğlenceli") ve ("sıkıcı").
// Beklenen çıktı:
// true
// false
let cümle = "JavaScript çok eğlenceli";
console.log(cümle.<<< ❓ >>>("eğlenceli"));
console.log(cümle.<<< ❓ >>>("sıkıcı"));
---------------------
- tests/0/output
true
false

- tests/0/require = "includes"

---------------------
- tests/1/files/main.js/.block
// Görev: cümle içinde "balık" ve "kuş" kelimelerini includes ile ara.
// İkinci test aynı kuralı farklı kelimelerle denetler: includes metodu.
// Beklenen çıktı:
// true
// false
let cümle = "Kedi balık sever";
console.log(cümle.<<< ❓ >>>("balık"));
console.log(cümle.<<< ❓ >>>("kuş"));
- tests/1/output
true
false

- tests/1/require = "includes"

---------------------
- parts/5:
- text
# 🅰️ Büyük / Küçük Harf Duyarlılığı

``includes()`` büyük ve küçük harfe **duyarlıdır**: ``"Merhaba Dünya"`` içinde
``dünya`` aradığında ``false`` alırsın, çünkü metinde ``Dünya`` yazıyor. Aramadan önce
``toLowerCase()`` ile metni küçük harfe çevirirsek eşleşme bulunur.

<code-view name="main.js" language="javascript">
let mesaj = "Merhaba Dünya";
console.log(mesaj.includes("dünya"));
console.log(mesaj.toLowerCase().includes("dünya"));
</code-view>

<code-view name="Terminal" language="bash">
false
true
</code-view>

# 🎯 6. Görev

``mesaj`` metnini küçük harfe çevirip ``dünya`` kelimesini aratan programı yazar mısın?

- files/main.js/.block
// Görev: mesaj metnini toLowerCase() ile küçük harfe çevirip "dünya" ara.
// İkinci satırdaki boşluğa toLowerCase yaz; ilk satır harf duyarlılığı için false verir.
// Beklenen çıktı:
// false
// true
let mesaj = "Merhaba Dünya";
console.log(mesaj.includes("dünya"));
console.log(mesaj.<<< ❓ >>>().includes("dünya"));
---------------------
- tests/0/output
false
true

- tests/0/require = "toLowerCase"

---------------------
- tests/1/files/main.js/.block
// Görev: "İyi Geceler" metnini toLowerCase() ile küçük harfe çevirip "geceler" ara.
// İkinci test aynı kuralı farklı metinle denetler: toLowerCase metodu.
// Beklenen çıktı:
// false
// true
let mesaj = "İyi Geceler";
console.log(mesaj.includes("geceler"));
console.log(mesaj.<<< ❓ >>>().includes("geceler"));
- tests/1/output
false
true

- tests/1/require = "toLowerCase"

---------------------
- parts/6:
- text
# 🧩 **instanceof** : Bu Bir Dizi mi, Nesne mi?

``instanceof`` bir değerin hangi yapıdan (constructor) geldiğini sorar: dizi mi, nesne mi?
Sonucu yine ``true`` ya da ``false`` olur. Bir dizi aynı zamanda nesne (``Object``) olduğu
için ``[] instanceof Object`` de ``true`` döner.

<code-view name="main.js" language="javascript">
let liste = [1, 2, 3];
let kişi = { ad: "Ali" };
console.log(liste instanceof Array);
console.log(kişi instanceof Array);
console.log(kişi instanceof Object);
</code-view>

<code-view name="Terminal" language="bash">
true
false
true
</code-view>

# 🎯 7. Görev

``liste`` bir dizi mi, ``kişi`` bir dizi mi, peki ``kişi`` bir nesne mi? Cevapları yazdıran
programı yazar mısın?

- files/main.js/.block
// Görev: liste ve kişi değişkenlerinin Array, kişinin ise Object olup olmadığını instanceof ile sor.
// Üç boşluğa da instanceof operatörünü yaz: liste instanceof Array, kişi instanceof Object.
// Beklenen çıktı:
// true
// false
// true
let liste = [1, 2, 3];
let kişi = { ad: "Ali" };
console.log(liste <<< ❓ >>> Array);
console.log(kişi <<< ❓ >>> Array);
console.log(kişi <<< ❓ >>> Object);
---------------------
- tests/0/output
true
false
true

- tests/0/require = "instanceof"

---------------------
- tests/1/files/main.js/.block
// Görev: liste ve kitap değişkenlerini Array ve Object ile instanceof kullanarak sorgula.
// İkinci test aynı kuralı farklı değişkenlerle denetler: instanceof operatörü.
// Beklenen çıktı:
// true
// false
// true
let liste = ["a", "b"];
let kitap = { ad: "Nutuk" };
console.log(liste <<< ❓ >>> Array);
console.log(kitap <<< ❓ >>> Array);
console.log(kitap <<< ❓ >>> Object);
- tests/1/output
true
false
true

- tests/1/require = "instanceof"

---------------------
- parts/7:
- text
# 🗂️ **instanceof** : Map ve Set

``instanceof`` yalnızca dizi ve nesne için değil, ``Map`` ve ``Set`` gibi koleksiyonlar
için de kullanılır. Bir ``Set`` değeri ``Map`` midir diye sorarsak ``false`` alırız.
Böylece elimizdeki koleksiyonun türünü kolayca ayırt edebiliriz.

<code-view name="main.js" language="javascript">
let harita = new Map([["a", 1]]);
let küme = new Set([1, 2, 2]);
console.log(harita instanceof Map);
console.log(küme instanceof Set);
console.log(küme instanceof Map);
</code-view>

<code-view name="Terminal" language="bash">
true
true
false
</code-view>

# 🎯 8. Görev

``harita`` değişkeninin ``Map``, ``küme`` değişkeninin ``Set`` olduğunu ve ``küme``nin
``Map`` olmadığını yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: harita bir Map mi, küme bir Set mi diye instanceof ile sor.
// Birinci boşluğa Map, ikinci boşluğa Set yaz; üçüncü satır sabittir.
// Beklenen çıktı:
// true
// true
// false
let harita = new Map([["a", 1]]);
let küme = new Set([1, 2, 2]);
console.log(harita instanceof <<< ❓ >>>);
console.log(küme instanceof <<< ❓ >>>);
console.log(küme instanceof Map);
---------------------
- tests/0/output
true
true
false

- tests/0/require/0 = "Map"
- tests/0/require/1 = "Set"

---------------------
- parts/8:
- text
# ⚠️ Dizide **in** ile **includes** Farkı

Dizilerde ``in`` operatörü **indeks** (sıra numarası) kontrol eder, değer kontrol etmez.
Bu yüzden ``"mavi" in renkler`` yazınca ``false`` alırız. Dizide değer aramak istiyorsak
``includes()`` kullanmalıyız.

<code-view name="main.js" language="javascript">
let renkler = ["kırmızı", "mavi", "yeşil"];
console.log(0 in renkler);
console.log("mavi" in renkler);
console.log(renkler.includes("mavi"));
</code-view>

<code-view name="Terminal" language="bash">
true
false
true
</code-view>

# 🎯 9. Görev

``0`` indeksinin var olduğunu, ``"mavi"`` anahtarının olmadığını ve ``mavi`` değerinin
dizide bulunduğunu yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Dizide indeks için in, değer için includes kullan.
// Birinci ve ikinci boşluğa in, üçüncü boşluğa includes yaz.
// Beklenen çıktı:
// true
// false
// true
let renkler = ["kırmızı", "mavi", "yeşil"];
console.log(0 <<< ❓ >>> renkler);
console.log("mavi" <<< ❓ >>> renkler);
console.log(renkler.<<< ❓ >>>("mavi"));
---------------------
- tests/0/output
true
false
true

- tests/0/require/0 = "in"
- tests/0/require/1 = "includes"

---------------------
- parts/9:
- text
# 🏆 Mini Tekrar

Şimdiye kadar öğrendiklerimizi birleştirelim: bir nesnede hem ``in`` hem
``Object.hasOwn`` ile anahtar kontrolü yapalım, bir dizide ``includes`` ile değer
arayalım ve ``instanceof`` ile tür soruşturalım.

<code-view name="main.js" language="javascript">
let sepet = { ürün: "Kalem", adet: 3 };
let renkler = ["mavi", "yeşil"];
console.log("adet" in sepet);
console.log("fiyat" in sepet);
console.log(renkler.includes("yeşil"));
console.log(Object.hasOwn(sepet, "ürün"));
console.log(sepet instanceof Array);
</code-view>

<code-view name="Terminal" language="bash">
true
false
true
true
false
</code-view>

# 🎯 10. Görev

Yukarıdaki beş cevabı sırayla yazdıran programı tamamlar mısın?

- files/main.js/.block
// Görev: Beş soruyu in, includes, Object.hasOwn ve instanceof ile sırayla cevapla.
// Boşluklara sırasıyla in, in, includes, Object.hasOwn ve instanceof yaz.
// Beklenen çıktı:
// true
// false
// true
// true
// false
let sepet = { ürün: "Kalem", adet: 3 };
let renkler = ["mavi", "yeşil"];
console.log("adet" <<< ❓ >>> sepet);
console.log("fiyat" <<< ❓ >>> sepet);
console.log(renkler.<<< ❓ >>>("yeşil"));
console.log(<<< ❓ >>>(sepet, "ürün"));
console.log(sepet <<< ❓ >>> Array);
---------------------
- tests/0/output
true
false
true
true
false

- tests/0/require/0 = "in"
- tests/0/require/1 = "includes"
- tests/0/require/2 = "Object.hasOwn"
- tests/0/require/3 = "instanceof"

---------------------
