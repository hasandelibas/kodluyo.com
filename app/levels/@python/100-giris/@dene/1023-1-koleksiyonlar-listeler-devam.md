- show_content = true
- show_editor = true
- show_terminal = true
- language = "python"
- title = "🍇 Koleksiyonlar list : Liste"
- run = "py main.py"

- parts/0:
- text
# 🍇 **list**: Liste

```
liste[indis] = yeni_değer
```
Bir listenin elemanını değiştirmek için aşağıdaki gibi yapabiliriz.

<code-view name="main.py" language="python">
sayılar = [1 ,2 ,3 ,4 ,5 ,6]
sayılar[0] = 'bir'
print(sayılar)
</code-view>
<code-view name="Terminal" language="bash">
['bir', 2, 3, 4, 5, 6]
</code-view>

- files/main.py/.block
# sayılar listesinin ilk elemanını 'bir' yapar mısın?
sayılar = [1 ,2 ,3 ,4 ,5 ,6]
<<< ❓ >>>
print(sayılar)
---------------------
- tests/0/files/main.py/.block
sayılar = [1 ,2 ,3 ,4 ,5 ,6]
<<< ❓ >>>
print(sayılar)
- tests/0/output
['bir', 2, 3, 4, 5, 6]

---------------------
- tests/0/files/main.py/.block
sayılar = [1,3,3,4,5,6]
<<< ❓ >>>
print(sayılar)
- tests/0/output
['bir', 3, 3, 4, 5, 6]

---------------------



- parts/1:
- text

<code-view name="main.py" language="python">
sayılar = [1 ,2 ,3 ,4 ,5 ,6]
sayılar[1] = 'iki'
print(sayılar)
</code-view>
<code-view name="Terminal" language="bash">
[1, 'iki', 3, 4, 5, 6]
</code-view>

- files/main.py/.block
# sayılar listesinin ikinci elemanını 'iki' yapar mısın?
sayılar = [1 ,2 ,3 ,4 ,5 ,6]
<<< ❓ >>>
print(sayılar)
---------------------
- tests/0/files/main.py/.block
sayılar = [1 ,2 ,3 ,4 ,5 ,6]
<<< ❓ >>>
print(sayılar)
- tests/0/output
[1, 'iki', 3, 4, 5, 6]

---------------------



- parts/2:
- text

<code-view name="main.py" language="python">
sayılar = [1 ,2 ,3 ,4 ,5 ,6]
sayılar[-1] = 'son'
print(sayılar)
</code-view>
<code-view name="Terminal" language="bash">
[1, 2, 3, 4, 5, 'son']
</code-view>

- files/main.py/.block
# listenin son elemanını 'son' yapar mısın?
sayılar = [1 ,2 ,3 ,4 ,5 ,6]
<<< ❓ >>>
print(sayılar)
---------------------
- tests/0/files/main.py/.block
sayılar = [1 ,2 ,3 ,4 ,5 ,6]
<<< ❓ >>>
print(sayılar)
- tests/0/output
[1, 2, 3, 4, 5, 'son']

---------------------
- tests/1/files/main.py/.block
sayılar = [1,2,3,4,5]
<<< ❓ >>>
print(sayılar)
- tests/1/output
[1, 2, 3, 4, 'son']

---------------------






- parts/3:
- text
Listeden eleman silmek için ``del`` komutunu kullanabiliriz.

<code-view name="main.py" language="python">
sayılar = [1 ,2 ,3 ,4 ,5 ,6]
del sayılar[0]
print(liste)
</code-view>
<code-view name="Terminal" language="bash">
[2, 3, 4, 5, 6]
</code-view>

- files/main.py/.block
# listenin ilk elemanını siler misin?
sayılar = [1 ,2 ,3 ,4 ,5 ,6]
<<< ❓ >>>
print(sayılar)
---------------------
- tests/0/files/main.py/.block
sayılar = [1 ,2 ,3 ,4 ,5 ,6]
<<< ❓ >>>
print(sayılar)
- tests/0/output
[2, 3, 4, 5, 6]

---------------------
- tests/1/files/main.py/.block
sayılar = [2,3,4,5]
<<< ❓ >>>
print(sayılar)
- tests/1/output
[3, 4, 5]

---------------------



- parts/4:
- text
Listeden eleman silmek için ``del`` komutunu kullanabiliriz.

<code-view name="main.py" language="python">
sayılar = [1 ,2 ,3 ,4 ,5 ,6]
del sayılar[-1]
print(liste)
</code-view>
<code-view name="Terminal" language="bash">
[1, 2, 3, 4, 5]
</code-view>

- files/main.py/.block
# listenin son elemanını siler misin?
sayılar = [1 ,2 ,3 ,4 ,5 ,6]
<<< ❓ >>>
print(sayılar)
---------------------
- tests/0/files/main.py/.block
sayılar = [1 ,2 ,3 ,4 ,5 ,6]
<<< ❓ >>>
print(sayılar)
- tests/0/output
[1, 2, 3, 4, 5]

---------------------
- tests/1/files/main.py/.block
sayılar = [2,3,4,5]
<<< ❓ >>>
print(sayılar)
- tests/1/output
[2, 3, 4]

---------------------





- parts/5:
- text
Listeden eleman silmek için ``del`` komutunu kullanabiliriz.

<code-view name="main.py" language="python">
sayılar = [1 ,2 ,3 ,4 ,5 ,6]
del sayılar[:2]
print(liste)
</code-view>
<code-view name="Terminal" language="bash">
[3, 4, 5, 6]
</code-view>

- files/main.py/.block
# listenin ilk 2 elemanını siler misin?
sayılar = [1 ,2 ,3 ,4 ,5 ,6]
<<< ❓ >>>
print(sayılar)
---------------------
- tests/0/files/main.py/.block
sayılar = [1 ,2 ,3 ,4 ,5 ,6]
<<< ❓ >>>
print(sayılar)
- tests/0/output
[3, 4, 5, 6]

---------------------
- tests/1/files/main.py/.block
sayılar = [2,3,4,5]
<<< ❓ >>>
print(sayılar)
- tests/1/output
[4, 5]

---------------------




- parts/5:
- text
Listeden eleman silmek için ``del`` komutunu kullanabiliriz.

<code-view name="main.py" language="python">
sayılar = [1 ,2 ,3 ,4 ,5 ,6]
del sayılar[-2:]
print(liste)
</code-view>
<code-view name="Terminal" language="bash">
[3, 4, 5, 6]
</code-view>

- files/main.py/.block
# listenin son 2 elemanını siler misin?
sayılar = [1 ,2 ,3 ,4 ,5 ,6]
<<< ❓ >>>
print(sayılar)
---------------------
- tests/0/files/main.py/.block
sayılar = [1 ,2 ,3 ,4 ,5 ,6]
<<< ❓ >>>
print(sayılar)
- tests/0/output
[1, 2, 3, 4]

---------------------
- tests/1/files/main.py/.block
sayılar = [2,3,4,5]
<<< ❓ >>>
print(sayılar)
- tests/1/output
[2, 3]

---------------------


