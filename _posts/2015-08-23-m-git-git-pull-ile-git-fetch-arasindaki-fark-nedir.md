---
serie: git_serie
title: Git - 'git-pull' ile 'git-fetch' Arasındaki Fark Nedir?
permalink: /git-git-pull-ile-git-fetch-arasindaki-fark-nedir
categories: [programming]
tags: [git]
references: [
	'http://stackoverflow.com/questions/292357/what-are-the-differences-between-git-pull-and-git-fetch'
]
---

`git pull` komutunu kısayol gibi düşünebilirsiniz.

`git pull` = `git fetch && git merge`

Yani `git fetch` komutu remote repoda herhangi bir değişiklik olup olmadığını kontrol eder. Herhangi bir değişiklik varsa sizi uyarır. Siz bu değişikliği uygulamak isterseniz `git merge` komutunu kullanabilirsiniz.

`git pull` ise önce remote repoda herhangi bir değişiklik olup olmadığını kontrol eder. Eğer değişiklik varsa direkt olarak `git-merge` komutunu sizin yerinize uygular.