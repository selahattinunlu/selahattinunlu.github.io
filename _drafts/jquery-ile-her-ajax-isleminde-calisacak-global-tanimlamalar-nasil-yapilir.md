---
layout: post
title: Jquery İle Her Ajax İşleminde Çalışacak Global Tanımlamalar Nasıl Yapılır?
categories: jquery
comments: 1
---

jQuery'nin ```.ajaxStart(), .ajaxStop(), .ajaxComplete(), .ajaxError(), .ajaxSuccess(), .ajaxSend()``` hepsinden ziyade ```.ajaxSetup()``` gibi hayat kurtaran fonksiyonlarından haberi olmayan geliştiriciler için oldukça faydalı olacağına inandığım bir konu ile giriş yapmaktan istedim yeni bloğumun ilk yazısına.

Bir web sitesi üzerindeki tüm ajax işlemleri için loading işlemi kodlarını ayrı ayrı tanımlamak yerine global bir tanımlama ile bunu çalışacak olan her ajax işlemi için sağlayabilirsiniz.

### .ajaxSetup()
Yukarıda listelediğim ajaxStart, ajaxStop, ajaxComplete, ajaxError, ajaxSuccess, ajaxSend fonksiyonlarının hepsini kapsayan genel bir fonksiyon.

Hemen örnek üzerinden gidelim.

{% highlight javascript %}
// Her ajax işleminden önce konsola "İstek gönderiliyor" yazdıralım
$.ajaxSetup({
  beforeSend: function() {
    console.log('İstek gönderiliyor...');
  }
});

$.ajax({
  url: 'http://google.com',
  type: 'GET'
});

// console output => "İstek gönderiliyor"
{% endhighlight %}

Yukarıdaki ajaxSetup tanımlamasıyla beraber artık çalışacak olan her ajax isteğinden önce konsola "İstek gönderiliyor" yazacaktır.

### Gerçek Dünyadan Bir Örnek

Geçen gün Laravel 5 ile çalışırken ajax isteği göndermek istediğimde ```TokenMismatchException``` hatası alıyordum. Normalde Laravel Form sınıfı otomatik olarak _token değerini gizli bir input ile ekliyordu fakat ben form kullanmadığım her ajax işleminde _token değerini tekrar tekrar eklemek zorunda kalıyordum. 

Her ajax işleminde gerçekleşen kod tekrarı aşağıdaki gibiydi

{% highlight javascript %}
var _token = $('meta[name="csrf-token"]').attr('content')
$.ajax({
  .
  .
  data: {
    _token: _token	
  }
  .
  .
})
{% endhighlight %}

Bu sorun üzerine ajaxSetup kullanarak her ajax işleminde _token datasını global olarak ekliyorum.

{% highlight javascript %}
var _token = $('meta[name="csrf-token"]').attr('content')
$.ajaxSetup({
  data: {
    _token: _token	
  }
})
{% endhighlight %}

### Peki global olarak eklenen tanımlamaları bazı ajax isteklerinde değiştirmek istersek?

Bu konuda da bir sorun yaşamıyorsunuz çünkü global olarak tanımladığınız değeri, herhangi bir ajax isteğinde tekrar tanımlarsanız en son tanımladığınız şekilde işliyor.

Kaynak: [api.jquery.com/jquery.ajaxSetup](https://api.jquery.com/jquery.ajaxsetup/){:target="_blank"}