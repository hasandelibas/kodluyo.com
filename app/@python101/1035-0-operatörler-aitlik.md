- show_content = true
- show_editor = true
- show_terminal = true
- language = "python"
- title = "🧮 Aitlik Operatörleri (in)"	
- run = "py main.py"

- parts/0:
- text
### 💬 Kelime içinde var mı? ``in``
Bir metin içinde bir kelimenin olup olmadığını kontrol etmek için `in` operatörünü kullanabilirsin.

<code-view name="main.py" language="python">
metin = "Ankara ülkemizin başkentidir."
print( "Ankara"   in metin )    # True
print( "İstanbul" in metin )    # False
</code-view>
<code-view name="Terminal" language="bash">
True
False
</code-view>

- files/main.py/.block
# metin değişkeni içinde "Ankara" kelimesi var mı? 
# in operatörünü kullanarak kontrol et.
metin = "Ankara ülkemizin başkentidir."
print( <<< ❓ >>> )
- tests/0/files/main.py/.block
# metin değişkeni içinde "Ankara" kelimesi var mı? 
# in operatörünü kullanarak kontrol et.
metin = "Ankara ülkemizin başkentidir."
print( <<< ❓ >>> )
- tests/0/output
True

- tests/1/files/main.py/.block
# metin değişkeni içinde "Ankara" kelimesi var mı? 
# in operatörünü kullanarak kontrol et.
metin = "İstanbul ülkemizin en büyük şehridir."
print( <<< ❓ >>> )
- tests/1/output
False

---------------------




- parts/1:
- text
### 🍎 Küme içinde var mı? ``in``
Bir küme içinde bir elemanın var olup olmadığını kontrol etmek için `in` operatörünü kullanabilirsin.

<code-view name="main.py" language="python">
A = {'elma', 'armut', 'kiraz'}
print( "elma" in A )     # True
print( "nar"  in A )     # False
</code-view>
<code-view name="Terminal" language="bash">
True
False
</code-view>

- files/main.py/.block
# A kümesi içinde "elma" elemanı var mı?
# in operatörünü kullanarak kontrol et.
A = {'elma', 'armut', 'kiraz'}
print( <<< ❓ >>> )
- tests/0/files/main.py/.block
# A kümesi içinde "elma" elemanı var mı?
# in operatörünü kullanarak kontrol et.
A = {'elma', 'armut', 'kiraz'}
print( <<< ❓ >>> )
- tests/0/output
True

- tests/1/files/main.py/.block
# A kümesi içinde "elma" elemanı var mı?
# in operatörünü kullanarak kontrol et.
A = {'armut', 'kiraz'}
print( <<< ❓ >>> )
- tests/1/output
False

---------------------









- parts/2:
- text
### 🍇 Liste içinde var mı? ``in``
Bir liste içinde bir elemanın var olup olmadığını kontrol etmek için `in` operatörünü kullanabilirsin.

<code-view name="main.py" language="python">
liste = ['elma', 'armut', 'kiraz']
print( "elma" in liste )     # True
print( "nar"  in liste )     # False
</code-view>
<code-view name="Terminal" language="bash">
True
False
</code-view>

- files/main.py/.block
# liste içinde "elma" elemanı var mı?
# in operatörünü kullanarak kontrol et.
liste = ['elma', 'armut', 'kiraz']
print( <<< ❓ >>> )
- tests/0/files/main.py/.block
# liste içinde "elma" elemanı var mı?
# in operatörünü kullanarak kontrol et.
liste = ['elma', 'armut', 'kiraz']
print( <<< ❓ >>> )
- tests/0/output
True

- tests/1/files/main.py/.block
# liste içinde "elma" elemanı var mı?
# in operatörünü kullanarak kontrol et.
liste = ['armut', 'kiraz']
print( <<< ❓ >>> )
- tests/1/output
False

---------------------





- parts/3:
- text
### 🧔 Sözlük içinde var mı? ``in``
Bir sözlük `dictionary` içinde bir `anahtarın` var olup olmadığını kontrol etmek için `in` operatörünü kullanabilirsin.

<code-view name="main.py" language="python">
kişi = {
  "ad"    : "Hidayet",
  "soyad" : "Türkoğlu"
}
print( "ad"      in kişi )     # True
print( "Hidayet" in kişi )     # False
</code-view>
<code-view name="Terminal" language="bash">
True
False
</code-view>

- files/main.py/.block
# kişi nesnesi içinde "ad" anahtarı var mı?
# in operatörünü kullanarak kontrol et.
kişi = {
  "ad"    : "Hidayet",
  "soyad" : "Türkoğlu",
}
print( <<< ❓ >>> )
- tests/0/files/main.py/.block
# kişi nesnesi içinde "ad" anahtarı var mı?
# in operatörünü kullanarak kontrol et.
kişi = {
  "ad"    : "Hidayet",
  "soyad" : "Türkoğlu",
}
print( <<< ❓ >>> )
- tests/0/output
True

- tests/1/files/main.py/.block
# kişi nesnesi içinde "ad" anahtarı var mı?
# in operatörünü kullanarak kontrol et.
kişi = {
  "soyad" : "Türkoğlu",
}
print( <<< ❓ >>> )
- tests/1/output
False

---------------------







- parts/4:
- text
### 🍎 Yok mu ? ``in``
Yok mu sorusunu sormak için ise ``not in`` operatörünü kullanırız.

<code-view name="main.py" language="python">
A = {'elma', 'armut', 'kiraz'}
print( "nar"  not in A )     # True
print( "elma" not in A )     # False
</code-view>
<code-view name="Terminal" language="bash">
True
False
</code-view>

- files/main.py/.block
# A kümesi içinde "nar" elemanı yok mu?
# not in operatörünü kullanarak kontrol et.
A = {'elma', 'armut', 'kiraz'}
print( <<< ❓ >>> )
- tests/0/files/main.py/.block
# A kümesi içinde "nar" elemanı yok mu?
# not in operatörünü kullanarak kontrol et.
A = {'elma', 'armut', 'kiraz'}
print( <<< ❓ >>> )
- tests/0/output
True

- tests/1/files/main.py/.block
# A kümesi içinde "nar" elemanı yok mu?
# not in operatörünü kullanarak kontrol et.
A = {'armut', 'kiraz', 'nar'}
print( <<< ❓ >>> )
- tests/1/output
False

---------------------





