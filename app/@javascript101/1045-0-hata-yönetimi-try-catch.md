- show_content = true
- show_editor = true
- show_terminal = true
- language = "javascript"
- title = "🛡️ Hata Yönetimi : try / catch"
- run = "node main.js"

- parts/0:
- text
# 🎯 Hata Yönetimi : try / catch

Kod çalışırken beklenmedik bir durum olursa JavaScript **hata** (error) fırlatır ve program
o noktada durur. ``try`` bloğuna şüpheli kodları, ``catch`` bloğuna ise hatayı yakalayınca
çalışacak kodu yazarız. Böylece hata olunca program çökmez, elimizdeki hatayı okuyup
istediğimiz mesajı yazdırırız.

<code-view name="main.js" language="javascript">
try {
  const kisi = undefined;
  console.log(kisi.ad);
} catch (hata) {
  console.log("Bir hata yakalandı, program devam ediyor.");
}
</code-view>

<code-view name="Terminal" language="bash">
Bir hata yakalandı, program devam ediyor.
</code-view>

# 🎯 1. Görev

``kisi`` değişkeni ``undefined`` olduğu için ``kisi.ad`` hata verir. Bu hatayı yakalayıp
``Bir hata yakalandı, program devam ediyor.`` yazdıran programa ``catch`` bloğunu ekler
misin?

- files/main.js/.block
// Görev: try bloğundaki hatayı yakalayan catch bloğunu tamamla.
// try/catch ikilisinde hatayı yakalayan anahtar kelime catch'tir; parantezinde hata nesnesi durur.
// Beklenen çıktı:
// Bir hata yakalandı, program devam ediyor.
try {
  const kisi = undefined;
  console.log(kisi.ad);
} <<< ❓ >>> (hata) {
  console.log("Bir hata yakalandı, program devam ediyor.");
}
---------------------
- tests/0/output
Bir hata yakalandı, program devam ediyor.

---------------------
- parts/1:
- text
# ✅ throw new Error

Kendi hatamızı ``throw new Error("mesaj")`` ile fırlatırız. ``throw`` programın o an
çalışmasını keser ve hatayı en yakın ``catch`` bloğuna taşır. Mesajı kendimiz yazdığımız
için anlamlı olur: "Yaş 18'den küçük olamaz" gibi.

<code-view name="main.js" language="javascript">
function girisKontrol(yas) {
  if (yas < 18) {
    throw new Error("Yaş 18'den küçük olamaz");
  }
  return "Girişe izin verildi";
}
try {
  console.log(girisKontrol(15));
} catch (hata) {
  console.log("Hata yakalandı:", hata.message);
}
</code-view>

<code-view name="Terminal" language="bash">
Hata yakalandı: Yaş 18'den küçük olamaz
</code-view>

# 🎯 2. Görev

Yaş 18'den küçükse program hatayı fırlatsın ve ``catch`` bloğu mesajı yazdırsın.
``Hata yakalandı: Yaş 18'den küçük olamaz`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: yaş 18'den küçükse hata fırlatan ifadeyi tamamla.
// Kendi hatamızı throw new Error("mesaj") ile fırlatırız; mesaj catch bloğunda okunur.
// Beklenen çıktı:
// Hata yakalandı: Yaş 18'den küçük olamaz
function girisKontrol(yas) {
  if (yas < 18) {
    <<< ❓ >>> new Error("Yaş 18'den küçük olamaz");
  }
  return "Girişe izin verildi";
}
try {
  console.log(girisKontrol(15));
} catch (hata) {
  console.log("Hata yakalandı:", hata.message);
}
---------------------
- tests/0/output
Hata yakalandı: Yaş 18'den küçük olamaz

---------------------
- parts/2:
- text
# ✅ error.message

``catch`` bloğu hatayı bir parametre olarak alır; bu genellikle ``hata`` ya da ``error``
adını taşır. ``hata.message`` hatanın insan tarafından okunan açıklamasıdır. Ham hatayı
yazdırmak yerine bu mesajı kullanmak daha temizdir.

<code-view name="main.js" language="javascript">
const stok = 3;
try {
  if (stok < 5) {
    throw new Error("Stok yetersiz");
  }
  console.log("Sipariş alındı");
} catch (hata) {
  console.log("Sorun:", hata.message);
}
</code-view>

<code-view name="Terminal" language="bash">
Sorun: Stok yetersiz
</code-view>

# 🎯 3. Görev

Stok 5'ten az olduğu için hata fırlatılıyor. ``catch`` bloğu ``Sorun: Stok yetersiz``
yazsın; hatanın mesajına ulaşan alanı doldurur musun?

- files/main.js/.block
// Görev: hatanın insan tarafından okunan açıklamasını yazdır.
// catch bloğundaki hata nesnesinin açıklaması hata.message alanında durur.
// Beklenen çıktı:
// Sorun: Stok yetersiz
const stok = 3;
try {
  if (stok < 5) {
    throw new Error("Stok yetersiz");
  }
  console.log("Sipariş alındı");
} catch (hata) {
  console.log("Sorun:", hata.<<< ❓ >>>);
}
---------------------
- tests/0/output
Sorun: Stok yetersiz

---------------------
- parts/3:
- text
# ✅ error.name

``hata.name`` hatanın **türünü** söyler: kendi fırlattığımız hatalar ``Error``, yanlış bir
işlemden doğan hatalar ``TypeError`` olur. ``hata.message`` ise o türün açıklamasıdır.
İkisini birlikte yazdırmak hata ayıklamayı kolaylaştırır.

<code-view name="main.js" language="javascript">
try {
  const sayi = "abc";
  sayi.toFixed(2);
} catch (hata) {
  console.log(hata.name);
}
try {
  throw new Error("Kendi hatam");
} catch (hata) {
  console.log(hata.name);
}
</code-view>

<code-view name="Terminal" language="bash">
TypeError
Error
</code-view>

# 🎯 4. Görev

Birinci ``catch`` ``TypeError``, ikincisi ``Error`` yazsın. Hatanın türünü veren alanı
iki yerde de doldurur musun?

- files/main.js/.block
// Görev: iki catch bloğunda da hatanın türünü veren alanı tamamla.
// Hatanın türü hata.name alanındadır: TypeError, Error, RangeError gibi değerleri o verir.
// Beklenen çıktı:
// TypeError
// Error
try {
  const sayi = "abc";
  sayi.toFixed(2);
} catch (hata) {
  console.log(hata.<<< ❓ >>>);
}
try {
  throw new Error("Kendi hatam");
} catch (hata) {
  console.log(hata.<<< ❓ >>>);
}
---------------------
- tests/0/output
TypeError
Error

---------------------
- parts/4:
- text
# ✅ JSON.parse ve try / catch

``JSON.parse()`` metni JavaScript nesnesine çevirir. Metin bozuksa bu fonksiyon hata
fırlatır; o yüzden çağrıyı ``try`` içine almak iyi bir alışkanlıktır. Geçerli metinde
``catch`` hiç çalışmaz, program akışı normal devam eder.

<code-view name="main.js" language="javascript">
const metin = '{"ad": "Ali", "yas": 30}';
try {
  const kisi = JSON.parse(metin);
  console.log(kisi.ad, kisi.yas);
} catch (hata) {
  console.log("JSON okunamadı");
}
</code-view>

<code-view name="Terminal" language="bash">
Ali 30
</code-view>

# 🎯 5. Görev

``'{"ad": "Ali", "yas": 30}'`` metnini nesneye çevirip ``Ali 30`` yazdıran programı yazar
mısın?

- files/main.js/.block
// Görev: metni nesneye çeviren JSON.parse çağrısını tamamla.
// JSON.parse(metin) metni JavaScript nesnesine çevirir; bozuk metinde hata fırlatır.
// Beklenen çıktı:
// Ali 30
const metin = '{"ad": "Ali", "yas": 30}';
try {
  const kisi = <<< ❓ >>>(metin);
  console.log(kisi.ad, kisi.yas);
} catch (hata) {
  console.log("JSON okunamadı");
}
---------------------
- tests/0/output
Ali 30

- tests/0/require = "JSON.parse"

---------------------
- parts/5:
- text
# ✅ Bozuk JSON'u Yakalamak

Bozuk bir metin ``JSON.parse()`` içinde hata fırlatır ve hatanın adı ``SyntaxError``
olur. ``try / catch`` sayesinde program çökmeden "bu kayıt bozuk" diyebiliriz. Bu kalıp,
dışarıdan gelen verileri okurken çok işe yarar.

<code-view name="main.js" language="javascript">
function jsonOku(metin) {
  try {
    return JSON.parse(metin);
  } catch (hata) {
    return "Hata: " + hata.name;
  }
}
console.log(jsonOku('{"ad": "Ali"}'));
console.log(jsonOku("{bozuk json}"));
</code-view>

<code-view name="Terminal" language="bash">
{ ad: 'Ali' }
Hata: SyntaxError
</code-view>

# 🎯 6. Görev

Geçerli metinde nesneyi, bozuk metinde ``Hata: SyntaxError`` değerini döndüren
``jsonOku`` fonksiyonunu tamamlar mısın?

- files/main.js/.block
// Görev: bozuk metinde hatanın adını döndüren satırı tamamla.
// Çift tırnaklı "Hata: " metnini + operatörü ile hata.name değerine ekle.
// Beklenen çıktı:
// { ad: 'Ali' }
// Hata: SyntaxError
function jsonOku(metin) {
  try {
    return JSON.parse(metin);
  } catch (hata) {
    return <<< ❓ >>>;
  }
}
console.log(jsonOku('{"ad": "Ali"}'));
console.log(jsonOku("{bozuk json}"));
---------------------
- tests/0/output
{ ad: 'Ali' }
Hata: SyntaxError

- tests/0/require = "hata.name"

---------------------
- parts/6:
- text
# ✅ finally

``finally`` bloğu **her durumda** çalışır: hata olsa da olmasa da, ``return`` ile çıksak
bile. Bu yüzden dosya kapatmak, sayacı sıfırlamak gibi "her hâlükârda yapılması gereken"
işler buraya yazılır. ``finally`` bloğu ``return`` değerini değiştirmez, sadece son
temizliği yapar.

<code-view name="main.js" language="javascript">
function bol(a, b) {
  try {
    if (b === 0) {
      throw new Error("Sıfıra bölünemez");
    }
    return a / b;
  } catch (hata) {
    return "Hata: " + hata.message;
  } finally {
    console.log("İşlem bitti");
  }
}
console.log(bol(10, 2));
console.log(bol(5, 0));
</code-view>

<code-view name="Terminal" language="bash">
İşlem bitti
5
İşlem bitti
Hata: Sıfıra bölünemez
</code-view>

# 🎯 7. Görev

Her iki çağrıda da ``İşlem bitti`` yazsın; bölme sonucu ``5``, sıfıra bölmede ise
``Hata: Sıfıra bölünemez`` olsun. Her durumda çalışan bloğu tamamlar mısın?

- files/main.js/.block
// Görev: hata olsa da olmasa da çalışan finally bloğunu tamamla.
// finally bloğu her durumda çalışır, return değerini değiştirmez; burada "İşlem bitti" yazdırılır.
// Beklenen çıktı:
// İşlem bitti
// 5
// İşlem bitti
// Hata: Sıfıra bölünemez
function bol(a, b) {
  try {
    if (b === 0) {
      throw new Error("Sıfıra bölünemez");
    }
    return a / b;
  } catch (hata) {
    return "Hata: " + hata.message;
  } <<< ❓ >>> {
    console.log("İşlem bitti");
  }
}
console.log(bol(10, 2));
console.log(bol(5, 0));
---------------------
- tests/0/output
İşlem bitti
5
İşlem bitti
Hata: Sıfıra bölünemez

---------------------
- parts/7:
- text
# ✅ Hata Sonrası Güvenli Devam

Hata yakalandığında program durmak zorunda değildir; bir varsayılan değer döndürüp yola
devam edebiliriz. ``Number("abc")`` sonucu ``NaN`` olduğu için bunu ``Number.isNaN()`` ile
kontrol ediyoruz. Böylece bozuk girişe rağmen program çalışmaya devam eder.

<code-view name="main.js" language="javascript">
function sayiyaCevir(metin) {
  try {
    const sayi = Number(metin);
    if (Number.isNaN(sayi)) {
      throw new Error("Sayı değil");
    }
    return sayi;
  } catch (hata) {
    console.log("Uyarı:", hata.message);
    return 0;
  }
}
console.log(sayiyaCevir("42"));
console.log(sayiyaCevir("abc"));
</code-view>

<code-view name="Terminal" language="bash">
42
Uyarı: Sayı değil
0
</code-view>

# 🎯 8. Görev

``"42"`` metni ``42`` olsun; ``"abc"`` metni uyarı yazdırıp ``0`` döndürsün. Metni sayıya
çeviren fonksiyonu tamamlar mısın?

- files/main.js/.block
// Görev: metni sayıya çeviren Number() çağrısını tamamla.
// Number(metin) metni sayıya çevirir; Number.isNaN() ile NaN olup olmadığı kontrol edilir.
// Beklenen çıktı:
// 42
// Uyarı: Sayı değil
// 0
function sayiyaCevir(metin) {
  try {
    const sayi = <<< ❓ >>>(metin);
    if (Number.isNaN(sayi)) {
      throw new Error("Sayı değil");
    }
    return sayi;
  } catch (hata) {
    console.log("Uyarı:", hata.message);
    return 0;
  }
}
console.log(sayiyaCevir("42"));
console.log(sayiyaCevir("abc"));
---------------------
- tests/0/output
42
Uyarı: Sayı değil
0

- tests/0/require = "Number"

---------------------
- parts/8:
- text
# ⚠️ Yakalanmamış Hata

``try / catch`` yazmazsak hata kimse tarafından yakalanmaz ve Node.js terminale
``Error: Dosya bulunamadı`` gibi ``Error: mesaj`` biçiminde bir satır yazar, sonra program
sonlanır. Bu derste bu durumu **çalıştırmıyoruz**, çünkü yakalanmamış hata testi
başarısız eder. Aşağıdaki örnekte hatayı yakalayıp güvenle yazdırıyoruz.

<code-view name="main.js" language="javascript">
try {
  throw new Error("Dosya bulunamadı");
} catch (hata) {
  console.log("Yakalanan hata:", hata.message);
}
console.log("Program devam ediyor.");
</code-view>

<code-view name="Terminal" language="bash">
Yakalanan hata: Dosya bulunamadı
Program devam ediyor.
</code-view>

# 🎯 9. Görev

Hata yakalanınca ``Yakalanan hata: Dosya bulunamadı`` yazsın, ardından program normal
biçimde devam etsin. ``catch`` bloğunun içini yazar mısın?

- files/main.js/.block
// Görev: catch bloğunda yakalanan hatanın mesajını yazdır.
// console.log("Yakalanan hata:", hata.message) yaz; ardından program normal devam eder.
// Beklenen çıktı:
// Yakalanan hata: Dosya bulunamadı
// Program devam ediyor.
try {
  throw new Error("Dosya bulunamadı");
} catch (hata) {
  <<< ❓ >>>;
}
console.log("Program devam ediyor.");
---------------------
- tests/0/output
Yakalanan hata: Dosya bulunamadı
Program devam ediyor.

- tests/0/require = "hata.message"

---------------------
- parts/9:
- text
# 🏆 Mini Tekrar

Şimdiye kadar öğrendiklerimizi birleştirelim: bir dizi metin kaydı tek tek okuyalım ve
bozuk olanı atlayalım. ``forEach`` her kayıt için ``try / catch`` çalıştırır; bir kayıt
bozuksa diğerleri okunmaya devam eder.

<code-view name="main.js" language="javascript">
const kayitlar = ['{"ad": "Ali"}', "{bozuk}"];
kayitlar.forEach((metin) => {
  try {
    const kisi = JSON.parse(metin);
    console.log("Okundu:", kisi.ad);
  } catch (hata) {
    console.log("Atlandı:", hata.name);
  }
});
</code-view>

<code-view name="Terminal" language="bash">
Okundu: Ali
Atlandı: SyntaxError
</code-view>

# 🎯 10. Görev

İlk kayıt ``Okundu: Ali``, bozuk kayıt ``Atlandı: SyntaxError`` yazsın. ``catch`` bloğunun
içini doldurup programı çalıştırır mısın?

- files/main.js/.block
// Görev: bozuk kaydı atlayan catch satırını yaz.
// console.log("Atlandı:", hata.name) ile hatanın adını yazdır; diğer kayıtlar okunmaya devam eder.
// Beklenen çıktı:
// Okundu: Ali
// Atlandı: SyntaxError
const kayitlar = ['{"ad": "Ali"}', "{bozuk}"];
kayitlar.forEach((metin) => {
  try {
    const kisi = JSON.parse(metin);
    console.log("Okundu:", kisi.ad);
  } catch (hata) {
    <<< ❓ >>>;
  }
});
---------------------
- tests/0/output
Okundu: Ali
Atlandı: SyntaxError

- tests/0/require = "hata.name"

---------------------
