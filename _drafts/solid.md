---
title: SOLID
permalink: /solid
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

<!-- nedir -->

### Nedir?
  
**S**ingle Responsibility

**O**pen-Closed 

**L**iskov subsitution 

**I**nterface Segregation

**D**ependency Inversion  prensiplerinin baş harfleridir.

Bu prensipler diğerleriyle birlikte kullanıldığında programcıya kolay geliştirilebilir bir sistem oluşturmasını sağlar.

<!-- Nasıl Ortaya Çıkmıştır -->

### Nasıl Ortaya Çıkmıştır?
SOLID, 2000'li yılların başında Robert C. Martin tarafından nesne yönelimli programlamanın 5 temel prensipleri bir araya getirilerek ortaya çıkmıştır.

<!-- Neden İhtiyaç Duyulmuştur -->

### Neden İhtiyaç Duyulmuştur?

Programcılar yıllarca karşılaştıkları problemlere ortak çözümler üreterek standart haline getirdikleri çözümler ile tasarım desenlerini ortaya çıkardılar. Tasarım desenleri her ne kadar kendi başlarına sorunları çözüyor olsalar da büyük resme bakıldığında ortaya çıkan yeni sorunlar vardı. Bunlar kötü tasarımı da tanımlayan:

- Esnemezlik (Rigidity)
- Kırılganlık (Fragility)
- Sabitlik (Immobility) 

sorunlarıydı. SOLID ile bu sorunlara çözüm üretmek amaçlanmıştır.

**Esnemezlik:** Kullanılan tasarımın geliştirilememesi ve ekleme yapılamaması 

**Kırılganlık:** Bir yerde Yapılan değişikliğin başka bir yerde sorun çıkartması

**Sabitlik:** Geliştirilmiş modülün başka yerde tekrar kullanılabilir (reusable) olmaması

---

### Single Responsibility

Bu prensibe göre bir sınıfta olacak bir değişiklik yalnızca bir nedene bağlı olmalıdır. Yani bu sınıf sadece tek bir görevden sorumlu olmalıdır. 

Eğer birden fazla sorumluluğu yerine getiren binlerce satır koddan oluşan bir sınıf meydana getirirseniz buradaki işlemleri bir süre sonra sizin bile anlamanız zorlaşır. Ayrıca böyle bir sınıf üzerinde değişiklik yapmak gerçekten çok maliyetli olacaktır.

Bir örnek ile açıklayalım.

Veritabanından bir hafta önce alışveriş yapan kullanıcılarımızı alarak bu kullanıcılara indirimde olan ürünleri e-mail olarak göndermek istediğimizi varsayalım.

{% highlight php %}
<?php 

class EmailSender {
  // sorumluluk 1 - asıl sorumlu olduğu bu işlem!
  public function send(array $users, array $products)
  {
    // kullanıcılara indirimde olan ürünleri liste halinde e-mail gönderdiğimiz method.
  }

  // sorumluluk 2 - ekstra sorumluluk
  public function getUsers()
  {
    return '...'; // bir hafta önce alışveriş yapan kullanıcıların sorgusu.
  }

  // sorumluluk 3 - ekstra sorumluluk
  public function getProducts()
  {
    return '...'; // indirimdeki ürünleri getiren sorgu
  }
}
?>
{% endhighlight %}

Dikkatinizi çekmiştir herhalde :) E-mail gönderme ile sorumlu olan sınıfımıza başka sorumluluklar da yükledik.
Son bir haftadır alışveriş gerçekleştiren kullanıcıları da bu sınıf buluyor, indirimdeki ürünleri de bu sınıf buluyor, e-maili de bu sınıf gönderiyor.

Normal şartlarda sadece e-maili göndermek ile sorumlu olan bu sınıfta sadece e-mail ile ilgili olacak değişikliklerde örneğin farklı bir e-mail servisi kullanmak istediğimizde değişiklik yapmamız gerekirdi.

Fakat yukarıdaki şekilde oluşturulan bir sınıfta, bundan sonra "son iki hafta boyunca alışveriş yapan kullanıcılara e-mail göndermek istiyorum" dediğimiz zaman da yine bu sınıf üzerinde değişiklik yapmamız gerekecek.

Kısacası tek sorumluluk prensibini (Single Responsibility) ihlal eden bir sınıf ile karşı karşıyayız!

Aynı işlemleri bir de Single Responsibility Prensibini uygulayarak yazalım:

{% highlight php %}
<?php 

class UserRepository {
  // email ile bildirim göndersin.
  public function getUsersByOrders($startDate, $endDate)
  {
    return '..'; // başlangıç ve bitiş tarih aralıkları arasında alışveriş yapan kullanıcıları getiren method
  }
}

class ProductRepository {
  public function getDiscountedProducts()
  {
    return '..'; // indirimdeki ürünleri getiren method
  }
}

class EmailSender {
  public function send(array $users, array $products)
  {
    // kullanıcılara indirimde olan ürünleri liste halinde e-mail gönderdiğimiz method.
  }
}
?>
{% endhighlight %}

Yeni kod yapısı incelendiğinde her sınıfın bir tek işten sorumlu olduğunu görebiliriz. 
Böylece daha anlaşılır ve daha kolay geliştirilebilir sınıflar, yazılımlar geliştirebiliriz.

---

### Open - Closed

Bu prensibe göre yazılım varlıkları (sınıf, modül, fonksiyonlar vs.) geliştirmeye açık ve değişime kapalı olmalıdır.
Yani bir sınıfı ele alacak olursak, sınıfın davranışında değişiklik yapmanız gerektiğinde direkt olarak sınıfın mevcut kodlarını değiştirmemelisiniz.

Örneğimizde yine Email gönderme işlemi olacak. Bir EmailSenderService'imiz olduğunu varsayalım. Yazılımınızı geliştirmeye
başlarken sadece "Mandrill" e-mail servisini kullanarak e-mail atmaya karar verdiniz.

{% highlight php %}
<?php  
  class EmailSenderService {
    // mandrill e-mail servisini kullanarak mail atan method
    public function mandrill($to, $subject, $message)
    {
      # code...
    }
  }
?>
{% endhighlight %}

Şuan herşey yolunda e-maillerinizi gönderebiliyorsuuz. Daha sonradan baktınız ki Mailgun e-mail servisinin fiyatları daha uygun ve artık o servisi kullanmak istiyorsunuz. Bu durumda yapacağınız şey EmailSenderService sınıfı içerisine "mailgun" methodu eklemek gibi duruyor.

{% highlight php %}
<?php  
  class EmailSenderService {
    // mandrill e-mail servisini kullanarak mail atan method
    public function mandrill($to, $subject, $message)
    {
      # code...
    }

    // mailgun e-mail servisini kullanara mail atan method
    public function mailgun($to, $subject, $message)
    {
      # code...
    }
  }
?>
{% endhighlight %}

Peki ya başka bir e-mail servisini gördünüz ve size daha uygun. Bu şekilde her e-mail servislerini method olarak eklemeye devam mı edeceksiniz? Hayır! Sınıfın davranışını değiştirmeyi her istediğinizde kaynak kodda "değişiklik" yaparak Open Closed prensibini ihlal ediyorsunuz!

Bir de şu şekilde bir yapımız olduğunu düşünelim:

{% highlight php %}
<?php  
  // E-mail servislerimizin kullanacağı ortak arayüz
  interface EmailService {
    public function send($to, $subject, $message);
  }
  
  class Mailgun implements EmailService {
    public function send($to, $subject, $message)
    {
      # code...
    }
  }

  class Mandrill implements EmailService {
    public function send($to, $subject, $message)
    {
      # code...
    }
  }

  class EmailSenderService implements EmailService {
    public $emailService;

    public function __construct(EmailService $emailService)
    {
      $this->emailService = $emailService;
    }

    public function send($to, $subject, $message)
    {
      $this->emailService->send($to, $subject, $message);
    }
  }

  // Mail göndermek istediğimiz zaman

  $emailService = new EmailSenderService(new Mandrill());
  $emailService->send('selahattin.unlu@yandex.com', 'Mail başlığı', 'mesajımız');
?>
{% endhighlight %}

Xmail adında başka bir servisi sistemimize ekleyip artık o servisi kullanarak mail göndermek istediğimiz de ise ilk örneğimizdeki gibi sınıfta bir değişiklik yapmayarak modifikasyon yerine geliştirme, genişletme yapıyoruz. 

{% highlight php %}
<?php  
  class Xmail implements EmailService {
    public function send($to, $subject, $message)
    {
      # code...
    }
  }

  // artık e-mail gönderirken
  $emailService = new EmailSenderService(new Xmail());
  $email->send('selahattin.unlu@yandex.com', 'başlık', 'mesaj');

  // mailgun kullanmak istediğimiz zaman
  $emailService = new EmailSenderService(new Mailgun());
  $email->send('selahattin.unlu@yandex.com', 'başlık', 'mesaj');
?>
{% endhighlight %}

---

### Liskov subsitution 

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

---

### Interface Segregation

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

---

### Dependency Inversion

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis laborum veritatis nesciunt culpa. Facere cupiditate, quaerat eum esse corporis deleniti nostrum facilis fugiat assumenda sint, repudiandae recusandae itaque dicta consequatur.