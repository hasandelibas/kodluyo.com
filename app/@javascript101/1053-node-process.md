- show_content = true
- show_editor = true
- show_terminal = true
- language = "javascript"
- title = "⚙️ process : Program Bilgileri"
- run = "node main.js"

- parts/0:
- text
# ⚙️ **process** : Çalışan Program

``process``, çalışan Node.js programını temsil eden hazır bir nesnedir. Hangi
klasörde çalıştığımızı, hangi işletim sisteminde olduğumuzu ve Node.js'in sürümünü
bu nesneden öğreniriz. ``process``'i ``require`` ile çağırmayız; her dosyada hazır
gelir.

İlk bilgimiz çalışma klasörü: ``process.cwd()`` (current working directory) programın
başlatıldığı klasörü verir.

<code-view name="main.js" language="javascript">
console.log("Çalışma klasörü:", process.cwd());
</code-view>

<code-view name="Terminal" language="bash">
Çalışma klasörü: /app
</code-view>

# 🎯 1. Görev

Çalışma klasörünü terminale yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: process.cwd() ile programın çalıştığı klasörü terminale yazdır.
// Boşluğa process metodunun adını yaz: cwd; çalışma klasörünü metin olarak döndürür.
// Beklenen çıktı:
// Çalışma klasörü: /app
console.log("Çalışma klasörü:", process.<<< ❓ >>>());
---------------------
- tests/0/output
Çalışma klasörü: /app

- tests/0/require = "cwd"
---------------------
- parts/1:
- text
# 💻 platform ve arch : Sistem Bilgisi

``process.platform`` işletim sistemini söyler: ``linux``, ``darwin`` (macOS) ya da
``win32`` (Windows). ``process.arch`` işlemcinin mimarisini verir: ``x64``, ``arm64``
gibi. Bu bilgiler bir programı platforma göre farklı çalıştırmak için kullanılır.
Örneğin yol ayırıcısını platforma göre seçebiliriz.

<code-view name="main.js" language="javascript">
console.log("İşletim sistemi:", process.platform);
console.log("Mimari:", process.arch);
</code-view>

<code-view name="Terminal" language="bash">
İşletim sistemi: linux
Mimari: x64
</code-view>

# 🎯 2. Görev

İşletim sistemini ve mimariyi yazdıran programı tamamlar mısın?

- files/main.js/.block
// Görev: process.platform ile işletim sistemini, process.arch ile mimariyi yazdır.
// Boşluğa platform yaz; işletim sistemi "linux", mimari ise "x64" olarak yazılır.
// Beklenen çıktı:
// İşletim sistemi: linux
// Mimari: x64
console.log("İşletim sistemi:", process.<<< ❓ >>>);
console.log("Mimari:", process.arch);
---------------------
- tests/0/output
İşletim sistemi: linux
Mimari: x64

- tests/0/require = "platform"
---------------------
- parts/2:
- text
# 🏷️ version : Node.js Sürümü

``process.version`` Node.js'in sürümünü başında ``v`` harfiyle verir. ``process.versions``
ise içinde ``node``, ``v8`` gibi alt sürümlerin bulunduğu bir nesnedir. ``v`` harfi
olmadan sadece numarayı yazdırmak için ``process.versions.node`` kullanılır.

<code-view name="main.js" language="javascript">
console.log("Node sürümü:", process.version);
console.log("Sadece numara:", process.versions.node);
</code-view>

<code-view name="Terminal" language="bash">
Node sürümü: v20.11.0
Sadece numara: 20.11.0
</code-view>

# 🎯 3. Görev

``v`` harfi olmadan Node.js sürüm numarasını yazdıran programı tamamlar mısın?

- files/main.js/.block
// Görev: process.versions.node ile Node.js sürümünü "v" harfi olmadan yazdır.
// Boşluğa node yaz; process.version "v20.11.0", process.versions.node ise "20.11.0" verir.
// Beklenen çıktı:
// Node sürümü: v20.11.0
// Sadece numara: 20.11.0
console.log("Node sürümü:", process.version);
console.log("Sadece numara:", process.versions.<<< ❓ >>>);
---------------------
- tests/0/output
Node sürümü: v20.11.0
Sadece numara: 20.11.0

- tests/0/require = "node"
---------------------
- parts/3:
- text
# 📜 argv : Komut Satırı

Node.js bir programı çalıştırırken komut satırındaki kelimeleri bir diziye koyar:
``process.argv``. Bu dizinin ilk elemanı (``argv[0]``) node programının kendisi,
ikincisi (``argv[1]``) çalıştırdığımız dosyanın yoludur. Sonraki elemanlar bizim
yazdığımız ek argümanlardır.

<code-view name="main.js" language="javascript">
console.log("node yolu:", process.argv[0]);
console.log("dosya yolu:", process.argv[1]);
</code-view>

<code-view name="Terminal" language="bash">
node yolu: /usr/local/bin/node
dosya yolu: /app/main.js
</code-view>

# 🎯 4. Görev

Çalıştırılan dosyanın yolunu ``argv`` içinden yazdıran programı tamamlar mısın?

- files/main.js/.block
// Görev: process.argv dizisinden çalıştırılan dosyanın yolunu yazdır.
// Boşluğa 1 yaz; argv[0] node programının yolu, argv[1] ise çalışan dosyanın yoludur.
// Beklenen çıktı:
// node yolu: /usr/local/bin/node
// dosya yolu: /app/main.js
console.log("node yolu:", process.argv[0]);
console.log("dosya yolu:", process.argv[<<< ❓ >>>]);
---------------------
- tests/0/output
node yolu: /usr/local/bin/node
dosya yolu: /app/main.js

---------------------
- parts/4:
- text
# ✂️ argv.slice(2) : Gerçek Argümanlar

Bizim yazdığımız ek argümanlar ``argv`` dizisinde 2. indeksten sonra başlar.
``slice(2)`` ile bu kısmı alırız. ``node main.js merhaba dünya`` diye çalıştırınca
``["merhaba", "dünya"]`` elde ederiz. Hiç argüman verilmezse dizi boş (``[]``) olur.

<code-view name="main.js" language="javascript">
let argümanlar = process.argv.slice(2);

console.log("Argüman sayısı:", argümanlar.length);
console.log("Argümanlar:", argümanlar);
</code-view>

<code-view name="Terminal" language="bash">
Argüman sayısı: 0
Argümanlar: []
</code-view>

# 🎯 5. Görev

Ek argümanları ``argv`` içinden ayıran programı tamamlar mısın?

- files/main.js/.block
// Görev: process.argv.slice(2) ile yalnızca ek argümanları alıp yazdır.
// Boşluğa process.argv.slice(2) yaz; ilk iki eleman node ve dosya yoludur, atılır.
// Beklenen çıktı:
// Argüman sayısı: 0
// Argümanlar: []
let argümanlar = <<< ❓ >>>;

console.log("Argüman sayısı:", argümanlar.length);
console.log("Argümanlar:", argümanlar);
---------------------
- tests/0/output
Argüman sayısı: 0
Argümanlar: []

- tests/0/require = "process.argv.slice(2)"
---------------------
- parts/5:
- text
# 🌱 env : Ortam Değişkenleri

``process.env`` işletim sisteminin tuttuğu ortam değişkenlerini (environment variables)
bir nesne olarak verir. Kullanıcı adı ``USER``, ev klasörü ``HOME`` ve projenin modu
``NODE_ENV`` gibi isimler burada bulunur. Ayarları koda yazmak yerine buradan okumak
programı taşınabilir yapar.

<code-view name="main.js" language="javascript">
console.log("Kullanıcı:", process.env.USER);
console.log("Ev klasörü:", process.env.HOME);
console.log("Ortam:", process.env.NODE_ENV);
</code-view>

<code-view name="Terminal" language="bash">
Kullanıcı: kodluyo
Ev klasörü: /home/kodluyo
Ortam: development
</code-view>

# 🎯 6. Görev

Kullanıcı adını ortam değişkenlerinden okuyan programı tamamlar mısın?

- files/main.js/.block
// Görev: process.env.USER ile kullanıcı adını, process.env.NODE_ENV ile ortamı yazdır.
// Boşluğa USER yaz; ortam değişkeni adları büyük harfle yazılır ve env nesnesinden okunur.
// Beklenen çıktı:
// Kullanıcı: kodluyo
// Ortam: development
console.log("Kullanıcı:", process.env.<<< ❓ >>>);
console.log("Ortam:", process.env.NODE_ENV);
---------------------
- tests/0/output
Kullanıcı: kodluyo
Ortam: development

- tests/0/require = "USER"
---------------------
- parts/6:
- text
# 🔀 env ile Karar Vermek

Ortam değişkenleri genellikle bir ``if`` cümlesiyle kontrol edilir. ``NODE_ENV``
``"development"`` ise geliştirme sırasında detaylı bilgi yazarız, ``"production"``
ise gereksiz yazıları kapatırız. Böylece aynı kod hem bilgisayarda hem sunucuda
çalışır.

<code-view name="main.js" language="javascript">
if (process.env.NODE_ENV === "development") {
  console.log("Geliştirme modundayız, detaylı loglar açık.");
} else {
  console.log("Üretim modundayız, sadece önemli bilgiler yazılır.");
}
</code-view>

<code-view name="Terminal" language="bash">
Geliştirme modundayız, detaylı loglar açık.
</code-view>

# 🎯 7. Görev

Ortam moduna göre farklı mesaj yazan programı tamamlar mısın?

- files/main.js/.block
// Görev: process.env.NODE_ENV değeri "development" ise geliştirme mesajını yazdır.
// Boşluğa process.env.NODE_ENV yaz; değer "development" metniyle === ile karşılaştırılır.
// Beklenen çıktı:
// Geliştirme modundayız, detaylı loglar açık.
if (<<< ❓ >>> === "development") {
  console.log("Geliştirme modundayız, detaylı loglar açık.");
} else {
  console.log("Üretim modundayız, sadece önemli bilgiler yazılır.");
}
---------------------
- tests/0/output
Geliştirme modundayız, detaylı loglar açık.

- tests/0/require = "process.env.NODE_ENV"
---------------------
- parts/7:
- text
# 🖨️ stdout.write : Satır Sonu Yok

``console.log`` her yazının sonuna satır sonu ekler. Bazen aynı satırda parça parça
yazmak isteriz; o zaman ``process.stdout.write()`` kullanırız. Bu fonksiyon satır
sonu eklemez, satırı bitirmek için sonuna ``\n`` yazmamız gerekir.

<code-view name="main.js" language="javascript">
process.stdout.write("Yükleniyor...");
process.stdout.write(" tamam\n");
console.log("Bitti");
</code-view>

<code-view name="Terminal" language="bash">
Yükleniyor... tamam
Bitti
</code-view>

# 🎯 8. Görev

Aynı satıra parça parça yazan programı tamamlar mısın?

- files/main.js/.block
// Görev: process.stdout.write() ile satır sonu eklemeden "Yükleniyor..." yazdır.
// Boşluğa METİN olarak "Yükleniyor..." yaz (çift tırnak kullan); bu fonksiyon satır sonu eklemez.
// Beklenen çıktı:
// Yükleniyor... tamam
// Bitti
process.stdout.write(<<< ❓ >>>);
process.stdout.write(" tamam\n");
console.log("Bitti");
---------------------
- tests/0/output
Yükleniyor... tamam
Bitti

- tests/0/require = "\"Yükleniyor...\""
---------------------
- parts/8:
- text
# 🚪 exitCode : Çıkış Kodu

Program bittiğinde işletim sistemine bir çıkış kodu (exit code) bırakır. ``0``
başarı demektir; sıfırdan farklı bir değer hata olduğunu anlatır. ``process.exitCode``
ile bu kodu kendimiz belirleyebiliriz; program hemen durmaz, işini bitirip o kodla
kapanır.

<code-view name="main.js" language="javascript">
let dosyaVar = false;

if (!dosyaVar) {
  process.exitCode = 1;
  console.log("Hata: dosya bulunamadı.");
}

console.log("Çıkış kodu:", process.exitCode);
</code-view>

<code-view name="Terminal" language="bash">
Hata: dosya bulunamadı.
Çıkış kodu: 1
</code-view>

# 🎯 9. Görev

Dosya yoksa çıkış kodunu ``1`` yapan programı tamamlar mısın?

- files/main.js/.block
// Görev: Dosya yoksa process.exitCode değerini 1 yapıp hata mesajını yazdır.
// Boşluğa sayı olarak 1 yaz; 0 başarı, sıfırdan farklı bir değer ise hata demektir.
// Beklenen çıktı:
// Hata: dosya bulunamadı.
// Çıkış kodu: 1
let dosyaVar = false;

if (!dosyaVar) {
  process.exitCode = <<< ❓ >>>;
  console.log("Hata: dosya bulunamadı.");
}

console.log("Çıkış kodu:", process.exitCode);
---------------------
- tests/0/output
Hata: dosya bulunamadı.
Çıkış kodu: 1

---------------------
- parts/9:
- text
# 🏆 Mini Tekrar

Bütün bilgileri tek bir kartta toplayalım. Programın çalıştığı sistemi, Node.js
sürümünü ve çalışma klasörünü yazdırmak hata ayıklarken çok işe yarar. Aynı satırda
birden çok değer yazdırmak için ``console.log`` kullanıyoruz.

<code-view name="main.js" language="javascript">
console.log("=== Sistem Kartı ===");
console.log("Platform:", process.platform, "| Mimari:", process.arch);
console.log("Node:", process.versions.node);
console.log("Klasör:", process.cwd());
console.log("Kullanıcı:", process.env.USER);
</code-view>

<code-view name="Terminal" language="bash">
=== Sistem Kartı ===
Platform: linux | Mimari: x64
Node: 20.11.0
Klasör: /app
Kullanıcı: kodluyo
</code-view>

# 🎯 10. Görev

Sistem kartını yazdıran programı tamamlar mısın?

- files/main.js/.block
// Görev: Sistem bilgilerini tek bir kartta toplayıp console.log() ile yazdır.
// Boşluğa arch yaz; process.arch mimariyi (x64) verir, platform ise işletim sistemini verir.
// Beklenen çıktı:
// === Sistem Kartı ===
// Platform: linux | Mimari: x64
// Node: 20.11.0
// Klasör: /app
// Kullanıcı: kodluyo
console.log("=== Sistem Kartı ===");
console.log("Platform:", process.platform, "| Mimari:", process.<<< ❓ >>>);
console.log("Node:", process.versions.node);
console.log("Klasör:", process.cwd());
console.log("Kullanıcı:", process.env.USER);
---------------------
- tests/0/output
=== Sistem Kartı ===
Platform: linux | Mimari: x64
Node: 20.11.0
Klasör: /app
Kullanıcı: kodluyo

- tests/0/require = "arch"
---------------------
