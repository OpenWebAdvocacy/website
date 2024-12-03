---
title: News
permalink: /ja/blog/
metaDesc: Check out the most recent blog posts from Open Web Advocacy.
templateEngineOverride: njk
translated: false
---
{% extends 'layouts/base.njk' %}
{% block content %}
<h1 class="post-title">{{ title }}</h1>
  {% for item in collections.blog %}

  <article class="h-entry blog-index">
    <div class="[ post ] [ flow wrapper ]">
      <h2 class="post-title"><a href="{{ item.url | locale_url }}" class="post-list__link">{{ item.data.title }}</a></h2>
      <div class="post-meta">
        <time datetime="{{ item.data.date | w3DateFilter }}" class="dt-published">{{ item.data.date | dateFilter }}</time> 
        <p>Written by {{ item.data.author }}</p>
        {% if item.data.tags %}
          <ul class="tags-list" aria-label="Tags">
            {% for tag in item.data.tags %}
              <li>
                <a href="/tag/{{ tag | slug }}/" class="p-category">#{{ tag | replace(' ', '') | capitalize }}</a>
              </li>
            {% endfor %}
          </ul>
        {% endif %}
      </div>
      <div class="post-content flow">
        {{ item.content | excerpt }} <a href="{{ item.url  | locale_url }}">Continue reading</a>
      </div>
    </div>
  </article>


   
  {% endfor %}
{% endblock %}
