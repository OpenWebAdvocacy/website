---
title: 'News'
permalink: '/blog/'
metaDesc: 'Check out the most recent blog posts from Open Web Advocacy.'
templateEngineOverride: njk
---
{% extends 'layouts/base.njk' %}
{% block content %}
<h1 class="post-title">{{ title }}</h1>
  {% for item in collections.blog %}

  <article class="h-entry blog-index">
    <div class="[ post ] [ flow wrapper ]">
      <h2 class="post-title"><a href="{{ item.url | locale_url }}" class="post-list__link">{{ item.data.title }}</a></h2>
      {% set date = item.data.date %}
      {% set author = item.data.author %}
      {% set tags = item.data.tags %}
      {% include "partials/post-meta.njk" %}
      <div class="post-content flow">
        {{ item.content | excerpt }} <a href="{{ item.url  | locale_url }}">Continue reading</a>
      </div>
    </div>
  </article>


   
  {% endfor %}
{% endblock %}