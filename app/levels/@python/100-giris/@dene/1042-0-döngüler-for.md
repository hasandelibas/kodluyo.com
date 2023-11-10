- show_content = true
- show_editor = true
- show_terminal = true
- language = "python"
- title = "🧮 Döngüler"	
- run = "py main.py"




- parts/0:
- text

### For Döngüsü

`for` döngüsü bir liste, sözlük, string gibi veri yapısındaki elemanları tek tek dolaşmamızı sağlar. 

<code-view name="main.py" language="python">
meyveler = ['elma', 'vişne', 'çilek' ]
for meyve in meyveler:
  print(meyve)
</code-view>

<code-view name="Terminal" language="md">
elma
vişne
çilek
</code-view>



- files/main.py/.block
# meyveler listesindeki meyveleri alt alta yazdırır mısın?
meyveler = ['elma', 'vişne', 'çilek' ]
<<<❓>>>
  print(meyve)
- tests/0/files/main.py/.block
# meyveler listesindeki meyveleri alt alta yazdırır mısın?
meyveler = ['elma', 'vişne', 'çilek' ]
<<<❓>>>
  print(meyve)
- tests/0/execute
py main.py
- tests/0/output
elma
vişne
çilek

------------------
- tests/1/files/main.py/.block
meyveler = ['muz', 'vişne', 'çilek' ]
<<<❓>>>
  print(meyve)
- tests/1/execute
py main.py
- tests/1/output
muz
vişne
çilek

------------------






- parts/1:
- text

### For Döngüsü

`for` döngüsü bir string içindeki harfleri tek tek dolaşmamızı sağlar.

<code-view name="main.py" language="python">
meyve = "elma"
for harf in meyve:
  print(harf)
</code-view>

<code-view name="Terminal" language="md">
e
l
m
a
</code-view>



- files/main.py/.block
# meyve metnindeki harfleri alt alta yazdırır mısın?
meyve = "elma"
<<<❓>>>
  print(harf)
- tests/0/files/main.py/.block
# meyve metnindeki harfleri alt alta yazdırır mısın?
meyve = "elma"
<<<❓>>>
  print(harf)
- tests/0/execute
py main.py
- tests/0/output
e
l
m
a

------------------
- tests/1/files/main.py/.block
# meyve metnindeki harfleri alt alta yazdırır mısın?
meyve = "muz"
<<<❓>>>
  print(harf)
- tests/1/execute
py main.py
- tests/1/output
m
u
z

------------------






- parts/2:
- text

### For Döngüsü

`for` döngüsü ile `dict` tipindeki verileri dolaşabiliriz.

<code-view name="main.py" language="python">
element = {
  "ad" : "Hidrojen",
  "atom_no" : 1,
  "sembol" : "H" 
}
for anahtar in element:
  print(anahtar, element[anahtar], sep="\t: ")
</code-view>

<code-view name="Terminal" language="shell">
ad      : Hidrojen
atom_no : 1
sembol  : H
</code-view>

`for anahtar in element:` döngüsü ile `element` sözlüğünün anahtarlarını tek tek dolaşırız.



- files/main.py/.block
# element sözlüğünün anahtarlarını ve değerlerini
# alt alta yazdırır mısın?
element = {
  "ad" : "Hidrojen",
  "atom_no" : 1,
  "sembol" : "H" 
}
<<<❓>>>
  print(anahtar, element[anahtar], sep="\t: ")
- tests/0/files/main.py/.block
# element sözlüğünün anahtarlarını ve değerlerini
# alt alta yazdırır mısın?
element = {
  "ad" : "Hidrojen",
  "atom_no" : 1,
  "sembol" : "H" 
}
<<<❓>>>
  print(anahtar, element[anahtar], sep="\t: ")
- tests/0/execute
py main.py
- tests/0/output="ad\t: Hidrojen\natom_no\t: 1\nsembol\t: H\n"

- tests/1/files/main.py/.block
# element sözlüğünün anahtarlarını ve değerlerini
# alt alta yazdırır mısın?
element = {
  "ad" : "Helyum",
  "atom_no" : 2,
  "sembol" : "He" 
}
<<<❓>>>
  print(anahtar, element[anahtar], sep="\t: ")
- tests/1/execute
py main.py
- tests/1/output="ad\t: Helyum\natom_no\t: 2\nsembol\t: He\n"





- parts/3:
- text

### `break` anahtar kelimesi

`for` döngüsü her bir elemanı tek tek dolaşmadan döngüyü sonlandırmak için `break` anahtar kelimesini kullanabiliriz.

<code-view name="main.py" language="python">
meyveler = ['elma', 'vişne', 'çilek' ]
for meyve in meyveler:
  if meyve == 'çilek':
    break
  print(meyve)
</code-view>

<code-view name="Terminal" language="md">
elma
vişne
</code-view>



- files/main.py/.block
# meyveler listesindeki meyveleri alt alta yazdırır mısın?
# çilek meyvesini yazdırmadan döngüyü sonlandırır mısın?
meyveler = ['elma', 'vişne', 'çilek' ]
for meyve in meyveler:
  if meyve == 'çilek':
    <<<❓>>>
  print(meyve)
- tests/0/files/main.py/.block
# meyveler listesindeki meyveleri alt alta yazdırır mısın?
# çilek meyvesini yazdırmadan döngüyü sonlandırır mısın?
meyveler = ['elma', 'vişne', 'çilek' ]
for meyve in meyveler:
  if meyve == 'çilek':
    <<<❓>>>
  print(meyve)
- tests/0/execute
py main.py
- tests/0/output
elma
vişne

------------------
- tests/1/files/main.py/.block
# meyveler listesindeki meyveleri alt alta yazdırır mısın?
# çilek meyvesini yazdırmadan döngüyü sonlandırır mısın?
meyveler = ['muz', 'elma', 'vişne', 'çilek' ]
for meyve in meyveler:
  if meyve == 'çilek':
    <<<❓>>>
  print(meyve)
- tests/1/execute
py main.py
- tests/1/output
muz
elma
vişne

------------------







- parts/4:
- text

### `continue` anahtar kelimesi

<image-text>
<iframe class="img" style="width:100%;aspect-ratio:4/3" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" type="text/html" src="https://www.youtube.com/embed/DkjdGeF0y94?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"></iframe>


`for` döngüsündeki sonraki elemana geçmek için `continue` anahtar kelimesini kullanabiliriz.
Bu sayede şimdiki elemanı atlayabiliriz.
</image-text>

<code-view name="main.py" language="python">
meyveler = ['elma', 'vişne', 'çilek' ]
for meyve in meyveler:
  if meyve == 'vişne':
    continue
  print(meyve)
</code-view>

<code-view name="Terminal" language="md">
elma
çilek
</code-view>

Yukarıdaki örnekte `vişne` meyvesini yazdırmadan döngüyü sonlandırmış olduk.




- files/main.py/.block
# meyveler listesindeki meyveleri alt alta yazdırır mısın?
# vişne hariç
meyveler = ['elma', 'vişne', 'çilek' ]
for meyve in meyveler:
  if meyve == 'çilek':
    <<<❓>>>
  print(meyve)
- tests/0/files/main.py/.block
# meyveler listesindeki meyveleri alt alta yazdırır mısın?
# çilek meyvesini yazdırmadan döngüyü sonlandırır mısın?
meyveler = ['elma', 'vişne', 'çilek' ]
for meyve in meyveler:
  if meyve == 'çilek':
    <<<❓>>>
  print(meyve)
- tests/0/execute
py main.py
- tests/0/output
elma
vişne

------------------
- tests/1/files/main.py/.block
# meyveler listesindeki meyveleri alt alta yazdırır mısın?
# çilek meyvesini yazdırmadan döngüyü sonlandırır mısın?
meyveler = ['muz', 'elma', 'vişne', 'çilek' ]
for meyve in meyveler:
  if meyve == 'çilek':
    <<<❓>>>
  print(meyve)
- tests/1/execute
py main.py
- tests/1/output
muz
elma
vişne

------------------









- parts/5:
- text

### `range` fonksiyonu


`range(başlangıç, bitiş, adım)` fonksiyonu başlangıçtan bitişe kadar olan sayıları adım adım döndüren bir fonksiyondur.

```python
range(bitiş) # 0 dan başlar
range(başlangıç, bitiş) # başlangıçtan başlar
range(başlangıç, bitiş, adım) # başlangıçtan başlar
```


<code-view name="main.py" language="python">
print( list( range(0 , 10) ) )
print( list( range(10) ) )
</code-view>

<code-view name="Terminal" language="md">
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
</code-view>


- files/main.py/.block
# range fonskiyonunu kullanarak 0 dan 9 a kadar (9 dahil)
# birer birer artan liste oluşturabilir misin?
# örnek: [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9]
print(<<<❓>>>)
- tests/0/files/main.py/.block
# range fonskiyonunu kullanarak 0 dan 9 a kadar (9 dahil)
# birer birer artan liste oluşturabilir misin?
# örnek: [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9]
print(<<<❓>>>)
- tests/0/execute
py main.py
- tests/0/output
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

------------------






- parts/6:
- text

### `range` fonksiyonu

`range(başlangıç, bitiş, adım)` fonksiyonu başlangıçtan bitişe kadar olan sayıları adım adım döndüren bir fonksiyondur.

```python
range(bitiş) # 0 dan başlar
range(başlangıç, bitiş) # başlangıçtan başlar
range(başlangıç, bitiş, adım) # başlangıçtan başlar
```


<code-view name="main.py" language="python">
print( list( range(0 , 20, 2) ) )
</code-view>

<code-view name="Terminal" language="md">
[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
</code-view>


- files/main.py/.block
# range fonskiyonunu kullanarak 0 dan 18 e kadar (18 dahil)
# çift sayılardan oluşan bir liste oluşturabilir misin?
# örnek: [0 , 2 , 4 , 6 , 8 , 10 , 12 , 14 , 16 , 18]
print(<<<❓>>>)
- tests/0/files/main.py/.block
# range fonskiyonunu kullanarak 0 dan 18 e kadar (18 dahil)
# çift sayılardan oluşan bir liste oluşturabilir misin?
# örnek: [0 , 2 , 4 , 6 , 8 , 10 , 12 , 14 , 16 , 18]
print(<<<❓>>>)
- tests/0/execute
py main.py
- tests/0/output
[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

------------------









- parts/7:
- text

### `range` fonksiyonu


<code-view name="main.py" language="python">
for i in range(6):
  print(i)
</code-view>

<code-view name="Terminal" language="md">
0
1
2
3
4
5

</code-view>

- files/main.py/.block
# range fonksiyonunu kullanarak 0 dan 5 e kadar (5 dahil)
# birer birer artan sayıları alt alta yazdırabilir misin?
<<<❓>>>
  print(i)
- tests/0/files/main.py/.block
# range fonksiyonunu kullanarak 0 dan 5 e kadar (5 dahil)
# birer birer artan sayıları alt alta yazdırabilir misin?
<<<❓>>>
  print(i)
- tests/0/execute
py main.py
- tests/0/output
0
1
2
3
4
5

------------------










- parts/8:
- text

### `range` fonksiyonu

Aynı şekilde 10 dan 15 e kadar (15 dahil) olan sayıları yazdırmak için:

<code-view name="main.py" language="python">
for i in range(10, 16):
  print(i)
</code-view>

<code-view name="Terminal" language="md">
10
11
12
13
14
15

</code-view>

- files/main.py/.block
# range fonksiyonunu kullanarak 10 dan 15 e kadar (15 dahil)
# birer birer artan sayıları alt alta yazdırabilir misin?
<<<❓>>>
  print(i)
- tests/0/files/main.py/.block
# range fonksiyonunu kullanarak 10 dan 15 e kadar (15 dahil)
# birer birer artan sayıları alt alta yazdırabilir misin?
<<<❓>>>
  print(i)
- tests/0/execute
py main.py
- tests/0/output
10
11
12
13
14
15

------------------









- parts/9:
- text

### `for` içinde `for`


`for` içinde `for` kullanarak kartezyen çarpımı yapabiliriz.


<code-view name="main.py" language="python">
renkler  = ['kızıl', 'yeşil']
nesneler = ['elma' , 'bayrak']
for renk in renkler:
  for nesne in nesneler:
    print(renk, nesne)
</code-view>

<code-view name="Terminal" language="md">
kızıl elma
kızıl bayrak
yeşil elma
yeşil bayrak
</code-view>

Yukarıdaki örnekte `vişne` meyvesini yazdırmadan döngüyü sonlandırmış olduk.




- files/main.py/.block
# iç içe iki for döngüsü oluşturup
# bütün renk-nesne kombinasyonlarını alt alta yazdırabilir misin?
renkler  = ['kızıl', 'yeşil']
nesneler = ['elma' , 'bayrak']
<<<❓>>>
    print(renk, nesne)
- tests/0/files/main.py/.block
# iç içe iki for döngüsü oluşturup
# bütün renk-nesne kombinasyonlarını alt alta yazdırabilir misin?
renkler  = ['kızıl', 'yeşil']
nesneler = ['elma' , 'bayrak']
<<<❓>>>
    print(renk, nesne)
- tests/0/execute
py main.py
- tests/0/output
kızıl elma
kızıl bayrak
yeşil elma
yeşil bayrak

------------------
- tests/1/files/main.py/.block
# iç içe iki for döngüsü oluşturup
# bütün renk-nesne kombinasyonlarını alt alta yazdırabilir misin?
renkler  = ['kırmızı', 'yeşil', 'beyaz']
nesneler = ['elma' , 'bayrak']
<<<❓>>>
    print(renk, nesne)
- tests/1/execute
py main.py
- tests/1/output
kırmızı elma
kırmızı bayrak
yeşil elma
yeşil bayrak
beyaz elma
beyaz bayrak

------------------









- parts/10:
- text

### `for` kullanımı örnekleri

Elimizde öğrencilerin notları var ve bu notların toplamını ve aritmetik ortalamasını hesaplamak istiyoruz.

<code-view name="main.py" language="python">
sayılar = [ 80, 85, 90, 100 ]
toplam = 0
for sayı in sayılar:
  toplam += sayı
ortalama = toplam / len(sayılar)
print(ortalama)
</code-view>

<code-view name="Terminal" language="md">
88.75
</code-view>


- files/main.py/.block
# sayılar listesindeki sayıları toplayıp
# aritmetik ortalamasını hesaplar mısın?
sayılar = [ 80, 85, 90, 100 ]
toplam = 0
<<<❓>>>
ortalama = toplam / len(sayılar)
print(ortalama)
- tests/0/files/main.py/.block
# sayılar listesindeki sayıları toplayıp
# aritmetik ortalamasını hesaplar mısın?
sayılar = [ 80, 85, 90, 100 ]
toplam = 0
<<<❓>>>
ortalama = toplam / len(sayılar)
print(ortalama)
- tests/0/execute
py main.py
- tests/0/output
88.75

------------------
- tests/1/files/main.py/.block
# sayılar listesindeki sayıları toplayıp
# aritmetik ortalamasını hesaplar mısın?
sayılar = [ 80, 90, 100 ]
toplam = 0
<<<❓>>>
ortalama = toplam / len(sayılar)
print(ortalama)
- tests/1/execute
py main.py
- tests/1/output
90.0

------------------








- parts/11:
- text

### boş `for` döngüsü

Python da boş bir `for` döngüsü oluşturmak için `pass` ifadesini kullanabiliriz.	

<code-view name="main.py" language="python">
for i in range(6):
  pass
</code-view>


- files/main.py/.block
# boş bir for döngüsü oluşturabilir misin?
for i in range(6):
  <<<❓>>>
- tests/0/files/main.py/.block
# boş bir for döngüsü oluşturabilir misin?
for i in range(6):
  <<<❓>>>
- tests/0/execute
py main.py
- tests/0/output=""
