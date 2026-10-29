- show_content = true
- show_editor = true
- show_terminal = true
- language = "javascript"
- title = "👋 Merhaba Dünya"
- run = "node main.js"

- parts/0:
- text
# 🎯 **console.log** : Ekrana Yazdırma

JavaScript'te ``console.log()`` parantez içindeki değeri terminale yazdırır.
Metinleri çift tırnak ``"…"`` içine yazarız. Her komutun sonuna ``;`` koymak iyi bir
alışkanlıktır. Haydi ilk programımızı çalıştıralım:

<code-view name="main.js" language="javascript">
console.log("Merhaba Dünya");
</code-view>

<code-view name="Terminal" language="bash">
Merhaba Dünya
</code-view>

# 🎯 1. Görev

Terminale ``Merhaba Dünya`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Terminale "Merhaba Dünya" yazdır.
// console.log() parantezinin içine metni ÇİFT TIRNAK ile yaz.
// Beklenen çıktı:
// Merhaba Dünya
console.log("<<< ❓ >>>");
---------------------
- tests/0/output
Merhaba Dünya

---------------------
- parts/1:
- text
# ✅ Tebrikler

Metinleri tek tırnak ``'…'`` ile de yazabiliriz. JavaScript için tek tırnak ve çift
tırnak arasında fark yoktur; ikisi de metin (string) oluşturur. Tek kural: açtığın
tırnağı aynı türle kapatmak.

<code-view name="main.js" language="javascript">
console.log("Çift tırnakla yazdım.");
console.log('Tek tırnakla yazdım.');
</code-view>

<code-view name="Terminal" language="bash">
Çift tırnakla yazdım.
Tek tırnakla yazdım.
</code-view>

# 🎯 2. Görev

İkinci satırı **tek tırnak** kullanarak ``Dünya`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: İkinci satır terminale "Dünya" yazdırsın.
// İlk satır çift tırnak kullanıyor; ikinci satırda TEK TIRNAK kullan: 'Dünya'
// Beklenen çıktı:
// Merhaba
// Dünya
console.log("Merhaba");
console.log(<<< ❓ >>>);
---------------------
- tests/0/output
Merhaba
Dünya

---------------------
- parts/2:
- text
# 🔢 Sayı Yazdırmak

Sayılar tırnak içine yazılmaz; doğrudan parantezin içine konur. Terminalde ``2024``
görürüz. Ondalıklı sayılarda ayırıcı olarak nokta ``.`` kullanılır, virgül kullanılmaz.

<code-view name="main.js" language="javascript">
console.log(2024);
console.log(3.14);
</code-view>

<code-view name="Terminal" language="bash">
2024
3.14
</code-view>

# 🎯 3. Görev

Terminale önce ``2024``, altına da ``3.14`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Önce bu yılı (2024), sonra pi sayısını (3.14) yazdır.
// Sayılar tırnak içine YAZILMAZ; doğrudan console.log() parantezine yazılır.
// Beklenen çıktı:
// 2024
// 3.14
console.log(<<< ❓ >>>);
console.log(3.14);
---------------------
- tests/0/output
2024
3.14

---------------------
- parts/3:
- text
# 📦 Değişkene Yaz, Sonra Yazdır

Bir değeri değişkende saklayıp ``console.log`` ile yazdırabiliriz. Dikkat: ``console.log(ad)``
yazarken tırnak kullanmayız. Tırnak koysaydık JavaScript ``ad`` kelimesinin kendisini
yazdırırdı, içindeki değeri değil.

<code-view name="main.js" language="javascript">
let ad = "Ayşe";
console.log(ad);
</code-view>

<code-view name="Terminal" language="bash">
Ayşe
</code-view>

# 🎯 4. Görev

``ad`` değişkenine ``"Mehmet"`` değerini verip terminale ``Mehmet`` yazdıran programı
yazar mısın?

- files/main.js/.block
// Görev: ad değişkenine "Mehmet" değerini ver ve ekrana yazdır.
// Değişkene metin verirken değeri çift tırnak içinde yaz: "Mehmet"
// Beklenen çıktı:
// Mehmet
let ad = <<< ❓ >>>;
console.log(ad);
---------------------
- tests/0/output
Mehmet

---------------------
- parts/4:
- text
# ➕ Metin ve Sayıyı Birleştirmek

``+`` işareti iki metni birbirine ekler. Bir metin ile bir sayıyı da ekleyebiliriz;
sayı otomatik olarak metne dönüşür. Böylece ``"Yaş: " + 20`` ifadesi ``Yaş: 20``
metnini üretir.

<code-view name="main.js" language="javascript">
let yaş = 20;
console.log("Yaş: " + yaş);
</code-view>

<code-view name="Terminal" language="bash">
Yaş: 20
</code-view>

# 🎯 5. Görev

Terminale ``Yaş: 20`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Ekrana "Yaş: 20" yazdır.
// Cümlenin sonuna + operatörü ile yaş değişkenini ekle.
// Beklenen çıktı:
// Yaş: 20
let yaş = 20;
console.log("Yaş: " + <<< ❓ >>>);
---------------------
- tests/0/output
Yaş: 20

---------------------
- parts/5:
- text
# ⚠️ Dikkat : Toplama mı, Birleştirme mi?

İki sayıyı ``+`` ile toplarsak gerçek toplama yapılır: ``3 + 4`` sonucu ``7`` olur.
Ama tırnak içindeki ``"3"`` artık bir metindir; ``"3" + 4`` birleştirme yapar ve
``34`` sonucunu verir. Bu yüzden hesap yaparken sayıları tırnaksız yazmalıyız.

<code-view name="main.js" language="javascript">
console.log(3 + 4);
console.log("3" + 4);
</code-view>

<code-view name="Terminal" language="bash">
7
34
</code-view>

# 🎯 6. Görev

``5`` ile ``6`` sayılarını **toplayıp** terminale ``11`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: 5 ile 6 sayılarını TOPLAYIP ekrana 11 yazdır.
// Toplamak için + operatörünü yaz; sayıları tırnak içine ALMA.
// Beklenen çıktı:
// 11
console.log(5 <<< ❓ >>> 6);
---------------------
- tests/0/output
11

---------------------
- tests/1/files/main.js/.block
// Görev: 12 ile 8 sayılarını TOPLAYIP ekrana 20 yazdır.
// İkinci test farklı sayılarla aynı kuralı denetler: + operatörü.
// Beklenen çıktı:
// 20
console.log(12 <<< ❓ >>> 8);
- tests/1/output
20

---------------------
- parts/6:
- text
# 🧩 Uzun Cümleler Kurmak

Bir cümleyi parça parça birleştirebiliriz. Metinleri ve değişkenleri ``+`` ile peş
peşe ekleyerek istediğimiz cümleyi kurarız. Boşlukları metinlerin içine kendimiz
yazdığımızı unutmayalım.

<code-view name="main.js" language="javascript">
let ad = "Ayşe";
let yaş = 20;
console.log("Benim adım " + ad + ", yaşım " + yaş + ".");
</code-view>

<code-view name="Terminal" language="bash">
Benim adım Ayşe, yaşım 20.
</code-view>

# 🎯 7. Görev

``Benim adım Ayşe, yaşım 20.`` cümlesini yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Ekrana "Benim adım Ayşe, yaşım 20." cümlesini yazdır.
// Cümleyi parça parça kur: metinler ve değişkenler + ile birleşir.
// Boşlukları metinlerin içine kendimiz yazarız.
// Beklenen çıktı:
// Benim adım Ayşe, yaşım 20.
let ad = "Ayşe";
let yaş = 20;
console.log("Benim adım " + ad + ", yaşım " + <<< ❓ >>> + ".");
---------------------
- tests/0/output
Benim adım Ayşe, yaşım 20.

---------------------
- parts/7:
- text
# 💡 Boşluğu Kendimiz Koyarız

``+`` işareti araya hiçbir şey eklemez, sadece yapıştırır. Yukarıdaki örnekte
boşlukları metnin içine yazdığımız için cümle düzgün göründü. Yazmasaydık
``MerhabaDünya`` gibi bitişik bir kelime çıkardı.

<code-view name="main.js" language="javascript">
console.log("Merhaba" + "Dünya");
console.log("Merhaba " + "Dünya");
</code-view>

<code-view name="Terminal" language="bash">
MerhabaDünya
Merhaba Dünya
</code-view>

# 🎯 8. Görev

İkinci satırda ``Merhaba Dünya`` yazacak şekilde araya bir boşluk ekler misin?

- files/main.js/.block
// Görev: İki metni birleştirirken araya BİR BOŞLUK koyup "Merhaba Dünya" yazdır.
// + operatörü kendiliğinden boşluk eklemez; boşluğu metin olarak sen yaz.
// Beklenen çıktı:
// Merhaba Dünya
console.log("Merhaba" + <<< ❓ >>> + "Dünya");
---------------------
- tests/0/output
Merhaba Dünya

---------------------
- parts/8:
- text
# 📋 Birden Fazla Satır

Her ``console.log`` çağrısı kendi satırına yazar. Bir menü ya da liste göstermek için
komutları alt alta yazmamız yeterlidir. Terminalde satırların sırası kodun sırasıyla
aynıdır.

<code-view name="main.js" language="javascript">
console.log("=== Menü ===");
console.log("1) Çay");
console.log("2) Kahve");
</code-view>

<code-view name="Terminal" language="bash">
=== Menü ===
1) Çay
2) Kahve
</code-view>

# 🎯 9. Görev

Menünün ikinci satırına ``1) Çay`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Menünün ikinci satırına "1) Çay" yazdıran kodu ekle.
// Her console.log() çağrısı kendi satırına yazar; satır sırası kodun sırasıyla aynıdır.
// Beklenen çıktı:
// === Menü ===
// 1) Çay
// 2) Kahve
console.log("=== Menü ===");
<<< ❓ >>>
console.log("2) Kahve");
---------------------
- tests/0/output
=== Menü ===
1) Çay
2) Kahve

---------------------
- parts/9:
- text
# 💬 Yorumlar

İki eğik çizgi ``//`` ile başlayan satırlar yorumdur; JavaScript bunları çalıştırmaz.
Yorumları kodu açıklamak için kullanırız. Satırın sonuna da yorum ekleyebiliriz,
kod yine çalışır.

<code-view name="main.js" language="javascript">
// Ekrana selam yazdırıyoruz.
console.log("Selam!"); // satır sonu yorumu
</code-view>

<code-view name="Terminal" language="bash">
Selam!
</code-view>

# 🎯 10. Görev

En üste bir yorum satırı yazıp terminale ``Selam!`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: En üste bir YORUM satırı yaz, altına da ekrana "Selam!" yazdıran kodu ekle.
// Yorum satırları // ile başlar ve çalışmaz; ekrana yazmak için console.log("Selam!") kullan.
// Beklenen çıktı:
// Selam!
<<< ❓ >>>
---------------------
- tests/0/output
Selam!

- tests/0/require = "//"

---------------------
- parts/10:
- text
# 🏆 Mini Tekrar

Öğrendiklerimizi birleştirelim: değişkenlere değer verelim, metin ile değişkeni ``+``
ile birleştirelim. Çıktıdaki boşlukların ve noktalamanın birebir aynı olmasına dikkat
edelim.

<code-view name="main.js" language="javascript">
let ürün = "Kalem";
let fiyat = 15;
console.log(ürün + " fiyatı: " + fiyat + " TL");
</code-view>

<code-view name="Terminal" language="bash">
Kalem fiyatı: 15 TL
</code-view>

# 🎯 11. Görev

``Kalem fiyatı: 15 TL`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Ekrana "Kalem fiyatı: 15 TL" yazdır.
// Cümlenin başına ürün değişkenini + ile ekle; boşlukları metinlerin içine yaz.
// Beklenen çıktı:
// Kalem fiyatı: 15 TL
let ürün = "Kalem";
let fiyat = 15;
console.log(<<< ❓ >>> + " fiyatı: " + fiyat + " TL");
---------------------
- tests/0/output
Kalem fiyatı: 15 TL

---------------------
