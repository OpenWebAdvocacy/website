---
title: 'UK’s Browser and Cloud Investigation may fail to allow Web App competition'
date: '2024-08-20'
tags: ['Policy', 'CMA', 'UK']
author: [ "OWA" ]
---

**TL;DR:** We believe the UK Market Investigation Reference is missing [critical remedies](/blog/uk-browser-and-cloud-investigation-may-fail-to-allow-web-app-competition/#remedies). Most importantly *"Apple shall allow third-party browsers to install and manage Web Apps using their own browser engine."*. [**We need YOU to write to the CMA**](/blog/uk-browser-and-cloud-investigation-may-fail-to-allow-web-app-competition/#we-need-your-help!-act-today!) (before August 29th) and provide feedback on why allowing browsers to compete in providing Web App functionality is important.

## What’s happening?

As readers may recall, the UK Competition and Markets Authority launched a Market Investigation Reference (MIR) into [mobile browsers and cloud gaming](https://www.gov.uk/cma-cases/mobile-browsers-and-cloud-gaming) on June 10th 2022. Apple was briefly able to halt this via legal technicalities but thankfully the [CMA won in the high court late last year restarting the investigation](https://open-web-advocacy.org/blog/cma-reopens-investigation-into-apple/).  

From our extensive work in supporting the Mobile Ecosystems Investigation, we know the key reason the Market Investigation Reference into Browsers was launched was to enable the free, open and interoperable ecosystem of the web to contest Apple’s and Google’s app stores, reducing costs for UK’s consumers and businesses. While regulators across the world were focused on app stores, the UK was the only regulator that was looking towards the web and web apps to solve these issues on mobile ecosystems. This aim was made clear by the [opening statements of the Browsers and Cloud MIR](https://www.gov.uk/government/news/cma-plans-market-investigation-into-mobile-browsers-and-cloud-gaming):


> We all rely on browsers to use the internet on our phones, and **the engines that make them work have a huge bearing on what we can see and do**. Right now, **choice in this space is severely limited** and that has real impacts – **preventing innovation and reducing competition from web apps**. We need to give innovative tech firms, many of which are ambitious start-ups, a fair chance to compete.
> </br><cite>[Andrea Coscelli - Chief Executive of the UK's Competition and Markets Authority](https://www.gov.uk/government/news/cma-plans-market-investigation-into-mobile-browsers-and-cloud-gaming)</br>(emphasis added)
</cite>

Last week the browsers and cloud MIR released their [remedies paper](https://assets.publishing.service.gov.uk/media/66b484020808eaf43b50dea8/Working_paper_7_Potential_Remedies_8.8.24.pdf) outlining their initial thoughts on remedies and asking for feedback. While the paper contains a number of excellent remedies, not least of which is prohibiting Apple from banning browser engines from iOS, we are deeply concerned that the MIR will fail in its goal of allowing third party browsers to enable effective competition from Web Apps.

<details>
<summary>Full List of Remedies</summary>
<br></br>

This list is on page 21 of the [Browsers and Cloud Remedies Paper](https://assets.publishing.service.gov.uk/media/66b484020808eaf43b50dea8/Working_paper_7_Potential_Remedies_8.8.24.pdf).
<br></br>
**Issue 1 – Apple’s WebKit restriction**

* A1 - Requirement for Apple to grant access to alternative browser engines to iOS.

* A2 - Requirement for Apple to grant equivalent access to iOS to browsers using alternative browser engines. 

* A3 - Requirement for Apple to grant equivalent access to APIs used by WebKit and Safari to browsers using alternative browser engines.

**Issue 2 – Apple’s and Google’s control over supply of browser engines to restrict access to functionalities**

* A4 - Requirement for Google to grant equivalent access to APIs used by Chrome.

**Issue 3 – Apple preventing all rival browser vendors from offering remote tab IABs on iOS**

* B1 - A requirement for Apple to enable remote tab IABs for WebKit-based browsers.

* B2 - A requirement for Apple to enable remote tab IABs for browsers wishing to use alternative browser engines.

**Issue 4 – Apple preventing rival browser engines from offering nonWebKit based webview IABs, including bundled engine IABs to app developers on iOS**

* B3 - A requirement for Apple to allow alternative webviews to Apple’s iOS WKWebView.

**Issue 5 – on Android, default settings and preinstallation of Android WebView make it difficult for app developers to use IABs based on alternative webviews**

* No remedies proposed.

**Issue 6 – Apple’s and Google’s IAB policies offer users limited choice and control in relation to which browser is used for IAB implementation in native apps**

* B4 - A requirement for Apple and Google to implement remote tab IABs using the default browser.

* B5 - A requirement for Apple and Google to make users aware of being in an IAB by implementing changes to the interface or implement disclosures.

* B6 - A requirement for Apple and Google to implement opt-out settings for in-app browsing.

**Issue 7 - Apple’s and Google’s control of choice architecture in factory settings**

* C1 - A requirement for Apple and Google to ensure that multiple browsers are pre-installed, using defined criteria.

* C2 - A requirement for Apple and Google to ensure the use of browser choice screens at device set-up.

* C3 - A requirement for Apple and Google to ensure the placement of a default browser selected by the user in the ‘dock’ / ‘hot seat’ or on the default home screen at device set-up.

* C4 - A requirement for Apple and Google to ensure that a user’s choice of default browser is always followed across all browser access points.

**Issue 8 - Apple’s and Google’s use of certain choice architecture practices after device set-up**

* C5 - A requirement for Apple and Google to ensure the use of browser choice screen(s) after device set-up.

* C6 - A requirement for Apple and Google to make adaptations to the user journey for changing their default browser.

* C7 - A requirement for Apple and Google to share user data on default browsers settings with browser vendors.

* C8 - A requirement for Apple and Google to ensure that the frequency of default browser prompts and notifications is limited.

* C9 - A requirement for Apple and Google to allow users to uninstall Safari browser app on iOS and Chrome on Android devices.

**Issue 9 – Apple’s App Store policies in relation to cloud gaming services**

* D1 - A requirement for Apple to review and amend its Guidelines to remove the specific restriction identified as restrictive and a prohibition on Apple introducing new restrictions with equivalent effect.

* D2 - A requirement for Apple to enable cloud gaming native apps to operate on a ‘read-only’ basis (i.e. with no ingame purchases or subscriptions) so that games do not need to be re-coded and no commission would therefore be payable to Apple).

**Issue 10 – app store rules in relation to in-app payment systems for in-game transactions**

* D3 - A requirement for Apple and Google to allow CGSPs to incorporate their own or third party in-app payment systems for in-game transactions.

</details>

## Why the MIR may fail?

In the remedies the MIR team is proposing both removing Apple’s rule banning browsers from using their own browser engines and obligating Apple to provide equivalent iOS API access to third party browser vendors that Safari and WebKit have.

### 1. Browser’s can’t Install Web Apps using their own Engine

The problem is that these do not fix the core issue, namely, can browsers compete in the provision of Web App functionality using their own browser engine. Apple could plausibly argue that allowing browsers to use their own engine and providing them access to the share menu to install Apple’s WebKit implementation of Web Apps satisfies both requirements.

This could lead to a situation where while browser engines such as Blink (Chrome, Edge, Opera, Vivaldi, DuckDuckGo, Brave) and Gecko (Firefox) could be ported to iOS, these browser vendors would be unable to compete to improve the stability, functionality, security or privacy of Web Apps. This would still be under Apple’s sole control.

As noted in the CMA’s mobile ecosystems study, Apple is heavily incentivized not to support Web Apps to their full potential. Certain features such as install prompts that would allow Web Apps to compete more fairly with Apple’s own apps and app store, will almost certainly never be implemented by Apple.

> By requiring all browsers on iOS to use the WebKit browser engine, **Apple is able to exert control over the maximum functionality of all browsers on iOS** and, as a consequence, hold up the development and use of web apps. This limits the **competitive constraint that web apps pose on native apps**, which in turn protects and benefits Apple’s App Store revenues.
> </br><cite>[UK CMA - Interim Report into Mobile Ecosystems](https://www.gov.uk/government/publications/mobile-ecosystems-market-study-interim-report)</br>(emphasis added)
</cite>

Worse faced with the genuine possibility of third-party browsers effectively powering Web Apps due to the EU’s Digital Markets Act, Apple's first instinct appears to have been to [remove Web Apps support entirely with no notice to either businesses or consumers](https://open-web-advocacy.org/blog/its-official-apple-kills-web-apps-in-the-eu/). Luckily, [under significant pressure, Apple backed down](https://open-web-advocacy.org/blog/apple-backs-off-killing-web-apps/) from this particular stunt at the last moment. 

### 2. Browser Access to Software/Hardware APIs is Insufficient

Next, the wording remedy A3 ("Requirement for Apple to grant equivalent access to APIs used by WebKit and Safari to browsers using alternative browser engines.") is scoped to only what Safari and WebKit have access too, which is a problem as that could allow Apple to set a ceiling by blocking Safari from having access to stuff Apple does not intend to implement for the Web, i.e. Bluetooth, USB etc. If Apple is not under any legal obligation to share needed APIs required to support browser or Web Apps features that Safari does not support, they will not provide access to those APIs.

### 3. Web Apps can’t succeed without Install Prompts

In order for Web Apps to have a significant opportunity to truly compete on iOS, Safari needs to implement [install prompts](https://web.dev/learn/pwa/installation-prompt/) (the ability for websites to prompt, or provide a button to install them as a Web App). Apple, understanding the importance of reducing friction, has implemented a large variety of ways to install apps from Apple’s app store via Safari including [smart banners](https://open-web-advocacy.org/walled-gardens-report/#smart-app-banners) and [app clips](https://open-web-advocacy.org/walled-gardens-report/#app-clips) while keeping the method of installing Web Apps [hidden away in the share menu](https://open-web-advocacy.org/walled-gardens-report/#ios-safari).

PICTURE OF INSTALL PROMPT



## Remedies

We believe four additional remedies needed in order to allow the Web to compete fairly on iOS:

1. *"Apple shall allow third-party browsers to install and manage Web Apps using their own browser engine."*


2. *"A requirement for Apple to implement Install Prompts for iOS Safari."*


3. *"A requirement for Apple to grant all software and hardware access to APIs to browsers using alternative browser engines that they require to port their engines and implement stability, functionality, security and privacy. Restrictions on this can be subject to only strictly necessary, proportionate and justified security grounds."*


4. *"Where feature parity between Web Apps and Native Apps is possible, Apple must technically enable it and it should not be artificially prevented either by OS rules or OS design. Apple must not self-preference their own Apps, Apps sold via their App Store or their own Services over Web Apps."*

These remedies are required because Apple's actions not only hurt the Web ecosystem, third-party businesses (be they browser vendors or software developers), but also make their devices worse for their own consumers. By depriving their consumers of the choice and competition that fair and effective browser and Web App competition would bring, they are worsening the functionality, interoperability, stability, security, privacy, and price of services on their devices. This MIR has the power to fix this for the UK, which will be a significant step towards fixing the problem globally.

After 3 years of work from the CMA, it would be incredibly disappointing to get to the end of the investigation without resolving the anti-competitive behaviour that is preventing web apps from succeeding and unlocking innovation.

## We need your help! Act today!

The CMA is asking for feedback by the end of **Thursday August 29th 2024** from interested parties, developers and businesses. This is your opportunity to provide feedback to the MIR team.

**We need YOU to write to the CMA**, share your thoughts on the proposed remedies and any remedies you think may be missing. 

If you share our concern that competition issues related to Web Apps will not be resolved by the remedies proposed, please state so in your letter and outline why this is important to you, your business and to the future of tech in the UK.

If possible, explain the harm that has been caused by browsers not being able to compete in the provision of Web App functionality on iOS. 

While we encourage readers to write longer submissions, short but clear emails that explain the key points are still immensely helpful.

**Please consider spending 15 minutes writing to the regulator. After years of campaigning, this is a critical moment to ensure the Web is able to thrive, and we will not be successful without your support!**

**You should send your letter to the MIR team at [browsersandcloud@cma.gov.uk](mailto:browsersandcloud@cma.gov.uk).**

If you have further questions or concerns about this topic, or your letter writing, please join us in Discord or drop us an email:
- **Email:**        [contactus@open-web-advocacy.org](mailto:contactus@open-web-advocacy.org)
- **Discord:**      [OpenWebAdvocacy](https://discord.gg/x53hkqrRKx)

*Note: All mentions of iOS above including quotes from the MIR mean both iOS and iPadOS.*
