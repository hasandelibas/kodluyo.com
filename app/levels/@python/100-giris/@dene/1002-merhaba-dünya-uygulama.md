- show_content = true
- show_editor = true
- show_terminal = true
- language = "python"
- title = "🌍 103 Merhaba Dünya (Uygulama)!"
- run = "py merhaba.py"

- parts/0/text
# 🌍 Merhaba Uygulama! 
Yazdığımız kodu terminalden çalıştırmak için ``python [dosya adı]`` komutunu kullanırız. 

<code-view name="merhaba.py" language="python">
print("Merhaba")
</code-view>

<code-view name="Terminal" language="bash">
> python merhaba.py
Merhaba
</code-view>

> Görev: Terminale ``python merhaba.py`` yaz
- parts/0/files/merhaba.py
print("Merhaba")
---------------------
- parts/0/terminal
> python merhaba.py
Merhaba
---------------------

- parts/1/text
# ✅ Tebrikler
Terminalden python kodunu çalıştırdın.

Python kodunu uygulamaya çevirmenin yollarından biri ``#!`` ön ekini kullanmaktır. Bu komut dosyanın ilk satırına yazılır. Bu komut ile dosyayı çalıştırdığımızda python yolu belirtilen python sürümü ile dosya çalıştırılır. Örneğin ``#!C:\Python310\python.exe``


<code-view name="merhaba.py" language="python">
#!C:\Python310\python.exe
print("Merhaba")
</code-view>
<code-view name="Terminal" language="python">
> ./merhaba.py
Merhaba
</code-view>

> Görev: Şimdi de terminale ``./merhaba.py`` yazarak, **merhaba** uygulamasını çalıştır.
- parts/1/files/merhaba.py/.block
#!C:\Python310\python.exe
print("Merhaba")
---------------------
- parts/1/terminal
> ./merhaba.py
Merhaba
---------------------