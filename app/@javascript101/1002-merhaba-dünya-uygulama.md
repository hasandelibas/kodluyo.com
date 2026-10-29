- show_content = true
- show_editor = true
- show_terminal = true
- language = "javascript"
- title = "📄 Merhaba Dünya : Kaçış Karakterleri"
- run = "node main.js"

- parts/0:
- text
# 🎯 Kaçış Karakteri : ``\n``

Metnin içinde alt satıra geçmek istiyorsak ``\n`` yazarız. Buna kaçış karakteri
(escape character) denir. Ters bölü ``\`` tek başına bir anlam taşımaz; yanındaki
harfe özel bir görev verir. Böylece tek bir ``console.log`` ile iki satır yazarız.

<code-view name="main.js" language="javascript">
console.log("Birinci satır\nİkinci satır");
</code-view>

<code-view name="Terminal" language="bash">
Birinci satır
İkinci satır
</code-view>

# 🎯 1. Görev

``Birinci satır`` ve ``İkinci satır`` metnini **iki satır** olarak yazdıran programı
yazar mısın?

- files/main.js/.block
// Görev: "Birinci satır" ve "İkinci satır" metnini İKİ SATIR olarak yazdır.
// İki metnin arasına \n kaçış karakterini yaz (ters bölü + n).
// Tek console.log() çağrısı ile iki satır elde edilir.
// Beklenen çıktı:
// Birinci satır
// İkinci satır
console.log("Birinci satır<<< ❓ >>>İkinci satır");
---------------------
- tests/0/output
Birinci satır
İkinci satır

---------------------
- parts/1:
- text
# ✅ Tebrikler : ``\t``

``\t`` bir **sekme** (tab) karakteridir; imleci bir sonraki durağa kaydırır. Sütunları
hizalamak için kullanılır. Ekranda geniş bir boşluk gibi görünür.

<code-view name="main.js" language="javascript">
console.log("Ad\tSoyad");
console.log("Ayşe\tYılmaz");
</code-view>

<code-view name="Terminal" language="bash">
Ad	Soyad
Ayşe	Yılmaz
</code-view>

# 🎯 2. Görev

``Şehir`` ile ``İstanbul`` arasına sekme koyan programı yazar mısın?

- files/main.js/.block
// Görev: "Şehir" ile "İstanbul" arasına SEKME (tab) koy.
// Sekme için \t kaçış karakterini yaz (ters bölü + t).
// \t sütunları hizalar; ekranda geniş bir boşluk gibi görünür.
// Beklenen çıktı:
// Şehir	İstanbul
console.log("Şehir<<< ❓ >>>İstanbul");
---------------------
- tests/0/output
Şehir	İstanbul

---------------------
- parts/2:
- text
# 🛣️ Ters Bölü : ``\\``

Tek bir ters bölü ``\`` yazmak istiyorsak iki kez yazarız: ``\\``. Çünkü tek ters
bölü kaçış karakteridir ve yanındaki harfle birlikte okunur. Dosya yolları ve Windows
yolları bunun en yaygın örneğidir.

<code-view name="main.js" language="javascript">
console.log("C:\\Belgeler\\not.txt");
</code-view>

<code-view name="Terminal" language="bash">
C:\Belgeler\not.txt
</code-view>

# 🎯 3. Görev

Terminale ``C:\Belgeler\not.txt`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Terminale C:\Belgeler\not.txt yazdır.
// Metinde tek bir ters bölü göstermek için kaçış karakteriyle İKİ KEZ yaz: \\
// İki boşluğa da aynı cevabı yaz; böylece dosya yolu düzgün görünür.
// Beklenen çıktı:
// C:\Belgeler\not.txt
console.log("C:<<< ❓ >>>Belgeler<<< ❓ >>>not.txt");
---------------------
- tests/0/output
C:\Belgeler\not.txt

---------------------
- parts/3:
- text
# 💬 Çift Tırnak : ``\"``

Çift tırnakla başlayan bir metnin içinde tekrar çift tırnak kullanmak istiyorsak
``\"`` yazarız. Böylece JavaScript tırnağı metnin sonu sanmaz. Terminalde ise sadece
çift tırnak görünür.

<code-view name="main.js" language="javascript">
console.log("Öğretmen \"Merhaba\" dedi.");
</code-view>

<code-view name="Terminal" language="bash">
Öğretmen "Merhaba" dedi.
</code-view>

# 🎯 4. Görev

Terminale ``Öğretmen "Merhaba" dedi.`` yazdıran programı yazar mısın? İç tırnakları
kaçış karakteri ile yazmalısın.

- files/main.js/.block
// Görev: Terminale Öğretmen "Merhaba" dedi. yazdır.
// Metnin içinde çift tırnak göstermek için \" kaçış karakterini kullan.
// İki boşluğa da \" yaz; terminalde tırnaklar normal görünür.
// Beklenen çıktı:
// Öğretmen "Merhaba" dedi.
console.log("Öğretmen <<< ❓ >>>Merhaba<<< ❓ >>> dedi.");
---------------------
- tests/0/output
Öğretmen "Merhaba" dedi.

---------------------
- parts/4:
- text
# 🔙 Şablon Metin (Backtick)

Çok satırlı metinler ve araya değer koymak için **şablon metin** (template literal)
kullanırız. Şablon metin geri tırnak `` ` `` ile yazılır. İçindeki ``${}`` alanına bir
değişken ya da ifade yazabiliriz.

<code-view name="main.js" language="javascript">
let ad = "Ayşe";
console.log(`Merhaba ${ad}!`);
</code-view>

<code-view name="Terminal" language="bash">
Merhaba Ayşe!
</code-view>

# 🎯 5. Görev

``Merhaba Mehmet!`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Terminale "Merhaba Mehmet!" yazdır.
// Şablon metnin ${} alanına ad DEĞİŞKENİNİ tırnaksız yaz.
// Şablon metin geri tırnak (backtick) ile yazılır; ${} içindeki değer metne yerleşir.
// Beklenen çıktı:
// Merhaba Mehmet!
let ad = "Mehmet";
console.log(`Merhaba ${<<< ❓ >>>}!`);
---------------------
- tests/0/output
Merhaba Mehmet!

- tests/0/require = "ad"

---------------------
- parts/5:
- text
# 🧮 ``${}`` İçinde Hesap

``${}`` içine sadece değişken değil, hesap da yazabiliriz. JavaScript önce süslü
parantezin içini hesaplar, sonra sonucu metne yerleştirir.

<code-view name="main.js" language="javascript">
let fiyat = 20;
let adet = 3;
console.log(`Toplam: ${fiyat * adet} TL`);
</code-view>

<code-view name="Terminal" language="bash">
Toplam: 60 TL
</code-view>

# 🎯 6. Görev

``Toplam: 60 TL`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Terminale "Toplam: 60 TL" yazdır.
// Toplamı ${} içinde hesapla: fiyat * adet
// * operatörünü yaz; şablon metnin ${} alanı içinde hesap yapılabilir.
// Beklenen çıktı:
// Toplam: 60 TL
let fiyat = 20;
let adet = 3;
console.log(`Toplam: ${fiyat <<< ❓ >>> adet} TL`);
---------------------
- tests/0/output
Toplam: 60 TL

---------------------
- tests/1/files/main.js/.block
// Görev: Terminale "Toplam: 60 TL" yazdır.
// İkinci test aynı kuralı farklı değerlerle denetler: fiyat * adet hesabı.
// Fiyat 15, adet 4; toplamı ${} içinde * operatörü ile hesapla.
// Beklenen çıktı:
// Toplam: 60 TL
let fiyat = 15;
let adet = 4;
console.log(`Toplam: ${fiyat <<< ❓ >>> adet} TL`);
- tests/1/output
Toplam: 60 TL

---------------------
- parts/6:
- text
# 📄 Çok Satırlı Şablon Metin

Şablon metin gerçek satır sonlarını da kabul eder. Yani ``\n`` yazmadan, metni
klavyede alt satıra geçirerek çok satırlı metin elde ederiz. Adres gibi satırlı
bilgiler için idealdir.

<code-view name="main.js" language="javascript">
let adres = `Ayşe Yılmaz
Atatürk Caddesi 12
İstanbul`;
console.log(adres);
</code-view>

<code-view name="Terminal" language="bash">
Ayşe Yılmaz
Atatürk Caddesi 12
İstanbul
</code-view>

# 🎯 7. Görev

Çok satırlı adrese **ikinci satırı** ekler misin?

- files/main.js/.block
// Görev: Çok satırlı adrese ikinci satırı ekle.
// İkinci satır şu olmalı: Atatürk Caddesi 12
// Şablon metinde satırlar gerçek satır sonlarıyla ayrılır; \n yazmaya gerek yok.
// Beklenen çıktı:
// Ayşe Yılmaz
// Atatürk Caddesi 12
// İstanbul
let adres = `Ayşe Yılmaz
<<< ❓ >>>
İstanbul`;
console.log(adres);
---------------------
- tests/0/output
Ayşe Yılmaz
Atatürk Caddesi 12
İstanbul

---------------------
- parts/7:
- text
# 🔤 ``${}`` İçinde Metin ve Sayı

Şablon metnin güzelliği: metni ve değişkeni karıştırırken ``+`` işaretine gerek
kalmaz. Boşlukları da doğal biçimde yazarız.

<code-view name="main.js" language="javascript">
let ürün = "Kalem";
let adet = 3;
console.log(`${adet} adet ${ürün} aldım.`);
</code-view>

<code-view name="Terminal" language="bash">
3 adet Kalem aldım.
</code-view>

# 🎯 8. Görev

``3 adet Kalem aldım.`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Terminale "3 adet Kalem aldım." yazdır.
// Birinci ${} alanına adet, ikinci ${} alanına ürün değişkenini tırnaksız yaz.
// Sıraya dikkat: önce adet (3), sonra ürün (Kalem).
// Beklenen çıktı:
// 3 adet Kalem aldım.
let ürün = "Kalem";
let adet = 3;
console.log(`${<<< ❓ >>>} adet ${<<< ❓ >>>} aldım.`);
---------------------
- tests/0/output
3 adet Kalem aldım.

- tests/0/require/0 = "adet"
- tests/0/require/1 = "ürün"

---------------------
- parts/8:
- text
# 🪪 Uygulama : Kartvizit

Şimdi öğrendiklerimizi birleştirelim. Kartvizitte her bilgi ayrı satırda olmalı, bunun
için ``\n`` kullanıyoruz. Değerler de ``${}`` ile yerine yerleşiyor.

<code-view name="main.js" language="javascript">
let ad = "Ayşe Yılmaz";
let iş = "Frontend Geliştirici";
console.log(`Ad  : ${ad}\nİş  : ${iş}`);
</code-view>

<code-view name="Terminal" language="bash">
Ad  : Ayşe Yılmaz
İş  : Frontend Geliştirici
</code-view>

# 🎯 9. Görev

Kartvizitte adı ve işi **iki ayrı satırda** yazdırır mısın?

- files/main.js/.block
// Görev: Kartvizitte adı ve işi İKİ AYRI satırda yazdır.
// Satırları ayırmak için \n kaçış karakterini yaz (ters bölü + n).
// Değerler ${} ile yerine yerleşiyor; satır sonu metnin içinde olmalı.
// Beklenen çıktı:
// Ad  : Ayşe Yılmaz
// İş  : Frontend Geliştirici
let ad = "Ayşe Yılmaz";
let iş = "Frontend Geliştirici";
console.log(`Ad  : ${ad}<<< ❓ >>>İş  : ${iş}`);
---------------------
- tests/0/output
Ad  : Ayşe Yılmaz
İş  : Frontend Geliştirici

---------------------
- parts/9:
- text
# 🏷️ Uygulama : Ürün Etiketi

Bir ürün etiketi de aynı mantıkla hazırlanır: başlık tırnaklı, altında fiyatlar.
Satır sonları ``\n``, değerler ``${}`` ile yerleşir.

<code-view name="main.js" language="javascript">
let ürün = "Kahve";
let fiyat = 85;
let kdv = 15;
console.log(`"${ürün}" etiketi\nFiyat: ${fiyat} TL\nKDV: ${kdv} TL\nToplam: ${fiyat + kdv} TL`);
</code-view>

<code-view name="Terminal" language="bash">
"Kahve" etiketi
Fiyat: 85 TL
KDV: 15 TL
Toplam: 100 TL
</code-view>

# 🎯 10. Görev

Etikette toplam tutarı hesaplayıp ``Toplam: 100 TL`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Etikette toplam tutarı hesaplayıp "Toplam: 100 TL" yazdır.
// ${} içinde toplama yap: fiyat + kdv
// + operatörünü yaz; satırlar \n ile ayrılıyor, değerler ${} ile yerleşiyor.
// Beklenen çıktı:
// "Kahve" etiketi
// Fiyat: 85 TL
// KDV: 15 TL
// Toplam: 100 TL
let ürün = "Kahve";
let fiyat = 85;
let kdv = 15;
console.log(`"${ürün}" etiketi\nFiyat: ${fiyat} TL\nKDV: ${kdv} TL\nToplam: ${<<< ❓ >>>} TL`);
---------------------
- tests/0/output
"Kahve" etiketi
Fiyat: 85 TL
KDV: 15 TL
Toplam: 100 TL

- tests/0/require/0 = "fiyat"
- tests/0/require/1 = "kdv"

---------------------
- parts/10:
- text
# 🏆 Mini Tekrar

Kaçış karakterleri ile şablon metni birleştirelim. Aşağıdaki örnek bir bilet özeti
yazdırıyor: satırlar ``\n`` ile ayrılıyor, değerler ``${}`` ile yerine yerleşiyor.

<code-view name="main.js" language="javascript">
let etkinlik = "Konser";
let kişi = 4;
let bilet = 75;
console.log(`Etkinlik : ${etkinlik}\nKişi : ${kişi}\nToplam : ${bilet * kişi} TL`);
</code-view>

<code-view name="Terminal" language="bash">
Etkinlik : Konser
Kişi : 4
Toplam : 300 TL
</code-view>

# 🎯 11. Görev

``Etkinlik : Konser``, ``Kişi : 4`` ve ``Toplam : 300 TL`` satırlarını yazdıran
programı yazar mısın?

- files/main.js/.block
// Görev: Terminale "Etkinlik : Konser", "Kişi : 4" ve "Toplam : 300 TL" satırlarını yazdır.
// Toplam tutarı ${} içinde hesapla: bilet * kişi
// * operatörünü yaz; satırlar \n ile ayrılır.
// Beklenen çıktı:
// Etkinlik : Konser
// Kişi : 4
// Toplam : 300 TL
let etkinlik = "Konser";
let kişi = 4;
let bilet = 75;
console.log(`Etkinlik : ${etkinlik}\nKişi : ${kişi}\nToplam : ${bilet <<< ❓ >>> kişi} TL`);
---------------------
- tests/0/output
Etkinlik : Konser
Kişi : 4
Toplam : 300 TL

---------------------
- tests/1/files/main.js/.block
// Görev: Terminale "Etkinlik : Tiyatro", "Kişi : 3" ve "Toplam : 360 TL" satırlarını yazdır.
// İkinci test aynı kuralı farklı değerlerle denetler: bilet * kişi hesabı.
// Etkinlik Tiyatro, kişi 3, bilet 120; toplamı ${} içinde * ile hesapla.
// Beklenen çıktı:
// Etkinlik : Tiyatro
// Kişi : 3
// Toplam : 360 TL
let etkinlik = "Tiyatro";
let kişi = 3;
let bilet = 120;
console.log(`Etkinlik : ${etkinlik}\nKişi : ${kişi}\nToplam : ${bilet <<< ❓ >>> kişi} TL`);
- tests/1/output
Etkinlik : Tiyatro
Kişi : 3
Toplam : 360 TL

---------------------
