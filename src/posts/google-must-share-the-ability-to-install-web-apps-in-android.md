---
title: "Google must share the ability to install Web Apps in Android"
date: '2024-09-19'
tags: ['Policy', 'Google', 'Australia', 'EU', 'Japan', 'UK']
author: "OWA"
---

**TLDR: For 7 years, Google has failed to keep its commitment to share the ability to install Web Apps with third-party browsers on Android, despite [public requests](https://issues.chromium.org/issues/40195497) from Samsung, Microsoft, Brave & Kiwi browser. With regulatory intervention from the EU, Japan and the UK that may be changing.**

Share and join the conversation: [X/Twitter](https://twitter.com/OpenWebAdvocacy/status/1836647016052724100), [Mastodon](https://mastodon.social/@owa/113162700151879686
).

In 2015, Google introduced a method on Android to install Web Apps and subsequently replaced it with a better system called "WebAPK minting" in 2017. This system allows Chrome on Android to install Web Apps that integrate well with the operating system. At the time, now more than 7 years ago, [Google promised to share this with third-party browser vendors](https://web.dev/webapks/). However, as of today this functionality is still exclusive to Chrome on most Android devices (Note: Samsung has implemented their own version for Samsung Internet on Samsung devices).

> **QUESTION: I am a developer of another browser on Android, can I have this seamless install process?**<br><br>
> We are working on it. We are committed to making this available to all browsers on Android and we will have more details soon.
> <cite>[Google - On WebAPK minting (7 years ago)](https://web.dev/webapks/)</cite>

## What is WebAPK minting?
A [WebAPK](https://web.dev/webapks/) is a thin wrapper Native App that provides a splash screen, system launcher integration, and system settings configuration points. When launched, a WebAPK essentially starts a tab in the browser which installed the WebAPK, loading the specific URL the Web App developer configures.

All native apps on Android are packaged as APKs, either via an app store such as Google Play or via sideloading. WebAPKs allow Web Apps to be integrated into the OS for the purposes of discoverability, permissions management, shortcut creation, registering url with the operating system (so links will open in the web app instead of a browser tab) and uninstallation. This means that web apps installed as WebAPKs are able to be shown in Android’s app drawer and search, system app pages such as apps, storage, screen time and battery usage, and shown without a browser badge.

<figure>
    {% image
        "/images/blog/webapkminting.png",
        "Example of installing web apps on Android."
    %}
    <figcaption>Left to right: narrow.one installed on Chrome, Firefox & Edge. Only the WebAPK version is able to be shown anywhere other than this homescreen.</figcaption>
</figure>

Android’s security model is built around signed native APKs. In order for Web Apps to integrate properly on Android without significant architectural changes, Web Apps need to be wrapped in a signed native APK. This allowed Google to support Web Apps across existing versions of Android without having to introduce a new architecture to support Web Apps and wait for years for it to be updated.

## Why is not sharing it bad?

First, this damages competition between browsers on Android. By controlling WebAPK minting, Google stifles innovation in the browser market. Other browsers cannot offer the same seamless and native-like PWA install experience as Chrome on Android, limiting their ability to compete. This behaviour unfairly allows Google to provide better functionality for Chrome than other browsers on Android phones. It also means that only Google can decide what functionality Web Apps should have and makes it impossible for other browsers to effectively compete in the provision of Web App features.

Second, this limits the end user's choice of browser when it comes to Web Apps. They are essentially forced to use Chrome if they want the best Web App experience. Users should be free to choose browsers that offer better Web App functionality, but this is impossible if other browsers are prevented from installing them.

Finally, this damages the Web App ecosystem. Web Apps are the only open and interoperable competitor to the Android and iOS app stores. Allowing them to flourish will apply significant competitive pressure on the mobile app stores.

Opening up WebAPK minting would benefit developers and businesses by making it easier for them to reach a wider audience with their Web Apps. This can result in cheaper, higher quality software that automatically works on all major platforms.

Web Apps installed through other browsers are not as integrated with the Android system as those installed through Chrome. This can lead to a less user-friendly experience for consumers. Some features of Web Apps do not work as well or at all when installed through other browsers. This can limit the functionality and usefulness of Web Apps for consumers.

One of Google's stated goals is to promote open web standards, and [they are a supporter of the open web foundation](https://en.wikipedia.org/wiki/Open_Web_Foundation#:~:text=According%20to%20its%20web%20site,Google), yet they contradict this by keeping WebAPK minting closed and exclusive to Chrome.

## OWA’s Work

We have been campaigning for the last 3 years to fix this issue. We have made our case to multiple regulators including the [Australian Competition and Consumer Commission](https://open-web-advocacy.org/files/OWA%20-%20ACCC%20(Australia)%20-%20Response%20to%20Discussion%20Paper%20for%20Interim%20Report%20No.%205%20-%20v1.0.pdf), [Japan's Head Quarters for Digital Competition](https://open-web-advocacy.org/files/OWA%20-%20HDMC%20(Japan)%20-%20Competition%20in%20the%20Mobile%20App%20Ecosystem%20-%20v1.1.pdf), [the UK's Competition and Markets Authority](https://assets.publishing.service.gov.uk/media/66d6d1d5c63bb34da0709f21/OWA_WP_1__2__3__4__5___6_-_TO_BE_PUBLISHED.pdf) and [the EU Commission](https://open-web-advocacy.org/files/OWA%20-%20DMA%20Interventions%20-%20Web%20App%20Install%20on%20Android%20-%20v1.0.pdf).

> Google’s refusal to provide competitors a method of minting WebAPK’s prevents competing browsers from producing viable Web Apps.
> <cite>[Walled Gardens Report (2021)](https://open-web-advocacy.org/walled-gardens-report/#:~:text=Google%E2%80%99s%20refusal%20to%20provide%20competitors%20a%20method%20of%20minting%20WebAPK%E2%80%99s%20prevents%20competing%20browsers%20from%20producing%20viable%20Web%20Apps.)</cite>

This work is showing signs of significant progress.

First, Google's behaviour appears to be explicitly banned by the [Digital Markets Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?toc=OJ%3AL%3A2022%3A265%3ATOC&uri=uriserv%3AOJ.L_.2022.265.01.0001.01.ENG) and [Japan's new Smartphone Act](https://competitionlawblog.kluwercompetitionlaw.com/2024/07/02/the-japanese-smartphone-act-teaching-competition-law-new-tricks/). Specifically rules that Gatekeepers such as Google must share APIs with rivals.

Next, the [UK's Market Investigation Reference into Browsers and Cloud Gaming](https://www.gov.uk/cma-cases/mobile-browsers-and-cloud-gaming) has extensively covered this issue:

> **OWA submitted that on Android devices running the Google Play store, only Chrome has the ability to mint (create) WebAPKs (except on Samsung devices). OWA submitted this prevents competing browsers from producing viable web apps.**<br><br>
> [...]<br><br>
> Google submitted that the WebAPK minting service provides WebAPK minted apps with certain additional functionality. Google submitted that it has not yet deployed a way for other browsers to use the WebAPK minting service.<br><br>
> [...]<br><br>
> Overall, the evidence available to date indicates that Google engages in self-preferencing less, in respect of access to functionalities on Android compared to Apple’s approach on iOS. Lack of access to WebAPKs, which is essential for installing PWAs, is the main issue highlighted by third parties (see paragraphs 4.6 to 4.7). **Whilst Google has acknowledged this restriction, its latest submission to the CMA indicates that it is working to resolve it.**
> <cite>[UK Browsers and Cloud MIR - WP3)](https://assets.publishing.service.gov.uk/media/667d31fa7d26b2be17a4b3e2/Working_paper_3_Access_to_browser_functionalities_within_the_iOS_and_Android_mobile_ecosystems.pdf) <br>(emphasis added)</cite>

While we are delighted that Google has indicated to the CMA that they will fix the issue, we request that any regulators reading this legally compel Google to do so on a reasonable timeline (within 6 months). We are concerned that this could be strung out for years [or even eventually cancelled](https://www.theregister.com/2024/07/23/google_cookies_third_party_continue/) when the regulatory heat dies down.

Importantly, given this service is provided by Google Play Services, Google should be able to provide this on almost all existing Android devices (Play Services currently goes back to Android 5.0 - 2014, [so includes around 99.6% of users](https://apilevels.com/)). This fix should not be restricted to new Android updates.

To Google, we request that they fix this promptly, globally and fairly. We ask that Google not play any regulatory games by only fixing it where they are legally compelled to do so and at the earliest possible date publicly publish a full plan on how they intend to share this functionality. We ask that they reach out and talk to interested browser vendors directly.

We would also like to thank everyone who supports us for making our work possible. Without it we would not be able to apply this pressure to improve competition for both browsers and Web Apps.
