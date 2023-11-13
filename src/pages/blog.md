---
title: 'News'
permalink: '/blog/'
metaDesc: 'Check out the most recent blog posts from Open Web Advocacy.'
templateEngineOverride: njk
---
{% extends 'layouts/base.njk' %}
{% block content %}
  <h1>{{title}}</h1>
  {% for item in collections.blog %}
      <div class="entry">
        <h2><a href="{{ item.url }}" class="post-list__link">{{ item.data.title }}</a></h2>
        {{ item.data.content }}
      </div>
  {% endfor %}
{% endblock %}