---
title: PHP 7 İle Gelecek 2 Yeni Operatör
permalink: /php-7-ile-gelecek-2-yeni-operator
categories: [programming]
tags: [php, php-7]
---

PHP 7 ile gelecek olan özellikleri gördükçe bu sürümün bir önce yayınlanması için gittikçe daha fazla heyecanlanıyorum.

Şuanda PHP 7'yi mevcut haliyle denemek isteyenler beta sürümünü [şu linkten](http://php.net/index.php#id2015-07-24-1){:target="_blank"} indirebilir. 

Ya da isterseniz [PHP7-tutorial.com](http://php7-tutorial.com/){:target="_blank"} adresinden online olarak yeni özellikleri deneyebilirsiniz.

<hr>

PHP 7 ile gelecek olan bir çok yenilik var. Bu yeniliklere [wiki.php.net](https://wiki.php.net/rfc#php_70){:target="_blank"} sayfasından gözatabilirsiniz. Bu blog gönderisinde sadece yeni iki operatör olan **Spaceship Operator** ve **null coalesce operator** den bahsedeceğim.

### Spaceship Operator (<=>)

if else kontrol yapısını kolaylaştıran bir kısaltma diyebiliriz. 

$a ve $b karşılaştırdığımızı varsayalım

{% highlight php %}
<?php  
  // eski yol
  ($a < $b) ? -1 : (($a > $b) ? 1 : 0)

  // artık şu şekilde de yapabilirsiniz
  $a <=> $b
?>
{% endhighlight %}

### null coalesce operator (??)

Aynı Spaceship operatörü gibi bu operatör de sıkça kullanılan bir if else kontrolü için kısaltmadır.
Bu operatörün sembolü "??".

Bu operatör, değer olarak atanan değişkenin varlığını kontrol eder ve eğer tanımlıysa var olan değeri atar. Eğer bu değişken tanımlanmamışsa ön tanımlı olarak belirtilen değeri atar. Aşağıdaki örnek ile daha iyi anlayabilirsiniz:

{% highlight php %}
<?php  
  // eski yol
  $a = (isset($b)) ? $b : '0';

  // yeni yol
  $a = $b ?? 0;
?>
{% endhighlight %}

Bu iki operatör sayesinde kodların okunabilirliği biraz daha artacak. Özellikle ikinci operatör gerçekten çok iyi oldu tam bir işkenceydi :))