---
title: 'In-App Browsers: The worst erosion of user choice you haven''t heard of'
date: '2024-03-26'
tags:
  - Policy
  - Apple
  - Google
  - Meta
  - TikTok
author: OWA
permalink: >-
  /ja/blog/in-app-browsers-the-worst-erosion-of-user-choice-you-havent-heard-of/index.html
layout: layouts/post.njk
translated: false
---

<iframe style="max-width: 100%;" width="560" height="315" src="https://www.youtube-nocookie.com/embed/-6mFC__dMWM?si=dCn6x88fPOox76WL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

In-App Browsers subvert user choice, stifle innovation, trap users into apps, break websites and enable applications to severely undermine user privacy. In-App Browsers hurt consumers, developers and damage the entire web ecosystem.

OWA recently met with both the Digital Markets Act team and the UK's Market Investigation Reference into Cloud Gaming and Browsers team to discuss how tech giants are subverting users' choice of default browser via in-app browsers and the harm this causes.

In-App browsers is a complex topic, so to outline our thoughts we wrote [a detailed 61 page submission](/files/OWA%20-%20DMA%20Interventions%20-%20In-App%20Browsers%20v1.2.pdf) to the EU Commission which we are now publicly publishing today.

So what are In-App Browsers, and what problems do they cause?

An In-App Browser can open when users tap on links in a non-browser app. Rather than switching out of the app and to the user's default browser, in-app browsers open a pane within the host native app to render web pages. Hence the name, “in-app browser”.

When you click on a link to a third-party website, many popular apps ignore your choice of default browser and instead automatically and silently replace your default browser with their own in-app browser. Many users - likely most users! - are not aware that this switch has taken place.

Worst of all, this switch grants these apps the ability to spy and manipulate third-party websites. Popular apps like Instagram, Facebook Messenger and Facebook [have all been caught injecting JavaScript](https://krausefx.com/blog/ios-privacy-instagram-and-facebook-can-track-anything-you-do-on-any-website-in-their-in-app-browser) via their in-app browsers into third party websites. TikTok was running [commands that were essentially a keylogger](https://krausefx.com/blog/announcing-inappbrowsercom-see-what-javascript-commands-get-executed-in-an-in-app-browser). While we have no proof that this data was used or exfiltrated from the device, the mere presence of JavaScript code collecting this data combined with no plausible explanation is extremely concerning.

It is possible to use in-app browsers in a way that preserves privacy. Both iOS and Android provide a system components (SFSafariViewController and Android Custom Tabs respectively), which do not allow the hosting app to inject JavaScript or otherwise spy on the user. Android Custom Tabs solution also (by default) invokes the users default browser.

Thus, this behavior would be impossible if links were simply opened in the user's default browser or in the system provided in-app browser.

This is the reality users face on their phones today. It doesn't have to be this way. Mandating that apps respect browser choice isn't just a matter of convenience; it's about empowering both consumers and companies to thrive in a more open, stable, feature rich, secure and private digital ecosystem.

Disrespect of users' choice of browser also stifles innovation. The Web thrives when browsers compete on functionality and user experience. In-app browsers, however, don't compete as browsers. Many, perhaps even most, users are unaware they are being foisted upon them. They're also unaware of the quality, security and privacy risks associated with them. In-app browsers operate in a vacuum, immune from competitive pressure to improve.

This stagnation hurts everyone. Users are stuck with forgetful, subpar in-app browsers. Businesses struggle to reach and engage with audiences due to missing features and bugs in browsers that no one made an affirmative choice to use.

**The solution is clear – respect the user's choice of browser.**

Mandating that non-browser apps utilise a users' default browser for third-party websites will unlock a more vibrant and equitable digital landscape. Users will enjoy familiar tools they trust, experiencing websites as they were designed. Businesses and publishers will gain access to earned audiences, free from interference by native app developers.

The intrusion of in-app browsers, along with the significant bugs, missing features and critical privacy and data protection concerns they introduce should be addressed. The Digital Markets Act and the UK's MIR have all of the necessary enforcement powers to right this wrong.

Remote tab in-app browsers such as Android Custom Tabs are a potentially ideal solution for most users. Android Custom Tabs, by default, invokes the user's default browser and prevents the app injecting JavaScript. This is an interesting middle ground where the user (and the app) can benefit from not leaving the app context while still respecting the user's choice of default browser and preserving the user's privacy. However, it is currently possible for the hosting native app to lock Android Custom Tabs to a particular browser and override the user's choice of default browser. This ability needs to be removed.

While iOS's remote tab in-app browser (SFSafariViewController) prevents the app injecting JavaScript, it is locked to Safari (or more specifically the WkWebView) and thus overrides the user's choice of default browser.

We have proposed 6 remedies:
* Designated Core Platform Services should respect the user's choice of default browser. (DMA specific)
* App Store rules must mandate non-browser apps use the user's chosen default browser for http/https links to third-party websites/Web Apps.
* Apple must update SFSafariViewController (Apple's system provided in-app browser for iOS) to respect the user's choice of default browser.
* Third-Party businesses must be provided an explicit and effective technical opt-out from non-default In-App Browsers.
* Operating systems must provide a global user opt-out. Apps must also request explicit permission from users in order to override their choice of default browser.
* Google must remove the ability to override a user's choice of default browser via Android Custom Tabs (Google's system provided in-app browser for Android).

These remedies overlap, addressing different aspects of the problem. When effected, these remedies will prevent gatekeepers from subverting the user choice of browser, provide users enhanced control over their privacy and security, and make technical fixes to the underpinnings of how web pages are loaded. These fixes will project a user's choice of browser in non-browser apps they use, providing users the security, privacy, stability and features on which browser wars are legitimately fought. No longer will apps be allowed to syphon web traffic for their own enrichment at the detriment of the community at large.

We would in particular like to thank Lukasz Olejnik, Felix Krause, Jesper van den Ende, Stuart Langridge, Bruce Lawson and Adrian Holovaty for their work in helping make this case. We are also thankful for the broad support and feedback we have received from the web development and browser development community.

We will continue to pursue this matter until it is fixed globally. Users' choice of browser is only important if that choice is actually respected.

**Your browser, your choice!**

Stay tuned:
- **Email:**        [contactus@open-web-advocacy.org](mailto:contactus@open-web-advocacy.org)
- **Mastodon:**      [@OpenWebAdvocacy](https://mastodon.social/@owa)
- **Discord:**      [OpenWebAdvocacy](https://discord.gg/x53hkqrRKx)
- **LinkedIn:**     [open-web-advocacy](https://www.linkedin.com/company/open-web-advocacy/)
- **Twitter:**      [@OpenWebAdvocacy](https://twitter.com/OpenWebAdvocacy)
- **Web:**         [https://open-web-advocacy.org](https://open-web-advocacy.org)
