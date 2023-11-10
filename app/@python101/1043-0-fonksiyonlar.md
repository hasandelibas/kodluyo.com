- show_content = true
- show_editor = true
- show_terminal = true
- language = "python"
- title = "Fonksiyonlar"	
- run = "py main.py"




- parts/0:
- text

## 🚀 Fonksiyonlar

Fonksiyonlar tekrar eden kodları tek bir seferde yazıp. Kolay bir şekilde çağırmamızı sağlan bir şeydir.

`def` anahtar kelimesi ile fonksiyon oluşturabiliriz.

<code-view name="main.py" language="python">
def selam_ver():
  print("Merhaba Kodluyo!")
&nbsp;
selam_ver()
</code-view>

<code-view name="Terminal" language="md">
Merhaba Kodluyo!
</code-view>



- files/main.py/.block
# ekrana "Merhaba Kodluyo!" yazdıran 
# selam_ver fonksiyonunu tanımlar mısın?
<<<❓>>>

selam_ver()
- tests/0/files/main.py/.block
# ekrana "Merhaba Kodluyo!" yazdıran 
# selam_ver fonksiyonunu tanımlar mısın?
<<<❓>>>

selam_ver()
- tests/0/execute
py main.py
- tests/0/output
Merhaba Kodluyo!

------------------








- parts/1:
- text

## 🚀 Fonksiyonu Çağırma


Fonksiyonlar her zaman değer döndürmek zorunda değildir. İşlem de yapabilir. Örneğin:

<code-view name="main.py" language="python">
def merhaba():
  print("Merhaba, kodlama nasıl gidiyor?")
&nbsp;
merhaba()
</code-view>


<code-view name="Terminal" language="md">
Merhaba, kodlama nasıl gidiyor?
</code-view>




- files/main.py/.block
# merhaba fonksiyonunu çağırır mısın?
def merhaba():
  print("Merhaba, kodlama nasıl gidiyor?")

<<<❓>>>
- tests/0/files/main.py/.block
# merhaba fonksiyonunu çağırır mısın?
def merhaba():
  print("Merhaba, kodlama nasıl gidiyor?")

<<<❓>>>
- tests/0/execute
py main.py
- tests/0/output
Merhaba, kodlama nasıl gidiyor?

------------------
- tests/1/files/main.py/.block
# merhaba fonksiyonunu çağırır mısın?
def merhaba():
  print("Merhaba")

<<<❓>>>
- tests/1/execute
py main.py
- tests/1/output
Merhaba

------------------


















- parts/2:
- text

## 🚀 Fonksiyonlara Parametre Gönderme

<drawing style="--animation-delay:1s">
<svg width="100%" height="100%" viewBox="-674.0860998440198 619.1367709064491 42.29601796697966 8.440342781613253" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" style="stroke-linecap: round; stroke-linejoin: round; fill: none; background: radial-gradient(rgb(23, 23, 23), rgb(19, 19, 19), rgb(0, 0, 0)) center center / cover; --item-length:45; --total-length:129004;"><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 166.213; transform: matrix(0.00134137, 0, 0, 0.00134137, -669.763, 623.966); --index:0; --length:2087.17; --start:0;" d="M329 -585C309 -605 293 -654 272 -665,C-329 -1000 20 590 7 774,C4 811 -54 1000 -131 923" data-hash="1.7819" class="selected" stroke="#FFFFFF"></path><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 381.116; transform: matrix(0.000584999, 0, 0, 0.000584999, -669.751, 624.131); --index:1; --length:2055.33; --start:2087.17;" d="M-928 92C-941 78 -1000 70 -980 66,C-822 26 -537 0 -426 -13,C48 -65 523 -92 1000 -92" data-hash="1.7820" class="selected" stroke="#FFFFFF"></path><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 267.215; transform: matrix(0.000818769, 0.000160516, -0.000160516, 0.000818769, -668.403, 623.547); --index:2; --length:2315.05; --start:4142.51;" d="M32 -1000C-439 -292 -332 537 439 1000" data-hash="1.7821" class="selected" stroke="#FFFFFF"></path><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 617.264; transform: matrix(0.000361195, 0, 0, 0.000361195, -667.173, 623.531); --index:3; --length:2510.89; --start:6457.56;" d="M684 -924C684 -1000 609 -839 513 -711,C-300 374 613 -824 -128 187,C-310 435 -587 710 -684 999" data-hash="1.7824" class="selected" stroke="#FFC107"></path><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 759.454; transform: matrix(0.000293569, 0, 0, 0.000293569, -667.111, 623.537); --index:4; --length:2757.03; --start:8968.45;" d="M-947 -1000C-277 -329 213 388 947 1000" data-hash="1.7825" class="selected" stroke="#FFC107"></path><path xmlns="http://www.w3.org/2000/svg" data-hash="1.7827" d="M32 -1000C-439 -292 -332 537 439 1000" class="selected" style="stroke-width: 267.215; transform: matrix(-0.000808689, -0.000205354, 0.000205354, -0.000808689, -665.848, 623.689); --index:5; --length:2315.05; --start:11725.5;" stroke="#FFFFFF"></path><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 534.431; transform: matrix(0.000417177, 0, 0, 0.000417177, -664.238, 623.441); --index:6; --length:2000.08; --start:14040.5;" d="M-1000 -30C-330 -30 328 30 999 -30" data-hash="1.7833" class="selected" stroke="#FFFFFF"></path><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 458.083; transform: matrix(0.000486707, 0, 0, 0.000486707, -664.137, 623.814); --index:7; --length:2003.43; --start:16040.6;" d="M-1000 -31C-358 -31 370 62 999 -62" data-hash="1.7834" class="selected" stroke="#FFFFFF"></path><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 296.751; transform: matrix(0.000751312, 0, 0, 0.000751312, -662.293, 623.347); --index:8; --length:5580.82; --start:18044;" d="M-736 -179C-736 -296 -759 -437 -716 -549,C-542 -1000 179 -980 394 -569,C603 -169 -13 408 -284 622,C-443 749 -697 850 -839 993,C-846 1000 -827 977 -819 972,C-752 928 -671 908 -592 890,C-136 781 378 849 846 849" data-hash="1.7835" class="selected" stroke="#FFFFFF"></path><path xmlns="http://www.w3.org/2000/svg" data-hash="1.7836" d="M684 -924C684 -1000 609 -839 513 -711,C-300 374 613 -824 -128 187,C-310 435 -587 710 -684 999" class="selected" style="stroke-width: 617.264; transform: matrix(0.000361195, 0, 0, 0.000361195, -660.931, 623.654); --index:9; --length:2510.89; --start:23624.9;" stroke="#FFC107"></path><path xmlns="http://www.w3.org/2000/svg" data-hash="1.7837" d="M-947 -1000C-277 -329 213 388 947 1000" class="selected" style="stroke-width: 759.454; transform: matrix(0.000293569, 0, 0, 0.000293569, -660.869, 623.66); --index:10; --length:2757.03; --start:26135.7;" stroke="#FFC107"></path><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 779.979; transform: matrix(0.000285844, 0, 0, 0.000285844, -659.564, 623.355); --index:11; --length:2034.26; --start:28892.8;" d="M-1000 148C-703 -148 648 148 1000 148" data-hash="1.7839" class="selected" stroke="#FFFFFF"></path><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 534.431; transform: matrix(0.000417178, 0, 0, 0.000417178, -659.548, 623.397); --index:12; --length:1999.39; --start:30927;" d="M-18 -999C-18 -343 18 335 18 1000" data-hash="1.7840" class="selected" stroke="#FFFFFF"></path><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 494.354; transform: matrix(0.000450997, 0, 0, 0.000450997, -658.354, 623.127); --index:13; --length:2862.47; --start:32926.4;" d="M109 -976C109 -392 -999 976 1000 976" data-hash="1.7841" class="selected" stroke="#FFFFFF"></path><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 222.952; transform: matrix(0.001, 0, 0, 0.001, -657.856, 623.537); --index:14; --length:956; --start:35788.9;" d="M0 -478C0 -159 0 159 0 478" data-hash="1.7842" class="selected" stroke="#FFFFFF"></path><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 571.249; transform: matrix(0.000390289, 0, 0, 0.000390289, -650.111, 621.856); --index:15; --length:4322.11; --start:36744.9;" d="M876 -509C876 -1000 -995 -648 -746 282,C-555 999 557 809 995 559" data-hash="1.7844" class="selected" stroke="#2196f3"></path><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 407.368; transform: matrix(0.0005473, 0, 0, 0.0005473, -649.756, 621.542); --index:16; --length:2090.55; --start:41067;" d="M89 -919C70 -938 44 -999 32 -976,C-145 -619 31 599 145 1000" data-hash="1.7845" class="selected" stroke="#2196f3"></path><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 624.796; transform: matrix(0.00035684, 0, 0, 0.00035684, -649.245, 621.854); --index:17; --length:4434.67; --start:43157.6;" d="M177 10C869 10 956 -920 177 -725,C-1000 -430 -415 920 999 920" data-hash="1.7846" class="selected" stroke="#2196f3"></path><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 359.407; transform: matrix(0.000620335, 0, 0, 0.000620335, -648.33, 622.118); --index:18; --length:2426.05; --start:47592.2;" d="M294 -718C294 -851 -137 -1000 -178 -793,C-294 -211 186 452 -178 1000" data-hash="1.7847" class="selected" stroke="#2196f3"></path><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 848.803; transform: matrix(0.000262667, 0, 0, 0.000262667, -648.378, 622.095); --index:19; --length:2007.1; --start:50018.3;" d="M-1000 -20C-349 -20 368 78 1000 -78" data-hash="1.7848" class="selected" stroke="#2196f3"></path><path xmlns="http://www.w3.org/2000/svg" data-hash="1.7855" d="M329 -585C309 -605 293 -654 272 -665,C-329 -1000 20 590 7 774,C4 811 -54 1000 -131 923" class="selected" style="stroke-width: 166.213; transform: matrix(0.000984452, 0, 0, 0.000984452, -645.736, 621.951); --index:20; --length:2087.17; --start:52025.4;" stroke="#FFFFFF"></path><path xmlns="http://www.w3.org/2000/svg" data-hash="1.7856" d="M-928 92C-941 78 -1000 70 -980 66,C-822 26 -537 0 -426 -13,C48 -65 523 -92 1000 -92" class="selected" style="stroke-width: 381.116; transform: matrix(0.000429341, 0, 0, 0.000429341, -645.727, 622.073); --index:21; --length:2055.33; --start:54112.6;" stroke="#FFFFFF"></path><path xmlns="http://www.w3.org/2000/svg" data-hash="1.7857" d="M32 -1000C-439 -292 -332 537 439 1000" class="selected" style="stroke-width: 267.215; transform: matrix(0.000600909, 0.000117806, -0.000117806, 0.000600909, -644.738, 621.644); --index:22; --length:2315.05; --start:56167.9;" stroke="#FFFFFF"></path><path xmlns="http://www.w3.org/2000/svg" data-hash="1.7858" d="M684 -924C684 -1000 609 -839 513 -711,C-300 374 613 -824 -128 187,C-310 435 -587 710 -684 999" class="selected" style="stroke-width: 617.264; transform: matrix(0.000265087, 0, 0, 0.000265087, -643.835, 621.632); --index:23; --length:2510.89; --start:58482.9;" stroke="#FFC107"></path><path xmlns="http://www.w3.org/2000/svg" data-hash="1.7859" d="M-947 -1000C-277 -329 213 388 947 1000" class="selected" style="stroke-width: 759.454; transform: matrix(0.000215456, 0, 0, 0.000215456, -643.79, 621.636); --index:24; --length:2757.03; --start:60993.8;" stroke="#FFC107"></path><path xmlns="http://www.w3.org/2000/svg" data-hash="1.7860" d="M32 -1000C-439 -292 -332 537 439 1000" class="selected" style="stroke-width: 267.215; transform: matrix(-0.000593511, -0.000150713, 0.000150713, -0.000593511, -642.863, 621.748); --index:25; --length:2315.05; --start:63750.9;" stroke="#FFFFFF"></path><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 19237.5; transform: matrix(1.15895e-05, 0, 0, 1.15895e-05, -642.179, 621.51); --index:26; --length:3552.14; --start:66065.9;" d="M1000 -666C-999 -666 -1000 666 1000 666" data-hash="1.7861" class="selected" stroke="#FFFFFF"></path><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 8231.45; transform: matrix(2.70854e-05, 0, 0, 2.70854e-05, -642.163, 621.951); --index:27; --length:2543.85; --start:69618.1;" d="M429 -570C-999 -570 -105 570 1000 570" data-hash="1.7862" class="selected" stroke="#FFFFFF"></path><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 577.874; transform: matrix(0.000385815, 0, 0, 0.000385815, -648.062, 624.1); --index:28; --length:4289.18; --start:72161.9;" d="M-660 -243C-660 -318 -741 -306 -700 -163,C-599 188 -420 600 -420 957,C-420 1000 -446 877 -460 837,C-614 374 -715 -177 -460 -604,C-222 -1000 429 -728 741 -604" data-hash="1.7863" class="selected" stroke="#2196f3"></path><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 576.455; transform: matrix(0.000386765, 0, 0, 0.000386765, -647.276, 624.122); --index:29; --length:4414.47; --start:76451.1;" d="M-214 98C900 98 84 -1000 -254 -540,C-442 -287 -580 3 -693 298,C-900 836 413 999 824 897" data-hash="1.7864" class="selected" stroke="#2196f3"></path><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 655.892; transform: matrix(0.000339922, 0, 0, 0.000339922, -646.542, 624.052); --index:30; --length:2495.21; --start:80865.5;" d="M-266 -1000C-266 -281 -552 999 552 999" data-hash="1.7865" class="selected" stroke="#2196f3"></path><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 930.943; transform: matrix(0.000239491, 0, 0, 0.000239491, -646.578, 623.898); --index:31; --length:2015.35; --start:83360.8;" d="M-1000 -65C-1000 65 784 0 999 0" data-hash="1.7866" class="selected" stroke="#2196f3"></path><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 592.069; transform: matrix(0.000376565, 0, 0, 0.000376565, -645.622, 624.137); --index:32; --length:4716.07; --start:85376.1;" d="M-919 -512C-919 -386 -1000 -274 -960 -143,C-814 342 -166 615 311 512,C904 385 999 -635 803 -635,C554 -635 863 531 967 635" data-hash="1.7867" class="selected" stroke="#2196f3"></path><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 828.796; transform: matrix(0.000269007, 0, 0, 0.000269007, -644.809, 624.03); --index:33; --length:3853.35; --start:90092.2;" d="M-631 -148C-631 254 -475 316 -287 655,C-228 761 -51 1000 -172 1000,C-225 1000 -287 115 -287 -33,C-287 -733 32 -1000 631 -550" data-hash="1.7868" class="selected" stroke="#2196f3"></path><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 687.125; transform: matrix(0.000324471, 0, 0, 0.000324471, -643.929, 624.078); --index:34; --length:5146.84; --start:93945.5;" d="M-1000 -365C-1000 0 -915 281 -809 634,C-786 711 -819 929 -761 872,C-560 671 -537 -967 95 -651,C451 -473 1000 580 1000 967" data-hash="1.7869" class="selected" stroke="#2196f3"></path><path xmlns="http://www.w3.org/2000/svg" data-hash="1.7870" d="M-736 -179C-736 -296 -759 -437 -716 -549,C-542 -1000 179 -980 394 -569,C603 -169 -13 408 -284 622,C-443 749 -697 850 -839 993,C-846 1000 -827 977 -819 972,C-752 928 -671 908 -592 890,C-136 781 378 849 846 849" class="selected" style="stroke-width: 296.751; transform: matrix(0.000751312, 0, 0, 0.000751312, -641.521, 623.831); --index:35; --length:5580.82; --start:99092.4;" stroke="#FFFFFF"></path><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 632.688; transform: matrix(0.000352389, 0, 0, 0.000352389, -640.075, 623.656); --index:36; --length:6850.01; --start:104673;" d="M419 -454C419 -346 139 -555 -676 -147,C-782 -94 -475 -24 -369 28,C-253 86 566 494 682 379,C782 279 212 -38 156 -103,C-22 -306 -150 -1000 -150 -892,C-150 -441 -92 74 -238 510,C-401 999 -236 552 287 28" data-hash="1.7871" class="selected" stroke="#FFFFFF"></path><path xmlns="http://www.w3.org/2000/svg" data-hash="1.7872" d="M684 -924C684 -1000 609 -839 513 -711,C-300 374 613 -824 -128 187,C-310 435 -587 710 -684 999" class="selected" style="stroke-width: 617.264; transform: matrix(0.000365247, 0, 0, 0.000365247, -638.786, 624.05); --index:37; --length:2510.89; --start:111523;" stroke="#FFC107"></path><path xmlns="http://www.w3.org/2000/svg" data-hash="1.7873" d="M-947 -1000C-277 -329 213 388 947 1000" class="selected" style="stroke-width: 759.454; transform: matrix(0.000296863, 0, 0, 0.000296863, -638.724, 624.056); --index:38; --length:2757.03; --start:114034;" stroke="#FFC107"></path><path xmlns="http://www.w3.org/2000/svg" data-hash="1.7874" d="M-1000 148C-703 -148 648 148 1000 148" class="selected" style="stroke-width: 779.979; transform: matrix(0.000285844, 0, 0, 0.000285844, -637.045, 623.824); --index:39; --length:2034.26; --start:116791;" stroke="#FFFFFF"></path><path xmlns="http://www.w3.org/2000/svg" data-hash="1.7875" d="M-18 -999C-18 -343 18 335 18 1000" class="selected" style="stroke-width: 534.431; transform: matrix(0.000417178, 0, 0, 0.000417178, -637.03, 623.867); --index:40; --length:1999.39; --start:118825;" stroke="#FFFFFF"></path><path xmlns="http://www.w3.org/2000/svg" data-hash="1.7876" d="M109 -976C109 -392 -999 976 1000 976" class="selected" style="stroke-width: 494.354; transform: matrix(0.000450997, 0, 0, 0.000450997, -635.835, 623.596); --index:41; --length:2862.47; --start:120825;" stroke="#FFFFFF"></path><path xmlns="http://www.w3.org/2000/svg" data-hash="1.7877" d="M0 -478C0 -159 0 159 0 478" class="selected" style="stroke-width: 222.952; transform: matrix(0.001, 0, 0, 0.001, -635.338, 624.006); --index:42; --length:956; --start:123687;" stroke="#FFFFFF"></path><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 103.069; transform: matrix(0.00105622, 0, 0, 0.00105622, -654.28, 623.032); --index:43; --length:2002.24; --start:124643;" d="M-1000 42C-332 42 334 8 1000 -42" data-hash="1.7878" class="selected" stroke="#4caf50"></path><path xmlns="http://www.w3.org/2000/svg" style="stroke-width: 141.509; transform: matrix(0.000769304, 0, 0, 0.000769304, -652.847, 622.956); --index:44; --length:2358.03; --start:126645;" d="M-999 -706C-880 -706 1000 117 -764 706" data-hash="1.7879" class="selected" stroke="#4caf50"></path></svg>
</drawing>

`def` anahtar kelimesi ile fonksiyon oluşturabilir, `return` anahtar kelimesi ile fonksiyonun sonucunu döndürebilirsin.

<code-view name="main.py" language="python">
def f(x):
  return 2 * x + 4
print( f(1) )
</code-view>

f(1) fonksiyonunu çağırdığında 2 * 1 + 4 = 6 değerini döndürür.

<code-view name="Terminal" language="md">
6
</code-view>



- files/main.py/.block
# f(x) = 2 * x + 4 fonksiyonunu tanımlar mısın?
<<<❓>>>
print( f(1) )
- tests/0/files/main.py/.block
# f(x) = 2 * x + 4 fonksiyonunu tanımlar mısın?
<<<❓>>>
print( f(1) )
- tests/0/execute
py main.py
- tests/0/output
6

------------------
- tests/1/files/main.py/.block
# f(x) = 2 * x + 4 fonksiyonunu tanımlar mısın?
<<<❓>>>
print( f(2) )
- tests/1/execute
py main.py
- tests/1/output
8

------------------







- parts/3:
- text

## 🚀 Fonksiyonları Parametre ile çağırma

<code-view name="main.py" language="python">
def hesapla(x):
  return 2 * x + 4
print( hesapla(1) )
</code-view>

hesapla(1) fonksiyonunu çağırdığında 2*1 + 4 = 6 değerini döndürür.

<code-view name="Terminal" language="md">
6
</code-view>

- files/main.py/.block
# hesapla fonksiyonunu 1 parametresi ile çağırıp
# sonucunu yazdırır mısın?
def hesapla(x):
  return 2 * x + 4

print( <<<❓>>> )
- tests/0/files/main.py/.block
# hesapla fonksiyonunu 1 parametresi ile çağırıp
# sonucunu yazdırır mısın?
def hesapla(x):
  return 2 * x + 4

print( <<<❓>>> )
- tests/0/execute
py main.py
- tests/0/output
6

------------------
- tests/1/files/main.py/.block
# hesapla fonksiyonunu 1 parametresi ile çağırıp
# sonucunu yazdırır mısın?
def hesapla(x):
  return x + 4

print( <<<❓>>> )
- tests/1/execute
py main.py
- tests/1/output
5

------------------






- parts/3:
- text

## 🚀 Birden çok parametre

Birden çok parametre ile fonksiyonu çağırmak için virgülle ayırabilirsin.

<code-view name="main.py" language="python">
def yazdır( adı, soyadı, meslek ):
  print("Adı     :" , adı)
  print("Soyadı  :" , soyadı)
  print("Mesleği :" , meslek)
&nbsp;
yazdır("Cahit", "Arf", "Matematikçi")
</code-view>

<code-view name="Terminal" language="md">
Adı     : Cahit
Soyadı  : Arf
Mesleği : Matematikçi
</code-view>

- files/main.py/.block
# yazdır fonksiyonunu ("Cahit","Arf","Matematikçi") 
# parametreleri ile çağırabilir misin?
def yazdır( adı, soyadı, meslek ):
  print("Adı     :" , adı)
  print("Soyadı  :" , soyadı)
  print("Mesleği :" , meslek)

<<<❓>>>
- tests/0/files/main.py/.block
# yazdır fonksiyonunu ("Cahit","Arf","Matematikçi") 
# parametreleri ile çağırabilir misin?
def yazdır( adı, soyadı, meslek ):
  print("Adı     :" , adı)
  print("Soyadı  :" , soyadı)
  print("Mesleği :" , meslek)

<<<❓>>>
- tests/0/execute
py main.py
- tests/0/output
Adı     : Cahit
Soyadı  : Arf
Mesleği : Matematikçi

------------------
- tests/1/files/main.py/.block
# yazdır fonksiyonunu ("Cahit","Arf","Matematikçi") 
# parametreleri ile çağırabilir misin?
def yazdır( adı, soyadı, meslek ):
  print("Mesleği :" , meslek)
  print("Adı     :" , adı)
  print("Soyadı  :" , soyadı)

<<<❓>>>
- tests/1/execute
py main.py
- tests/1/output
Mesleği : Matematikçi
Adı     : Cahit
Soyadı  : Arf

------------------









- parts/4:
- text

## 🚀 Parametre ile çağırma

Parametre ile çağırmak için `parametre_adı = değer` şeklinde tanımlama yapabilirsin.

<code-view name="main.py" language="python">
def yazdır( adı, soyadı, meslek ):
  print("Adı     :" , adı)
  print("Soyadı  :" , soyadı)
  print("Mesleği :" , meslek)
&nbsp;
yazdır( meslek = "Matematikçi", adı = "Cahit", soyadı = "Arf")
</code-view>

<code-view name="Terminal" language="md">
Adı     : Cahit
Soyadı  : Arf
Mesleği : Matematikçi
</code-view>

- files/main.py/.block
# yazdır fonksiyonunu ("Cahit","Arf","Matematikçi") 
# parametreleri ile çağırabilir misin?
def yazdır( adı, soyadı, meslek ):
  print("Adı     :" , adı)
  print("Soyadı  :" , soyadı)
  print("Mesleği :" , meslek)

yazdır( meslek=<<<"❓">>> )
- tests/0/files/main.py/.block
# yazdır fonksiyonunu ("Cahit","Arf","Matematikçi") 
# parametreleri ile çağırabilir misin?
def yazdır( adı, soyadı, meslek ):
  print("Adı     :" , adı)
  print("Soyadı  :" , soyadı)
  print("Mesleği :" , meslek)

yazdır( meslek=<<<"❓">>> )
- tests/0/execute
py main.py
- tests/0/output
Adı     : Cahit
Soyadı  : Arf
Mesleği : Matematikçi

------------------
- tests/1/files/main.py/.block
# yazdır fonksiyonunu ("Cahit","Arf","Matematikçi") 
# parametreleri ile çağırabilir misin?
def yazdır( adı, soyadı, meslek ):
  print("Mesleği :" , meslek)
  print("Adı     :" , adı)
  print("Soyadı  :" , soyadı)

yazdır( meslek=<<<"❓">>> )
- tests/1/execute
py main.py
- tests/1/output
Mesleği : Matematikçi
Adı     : Cahit
Soyadı  : Arf

------------------






- parts/5:
- text

## 🚀 Varsayılan Parametre Atama

Varsayılan parametre atama için fonksiyonun tanımlandığı satırda `parametre_adı = değer` şeklinde tanımlama yapabilirsin.

<code-view name="main.py" language="python">
def yazdır( adı, soyadı, meslek = "Matematikçi" ):
  print( adı, soyadı, meslek , sep = "\t" )
&nbsp;
yazdır("Ali","Kuşçu")
yazdır("Aziz","Sancar","Biyokimyager")
</code-view>

<code-view name="Terminal" language="md">
Ali     Kuşçu   Matematikçi
Aziz    Sancar  Biyokimyager
</code-view>

Yukarıdaki örnekte Ali Kuşçu için varsayılan olarak Matematikçi mesleği atanmıştır. 

- files/main.py/.block
# (adı,soyadı,meslek) parametreleri olan 
# yazdır fonksiyonunu oluşturur musun?
# meslek parametresinin varsayılan değeri "Matematikçi" olsun.
<<<❓>>>
  print( adı, soyadı, meslek , sep = "\t" )

yazdır("Ali","Kuşçu")
yazdır("Aziz","Sancar","Biyokimyager")
- tests/0/files/main.py/.block
# (adı,soyadı,meslek) parametreleri olan 
# yazdır fonksiyonunu oluşturur musun?
# meslek parametresinin varsayılan değeri "Matematikçi" olsun.
<<<❓>>>
  print( adı, soyadı, meslek , sep = "\t" )

yazdır("Ali","Kuşçu")
yazdır("Aziz","Sancar","Biyokimyager")
- tests/0/execute
py main.py
- tests/0/output="Ali\tKuşçu\tMatematikçi\nAziz\tSancar\tBiyokimyager\n"

------------------
- tests/1/files/main.py/.block
# (adı,soyadı,meslek) parametreleri olan 
# yazdır fonksiyonunu oluşturur musun?
# meslek parametresinin varsayılan değeri "Matematikçi" olsun.
<<<❓>>>
  print( adı, soyadı, meslek , sep = "\t" )

yazdır("Cahit","Arf")
yazdır("Aziz","Sancar","Biyokimyager")
- tests/1/execute
py main.py
- tests/1/output="Cahit\tArf\tMatematikçi\nAziz\tSancar\tBiyokimyager\n"

------------------








- parts/6:
- text

## 🚀 Sınırsız `tuple` Parametre Kullanımı

Sınırsız parametre kullanımı için `*parametreler` şeklinde, 
değişkenin önüne `*` yıldız işareti koyarız.
Aşağıdaki örnekteki `def topla( *sayılar )` daki `sayılar` değişkeni bir `tuple` gibi davranır.

<code-view name="main.py" language="python">
def topla( *sayılar ):
  toplam = 0
  for sayı in sayılar:
    toplam += sayı
  return toplam
&nbsp;
print( topla(1, 2) )
print( topla(1, 2, 3) )
</code-view>

<code-view name="Terminal" language="md">
3
6
</code-view>



- files/main.py/.block
# topla fonksiyonu sınırsız parametre alır
# ve parametrelerin toplamını döndürür.
# topla fonksiyonunu tanımlar mısın?
<<<❓>>>
  toplam = 0
  for sayı in sayılar:
    toplam += sayı
  return toplam

print( topla(1, 2) )
print( topla(1, 2, 3) )
- tests/0/files/main.py/.block
# topla fonksiyonu sınırsız parametre alır
# ve parametrelerin toplamını döndürür.
# topla fonksiyonunu tanımlar mısın?
<<<❓>>>
  toplam = 0
  for sayı in sayılar:
    toplam += sayı
  return toplam

print( topla(1, 2) )
print( topla(1, 2, 3) )
- tests/0/execute
py main.py
- tests/0/output
3
6

------------------
- tests/1/files/main.py/.block
# topla fonksiyonu (sayılar) adında sınırsız parametre alır
# ve parametrelerin toplamını döndürür.
# topla fonksiyonunu tanımlar mısın?
<<<❓>>>
  toplam = 0
  for sayı in sayılar:
    toplam += sayı
  return toplam

print( topla(2) )
print( topla(1, 6, 3) )
- tests/1/execute
py main.py
- tests/1/output
2
10

------------------








- parts/7:
- text

## 🚀 Sınırsız `dict` Parametre Kullanımı

Sınırsız isimli parametre için için `**parametreler` şeklinde, 
değişkenin önüne `**` iki yıldız işareti koyarız.
Aşağıdaki örnekteki `def tablo( **veriler )` deki `veriler` değişkeni bir `dict` gibi davranır.

<code-view name="main.py" language="python">
def tablo(**veriler):
  for anahtar in veriler:
    print(anahtar,": "+veriler[anahtar], sep="\t")
&nbsp;
tablo(adı="Yunus",soyadı="Emre",doğum="1239")
print("------------------")
tablo(element="Hidrojen",numara="1")
</code-view>

<code-view name="Terminal" language="shell">
adı     : Yunus
soyadı  : Emre
doğum   : 1239
&minus;-----------------
element : Hidrojen
numara  : 1
</code-view>



- files/main.py/.block
# tablo fonksiyonu dict tipinde sınırsız parametre alır
# ve parametreleri tablo şeklinde yazdırır.
# tablo fonksiyonunu tanımlar mısın?
<<<❓>>>
  for anahtar in veriler:
    print(anahtar,": "+veriler[anahtar], sep="\t")

tablo(adı="Yunus",soyadı="Emre",doğum="1239")
print("------------------")
tablo(element="Hidrojen",numara="1")
- tests/0/files/main.py/.block
# tablo fonksiyonu dict tipinde sınırsız parametre alır
# ve parametreleri tablo şeklinde yazdırır.
# tablo fonksiyonunu tanımlar mısın?
<<<❓>>>
  for anahtar in veriler:
    print(anahtar,": "+veriler[anahtar], sep="\t")

tablo(adı="Yunus",soyadı="Emre",doğum="1239")
print("------------------")
tablo(element="Hidrojen",numara="1")
- tests/0/execute
py main.py
- tests/0/output="adı\t: Yunus\nsoyadı\t: Emre\ndoğum\t: 1239\n------------------\nelement\t: Hidrojen\nnumara\t: 1\n"

- tests/1/files/main.py/.block
# tablo fonksiyonu dict tipinde sınırsız parametre alır
# ve parametreleri tablo şeklinde yazdırır.
# tablo fonksiyonunu tanımlar mısın?
<<<❓>>>
  for anahtar in veriler:
    print(anahtar,": "+veriler[anahtar], sep="\t")

tablo(adı="Yunus",soyadı="Emre",doğum="1239")
print("------------------")
tablo(element="Helyum",numara="2")
- tests/1/execute
py main.py
- tests/1/output="adı\t: Yunus\nsoyadı\t: Emre\ndoğum\t: 1239\n------------------\nelement\t: Helyum\nnumara\t: 2\n"








- parts/8:
- text

## 🚀 Boş fonksiyon oluşturma

Boş fonksiyon oluşturmak için `pass` ifadesini kullanabilirsin.

<code-view name="main.py" language="python">
def bos_fonksiyon():
  pass
</code-view>

Boş fonksiyon oluşturmak için `return` anahtar kelimesini de kullanabilirsin.

<code-view name="main.py" language="python">
def bos_fonksiyon():
  return
</code-view>


Eğerki aşağıdaki gibi bir fonksiyon tanımlarsak <b style="color:#F88">hata</b> yapmış oluruz.
<code-view name="main.py" language="python" error>
def bos_fonksiyon():
&nbsp;
bos_fonksiyon()
</code-view>



- files/main.py/.block
# bos_fonksiyon adında bir fonksiyon tanımla
# herhangi bir şey yapmasın
def bos_fonksiyon():
  <<<❓>>>
 
bos_fonksiyon()
- tests/0/files/main.py/.block
# bos_fonksiyon adında bir fonksiyon tanımla
# herhangi bir şey yapmasın
def bos_fonksiyon():
  <<<❓>>>
 
bos_fonksiyon()
print(type(bos_fonksiyon()) , bos_fonksiyon() is None )
- tests/0/execute
py main.py
- tests/0/output
<class 'NoneType'> True

------------------






