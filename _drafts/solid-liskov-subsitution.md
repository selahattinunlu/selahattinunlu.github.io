---
title: SOLID - Liskov Subsitution Prensibi
permalink: /solid-liskov-subsitution
categories: [programming]
tags: [yazilim-prensipleri, solid]
references: [
  'http://www.slideshare.net/dumural/solid-tasarm-prensipleri',
  'https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)',
  'https://en.wikipedia.org/wiki/Open/closed_principle',
  'https://en.wikipedia.org/wiki/Interface_segregation_principle',
  'http://www.turkayurkmez.com/arayuzlerin-ayrimi-prensibi-isp-interface-segregation-principle/',
  'http://www.codemag.com/article/1001061',
  'http://www.tarikkaygusuz.com/post/solid-prensipleri',
  'http://www.clubcrema.com/index.php/2013/05/solid-prensipleri-solid-principles/',
  'http://harunozer.com/makale/liskov_substitution_principle__liskov_yerdegistirme_prensibi.htm'
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

Bu prensip Barbara Liskov tarafından öne sürülmüştür.

Bu prensip yer değiştirilebilirlik, yerine kullanılabilirlikten bahsediyor. Bir program içerisinde "S", "T"nin alt tipi ise "T" tipindeki objeler "S" tipindeki objeler ile özellikleri değiştirilmeden yer değiştirilebilir olmalıdır.

Biraz daha açık anlatmak gerekirse, "Alt sınıflardan oluşan nesneler üst sınıfların nesneleriyle yer değiştirdiklerinde aynı davranışı sergilemelidir.".

Bir de kodlar ile bir örnek verelim. İlk önce bu prensibe aykırı bir şekilde kodlayacağız.

{% highlight php %}
<?php  
  interface Yazici {
    public function yazdir();
    public function tara();
  }

  class BirinciYazici implements Yazici {
    public function yazdir()
    {
      echo 'Birinci yazıcı yazdırma işlemi yaptı.';
    }

    public function tara()
    {
      echo 'Birinci yazıcı tarama işlemi yaptı.';
    }
  }

  class IkinciYazici implements Yazici {
    public function yazdir()
    {
      echo 'İkinci yazıcı yazdırma işlemi yaptı.';
    }

    public function tara()
    {
      throw new Exception("Bu yazıcı tarama özelliğine sahip değil", 1);
    }
  }

  class YaziciProcess {
    public $yazici = null;

    public function __construct(Yazici $yazici) 
    {
      $this->yazici = $yazici;
    }

    public function yazdir()
    {
      return $this->yazici->yazdir();
    }

    public function tara()
    {
      if ($this->yazici instanceof BirinciYazici) {
        return $this->yazici->tara();
      } 

      return null;
    }
  }

  // asıl program
  $yaziciProccess = new YaziciProcess(new BirinciYazici());
  $yaziciProccess->yazdir(); // çıktı ==> Birinci yazıcı yazdırma işlemi yaptı.
  $yaziciProccess->tara(); // çıktı ==> Birinci yazıcı tarama işlemi yaptı.

  $otherPrinterProccess = new YaziciProcess(new IkinciYazici());
  $otherPrinterProccess->yazdir(); // çıktı ==> İkinci yazıcı yazdırma işlemi yaptı.
  $otherPrinterProccess->tara(); // çıktı ==> return null;
?>
{% endhighlight %}

Kodları incelediğiniz zaman iki adet yazıcımız var ve bu yazıcılar ortak bir "Yazici" arayüzünü implement ediyorlar. Arayüz içerisinde yazdir ve tara methodları yer aldığı için her iki tarayıcı da bu methodları implement etmek zorunda. Fakat tarama özelliği bulunmayan yazıcı için ya sınıf içerisinde exception fırlatmak zorunda kalıyoruz ya da YaziciProcess sınıfı altında tara fonksiyonunda tip kontrolü yapmak zorunda kalıyoruz. İşte bu Liskov Subsitution prensibine aykırı bir durumdur.

Şimdi bu durumu düzeltelim.

{% highlight php %}
<?php  
  interface YaziciInterface {
     public function yazdir();
  }

  interface TarayiciInterface {
     public function tara();
  }

  class BirinciYazici implements YaziciInterface, TarayiciInterface {
    public function yazdir()
    {
      echo 'Birinci yazıcı yazdırma işlemi yaptı.';
    }

    public function tara()
    {
      echo 'Birinci yazıcı tarama işlemi yaptı.';
    }
  }

  class IkinciYazici implements YaziciInterface {
    public function yazdir()
    {
      echo 'İkinci yazıcı yazdırma işlemi yaptı.';
    }
  }

  class YaziciProccess {
    public $yazici;

    public function __construct(YaziciInterface $yazici)
    {
      $this->yazici = $yazici;
    }

    public function yazdir()
    {
      return $this->yazici->yazdir();
    }
  }

  class TarayiciProccess {
    public $tarayici;

    public function __construct(TarayiciInterface $tarayici) 
    {
      $this->tarayici = $tarayici;
    }

    public function tara()
    {
      return $this->tarayici->tara();
    }
  }

  // ana program
  $birinciYaziciIslemi = new YaziciProcess(new BirinciYazici());
  $birinciYaziciIslemi->yazdir();

  $ikinciYaziciIslemi = new YaziciProccess(new IkinciYazici());
  $ikinciYaziciIslemi->yazdir();

  $taramaIslemi = new TarayiciProccess(new BirinciYazici());
  $taramaIslemi->tara();
?>
{% endhighlight %}