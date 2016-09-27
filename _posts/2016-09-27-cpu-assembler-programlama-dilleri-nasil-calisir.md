---
title: CPU, Assembler, Programlama Dilleri Nasıl Çalışır?
permalink: /cpu-assembler-programlama-dilleri-nasil-calisir
categories: [programming]
tags: [programming]
references: [
  'http://www.codeproject.com/Articles/315505/How-processor-assembler-and-programming-languages'
]
---

<div class="alert-box">
    <h2 class="title">Dikkat</h2>
    
    Bu makale <a href="http://www.codeproject.com/Articles/315505/How-processor-assembler-and-programming-languages" target="_blank">coreproject.com</a>'da yer alan makalenin çevirisidir. Çeviride hatalı olduğunu düşündüğünüz yerler varsa ya da eksik bilgiler olduğunu düşünüyorsanız <a target="_blank" href="https://github.com/selahattinunlu/selahattinunlu.github.io/blob/master/_posts/2016-09-27cpu-assembler-programlama-dilleri-nasil-calisir.md">Github</a> üzerinden düzeltmeler yaparak katkı sağlayabilirsiniz.
</div>

### Giriş

Bilgisayarınızın nasıl çalıştığını merak ediyor olabilirsiniz. Bir program yazıp, derlediğinizde neler gerçekleşiyor vs. Assembly nedir ve Assembly ile programlamanın temel prensipleri nelerdir?

Bu makale ile tüm bunları açıklamaya çalışacağız. Makalenin amacı size Assembly ile programlamayı öğretmek değil bunu unutmayın. Daha çok, tam olarak neler gerçekleştiği ile ilgili temel bilgileri vermeyi hedefliyor. Bu arada, yüksek seviyeli dillerle programlama konusunda deneyiminizin olduğunu varsayıyorum.

### İşlemci Nasıl Çalışır?

CPU'nun (CPU - Central Processing Unit ya da basitçe işlemci) bilgisayarınızın beyni olduğunu, bilgisayarın yaptığı her türlü işlemleri kontrol eden parçası olduğunu biliyorsunuzdur. Ama tüm bunları nasıl gerçekleştiriyor?

İşlemci, talimatları işlemek üzere tasarlanmış  bir devredir (circuit). Çalıştırılacak talimatlar bilgisayarın belleğinde (memory) tutulur. Buna işletim belleği denir. Memory’yi büyük ızgara hücreleri (grid of cells) olarak düşünebilirsiniz. Her hücre küçük sayılar depolayabilir ve her biri kendine ait eşsiz (unique) bir numaraya yani adrese sahiptir. İşlemci, hücrenin memory adresini söyler ve memory bu adreste depolanan değeri cevap olarak işlemciye iletir. (bu arada numara dediğimiz harf, grafik, ses olarak düşünülebilir çünkü herşey sayısal değerlere çevirilebilir). Aynı zamanda işlemci, memory’de belirttiği adrese (hücreye) yeni bir sayısal değer kaydedilmesini isteyebilir.

Yukarıda bahsettiğimiz talimatların kendileri de aslında temel olarak sayılardan ibarettir. Her basit işlem, eşsiz (unique) sayısal kodlara atanmıştır. İşlemci bu sayıları alır ve ne yapması gerektiğine karar verir. Örneğin 35 sayısı işlemcinin bir veriyi memory’deki bir hücreden diğerine kopyalamasını sağlarken, 48 sayısı iki sayının toplanmasını belirtebilir. Mesela 12'de basit mantıksal bir işlem olan “OR”un işlenmesini söyleyebilir.

Hangi operasyonun hangi sayılara atanacağına işlemciyi tasarlayan mühendisler karar verir. Bu kurallar dizisine **architecture** yani **mimari** denir. Bu şekilde belirtilen mimariyi destekleyen farklı çeşitlerde (hız, güç tüketimi ve fiyat olarak birbirinden ayrılan) işlemciler üretilse de aslında hepsi aynı kodları aynı talimatları anlayacaktır.

İşlemci kod ile belirtilen işlemi (talimatı) tamamladığında, sıradaki talimatı soracak ve bu döngü bütün işlem boyunca tekrarlanacaktır. Fakat bazen, memory’deki farklı bir alana geçmesi gerektiğine de karar verebilir. Örneğin: subroutine (function)ler çalıştırılması gerektiğinde aynı döngüyü bu fonksiyon için de gerçekleştirip daha sonra kaldığı yerden devam edecektir. Bu arada programı oluşturulan sayısal kodlar dizisi **makine kodu** olarak adlandırılır.

### Talimatlar Nelerdir ve Nasıl Kullanılır?

Belirtildiği gibi bu talimatlar işlemcinin işleyebileceği çok basit görevler ve her biri unique kodlara sahip. İşlemciyi oluşturan devre, memory’den yüklediği kodlara göre verilen işlemleri gerçekleştirecek şekilde tasarlanmıştır. Bu sayısal kodlara genellikle **“opcode”** (operation code - makine dili komutunun gerçekleştirilecek işlemi belirtilen kısmı) denir. [Wikipedia - İşlem Kodu - Opcode](https://tr.wikipedia.org/wiki/%C4%B0%C5%9Flem_kodu)

Talimatların gerçekleştirdiği işlemler genelde çok basit işlemlerdir. İşlemciye basit talimatlar dizisi vererek spesifik bir görevi yapmasını sağlayabilirsiniz. Ancak çok basit işlemler için bile sayısal kod dizileri yazmak oldukça can sıkıcıdır. (Uzun yıllar önce programlama bu şekilde gerçekleşiyordu). Tabii bu sıkıcı işlemler sonucunda **“Assembly”** programlama dili oluşturuldu. Assembly, opcode’ları ne yaptığının anlaşılabildiği sembol (isim)lere atar.

35 sayısının işlemciye veriyi bir memory hücresinden diğerine taşıması ile ilgili talimat olduğunu söylediğimiz örneği hatırlayın. Assembly bu talimatı “Move”’un kısaltması şeklinde **“MOV”** komutuna atar. 48 yani bir sayının diğerine eklenmesi talimatını **“ADD”** komutu olarak, 12 ile belirtilen “OR” mantıksal operasyonunu **“ORL”** komutu olarak isimlendirir.

Programcılar bu komutları kullanarak artık çok daha kolay komut dizileri yazabilir. Ayrıca bu komutları okumak, opcode’u okumaktan çok daha kolaydır.

Programcı komutlarını yazdıktan sonra **“Assembler”** olarak adlandırılan aracı çalıştırır. Bu araç sembolleri (MOV, ADD vs) işlemcinin anlayıp çalıştırabileceği sayısal kodlara (opcode) çevirir.

Örnek bir assembly kodu:

`MOV 1258, 1000`

Bu kod, 1000 adresindeki veriyi 1258 adresine taşır. Burada şunu da belirtmek de fayda var: Assembly dilinde genelde ilk önce “hedef” (target) parametresi daha sonra source yani kaynak parametresi verilir.

### Mimariler ve Assembly Dilleri

Mimari teriminden daha önce bahsetmiştik.
Mimari, bir işlemcinin özelliklerini belirtir. Bunları şöyle sıralayabiliriz:

- Hangi işlemleri yapabileceğini
- Hangi opcode’un hangi talimat için olduğunu
- Kaç register’ı olduğunu ve bunların neler olduğunu (Küçük depolama alanları direkt olarak işlemcinin kendi içindedir ve burada geçici veri depolanabilir)
- Diğer chip ve cihazlarla (memory, grafik kartı vs) nasıl iletişime geçeceği.

Tüm bunların anlamı, talimatlardaki farklılıklar dolayısıyla her işlemcinin kendine ait bir Assembly diline sahip olduğudur. Bu nedenle Assembly dili **tek bir dil değildir.** Birbirilerinden işleyebileceği talimatlar noktasında farkları olsa da temel prensipleri aynıdır ve birbirlerine oldukça benzerlerdir. Kısacası bir işlemci mimarisinin verdiği Assembly dili prensiplerini anladığınız zaman diğerlerini anlamanız, öğrenmeniz oldukça kolaydır.

Assembly dilinin, sadece tek bir spesifik mimari için kullanıldığını anlamak oldukça önemlidir. Örneğin, bir çok kişisel bilgisayar **x86** denen mimariyi kullanır. Eğer bu mimari için programlamak istiyorsanız x86 assembly dilini kullanmanız gerekir. Çoğu mobil cihaz **ARM** denilen mimariyi kullanır. Yani, bu mobil cihazlara programlama yapmak için ARM Assembly dilini kullanırsınız. Sega Genesis gibi eski konsollara programalama yapmak isterseniz **68000 Assembly dili**ni kullanırsınız çünkü bu konsol Motorola 68000 işlemciye sahiptir. Çeşitli amaçlar için yüzlerce çeşit işlemci mimarisi mevcut. Yani bu örnek böyle uzar gider...

Ayrıca söylediğim gibi; piyasada hızına, fiyatına, güç tüketimine göre ayrışan bir çok işlemci var. Ama bunların çoğu aynı mimariyi destekler. Böylece verilen Assembly dilinde yazılan programlar bazılarında yavaş bazılarında hızlı olsa da çalışacaktır.

Yalnız şunu unutmayın, **sadece tek bir mimari için oluşturulan programlar, farklı işlemci mimarisinde opcodeların farklı olması, desteklediği talimatların farklı olması sebebiyle çalışmaz.**

### Yüksek Seviye Programlama Dilleri İhtiyacı ve Derleyiciler (High Level Programming Languages and Compilers)

High level programlama dillerine duyulan ihtiyaç, muhtemelen bildiğiniz iki büyük problem sonucu ortaya çıkmıştır. 

- Bunlardan ilki, karmaşık programlar yaratmak için onları basit talimatlara bölmek gerekiyordu. Yani daha kompleks işlemler demek daha fazla talimat yazmanız anlamına geliyordu. Bu hem can sıkıcı hem de zaman gerektiren bir iş.
- İkinci sorun ise zaten bahsettiğimiz, bir mimari için yazılan programın bir diğerinde olduğu gibi baştan yazmadan çalışmaması. Yüksek seviyeli diller bu problemleri ortadan kaldırır.

### Programın Karmaşıklığı

Örneğin 2 + (7 - 3) * 2 gibi karmaşık bir işlemi yaptırıcağınızı varsayalım. İşlemci bu tarz bir şeyi direkt olarak yapamaz. Makalenin başında da defalarca belirttiğimiz gibi işlemci sadece çok basit işlemleri gerçekleştirebilir. Yani eğer bu kodu işlemleri Assembly dili ile yazmak isterseniz, tüm bu hesaplamaları işlemcinin desteklediği basit operasyonlara bölmeniz gerekir.

- İlk önce parantez içerisindeki işlemi 7’den 3’ü çıkarmayı yaparsınız.
- Daha sonra sonucu 2 ile çarparsınız
- Ve son olarak sonuca 2 eklersiniz. Ardından sonucu Register A’da depoladığınızı varsayalım.

Yani assembly kodumuz şu şekilde olacaktır.

<div class="alert-box">
    <h2 class="title">Not</h2>
    Aşağıda # işareti ile belirttiğimiz sayılar Assembly’de gerçek sayıları ifade eder. Yani "#2” 2’yi ifade eder memory’deki adresini değil. Ve ayrıca “;” kullandığımız satırlar yorum satırıdır kodun bir parçası değiltir.
</div>

```
SUB #3, #7 ; 7’den 3’ü çıkar ve sonucu Register A’da tut.
MUL A, #2  ; Register A’daki değeri 2 ile çarp ve sonucu yine Register A’da    tut.
ADD #2, A  ; Register A’daki değere 2 ekle ve sonucu Register A’da tut.
```

Tabi burada sabit sayılar kullandık. Eğer memory’deki değer ile hesaplama yapamız gerekirse durum şöyle olacaktı.

```
MOV B, 202 ; Memory’nin 202 adresindeki değeri B’ye taşı
MOV A, 201 ; Memory’nin 201 adresindeki değeri A’ya taşı
SUB A, B  ; Register A’daki değerden Register B’yi çıkar ve sonucu RegisteA’da tut.
MOV B, 203 ; Memory’nin 203 adresindeki değeri B’ye taşı
MUL A, B  ; RegisterA ve RegisterB’deki değerleri çarp.
```

Gördüğünüz gibi bu şekilde basit işlemler için bile satırlarca kod yazmamız gerekiyor.


### Derleyici (Compiler) Nerede Devreye Giriyor


Az önce yaptığımız, ifadeleri küçük parçara bölme, memory adreslerini tutma (değişkenlerde) gibi görevleri compiler bizim yerimize yapıyor! Programlama dilleri ne tarz ifadeleri kullanarak programlar yazabileceğinizi tanımlar ve compiler bu ifadeleri destekler. Yani basitçe şöyle bir program yazabilirsiniz.

```
int a, b, c, d, e;
a = 2;
b = 7;
c = 3;
d = 2;
e = a + (b - c) * d;
```

Bu kodu derlediğinizde, derleyici kodu analiz (parse) eder ve istediğiniz beş değişkeni bulur. Bu değişkenlerin hangi memory hücrelerinde saklanacağını belirlemek zorunda değilsiniz. Bunların hepsini sizin yerinize derleyici hallediyor. örneğin a değişkenimiz 200 adresinde b değişkenimiz 201 adresinde depolacak vs. Dolayısıyla yine derleyici bu atamaların takibini gerçekleştirir ve bu değişkenleri nerede kullanırsanız memory adresinden bu değeri alabilecektir.



### Yorumlanan Diller (Interpreted Languages)

    

Yorumlanan dillerde işlemcinin anlayabileceği native dilde yazılan bir yorumlayıcıya ihtiyaç duyulur.  Programı çalıştırdığımızda, yorumlayıcı yazılan kodu okur ve hedef mimariye göre o anda çevirir.

Bu yaklaşımın taşınabilir olması, güvenli olması, esnek olması gibi avantajları vardır. Programınızı bir kere yazarsınız ve değişiklik yapmadan her mimaride çalıştırabilirsiniz.

Bu yaklaşımın olumsuz yönü ise yavaşlığıdır. Çünkü a=5 gibi bir atama için işlemciye düzinelerce talimat çalıştıracaktır. Fakat bu yavaşlık dediğim sizi korkutmasın, yavaşlıktan kasıt derlenen dillere göre olan yavaşlığı. Fakat bunlar için de çeşitli çözümler var ve genelde problem olmuyor bizler için :)


---

### Sonuç

Eğer buraya kadar gelebildiyseniz tebrikler! Umarım işlemcinin çalışmasıyla ilgili bazı sırları anlamanıza ve assembly(low-level) ile high level programlama arasındaki ilişkiyi anlamanıza yardımcı olabilmişimdir.

Hatalı kısımlar varsa yorumlarınızda belirtirseniz sevinirim.
Okuduğunuz için teşekkürler.