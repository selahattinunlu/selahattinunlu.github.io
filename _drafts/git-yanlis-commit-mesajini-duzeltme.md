---
title: Git - Yanlış Commit Mesajını Düzeltme
permalink: /git-yanlis-commit-mesajini-duzeltme
categories: [programming]
tags: [git]
---

Eğer henüz remote repo'ya gönderilmemiş bir commit'in mesajını düzelteceksek

`git commit --amend` komutu ile komut satırında bir editör açılır ve mesajımızı düzenleyip kaydettiğimizde mesaj değiştirilir.

Ya da direkt olarak `git commit --amend -m "yeni mesajımız"` şeklinde düzeltebiliriz.

###Remote Repo'ya Gönderilmişse

Eğer bu commit remote repo'ya gönderilmişse yine üstte yer alan şekilde düzenleme yapıldıktan sonra düzeltilmiş yeni commit'i gönderirken `-f` parametresini ekliyoruz.

`git push -f`