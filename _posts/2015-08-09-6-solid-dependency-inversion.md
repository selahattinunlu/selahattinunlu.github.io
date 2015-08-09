---
title: SOLID - Dependency Inversion Prensibi
permalink: /solid-dependency-inversion
categories: [programming]
tags: [yazilim-prensipleri, solid]
references: [
  'https://en.wikipedia.org/wiki/Dependency_inversion_principle',
  'http://code.tutsplus.com/tutorials/solid-part-4-the-dependency-inversion-principle--net-36872',
  'http://www.cihataltuntas.com/dependency-inversion-principle-dip/',
  'http://www.turkayurkmez.com/bagliligi-tersine-cevirme-prensibi-dependency-inversion-principle-dip/',
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
> 5 --- [Interface Segregation Prensibi](/solid-interface-segregation)
>
> 6 --- Dependency Inversion Prensibi

---

### Tanımlama

--- Yüksek seviye modüller, düşük seviye modüllere bağlı olmamalı. Her ikisi de soyut (abstract) kavramlara bağlı olmalı.

--- Soyut kavramlar detaylara bağlı olmamalı. Detaylar soyut kavramlara bağlı olmalı.

---

Bir sınıf direkt olarak bir başka somut sınıfa bağlı olmamalı, araya koyulacak bir soyut kavrama (interface'e ya da abstract sınıfa) bağlı olmalı da diyebiliriz. Böylece bu interface'i uygulayan alt sınıfları sorunsuzca üst seviye sınıfımızda kullanabiliriz ve alt sınıfta arayüze bağlı kaldığı sürece gerçekleşecek olası değişiklikler, üst sınıfın çalışmasını etkilemeyecektir.

### Örnek

> tuts+ makalesindeki örnektir. Dilerseniz referanslarda yer alan linkten orjinaline ulaşabilirsiniz.

Bir e-kitap okuyucu geliştirdiğimizi hayal edin.

{% highlight php %}
<?php  
  class PDFReader
  {
  	protected $book;

    public function __construct(PDFBook $book)
    {
      $this->book = $book;
    }

    public function read()
    {
      return $this->book->read();
    }
  }

  class PDFBook
  {
    public function read()
    {
    	return 'reading a pdf book.';
    }
  }
?>
{% endhighlight %}

E-kitap okuyucumuzu bir PDF okuyucu gibi geliştirmeye başladık. Şimdilik bir problem yok. `PDFBook` sınıfını kullanan bir `PDFReader` sınıfımız var. `PDFReader` sınıfındaki `read()` fonksiyonu okunan kitabın (bu örnekte PDFBook) `read()` fonksiyonunu temsil ediyor.

![](/public/img/posts/solid-principles/pdfreader-uses-pdfbook.png "PDFReader sınıfı PDFBook sınıfını kullanıyor")

Eğer uygulamamız PDF dışında herhangi bir formatta yer alan e-kitabı okumayacaksa bu çözüm kabul edilebilir. Ama biz ilk uygulamadığımız örnekteki PDF'in de içinde bulunduğu birkaç farklı formatı destekleyen kapsamlı bir e-kitap okuyucu geliştirmek istiyoruz. Sınıfımızı tekrar isimlendirelim.

{% highlight php %}
<?php  
  class EBookReader
  {
    protected $book;

    public function __construct(PDFBook $book)
    {
      $this->book = $book;
    }

    public function read()
    {
      return $this->book->read();
    }
  }

  class PDFBook 
  {
    function read() {
      return "reading a pdf book.";
    }
  }
?>
{% endhighlight %}

İsim değişikliği fonksiyonel olarak bir şeyi değiştirmedi. Uygulamamız hala çalışacaktır.

![](/public/img/posts/solid-principles/ebookreader-uses-pdfbook.png)

Okuyucumuz çok daha soyut, çok daha genel bir hale geldi. Spesifik bir kitap türü `PDFBook` u kullanan kapsamlı bir `EBookReader` sınıfımız var. Soyut kavramımız detaya bağlı. Halbuki bu prensibe göre kitap türümüzün PDF olması sadece bir detay olmalı, hiçbir sınıf buna bağlı olmamalı. O hatamızı düzeltmeye başlayalım.

{% highlight php %}
<?php  
  interface EBook
  {
    public function read();
  }

  class EBookReader
  {
    protected $book;

    public function __construct(EBook $book)
    {
      $this->book = $book;
    }

    public function read()
    {
      return $this->book->read();
    }
  }

  class PDFBook implements EBook
  {
    function read() {
      return "reading a pdf book.";
    }
  }
?>
{% endhighlight %}

Bağımlılığı tersine çevirmek için en yaygın olan ve en sık kullanılan yöntem tasarımımızda daha soyut bir modül ortaya koymaktır. OOP içerisindeki en soyut eleman Interface'dir. Bu nedenle herhangi bir sınıf Interface'e bağlı kalarak Dependency Inversion prensibine bağlı kalabilir.

Kitap okuyucumuz için bir interface oluşturduk. `EBook` olarak adlandırdığımız bu interface `EBookReader` sınıfımızın ihtiyaçlarını temsil ediyor.

![](/public/img/posts/solid-principles/ebookreader-ebookinterface-pdfbook.png)

Şimdi tek bir bağımlılık yerine iki bağımlılığımız var:

- `EBookReader` `EBook` u kullanıyor.
- İkinci bağımlılığımız biraz farklı. `PDFBook` sınıfımız `EBook` sınıfını implement ediyor. Yani `PDFBook` `EBook` interface'inin bir parçası.

Böylece, `EBook` arayüzüne bağlı kalan herhangi formatta bir e-kitabı okuyabilen bir e-kitap okuyucu geliştirmiş olduk. 

{% highlight php %}
<?php  
  interface EBook
  {
    public function read();
  }

  class EBookReader
  {
    protected $book;

    public function __construct(EBook $book)
    {
      $this->book = $book;
    }

    public function read()
    {
      return $this->book->read();
    }
  }

  class PDFBook implements EBook
  {
    function read() 
    {
      return "reading a pdf book.";
    }
  }

  class MobiBook implements EBook
  {
    function read()
    {
      return 'reading a mobi book';
    }
  }
?>
{% endhighlight %}

### Sonuç

Örneğe ilk başladığımızda E-kitap okuyucumuz direkt olarak PDFBook'a bağlıydı. Dolayısıyla farklı formatta bir kitap türünü okuyamazdı.

Daha sonradan bağımlılığı tersine çevirmek için bir interface oluşturarak E-kitap okuyucumuzun direkt olarak bir alt sınıfa bağlılığını ortadan kaldırdık ve bu arayüze bağlı tüm alt sınıfları kullanabilir hale getirdik.

E-kitap okuyucumuz PDFBook'a bağlıyken; PDFBook, EBook arayüzüne bağlı olacak şekilde bağımlılığı tersine çevirdik.