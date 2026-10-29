- show_content = true
- show_editor = true
- show_terminal = true
- language = "javascript"
- title = "🧠 Operatörler : Mantıksal"
- run = "node main.js"

- parts/0:
- text
# 🧠 **Mantıksal** Operatörler

Mantıksal operatörler koşulları birleştirmemizi sağlar: ``&&`` (ve), ``||`` (veya) ve
``!`` (değil). Bu derste önce ``&&`` ile başlıyoruz. ``&&`` iki tarafı da doğruysa
``true`` verir.

<code-view name="main.js" language="javascript">
let yaş = 20;
let ehliyet = true;
console.log(yaş >= 18 && ehliyet);
</code-view>

<code-view name="Terminal" language="bash">
true
</code-view>

# 🎯 1. Görev

``yaş`` 18'den büyük **ve** ehliyeti varsa terminale ``true`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: yaş 18'den büyük ve ehliyeti varsa true yazdır.
// İki koşulu "ve" anlamıyla && operatörüyle birleştir: yaş >= 18 && ehliyet.
// && iki taraf da doğruysa true, değilse false verir.
// Beklenen çıktı:
// true
let yaş = 20;
let ehliyet = true;
console.log(yaş >= 18 <<< ❓ >>> ehliyet);
---------------------
- tests/0/output
true

---------------------
- tests/1/files/main.js/.block
// Görev: yaş 18'den büyük ve ehliyeti varsa true yazdır.
// İkinci testte yaş 15 olduğu için && sonucu false çıkar.
// Beklenen çıktı:
// false
let yaş = 15;
let ehliyet = true;
console.log(yaş >= 18 <<< ❓ >>> ehliyet);
- tests/1/output
false

---------------------
- parts/1:
- text
# ✅ Tebrikler : ``||`` (Veya)

``||`` operatörü iki koşuldan **en az biri** doğruysa ``true`` verir. Kahve ya da çay
içebilirsin; ikisinden birinin olması yeterlidir. İkisi de yoksa sonuç ``false`` olur.

<code-view name="main.js" language="javascript">
let çay = false;
let kahve = true;
console.log(çay || kahve);
</code-view>

<code-view name="Terminal" language="bash">
true
</code-view>

# 🎯 2. Görev

Çay **veya** kahve varsa ``true`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: çay veya kahve varsa true yazdır.
// İki koşulu "veya" anlamıyla || operatörüyle birleştir: çay || kahve.
// || iki koşuldan en az biri doğruysa true verir.
// Beklenen çıktı:
// true
let çay = false;
let kahve = true;
console.log(çay <<< ❓ >>> kahve);
---------------------
- tests/0/output
true

---------------------
- tests/1/files/main.js/.block
// Görev: çay veya kahve varsa true yazdır.
// İkinci testte ikisi de yoktur; bu yüzden || sonucu false olur.
// Beklenen çıktı:
// false
let çay = false;
let kahve = false;
console.log(çay <<< ❓ >>> kahve);
- tests/1/output
false

---------------------
- parts/2:
- text
# ✅ Tebrikler : ``!`` (Değil)

``!`` operatörü bir değeri tersine çevirir: doğruysa ``false``, yanlışsa ``true`` olur.
Boş olmayan her metin doğru sayıldığı için ``!"merhaba"`` sonucu ``false`` çıkar.

<code-view name="main.js" language="javascript">
let açık = true;
console.log(!açık);
console.log(!"merhaba");
</code-view>

<code-view name="Terminal" language="bash">
false
false
</code-view>

# 🎯 3. Görev

``açık`` değişkenini tersine çevirip ``!"merhaba"`` sonucunu da yazdıran programı yazar
mısın?

- files/main.js/.block
// Görev: açık değişkenini tersine çevir ve "merhaba" metninin tersini yazdır.
// Değil operatörü ! bir değeri tersine çevirir: !açık false verir.
// Boş olmayan her metin doğru sayıldığı için !"merhaba" false verir.
// Beklenen çıktı:
// false
// false
let açık = true;
console.log(<<< ❓ >>>açık);
console.log(<<< ❓ >>>"merhaba");
---------------------
- tests/0/output
false
false

---------------------
- tests/1/files/main.js/.block
// Görev: açık değişkenini tersine çevir ve "merhaba" metninin tersini yazdır.
// İkinci testte açık false olduğu için !açık true verir.
// Beklenen çıktı:
// true
// false
let açık = false;
console.log(<<< ❓ >>>açık);
console.log(<<< ❓ >>>"merhaba");
- tests/1/output
true
false

---------------------
- parts/3:
- text
# ✅ Tebrikler : Kısa Devre (short-circuit)

``&&`` soldaki değer yanlışsa sağ tarafa hiç bakmaz. Bu özelliğe **kısa devre** denir ve
var olmayan bir nesnenin özelliğine uzanırken programı hatadan korur. ``kullanıcı``
``null`` olduğu için ``kullanıcı && kullanıcı.ad`` ifadesi durur ve ``null`` döner.

<code-view name="main.js" language="javascript">
let kullanıcı = null;
console.log(kullanıcı && kullanıcı.ad);
console.log("Ali" && "Veli");
</code-view>

<code-view name="Terminal" language="bash">
null
Veli
</code-view>

# 🎯 4. Görev

Kullanıcı yokken programın hata vermemesini sağlayıp ``null`` ve ``Veli`` yazdıran
programı yazar mısın?

- files/main.js/.block
// Görev: kullanıcı yokken programın hata vermemesini sağlayıp null ve Veli yazdır.
// && soldaki değer yanlışsa sağa hiç bakmaz; bu özelliğe kısa devre denir.
// kullanıcı null olduğu için kullanıcı && kullanıcı.ad null döner.
// Beklenen çıktı:
// null
// Veli
let kullanıcı = null;
console.log(kullanıcı <<< ❓ >>> kullanıcı.ad);
console.log("Ali" <<< ❓ >>> "Veli");
---------------------
- tests/0/output
null
Veli

---------------------
- tests/1/files/main.js/.block
// Görev: kullanıcı varken adını ve "Ali" && "Veli" sonucunu yazdır.
// İkinci testte kullanıcı dolu olduğu için kullanıcı && kullanıcı.ad Ayşe verir.
// Beklenen çıktı:
// Ayşe
// Veli
let kullanıcı = { ad: "Ayşe" };
console.log(kullanıcı <<< ❓ >>> kullanıcı.ad);
console.log("Ali" <<< ❓ >>> "Veli");
- tests/1/output
Ayşe
Veli

---------------------
- parts/4:
- text
# ✅ Tebrikler : Sonuç Her Zaman ``true`` / ``false`` Değildir

Mantıksal operatörler boolean değil, **karşı taraftaki değeri** döndürür. ``&&`` ilk
yanlış değeri, ``||`` ilk doğru değeri verir. Bu yüzden ``"a" || "b"`` sonucu ``a``'dır;
``a`` doğru olduğu için sağ tarafa hiç bakılmaz.

<code-view name="main.js" language="javascript">
console.log("a" || "b");
console.log(0 && "b");
console.log(1 && "b");
</code-view>

<code-view name="Terminal" language="bash">
a
0
b
</code-view>

# 🎯 5. Görev

``a``, ``0`` ve ``b`` yazdıran programı yazar mısın? Mantıksal operatörleri sırayla
kullanman gerekiyor.

- files/main.js/.block
// Görev: a, 0 ve b değerlerini yazdır; mantıksal operatörleri sırayla kullan.
// || ilk doğru değeri, && ilk yanlış değeri döndürür; sonuç true/false olmak zorunda değil.
// "a" || "b" a verir; 0 && "b" 0 verir; 1 && "b" b verir.
// Beklenen çıktı:
// a
// 0
// b
console.log("a" <<< ❓ >>> "b");
console.log(0 <<< ❓ >>> "b");
console.log(1 <<< ❓ >>> "b");
---------------------
- tests/0/output
a
0
b

---------------------
- tests/1/files/main.js/.block
// Görev: kalem, 0 ve silgi değerlerini yazdır; mantıksal operatörleri sırayla kullan.
// "kalem" || "silgi" kalem verir; 0 && "silgi" 0 verir; 7 && "silgi" silgi verir.
// Beklenen çıktı:
// kalem
// 0
// silgi
console.log("kalem" <<< ❓ >>> "silgi");
console.log(0 <<< ❓ >>> "silgi");
console.log(7 <<< ❓ >>> "silgi");
- tests/1/output
kalem
0
silgi

---------------------
- parts/5:
- text
# ✅ Tebrikler : Doğru ve Yanlış Sayılan Değerler

JavaScript her değeri doğru (truthy) ya da yanlış (falsy) kabul eder. Yanlış sayılanlar
``false``, ``0``, ``""``, ``null``, ``undefined`` ve ``NaN``'dır. Geri kalan her şey
doğrudur; ``"0"`` metni ve ``" "`` bile doğru kabul edilir.

<code-view name="main.js" language="javascript">
console.log(Boolean(0), Boolean(""), Boolean("0"));
console.log(Boolean(1), Boolean(" "), Boolean([]));
</code-view>

<code-view name="Terminal" language="bash">
false false true
true true true
</code-view>

# 🎯 6. Görev

İki satır ``false true`` ve ``true false`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: iki satırda "false true" ve "true false" yazdır.
// Boolean() değerin doğru mu yanlış mı sayıldığını gösterir; 0 yanlış, 1 doğrudur.
// "0" metni boş olmadığı için doğru sayılır; "" metni ise yanlıştır.
// Beklenen çıktı:
// false true
// true false
console.log(Boolean(<<< ❓ >>>), Boolean("0"));
console.log(Boolean(<<< ❓ >>>), Boolean(""));
---------------------
- tests/0/output
false true
true false

---------------------
- parts/6:
- text
# ✅ Tebrikler : Varsayılan Değer Verme

Kullanıcı bir değer girmediyse onun yerine bir varsayılan kullanmak isteriz. ``||``
operatörü bu iş için en pratik araçtır: sol taraf yanlışsa sağ taraftaki yedek değer gelir.

<code-view name="main.js" language="javascript">
let kullanıcıAdı = "";
let ad = kullanıcıAdı || "Misafir";
console.log("Merhaba", ad);
</code-view>

<code-view name="Terminal" language="bash">
Merhaba Misafir
</code-view>

# 🎯 7. Görev

Adı girilmemişse ``Merhaba Misafir`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: adı girilmemişse "Merhaba Misafir" yazdır.
// || sol taraf yanlışsa sağdaki yedek değeri verir: kullanıcıAdı || "Misafir".
// kullanıcıAdı boş metin olduğu için yanlış sayılır ve Misafir gelir.
// Beklenen çıktı:
// Merhaba Misafir
let kullanıcıAdı = "";
let ad = kullanıcıAdı <<< ❓ >>> "Misafir";
console.log("Merhaba", ad);
---------------------
- tests/0/output
Merhaba Misafir

---------------------
- tests/1/files/main.js/.block
// Görev: adı girilmişse o adla "Merhaba Ayşe" yazdır.
// İkinci testte kullanıcıAdı dolu olduğu için || sağ tarafa hiç bakmaz.
// Beklenen çıktı:
// Merhaba Ayşe
let kullanıcıAdı = "Ayşe";
let ad = kullanıcıAdı <<< ❓ >>> "Misafir";
console.log("Merhaba", ad);
- tests/1/output
Merhaba Ayşe

---------------------
- parts/7:
- text
# ✅ Tebrikler : ``??`` (null Birleştirme)

``??`` operatörü yalnızca **null** ve **undefined** için devreye girer. ``0``, ``""`` ve
``false`` gibi değerleri geçerli sayar. Bu yüzden ``0 ?? 99`` sonucu ``0``'dır.

<code-view name="main.js" language="javascript">
let hiç = null;
let tanımsız;
console.log(hiç ?? "varsayılan");
console.log(tanımsız ?? "varsayılan");
console.log(0 ?? 99);
</code-view>

<code-view name="Terminal" language="bash">
varsayılan
varsayılan
0
</code-view>

# 🎯 8. Görev

``varsayılan``, ``varsayılan`` ve ``0`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: varsayılan, varsayılan ve 0 değerlerini yazdır.
// ?? yalnızca null ve undefined için devreye girer: hiç ?? "varsayılan".
// tanımsız da undefined olduğu için varsayılan gelir; 0 ?? 99 ise 0 verir.
// Beklenen çıktı:
// varsayılan
// varsayılan
// 0
let hiç = null;
let tanımsız;
console.log(hiç <<< ❓ >>> "varsayılan");
console.log(tanımsız <<< ❓ >>> "varsayılan");
console.log(0 <<< ❓ >>> 99);
---------------------
- tests/0/output
varsayılan
varsayılan
0

---------------------
- parts/8:
- text
# ✅ Tebrikler : ``??`` ve ``||`` Farkı

``??`` sadece null ya da undefined gördüğünde devreye girer, ``||`` ise tüm yanlış
değerlerde. Bu yüzden ``0`` ve ``""`` korunmak istendiğinde ``??`` kullanılır. ``0 ?? 5``
``0`` verirken ``0 || 5`` ``5`` verir.

<code-view name="main.js" language="javascript">
let sıfır = 0;
let metin = "";
console.log(sıfır ?? 5);
console.log(sıfır || 5);
console.log(metin || "boş");
</code-view>

<code-view name="Terminal" language="bash">
0
5
boş
</code-view>

# 🎯 9. Görev

``0``, ``5`` ve ``boş`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: 0, 5 ve boş değerlerini yazdır; ?? ile || arasındaki farkı göster.
// ?? geçerli değerleri korur: 0 ?? 5 sonucu 0 olur.
// || yanlış değerleri de ezer: 0 || 5 sonucu 5, "" || "boş" sonucu boş olur.
// Beklenen çıktı:
// 0
// 5
// boş
let sıfır = 0;
console.log(sıfır <<< ❓ >>> 5);
console.log(sıfır <<< ❓ >>> 5);

let metin = "";
console.log(metin <<< ❓ >>> "boş");
---------------------
- tests/0/output
0
5
boş

---------------------
- tests/1/files/main.js/.block
// Görev: 0, 8 ve boş değerlerini yazdır; ?? ile || arasındaki farkı göster.
// İkinci test farklı sayıyla aynı kuralı denetler: 0 ?? 8 sonucu 0, 0 || 8 sonucu 8 olur.
// Beklenen çıktı:
// 0
// 8
// boş
let sıfır = 0;
console.log(sıfır <<< ❓ >>> 8);
console.log(sıfır <<< ❓ >>> 8);

let metin = "";
console.log(metin <<< ❓ >>> "boş");
- tests/1/output
0
8
boş

---------------------
- parts/9:
- text
# ✅ Tebrikler : Nesnede Eksik Özellik

Bir nesnede olmayan özelliğin değeri ``undefined`` olur. ``??`` ile bu eksik alana hemen
bir varsayılan değer verebiliriz. Böylece ekrana ``undefined`` yazmak yerine anlamlı bir
metin çıkar.

<code-view name="main.js" language="javascript">
let kullanıcı = { ad: "Ali" };
console.log(kullanıcı.ad ?? "Bilinmiyor");
console.log(kullanıcı.soyad ?? "Bilinmiyor");
</code-view>

<code-view name="Terminal" language="bash">
Ali
Bilinmiyor
</code-view>

# 🎯 10. Görev

``Ali`` ve ``Bilinmiyor`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Ali ve Bilinmiyor yazdır.
// Nesnede olmayan özelliğin değeri undefined olur; ?? ile varsayılan değer verilir.
// kullanıcı.ad ?? "Bilinmiyor" Ali verir; kullanıcı.soyad ?? "Bilinmiyor" Bilinmiyor verir.
// Beklenen çıktı:
// Ali
// Bilinmiyor
let kullanıcı = { ad: "Ali" };
console.log(kullanıcı.ad <<< ❓ >>> "Bilinmiyor");
console.log(kullanıcı.soyad <<< ❓ >>> "Bilinmiyor");
---------------------
- tests/0/output
Ali
Bilinmiyor

- tests/0/require = "??"

---------------------
- tests/1/files/main.js/.block
// Görev: Zeynep ve Kaya yazdır.
// İkinci testte soyad da dolu olduğu için ?? sağ tarafa hiç bakmaz.
// Beklenen çıktı:
// Zeynep
// Kaya
let kullanıcı = { ad: "Zeynep", soyad: "Kaya" };
console.log(kullanıcı.ad <<< ❓ >>> "Bilinmiyor");
console.log(kullanıcı.soyad <<< ❓ >>> "Bilinmiyor");
- tests/1/output
Zeynep
Kaya

---------------------
- parts/10:
- text
# ✅ Tebrikler : ``!!`` ile Boolean'a Çevirme

``!`` operatörü sonucu boolean yapar; iki kere kullanınca (``!!``) değer bozulmadan sadece
türü ``boolean`` olur. ``Boolean()`` fonksiyonu da tam olarak aynı işi yapar.

<code-view name="main.js" language="javascript">
console.log(!!"0");
console.log(!!0);
console.log(typeof !!"merhaba");
</code-view>

<code-view name="Terminal" language="bash">
true
false
boolean
</code-view>

# 🎯 11. Görev

``true``, ``false`` ve ``boolean`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: true, false ve boolean yazdır.
// !! ile değer bozulmadan yalnızca türü boolean olur: !!"0" true, !!0 false.
// typeof !!"merhaba" sonucu boolean çıkar.
// Beklenen çıktı:
// true
// false
// boolean
console.log(<<< ❓ >>>"0");
console.log(<<< ❓ >>>0);
console.log(typeof <<< ❓ >>>"merhaba");
---------------------
- tests/0/output
true
false
boolean

---------------------
- parts/11:
- text
# 🏆 Mini Tekrar

Öğrendiklerini birleştirelim: eksik adı ``||`` ile, eksik yaşı ``??`` ile dolduralım.
``ad`` boş metin olduğu için yerine ``Misafir`` gelir. ``yaş`` ise ``0`` olduğu için
``??`` onu geçerli sayar ve korur.

<code-view name="main.js" language="javascript">
let kullanıcı = { ad: "", yaş: 0 };
let ad = kullanıcı.ad || "Misafir";
let yaş = kullanıcı.yaş ?? 18;
console.log(ad, yaş);
</code-view>

<code-view name="Terminal" language="bash">
Misafir 0
</code-view>

# 🎯 12. Görev

``Misafir 0`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Misafir 0 yazdır.
// ad boş metin olduğu için || ile "Misafir" yedeği gelir.
// yaş 0 olduğu için ?? onu geçerli sayar ve korur: 0 ?? 18 sonucu 0 olur.
// Beklenen çıktı:
// Misafir 0
let kullanıcı = { ad: "", yaş: 0 };
let ad = kullanıcı.ad <<< ❓ >>> "Misafir";
let yaş = kullanıcı.yaş <<< ❓ >>> 18;
console.log(ad, yaş);
---------------------
- tests/0/output
Misafir 0

---------------------
- tests/1/files/main.js/.block
// Görev: Ali 18 yazdır.
// İkinci testte ad dolu olduğu için || sağa bakmaz; yaş null olduğu için ?? 18 verir.
// Beklenen çıktı:
// Ali 18
let kullanıcı = { ad: "Ali", yaş: null };
let ad = kullanıcı.ad <<< ❓ >>> "Misafir";
let yaş = kullanıcı.yaş <<< ❓ >>> 18;
console.log(ad, yaş);
- tests/1/output
Ali 18

---------------------
