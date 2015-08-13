---
title: SOLID - Open - Closed Prensibi
permalink: /solid-open-closed
categories: [programming]
tags: [yazilim-prensipleri, solid]
references: [
  'https://en.wikipedia.org/wiki/Open/closed_principle',
  'http://code.tutsplus.com/tutorials/solid-part-2-the-openclosed-principle--net-36600',
  'http://www.codemag.com/article/1001061',
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
> 3 --- Open - Closed Prensibi
>
> 4 --- [Liskov Substitution Prensibi](/solid-liskov-substitution)
>
> 5 --- [Interface Segregation Prensibi](/solid-interface-segregation)
>
> 6 --- [Dependency Inversion Prensibi](/solid-dependency-inversion)

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

  class EmailSenderService {
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