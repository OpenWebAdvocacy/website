---
title: Apple on course to break all Web Apps in EU within 20 days
date: '2024-02-15'
tags:
  - Apple
  - EU
  - Safari
author: OWA
relatedLinks:
  - url: >-
      https://developer.apple.com/documentation/safari-release-notes/safari-17_4-release-notes
    title: Safari 17.4 Beta Release Notes
    date: 2024-02-13T00:00:00.000Z
permalink: /ja/blog/apple-on-course-to-break-all-web-apps-in-eu-within-20-days/index.html
layout: layouts/post.njk
translated: false
imageShortcodeIgnoreLegacy: true
---




{% image
  "/images/blog/apple-on-course-to-break-all-web-apps-in-eu-within-20-days.png",
  "OWA Logo and open-web-advocacy.org with the text: Apple on course to break all Web Apps in EU within 20 days. No Fix: Beta 1, Beta 2, Beta 3. New UI indicates deliberate choice. Nothing in release notes. No mention in compliance proposal. No response to bug tickets. No response from Apple. NOT required by the DMA."
%}

In 2011, Philip Schiller internally sent an email to Eddie Cue to discuss the threat of HTML5 to the Apple App Store titled **“HTML5 poses a threat to both Flash and the App Store”**.

> Food for thought:
> **Do we think our 30/70% split will last forever?** While I am a staunch supporter of the 30/70% split and keeping it simple and consistent across our stores, I don’t think 30/70 will last unchanged forever. **I think someday we will see a challenge** from another platform or **a web based solution** to want to adjust our model
> <cite>[Internal Apple Emails](https://www.patentlyapple.com/2021/05/in-the-epic-vs-apple-trial-today-epic-revealed-apple-memos-discussing-whether-the-70-30-split-with-developers-would-stand.html)<br>
(emphasis added)</cite>

That is, as early as 2011, Apple's management viewed Web Apps as a credible threat to the App Store revenue model. This is perhaps unsurprising as [Steve Jobs originally intended Web Apps to be the only way to deliver third party apps on iOS](https://open-web-advocacy.org/walled-gardens-report/#steve-jobs'-original-vision-for-ios).

Luckily for Apple, they had a powerful tool to keep the Web at bay: ironclad control of iOS and the ability to [block other browser vendors from bringing their more powerful platforms to Apple users](https://open-web-advocacy.org/walled-gardens-report/#apple-has-effectively-banned-all-third-party-browsers).  Meanwhile, Cupertino retained full control over the feature set of the only iOS browser engine, allowing it to suppress potential competition from the web through inaction. By simply failing to add important features, Apple could ensure the web never came within striking distance of being a credible threat.

Regulators around the world have taken note:

> Apple generates revenue through its App Store, both by charging developers for access to the App Store and by taking a commission for payments made via Apple IAP. Apple therefore benefits from higher usage of native apps on iOS. By requiring all browsers on iOS to use the WebKit browser engine, **Apple is able to exert control over the maximum functionality of all browsers on iOS** and, as a consequence, hold up the development and use of web apps. This limits the **competitive constraint that web apps pose on native apps**, which in turn protects and benefits Apple’s App Store revenues.
> <cite>[UK CMA - Interim Report into Mobile Ecosystems](https://www.gov.uk/government/publications/mobile-ecosystems-market-study-interim-report)<br>
(emphasis added)</cite>

> The code of conduct for mobile OS services could require Designated Digital Platforms to allow third-party browser engines to be used on their mobile OS. This could allow third-party providers of browsers and web apps to compete on their merits.
> <cite>[The Australian Competition and Consumer Commission](https://www.accc.gov.au/system/files/Digital%20platform%20services%20inquiry%20-%20September%202022%20interim%20report.pdf)</cite>

> *Mandatory use of WebKit and reluctance to support web apps in browsers (Apple)*
> Third-party browsers are forced to provide services based on WebKit, which lacks support for web apps, and competition through ingenuity among browsers may be impeded.
> <cite>[Japan’s Headquarters for Digital Market Competition](https://www.kantei.go.jp/jp/singi/digitalmarket/pdf_e/documents_22220601.pdf)
</cite>

The Digital Markets Act even stated it as the primary motivation to prohibit banning browser engines:

> When gatekeepers operate and **impose web browser engines**, they are in a position to **determine the functionality** and standards that will apply not only to their own web browsers, but also to **competing web browsers** and, **in turn, to web software applications**.
> <cite>[Digital Markets Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?toc=OJ%3AL%3A2022%3A265%3ATOC&uri=uriserv%3AOJ.L_.2022.265.01.0001.01.ENG#:~:text=When%20gatekeepers%20operate%20and%20impose%20web%20browser%20engines%2C%20they%20are%20in%20a%20position%20to%20determine%20the%20functionality%20and%20standards%20that%20will%20apply%20not%20only%20to%20their%20own%20web%20browsers%2C%20but%20also%20to%20competing%20web%20browsers%20and%2C%20in%20turn%2C%20to%20web%20software%20applications.)<br>
(emphasis added)
</cite>

We wrote last week [about concerning changes in  iOS 17.4 Beta 1 (EU)](https://open-web-advocacy.org/blog/did-apple-just-break-web-apps-in-ios17.4-beta-eu/). Sites installed to the homescreen failed to launch in their own top-level activities, opening directly in the default browser instead, even when the default browser is the browser that installed it. This demotes Web Apps from first-class citizens to mere shortcuts. Developers have since confirmed this does not occur outside the EU. Two betas later it is becoming more likely that this is a deliberate choice on the part of Apple to remove the ability to install Web Apps.

Beta 2 [contained a more detailed message](https://twitter.com/mysk_co/status/1754978973417672794) to the user stating:
> "Open 'WEB APP NAME' in Safari. 'WEB APP NAME' will open in your default browser from now on.".

This message occurs even if both the browser that installed the Web App and your default browser is iOS Safari.

{% image
  "/images/blog/web-apps-turned-into-bookmarks-message.png",
  "An image of Apple's new pop up informing the user that the web app will now instead open as a webpage in the default browser."
%}

No mention of this seismic change has been made in the usual places. Not the [Safari release notes](https://developer.apple.com/documentation/safari-release-notes/safari-17_4-release-notes) nor in the [iOS Beta release overview](https://developer.apple.com/documentation/ios-ipados-release-notes/ios-ipados-17_4-release-notes).

Apple’s silence has been deafening. No reply has been provided in  [a WebKit ticket](https://bugs.webkit.org/show_bug.cgi?id=268643), [Apple developer forums](https://forums.developer.apple.com/forums/thread/745414), [twitter discussions](https://twitter.com/firt/status/1755406923485122615), and no statement has been provided to the  [many journalists](https://www.theregister.com/2024/02/08/apple_web_apps_eu/) [seeking](https://www.macrumors.com/2024/02/08/ios-17-4-nerfs-web-apps-in-the-eu/) [comment](https://www.theverge.com/2024/2/14/24072764/apple-progressive-web-apps-eu-ios-17-4).

This cannot be mere oversight. The inability of third-party browsers to compete in the provision of web app functionality was discussed in no less than four regulator's investigations. Potential competition from Web Apps was directly stated in the DMA as the motivation to prohibit banning competing browser engines. it seems highly unlikely that the policy team working for Apple were unaware that they were required to allow third-party browsers to install and power Web Apps using their own browser engines.

Yet when Apple announced their [compliance proposal for the DMA](https://open-web-advocacy.org/blog/owa-review-apple-dma-compliance-for-web/), Web Apps were noticeable by their absence. This is the same Apple that again and again claims that Web Apps are the alternative distribution method for Apps in their mobile ecosystem.

> QUESTION: Apple is the sole decision maker as to whether an app is made available to app users though the Apple Store, isn't that correct?<br>
> REPLY: If it’s a Native App, yes sir, if it’s a Web App no.
> <cite>[Tim Cook - Speaking to US Congress](https://www.youtube.com/watch?v=H6eYLCxxQdA&t=306s)
</cite>

> Web browsers are used not only as a distribution portal, but also as platforms themselves, hosting “progressive web applications” (PWAs) that eliminate the need to download a developer’s app through the App Store (or other means) at all.
> <cite>[Apple Lawyers - Court Filing in Australia](https://9to5mac.com/2021/03/25/bypass-the-app-store-says-apple/)
</cite>

> For everything else there is always the open Internet. If the App Store model and guidelines are not best for your app or business idea that’s okay, we provide Safari for a great web experience too.
><cite>[Apple App Store Guidelines](https://developer.apple.com/app-store/review/guidelines/)</cite>

Apple had four choices here:

* **The Good**<br>
Allow third-party browsers to install Web Apps, powered by the browser that the user chooses to install the Web App with. This is the only near-term viable solution.  This enables browsers to compete in the provision of functionality for web apps.

* **The Broken**<br>
Allow browsers to install web apps but power them all by the default browser.  While at first glance this may seem like a reasonable solution, it is an unworkable model. Each Web App’s data is stored within its installing browser.  Each browser stores the data in different locations and raw formats.  Due to complexity, no import/export functionality exists to allow a user to “port” a Web App from one browser to another along with its data. This means users would be logged out of and lose all their data for every Web App every time they switched default browser. <br><br>Having every Web App break each time a user switches default browser would be a disaster for the ecosystem. If anyone were to suggest this was a reasonable model, simply ask, would they be happy if all native apps lost their data every time you switched the default App Store.


* **The Devious**<br>
Provide the share menu with third party browsers, burying the ability to install Web Apps powered by Safari’s engine in a high-friction UI. This obviously doesn’t allow third party browsers to compete in the provision of Web App features but may have been sneaky enough for Apple to attempt to slip past.

* **The Outrageous**<br>
Outright remove support for Web Apps by converting them all to bookmarks. This removes the ability to act like an App from the an operating system and user interface perspective. This fundamentally undermines the already tenuous competitiveness of Web Apps due to Apple policies. Recall that Safari deletes data for any site that the you fail to visit for more than 7 days , but not for installed Web Apps. The outrageous strategy now subjects Web Apps in the EU to the same disadvantage. Apple policy also restricts the availability of Push Notifications to installed Web Apps. This change  looks set to wreck the most requested Web App feature of the last decade. Lastly, this change hobbles homescreen-installed Web Apps that request to run in full-screen mode, such as games. Demoting Web Apps to shortcuts is a triple disability that Apple cannot be ignorant of. Finally Apple can then attempt to refuse to share the ability to install apps with third party browsers, because now Safari can’t, despite the fact it has been able to for 15 years.

We considered that Apple might try something like this, but dismissed it as too blatantly anti-competitive, [even for them](https://open-web-advocacy.org/walled-gardens-report/#apple-has-effectively-banned-all-third-party-browsers). Now, even as it looks increasingly less likely that Cupertino is acting in good faith, Apple could declare this unfinished or a bug. That would go some way towards alleviating concerns, but if the Beta breakage of Web Apps ever makes it onto users’ devices, it will show that Apple is actively seeking to block the Web from ever competing fairly with their App Store.

Some defend Apple's decision to remove Web Apps as a necessary response to the DMA, but this is misguided.

Apple has had 15 years to facilitate true browser competition worldwide, and nearly two years since the DMA’s final text. It could have used that time to share functionality it historically self-preferenced to Safari with other browsers. Inaction and silence speaks volumes.

The complete absence of Web Apps in Apple's DMA compliance proposal, combined with the omission of this major change from Safari beta release notes, indicates to us a strategy of deliberate obfuscation. Even if Apple were just starting to internalize its responsibilities under the DMA, this behaviour is unacceptable.  A concrete proposal with clear timelines, outlining how third party browsers could install and power Web Apps using their own engines, could prevent formal proceedings, but this looks increasingly unlikely. Nothing in the DMA compels Apple to break developers' Web Apps, and doing so through ineptitude is no excuse.

Apple still has the opportunity to fix this ‘misunderstanding’. An Apple that is confident in its own products could take the following steps:

* Announce that this is indeed a bug.
* Publish a blog post explaining how they intend to let third party browsers (with their own engines) compete in the provision of functionality for Web Apps.
* Create an API whereby browsers with the entitlement, subject to narrow scope, proportional and heavily justified security rules could install Web Apps powered by the browser that the user chooses to install them with.
* Roll out these changes globally.

If Apple truly believed that the Web and Web Apps were no threat to their App Store, why not appease the regulators by letting them compete fairly on their mobile ecosystem.

Apple’s defenders might have been able to argue that [a history of inadequate Web App functionality](https://open-web-advocacy.org/walled-gardens-report/#safari-lags-behind-and-is-missing-key-features) and [crippling bugs](https://open-web-advocacy.org/walled-gardens-report/#safari-has-been-buggy-for-a-long-time) were simply benign neglect. Web Apps make no money for Apple, so why expend effort on them? But the suppression of competing engines, attempts to geofence their emergence, and radio silence about complete breaking of Web Apps paints a less benevolent picture of Apple not as a bumbling giant, but as a clear enemy of the Web.

Apple looks to be taking active and provocative steps to scuttle Web Apps and to prevent other browsers from providing them. This suggests that Apple is still fearful of a future where users and developers can simply bypass Apple’s App Store using the power of the Web. OWA welcomes that future and will continue to work to ensure it becomes reality, in Europe and beyond -- just as Steve Jobs promised.

<div class="prom-banner" style="max-width: 30em;">
    <p class"illustration"><img src="/images/donate.svg" alt="" /></p>
    <p><strong>If you ship a Web App in the EU and will be impacted by this, please sign our open letter to Tim Cook.</strong> It is critical that we gather as much evidence as possible to prevent Apple from breaking Web Apps in the EU.</p>

    <div>
        <p><a href="https://letter.open-web-advocacy.org/" class="donate-button">Sign the letter to Tim Cook
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
        </a></p>
    </div>
</div>
