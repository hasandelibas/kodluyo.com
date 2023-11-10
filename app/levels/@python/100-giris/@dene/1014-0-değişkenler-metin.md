- show_content = true
- show_editor = true
- show_terminal = true
- language = "python"
- title = "💬 Değişkenler str : Metin"
- run = "py main.py"

- parts/0/text
# 💬 **str** : Metin
``str`` (string) yani metin, yazıları tanımlamak için kullanırız.

``"`` veya ``'`` işaretleri arasına yazarak kullanılır.

<code-view name="main.py" language="python">
cumhuriyetin_kurucusu = "Atatürk"
print(cumhuriyetin_kurucusu)
</code-view>
<code-view name="Terminal" language="bash">
Atatürk
</code-view>



- parts/0/files/main.py/.block
# cumhuriyetin_kurucusu değişkenini "Atatürk" yapar mısın?
cumhuriyetin_kurucusu = <<< ❓ >>>
print(cumhuriyetin_kurucusu)
---------------------
- parts/0/tests/0/output
Atatürk

---------------------

- parts/1/text

Tek tırnak veya çift tırnak işaretleri arasına yazdığımız yazıları metin olarak tanımlarız.
``'DeneYaz'`` veya ``"DeneYaz"`` aynı şeydir.

<code-view name="main.py" language="python">
bu_uygulamanın_adı='DeneYaz'
print( bu_uygulamanın_adı, 'ile Python öğreniyorum.' )
</code-view>
<code-view name="Terminal" language="bash">
DeneYaz ile Python öğreniyorum.
</code-view>

- parts/1/files/main.py/.block
# bu_uygulamanın_adı değişkenini 'DeneYaz' yapar mısın?
bu_uygulamanın_adı=<<< ❓ >>>
print( bu_uygulamanın_adı, "ile Python öğreniyorum." )
---------------------
- parts/1/tests/0/output
DeneYaz ile Python öğreniyorum.

---------------------



- parts/2/text

<code-view name="main.py" language="python">
türkiyenin_başkenti = "Ankara"
print( türkiyenin_başkenti )
</code-view>
<code-view name="Terminal" language="shell">
Ankara
</code-view>

- parts/2/files/main.py/.block
# türkiyenin_başkenti değişkenini "Ankara" yapar mısın?
<<< ❓ >>>
print( türkiyenin_başkenti )
---------------------
- parts/2/tests/0/output
Ankara

---------------------



- parts/3/text
Eğer metnin içinde tek tırnak veya çift tırnak kullanmak istiyorsak, ters taksim işareti ``\`` ile kullanabiliriz. İşaretleri ile metin içerisinde ``\'`` veya ``\"`` tırnak işaretlerini kullanabiliriz.

<code-view name="main.py" language="python" error>
metin = 'Türkiye'nin başkenti Ankara'dır.'
</code-view>

Yukarıdaki şekilde kullanmaya çalışırsak hata alırız. Çünkü metnin bittiği sinyalini yanlış vermiş oluruz.


<code-view name="main.py" language="python">
metin = 'Türkiye\'nin başkenti Ankara\'dır.'
print( metin )
</code-view>
<code-view name="Terminal" language="shell">
Türkiye'nin başkenti Ankara'dır.
</code-view>

- parts/3/files/main.py/.block
# metin değişkenini (Türkiye'nin başkenti Ankara'dır.) yapar mısın?
<<< ❓ >>>
print( metin )
---------------------
- parts/3/tests/0/output
Türkiye'nin başkenti Ankara'dır.

---------------------




- parts/4/text
Eğer çoklu satırlı metin tanımlamak istiyorsak, üç tane tek tırnak veya üç tane çift tırnak kullanabiliriz. ``'''Çok satırlı metin'''`` veya ``"""Çok satırlı metin"""`` aynı şeydir.
<code-view name="main.py" language="python">
mevlana_demiş_ki = """İyiyi ara, 
doğruyu ara, 
güzeli ara fakat
kusuru arama."""
print( mevlana_demiş_ki )
</code-view>
<code-view name="Terminal" language="shell">
İyiyi ara,
doğruyu ara,
güzeli ara fakat
kusuru arama.
</code-view>

- parts/4/files/main.py/.block
# mevlana_demiş_ki çok satırlı metnini doğru tanımlar mısın?
mevlana_demiş_ki = <<<"İyiyi ara,
doğruyu ara,
güzeli ara fakat
kusuru arama.">>>
print( mevlana_demiş_ki )
---------------------
- parts/4/tests/0/output
İyiyi ara,
doğruyu ara,
güzeli ara fakat
kusuru arama.

---------------------





- parts/5/text
Eğer çoklu satırlı metin tanımlamak istiyorsak, üç tane tek tırnak veya üç tane çift tırnak kullanabiliriz. ``'''Çok satırlı metin'''`` veya ``"""Çok satırlı metin"""`` aynı şeydir.
<code-view name="main.py" language="python">
gençliğe_hitabe = '''Muhtaç olduğun kudret,
damarlarındaki asil kanda, mevcuttur!'''
print( gençliğe_hitabe )
</code-view>
<code-view name="Terminal" language="shell">
Muhtaç olduğun kudret,
damarlarındaki asil kanda, mevcuttur!
</code-view>

- parts/5/files/main.py/.block
# gençliğe_hitabe çok satırlı metnini doğru tanımlar mısın?
gençliğe_hitabe = <<<'Muhtaç olduğun kudret,
damarlarındaki asil kanda, mevcuttur!'>>>
print( gençliğe_hitabe )
---------------------
- parts/5/tests/0/output
Muhtaç olduğun kudret,
damarlarındaki asil kanda, mevcuttur!

---------------------