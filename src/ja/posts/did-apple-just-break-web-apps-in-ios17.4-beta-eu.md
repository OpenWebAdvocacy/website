---
title: Did Apple just break Web Apps in iOS 17.4 Beta (EU)?
date: '2024-02-03'
tags:
  - Apple
  - EU
  - Safari
author: James Moore
permalink: /ja/blog/did-apple-just-break-web-apps-in-ios17.4-beta-eu/index.html
layout: layouts/post.njk
translated: false
---

[We have been alerted](https://twitter.com/mysk_co/status/1753402489049616427) that Apple has broken Web App (PWA) support in the EU via iOS 17.4 Beta. Sites installed to the homescreen failed to launch in their own top-level activities, opening in Safari instead. This demotes Web Apps from first-class citizens in the OS to mere shortcuts. Developers confirmed the bug did not occur [outside the EU](https://twitter.com/mysk_co/status/1753402489049616427).

This bug should have been picked up within seconds of testing any Web App. So how did this issue slip through? One possibility is Web Apps aren’t routinely tested by the Safari or iOS teams and that automated regression testing is not in place. This might explain the parade of show stopping iOS Web App bugs that shipped to stable over the past 15 years. 

Another explanation might be the complexity posed by Apple’s  [mess of a compliance proposal](/blog/owa-review-apple-dma-compliance-for-web/) which creates a separate version of iOS for the EU. We wrote about [the testing problems Apple’s proposal looks set to cause web developers](/blog/developers-react-apple-eu-dma-compliance/), and perhaps Apple is the first casualty of this self-defeating attempt at geofencing browser progress. 

The author of this article can not even personally test this due to not being physically located in the EU. This is the madness that Apple's malicious and spiteful Digital Markets Act compliance proposal will inflict on web developers and businesses globally.

This is almost certainly a bug, but it gives rise to suspicion among the developer community thanks to Apple’s long history of [neglect and denial of features for iOS Safari](/walled-gardens-report/#safari-lags-behind-and-is-missing-key-features). The choice to underinvest might only be problematic, save for [Apple's effective ban of third party browsers.](/walled-gardens-report/#apple-has-effectively-banned-all-third-party-browsers) Because third-party browsers cannot provide their own Web App features, if it doesn't work in iOS Safari, it doesn't work on iOS.

The UK’s Competition and Markets Authority noted Apple’s potential App Store revenue protection motive:

> Apple generates revenue through its App Store, both by charging developers for access to the App Store and by taking a commission for payments made via Apple IAP. Apple therefore benefits from higher usage of native apps on iOS. By requiring all browsers on iOS to use the WebKit browser engine, **Apple is able to exert control over the maximum functionality of all browsers on iOS** and, as a consequence, hold up the development and use of web apps. This limits the **competitive constraint that web apps pose on native apps**, which in turn protects and benefits Apple’s App Store revenues.
> <cite>[UK CMA - Interim Report into Mobile Ecosystems](https://www.gov.uk/government/publications/mobile-ecosystems-market-study-interim-report)
(emphasis added)</cite>

Despite this, Apple has always claimed that Web Apps are the alternative to their app store:

> For everything else there is always the open Internet. If the App Store model and guidelines are not best for your app or business idea that’s okay, we provide Safari for a great web experience too.
><cite>[Apple App Store Guidelines](https://developer.apple.com/app-store/review/guidelines/)</cite>

Recently, an argument between David Heinemeier Hansson (“DHH”) and Apple erupted over what DHH took to be a threat to eject the HEY email/calendar from their App Store if they didn’t share revenue:

> Apple just called to let us know they're rejecting the HEY Calendar app from the App Store (in current form). Same bullying tactics as last time: Push delicate rejections to a call with a first-name-only person who'll softly inform you it's your wallet or your kneecaps.
><cite>[David Heinemeier Hansson - Creator of Ruby on Rails and CEO of Hey](https://twitter.com/dhh/status/1743341929675493806)</cite>

When DHH announced that he would promote and build tooling for Web Apps, [Apple quickly backed down and approved the app:](https://twitter.com/dhh/status/1744745276932604413)

> We're going to make Rails 8 the damn best framework for creating full-stack PWAs. Web Push, badges, install prompts, service workers, the works. I was motivated before, but now it's really on. Let's get back to making apps where we don't have to beg for permission or mercy!
><cite>[David Heinemeier Hansson - Creator of Ruby on Rails and CEO of Hey](https://twitter.com/dhh/status/1743664413964374505)</cite>

Netflix also made waves when it declined to port their app to Apple's new AR/VR headset, the Apple Vision Pro:

> Our members will be able to enjoy Netflix on the web browser on the Vision Pro, similar to how our members can enjoy Netflix on Macs
><cite>[Netflix](https://variety.com/2024/digital/news/apples-vision-pro-netflix-youtube-spotify-1235877784/)</cite>


Upon release it was revealed that Apple had [astonishingly entirely removed the ability to install Web Apps from their headset](https://twitter.com/SteveMoser/status/1749438049300124008). This is a brazen omission in the current regulatory moment

All of this leads to intense suspicion in the developer community.

The simple fact is it doesn't matter if this is incompetence or malice, the end result is the same. Unusably poor support for Web Apps on iOS. Apple does not face effective browser competition, leading to show stopping iOS web bugs with shocking regularity. 

Imagine now that genuine and effective browser competition was allowed on iOS. 
Under these conditions, showstopping Safari bugs would allow developers to recommend more capable browsers. This, in turn, would force Apple to invest in Safari, reducing the incidence of terrible web experiences for iOS users. This would lead to a vibrant, capable web that would unlock investment by developers and businesses, allowing them to deliver services via the web to iOS users.

Browser competition is critical for security, functionality, stability and privacy. It is this competition that Apple has denied iOS since its inception and that must be restored globally, not just in the EU.
