---
title: SOLID - Liskov Subsitution Prensibi
permalink: /solid-liskov-subsitution
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
> 4 --- Liskov Subsitution Prensibi
>
> 5 --- [Interface Segregation Prensibi](/solid-interface-segregation)
>
> 6 --- [Dependency Inversion Prensibi](/solid-dependency-inversion)

<div class="alert">
  <h2>Taslak</h2>

  Bu makalede yer alan örneği kaldırdım. Yeni örneği yakında ekleyeceğim.
</div>

Bu prensip Barbara Liskov tarafından öne sürülmüştür.

Bu prensip yer değiştirilebilirlik, yerine kullanılabilirlikten bahsediyor. Bir program içerisinde "S", "T"nin alt tipi ise "T" tipindeki objeler "S" tipindeki objeler ile özellikleri değiştirilmeden yer değiştirilebilir olmalıdır.

Biraz daha açık anlatmak gerekirse, "Alt sınıflardan oluşan nesneler üst sınıfların nesneleriyle yer değiştirdiklerinde aynı davranışı sergilemelidir.".