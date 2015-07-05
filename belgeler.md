---
layout: page
title: Belgeler
---

### Algoritmalar
{% for post in site.algoritmalar %}
  * &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}

### Tasarım Desenleri
{% for post in site.tasarim-desenleri %}
  * &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}

### Yazılım Prensipleri
{% for post in site.yazilim-prensipleri %}
  * &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}

### Yazılımcılar
{% for post in site.yazilimcilar %}
  * &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}