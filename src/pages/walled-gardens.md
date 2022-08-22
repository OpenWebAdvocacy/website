---
title: 'Bringing Competition to Walled Gardens'
permalink: '/walled-gardens-report/'
layout: 'layouts/paper.njk'
metaDesc: 'The full Bringing Competition to Walled Gardens report, published by Open Web Advocacy.'
subtitle: 'Third Party Browsers & Web Apps - VERSION 1.2'
paperName: 'OWA - Bringing Competition to Walled Gardens - v1.2'
paperSize: '9.2MB'
---

<!--

Notes:

* Just use regular " quotes in blockquotes
* Use <cite> for blockquotes
* Do not include '.' in bold/italic styles

Todos:

* Check capitalization in headers. Sometimes We Do This, sometimes a Lot Less.
* Use 'third-party browser' (not 'third party browser')
  > Third party (without the '-') is used as a subject, not a modifier. (ex. The third party agreed to the rules.) Third-party (with the '-') is used as a modifier
* Clean up double spaces ('  ')
* Check if lists consistently end with a dot.
* Optimize images! There are 800+ kb pngs in there.
  > squoosh.app
  > can we make them `loading="lazy"` ? None of the images sits ATF.
* Speaking of optimizing,

? Replace all ’ with '
? Replace all “ and ” with "

?? Should we include `markdown-it-attrs`, so we can do ![](){loading=lazy}, **strong**{.stressed}

Styling:

* Refrain from doing italic, is hard to read?
  > Maybe opt for slab font for quotes?

-->

<style>

/** Add <p> styling for <bq /> */
.flow > blockquote > * + * {
  margin-top: var(--flow-space, 1em);
}
.flow > blockquote > p + p {
  margin-top: 0.8em;
}

/** Add <cite /> or <bq /> */
cite {
  font-size: 80%;
  margin-top: 0.8em;
  display: block;
}
cite:before {
  content: '\2014\00a0';
}

</style>

## 2. Preface

*To the Safari/Webkit Team*,

To anyone who works on Safari/Webkit who reads this document, the authors would like to note that all criticism of Safari/Webkit is aimed squarely at Apple and Apple's upper management.
We would like to acknowledge your many groundbreaking contributions to the Web over the past two decades.

As people that have dedicated their lives to building browsers we know you care deeply about the open web and may privately disagree with Apple's anti-competitive practices. We also understand that Safari/Webkit’s funding and which features are approved is entirely controlled from above. We understand that building a browser is an enormous, complex undertaking and that it’s not possible to keep up with a modern feature set while making the platform stable without significant investment, despite the hard-work and dedication of each individual.

We also understand that Apple operates under a paranoid air of strict secrecy which can make it difficult for you to engage properly with the development community and that employees can be fired for even mild criticism of the company making it hard for effective change from within. We hope that this document can help start that change.

Our main aim is to ensure open competition so that the Web and Web Apps can compete against the closed proprietary ecosystems. The future of the web is apps, if native can do it, so can the web except with privacy and security built in by design. It is our strong hope that Webkit will meaningfully participate in this future.

Many of us have developed with Safari and Webkit since it first came out and were inspired to build mobile web apps by Steve Job’s 2007 speech with the platform that your team built. The web we use today is built on your legacy.
It is our hope that with this competition Apple will come to realize the great importance of Safari and Webkit to their overall business goals and will provide the resources and funding to make it the best, most private, stable and feature rich browser available.

**Thank-you for your hard work and for everything you’ve given us**, we hope you will continue to fight for a better open-web.

## 3. Introduction

The entire future of the **consumer application industry** is being heavily limited by Apple’s ban of third party browsers. These actions prevent cross-compatibility between devices, and create significant barriers for new market entrants. For businesses and consumers, it greatly increases costs and enables Apple to lock them into their closed ecosystem. This reduces competition for both browsers and applications, and shifts the cycle of investment and funding from an open and free platform to proprietary closed platforms, driving up prices for consumers and developers.

**Apple has banned** competing **Third Party Browsers** from their iOS devices (iPhone and iPad) by requiring that all browser vendors use Safari’s WebView ([2.5.6 App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/#:~:text=2.5.6%20Apps%20that%20browse%20the%20web%20must%20use%20the%20appropriate%20WebKit%20framework%20and%20WebKit%20Javascript.)). Browser vendors are not allowed to ship their browsers which they have spent hundreds of thousands of hours developing and instead are forced to produce a separate browser which is essentially a thin wrapper or skin around the WebKit engine in Apple’s own browser, Safari.

Critically this browser ban prevents the *emergence* of an *open and free universal platform* for apps, where developers can build their application once and have it work across all consumer devices, be it desktop, laptop, tablet or phone. Instead it forces companies to create multiple separate applications to run on each platform, significantly raising the cost and complexity of development and maintenance. These costs are in addition to the 15% - 30% tax charged by the App Store. This greater cost is ultimately passed on to consumers in the form of higher fees, more bug prone applications and the applications not being available on all platforms. This then decreases competition with other manufacturers by depriving them of a healthy library of apps. The costs of developing an interoperable application that works identically are pushed so high that only well funded companies can afford it and as a result many useful or otherwise profitable applications never get built.

Apple is preventing the interoperable, standards-based web from becoming a viable alternative to the native proprietary ecosystems on offer from Apple and Google. In the absence of competition, the poor state of Apple’s own browser and integration of Web Apps has the effect of pushing developers and users towards the gated ecosystem of the App Store. Safari and Apple’s WebView frequently suffer simultaneous, critical application breaking bugs which spill into competing iOS browsers because they cannot bring their own engines which might not contain these bugs.

In a clear conflict of interest with third party browsers, **[Apple receives 15b USD per year for search engine placement](https://9to5mac.com/2021/08/25/analysts-google-to-pay-apple-15-billion-to-remain-default-safari-search-engine-in-2021/)** in Safari while ensuring other browsers can not effectively compete on iOS, its most popular operating system. Mozilla, a non-profit, produces a browser that consistently bests Apple’s in security and standards conformance with revenues of [less than $500 million per year](https://assets.mozilla.net/annualreport/2019/mozilla-fdn-2019-short-form-0926.pdf).

A lack of market pressure, combined with [alleged systemic underfunding](https://www.theregister.com/2021/06/16/apple_safari_indexeddb_bug/#:~:text=We%20asked%20Apple%20about%20the%20IndexedDB%20bug%20and%20whether%20its%20Safari%20team%20is%20understaffed%20compared%20to%20the%20competition.%20We%20would%20be%20stunned%20if%20it%20chose%20to%20reply.) over many years, prevents the web from becoming a viable application platform. The only way for developers to create stable, capable applications is to invest in Apple’s proprietary platform, which it taxes and retains exclusive control over.

Individual companies benefit greatly from locking users in and their competitors out. Apple hides behind claims of extra security and privacy when, in fact, their restrictions deprive the consumer of choice and locks their data and purchases into Apple’s walled garden. This prevents or adds great friction to users moving to competing platforms by hampering interoperability.

Web Apps add an extra layer of security and privacy controls to native application platforms, improving on the operating system’s built-in controls leading to enhanced user safety. If allowed, Web Apps can offer equivalent functionality with greater privacy and security for demanding use-cases that are traditionally the domain of less secure native apps. A free & universal development and distribution platform is what leads to competition and an investment cycle in free and open software that benefits businesses and consumers.

**Two key remedies** from regulation can serve to restore meaningful competition:

1. **Reversing Apple’s ban** on competing browsers and browser engines
2. Compelling **full integration and functionality** for apps built with open web technology, including on competing browsers

The future of consumer application development depends on these changes.

### 3.1 This Document

This document outlines the primary issues related to Browsers and Web Apps and the future of consumer application development.

### 3.2 Open Web Advocacy

Open Web Advocacy is a loose group of software engineers from all over the world, who work for many different companies who have come together to fight for the future of the open web by providing regulators, legislators and policy makers the intricate technical details that they need to understand the major anti-competitive issues in our industry and potential ways to solve them.

It should be noted that all the authors and reviewers of this document are software engineers and not economists, lawyers or regulatory experts. The aim is to explain the current situation, outline the specific problems, how this affects consumers and suggest potential regulatory remedies.

This is a grassroots effort by software engineers as individuals and not on behalf of their employers or any of the browser vendors. We came together with the hope of creating a better world since no major company has been pushing for this change in recent years. The majority of the engineers behind this document have decided to remain anonymous as no individual feels comfortable going up against the world’s most valuable company, particularly one that is so litigious.

We are available to regulators, legislators and policy makers for presentations / Q&A and we can provide expert technical analysis on topics in this area.

For those who would like to help or join us in fighting for a free and open future for the web, please contact us at:

<dl>
  <dt>Email</dt>
  <dd><a href="mailto:contactus@open-web-advocacy.org">contactus@open-web-advocacy.org</a></dd>
  <dt>Twitter</dt>
  <dd><a href="https://twitter.com/OpenWebAdvocacy">@OpenWebAdvocacy</a></dd>
  <dt>Web</dt>
  <dd><a href="https://open-web-advocacy.org">https://open-web-advocacy.org</a></dd>
</dl>

### 3.3 Definitions

**"Third Party Browser”** - A web browser developed by a company other than the gatekeeper which includes a layout engine and rendering engine either selected or built by the company.

**"Native App”** - An app written using a gatekeeper’s proprietary frameworks and APIs which are provided by the operating system. On iOS (Apple’s operating system for iPhone and iPad) these are currently exclusively delivered through Apple’s App Store.

**"Web App”** -  A Web Application, Web App or Progressive Web App (PWA) is an application developed using Web technologies, such as HTML, CSS, JavaScript and WebAssembly.  Web Apps use Web Browsers as the "engine” to run the Web App. The capabilities of a Web Apps depends on the level of advancement of the Web Browser that they run on. **Web Assembly** allows developers to bring existing software, for example game engines or photoshop, and port/convert them so they run on the web or as a web-app.

Web Apps can be made to run offline, can run as smoothly as native apps and can support high performance applications, but this functionality depends on the Web Browser.  Web Apps offer more privacy and security than native apps. Web Apps are universal, in that they can be written once and then run on all devices.  This is in comparison with native apps that have to be rewritten for each platform that they target.

To the end user a well written Web App should be indistinguishable from a native app.

**"WebView Browser”** - A web browser that does not include its own engine, and instead uses an engine or an unmodified "WebView” provided by the OS. For example all browsers on iOS other than Safari on iOS are WebView browsers, in that they do not render the website or run the code for the site and instead hand that job onto Safari WebView.

**"PWA (Progressive Web App)”** - Can be used interchangeably with Web App, although PWA is used to describe modern Web Apps with functionality that is typically associated with native apps rather than websites (i.e. installation on device, Offline Storage, Device API access etc). For the purposes of this document Web App and PWA will be treated identically.

**"Gatekeeper”** - The company that controls the operating system and the apps that run on that operating system (i.e. Apple with iOS, Google with Android).

**"Browser Vendor”** - The entity that makes the browser.

## 4. Effective Competition?

> "Businesses that face effective competition dare not raise prices, or cut down on quality standards, for fear of losing customers to their competitors (and so losing money)”
> <cite>[Dr Michael Grenfell](https://www.gov.uk/government/speeches/michael-grenfell-should-competition-authorities-intervene-in-digital-markets)</cite>

> "For the foreseeable future, iOS will be the dominant access pathway, passport, monetizer and platform for not just digital life, but virtual ones. Apple holds this role because it makes best-in-class hardware, offers the best apps, and operates the most lucrative app store.”
> <cite>[Matthew Ball - Venture Capitalist, Writer](https://www.matthewball.vc/all/applemetaverse)</cite>

iOS Safari faces no effective competition as Apple has banned the engines that differentiate other browsers. Customers have little recourse short of buying another phone.

The development, maintenance and lost opportunity costs of supporting a buggy browser that misses key features are mostly hidden from them. It is hard for consumers to see a missing feature or an entire Web App that didn’t get built (due to poor support in iOS Safari). When they do encounter a bug caused by Safari they are more likely to blame the Web App than the browser. The user may get the impression that the web is buggy, slow and that native apps are better, which then has negative flow on effects for the entire web ecosystem.

Businesses have little recourse as they can not suggest their customers install another real browser (there are none) and they are unwilling to lose more than half their mobile customers (51% in the UK, 66% in Japan, 56% in Australia, 46% in the US). Additionally iOS users tend to be wealthier and [spend more](https://www.entrepreneurshiplife.com/why-iphone-users-spend-more-money-than-android-users/) making them a higher priority for companies. In the end the majority of large businesses simply throw in the towel and make an iOS Native App and in doing so agree to pay Apple 15-30% of their revenue.

As such, Apple faces little effective competitive pressure to improve the quality of their iOS Safari browser and has incentives to inhibit it from competing with native. Thus Apple’s decade long prohibition on competition for Safari on iOS has a compounding anti-competitive effect as companies sink money into non-interoperable native iOS applications instead of Web Apps.

Even Apple executives appear to be aware only their stranglehold on iOS installation is allowing their 30% tax on revenue, something they can not achieve on Mac OS.

> "Neither is on the store because they don't have to be. They can be on Mac and distribute to users without sharing the revenue with us”
> <cite>[Philip Schiller - Apple Upper Management - On the Mac App Store](https://applescoop.org/story/apple-execs-discuss-why-the-mac-app-store-has-not-been-successful-in-internal-email)</cite>

## 5. Apple is Holding Back the Open Web

> "Instead, Apple is inhibiting this future Internet. And it does so via tolls, controls, and technologies that not only deny what made and still makes the open web so powerful, but also prevents competition, and prioritize Apple’s own profits.”
> <cite>[Matthew Ball - Venture Capitalist, Writer](https://www.matthewball.vc/all/applemetaverse)</cite>

> "Making the web less useful makes apps more useful, from which Apple can take its share; similarly, it is notable that Apple is expanding its own app install product even as it is kneecapping the industry’s.”
> <cite>[Ben Thompson - Stratechery](https://stratechery.com/2020/apple-and-facebook/)</cite>

### 5.1 Steve Jobs Original Vision for iOS

Steve Jobs’ original vision for third-party apps on iOS was quite different from today’s status quo.

The following is a transcript of a speech he gave announcing Web Apps as the platform for third-party iOS developers, including his thoughts on security, deployment, and criticisms of other distribution models (emphasis added):

> Now, what about developers?
>
> We have been trying to come up with a solution to expand the capabilities of iPhone by allowing developers to write great apps for it, and yet keep the iPhone reliable and secure. And we’ve come up with a very **sweet solution**.
>
> Let me tell you about it.
>
> So, we’ve got an innovative new way to create applications for mobile devices, really innovative, and it’s all based on the fact that iPhone has the full Safari inside. The full Safari engine is inside of iPhone and it gives us **tremendous capability**, more than there’s ever been in a mobile device to this date, and so you can write **amazing Web** 2.0 and Ajax apps that **look exactly and behave exactly like apps on the iPhone**!
>
> And these apps can **integrate perfectly** with iPhone services: they can make a call, they can send an email, they can look up a location on Google Maps. After you write them, you have **instant distribution**.
>
> You **don’t have to worry about distribution**: just put them on your internet server. And they’re really easy to update: just change the code on your own server, **rather than having to go through this really complex update process**.
>
> They’re secured with the same kind of security you’d use for transactions with Amazon, or a bank, and they run securely on the iPhone so they don’t compromise its reliability or security.
>
> And guess what: **there’s no SDK**! You’ve got everything you need, if you know how to write apps **using the most modern web standards**, to write amazing apps for the iPhone today.
>
> You can go live on June 29.
>
> <cite>[Steve Jobs - Original Announcement of Third-Party Apps (2007)](https://www.youtube.com/watch?v=p1nwLilQy64)</cite>

**Apple invented mobile Web Apps**, but ultimately decided on a proprietary closed ecosystem.

### 5.2 Apple Claims that Web Apps are a Viable Alternative to the App Store

[Web Apps are applications](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) installed from the browser that utilize the user's browser to give users an experience on par with Native apps. They are interoperable between operating systems, have a [very tight security/privacy model](very tight security/privacy model) and are capable of amazing things.

Apple’s original vision for applications on iOS was Web Apps, and [today they still claim](https://www.accc.gov.au/system/files/Apple%20Pty%20Limited%20%2810%20February%202021%29.pdf) Web Apps are a viable alternative to the App Store. Apple CEO Tim Cook made a similar claim last year in Congressional testimony when [he suggested](https://www.youtube.com/watch?v=H6eYLCxxQdA&t=306s) the web offers a viable alternative distribution channel to the iOS App Store. They have also [claimed](https://9to5mac.com/2021/03/25/bypass-the-app-store-says-apple) this during a court case in Australia with Epic.

Despite this Web Apps are not currently a viable competitor to the iOS App Store for three reasons:

1. **Browser Ban** <br />
Apple’s Safari is the only browser on iOS as all other browsers have been effectively banned
2. **Missing Features** <br />
Apple has refused to implement key features (some for more than 10 years) that would allow Web Apps to compete with the App Store, both in iOS and in Safari.
3. **Bugs** <br />
Apple's iOS Safari is significantly more buggy and unstable than its rivals making it unviable as a platform for applications.

### 5.3 Apple has effectively banned all Third-Party browsers

The Apple App Store Review Guidelines contain the [following rule](https://developer.apple.com/app-store/review/guidelines/#:~:text=2.5.6%20Apps%20that%20browse%20the%20web%20must%20use%20the%20appropriate%20WebKit%20framework%20and%20WebKit%20Javascript.):

> "2.5.6 Apps that browse the web must use the appropriate WebKit framework and WebKit Javascript.”

Webkit is the engine that powers Safari and several Linux browsers. Apple also produces a "WebKit framework” that is included in its operating systems (macOS, iOS, iPadOS, tvOS, and watchOS).

In practice, Section 2.5.6 is a requirement that iOS and iPadOS browsers from Google, Microsoft, Mozilla, Samsung, Opera cannot use their own engines the way they do everywhere else. These engines take hundreds of thousands of engineer hours to develop, and are excluded from Apple’s most successful consumer operating systems. Competing browser vendors are only allowed to produce shells around a very specific, unaltered version of Safari’s WebView; a component whose features Apple dictates.

All rival iOS browsers in the App Store are essentially Safari under the hood. This Browser Ban is unique to Apple’s iOS.

> "**Apple has a browser monopoly on iOS**, which is something Microsoft was never able to achieve with IE”
> <cite>[Scott Gilbertson - The Register](https://www.theregister.com/2021/10/22/safari_risks_becoming_the_new_ie/?td=keepreading-top)</cite>

> "All of this is compounded by yet another Apple policy: no third-party browser engines. You can install apps like Chrome, Firefox, Brave, DuckDuckGo, and others on the iPhone — but fundamentally they’re all just skins on top of Apple’s WebKit engine. That means that **Apple’s decisions on what web features to support on Safari are final**. If Apple were to find a way to be comfortable letting competing web browsers run their own browser engines, a lot of this tension would dissipate."
> <cite>[Dieter Bohn and Tom Warren - The Verge](https://www.theverge.com/2021/5/6/22421912/iphone-web-app-pwa-cloud-gaming-epic-v-apple-safari)</cite>

> "So it’s not just one browser that falls behind. It’s all browsers on iOS. The whole web on iOS falls behind. And iOS has become so important that **the entire web platform is being held back as a result**.”
> <cite>[Niels Leenheer - HTML5test](https://nielsleenheer.com/articles/2021/chrome-is-the-new-safari-and-so-are-edge-and-firefox/)</cite>

> "because **WebKit has literally zero competition on iOS**, because Apple doesn’t allow competition, the incentive to make Safari better is much lighter than it could (should) be."
> <cite>[Chris Coyier - CSS Tricks](https://css-tricks.com/ios-browser-choice)</cite>

> "What Gruber conveniently failed to mention is that Apple’s banning of third-party browser engines on **iOS is repressing innovation in web apps.**"
> <cite>[Richard MacManus - NewsStack](https://thenewstack.io/apples-browser-engine-ban-is-holding-back-web-app-innovation)</cite>

No other major operating system imposes a ban on integrated third-party browsers (browsers that include their own engines). Microsoft Windows, Android, Linux, and Apple’s own macOS all enable choice of integrated browser. Even Google’s ChromeOS, named after its browser, is more open to competing engines than iOS.

Despite this uniquely anti-competitive situation, Apple has managed to evade regulatory oversight.  Browser choice is what drives the technology forward which ultimately results in better, faster, more reliable software for users.

Microsoft’s IE6 was once the dominant browser with a 95% market share<sup>1</sup> due to its pre-installation on Windows. Without competition on the Windows platform, browser development remained stagnant for years until Firefox’s market share triggered Microsoft to start investing in browsers once again. At no point did Microsoft ban competing browsers as Apple has done.

<sup>1</sup> ["Usage share of web browsers - Wikipedia."](https://en.wikipedia.org/wiki/Usage_share_of_web_browsers) Accessed 23 Jun. 2021.


#### 5.3.1 Hobbled Competition even within Safari clones

Apple's hobbling of third party browsers doesn't stop at mandating a specific version of Webkit, Apple provides Safari significant unfair advantages.

The major issues include:

1. **Full Screen Video** <br />
Safari is allowed to make video full screen, the other “browsers” are prevented from doing so, except on iPad. <br />
It is hard to see the rationale for allowing it on iPad but disabling it on iPhone.

2. **Full Screen Games** <br />
Canvas, a software component, which is essential for Games can not be made full screen. **Apple derives most of their App Store revenue from games**.

3. **No Web Apps** <br />
The other “browsers” can not install Web Apps. Only Safari can.

4. **Extensions** <br />
Only Safari can use extensions which are used by many users, including to block advertising.

5. **Apple Pay** <br />
Apple limits the integration of Apple Pay with the other browsers.

6. **In-App Browsers** <br />
Regardless of the user’s default browser setting, iOS will always force the user to use Safari instead of the user’s choice of browser.  An In-App Browser is a browser that you would see inside an application like twitter when you visit a link from inside the application.

### 5.4 Safari Lags Behind and is Missing Key Features

It’s well known in the web-development industry that Safari is far behind on critical web-features (emphasis added).

> "The reason we **lost Safari on Windows** is the same reason we are **losing Safari on Mac. We didn't innovate or enhance Safari**. If you want to compete on something across all platforms, it needs to be the best. We had an amazing start on Safari and then **stopped innovating**. Now, we are starting to work on Safari again but look at Chrome. They put out releases at least every month while we basically do it **once a year**"
> <cite>[Eddy Cue - Apple's Senior Vice President of Services](https://www.theverge.com/22611236/epic-v-apple-emails-project-liberty-app-store-schiller-sweeney-cook-jobs)</cite>

> "Apple's Safari **lags considerably** behind its peers in supporting web features"
> <cite>[Scott Gilbertson - The Register](https://www.theregister.com/2021/10/22/safari_risks_becoming_the_new_ie/?td=keepreading-top)</cite>

> "Apple’s web engine **consistently trails** others in both **compatibility** and **features**, resulting in a large and persistent gap with Apple’s native platform."
> <cite>[Alex Russell -  Program Manager on Microsoft Edge](https://infrequently.org/2021/04/progress-delayed/#:~:text=The%20data%20agree%3A%20Apple%27s%20web%20engine%20consistently%20trails%20others%20in%20both%20compatibility%20and%20features%2C%20resulting%20in%20a%20large%20and%20persistent%20gap%20with%20Apple%27s%20native%20platform.)</cite>

> "Safari just doesn’t support key features — **and Safari’s the only option**"
> <cite>[Dieter Bohn and Tom Warren - The Verge](https://www.theverge.com/2021/5/6/22421912/iphone-web-app-pwa-cloud-gaming-epic-v-apple-safari)</cite>

> "It’s not just the lack of choice in browser engines on iOS, it’s that **WebKit itself is deficient as a browser engine**."
> <cite>[Richard MacManus - The New Stack](https://thenewstack.io/apples-browser-engine-ban-is-holding-back-web-app-innovation)</cite>

#### 5.4.1 Web Platform Tests

The [Web Platform Tests Dashboard](https://wpt.fyi/results/?label=experimental&label=master&aligned) shows this numerically by showing **every failure** that **only fails in just one browser**.

![Web platform tests result line chart showing higher Safari failure](/images/walled-gardens/00_web-platform-results.png)

As can be seen as at 10/11/2021, for each of the experimental builds of these browsers:

- <strong class="stressed">4180 Failures - Safari</strong>
- 1346 Failures - Firefox
- 494 Failures - Chrome

Safari is objectively lagging the competition, and this is likely because Apple has no browser competition on the operating system most important to their business, iOS.

The [Web Platform Tests Dashboard](https://wpt.fyi/results/?label=experimental&label=master&aligned) is a comprehensive test suite built by the developers of browsers themselves, including Mozilla, Google, Apple, Opera, and others. Not every browser supports every feature, and tests may vary in quality, but this is the closest to **"ground truth"** regarding the fine-grained detail of interoperability for all browsers. The failures listed above are **only** features that fail in just one browser.

#### 5.4.2 Progressive Web App Feature Detector

The [Progressive Web App Feature Detector](https://tomayac.github.io/pwa-feature-detector/) is a high-level test that can provide directional understanding for developers attempting to assess the suitability of Web Apps for addressing their needs. It contains a short but important list of features that are used throughout native apps. Below is a comparison showing Chrome 95 running on a Samsung Galaxy S20 on the left, and Safari running on an iPhone X with iOS 15.1 on the right.

<div class="gallery">
  <figure>
    <img src="/images/walled-gardens/01_pwa-features-chrome.jpg" alt="Chrome (Android) progressive web app feature detector results showing 18/18 feature support" />
    <figcaption>CHROME (Android)</figcaption>
  </figure>
  <figure>
    <img src="/images/walled-gardens/02_pwa-features-safari.png" alt="Safari (iOS) progressive web app feature detector results showing 6/18 feature support" />
    <figcaption>SAFARI (iOS)</figcaption>
  </figure>
</div>

#### 5.4.3 Missing Functionality

Safari – or more specifically the WebKit engine that powers it – is well behind the competition.

OWA identified the most important functionality specifically for Web Apps that are available on native or other browsers but missing in Safari.

![An overview of functionality available to both native and the web - except in Safari](/images/walled-gardens/40_missing-functionality.png)

This table exposes many anti-competitive issues, namely:

1. Competing Browser’s on iOS are unable to implement functionality that they can on Android
2. Apple has stagnated development and are many years behind the competition
3. All of the functionality listed above is available for iOS Native Apps
4. Google’s refusal to provide competitors a method of minting WebAPK’s prevents competing browsers from producing viable Web Apps.

##### 5.4.3.1. Install Prompts (7+ Years Behind)


------

> "TEXTTEXTTEXT"
> <cite>[]()</cite>
