---
title: "28% Faster: The Blink Prototype That Shows Why Apple's iOS Browser Engine Ban Must End"
date: '2026-06-18'
tags: ['Policy', 'Apple', 'EU', 'Japan', 'WebKit', 'Blink']
author: "OWA"
---

**TL;DR: Newly published tests show a Chromium/Blink prototype running on iOS is 28.6% faster than Safari in Speedometer 3.1 page responsiveness tests. The tests also highlight a significant number of web features already available in the prototype but which rival browser vendors are blocked from bringing to iOS. This is a clear example of how much Apple's browser engine ban is costing consumers, businesses and the Web.**

## New iOS Blink Performance Statistics

> The Edge web platform team has been contributing changes to Chromium to help build a prototype exploring what an iOS browser using Blink (via BrowserEngineKit) can achieve. Blink is the same open-source rendering engine that powers Edge on every other platform.</br></br>
> Over the weekend, I loaded a development build on my iPhone and ran some classic browser benchmarks side by side with Safari on the same device.

[Newly reported by The Register](https://www.theregister.com/software/2026/06/17/apples-webkit-performance-tax-leaves-ios-browsers-stuck-in-the-slow-lane-says-microsoft/5257384), on Tuesday [an Edge engineer published some very interesting statistics](https://www.linkedin.com/pulse/test-drive-blink-ios-kyle-pflug-0nyxc/) on the new Chromium prototype running on iOS 26.5.1 and how it stacks up compared to Safari.

<figure>
    <img alt="Screenshot of a prototype benchmark comparison for Chromium/Blink versus Safari/WebKit on iOS. Three cards show Chromium ahead of Safari on an iPhone 17 Pro Max running iOS 26.5.1: Speedometer 3.1 web responsiveness, 49.27 vs 38.3, listed as +28.6%; JetStream 3 JavaScript and Wasm throughput, 306.35 vs 270.9, listed as +13.1%; and MotionMark 1.3.1 graphics rendering, 4,773.52 vs 4,673.68, listed as about +2.1%." src="/images/blog/blink-on-ios-speedometer.png">
    <figcaption>Blink vs WebKit performance tests running on a iPhone 17 Pro Max</figcaption>
</figure>

Speedometer is a browser-performance benchmark originally developed by Apple. Apple’s WebKit team described Speedometer as [“the best way yet to measure browser performance”](https://webkit.org/blog/15131/speedometer-3-0-the-best-way-yet-to-measure-browser-performance/). 

The tests show the Chromium (Blink) prototype is a striking 28.6% faster at web responsiveness than iOS Safari (and every other browser on iOS forced to use the bundled WebKit engine).

What makes this even more significant is that to the best of our knowledge, teams working at Microsoft and Google have not put any significant effort into optimising the engine on iOS.

> Given how Chromium and WebKit are always vying for the top spot in Speedometer on macOS, it's really striking how big the gap is on iOS\! And **we haven't even really tried to optimize performance for that platform yet\!** IMHO this is what you should expect to see when there's a lack of competition\!  
> <cite>[Rick Byers \- Principal Engineer on Chromium](https://www.linkedin.com/pulse/test-drive-blink-ios-kyle-pflug-0nyxc/)<br>(emphasis added)</cite>

A natural question arises: how could a browser engine, not yet optimised for iOS, outperform Safari by such a large margin? Surely a company as well-resourced as Apple should be able to deliver competitive performance on its own platform.

In our view, the answer is lack of competition. Apple had no need to invest in better iOS Safari performance as no one could compete with them due to their browser engine ban. All other browsers on iOS are equally under-performant due to being forced to use the same bundled WebKit engine.

## Missing Features

Also published were some interesting feature comparisons using [Microsoft Edge’s top developer needs dashboard](https://microsoftedge.github.io/TopDeveloperNeeds/) highlighting a number of features the prototype supports that Safari (and by extension of Apple’s browser engine ban, all other browsers on iOS) do not.  

<figure>
    <img alt="Two iPhone screenshots compare feature support for Blink on iOS versus WebKit on iOS. The left phone, labeled “Chromium 151.0.7882.0,” shows a prototype Blink on iOS page where selected top developer needs are supported: CSS corner-shape, CSS calc-size(), JavaScript Temporal, and four listed features: reading-flow, Scheduler API, moveBefore(), and requestIdleCallback(). The right phone, labeled “Safari 26.5.1,” shows the production WebKit on iOS version of the same page, with the same features marked “not available here” or “0 of 4 supported.” A caption below says the selected feature tests come from a Top Developer Needs dashboard and represent progress toward resolving developer pain points and closing interoperability gaps." src="/images/blog/blink-on-ios-feature-tests.png">
    <figcaption>Blink vs WebKit feature tests running on a iPhone 17 Pro Max</figcaption>
</figure>

> This dashboard represents our view of progress across the web ecosystem towards resolving top developer pain points and closing interoperability gaps. For each feature listed below, the relevant browser compatibility status, as well as the most recent stable channel test results from the Web Platform Tests (WPT) or test262 projects, are given.
> <cite>[Microsoft Edge \- 2026 web platform top developer needs](https://microsoftedge.github.io/TopDeveloperNeeds/)</cite>

As you can see from the chart below, while there have been improvements, Safari lags significantly behind Edge, Chrome and Firefox.  

<figure>
    <img alt="Line chart showing browser test progress from July 2025 to May 2026, measured as the sum of passed WPT subtests and test262 tests. Safari, shown in purple, remains far behind the other browsers throughout the period, starting around 1,500 passed tests, stepping up to about 4,700 in September 2025, and making only slight gains to just over 5,000 by May 2026. Edge and Chrome rise from roughly 15,000 to around 24,000 passed tests, Firefox improves from about 11,000 to 18,000, and the “All subtests” total increases from around 22,000 to about 25,500. The chart highlights that Safari has improved modestly but still trails substantially behind Chrome, Edge, and Firefox." src="/images/blog/top-developer-needs.png">
    <figcaption>2026 web platform top developer needs</figcaption>
</figure>

## Apple is Imposing a Cost on Consumers, Businesses and the Entire Web

This is a clear example of the costs Apple imposes on consumers and businesses worldwide, costs created by its 17-year ban on competing browser engines. Even [in the EU](https://open-web-advocacy.org/blog/apples-browser-engine-ban-persists-even-under-the-dma/) [and Japan](https://open-web-advocacy.org/blog/how_apples_key_tactic_could_prevent_japans_smartphone_act_from_improving_browser_competition/), where Apple is now legally required to allow browser vendors to use their own engines, [the barriers it has put in place ensure browser vendors are prevented from porting their own engines to iOS](https://open-web-advocacy.org/blog/apples-browser-engine-ban-persists-even-under-the-dma/).

Apple is setting a ceiling on the entire mobile web. This harms the web’s performance, features [and security](https://open-web-advocacy.org/blog/uk-regulators-final-verdict--apples-browser-engine-ban-harms-competition/#apple-security-justification-for-banning-rival-browser-engines). It also lowers Apple’s incentives to seriously invest in Safari as it has no fear of losing market share to competitors who could produce superior browsers for iOS. As the web is itself a platform, this harms not only browser vendors and their users, but every business that relies upon the web.

## Why the Web Needs to Be Allowed to Compete

Browser engines are not ordinary app components. They are the foundation of the web platform, determining which web features are available, how fast web applications run, how secure users are, and whether web apps can compete with native apps. If Apple continues to control the only browser engine on iOS, then it continues to control the practical boundaries of the mobile web. That undermines the DMA’s goal of opening core platform services to genuine competition.

Unlike app stores and the operating systems they live in, the web is open, interoperable, and available to businesses of every size without asking permission from any gatekeeper. But the web can only compete if browsers can compete. If Apple can restrict browser engines on iOS, it can limit what the mobile web is capable of, and keep businesses dependent on native apps and app store rules. 

Given that Apple has now had more than two years to produce a compliant solution, the European Commission needs to open a specification proceeding to instruct Apple, in precise terms, how these barriers must be removed. This is, in our view, the most critical intervention the EU could possibly make, and the one most likely to reshape the entire mobile ecosystem. No other intervention comes close.