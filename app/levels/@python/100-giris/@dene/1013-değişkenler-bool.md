- show_content = true
- show_editor = true
- show_terminal = true
- language = "python"
- title = "🤔 Değişkenler bool : Önerme"
- run = "py hello.py"

- parts/0/text
# 🤔 **bool** : Önerme
``bool`` yani önerme, doğrulanabilen yada yanlışlanabilen şeyleri tanımlamak için kullanırız.

* ``True``  : Doğru - Evet
* ``False`` : Yanlış - Hayır

<code-view name="hello.py" language="python">
ankara_başkenttir = True
print(ankara_başkenttir)
</code-view>
<code-view name="Terminal" language="bash">
True
</code-view>



- parts/0/files/hello.py/.block
# ankara_başkenttir değişkenini doğru yapar mısın?
ankara_başkenttir = <<< ❓ >>>
print(ankara_başkenttir)
---------------------
- parts/0/tests/0/output
True

---------------------

- parts/1/text

<code-view name="hello.py" language="python">
istanbul_başkenttir = False
print(istanbul_başkenttir)
</code-view>
<code-view name="Terminal" language="bash">
False
</code-view>

- parts/1/files/hello.py/.block
# istanbul_başkenttir değişkenini yanlış yapar mısın?
istanbul_başkenttir = <<< ❓ >>>
print(istanbul_başkenttir)
---------------------
- parts/1/tests/0/output
False

---------------------



- parts/2/text
<code-view name="hello.py" language="python">
uyuyor_musun = False
print( "Tabikide", uyuyor_musun , ":)" )
</code-view>
<code-view name="Terminal" language="shell">
Tabikide False :)
</code-view>

- parts/2/files/hello.py/.block
# uyuyor_musun değişkeni ne olmalı? 🤔
<<< ❓ >>>
print( "Tabikide", uyuyor_musun , ":)" )
---------------------
- parts/2/tests/0/output
Tabikide False :)

---------------------



- parts/3/text
<code-view name="hello.py" language="python">
kodluyor_musun = True
print( kodluyor_musun )
</code-view>
<code-view name="Terminal" language="shell">
True
</code-view>

- parts/3/files/hello.py/.block
# ⌨️ + ☕ + 🍪 = </DeneYaz>
# kodluyor_musun değişkeni ne olmalı? 🤔 
<<< ❓ >>>
print( kodluyor_musun )
---------------------
- parts/3/tests/0/output
True

---------------------
