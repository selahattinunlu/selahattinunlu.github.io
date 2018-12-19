---
title: Karmaşık Uygulamalar İçin Firebase Verinizi Doğru Şekilde Planlamak
permalink: /karmasik-uygulamalar-icin-firebase
categories: [programming]
tags: [firebase,nosql]
---

### Firebase Nedir?

Firebase, sunucuya bağlı bütün clientları gerçek zamanlı senkronize bir şekilde tutmamızı sağlayan popüler backend servisidir. AngularJS, EmberJS, Backbone.js, iOS, OSX, Android gibi platform ve frameworkleri; Ruby, Nodejs, Python, Java, Clojure, PHP, Perl & Javascript gibi programlama dillerini destekler. Firebase veri değişikliğini diğer clientlara anında iletmek için web soketlerini kullanır.

### Veri Depolama Formatları

Diğer bir çok NoSQL veritabanı sistemleri (MongoDB, Cassandra CouchDB vb.) gibi verileri büyük JSON dökümanları olarak saklar. Key-Value şeklinde depoladığımız veriler string, number ya da bir nesne olabilir.

### Firebase'de Veriyi Yönetmek

Firebase, veriyi yönetmemiz için harika bir arayüz sağlıyor. Diğer veritabanı yönetim sistemlerinin arayüzleri gibi verideki değişiklikleri görmek için tarayıcıda yenilemeye ihtiyaç duymuyorsunuz, anlık olarak yeni eklenenler, silinenler ya da değişiklik yapılanlar yeşil, sarı, kırmızı gibi renklerle gösteriliyor.

### Firebase'de Veriyi Planlama Problemi

Hepimiz uzun zamandır SQL tabanlı ilişkisel veri depolamaya alışkınız. NoSQL dünyası ise oldukça farklı ve verilerinizin şemasını oluşturmak başlangıçta problem olabiliyor. Bu makalede bu sorunu derinlemesine bir şekilde anlayarak, güzel bir çözüm üretmeye çalışacağız.

### Örnek Veri Şeması

![](/public/img/posts/firebase/example-data-schema.png "Örnek veri şeması")

#### İlişki Gereksinimleri

1. Bir kullanıcı bir grubun parçası(üyesi) olabilir.
2. Bir grup birden fazla kullanıcı(üye) içerebilir.
3. Tek bir kullanıcı ya da gruptaki bir bölüm kullanıcı güncellenebilir.

### SQL Veritabanı Sistemlerinde İlişkilerin Kurulması

Bu tarz ilişkilerin SQL veritabanından kurulması için "user-group" tarzında ekstradan bir tabloya ihtiyacımız olduğunu biliyoruz. Bu tabloda kullanıcı ve grubu referans olarak gösteren "user_id" ve "group_id" sütunları oluşturuyoruz.
Bu şekilde bir tablodan veri getirmek sql joinler ile oldukça kolaylaşsa da Firebase'de Join işlemleri bulunmuyor.

### Firebase'de İlişkilerin Kurulması

Firebase'de "user_belong_to_groups" tarzında many to many ilişkileri kuramıyoruz. Çünkü Firebase herhangi joins sorgularını desteklemiyor.

Bunun yerine iç içe (nest) verileri kullanabiliriz. Örneğin, users isminde bir property ile kullanıcıları dizi olarak tutabiliriz. Aynı şekilde her kullanıcının da updates özelliği (property) altında yaptığı paylaşımları dizi olarak tutabiliriz. (Buradaki paylaşımdan kasıt twitter gibi durum paylaşımı)

Bunun sonucunda ortaya çıkacak olan verimiz şu şekilde gözükecektir:

{% highlight javascript %}
// JSON Structure for Data which has nested Objects
"data":{
  "groups":{
     "group1"{
            "group_name":"Administrators",
            "group_description":"Users who can do anything!",
            "no_of_users":2,
            "users":{
                "user1": {
                    "username":"john",
                    "full_name":"John Vincent",
                    "created_at":"9th Feb 2015",
                    "updates": {
                            "update1":{
                                "update_text":"New feature launched!",
                                "created_at":"13th Feb 2015",
                                "sent_by":"user2"
                        }
                    }
                },
                "user2": {
                    "username":"chris",
                    "full_name":"Chris Mathews",
                    "created_at":"11th Feb 2015"
                }
            }
        },
     "group2"{
            "group_name":"Moderators",
            "group_description":"Users who can only moderate!",
            "no_of_users":1,
            "users":{
                "user1": {
                    "username":"john",
                    "full_name":"John Vincent",
                    "created_at":"9th Feb 2015"
                }
            },
            ,
            "updates": {
                    "update2":{
                        "update_text":"Users should expect blackout tomorrow!",
                        "created_at":"19th Feb 2015",
                        "sent_by":"user1"
                }
            }
        }
    }
}
{% endhighlight %}

Peki üstte yer alan verideki problemler nelerdir:

- Bir kullanıcı birden fazla gruba üyeyse tüm kullanıcı verisini olduğu gibi kopyalamamız gerekecek. Gereksiz veri kirliliği oluşur.

-  user objesine erişim için direkt olarak userid kullanamayız.

- Bir kullanıcının üye olduğu tüm grupları bulmak oldukça zahmetli olacak.

- Bu tarz bir yapıda izinleri uygun bir şekilde tanımlayamayız.

### Problemi Çözelim

Firebase'de, NoSQL veriyi yönetmek için bazı temel ilkelere uymak zorundayız. Bu ilkelere bağlı kalarak uygulamamızın okuma yazma gibi işlemlerdeki performansını arttırabiliriz.

#### 1 - Flatten (Denormalize)

