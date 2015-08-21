---
title: Git Nedir, Neden Kullanmalıyız?
permalink: /git-nedir-neden-kullanmaliyiz
categories: [programming]
tags: [git]
references: [
  'https://tr.wikipedia.org/wiki/Git_(yaz%C4%B1l%C4%B1m)'
]
---

###Nedir?

<div class="alert">
	<h3>Wikipedia</h3>

	<p>GIT; yazılım geliştirme süreçlerinde kullanılan, hız odaklı, dağıtık çalışan bir sürüm kontrol ve kaynak kod yönetim sistemidir. İlk sürümü Linux çekirdeği'nin geliştirilmesinde kullanılmak üzere 2005 yılında bizzat Linus Torvalds tarafından tasarlanıp geliştirilmiş, son Eclipse kullanıcı topluluğu anketi verilerine göre 2013 yılı itibariyle %30 pazar payına ulaşmıştır.</p>

	<p>GIT sürüm kontrol sistemini kullanan her bir çalışma dizini (proje), internet erişimi ya da merkezi bir depo olmaksızın tüm tarihçeyi tutan ve sürüm kontrol sisteminin tamamını içinde barındıran tam yetkili birer depodur. Git'in şu anki yazılım bakıcılığını Junio Hamano üstlenmiş durumda. Git, GNU Genel Kamu Lisansı'nın 2. sürümüyle lisanslanmış bir özgür yazılımdır.</p>
</div>

Git, özellikle ekip olarak çalışılan projelerde herkesin aynı dosyalar ile karışıklık oluşmadan çalışabilmesine olanak sağlayan, sürüm kontrol ve kaynak kod yönetim sistemidir.

###Neden Kullanmalıyız?

Git kullanmadan yapılan geliştirme süreci ele alırsak; bir dosyada değişiklik yaptığım zaman ekip arkadaşıma dönerek **"register.php dosyasında değişiklik yaptım güncel halini ftp'den al"** şeklinde bir uyarı yapmam gerekiyor. 

Bir şekilde yapılan değişikliklerden haberdar olmazsak ve arkadaşımızın güncellediği dosya üzerinde biz de bir değişiklik yaparsak yaşayacağımız durum tam olarak şöyle olacaktır:

<iframe src="//giphy.com/embed/9FtD8pr41pYkM" style="width: 100%;"  height="350" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

> İlk iş deneyimimde ekip arkadaşım ile yaşadığımız bu durum istemsiz bir şekilde inatlaşma gibiydi. Onun değişiklik yaptığı dosyayı ben bozuyordum, benim yaptığımı o bozuyordu. :/ **İyi ki varsın Git!**

---

Git ayrıca bizi şu durumdan da kurtarır:

![](/public/img/posts/git/without-git.jpg)

Git sayesinde yaptığımız değişiklikleri ağrısız, sancısız geri alabiliriz. Ya da hangi versiyonda hangi değişiklikler yapılmış rahatlıkla kontrol edebiliriz.