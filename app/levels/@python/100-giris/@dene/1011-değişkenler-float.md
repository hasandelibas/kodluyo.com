- show_content = true
- show_editor = true
- show_terminal = true
- language = "python"
- title = "🔢 Değişkenler float : Ondalıklı Sayılar"
- run = "py hello.py"

- parts/0/text
# 🔢 **float** : Ondalıklı Sayılar 
``float`` yani ondalıklı sayıları tanımlamak için ``=`` operatörünü kullanırız.

<code-view name="hello.py" language="python">
pi_sayısı = 3.14
print(pi_sayısı)
</code-view>
<code-view name="Terminal" language="bash">
3.14
</code-view>

<image-text>
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Pi_unrolled_cc0.gif/640px-Pi_unrolled_cc0.gif'>
Pi sayısı <b>π</b>, bir dairenin çevresinin çapına bölümü ile elde edilen irrasyonel matematik sabitidir. 
</image-text>



- parts/0/files/hello.py/.block
# pi_sayısı değişkenini 3.14 yapar mısın?
pi_sayısı = <<< ❓ >>>
print(pi_sayısı)
---------------------
- parts/0/tests/0/output
3.14

---------------------

- parts/1/text

<image-text>
<img style='background:white;width:33%' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Hyperbola_E.svg/330px-Hyperbola_E.svg.png'>
<i>e</i> sayısı veya <i>Euler sayısı</i>, matematik, doğal bilimler ve mühendislikte önemli yeri olan sabit bir reel sayı, doğal logaritmanın tabanıdır.
</image-text>


<code-view name="hello.py" language="python">
e = 2.7182
print( e )
</code-view>
<code-view name="Terminal" language="bash">
2.7182
</code-view>


- parts/1/files/hello.py/.block
# e sayısını tanımlar mısın?
# e sayısı 2.7182 olmalı
<<< ❓ >>>
print( e )
---------------------
- parts/1/tests/0/output
2.7182

---------------------



- parts/2/text
<code-view name="hello.py" language="python">
çeyrek = 0.25
print( "bir çeyrek", çeyrek, "sayısına eşittir." )
</code-view>
<code-view name="Terminal" language="shell">
bir çeyrek 0.25 sayısına eşittir.
</code-view>

- parts/2/files/hello.py/.block
# çeyrek değişkenini tanımlar mısın?
<<< ❓ >>>
print( "bir çeyrek", çeyrek, "sayısına eşittir." )
---------------------
- parts/2/tests/0/output
bir çeyrek 0.25 sayısına eşittir.

---------------------



- parts/3/text
<image-text>
<img src='//upload.wikimedia.org/wikipedia/commons/thumb/8/83/Hydrogen_discharge_tube.jpg/220px-Hydrogen_discharge_tube.jpg'>
Hidrojen elementinin erime sıcaklığı -259.16 °C derecedir.
</image-text>

<code-view name="hello.py" language="python">
erime_sıcaklığı = -259.16
print( "hidrojen elementinin erime sıcaklığı", erime_sıcaklığı, " °C derecedir." )
</code-view>
<code-view name="Terminal" language="shell">
hidrojen elementinin erime sıcaklığı -259.16  °C derecedir.
</code-view>

- parts/3/files/hello.py/.block
# erime_sıcaklığı değişkenini tanımlar mısın?
# Hidrojen elementinin erime sıcaklığı -259.16 °C derecedir.
<<< ❓ >>>
print( 
  "hidrojen elementinin erime sıcaklığı", 
  erime_sıcaklığı, 
  " °C derecedir." 
)
---------------------
- parts/3/tests/0/output
hidrojen elementinin erime sıcaklığı -259.16  °C derecedir.

---------------------
