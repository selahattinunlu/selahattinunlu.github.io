---
title: SOLID - Interface Segregation Prensibi
permalink: /solid-interface-segregation
categories: [programming]
tags: [yazilim-prensipleri, solid]
references: [
  'https://en.wikipedia.org/wiki/Interface_segregation_principle',
  'http://www.turkayurkmez.com/arayuzlerin-ayrimi-prensibi-isp-interface-segregation-principle/',
  'http://www.codemag.com/article/1001061',
  'http://www.slideshare.net/dumural/solid-tasarm-prensipleri',
  'http://www.tarikkaygusuz.com/post/solid-prensipleri',
  'http://www.clubcrema.com/index.php/2013/05/solid-prensipleri-solid-principles/',
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
> 4 --- [Liskov Subsitution Prensibi](/solid-liskov-subsitution)
>
> 5 --- Interface Segregation Prensibi
>
> 6 --- [Dependency Inversion Prensibi](/solid-dependency-inversion)

Türkçe olarak **Arayüzlerin Ayrılması** diyebiliriz. Ayrıca Single Responsibility prensibinin arayüzler için geçerli olduğu bir prensip olarak kabul edilebilir.

**Tanım:** Nesneler ihtiyaç duymadıkları metotların bulunduğu interface'lere bağlı olmaya zorlanmamalıdır.

Bir otomobil örneği üzerinden gidelim.

ileriGit, geriGit, dur ve benziniGoster metotlarına sahip bir Otomobil arayüzü oluşturup fabrikamızın üreteceği tüm araçlarda bu arayüze bağlı kalacağız. İlk aracımız benzinli, Bmw marka bir otomobil.

{% highlight php %}
<?php  
  interface Otomobil 
  {
    public function ileriGit();

    public function geriGit();

    public function dur();

    public function benziniGoster();
  }

  class Bmw implements Otomobil
  {
    public function ileriGit()
    {
      // 
    }

    public function geriGit()
    {
      //
    }

    public function dur()
    {
      //
    }

    public function benziniGoster()
    {
      return 'Kalan benzin: xxx';
    }
  }

  function kalanBenzin(Otomobil $otomobil)
  {
    echo $otomobil->benziniGoster();
  }

  // app
  kalanBenzin(new Bmw()); // çıktı => 'Kalan benzin: xxx'
?>
{% endhighlight %}

Hiçbir problem gözükmüyor. Otomobil interface'ine bağlı olan herhangi bir nesneyi `kalanBenzin` fonksiyonuna parametre olarak verdiğimizde program düzgün bir şekilde çalışacaktır. 

Peki ya benzin kullanmayan elektrikli bir araç üretecek olsak? Bu nesneyi de `Otomobil` arayüzüne bağlı kalarak üretirsek kullanmayacağı `benziniGoster` metotunu da kullanması için zorlamış olacağız.

Böyle bir sorun yaşamamak için mümkün olduğunca arayüzlerimizi parçalara ayırmalıyız. 

{% highlight php %}
<?php 
  interface OtomobilInterface
  {
    public function ileriGit();

    public function geriGit();

    public function dur();
  }

  interface BenzinliOtomobilInterface
  {
    public function benziniGoster();
  }

  interface ElektrikliOtomobilInterface
  {
    public function sarjiGoster();
  }

  class Bmw implements OtomobilInterface, BenzinliOtomobilInterface
  {
    public function ileriGit()
    {
      //
    }

    public function geriGit()
    {
      //
    }

    public function dur()
    {
      //
    }

    public function benziniGoster()
    {
      return 'Kalan benzin: xxx';
    }
  }

  class Tesla implements OtomobilInterface, ElektrikliOtomobilInterface
  {
    public function ileriGit()
    {
      //
    }

    public function geriGit()
    {
      //
    }

    public function dur()
    {
      //
    }

    public function sarjiGoster()
    {
      return 'Kalan sarj: yyy';
    }
  }

  function kalanBenzin(BenzinliOtomobilInterface $otomobil)
  {
    $otomobil->benziniGoster();
  }

  function kalanSarj(ElektrikliOtomobilInterface $otomobil)
  {
    $otomobil->sarjiGoster();
  }

  // app
  kalanBenzin(new Bmw); // çıktı => Kalan benzin: xxx
  kalanSarj(new Tesla); // çıktı => Kalan sarj: yyy
?>
{% endhighlight %}