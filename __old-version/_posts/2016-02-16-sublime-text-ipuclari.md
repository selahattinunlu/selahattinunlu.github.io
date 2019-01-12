---
title: Sublime Text İpuçları
permalink: /sublime-text-ipuclari
categories: [programming]
tags: [sublime-text, tips]
references: [
   'http://wesbos.com/5-sublime-text-tweaks-tips/'
]
---

Sublime Text ile çalışırken verimliliğimizi arttıracak bir kaç ipucunu sizlerle paylaşmak istiyorum.

Yeni şeyler öğrendikçe bu gönderiyi güncellemeyi planlıyorum.

### Save on focus lost

Bir dosyada yaptığımız her değişiklikten sonra sürekli olarak ctrl + s  (command + s) yapmak bize fazla vakit kaybettirmiyor
gibi görünse de her defasında gereksiz yere tekrarlanan bir işlem olduğu için verimliliğimizi etkileyecektir.

Bunun yerine Sublime Text'in *"save_on_focus_lost"* ayarını kullanabiliriz. Böylece aktif olarak çalıştığımız tabdan başka taba geçtiğimizde ya da tarayıcıya döndüğümüz anlarda bizim yerimize otomatik olarak o dosyayı kaydedecek.

Bunun için Preferences > Settings - User'ı açarak `"save_on_focus_lost": true,` eklemesini yapmamız yeterli.

Ayrıca isterseniz sadece bu özelliği sadece CSS,PHP gibi spesifik olarak istediğiniz dosyalarda uygulayabilirsiniz.

Örneğin CSS için böyle bir ayar yapmak istiyorsanız CSS.sublime-settings dosyası oluşturmalı ve bu dosya içerisinde üstte belirttiğim ayarı eklemelisiniz.

### Paste and Indent

Bu en sevdiğim özelliklerden biri ve gerçekten çok zaman kazandırıyor. Özellikle stackoverflow gibi internet üzerinde
yer alan bazı kod parçalarını kopyalayıp kodlarımız arasında yapıştırdığımız zaman genelde kod girintilerinde sıkıntı oluyor ve 
bunu tekrardan düzeltmemiz gerekiyor. Bu da bize zaman kaybettiriyor, konsantrasyon kaybı yaşatıyor.

Bunu bizim yerimize Sublime Text'in otomatik olarak yapmasını istiyorsak işte yapmamız gerekenler:

Preferences > Key Bindins - User'ı açarak şunları ekleyelim:

{% highlight php %}
{ "keys": ["ctrl+v"], "command": "paste_and_indent" },
{ "keys": ["ctrl+shift+v"], "command": "paste" }
{% endhighlight %}

Böylece sadece yapıştırma işlemini "ctrl+shift+v" tuşları tetiklerken, "ctrl+v" yapıştırma sonrasında otomatik olarak indent işlemini de tetikleyecek şekilde ayarlandı.

<div class="m-b-2"></div>

<div class="alert-box">
   <h3 class="title">Mac Kullanıcıları</h3>
   "ctrl" yerine "super" tanımlaması yapmalısınız.
</div>

### Reindent Keyboard Shortcut

Reindent yani kod girintilerini yeniden düzenlemek için Sublime Text'de `Edit > Line` sekmesinde yer alan `Reindent` seçilerek yapılabiliyor.

Bunun yerine klavyemizden bir kısayol tuşu atayarak bu işlemi daha da hızlandırabiliriz.

Yine `Preferences > Key Bindings - User` açarak aşağıdaki satırı eklemelisiniz:

<div class="m-b-2"></div>

{% highlight php %}
{ "keys": ["super+shift+r"],  "command": "reindent" }
{% endhighlight %}

Böylece kodlarımız içerisinde girintileri yeniden düzenlemek istediğimizde, düzeltmek istediğimiz kod bloğunu seçtikten sonra `super+shift+r` kombinasyonunu kullanmamız yeterli olacaktır.
