---
serie: 'solid_serie'
title: SOLID - Nedir, Neden İhtiyaç Duyulmuştur?
permalink: /solid-nedir-neden-ihtiyac-duyulmustur
categories: [programming]
tags: [solid, programming, principles]
references: [
  'https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)',
  'http://www.codemag.com/article/1001061',
  'http://www.slideshare.net/dumural/solid-tasarm-prensipleri',
  'http://www.tarikkaygusuz.com/post/solid-prensipleri',
  'http://www.clubcrema.com/index.php/2013/05/solid-prensipleri-solid-principles/',
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
SOLID, 2000'li yılların başında Robert C. Martin tarafından nesne yönelimli programlamanın ve nesne yönelimli tasarımın 5 temel prensipleri bir araya getirilerek ortaya çıkmıştır.

<!-- Neden İhtiyaç Duyulmuştur -->

### Neden İhtiyaç Duyulmuştur?

Programcılar yıllarca karşılaştıkları problemlere ürettikleri çözümleri standartlaştırarak tasarım desenlerini ortaya çıkardılar. Tasarım desenleri her ne kadar kendi başlarına sorunları çözüyor olsalar da büyük resme bakıldığında ortaya çıkan yeni sorunlar vardı. Bunlar kötü tasarımı da tanımlayan:

- Esnemezlik (Rigidity)
- Kırılganlık (Fragility)
- Sabitlik (Immobility) 

sorunlarıydı. SOLID ile bu sorunlara çözüm üretmek amaçlanmıştır.

**Esnemezlik:** Kullanılan tasarımın geliştirilememesi ve ekleme yapılamaması 

**Kırılganlık:** Bir yerde Yapılan değişikliğin başka bir yerde sorun çıkartması

**Sabitlik:** Geliştirilmiş modülün başka yerde tekrar kullanılabilir (reusable) olmaması