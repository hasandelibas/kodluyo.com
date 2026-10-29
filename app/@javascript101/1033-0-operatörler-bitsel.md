- show_content = true
- show_editor = true
- show_terminal = true
- language = "javascript"
- title = "🔢 Operatörler : Bitsel"
- run = "node main.js"

- parts/0:
- text
# 🔢 **Bitsel** Operatörler

Bilgisayar sayıları ikili (binary) tabanda, yani 0 ve 1'lerle saklar. Bitsel operatörler
bu 0 ve 1'ler üzerinde tek tek çalışır. Bir sayının ikili hâlini görmek için
``toString(2)`` kullanırız.

<code-view name="main.js" language="javascript">
let sayı = 5;
console.log(sayı.toString(2));
console.log((13).toString(2));
</code-view>

<code-view name="Terminal" language="bash">
101
1101
</code-view>

# 🎯 1. Görev

``6`` sayısının ikili hâlini (``110``) yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: 6 sayısının ikili (binary) hâlini toString(2) ile ekrana yazdır.
// console.log() içinde sayı.toString(2) kullan; metoda 2 parametresini ver.
// Beklenen çıktı:
// 110
let sayı = 6;
console.log(sayı.toString(<<< ❓ >>>));
---------------------
- tests/0/output
110

---------------------
- parts/1:
- text
# ✅ Tebrikler : ``&`` (Ve)

``&`` iki sayının bitlerini karşılaştırır; bir bit **her iki sayıda da** 1 ise sonuç 1
olur. ``6 & 3`` hesabında ``110`` ile ``011`` karşılaştırılır ve ``010`` yani ``2``
bulunur.

<code-view name="main.js" language="javascript">
console.log((6).toString(2), (3).toString(2));
console.log(6 & 3);
console.log(6 & 5);
</code-view>

<code-view name="Terminal" language="bash">
110 11
2
4
</code-view>

# 🎯 2. Görev

``2`` ve ``4`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: & (Ve/AND) operatörüyle iki sayının ortak (1 olan) bitlerini bul.
// Her iki console.log() boşluğuna & operatörünü yaz: 6 & 3 ve 6 & 5.
// Beklenen çıktı:
// 2
// 4
console.log(6 <<< ❓ >>> 3);
console.log(6 <<< ❓ >>> 5);
---------------------
- tests/0/output
2
4

- tests/0/require = "&"

---------------------
- tests/1/files/main.js/.block
// Görev: 12 ile 10'un ve 12 ile 3'ün ortak bitlerini & operatörüyle bul.
// İkinci test aynı kuralı farklı sayılarla denetler: & operatörü.
// Beklenen çıktı:
// 8
// 0
console.log(12 <<< ❓ >>> 10);
console.log(12 <<< ❓ >>> 3);
- tests/1/output
8
0

- tests/1/require = "&"

---------------------
- parts/2:
- text
# ✅ Tebrikler : ``|`` (Veya)

``|`` işleminde bitlerden **en az biri** 1 ise sonuç 1 olur. ``6 | 3`` hesabında ``110``
ile ``011`` birleşir ve ``111`` yani ``7`` bulunur.

<code-view name="main.js" language="javascript">
console.log(6 | 3);
console.log(4 | 1);
</code-view>

<code-view name="Terminal" language="bash">
7
5
</code-view>

# 🎯 3. Görev

``7`` ve ``5`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: | (Veya/OR) operatörüyle bitlerden en az biri 1 ise 1 veren sonucu bul.
// Her iki console.log() boşluğuna | operatörünü yaz: 6 | 3 ve 4 | 1.
// Beklenen çıktı:
// 7
// 5
console.log(6 <<< ❓ >>> 3);
console.log(4 <<< ❓ >>> 1);
---------------------
- tests/0/output
7
5

- tests/0/require = "|"

---------------------
- tests/1/files/main.js/.block
// Görev: 12 ile 3'ün ve 8 ile 1'in bitlerini | operatörüyle birleştir.
// İkinci test aynı kuralı farklı sayılarla denetler: | operatörü.
// Beklenen çıktı:
// 15
// 9
console.log(12 <<< ❓ >>> 3);
console.log(8 <<< ❓ >>> 1);
- tests/1/output
15
9

- tests/1/require = "|"

---------------------
- parts/3:
- text
# ✅ Tebrikler : ``^`` (Özel Veya)

``^`` işleminde bitler **farklıysa** sonuç 1, aynıysa 0 olur. Bir sayıyı kendisiyle
karşılaştırınca tüm bitler aynı olacağı için sonuç ``0`` çıkar.

<code-view name="main.js" language="javascript">
console.log(6 ^ 3);
console.log(5 ^ 5);
console.log(10 ^ 3);
</code-view>

<code-view name="Terminal" language="bash">
5
0
9
</code-view>

# 🎯 4. Görev

``5``, ``0`` ve ``9`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: ^ (Özel Veya/XOR) operatörüyle bitler farklıysa 1 veren sonucu bul.
// Üç console.log() boşluğuna da ^ operatörünü yaz: 6 ^ 3, 5 ^ 5 ve 10 ^ 3.
// Beklenen çıktı:
// 5
// 0
// 9
console.log(6 <<< ❓ >>> 3);
console.log(5 <<< ❓ >>> 5);
console.log(10 <<< ❓ >>> 3);
---------------------
- tests/0/output
5
0
9

- tests/0/require = "^"

---------------------
- tests/1/files/main.js/.block
// Görev: ^ operatörüyle üç karşılaştırmayı da hesapla.
// İkinci test aynı kuralı farklı sayılarla denetler: ^ operatörü.
// Beklenen çıktı:
// 6
// 0
// 14
console.log(12 <<< ❓ >>> 10);
console.log(7 <<< ❓ >>> 7);
console.log(15 <<< ❓ >>> 1);
- tests/1/output
6
0
14

- tests/1/require = "^"

---------------------
- parts/4:
- text
# ✅ Tebrikler : ``~`` (Değil)

``~`` tüm bitleri tersine çevirir: 1'ler 0, 0'lar 1 olur. Sonuç her zaman
``-(sayı + 1)`` biçiminde çıkar. Bu yüzden ``~5`` değeri ``-6``'dır.

<code-view name="main.js" language="javascript">
console.log(~5);
console.log(~0);
</code-view>

<code-view name="Terminal" language="bash">
&minus;6
&minus;1
</code-view>

# 🎯 5. Görev

``-6`` ve ``-1`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: ~ (Değil/NOT) operatörüyle bitleri tersine çevir; sonuç -(sayı + 1) olur.
// console.log() içinde sayının ÖNÜNE ~ yaz: ~5 ve ~0.
// Beklenen çıktı:
// -6
// -1
console.log(<<< ❓ >>>5);
console.log(<<< ❓ >>>0);
---------------------
- tests/0/output
&minus;6
&minus;1

- tests/0/require = "~"

---------------------
- tests/1/files/main.js/.block
// Görev: ~ operatörüyle 9 ve 1 sayılarının bitlerini tersine çevir.
// İkinci test aynı kuralı farklı sayılarla denetler: ~ operatörü.
// Beklenen çıktı:
// -10
// -2
console.log(<<< ❓ >>>9);
console.log(<<< ❓ >>>1);
- tests/1/output
&minus;10
&minus;2

- tests/1/require = "~"

---------------------
- parts/5:
- text
# ✅ Tebrikler : ``<<`` (Sola Kaydırma)

``<<`` bitleri sola kaydırır ve boş kalan yerlere 0 yazar. Bir bit sola kaydırmak sayıyı
2 ile çarpmak demektir; iki bit kaydırmak 4 ile çarpar. ``3 << 2`` bu yüzden ``12`` olur.

<code-view name="main.js" language="javascript">
let sayı = 3;
console.log(sayı << 2);
console.log(sayı << 3);
console.log(sayı * 4);
</code-view>

<code-view name="Terminal" language="bash">
12
24
12
</code-view>

# 🎯 6. Görev

``12``, ``24`` ve ``12`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: << (Sola Kaydırma) operatörüyle sayıyı 4 ve 8 ile çarp.
// Boşluklara << operatörünü yaz: sayı << 2 ve sayı << 3. Son satır sabittir.
// Beklenen çıktı:
// 12
// 24
// 12
let sayı = 3;
console.log(sayı <<< ❓ >>> 2);
console.log(sayı <<< ❓ >>> 3);
console.log(sayı * 4);
---------------------
- tests/0/output
12
24
12

- tests/0/require = "<<"

---------------------
- tests/1/files/main.js/.block
// Görev: 5 sayısını << operatörüyle 4 ve 8 ile çarp.
// İkinci test aynı kuralı farklı sayıyla denetler: << operatörü.
// Beklenen çıktı:
// 20
// 40
// 20
let sayı = 5;
console.log(sayı <<< ❓ >>> 2);
console.log(sayı <<< ❓ >>> 3);
console.log(sayı * 4);
- tests/1/output
20
40
20

- tests/1/require = "<<"

---------------------
- parts/6:
- text
# ✅ Tebrikler : ``>>`` (Sağa Kaydırma)

``>>`` bitleri sağa kaydırır; bu işlem sayıyı 2'nin kuvvetlerine böler. ``20 >> 2``
``20 / 4`` yani ``5`` demektir. İşaret biti korunduğu için negatif sayılar negatif kalır.

<code-view name="main.js" language="javascript">
let sayı = 20;
console.log(sayı >> 2);
console.log(-8 >> 1);
</code-view>

<code-view name="Terminal" language="bash">
5
&minus;4
</code-view>

# 🎯 7. Görev

``5`` ve ``-4`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: >> (Sağa Kaydırma) operatörüyle sayıyı 2'nin kuvvetlerine böl.
// Boşluklara >> operatörünü yaz: sayı >> 2 ve -8 >> 1.
// Beklenen çıktı:
// 5
// -4
let sayı = 20;
console.log(sayı <<< ❓ >>> 2);
console.log(-8 <<< ❓ >>> 1);
---------------------
- tests/0/output
5
&minus;4

- tests/0/require = ">>"

---------------------
- tests/1/files/main.js/.block
// Görev: 100 ve -16 sayılarını >> operatörüyle sağa kaydır.
// İkinci test aynı kuralı farklı sayılarla denetler: >> operatörü.
// Beklenen çıktı:
// 25
// -4
let sayı = 100;
console.log(sayı <<< ❓ >>> 2);
console.log(-16 <<< ❓ >>> 2);
- tests/1/output
25
&minus;4

- tests/1/require = ">>"

---------------------
- parts/7:
- text
# ✅ Tebrikler : ``>>>`` (İşaretsiz Sağa Kaydırma)

``>>>`` de sağa kaydırır ama boş kalan yerlere işaret bitini kopyalamaz, hep 0 yazar.
Bu yüzden sonuç işaretsiz 32 bitlik bir sayıya dönüşür. ``-1 >>> 0`` değeri bu yüzden
``4294967295`` olur.

<code-view name="main.js" language="javascript">
console.log(-1 >>> 0);
console.log(-8 >>> 1);
</code-view>

<code-view name="Terminal" language="bash">
4294967295
2147483644
</code-view>

# 🎯 8. Görev

``2147483644`` ve ``4294967295`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: İşaretsiz sağa kaydırma operatörüyle sonucu işaretsiz sayıya çevir.
// Boşluklara, üç büyüktür işaretinden oluşan işaretsiz sağa kaydırma operatörünü yaz.
// Beklenen çıktı:
// 2147483644
// 4294967295
console.log(-8 <<< ❓ >>> 1);
console.log(-1 <<< ❓ >>> 0);
---------------------
- tests/0/output
2147483644
4294967295

- tests/0/require = ">>>"

---------------------
- tests/1/files/main.js/.block
// Görev: -16 ve -2 sayılarını işaretsiz sağa kaydırma operatörüyle kaydır.
// İkinci test aynı kuralı farklı sayılarla denetler: üç büyüktür operatörü.
// Beklenen çıktı:
// 1073741820
// 4294967294
console.log(-16 <<< ❓ >>> 2);
console.log(-2 <<< ❓ >>> 0);
- tests/1/output
1073741820
4294967294

- tests/1/require = ">>>"

---------------------
- parts/8:
- text
# ✅ Tebrikler : Bayraklar (Flags)

Her bit bir yetkiyi temsil edebilir: ``4`` okuma, ``2`` yazma, ``1`` silme olsun. ``|``
ile yetkileri tek bir sayıda toplarız. ``&`` ile de "bu yetki var mı?" diye sorarız;
böylece üç yetkiyi tek bir sayıda saklamış oluruz.

<code-view name="main.js" language="javascript">
const OKU = 4;
const YAZ = 2;
const SİL = 1;
let izin = OKU | YAZ;
console.log(izin);
console.log((izin & OKU) === OKU);
console.log((izin & SİL) === SİL);
</code-view>

<code-view name="Terminal" language="bash">
6
true
false
</code-view>

# 🎯 9. Görev

``5``, ``true`` ve ``false`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: | (Veya) operatörüyle okuma ve silme yetkilerini tek sayıda birleştir.
// Boşluğa | operatörünü yaz: OKU | SİL. Sonra & ile yetki sorguları yapılır.
// Beklenen çıktı:
// 5
// true
// false
const OKU = 4;
const YAZ = 2;
const SİL = 1;
let izin = OKU <<< ❓ >>> SİL;
console.log(izin);
console.log((izin & OKU) === OKU);
console.log((izin & YAZ) === YAZ);
---------------------
- tests/0/output
5
true
false

- tests/0/require = "|"

---------------------
- tests/1/files/main.js/.block
// Görev: OKU ve YAZ yetkilerini | operatörüyle tek sayıda birleştir.
// İkinci test aynı kuralı farklı yetkilerle denetler: | operatörü.
// Beklenen çıktı:
// 6
// true
// true
const OKU = 4;
const YAZ = 2;
const SİL = 1;
let izin = OKU <<< ❓ >>> YAZ;
console.log(izin);
console.log((izin & OKU) === OKU);
console.log((izin & YAZ) === YAZ);
- tests/1/output
6
true
true

- tests/1/require = "|"

---------------------
- parts/9:
- text
# 🏆 Mini Tekrar

Bir sayının ikili hâlini yazıp bit kaydırma ile yarısını bulalım. ``& 1`` ile de sayının
tek mi çift mi olduğunu anlarız: son bit 1 ise tek, 0 ise çifttir. ``13`` tek bir sayıdır
ve ikili hâli ``1101``'dir.

<code-view name="main.js" language="javascript">
let sayı = 13;
console.log(sayı.toString(2));
console.log(sayı >> 1);
console.log(sayı & 1);
</code-view>

<code-view name="Terminal" language="bash">
1101
6
1
</code-view>

# 🎯 10. Görev

``1101``, ``6`` ve ``1`` yazdıran programı yazar mısın?

- files/main.js/.block
// Görev: Sayının ikili hâlini yaz, >> ile yarısını al ve & 1 ile tek mi çift mi anla.
// Birinci boşluğa >> operatörünü, ikinci boşluğa 1 sayısını yaz.
// Beklenen çıktı:
// 1101
// 6
// 1
let sayı = 13;
console.log(sayı.toString(2));
console.log(sayı <<< ❓ >>> 1);
console.log(sayı & <<< ❓ >>>);
---------------------
- tests/0/output
1101
6
1

- tests/0/require = ">>"

---------------------
