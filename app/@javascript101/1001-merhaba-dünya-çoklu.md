- show_content = true
- show_editor = true
- show_terminal = true
- language = "javascript"
- title = "🧾 Merhaba Dünya : Virgülle Çoklu Değer"
- run = "node main.js"

- parts/0:
- text
# 🎯 Birden Fazla Değer

``console.log`` fonksiyonuna virgülle ayırarak birden fazla değer verebiliriz.
Fonksiyon bütün değerleri **aynı satıra** yazar. Sıralama da verdiğimiz sırayla olur.

<code-view name="main.js" language="javascript">
console.log("Merhaba", "Dünya");
</code-view>

<code-view name="Terminal" language="bash">
Merhaba Dünya
</code-view>

# 🎯 1. Görev

Terminale ``Merhaba Dünya`` yazdıran programı yazar mısın? İki değeri ayrı ayrı ver.

- files/main.js/.block
// Görev: Terminale "Merhaba Dünya" yazdır.
// console.log() içine iki ayrı değer yaz ve aralarına VİRGÜL koy: "Merhaba", "Dünya".
// İkinci değeri ÇİFT TIRNAK içinde yaz; aradaki boşluğu console.log() kendisi ekler.
// Beklenen çıktı:
// Merhaba Dünya
console.log("Merhaba", <<< ❓ >>>);
---------------------
- tests/0/output
Merhaba Dünya

---------------------
- parts/1:
- text
# ✅ Tebrikler

Virgülle verilen değerlerin arasına **otomatik olarak bir boşluk** konur. Sen boşluk
yazmasan da ``console.log`` değerleri tek boşlukla ayırır. Bu yüzden virgül, ``+`` ile
birleştirmekten daha kolaydır.

<code-view name="main.js" language="javascript">
console.log("bir", "iki", "üç");
</code-view>

<code-view name="Terminal" language="bash">
bir iki üç
</code-view>

# 🎯 2. Görev

Terminale ``bir iki üç`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Terminale "bir iki üç" yazdır.
// Üç değeri VİRGÜLLE ayır ve üçünü de ÇİFT TIRNAK içinde yaz: "bir", "iki", "üç".
// Virgül değerlerin arasına kendiliğinden bir boşluk koyar; ayrıca boşluk yazma.
// Beklenen çıktı:
// bir iki üç
console.log(<<< ❓ >>>, "iki", "üç");
---------------------
- tests/0/output
bir iki üç

---------------------
- parts/2:
- text
# 🔢 Sayı ve Metin Birlikte

Sayılar tırnaksız, metinler tırnaklı yazılır; ama aynı ``console.log`` içinde yan yana
durabilirler. Araya yine otomatik olarak boşluk konur. Böylece cümle içinde sayı
kullanmak çok kolaylaşır.

<code-view name="main.js" language="javascript">
console.log("Kedi", 4, "ayaklıdır.");
</code-view>

<code-view name="Terminal" language="bash">
Kedi 4 ayaklıdır.
</code-view>

# 🎯 3. Görev

``Kedi 4 ayaklıdır.`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Terminale "Kedi 4 ayaklıdır." yazdır.
// Kedinin ayak sayısını TIRNAKSIZ yaz: 4 (tırnak içine alırsan metin olur).
// console.log() değerleri virgülle ayırır ve aralarına bir boşluk koyar.
// Beklenen çıktı:
// Kedi 4 ayaklıdır.
console.log("Kedi", <<< ❓ >>>, "ayaklıdır.");
---------------------
- tests/0/output
Kedi 4 ayaklıdır.

---------------------
- parts/3:
- text
# 🧮 console.log İçinde Hesap

Virgülden sonra hesap yazabiliriz. JavaScript önce hesabı yapar, sonra sonucu yazdırır.
Böylece işlemin kendisini ve sonucunu tek satırda gösterebiliriz.

<code-view name="main.js" language="javascript">
console.log("2 + 3 =", 2 + 3);
</code-view>

<code-view name="Terminal" language="bash">
2 + 3 = 5
</code-view>

# 🎯 4. Görev

``2 + 3 = 5`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Terminale "2 + 3 = 5" yazdır.
// Toplama işlemini console.log() içinde yap: 2 + 3
// + operatörünü yaz; sayıları tırnaksız kullan ki gerçekten toplama yapılsın.
// Beklenen çıktı:
// 2 + 3 = 5
console.log("2 + 3 =", 2 <<< ❓ >>> 3);
---------------------
- tests/0/output
2 + 3 = 5

---------------------
- tests/1/files/main.js/.block
// Görev: Terminale "10 + 5 = 15" yazdır.
// İkinci test aynı kuralı farklı sayılarla denetler: toplama için + operatörü.
// console.log() içinde 10 + 5 hesabını yap ve sonucu yazdır.
// Beklenen çıktı:
// 10 + 5 = 15
console.log("10 + 5 =", 10 <<< ❓ >>> 5);
- tests/1/output
10 + 5 = 15

---------------------
- parts/4:
- text
# 📦 Değişkeni Araya Koymak

Değişkeni de değerlerin arasına koyabiliriz. Değişkenin içindeki değer yazdırılır.
Tırnak koymadığımız için JavaScript onu değişken olarak okur, adını değil değerini
yazdırır.

<code-view name="main.js" language="javascript">
let fiyat = 45;
console.log("Fiyat:", fiyat, "TL");
</code-view>

<code-view name="Terminal" language="bash">
Fiyat: 45 TL
</code-view>

# 🎯 5. Görev

``Fiyat: 45 TL`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Terminale "Fiyat: 45 TL" yazdır.
// Değerlerin arasına fiyat DEĞİŞKENİNİ tırnaksız yaz; böylece adı değil 45 değeri yazdırılır.
// console.log("Fiyat:", fiyat, "TL") değerleri tek boşlukla ayırır.
// Beklenen çıktı:
// Fiyat: 45 TL
let fiyat = 45;
console.log("Fiyat:", <<< ❓ >>>, "TL");
---------------------
- tests/0/output
Fiyat: 45 TL

- tests/0/require = "fiyat"

---------------------
- parts/5:
- text
# ⚖️ Virgül mü, Artı mı?

İki yöntem de çalışır ama farklıdır: virgül değerleri ayrı ayrı verir ve araya boşluk
koyar; ``+`` ise metinleri yapıştırır, boşluğu sen koyarsın. Aşağıdaki iki satırın
çıktısı da aynıdır.

<code-view name="main.js" language="javascript">
let ad = "Ayşe";
console.log("Merhaba", ad);
console.log("Merhaba " + ad);
</code-view>

<code-view name="Terminal" language="bash">
Merhaba Ayşe
Merhaba Ayşe
</code-view>

# 🎯 6. Görev

``Merhaba Ali`` satırını hem virgülle hem de ``+`` ile iki kez yazdıran programı yazar
mısın?

- files/main.js/.block
// Görev: İki satırda da "Merhaba Ali" yazdır.
// İlk satırda virgül yöntemini kullan: console.log("Merhaba", ad)
// İkinci satır + ile birleştirme yapıyor; ad değişkeni "Ali" değerini taşır.
// Beklenen çıktı:
// Merhaba Ali
// Merhaba Ali
let ad = "Ali";
console.log("Merhaba", <<< ❓ >>>);
console.log("Merhaba " + ad);
---------------------
- tests/0/output
Merhaba Ali
Merhaba Ali

- tests/0/require = "ad"

---------------------
- parts/6:
- text
# 🧾 Beş Değerli Satır

Değer sayısı ikiden fazla olabilir; istediğimiz kadar değeri virgülle ayırırız.
Böylece ``5 + 3 = 8`` gibi okunaklı satırlar kurarız.

<code-view name="main.js" language="javascript">
console.log(5, "+", 3, "=", 5 + 3);
</code-view>

<code-view name="Terminal" language="bash">
5 + 3 = 8
</code-view>

# 🎯 7. Görev

``5 + 3 = 8`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Terminale "5 + 3 = 8" yazdır.
// Beş değeri virgülle ver; son değerde toplamayı console.log() içinde yap: 5 + 3
// + operatörünü yaz; sayıları tırnaksız kullan.
// Beklenen çıktı:
// 5 + 3 = 8
console.log(5, "+", 3, "=", 5 <<< ❓ >>> 3);
---------------------
- tests/0/output
5 + 3 = 8

---------------------
- tests/1/files/main.js/.block
// Görev: Terminale "12 + 8 = 20" yazdır.
// İkinci test aynı kuralı farklı sayılarla denetler: virgülle verilen değerler + hesap.
// Son değerde 12 + 8 toplamasını console.log() içinde yap.
// Beklenen çıktı:
// 12 + 8 = 20
console.log(12, "+", 8, "=", 12 <<< ❓ >>> 8);
- tests/1/output
12 + 8 = 20

---------------------
- parts/7:
- text
# 🕳️ Boş console.log

``console.log()`` parantezine hiç değer vermezsek terminale sadece bir boş satır yazar.
Çıktı gruplarını birbirinden ayırmak için sıkça kullanılır.

<code-view name="main.js" language="javascript">
console.log("Üst satır");
console.log();
console.log("Alt satır");
</code-view>

<code-view name="Terminal" language="bash">
Üst satır

Alt satır
</code-view>

# 🎯 8. Görev

İki satırın arasına boş bir satır koyan programı yazar mısın?

- files/main.js/.block
// Görev: İki satırın arasına BOŞ bir satır koy.
// Bunun için değersiz bir console.log() çağrısı yaz: console.log();
// Parantez içine hiçbir şey yazma; terminale sadece boş satır basılır.
// Beklenen çıktı:
// Üst satır
// Alt satır
console.log("Üst satır");
<<< ❓ >>>
console.log("Alt satır");
---------------------
- tests/0/output
Üst satır

Alt satır

---------------------
- parts/8:
- text
# 💡 İpucu : %s ve %d

Metnin içine ``%s`` ve ``%d`` yer tutucuları koyabiliriz. ``%s`` yerine metin, ``%d``
yerine sayı yazılır. Uzun cümlelerde bu yöntem daha okunaklıdır.

<code-view name="main.js" language="javascript">
console.log("%s %d yaşındadır.", "Ayşe", 20);
</code-view>

<code-view name="Terminal" language="bash">
Ayşe 20 yaşındadır.
</code-view>

# 🎯 9. Görev

``Mehmet 20 yaşındadır.`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Terminale "Mehmet 20 yaşındadır." yazdır.
// %s yer tutucusunun yerine adı ÇİFT TIRNAK içinde metin olarak ver: "Mehmet"
// %d yer tutucusu 20 sayısını alır; bu yöntem uzun cümlelerde daha okunaklıdır.
// Beklenen çıktı:
// Mehmet 20 yaşındadır.
console.log("%s %d yaşındadır.", <<< ❓ >>>, 20);
---------------------
- tests/0/output
Mehmet 20 yaşındadır.

---------------------
- parts/9:
- text
# 🛒 Alışveriş Fişi

Birkaç değeri virgülle vererek küçük bir fiş satırı oluşturalım. Değişkenlerle
hesap yapmak da burada işimize yarar.

<code-view name="main.js" language="javascript">
let ürün = "Kalem";
let adet = 3;
let fiyat = 12;
console.log(ürün, adet, "adet", fiyat * adet, "TL");
</code-view>

<code-view name="Terminal" language="bash">
Kalem 3 adet 36 TL
</code-view>

# 🎯 10. Görev

``Kalem 3 adet 36 TL`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Terminale "Kalem 3 adet 36 TL" yazdır.
// Toplam tutarı console.log() içinde hesapla: fiyat * adet
// * operatörünü yaz; değişken adlarını tırnaksız kullan.
// Beklenen çıktı:
// Kalem 3 adet 36 TL
let ürün = "Kalem";
let adet = 3;
let fiyat = 12;
console.log(ürün, adet, "adet", fiyat <<< ❓ >>> adet, "TL");
---------------------
- tests/0/output
Kalem 3 adet 36 TL

---------------------
- tests/1/files/main.js/.block
// Görev: Terminale "Defter 4 adet 100 TL" yazdır.
// İkinci test aynı kuralı farklı değerlerle denetler: toplam için fiyat * adet.
// Ürün defter, adet 4, fiyat 25; sonucu console.log() içinde hesapla.
// Beklenen çıktı:
// Defter 4 adet 100 TL
let ürün = "Defter";
let adet = 4;
let fiyat = 25;
console.log(ürün, adet, "adet", fiyat <<< ❓ >>> adet, "TL");
- tests/1/output
Defter 4 adet 100 TL

---------------------
- parts/10:
- text
# 🏆 Mini Tekrar

Virgülü, otomatik boşluğu ve hesabı birleştirelim. Aşağıdaki örnek küçük bir tanıtım
kartı yazdırıyor.

<code-view name="main.js" language="javascript">
let ad = "Zeynep";
let yaş = 22;
console.log("Ad:", ad, "| Yaş:", yaş, "| Seneye:", yaş + 1);
</code-view>

<code-view name="Terminal" language="bash">
Ad: Zeynep | Yaş: 22 | Seneye: 23
</code-view>

# 🎯 11. Görev

``Ad: Zeynep | Yaş: 22 | Seneye: 23`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Terminale "Ad: Zeynep | Yaş: 22 | Seneye: 23" yazdır.
// Seneye kaç yaşında olacağını console.log() içinde hesapla: yaş + 1
// + operatörünü yaz; dikey çizgi ve boşluklar metinlerin içinde hazır.
// Beklenen çıktı:
// Ad: Zeynep | Yaş: 22 | Seneye: 23
let ad = "Zeynep";
let yaş = 22;
console.log("Ad:", ad, "| Yaş:", yaş, "| Seneye:", yaş <<< ❓ >>> 1);
---------------------
- tests/0/output
Ad: Zeynep | Yaş: 22 | Seneye: 23

---------------------
- tests/1/files/main.js/.block
// Görev: Terminale "Ad: Mert | Yaş: 35 | Seneye: 36" yazdır.
// İkinci test aynı kuralı farklı değerlerle denetler: seneye yaş + 1 hesabı.
// Mert 35 yaşında; seneye kaç yaşında olacağını + operatörü ile hesapla.
// Beklenen çıktı:
// Ad: Mert | Yaş: 35 | Seneye: 36
let ad = "Mert";
let yaş = 35;
console.log("Ad:", ad, "| Yaş:", yaş, "| Seneye:", yaş <<< ❓ >>> 1);
- tests/1/output
Ad: Mert | Yaş: 35 | Seneye: 36

---------------------
