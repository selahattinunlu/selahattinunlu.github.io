---
title: SOLID - Single Responsibility Prensibi
permalink: /solid-single-responsibility
categories: [programming]
tags: [yazilim-prensipleri, solid]
references: [
  'https://en.wikipedia.org/wiki/Single_responsibility_principle',
  'http://code.tutsplus.com/tutorials/solid-part-1-the-single-responsibility-principle--net-36074'
]
---

> Bu yazı ["SOLID Prensipleri"](/seriler/solid-prensipleri) yazı dizisinin bir parçasıdır.
>
> 1 --- [Nedir, Neden İhtiyaç Duyulmuştur?](/solid-nedir-neden-ihtiyac-duyulmustur)
>
> 2 --- Single Responsibility Prensibi
>
> 3 --- [Open - Closed Prensibi](/solid-open-closed)
>
> 4 --- [Liskov Substitution Prensibi](/solid-liskov-substitution)
>
> 5 --- [Interface Segregation Prensibi](/solid-interface-segregation)
>
> 6 --- [Dependency Inversion Prensibi](/solid-dependency-inversion)

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