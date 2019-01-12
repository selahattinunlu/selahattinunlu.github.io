---
serie: 'solid_serie'
title: SOLID - Interface Segregation Prensibi
permalink: /solid-interface-segregation
categories: [programming]
tags: [solid, programming, principles]
references: [
  'https://en.wikipedia.org/wiki/Interface_segregation_principle',
  'http://www.turkayurkmez.com/arayuzlerin-ayrimi-prensibi-isp-interface-segregation-principle/',
  'http://www.codemag.com/article/1001061',
  'http://www.slideshare.net/dumural/solid-tasarm-prensipleri',
  'http://www.tarikkaygusuz.com/post/solid-prensipleri',
  'http://www.clubcrema.com/index.php/2013/05/solid-prensipleri-solid-principles/',
]
---

Türkçe olarak **Arayüzlerin Ayrılması** diyebiliriz. Ayrıca Single Responsibility prensibinin arayüzler için geçerli olduğu bir prensip olarak kabul edilebilir.

<div class="alert-box">
  <h3 class="title">Tanım</h3>

  Nesneler kullanmadığı metodun yer aldığı bir interface'i uygulamaya zorlanmamalıdır.
</div>

Bir fabrika hayal edelim. Bu fabrikanın çalışanları `İşçi` interface'ine bağlı olsun. Ve bu `İşçi` interface'inde `uret()` ve `dinlen()` metotları yer alsın.

Bu `İnsan` için uygulanabilir bir interface fakat Amazon gibi dev bir şirketseniz ve çalışanlarınız arasında dinlenmeye ihtiyacı olmayan `Robot`lar da yer alıyorsa? 

{% highlight php %}
<?php 
  interface IsciInterface
  {
    public function uret();

    public function dinlen();
  }

  class Insan implements IsciInterface
  {
    public function uret()
    {
      //
    }

    public function dinlen()
    {
      //
    }
  }

  class Robot implements IsciInterface
  {
    public function uret()
    {
      //
    }

    public function dinlen()
    {
      return null; // ihtiyacı olmayan, kullanmadığı bir metodu uygulamaya zorladık
    }
  }

  class Fabrika
  {
    public function calistir(IsciInterface $isci)
    {
      $isci->uret();
      $isci->dinlen();
    }
  }
?>
{% endhighlight %}

Tanımda yer aldığı gibi nesneler kullanmadığı, ihtiyaç duymadığı bir metodun yer aldığı arayüzü uygulamaya zorlanmamalı! O halde `Isci` interface'ine parçalara ayırmamız gerecek.

{% highlight php %}
<?php 
  interface UretebilirInterface
  {
    public function uret();
  }

  interface DinlenebilirInterface
  {
    public function dinlen();
  }

  class Insan implements UretebilirInterface, DinlenebilirInterface
  {
    public function uret()
    {
      //
    }

    public function dinlen()
    {
      //
    }
  }

  class Robot implements UretebilirInterface
  {
    public function uret()
    {
      //
    }
  }

  class Fabrika
  {
    public function calistir(UretebilirInterface $isci)
    {
      $isci->uret();

      if ($isci instanceof Robot) return;

      $isci->dinlen();
    }
  }
?>
{% endhighlight %}

Bu sefer sorun çözülmüş gibi duruyor değil mi? Hayır! Bu sefer de Open-Closed prensibini ihlal etmiş olduk. Yeni bir işçi türü eklendiğinde ve Robot gibi dinlemeye ihtiyacı yoksa? Fabrika sınıfının kodlarına müdahale etmemiz gerekecek. 

<div class="alert-box">
  <h3 class="title">Hatırlatma</h3>

  Open-Closed prensibi, bir sınıfın genişlemeye, gelişmeye açık, değişime kapalı olmasıdır.
</div>

O halde biraz daha inceleyelim. Farklı işçi tipleri farklı çalışma şekillerine sahip. `İnsan` çalışırken üretiyor fakat dinlenmeye ihtiyaç duyuyor. `Robot` çalışırken dinlenme ihtiyacı duymadan üretebiliyor. İşçilerimizin çalışma şekilleri farklı olsa da ortak noktaları `Çalışabilir` olmaları!

{% highlight php %}
<?php  
  interface CalisabilirInterface
  {
    public function calis();
  }

  interface UretebilirInterface
  {
    public function uret();
  }

  interface DinlenebilirInterface
  {
    public function dinlen();
  }

  class Insan implements UretebilirInterface, DinlenebilirInterface, CalisabilirInterface
  {
    public function uret()
    {
      //
    }

    public function dinlen()
    {
      //
    }

    public function calis()
    {
      $this->uret();
      $this->dinlen();
    }
  }

  class Robot implements UretebilirInterface, CalisabilirInterface
  {
    public function uret()
    {
      //
    }

    public function calis()
    {
      $this->uret();
    }
  }

  class Fabrika
  {
    public function calistir(CalisabilirInterface $isci)
    {
      $isci->calis();
    }
  }
?>
{% endhighlight %}

İşte şimdi oldu! Artık `CalisabilirInterface` imizi uygulayan herhangi bir işçiyi çalıştırabiliriz.

