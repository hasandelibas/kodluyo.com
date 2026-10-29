- show_content = true
- show_editor = true
- show_terminal = true
- language = "javascript"
- title = "🏹 Fonksiyonlar : Ok Fonksiyonlar"
- run = "node main.js"

- parts/0:
- text
# 🎯 Ok Fonksiyon (arrow function)

Ok fonksiyonlar, ``function`` anahtar kelimesi yerine ``=>`` işaretiyle yazılan kısa
fonksiyonlardır. Bir değişkene atanır ve tıpkı normal fonksiyon gibi parantezle çağrılır.
``=>`` işaretinin solu parametreleri, sağı ise fonksiyonun gövdesini gösterir.

<code-view name="main.js" language="javascript">
const kare = (x) => x * x;
console.log(kare(3));
</code-view>

<code-view name="Terminal" language="bash">
9
</code-view>

# 🎯 1. Görev

``kare`` adlı ok fonksiyonu verdiği sayının karesini döndürsün. Terminale ``9`` yazdıran
programı yazar mısın?

- files/main.js/.block
// Görev: x'in karesini döndüren ok fonksiyonunu tamamla.
// Ok işaretinin (=>) sağına, x'i kendisiyle çarpan ifadeyi yaz: x * x
// Beklenen çıktı:
// 9
const kare = (x) => <<< ❓ >>>;
console.log(kare(3));
---------------------
- tests/0/output
9

---------------------
- tests/1/files/main.js/.block
// Görev: x'in karesini döndüren ok fonksiyonunu tamamla.
// İkinci test farklı sayıyla aynı kuralı denetler: sağ taraf yine x * x olmalı.
// Beklenen çıktı:
// 25
const kare = (x) => <<< ❓ >>>;
console.log(kare(5));
- tests/1/output
25

---------------------
- parts/1:
- text
# ✅ Tek Parametrede Parantez

Parametre tek ise parantez yazmak zorunlu değildir: ``ad => ...`` yazımı ``(ad) => ...``
ile aynı anlama gelir ve kodu daha kısa gösterir. İki ya da daha çok parametre olduğunda
parantez yeniden gerekir.

<code-view name="main.js" language="javascript">
const selamla = ad => "Merhaba " + ad;
console.log(selamla("Ali"));
</code-view>

<code-view name="Terminal" language="bash">
Merhaba Ali
</code-view>

# 🎯 2. Görev

``selamla("Ali")`` çağrısı ``Merhaba Ali`` yazsın. ``selamla("Zeynep")`` çağrısı da doğru
çalışsın; mesajı ok fonksiyonun içinde oluşturur musun?

- files/main.js/.block
// Görev: selamla ok fonksiyonu verilen adla selam mesajı döndürsün.
// Çift tırnaklı "Merhaba " metnini + operatörü ile ad parametresine ekle.
// Beklenen çıktı:
// Merhaba Ali
const selamla = ad => <<< ❓ >>>;
console.log(selamla("Ali"));
---------------------
- tests/0/output
Merhaba Ali

---------------------
- tests/1/files/main.js/.block
// Görev: selamla ok fonksiyonu verilen adla selam mesajı döndürsün.
// İkinci test farklı adla aynı kuralı denetler: "Merhaba " + ad.
// Beklenen çıktı:
// Merhaba Zeynep
const selamla = ad => <<< ❓ >>>;
console.log(selamla("Zeynep"));
- tests/1/output
Merhaba Zeynep

---------------------
- parts/2:
- text
# ✅ Örtük return (implicit return)

Kısa gövdede süslü parantez yoksa ok fonksiyon sağdaki değeri **kendiliğinden döndürür**;
yani ``return`` yazmaya gerek kalmaz. Gövde tek bir ifade olduğu sürece bu yazım geçerlidir.
Gövde uzarsa parantezli blok ve ``return`` gerekir.

<code-view name="main.js" language="javascript">
const topla = (a, b) => a + b;
console.log("Toplam:", topla(3, 4));
</code-view>

<code-view name="Terminal" language="bash">
Toplam: 7
</code-view>

# 🎯 3. Görev

``topla(3, 4)`` çağrısı ``Toplam: 7`` yazsın; ``topla(10, 20)`` çağrısı da doğru sonucu
versin. ``return`` yazmadan toplamayı yapar mısın?

- files/main.js/.block
// Görev: topla ok fonksiyonu iki sayının toplamını örtük return ile döndürsün.
// return yazmadan a + b ifadesini ok işaretinin (=>) sağına yaz.
// Beklenen çıktı:
// Toplam: 7
const topla = (a, b) => <<< ❓ >>>;
console.log("Toplam:", topla(3, 4));
---------------------
- tests/0/output
Toplam: 7

---------------------
- tests/1/files/main.js/.block
// Görev: topla ok fonksiyonu iki sayının toplamını örtük return ile döndürsün.
// İkinci test farklı sayılarla aynı kuralı denetler: a + b.
// Beklenen çıktı:
// Toplam: 30
const topla = (a, b) => <<< ❓ >>>;
console.log("Toplam:", topla(10, 20));
- tests/1/output
Toplam: 30

---------------------
- parts/3:
- text
# ✅ Blok Gövdeli Ok Fonksiyon

Gövdeyi ``{ }`` içine aldığımızda ok fonksiyon normal fonksiyon gibi davranır: değer
döndürmek için ``return`` yazmak gerekir. Blok gövde, aralarda değişken tanımlamak gereken
işlerde kullanılır. ``return`` yazmayı unutursan fonksiyon ``undefined`` döndürür.

<code-view name="main.js" language="javascript">
const ortalama = (a, b) => {
  const toplam = a + b;
  return toplam / 2;
};
console.log(ortalama(4, 10));
</code-view>

<code-view name="Terminal" language="bash">
7
</code-view>

# 🎯 4. Görev

``ortalama(4, 10)`` çağrısı ``7`` yazsın. Blok gövdenin içinde ortalamayı döndüren satırı
yazar mısın?

- files/main.js/.block
// Görev: ortalama fonksiyonunda toplamı ikiye bölen satırı yaz.
// Blok gövdede değer döndürmek için return anahtar kelimesini kullan: return toplam / 2
// Beklenen çıktı:
// 7
const ortalama = (a, b) => {
  const toplam = a + b;
  <<< ❓ >>>;
};
console.log(ortalama(4, 10));
---------------------
- tests/0/output
7

---------------------
- tests/1/files/main.js/.block
// Görev: ortalama fonksiyonunda toplamı ikiye bölen satırı yaz.
// İkinci test farklı sayılarla aynı kuralı denetler: return toplam / 2
// Beklenen çıktı:
// 15
const ortalama = (a, b) => {
  const toplam = a + b;
  <<< ❓ >>>;
};
console.log(ortalama(10, 20));
- tests/1/output
15

---------------------
- parts/4:
- text
# ✅ Parametresiz Ok Fonksiyon

Parametre yoksa parantez yine zorunludur: ``() => ...``. Boş parantezler "bu fonksiyon
parametre almıyor" demektir. Parantezleri tamamen silmek sözdizimi hatasına yol açar.

<code-view name="main.js" language="javascript">
const selam = () => "Merhaba dünya!";
console.log(selam());
</code-view>

<code-view name="Terminal" language="bash">
Merhaba dünya!
</code-view>

# 🎯 5. Görev

Parametre almayan ``selam`` fonksiyonu ``Merhaba dünya!`` yazsın. Boş parantezleri ve
mesajı yerleştirir misin?

- files/main.js/.block
// Görev: parametre almayan selam ok fonksiyonu "Merhaba dünya!" döndürsün.
// İlk boşluğa boş parametre parantezlerini () yaz; ikinci boşluğa Merhaba dünya!
// metnini yaz (tırnaklar şablonda hazır). Parametre yoksa da parantez zorunludur.
// Beklenen çıktı:
// Merhaba dünya!
const selam = <<< ❓ >>> => "<<< ❓ >>>";
console.log(selam());
---------------------
- tests/0/output
Merhaba dünya!

---------------------
- parts/5:
- text
# ⚠️ Nesne Döndüren Ok Fonksiyon

Ok fonksiyonun sağında ``{`` görürse JavaScript bunu gövde bloğu sanar ve ``undefined``
döndürür. Nesne döndürmek için ifadeyi parantez içine alırız: ``() => ({ ... })``. Bu
parantez "bu bir blok değil, değer" demenin en kısa yoludur.

<code-view name="main.js" language="javascript">
const kisi = (ad, yas) => ({ ad: ad, yas: yas });
console.log(kisi("Zeynep", 28));
</code-view>

<code-view name="Terminal" language="bash">
{ ad: 'Zeynep', yas: 28 }
</code-view>

# 🎯 6. Görev

``kisi("Zeynep", 28)`` çağrısı ``{ ad: 'Zeynep', yas: 28 }`` yazsın. Nesneyi parantezle
döndüren kısa gövdeyi tamamlar mısın?

- files/main.js/.block
// Görev: kisi ok fonksiyonu { ad: 'Zeynep', yas: 28 } nesnesini döndürsün.
// Nesneyi parantez içine alarak döndür: ({ ad: ad, yas: yas })
// Beklenen çıktı:
// { ad: 'Zeynep', yas: 28 }
const kisi = (ad, yas) => <<< ❓ >>>;
console.log(kisi("Zeynep", 28));
---------------------
- tests/0/output
{ ad: 'Zeynep', yas: 28 }

---------------------
- tests/1/files/main.js/.block
// Görev: kisi ok fonksiyonu { ad: 'Mert', yas: 35 } nesnesini döndürsün.
// İkinci test farklı değerlerle aynı kuralı denetler: ({ ad: ad, yas: yas })
// Beklenen çıktı:
// { ad: 'Mert', yas: 35 }
const kisi = (ad, yas) => <<< ❓ >>>;
console.log(kisi("Mert", 35));
- tests/1/output
{ ad: 'Mert', yas: 35 }

---------------------
- parts/6:
- text
# ✅ map ile Ok Fonksiyon

``map`` her eleman için bir geri çağrı (callback) fonksiyon çalıştırır ve sonuçlardan yeni
bir dizi üretir. Ok fonksiyonlar geri çağrı olarak çok kısa yazıldığı için en çok burada
karşımıza çıkar. Kısa gövde sayesinde ``return`` de yazmamız gerekmez.

<code-view name="main.js" language="javascript">
const sayilar = [1, 2, 3];
const ikiKat = sayilar.map((n) => n * 2);
console.log(ikiKat);
</code-view>

<code-view name="Terminal" language="bash">
[ 2, 4, 6 ]
</code-view>

# 🎯 7. Görev

``[1, 2, 3]`` dizisinin her elemanını ikiye katlayıp ``[ 2, 4, 6 ]`` yazdıran programı
yazar mısın?

- files/main.js/.block
// Görev: sayilar dizisindeki her elemanı ikiye katlayan map geri çağrısını yaz.
// Ok fonksiyonun sağına n * 2 ifadesini yaz; map sonuçlardan yeni bir dizi üretir.
// Beklenen çıktı:
// [ 2, 4, 6 ]
const sayilar = [1, 2, 3];
const ikiKat = sayilar.map((n) => <<< ❓ >>>);
console.log(ikiKat);
---------------------
- tests/0/output
[ 2, 4, 6 ]

---------------------
- tests/1/files/main.js/.block
// Görev: sayilar dizisindeki her elemanı ikiye katlayan map geri çağrısını yaz.
// İkinci test farklı dizilerle aynı kuralı denetler: n * 2
// Beklenen çıktı:
// [ 10, 20, 30 ]
const sayilar = [5, 10, 15];
const ikiKat = sayilar.map((n) => <<< ❓ >>>);
console.log(ikiKat);
- tests/1/output
[ 10, 20, 30 ]

---------------------
- parts/7:
- text
# ✅ filter ile Ok Fonksiyon

``filter`` geri çağrısının ``true`` döndürdüğü elemanları seçer ve yeni bir dizi verir.
Kısa gövdeli ok fonksiyon sayesinde koşulu tek satırda yazabiliriz. Elemanları değiştirmez,
sadece seçer.

<code-view name="main.js" language="javascript">
const sayilar = [4, 7, 10, 13, 20];
const ciftler = sayilar.filter((n) => n % 2 === 0);
console.log(ciftler);
</code-view>

<code-view name="Terminal" language="bash">
[ 4, 10, 20 ]
</code-view>

# 🎯 8. Görev

Dizideki çift sayıları seçip ``[ 4, 10, 20 ]`` yazdıran programı yazar mısın? Koşuldaki
karşılaştırma operatörünü yerleştir.

- files/main.js/.block
// Görev: yalnızca çift sayıları seçen filter koşulunu tamamla.
// Elemanın 2'ye bölümünden kalanı (n % 2) 0 ile karşılaştır; katı eşitlik için === kullan.
// Beklenen çıktı:
// [ 4, 10, 20 ]
const sayilar = [4, 7, 10, 13, 20];
const ciftler = sayilar.filter((n) => n % 2 <<< ❓ >>> 0);
console.log(ciftler);
---------------------
- tests/0/output
[ 4, 10, 20 ]

---------------------
- tests/1/files/main.js/.block
// Görev: yalnızca çift sayıları seçen filter koşulunu tamamla.
// İkinci test farklı dizilerle aynı kuralı denetler: kalanı 0 ile katı eşitlikle (===) karşılaştır.
// Beklenen çıktı:
// [ 6, 12 ]
const sayilar = [6, 9, 12, 15];
const ciftler = sayilar.filter((n) => n % 2 <<< ❓ >>> 0);
console.log(ciftler);
- tests/1/output
[ 6, 12 ]

---------------------
- parts/8:
- text
# ✅ Zincir: filter + map

``filter`` ve ``map`` ardı ardına zincirlenebilir. Önce elemanlar süzülür, sonra kalanlara
dönüşüm uygulanır. Ok fonksiyonun kısalığı sayesinde iki adım tek satırda okunaklı kalır.

<code-view name="main.js" language="javascript">
const fiyatlar = [100, 250, 400];
const sonuc = fiyatlar.filter((f) => f > 150).map((f) => f * 2);
console.log(sonuc);
</code-view>

<code-view name="Terminal" language="bash">
[ 500, 800 ]
</code-view>

# 🎯 9. Görev

150'den büyük fiyatları seçip kalanları ikiye katlayan programı yazar mısın? Terminale
``[ 500, 800 ]`` yazmalı.

- files/main.js/.block
// Görev: 150'den büyük fiyatları seçip kalanları ikiye katla.
// map geri çağrısının sağına f * 2 ifadesini yaz; filter önce elemanları süzer.
// Beklenen çıktı:
// [ 500, 800 ]
const fiyatlar = [100, 250, 400];
const sonuc = fiyatlar.filter((f) => f > 150).map((f) => <<< ❓ >>>);
console.log(sonuc);
---------------------
- tests/0/output
[ 500, 800 ]

---------------------
- tests/1/files/main.js/.block
// Görev: 150'den büyük fiyatları seçip kalanları ikiye katla.
// İkinci test farklı fiyatlarla aynı kuralı denetler: f * 2
// Beklenen çıktı:
// [ 400, 640 ]
const fiyatlar = [80, 200, 320];
const sonuc = fiyatlar.filter((f) => f > 150).map((f) => <<< ❓ >>>);
console.log(sonuc);
- tests/1/output
[ 400, 640 ]

---------------------
- parts/9:
- text
# ✅ reduce ile Ok Fonksiyon

``reduce`` diziyi tek bir değere indirger. Geri çağrının ilk parametresi biriktirici
(acc), ikincisi o anki elemandır; ``reduce`` fonksiyonunun ikinci argümanı ise başlangıç
değeridir. Ok fonksiyon burada da tek satırda yeter.

<code-view name="main.js" language="javascript">
const sayilar = [10, 20, 30, 40];
const toplam = sayilar.reduce((acc, n) => acc + n, 0);
console.log(toplam);
</code-view>

<code-view name="Terminal" language="bash">
100
</code-view>

# 🎯 10. Görev

``[10, 20, 30, 40]`` dizisinin toplamını ``100`` olarak yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: dizinin elemanlarını biriktiriciye ekleyen operatörü tamamla.
// reduce geri çağrısında acc + n yaz; 0 başlangıç değeridir.
// Beklenen çıktı:
// 100
const sayilar = [10, 20, 30, 40];
const toplam = sayilar.reduce((acc, n) => acc <<< ❓ >>> n, 0);
console.log(toplam);
---------------------
- tests/0/output
100

---------------------
- tests/1/files/main.js/.block
// Görev: dizinin elemanlarını biriktiriciye ekleyen operatörü tamamla.
// İkinci test farklı dizilerle aynı kuralı denetler: acc + n
// Beklenen çıktı:
// 45
const sayilar = [5, 15, 25];
const toplam = sayilar.reduce((acc, n) => acc <<< ❓ >>> n, 0);
console.log(toplam);
- tests/1/output
45

---------------------
- parts/10:
- text
# ⚠️ Normal Fonksiyondan Farkı: this

Ok fonksiyonun **kendi** ``this`` değeri yoktur; ``this`` değerini doğduğu (lexical)
kapsamdan alır. Bu yüzden bir nesne metodunda ok fonksiyon, nesnenin kendisini değil
dıştaki ``this`` değerini görür. Ayrıca ok fonksiyonlar yapıcı (constructor) değildir,
``new`` ile çağrılamazlar.

<code-view name="main.js" language="javascript">
const kutu = {
  ad: "kalem",
  goster: function () {
    const icerde = () => this.ad;
    return icerde();
  },
};
console.log(kutu.goster());
try {
  new (() => 1)();
} catch (hata) {
  console.log("Yapıcı olarak kullanılamaz:", hata.name);
}
</code-view>

<code-view name="Terminal" language="bash">
kalem
Yapıcı olarak kullanılamaz: TypeError
</code-view>

# 🎯 11. Görev

``goster`` metodu çağrıldığında ``kalem`` yazsın; içerideki ok fonksiyon ``this`` değerini
dıştaki fonksiyondan alsın. Boşluğu doldurup programı çalıştırır mısın?

- files/main.js/.block
// Görev: içerideki ok fonksiyon dıştaki this değerini kullanıp "kalem" döndürsün.
// Ok fonksiyonun sağına this.ad yaz; ok fonksiyonun kendi this değeri yoktur,
// bu yüzden this değerini doğduğu kapsamdan (dıştaki fonksiyondan) alır.
// Beklenen çıktı:
// kalem
// Yapıcı olarak kullanılamaz: TypeError
const kutu = {
  ad: "kalem",
  goster: function () {
    const icerde = () => <<< ❓ >>>;
    return icerde();
  },
};
console.log(kutu.goster());
try {
  new (() => 1)();
} catch (hata) {
  console.log("Yapıcı olarak kullanılamaz:", hata.name);
}
---------------------
- tests/0/output
kalem
Yapıcı olarak kullanılamaz: TypeError

- tests/0/require = "this"

---------------------
- tests/1/files/main.js/.block
// Görev: içerideki ok fonksiyon dıştaki this değerini kullanıp "defter" döndürsün.
// İkinci test farklı veriyle aynı kuralı denetler: cevap yine this.ad olmalı.
// Beklenen çıktı:
// defter
// Yapıcı olarak kullanılamaz: TypeError
const kutu = {
  ad: "defter",
  goster: function () {
    const icerde = () => <<< ❓ >>>;
    return icerde();
  },
};
console.log(kutu.goster());
try {
  new (() => 1)();
} catch (hata) {
  console.log("Yapıcı olarak kullanılamaz:", hata.name);
}
- tests/1/output
defter
Yapıcı olarak kullanılamaz: TypeError

- tests/1/require = "this"

---------------------
- parts/11:
- text
# 🏆 Mini Tekrar

Öğrendiklerimizi birleştirelim: bir dizi notun ortalamasını ``reduce`` ve ok fonksiyonla
hesaplayalım. Toplamı eleman sayısına bölmek yeterli.

<code-view name="main.js" language="javascript">
const notlar = [80, 90, 100];
const ortalama = notlar.reduce((t, n) => t + n, 0) / notlar.length;
console.log("Ortalama:", ortalama);
</code-view>

<code-view name="Terminal" language="bash">
Ortalama: 90
</code-view>

# 🎯 12. Görev

``[80, 90, 100]`` notlarının ortalamasını ``Ortalama: 90`` biçiminde yazdıran programı
yazar mısın?

- files/main.js/.block
// Görev: notlar dizisinin toplamını reduce ile hesaplayan operatörü tamamla.
// t + n yaz; toplam notlar.length sayısına bölünerek ortalama bulunur.
// Beklenen çıktı:
// Ortalama: 90
const notlar = [80, 90, 100];
const ortalama = notlar.reduce((t, n) => t <<< ❓ >>> n, 0) / notlar.length;
console.log("Ortalama:", ortalama);
---------------------
- tests/0/output
Ortalama: 90

---------------------
- tests/1/files/main.js/.block
// Görev: notlar dizisinin toplamını reduce ile hesaplayan operatörü tamamla.
// İkinci test farklı notlarla aynı kuralı denetler: t + n
// Beklenen çıktı:
// Ortalama: 70
const notlar = [60, 70, 80];
const ortalama = notlar.reduce((t, n) => t <<< ❓ >>> n, 0) / notlar.length;
console.log("Ortalama:", ortalama);
- tests/1/output
Ortalama: 70

---------------------
