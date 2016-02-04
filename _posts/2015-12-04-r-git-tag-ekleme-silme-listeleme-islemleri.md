---
serie: git_serie
title: Git - Tag Ekleme/Silme/Listeleme İşlemleri
permalink: /git-tag-ekleme-silme-listeleme-islemleri
categories: [programming]
tags: [git]
---

###Etiketleri Listelemek

Mevcut etiketleri listelemek için

`git tag` komutunu kullanabilirsiniz.

###Yeni Etiket Oluşturmak

`git tag -a etiketadi -m "açıklama-mesaj"`

Örneğin v1.4 için `git tag -a v1.4 -m "release v1.4"` şeklinde kullanabilirsiniz.

###Etiketi Remote Repoya Göndermek

`git push remoterepo etiketadi`

Remote repomuzu origin olarak adlandırdığımızı varsayalım ve v1.4 etiketimizi repoya göndermek için

`git push origin v1.4` komutunu kullanabilirsiniz.

###Etiket Silmek

Lokal repomuzdaki bir etiketi silmek için: `git tag -d tagname`

Remote repodaki bir etiketi silmek için: `git push origin :tagname`