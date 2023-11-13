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
  <article class="h-entry">
    <div class="[ post ] [ flow wrapper ]">
      <div class="post-meta">
        <time datetime="{{ item.data.date | w3DateFilter }}" class="dt-published">{{ date | dateFilter }}</time>
        {% if tags %}
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
        {{ item.content | safe }}
      </div>
    </div>
  </article>
  {% endfor %}
{% endblock %}