---
serie: git_serie
title: Git - Lokal Branch'ı Remote Git Reposuna Göndermek
permalink: /git-lokal-branch-i-remote-git-reposuna-gondermek
categories: [programming]
tags: [git]
references: [
	'http://stackoverflow.com/questions/2765421/push-a-new-local-branch-to-a-remote-git-repo-and-track-it-too'
]
---

Yeni bir branch oluşturduktan sonra değişiklikleri remote repo'ya göndermek istediğinizde şöyle bir hatayla karşılaşırsınız:

{% highlight sh %}
fatal: The current branch new-branch has no upstream branch.
To push the current branch and set the remote as upstream, use

git push --set-upstream origin new-branch
{% endhighlight %}

Hata mesajıyla beraber çözüm için kullanmamız gereken komutu da çıktı olarak verir.

Kısaltma olarak `git push -u origin new-branch` komutunu da kullanabilirsiniz.