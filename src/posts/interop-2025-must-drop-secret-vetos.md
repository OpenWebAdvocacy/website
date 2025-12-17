---
title: "Interop 2025 must drop secret vetos"
date: '2024-10-10'
tags: ['Apple', 'Google', 'Microsoft', 'Mozilla', 'Interop']
author: "OWA"
---

**TLDR: Interop uses secret vetos, mobile NOT included in interop scores, Critical Safari scroll issues need fixing.**

 **Please consider giving a 👍 to these issues:**

1. [Interop Lack of Transparency & Accountability](https://github.com/web-platform-tests/interop/issues/888)  
2. [Mobile Testing Results for Interop/WPT](https://github.com/web-platform-tests/interop/issues/891)  
3. [Scrolling on Mobile Devices](https://github.com/web-platform-tests/interop/issues/788)  
4. [Advanced Web Testing (Web Driver BiDi)](https://github.com/web-platform-tests/interop/issues/763)

The voting process for Interop proposals is done in **secret** and each browser vendor involved can veto any feature without any transparency. Browser Vendors can sift through interop proposals and exclude items they believe are too difficult or don’t match their internal corporate goals. This is bad for the web and against the principle of openness and transparency that web standardization efforts rely on.  

We propose that any votes or vetoes are made public with attribution, and any reasons for not proceeding with a particular feature are posted in the github issue along with attribution.  

**We need your help to push for it to happen\!**

## What is Interop?

Interop is a collaborative project between browser vendors to reduce compatibility issues between browsers so the code we write works the same on all devices and all browsers.

> The web is amazing. It makes collaborating, learning, and connecting easy for billions of people, because it’s intentionally designed to run **on radically different devices**. </br></br>
> It’s your job as a web developer to ensure your project works in every browser and for every user — and that can be hard to do. It’s a far easier undertaking when browsers have identical implementations of the web technology you use. 
> <cite>[Webkit blog on the aim of Interop](https://webkit.org/blog/14955/the-web-just-gets-better-with-interop/)</br>(emphasis added)
</cite>

## Interop Lack of Transparency & Accountability

We believe that standards based efforts between browser vendors such as Interop should be transparent and public.

As mentioned above the current interop veto process is secret, leading to lack of transparency over why issues are not included or not included.

This lack of transparency has already been negatively received by developers and has been a source of mistrust and dissatisfaction with the Interop process:

> Fans of the spec bemoan lack of transparency in Interop 2024 process
> <cite>[Thomas Claburn \- The Register](https://www.theregister.com/2024/02/03/jpeg_xl_interop_2024/)
</cite>

> That's it? That's the response to what is, by several times, the most requested feature in Interop 2024? No explanation for rejecting the feature that got 4.5x more support than the runner-up? Really? 
> <cite>[Tibet Tornaci](https://github.com/web-platform-tests/interop/issues/430#issuecomment-1923216914)
</cite>

A more open voting process ensures that decisions are made in the best interest of the broader developer and user community, helping to ensure that the web evolves in a way that is fair, inclusive, and sustainable.

Give a **👍** here: [Interop Lack of Transparency & Accountability · Issue \#888](https://github.com/web-platform-tests/interop/issues/888)

## Mobile Testing Results for Interop & WPT

Currently the Interop process misleadingly implies that the scores cover mobile browsers. 

Given that mobile devices make up the vast majority of all personal computers and accounts for the majority of global web traffic, the test results for mobile are significantly more important than the desktop results.

We believe that Interop 2025 should include:

* Building and Running Mobile Test Harnesses for WPT  
* Include Mobile Test Results in Interop  
* Upgrading WebDriver

Give a **👍** here: [Mobile Testing Results for Interop/WPT · Issue \#891](https://github.com/web-platform-tests/interop/issues/891)

## Scrolling on Mobile Devices 

The inability to reliably block body scroll in Safari/Webkit and have a consistent scrolling experience across browsers on mobile devices is a very significant long-standing issue which greatly increases the difficulty of building advanced user interfaces and remains a significant compatibility issue between browsers.

This is critical to building native-like or more complex interfaces on iOS.

Give a **👍** here: [Scrolling on Mobile Devices · Issue \#788](https://github.com/web-platform-tests/interop/issues/788)

## Advanced Web Testing (WebDriver BiDi)

This issue isn’t posted by OWA but is an important one to allow for improved browser testing.

WebDriver BiDi is a new protocol for browser automation. It extends the “classic” WebDriver protocol by introducing bidirectional communication. In place of the strict command/response format of WebDriver, this permits events to stream from the browser to the controlling software, better matching the evented nature of the browser.  

Primarily this will lead to better testing for browsers and hopefully less bugs for the rest of us. It is also the only thing that will allow for testing of some of the more advanced browser features.

Give a **👍** here: [WebDriver BiDi · Issue \#763](https://github.com/web-platform-tests/interop/issues/763)

## How can you help?

Please 👍 and/or comment on these tickets. If you have expertise or knowledge that will improve these issues please either email us or comment on the issue.