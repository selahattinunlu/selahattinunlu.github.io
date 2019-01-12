---
serie: git_serie
title: Git - Remote Repo'daki Commit'i Geri Alma
permalink: /git-remote-repo-daki-commit-i-geri-alma
categories: [programming]
tags: [git]
---



`git reset --soft HEAD~1` komutu ile en son commiti geri alabilirsiniz.

Daha sonra yeni commitimizi remote repoya gönderirken mevcut log akışını değiştirdiğimiz için `-f` parametresi ile üzerine yazmaya zorluyoruz.

`git push -f`

> `HEAD~{x}` x ile son yapılan kaç commiti geri alacağınızı belirtirsiniz.
>
> Son yapılan 10 commiti geri almak istiyorsanız `git reset --soft HEAD~10` komutunu kullanabilirsiniz.

### Belli Bir Commit'e Kadar Olan Tüm Commitleri Geri Almak

Bu sefer geriye dönmek istediğiniz commit'in idsini girmelisiniz.

Log dosyamız şu şekilde olsun.

{% highlight sh %}
commit 983acc79e4fd14cb62ed6909740302e191e1da04
Author: Selahattin Ünlü <selahattin.unlu@yandex.com>
Date:   Sun Aug 16 03:01:32 2015 +0300

    add a file.

commit e7883417c403b80d2ea92c353ff69b59330cb5d5
Author: Selahattin Ünlü <selahattin.unlu@yandex.com>
Date:   Sun Aug 16 03:01:11 2015 +0300

    update version.

commit 65a227ec41b97b6735e580999fd610188e624d53
Author: Selahattin Ünlü <selahattin.unlu@yandex.com>
Date:   Sun Aug 16 02:55:02 2015 +0300

    init.
{% endhighlight %}

İlk yaptığımız commit'e kadar olan tüm commitleri geri almak istiyorsak ilk commit'imizin idsini kullanacağız:

`git reset --soft 65a227ec41b97b6735e580999fd610188e624d53`

###-- soft ve --hard Parametreleri Arasındaki Fark

`--soft` parametresi ile yaptığınız reset sonrasında commit geri alınır ve lokal reponuzda yaptığınız değişiklikler korunur. 

`--hard` parametresi ile yaptığınız reset sonrasında commit geri alındığı gibi ayrıca geri aldığınız bu commitde yaptığınız değişiklikler de resetlenir.
