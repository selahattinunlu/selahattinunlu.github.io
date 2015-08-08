---
title: SOLID - Nedir, Neden İhtiyaç Duyulmuştur?
permalink: /solid-nedir-neden-ihtiyac-duyulmustur
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

> Bu yazı ["SOLID Prensipleri"](/seriler/solid-prensipleri) yazı dizisinin bir parçasıdır.
>
> 1 --- Nedir, Neden İhtiyaç Duyulmuştur?
>
> 2 --- [Single Responsibility Prensibi](/solid-single-responsibility)
>
> 3 --- [Open - Closed Prensibi](/solid-open-closed)
>
> 4 --- [Liskov Subsitution Prensibi](/solid-liskov-subsitution)
>
> 5 --- [Interface Segregation Prensibi](/solid-interface-segregation)
>
> 6 --- [Dependency Inversion Prensibi](/solid-dependency-inversion)

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