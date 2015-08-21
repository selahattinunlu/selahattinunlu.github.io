---
title: Git - Merge Conflict Nedir, Nasıl Düzeltilir?
permalink: /git-merge-conflict-nedir-nasil-duzeltilir
categories: [programming]
tags: [git]
---

Farklı branchlarda, aynı dosya üzerinde değişiklikler yapıldıktan sonra merge işlemi yapmak istediğimiz zaman karşılaştığımız hatadır. Git bu durumda otomatik olarak değişiklikleri işlemez ve merge işlemini yaparken çatışma yaşanan dosyadaki hangi değişikliği uygulamak istediğimizi bize sorar.

###Örnek

app/index.html dosyamız var. "Master branch"da title kısmını "Web Sitem", "feature" branchında bu dosyada title kısmını "Kişisel Blog" olarak değiştirdik. İşlerimiz bittikten sonra master branch'a geri dönüp merge işlemi yapmak istedik. Alıcağımız hata:

{% highlight sh %}
git merge feature
Auto-merging app/index.html
CONFLICT (content): Merge conflict in app/index.html
Automatic merge failed; fix conflicts and then commit the result.
{% endhighlight %}

Bu durumda "app/index.html" dosyasını açarak karışıklığı düzeltmemiz gerekiyor. app/index.html dosyamızı açtığımızda şuna benzer bir durum ile karşılaşırız:

{% highlight html %}
<html>
  <head>
<<<<<<< HEAD
    <title>Web Sitem</title>
=======
    <title>Kişisel Blog</title>
>>>>>>> feature
  </head>
  <body>
    <h1>Hello,World! Life is great!</h1>
  </body>
</html>
{% endhighlight %}

<<<<< HEAD ve >>>>>> feature arasında kalan kısım çatışma yaşanan kısım. Burada uygulanmasını istediğimiz hali neyse o şekilde düzeltmeyi tamamlamalıyız ve son hali şöyle olmalı:

{% highlight html %}
<html>
  <head>
    <title>Web Sitem</title>
  </head>
  <body>
    <h1>Hello,World! Life is great!</h1>
  </body>
</html>
{% endhighlight %}

Daha sonra commit işlemini gerçekleştiriyoruz.

{% highlight sh %}
git add app/index.html
git commit -m "Merged feature fixed conflict"
{% endhighlight %}

>İsterseniz direkt olarak `git commit` komutuyla otomatik oluşturulan commit mesajını görüp, düzenlemenizi yaptıktan 
>sonra ya da yapmadan gönderebilirsiniz.