---
serie: git_serie
title: Git - Spesifik Bir Commit'in Değişikliklerini Görmek
permalink: /git-spesifik-bir-commit-in-degisikliklerini-gormek
categories: [programming]
tags: [git]
---

Bunun için kullanabileceğimiz bir kaç yol var.

`git diff HEAD HEAD~1` şeklinde bir kullanım ile en son gönderilen commit ile bir önceki commit arasındaki değişiklikleri gösterir.

Eğer değişiklikleri görmek belirli bir commit varsa o commit'in hashini kullanarak

`git show {commit-hash}` komutu ile sadece o commit ile yapılan değişikliklere ulaşabiliriz.

Örneğin: `git show 446b0a40c6a086cc53198444f38d2ed0a3b65383`

Bu arada **git show** komutu sadece commitler için değil farklı objeler üzerinde de kullanılabiliyor.

[git show komutu hakkında detaylı bilgiyi buradan alabilirsiniz.](https://git-scm.com/docs/git-show)