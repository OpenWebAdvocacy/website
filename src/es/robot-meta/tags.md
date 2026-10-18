---
title: Tag Archive
layout: layouts/feed.njk
pagination:
  data: collections
  size: 1
  alias: tag
  filter:
    - all
    - nav
    - blog
    - work
    - featuredWork
    - people
    - rss
    - links
    - press
permalink: '/es/tag/{{ tag | slug }}/'
noSocialImage: true
---
