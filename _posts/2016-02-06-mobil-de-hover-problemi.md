---
title: Mobil'de Hover Problemi Nasıl Çözülür?
permalink: /mobil-de-hover-problemi-nasil-cozulur
categories: [programming]
tags: [css, tips]
---

Kendi web sitemi düzenlerken yaşadığım bir problem üzerine bu blog yazısını eklemeye karar verdim.
Böylece hem aynı sorunu yaşayanlar yararlanabilir hem de ben ileride bu yazıyı referans alarak
tekrar aynı sorunla karşılaşırsam çözüm için zaman kaybetmem.

---

<div class="alert-box">
   <h3 class="title">Uyarı</h3>

   Öncelikle iOS üzerinde deneyerek problemi çözdüğüme kanaat getirdim. Android üzerinde henüz deneme yapmadım.
</div>

Mobil cihazlarda masaüstü gibi mouse ile bir şeyin üzerine gelme durumumuz yok. Yani **":hover"** state'i
aslında masaüstüne özgü bir state. Dolayısıyla çözüm olarak yapılması gereken en temel şey tasarım aşamasında bu durumu göz önünde bulundurmak ve ona göre planlamak.

Eğer sizlerde benim gibi bu durumu göz ardı ettiyseniz o zaman çözüme doğru gidelim.

### Problem

Mobil cihazların ":hover" state'ine sahip olmayışını göz ardı ederek yapılan tasarım.

### Çözüm

**Birinci çözüm** tasarımı tekrar gözden geçirmek ve gerekli düzeltmeleri gerçekleştirmek.

**İkinci Çözüm** kodlarımıza bir kaç ekleme yaparak hover state'ini taklit etmek.

Aslında mobil tarayıcılarda butonlara tıkladığınızda hover state'ini tetiklediğini görmüşsünüzüdür.

Fakat tıklanabilir olmayan bir element için hover durumunu tetiklememiz gerekiyorsa yapabileceklerimiz:

#### Cursor:pointer

Bir `div` ya da herhangi tıklanabilir olmayan bir element için css'de `cursor:pointer` deklerasyonunu yaptığınız zaman
Chrome bu element'in tıklanabilir bir element olduğunu anlayarak bu elemente tıklanıldığında **"hover"** state'ini tetikliyor.

Fakat Safari'de sorun hala devam ediyor.

#### onclick=""

Tüm tarayıcılarda sorunu çözen genel tanımlama sanırım bu. Element'e `onlick=""` tanımlaması yaptığımız zaman Chrome da Safari de bu element tıklanabilir olduğu için `hover` state'ini tetikliyor.

Tek tek elementlere `onlick=""` tanımlaması yapmakla uğraşmamak için bunu JavaScrip ile halledebilirsiniz.

