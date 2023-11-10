- show_content = true
- show_editor = true
- show_terminal = true
- language = "python"
- title = "🔢 Değişkenler int : Tam Sayılar"
- run = "py main.py"

- parts/0/text
# 🔢 **int** : Tam Sayılar 
``int`` yani tam sayıları tanımlamak için ``=`` operatörünü kullanırız.

<code-view name="main.py" language="python">
yıl = 2023
print(yıl)
</code-view>
<code-view name="Terminal" language="bash">
2023
</code-view>




- parts/0/files/main.py/.block
# yıl değişkenini 2023 yapar mısın?
yıl = <<< ❓ >>>
print(yıl)
---------------------
- parts/0/tests/0/output
2023

---------------------

- parts/1/text

<code-view name="main.py" language="python">
saat = 24
print( 'bir günde', saat, 'saat vardır.' )
</code-view>
<code-view name="Terminal" language="bash">
bir günde 24 saat vardır.
</code-view>

- parts/1/files/main.py/.block
# bir günde kaç saat vardır?
# saat değişkenini tanımlar mısın?
<<< ❓ >>>
print( 'bir günde', saat, 'saat vardır.' )
---------------------
- parts/1/tests/0/output
bir günde 24 saat vardır.

---------------------



- parts/2/text
<code-view name="main.py" language="python">
yıl = 1919
print( yıl, "yılında Atatürk Samsun'a çıktı." )
</code-view>
<code-view name="Terminal" language="shell">
1919 yılında Atatürk Samsun'a çıktı.
</code-view>

- parts/2/files/main.py/.block
# yıl değişkenini tanımlar mısın?
<<< ❓ >>>
print( yıl, "yılında Atatürk Samsun'a çıktı." )
---------------------
- parts/2/tests/0/output
1919 yılında Atatürk Samsun'a çıktı.

---------------------



- parts/3/text
<code-view name="main.py" language="python">
sayı = -5
print( sayı, "sayısı ile 5 sayısını toplarsak 0 yapar." )
</code-view>
<code-view name="Terminal" language="shell">
&minus;5 sayısı ile 5 sayısını toplarsak 0 yapar.
</code-view>

- parts/3/files/main.py/.block
# sayı değişkenini tanımlar mısın?
<<< ❓ >>>
print( sayı, "sayısı ile 5 sayısını toplarsak 0 yapar." )
---------------------
- parts/3/tests/0/output
&minus;5 sayısı ile 5 sayısını toplarsak 0 yapar.

---------------------
