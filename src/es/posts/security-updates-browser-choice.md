---
title: iOS Safari zero-day security bugs and how browser choice affects user safety
date: '2023-12-05'
tags:
  - Security
  - Browsers
author: Frances Berriman
permalink: /es/blog/security-updates-browser-choice/index.html
layout: layouts/post.njk
translated: false
---

In the last couple of weeks we've seen a few browser security bugs pop up, giving us the opportunity to talk about how a competitive landscape for web browsers is vital to protecting users online.

## Nasty Bugs All Around

Firstly, we saw a [set of zero-day bugs identified in Webkit](https://www.infosecurity-magazine.com/news/apple-patches-actively-exploited/). Apple landed a fix for those in a [subsequent iOS update](https://support.apple.com/en-us/HT214031).

Secondly, a [nasty security bug in Google Chrome](https://nvd.nist.gov/vuln/detail/CVE-2023-6345), also subsequently [patched.](https://www.malwarebytes.com/blog/news/2023/11/update-now-chrome-fixes-actively-exploited-zero-day-vulnerability)

Both bugs were “high” severity, meaning attackers could compromise devices using malicious web pages. This is your friendly reminder to make sure your devices are up to date!

## Compare and Contrast

What's different about these two situations? 

If a security bug shows up on a browser on Android, MacOS, Windows or most other OSs, users can opt to pick a different browser for a time until a patch has landed and their browsing experience is safe again. If their browser has a bad security track record, they can also switch to a better built one. Additionally, Chrome or any other browser on Android etc., can be patched without OS updates. Users don't have to wait for a new version of Android, wait for huge downloads, or reboot their devices.

Users on iOS are less fortunate. Having [no other browsers to choose from](/walled-gardens-report/#apple-has-effectively-banned-all-third-party-browsers), they must hope that the security update doesn't catch them out in some way as they wait for an iOS update, as Safari isn't able to independently ship changes. With no choice, they have no option to wait it out on safer shores.

This choice of software architecture - coupling a browser to an OS, or not - has been played out before. It wasn't long ago that Windows users had to wait for OS updates to receive patches for IE [because it was so tightly tied to OS components.](https://learn.microsoft.com/en-us/troubleshoot/developer/browsers/installation/prerequisite-updates-for-ie-11) Microsoft’s strategy handicapped their ability to keep browsers current. Eventually, they changed the design with Chromium-based Edge because decoupled updates are safer. Even without that design change, Windows users still had choices available to them in times of need. 

All users deserve to have that choice.
