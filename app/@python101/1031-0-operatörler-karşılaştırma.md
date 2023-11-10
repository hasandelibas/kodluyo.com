- show_content = true
- show_editor = true
- show_terminal = true
- language = "python"
- title = "🧮 Karşılaştırma Operatörleri"
- run = "py main.py"


- parts/0:
- text
### ✅ Eşit Midir ``==``

Eşit midir işlecini (operatörünü) kullanmak için ``==`` kullanırız. Eğer iki değer birbirine eşitse, ``True`` değerini döndürür. Aksi takdirde ``False`` değerini döndürür.


<code-view name="main.py" language="python">
x = 3 
y = 3
print( x == y )
</code-view>
<code-view name="Terminal" language="bash">
True
</code-view>

- files/main.py/.block
# x ve y değişkenlerinin birbirine eşit midir?
x = 3
y = 3
print(<<< ❓ >>>)
- tests/0/files/main.py/.block
# x ve y değişkenlerinin birbirine eşit midir?
x = 3
y = 3
print(<<< ❓ >>>)
- tests/0/output
True

- tests/1/files/main.py/.block
# x ve y değişkenlerinin birbirine eşit midir?
x = 8
y = 2
print(<<< ❓ >>>)
- tests/1/output
False

---------------------




- parts/1:
- text
### ✅ Eşit Midir ``==``

Eşit midir işlecini (operatörünü) kullanmak için ``==`` kullanırız. Eşit midir işleci, iki değerin birbirine eşit olup olmadığını kontrol eder. Eğer iki değer birbirine eşitse, ``True`` değerini döndürür. Aksi takdirde ``False`` değerini döndürür.


<code-view name="main.py" language="python">
x = 3 
y = 2
print( x == y )
</code-view>
<code-view name="Terminal" language="bash">
False
</code-view>

- files/main.py/.block
# x ve y değişkenlerinin birbirine eşit midir?
x = 3
y = 2
print(<<< ❓ >>>)
- tests/0/files/main.py/.block
# x ve y değişkenlerinin birbirine eşit midir?
x = 3
y = 2
print(<<< ❓ >>>)
- tests/0/output
False

- tests/1/files/main.py/.block
# x ve y değişkenlerinin birbirine eşit midir?
x = 8
y = 8
print(<<< ❓ >>>)
- tests/1/output
True

---------------------







- parts/2:
- text
### ✅ Eşit Midir ``==``

Metinleri kıyaslarken de kullanabiliriz. Eğer iki metin birbirine eşitse, ``True`` değerini döndürür. Aksi takdirde ``False`` değerini döndürür.


<code-view name="main.py" language="python">
x = "Ankara"
y = "İstanbul"
print( x == y )
</code-view>
<code-view name="Terminal" language="bash">
False
</code-view>

- files/main.py/.block
# x ve y değişkenlerinin birbirine eşit midir?
x = "Ankara"
y = "İstanbul"
print(<<< ❓ >>>)
- tests/0/files/main.py/.block
# x ve y değişkenlerinin birbirine eşit midir?
x = "Ankara"
y = "İstanbul"
print(<<< ❓ >>>)
- tests/0/output
False

- tests/1/files/main.py/.block
# x ve y değişkenlerinin birbirine eşit midir?
x = "İzmir"
y = "İzmir"
print(<<< ❓ >>>)
- tests/1/output
True

---------------------





- parts/3:
- text
### ❎ Eşit Değil Midir? ``!=``

İki ifadenin birbirine eşit olmadığını kontrol etmek için ``!=`` kullanırız. Eğer iki ifade birbirine eşit <u>değilse</u> , ``True`` değerini döndürür. Aksi takdirde ``False`` değerini döndürür.

<code-view name="main.py" language="python">
x = 3
y = 3
print( x != y )
</code-view>
<code-view name="Terminal" language="bash">
False
</code-view>

- files/main.py/.block
# x ve y değişkenlerinin eşit olmadığını kontrol eder misin?
# Eğer eşit değilse True değerini döndürür.
# Eğer eşitlerse False değerini döndürür.
x = 3
y = 3
print(<<< ❓ >>>)
- tests/0/files/main.py/.block
# x ve y değişkenlerinin eşit olmadığını kontrol eder misin?
# Eğer eşit değilse True değerini döndürür.
# Eğer eşitlerse False değerini döndürür.
x = 3
y = 3
print(<<< ❓ >>>)
- tests/0/output
False

- tests/1/files/main.py/.block
# x ve y değişkenlerinin eşit olmadığını kontrol eder misin?
# Eğer eşit değilse True değerini döndürür.
# Eğer eşitlerse False değerini döndürür.
x = 12
y = 11
print(<<< ❓ >>>)
- tests/1/output
True

---------------------







- parts/4:
- text
### ❎ Eşit Değil Midir? ``!=``

İki ifadenin birbirine eşit olmadığını kontrol etmek için ``!=`` kullanırız. Eğer iki ifade birbirine eşit değilse, ``True`` değerini döndürür. Aksi takdirde ``False`` değerini döndürür.

<code-view name="main.py" language="python">
x = 3
y = 2
print( x != y )
</code-view>
<code-view name="Terminal" language="bash">
True
</code-view>

- files/main.py/.block
# x ve y değişkenlerinin eşit olmadığını kontrol eder misin?
# Eğer eşit değilse True değerini döndürür.
# Eğer eşitlerse False değerini döndürür.
x = 3
y = 2
print(<<< ❓ >>>)
- tests/0/files/main.py/.block
# x ve y değişkenlerinin eşit olmadığını kontrol eder misin?
# Eğer eşit değilse True değerini döndürür.
# Eğer eşitlerse False değerini döndürür.
x = 3
y = 2
print(<<< ❓ >>>)
- tests/0/output
True

- tests/1/files/main.py/.block
# x ve y değişkenlerinin eşit olmadığını kontrol eder misin?
# Eğer eşit değilse True değerini döndürür.
# Eğer eşitlerse False değerini döndürür.
x = 12
y = 12
print(<<< ❓ >>>)
- tests/1/output
False

---------------------










- parts/5:
- text
### ▶️ Büyüktür ``>``

Büyük müdür işlecini (operatörünü) kullanmak için ``>`` kullanırız. İlk ifade büyük ise ``True`` değerini değilse ``False`` değerini döndürür.

<code-view name="main.py" language="python">
x = 3
y = 2
print( x > y )
</code-view>
<code-view name="Terminal" language="bash">
True
</code-view>

- files/main.py/.block
# x değişkeni y den büyük müdür?
x = 3
y = 2
print(<<< ❓ >>>)
- tests/0/files/main.py/.block
# x değişkeni y den büyük müdür?
x = 3
y = 2
print(<<< ❓ >>>)
- tests/0/output
True

- tests/1/files/main.py/.block
# x değişkeni y den büyük müdür?
x = 12
y = 12
print(<<< ❓ >>>)
- tests/1/output
False

---------------------
- tests/2/files/main.py/.block
# x değişkeni y den büyük müdür?
x = 0
y = 2
print(<<< ❓ >>>)
- tests/2/output
False

---------------------





- parts/6:
- text
### ▶️ Büyük Eşit ``>=``

İlk ifade büyük veya eşit ise ``True`` değerini değilse ``False`` değerini döndürür.

<code-view name="main.py" language="python">
x = 3
y = 2
print( x >= y )
print( x >= x )
</code-view>
<code-view name="Terminal" language="bash">
True
True
</code-view>

- files/main.py/.block
# x değişkeni y den büyük eşit midir?
x = 3
y = 2
print(<<< ❓ >>>)
- tests/0/files/main.py/.block
# x değişkeni y den büyük eşit midir?
x = 3
y = 2
print(<<< ❓ >>>)
- tests/0/output
True

- tests/1/files/main.py/.block
# x değişkeni y den büyük eşit midir?
x = 12
y = 12
print(<<< ❓ >>>)
- tests/1/output
True

---------------------
- tests/2/files/main.py/.block
# x değişkeni y den büyük eşit midir?
x = 0
y = 2
print(<<< ❓ >>>)
- tests/2/output
False

---------------------








- parts/7:
- text
### ◀️ Küçüktür ``<``

Küçük müdür işlecini (operatörünü) kullanmak için ``<`` kullanırız. İlk ifade küçük ise ``True`` değerini değilse ``False`` değerini döndürür.

<code-view name="main.py" language="python">
x = 3
y = 2
print( x < y )
</code-view>
<code-view name="Terminal" language="bash">
False
</code-view>

- files/main.py/.block
# x değişkeni y den küçük müdür?
x = 3
y = 2
print(<<< ❓ >>>)
- tests/0/files/main.py/.block
# x değişkeni y den küçük müdür?
x = 3
y = 2
print(<<< ❓ >>>)
- tests/0/output
False

- tests/1/files/main.py/.block
# x değişkeni y den küçük müdür?
x = 12
y = 12
print(<<< ❓ >>>)
- tests/1/output
False

---------------------
- tests/2/files/main.py/.block
# x değişkeni y den küçük müdür?
x = 0
y = 2
print(<<< ❓ >>>)
- tests/2/output
True

---------------------






- parts/8:
- text
### ◀️ Küçük Eşit ``<=``

İlk ifade küçük veya eşit ise ``True`` değerini değilse ``False`` değerini döndürür.

<code-view name="main.py" language="python">
x = 3
y = 2
print( x <= y )
print( x <= x )
</code-view>
<code-view name="Terminal" language="bash">
False
True
</code-view>

- files/main.py/.block
# x değişkeni y den küçük eşit midir?
x = 3
y = 2
print(<<< ❓ >>>)
- tests/0/files/main.py/.block
# x değişkeni y den küçük eşit midir?
x = 3
y = 2
print(<<< ❓ >>>)
- tests/0/output
False

- tests/1/files/main.py/.block
# x değişkeni y den küçük eşit midir?
x = 12
y = 12
print(<<< ❓ >>>)
- tests/1/output
True

---------------------
- tests/2/files/main.py/.block
# x değişkeni y den küçük eşit midir?
x = 0
y = 2
print(<<< ❓ >>>)
- tests/2/output
True

---------------------


