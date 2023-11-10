- show_content = true
- show_editor = true
- show_terminal = true
- language = "python"
- title = "💬 Değişkenler str : Metin"
- run = "py main.py"

- parts/0:

- text
# upper()

Metindeki tüm harfleri büyük harfe çevirir.

<code-view name="main.py" language="python">
isim = "Sultan Mehmet"
print(isim.upper())
</code-view>
<code-view name="Terminal" language="bash">
SULTAN MEHMET
</code-view>



- files/main.py/.block
# isim değişkeninindeki 
# tüm harfleri büyük harflere çevirir misin?
isim = "Sultan Mehmet"
print(<<< ❓ >>>)
---------------------
- tests/0/output
SULTAN MEHMET

- tests/1/files/main.py/.block
isim = "Kanuni Sultan"
print(<<< ❓ >>>)
- tests/1/output
KANUNI SULTAN

---------------------

- parts/1:

- text
# lower()
Metindeki tüm harfleri küçük harfe çevirir.

<code-view name="main.py" language="python">
uygulama = 'DeneYaz'
print( uygulama.lower() )
</code-view>
<code-view name="Terminal" language="bash">
deneyaz
</code-view>

- files/main.py/.block
# uygulama değişkenindeki 
# tüm harfleri küçük harfe çevirir misin?
uygulama = 'DeneYaz'
print(<<< ❓ >>>)
---------------------
- tests/0/output
deneyaz

- tests/1/files/main.py/.block
uygulama = 'DeneYap'
print(<<< ❓ >>>)
- tests/1/output
deneyap

---------------------



- parts/2:
- text
# strip
Metnin başındaki ve sonundaki boşlukları siler.
<code-view name="main.py" language="python">
metin = '   Ankara Türkiye\\'nin başkentidir.   '
print( metin.strip() )
</code-view>
<code-view name="Terminal" language="shell">
Ankara Türkiye'nin başkentidir.
</code-view>

- files/main.py/.block
# metin değişkeninin başındaki ve sonundaki
# boşlukları siler misin?
metin = '   Ankara Türkiye\'nin başkentidir.   '
print( <<< ❓ >>> )
- tests/0/output
Ankara Türkiye'nin başkentidir.

---------------------
- tests/1/files/main.py/.block
# metin değişkeninin başındaki ve sonundaki
# boşlukları siler misin?
metin = '   İstanbul Türkiye\'nin en büyük şehridir.   '
print( <<< ❓ >>> )
- tests/1/output
İstanbul Türkiye'nin en büyük şehridir.

---------------------


- parts/3:
- text
# replace
Metindeki bir kelimeyi başka bir kelime ile değiştirir.

<code-view name="main.py" language="python">
metin = "Ankara Türkiye'nin en büyük şehridir."
print( metin.replace('Ankara', 'İstanbul') )
</code-view>
<code-view name="Terminal" language="shell">
İstanbul Türkiye'nin en büyük şehridir.
</code-view>

- files/main.py/.block
# metin değişkeninde 'Ankara' kelimesi yerine
# 'İstanbul' yapar mısın?
metin = "Ankara Türkiye'nin en büyük şehridir."
print( <<< ❓ >>> )
---------------------
- tests/0/output
İstanbul Türkiye'nin en büyük şehridir.

- tests/1/files/main.py/.block
# metin değişkeninde 'Ankara' kelimesi yerine
# 'İstanbul' yapar mısın?
metin = "Ankara Türkiye'mizin en büyük şehridir."
print( <<< ❓ >>> )
---------------------
- tests/1/output
İstanbul Türkiye'mizin en büyük şehridir.

---------------------



- parts/4:
- text
# split
Metni belirtilen karaktere göre parçalar ve bir listeye dönüştürür.

<code-view name="main.py" language="python">
metin = "Ankara, İstanbul, İzmir, Bursa, Antalya"
print( metin.split(',') )
</code-view>
<code-view name="Terminal" language="shell">
['Ankara', ' İstanbul', ' İzmir', ' Bursa', ' Antalya']
</code-view>

- files/main.py/.block
# metin değişkenini virgüle göre parçalar mısın?
metin = "Ankara, İstanbul, İzmir, Bursa, Antalya"
print( <<< ❓ >>> )
- tests/0/output
['Ankara', ' İstanbul', ' İzmir', ' Bursa', ' Antalya']

---------------------
- tests/1/files/main.py/.block
# metin değişkenini virgüle göre parçalar mısın?
metin = "Ankara, İstanbul, İzmir, Bursa, Antalya, Konya"
print( <<< ❓ >>> )
- tests/1/output
['Ankara', ' İstanbul', ' İzmir', ' Bursa', ' Antalya', ' Konya']

---------------------


