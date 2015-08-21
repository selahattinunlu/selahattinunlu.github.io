---
title: Git - Stash İle Mevcut Çalışmaya Ara Vermek
permalink: /git-stash-ile-mevcut-calismaya-ara-vermek
categories: [programming]
tags: [git]
---

Projenize yeni bir özellik eklemek üzere "feature-a" branchı açtınız ve bu özellik üzerinde çalışıyorsunuz. Yaklaşık 10 kadar dosya üzerinde de değişiklik yaptınız. Fakat sonradan farkettiniz ki yayınladığınız kodlarda bir hata var ve "master" brancha geçerek bu hatayı düzeltmeniz gerekiyor. Böyle bir durumda "feature-a" branchındayken yaptığınız değişiklikleri "commit" yapmadan direkt olarak "master" branchına geçerseniz yaptığınız değişikliklerde "master" branchına geliyor. E haliyle bu istemediğimiz bir durum. **Peki bunu nasıl düzeltiliriz?**

Benim bildiğim kadarıyla iki yöntem var. Birincisi zaten giriş paragrafında bahsettiğim gibi "master" branchına geçmeden evvel değişiklikleri **"commit"**lemek. İşimizi halledip "feature-a" branchına döndüğümüzde de bu commit'i geri alarak kaldığımız yerden devam etmek. Bunun yerine Git'in **"stash"** komutuyla bu işi daha doğru bir şekilde yapabiliriz.

###Kullanımı

"feature-a" branchındayken `git add .` ile değişiklik yaptığımız tüm dosyaları ekledikten sonra
kullanacağıız komut:

{% highlight sh %}
git stash
{% endhighlight %}

Bu komut sonrasında şuna benzer bir çıktı alırsınız:

{% highlight sh %}
Saved working directory and index state WIP on feature/a: af8cfa9 commit message
HEAD is now at af8cfa9 commit message
{% endhighlight %}

Artık "master" brancha geçerek işinizi halledebilirsiniz. Daha sonra "feature-a" branchına dönerek kaldığınız yerden devam etmek için kullanacağımız komut:

{% highlight sh %}
git stash pop
{% endhighlight %}