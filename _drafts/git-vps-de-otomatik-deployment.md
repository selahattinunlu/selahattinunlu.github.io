---
title: Git - VPS'de Otomatik Deployment
permalink: /git-vps-de-otomatik-deployment
categories: [programming]
tags: [git]
references: [
]
---

FTP gerçekten işkence! Bunun yerine Git kullanarak değişiklik yaptığımız dosyaların otomatik olarak sunucuya aktarılmasını sağlayabiliriz. 

Git kurulumunun yapıldığını ve uygulamamızın çalıştığı dizinin `/var/www/domain.com` olduğunu varsayıyorum.

###Repo Oluşturalım

Komut satırından VPS'ye bağlandıktan aşağıdaki komutları girerek repomuzu oluşturalım:

{% highlight sh %}
cd /var
mkdir repo && cd repo
mkdir site.git && cd site.git
git init --bare
{% endhighlight %}

`--bare` parametresinin anlamı bu git reposunun sadece versiyon kontrolü yapacağı anlamına gelir.

###Hooks

Git repolarında "hooks" adında bir klasör vardır. Bu klasörde yer alan scriptler ile yaptığınız işlemlerden önce ya da sonra çalışmasını istediğiniz komutları oluşturabilirsiniz. 

Bu dizinde oluşturacağımız hook ile değişikliklerin otomatik olarak uygulamanın çalıştığı dizine aktarılmasını sağlayacağız.

hooks dizinine girelim:

`cd /var/repo/site.git/hooks`

"post-receive" adında dosya oluşturalım:

`cat > post-receive`

Bu komutu çalıştırdıktan hemen sonra komut satırında bu dosyada yer almasını istediğiniz komutları yazacağınız bir alan göreceksiniz.

{% highlight sh %}
#!/bin/sh
git --work-tree=/var/www/domain.com --git-dir=/var/repo/site.git checkout -f
{% endhighlight %}

Yukarıdaki satırları ekledikten sonra `ctrl+d` ile kaydedin. Şimdi dosyaya çalıştırma izni verelim:

`chmod +x post-receive`

"post-receive" içerisindeki komut, "push" işlemi her tamamlandığında değişiklik yapılan dosyaları `/var/www/domain.com` dizinine taşıyacaktır.

> [Git Dökümantasyonunda](http://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks#Server-Side-Hooks){:target="_blank"} server side hooks hakkında bilgi alabilirsiniz.

###Lokal Makinenizdeki Ayarlar

Şimdi lokal repomuzu oluşturalım. Eğer hala VPS'ye bağlıysanız `exit` komutu ile çıkış yapabilirsiniz.

{% highlight sh %}
cd /my/workspace
mkdir project && cd project
git init
{% endhighlight %}

Daha sonra yerel git repomuzun remote repo ayarlamasını gerçekleştirelim. Remote repo'muzun adı `live` olsun. 

> origin, production ya da farklı bir isim de verebilirsiniz.

`git remote add live ssh://user@vpsipadresi/var/repo/site.git`

Şimdi uygulamamızı sunucuya gönderelim.

{% highlight sh %}
git add .
git commit -m "init..."
git push live master

// çıktı
Counting objects: 7, done.Delta compression using up to 4 threads.Compressing objects: 100% (7/7), done.Writing objects: 100% (7/7), 10.56 KiB, done.Total 7 (delta 0), reused 0 (delta 0)To ssh://user@vpsidadresi/var/repo/site.git* [new branch]      master -> master
{% endhighlight %}

Tebrikler tüm dosyalarımız sunucuya taşındı :)

Artık projemizde bir değişiklik yapmak istediğimiz zaman değişikliklerimizi `master` branchına gönderiyoruz.

Eğer yapılan değişiklikler henüz tamamlanmadıysa, geliştirilmeye devam edecekse bir başka branch kullanıp, değişiklikleriniz bittiğinde `master` branchına merge edebilirsiniz.

Yani `master` branchında yer alan tüm kodlar yayında olan kodlar, değişiklikleri gönderirken hangi brancha gönderdiğinize dikkat edin :)

**Kaynak:** [https://www.digitalocean.com/community/tutorials/how-to-set-up-automatic-deployment-with-git-with-a-vps](https://www.digitalocean.com/community/tutorials/how-to-set-up-automatic-deployment-with-git-with-a-vps)