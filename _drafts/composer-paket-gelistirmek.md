---
title: Composer - Paket Geliştirmek
permalink: /composer-paket-gelistirmek
categories: [programming]
references: [
  'http://culttt.com/2014/05/07/create-psr-4-php-package/'
]
---

###Klasör Yapısı

İlk olarak geliştirmeyi yapacağımız dizinde yeni paketimiz için bir klasör oluşturuyoruz.
Yeni paketimizin adının "Foo" olduğunu varsayalım. 

"foo" klasörünü oluşturun.

Bu klasörümüzün içerisine paketimize ait bütün kodların yer alacağı "src" klasörünü ekleyin. 

Ardından komut satırında şu komutu çalıştırın

{% highlight sh %}
   git init
{% endhighlight %}

Bu komut yeni bir Git reposu oluşturacak. Php paketleri geliştirmek için git bir gerekliliktir.

###Composer

"foo" klasörü içerisinde "composer.json" dosyası oluşturun ve altta yer alan kodları içerisine ekleyin.

{% highlight json %}
{
    "name": "Unlu/Foo",
    "description": "Foo is a composer package. Uhh are you serious?",
    "license": "MIT",
    "keywords": ["foo"],
    "authors": [
        {
            "name": "Selahattin Ünlü",
            "email": "selahattin.unlu@yandex.com"
        }
    ],
    "require": {},
    "require-dev": {},
    "autoload": {
        "psr-4": {
            "Unlu\\Foo\\": "src"
        }
    }
}
{% endhighlight %}

composer.json dosyası paketiniz hakkındaki bilgileri tanımlar. 
Yukarıda görebildiğiniz gibi bir isim, açıklama, lisanslama ve paketi geliştiren olarak 
kendimize ait bilgileri belirttik.

Bu dosyada 3 önemli bölüm var. Bunlar `require`, `require-dev` ve `autoload`.

`require`, paketiniz için gerekli olan bağımlılıkları listelediğimiz bölümdür.

`require-dev`, paketi geliştirmek için geliştirme ortamında ihtiyaç duyulan bağımlılıkların
listelendiği bölümdür. Örnek olarak testleri de yazacağınızı varsayarsak 
"PHPUnit" bu bölüme eklenebilir.

Ve son olarak `autoload`, paketinizin otomatik yüklemeleri nasıl yapacağını belirtir.
PHP-Fig tarafından oluşturulan standartlarda şuan önerilen autoloading standardı `psr-4`dür.

<div class="alert"> 
   <h3>Dikkat</h3>
   21.10.2014 itibariyle `psr-0` autoloading standardı <a href="http://www.php-fig.org/psr/psr-0/" target="_blank">önerilmiyor</a>. Alternatif olarak `psr-4` önerilmektedir.
</div>

Biz de bu örneğimizde **psr-4** standartını kullanıyoruz. Bu standarta göre ilk parametre olarak namespace, ikinci parametrede hangi dizini kök dizin olarak baz alması gerektiğini belirtiyoruz. 

Böylece src dizinimizin namespace'i `Unlu\Foo` oldu.

Dosyayı kaydettikten sonra komut satırına gidin ve şu komutu çalıştırın:

{% highlight sh %}
   composer install
{% endhighlight %}

Bu komut sizin için bir `vendor` dizini oluşturacak ve ihtiyaç duyduğunuz bağımlılıkları bu dizin içerisine ekleyecek.

###Dot Files

