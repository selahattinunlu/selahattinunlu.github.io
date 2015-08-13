---
title: SOLID - Liskov Substitution Prensibi
permalink: /solid-liskov-substitution
categories: [programming]
tags: [yazilim-prensipleri, solid]
references: [
  'https://en.wikipedia.org/wiki/Liskov_substitution_principle',
  'http://www.resulaslan.com/solid-prensipleri/',
  'http://harunozer.com/makale/liskov_substitution_principle__liskov_yerdegistirme_prensibi.htm',
  'http://www.slideshare.net/dumural/solid-tasarm-prensipleri',
  'http://www.codemag.com/article/1001061',
  'http://www.tarikkaygusuz.com/post/solid-prensipleri',
  'http://www.clubcrema.com/index.php/2013/05/solid-prensipleri-solid-principles/'
]
---

> Bu yazı ["SOLID Prensipleri"](/seriler/solid-prensipleri) yazı dizisinin bir parçasıdır.
>
> 1 --- [Nedir, Neden İhtiyaç Duyulmuştur?](/solid-nedir-neden-ihtiyac-duyulmustur)
>
> 2 --- [Single Responsibility Prensibi](/solid-single-responsibility)
>
> 3 --- [Open - Closed Prensibi](/solid-open-closed)
>
> 4 --- Liskov Substitution Prensibi
>
> 5 --- [Interface Segregation Prensibi](/solid-interface-segregation)
>
> 6 --- [Dependency Inversion Prensibi](/solid-dependency-inversion)

Bu prensip Barbara Liskov tarafından öne sürülmüştür.

Bu prensip yer değiştirilebilirlik, yerine kullanılabilirlikten bahsediyor. Bir program içerisinde "S", "T"nin alt tipi ise "T" tipindeki objeler "S" tipindeki objeler ile özellikleri değiştirilmeden yer değiştirilebilir olmalıdır.

Not almak için dolma kalem ya da kurşun kalem kullanıyor olmanızın bir önemi yoktur. Kalemden türeyen herhangi tür kalem sizin beklentinizi karşılar ve yazabilirsiniz.

<div class="alert">
	<h2>Önemli</h2>

	Örneğin yanlış olduğunu düşünüyorsanız ya da daha iyi bir örnek hazırladıysanız <a href="https://github.com/selahattinunlu/selahattinunlu.github.io/blob/master/_posts/2015-08-09-4-solid-liskov-substitution.md" target="_blank">Github üzerinden</a> katkıda bulunabilirsiniz.
</div>