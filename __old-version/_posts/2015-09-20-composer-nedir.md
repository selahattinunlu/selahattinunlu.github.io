---
serie: composer_serie
title: Composer - Nedir?
permalink: /composer-nedir
categories: [programming]
tags: [composer, php]
references: [
  'https://getcomposer.org/'
]
---

Composer, PHP için bağımlılık yönetim aracıdır. (Python için "Pip" ve NodeJS için "npm" gibi.)

Projenizin ihtiyaç duyduğu kütüphaneleri bir json dosyasında belirtmenize ve "install", "update" komutları ile yükleyip güncellemenizi sağlar.

###Kurulum

Kurulum için komut satırında girmeniz gereken komut (curl kütüphanesi yüklü olmalıdır.)

{% highlight sh %}
curl -sS https://getcomposer.org/installer | php
{% endhighlight %}

Bu komut "composer.phar" adlı dosyayı o an bulunduğunuz dizine indirecektir. "composer.phar" dosyasını herhangi bir dizinde bulundurabilirsiniz fakat çalıştırmak için bulunduğu dizine girerek `php composer.phar` komutunu yazmak durumunda kalırsınız.

Tabi bu hiç kullanışlı değil. Komut satırında herhangi bir dizindeyken "composer" komutunu çalıştırabilir olmak çok daha kullanışlı.

###Global Erişim

Bunun için indirdiğimiz "composer.phar" dosyasını "/usr/local/bin" dizinine taşıyacağız.

{% highlight sh %}
sudo mv composer.phar /usr/local/bin/composer
{% endhighlight %}

Artık `composer [update/install/vb]` komutları global olarak herhangi bir dizinde çalıştırabilirsiniz.

