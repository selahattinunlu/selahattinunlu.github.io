---
serie: git_serie
title: Git - Birden Fazla Repo'ya Commit Gönderme
permalink: /git-birden-fazla-repo-ya-commit-gonderme
categories: [programming]
tags: [git]
references: [
  'http://stackoverflow.com/questions/14290113/git-pushing-code-to-two-remotes'
]
---

"Git - VPS'de Otomatik Deployment" başlığında anlattığım şekilde bir sistem kurduğumuzu varsayalım.
Dolayısıyla remote git repomuz sunucuda yer alıyor. Biz ayrıca bir de github üzerinde açık kaynak olarak insanların katkıda bulunabileceği bir repo oluşturduk. Peki bu iki repoya birden commit'i nasıl göndereceğiz?

---

Öncelikle geliştirme repomuzu remote repo olarak atayacağız. 

Bu repomuz aynı zamanda "pull" işlemlerinde değişiklik varsa değişiklikleri alacağımız repo.

Öncelikle Github'da yer alan repoyu ekleyelim.

`git remote add all git@github.com:selahattinunlu/selahattinunlu.github.io.git`

**"all"** adı altında bu repomuzu ekledik.

Şuanda pull ve push işlemlerimiz için bu repo kullanılıyor. 

Yukarıda bahsettiğim gibi ayrıca vps'mize de değişiklikleri göndermek istiyoruz.

`git remote set-url --add --push all git://another/repo.git`

"--push" parametresi ile bu eklenen repoyu sadece push işlemlerinde kullanıcağımızı belirtmiş olduk. 

Bu eklemeden sonra ilk eklediğimiz repo sadece pull işlemi için kullanılır hale geliyor. 

İlk repomuzu tekrar **"push"** edilecek repolar arasına ekleyelim.

`git remote set-url --add --push all git@github.com:selahattinunlu/selahattinunlu.github.io.git`

Bu işlemlerin sonunda:

**pull işlemi için**: "git@github.com:selahattinunlu/selahattinunlu.github.io.git",

**push işlemi için**:  Her iki repo da kullanılacaktır.

Proje dizininde `cat .git/config` komutu çıktısını inceleyebilirsiniz:

{% highlight sh %}
[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
	ignorecase = true
	precomposeunicode = true
[remote "all"]
	url = git@bitbucket.org:selahattinunlu/test-multiple-repo-1.git
	fetch = +refs/heads/*:refs/remotes/all/*
	pushurl = git@bitbucket.org:selahattinunlu/test-multiple-repo-1.git
	pushurl = git@bitbucket.org:selahattinunlu/test-multiple-repo-2.git
[branch "master"]
	remote = all
	merge = refs/heads/master
{% endhighlight %}

###Peki Eklenen Diğer Repoları Nasıl Sileriz?

Bunun için de --add yerine `--delete` parametresini kullanıyoruz.

`git remote set-url --delete all git://another/repo.git`