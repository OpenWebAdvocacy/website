---
title: "OWA’s Review of Apple’s DMA Compliance Proposal for the Web"
date: '2024-01-29'
tags: ['Policy', 'Apple', 'EU']
author: "OWA"
---

## Will Apple ever let browsers and Web Apps compete fairly?

We believe that third party browsers should be allowed to compete fairly on iOS using the same engines they safely deliver to every other platform. Further, that Web Apps enabled by the functionality, stability and security delivered via intense competition between browsers should allow developers to bypass and contest the gatekeepers App Store via the world's only truly interoperable platform, the Web.

With this in mind OWA has been looking over [Apple’s proposals for compliance with the EU’s Digital Markets Act](https://developer.apple.com/support/dma-and-apps-in-the-eu/#browser-alt-eu) to determine whether Apple intends to genuinely comply with its legal obligations regarding browsers and web apps. As OWA has [argued at length](/walled-gardens-report/), true choice in browsers is the most important counterbalance to gatekeeper monopoly power, so the answer to this question matters enormously. 

**Unfortunately so far it appears that the answer is "no".**

Let’s dig into our three bigger point of interests:

1. Will browser vendors be effectively able to bring their own engine to iOS?
2. Will browser vendors be able to implement proper web app support on iOS?
3. Will browser vendors be able to compete fairly with Safari?


## Will browser vendors be effectively able to bring their own engine to iOS?

As OWA anticipated, Apple is proposing a new [Web Browser Engine Entitlement](https://developer.apple.com/support/alternative-browser-engines/#web-entitlement) that allows browser apps some of the extended privileges any modern, safe browser requires. Apple also proposes requirements browser vendors must meet to be eligible. Some deal with functional aspects of web content rendering, ensuring that browser engines are minimally standards compliant. Others deal with security aspects of web browsing, and yet others impose specific constraints related (in Apple’s view) to privacy. 

The security requirements are the least objectionable, and major browsers are already compliant with the [NIST guidelines for critical software supply chains.](https://www.nist.gov/itl/executive-order-improving-nations-cybersecurity/security-measures-eo-critical-software-use-2) and thus, presumably, with Apple’s looser restatements of those processes. OWA's stance is that it is reasonable (and allowed by the act) for Apple to set a minimum bar on the proviso that the rules are reasonable, proportional, and do not preclude smaller browser vendors that take security seriously from competing on iOS with their own engine.


The DMA only grants Apple the right to _“strictly necessary and proportionate, measures to ensure that third-party software applications or software application stores do not endanger the integrity of the hardware or operating system”,_ with the burden of proof as to their necessity and proportionality resting on Apple. We concur with the intent of the act, but believe aspects such as performance and functionality should be left to competition.

Apple requires that browsers secure a _“90% from Web Platform Tests”,_ but this is nonsensical, requiring immediate clarification. The [Web Platform Tests project](https://wpt.fyi/about) is a comprehensive corpus of tests for browser engines, but there is no generally accepted set out of which 90% can be measured, as each engine project enables or disables test groups based on features that are minimally implemented. An engine that implements very few features could easily maintain a 90% pass rate _of the features it provides_, while falling well short of the goal of broad standards conformance. The test corpus also changes between the desktop and mobile versions of browsers. Without clarification about which group of tests the 90% will be calculated from, developers live under a cloud of doubt. It’s also problematic that Apple’s language potentially demands pass-rate statistics that cannot be produced, as no set of WPT tests are run on iOS for any browser, using any engine (although Android browsers are tested) &mdash; including Safari. 

The privacy requirements in Apple's policy give rise to deep concerns. Instead of enabling market competition to improve privacy, Apple is demanding specific technical mechanisms that its own products do not abide (e.g., “boostrap” cookies for Web App installation to the homescreen). It also creates vague, unenforceable terms about “informed user activation” that read like a blank check for Apple’s reviewers to reject browsers based on vibes, rather than analysis. Even with a very brief investigation, we found Apple [does not yet follow these guidelines](https://webkit.org/blog/8311/intelligent-tracking-prevention-2-0/#:~:text=Temporary%20Compatibility%20Fix%3A%20Automatic%20Storage%20Access%20for%20Popups). Apple’s own track record regarding many of the issues it is performatively demanding conformance with is poor, and OWA believes that much of this language needs to be trimmed and made more objective. The primary concern here is that Apple may use this rule as a tool to deny third party browsers the ability to implement important Web App functionality with the aim of keeping that functionality exclusive to Native Apps sold via their App Store.

Requirements demanding alternative browsers implement specific APIs related to input are even more worrying. Apple requires specific iOS APIs to be used for features such as text input, scrolling, dragging, and contextual menus. This may seem appropriate to provide iOS users with a uniform experience, but consistency can be achieved in many ways. Indeed, most browser engines work extremely hard to integrate well into their host OSes and provide the best possible experience. Hard requirements in this area seem hard to justify given macOS Safari’s long history of private API abuse for competitive advantage.

One of the aims of the act is to allow third parties such as browser vendors to provide users with more choice and higher quality software than that of the gatekeeper. Third party browsers already have their own code for performing much of this functionality (such as scrolling) built into their own browsers. Web developers [have](https://open-web-advocacy.org/walled-gardens-report/#:~:text=of%20the%20time-,Safari%20is%20always%20years%20behind%20Edge/Chrome%20and%20has%20many%20many%20many%20bugs%20related%20to%20viewheight/scroll.,-iOS%20Safari%20is) [long](https://open-web-advocacy.org/walled-gardens-report/#:~:text=Safari%20is%20always%20years%20behind%20Edge/Chrome%20and%20has%20many%20many%20many%20bugs%20related%20to%20viewheight/scroll.%20iOS%20Safari%20is%20the%20biggest%20limiting%20factor%20in%20all%20web%20development.) complained that iOS [Safari is riddled with scrolling bugs](https://github.com/web-platform-tests/interop/issues/84) for all but the simplest of use cases. Mandating that third party browsers must replace this code with Apple’s libraries when they have their own, arguably superior, libraries blunts competition and may impose significant additional work with no legal justification or user benefit.

Mandating that browser vendors adopt these APIs may, perversely, hurt quality and delay release of competing browsers for months without materially improving consistency. This is particularly egregious in light of the [last-minute](https://www.europarl.europa.eu/RegData/etudes/ATAG/2022/739226/EPRS-AaG-739226-DMA-Application-timeline-FINAL.pdf)(pdf) announcement of these APIs, Apple’s attempt at limiting their use to the EU, and Cupertino’s years-long campaign of delay. The wrongs the DMA seeks to right are multiplied by time, and terms that prevent competitors from entering the market in a timely way run counter to the spirit of the law.

Indeed, some of these APIs have deep implications for competing engine codebases. It is therefore likely to increase the complexity of competing engines and make further development and its maintenance harder for browser teams. When Apple [shipped Safari on non-Apple platforms](https://www.apple.com/newsroom/2007/06/11Apple-Introduces-Safari-for-Windows/), it was not subject to similar restrictions and would be highly unlikely to accept them for iOS Safari itself. Adoption of such APIs should be optional, leaving vendors free to incorporate them as they see fit, and at their own pace.

## Will browser vendors be able to implement proper web app support on iOS?

While some APIs have been made available (and mandatory) for browser engines to implement specific features, others are notable by their absence. 

Since the first iPhone in 2007, Safari has had access to private APIs for installing and managing Web Apps, and yet this core, long-standing API is missing from Apple’s compliance proposal. Just like Safari, alternate browsers must be able to add Web Apps to the home screen, to the app library, and have them appear in the system settings so users can see and modify each individual Web App settings. They must also be able to run in the same engine as the browser that installs them &mdash; just as Safari-installed Web Apps have for 15 years. Our reading of the documentation made available thus far suggests alternate browsers will not have access to such capabilities.


The DMA explicitly mentions browser competition (including the ability to use your own engine) as being important to prevent gatekeepers from determining the functionality available to Web Apps.


> In particular, each browser is built on a web browser engine, which is responsible for key browser functionality such as speed, reliability and web compatibility. **When gatekeepers operate and impose web browser engines, they are in a position to determine the functionality** and standards that will apply not only to their own web browsers, but also **to competing web browsers and, in turn, to web software applications**.
> <cite>[Digital Markets Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?toc=OJ%3AL%3A2022%3A265%3ATOC&uri=uriserv%3AOJ.L_.2022.265.01.0001.01.ENG)
(emphasis added)</cite>


The UK Competition and Markets Authority noted that Apple had incentive to prevent Web Apps from fairly competing:

> Apple generates revenue through its App Store, both by charging developers for access to the App Store and by taking a commission for payments made via Apple IAP. Apple therefore benefits from higher usage of native apps on iOS. By requiring all browsers on iOS to use the WebKit browser engine, **Apple is able to exert control over the maximum functionality of all browsers on iOS** and, as a consequence, hold up the development and use of web apps. This limits the **competitive constraint that web apps pose on native apps**, which in turn protects and benefits Apple’s App Store revenues.
> <cite>[UK CMA - Interim Report into Mobile Ecosystems](https://www.gov.uk/government/publications/mobile-ecosystems-market-study-interim-report)
(emphasis added)</cite>

Finally, Apple states in the opening paragraph of their App Store Guidelines that the Web (i.e Web Apps) is the alternative to their App Store.

> For everything else there is always the open Internet. If the App Store model and guidelines are not best for your app or business idea that’s okay, we provide Safari for a great web experience too.
><cite>[Apple App Store Guidelines](https://developer.apple.com/app-store/review/guidelines/)</cite>


With all of these in mind, combined with [Apple’s refusal to implement key features in iOS Safari such as install prompts](https://open-web-advocacy.org/walled-gardens-report/#ios-web-app-installation---a-well-hidden-safari-exclusive) (keeping Web Apps hidden from the public), [other missing features](https://open-web-advocacy.org/walled-gardens-report/#safari-lags-behind-and-is-missing-key-features), and [significant and crippling bugs](https://open-web-advocacy.org/walled-gardens-report/#safari-has-been-buggy-for-a-long-time), the question of whether third party browsers could offer Web Apps something better becomes critical. As it stands there is nothing in Apple’s proposal to suggest that they ever intend to let third party browsers install Web Apps powered by their own engine.

Alternate browsers should also be able to handle Push Notifications for Web Apps, as well as badging when they are installed. There is no mention of APIs allowing the implementation of such features in Apple’s documentation.

Web Apps should also be allowed to open when the user taps a link to a URL related to it anywhere on the OS. This is a pattern that Apple calls “universal links”, and according to the documentation, browsers cannot implement an equivalent for Web Apps: _[“Apps that have the com.apple.developer.web-browser managed entitlement may not claim to respond to Universal Links for specific domains.”](https://developer.apple.com/documentation/xcode/preparing-your-app-to-be-the-default-browser#Adhere-to-browser-restrictions)_ [Specifications for enabling this](https://wicg.github.io/web-app-launch/) for Web Apps [have been implemented by other browsers,](https://chromestatus.com/feature/5722383233056768) and Apple’s prohibition on the capability represents an undue restraint on competitors and will undermine the ability of Web Apps to compete on a level playing field.

The DMA states that gatekeepers cannot prevent third-parties from accessing OS or device features, and if these issues are simply oversights, we hope the Commission and Apple will resolve them rapidly. Time is of the essence.

## Will browser vendors be able to compete fairly with Safari?

### Apple’s proposed browser choice screen

As mandated by the DMA, Apple plans to introduce a choice screen for default browsers the first time a user opens Safari. We have little information about the design of the choice screen at this point, [except that it will present the 12 most popular browsers in the user’s EU country in random order](https://9to5mac.com/2024/01/26/apple-shares-more-details-about-the-new-default-web-browser-prompt-in-ios-17-4/). There are a number of ways Apple can manipulate that choice screen to make it ineffective, so we will watch carefully how it ends up being implemented. 


The extent of Apple’s anti-competitive behavior towards third party browsers is hard to overstate. For **a dozen years**, it _wasn’t even possible_ to set a different browser as default. This thumb on the scales has spotted Safari an extensive market lead. The impact of choice screens against this sort of aggressive, persistent, long-standing self-preferencing is debatable, but OWA welcomes the attempt and urges the commission to scrupulously oversee the process. It should also not rule out re-running a choice ballot for users who have already been subject to one if the previous version is ruled out of compliance.

### Apple system provided In-App Browser ignores the users choice of default browser

Apple also self-preferences towards Safari through the [OS-provided “in-app browser” mechanism](https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller). OWA expected to see mention of APIs for default competing browsers to handle navigation from apps through this facility, but it is missing. The cumulative effect of Apple’s ongoing self-preferencing in this regard is to make the web forgetful. Even when users make a competitor their default, that browser is not used to handle a sizable portion of browsing. This is a competitive restraint and is incompatible with the spirit of the DMA, and Apple’s proposal ignores the users choice of default browser.


### Apple will restrict these changes to the EU

Apple proposes only to allow competitors to ship their own engines inside the EU. This is an attempt to add poison pills, driving up costs for competitors to maintain multiple iOS browsers (one for Europe, another for the rest of the world), and to impose costs that Apple does not bear and would never stand for if imposed by a competitor. OWA expected some amount of awful-but-lawful malicious compliance, but continued restrictions on engine choice outside the EU are egregious.


This additional burden can be unbearable for small browsers and will handicap all of them compared to Safari, adding to the harm done by 15 years of anti-competitive behavior that OWA has repeatedly described in reports and regulatory filings. [Mozilla is already on record citing these terms as _“creating barriers to prevent true browser competition on iOS”,](https://www.theverge.com/2024/1/26/24052067/mozilla-apple-ios-browser-rules-firefox)_ and OWA agrees.

Another implication of Apple’s gating of this change to the EU is the difficulty for web developers to test their Web Apps and websites across that boundary. EU web developers won’t be able to test their work with the WebKit-based versions of alternate browsers. These iOS browsers are already hard to test “frankenbrowsers” owing to Apple’s WebKit restrictions, and this adds further cost and complication.

Users outside of the EU will be using different versions of “Firefox”, “Chrome”, “Opera”, and given the difficulty in bringing modern experiences up to par on Apple’s browsers, adding to this work increases the pain for businesses attempting to build competitive web experiences in lieu of native apps.

Likewise, developers outside of the EU won’t be able to test their sites on browsers only available in the EU. This will result in major issues and bugs both for EU users and users of EU Web Apps and websites outside of it, further harming EU businesses and users. These issues, however, will only affect users of alternate browsers. Safari will have a significant advantage, its engine being the same everywhere in the world.


Obviously, the Commission does not have jurisdiction outside the EU and cannot mandate that its terms adhere worldwide, but Apple’s proposal to limit true browser choice to the EU shows that far from being embarrassed at having effectively banned third party browsers from iOS for over a decade, Apple will persist in this behavior till legally compelled not to in each and every major jurisdiction on the planet.. 

### Apple will preclude third party browsers from competing on iPad

Apple has chosen to restrict these browser changes to iPhone, and not to share them with iPad for users. This is currently allowed due to an [ongoing dispute with the EU as to whether or not iPadOS is covered by the DMA](https://open-web-advocacy.org/blog/owa-eu-dma-submission-apple-ipados/). In our submission, we argued that iPadOS is a subset of iOS with minor changes and that even were it not it is of sufficient market size and power in the EU to be a designated core platform service in its own right.

There is no legitimate reason as to why browsers should be allowed to compete on iPhone but not iPad. This is simply a case of Apple trying to do the bare minimum possible which comes with the added bonus of scuttling browser or web app competition on iPad.


### Will browser vendors be able to update their existing browsers?

> Be a separate binary from any app that uses the system-provided web browser engine
><cite>[Apple Documentation](https://developer.apple.com/support/alternative-browser-engines/)</cite>

Apple is disconcertingly vague on how updating existing browser apps to now use their own engine will work and it is not clear whether:

* Browser vendors must ship a separate app using their own browser engine.
* Browser vendors can seamlessly swap over their existing users to the updated browser now using its own browser engine.


If it is the first, that is deeply problematic as it essentially resets every third party browser that wants to use its own engine back to zero users. Given that the choice screen will take place prior to browser vendors having the opportunity to ship their real browsers, it is critical that this is not the case.

Browser vendors need to be able to roll out their engines in a stable, predictable manner.  This means complete control over swapping webkit with their own engine including the ability to do browser engine phased releases and to be able to rollback.


### Apple’s new contract for browsers that wish to use their own engine

No one on our team is a lawyer, but to our un-lawyerly eyes a number of clauses in Apple’s contract seem not only unfair, but also in direct violation of the DMA. 

To our knowledge a specific contract to be “allowed” to bring a browser engine is unique to Apple in the history of successful consumer operating systems.

> While in no way limiting Apple’s other rights under this Addendum or the Developer Agreement, or any other remedies at law or equity, if Apple has reason to believe You or Your Alternative Web Browser Engine App (EU) have failed to comply with the requirements of this Addendum or the Developer Agreement, Apple reserves the right to revoke to Your access to any or all of the Alternative Web Browser Engine APIs immediately upon notice to You; require You to remove Your Entitlement Profile from Your Alternative Web Browser Engine Application (EU); terminate this Addendum; block updates of, hide, or remove Your Alternative Web Browser Engine App (EU) and/or other Applications from the App Store; block Your Applications from distribution on Apple platforms; and/or to suspend or remove You from the Apple Developer Program.
><cite>[Apple’s New Browser Engine Contract](https://developer.apple.com/contact/request/download/web_browser_engine.pdf)</cite>


This clause basically says that if you fail to abide by all of Apple’s terms (some of which are pretty vague and possibly in contravention of the DMA), that they can not only reject that update, block your app until it is fixed, ban your app but that they can actually permanently remove and ban every single app your company has from distributions on all Apple platforms (presumably including macOS).


Another clause states that browsers must also abide by the Apple App Store Guidelines ("guidelines" being a delightfully Orwellian phrase  for ironclad rules). Apple does not have the best reputation as to being a fair judge of what counts as a violation of its app store rules.

> It should not surprise you to know that Apple’s interpretation of its text often seems capricious at best and at worst seems like it’s motivated by self-dealing.
><cite>[Dieter Bohn - The Verge](https://www.theverge.com/2020/6/17/21293813/apple-app-store-policies-hey-30-percent-developers-the-trial-by-franz-kafka)</cite>

> Nothing herein shall imply that Apple will accept Your Alternative Web Browser Engine App (EU) for distribution on the App Store, and You acknowledge and agree that Apple may, in its sole discretion, reject, or cease distributing Your Alternative Web Browser Engine App (EU) for any reason. For clarity, once Your Alternative Web Browser Engine App (EU) has been selected for distribution via the App Store it will be considered a “Licensed Application” under the Developer Agreement.
><cite>[Apple’s New Browser Engine Contract](https://developer.apple.com/contact/request/download/web_browser_engine.pdf)</cite>

This clause basically says they can reject your browser for any reason. 

Luckily the DMA does not allow this. The rules need to be fair, reasonable, and non-discriminatory. Further browser vendors will be able to appeal app store rulings to an alternative dispute settlement mechanism.

> The gatekeeper shall apply fair, reasonable, and non-discriminatory general conditions of access for business users to its software application stores, online search engines and online social networking services listed in the designation decision pursuant to Article 3(9).
> For that purpose, the gatekeeper shall publish general conditions of access, including an alternative dispute settlement mechanism.
> The Commission shall assess whether the published general conditions of access comply with this paragraph.
><cite>[Digital Markets Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?toc=OJ%3AL%3A2022%3A265%3ATOC&uri=uriserv%3AOJ.L_.2022.265.01.0001.01.ENG#:~:text=Any%20practice%20that%20would%20in%20any%20way%20inhibit%20or%20hinder%20those%20users%20in%20raising%20their%20concerns%20or%20in%20seeking%20available%20redress%2C%20for%20instance%20by%20means%20of%20confidentiality%20clauses%20in%20agreements%20or%20other%20written%20terms%2C%20should%20therefore%20be%20prohibited.)</cite>


> Apple may at any time, and from time to time, with or without prior notice to You, modify, remove, or reissue the Apple Materials or the Alternative Web Browser Engine APIs, or any part thereof. You understand that any such modifications may require You to change or update Your Alternative Web Browser Engine App (EU) at Your own cost and that features and functionality of such App may cease to function. Except as required by applicable law, Apple has no express or implied obligation to provide, or continue to provide, the Apple Materials or Alternative Web Browser Engine APIs, and may suspend or discontinue all or any portion of Your access to them at any time.
><cite>[Apple’s New Browser Engine Contract](https://developer.apple.com/contact/request/download/web_browser_engine.pdf)</cite>

This clause says that Apple can break, remove or change any API without any notice. This hardly seems fair or reasonable.

> Confidentiality
> You agree that any non-public information regarding the Alternative Web Browser Engine APIs or Alternative Web Browser Engine (EU) Entitlement Profile shall be considered and treated as “Apple Confidential Information” in accordance with the terms of Section 9 (Confidentiality) of the Developer Agreement. You agree to use such Apple Confidential Information solely for the purpose of exercising Your rights and performing Your obligations under this Addendum and agree not to use such Apple Confidential Information for any other purpose, for Your own or any third party’s benefit, without Apple's prior written consent. You further agree not to disclose or disseminate Apple Confidential Information to anyone other than those of Your employees or contractors who have a need to know and who are bound by a written agreement that prohibited unauthorized use or disclose of the Apple Confidential Information.
><cite>[Apple’s New Browser Engine Contract](https://developer.apple.com/contact/request/download/web_browser_engine.pdf)

This bans discussing Apple’s APIs publically or sharing information about them with any party except for employees or contractors who are bound by a similar agreement. Aside from the obvious attempt to stifle public discussion of shortcomings or anti-competitive behavior in Apple’s APIs this also appears to run afoul of the DMA. Given that the code bases of all the major browser engines are open source (including Safari’s) there does not appear to be any legitimate need for such a confidentiality clause.

> Any practice that would in any way inhibit or hinder those users in raising their concerns or in seeking available redress, for instance by means of confidentiality clauses in agreements or other written terms, should therefore be prohibited.
><cite>[Digital Markets Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?toc=OJ%3AL%3A2022%3A265%3ATOC&uri=uriserv%3AOJ.L_.2022.265.01.0001.01.ENG#:~:text=Any%20practice%20that%20would%20in%20any%20way%20inhibit%20or%20hinder%20those%20users%20in%20raising%20their%20concerns%20or%20in%20seeking%20available%20redress%2C%20for%20instance%20by%20means%20of%20confidentiality%20clauses%20in%20agreements%20or%20other%20written%20terms%2C%20should%20therefore%20be%20prohibited)</cite>

### Third-party browsers will be effectively precluded from shipping their browsers on third party app stores on iOS

Apple's proposal includes plans for allowing third-party native app stores to compete with their own on iOS. This is directly compelled by the act.

While allowing third party native app stores is not part of the fight of our organization, it is relevant in so far as browsers, being free products, would like to list on every major app store available on iOS. Apple's proposal seems designed to prevent any free app from ever even considering listing on a third party native app store on iOS.

In order to list their app on a third party app store, the app developer must sign an alternative contract allowing them the rights granted under the DMA but which comes with significantly different pricing. To our non-lawyer minds, having an optional alternate contract that semi-abides by the law and a standard contract which does not is baffling.

The pricing difference between the contracts is worth scrutiny, particularly for free apps like browsers. If vendors choose the second contract, Apple will waive some app store fees but add a new  "Core Technology Fee" which boils down to a 50c charge per user, per year.


In Apple's own words the fee is: 

> The Core Technology Fee (CTF) is an element of the new business terms in the European Union (EU) that reflects the value Apple provides developers through ongoing investments in the tools, technologies, and services that enable them to build and share innovative apps with users around the world. Developers can choose to remain on the App Store’s current business terms or adopt the new business terms for iOS apps in the EU.
><cite>[Apple Documentation](https://developer.apple.com/support/core-technology-fee/)</cite>

This sounds awfully like a fee for access to hardware and software APIs. But the DMA specifically precludes such a fee:

> Article 6(7) The gatekeeper shall allow providers of services and providers of hardware, **free of charge, effective interoperability with, and access for the purposes of interoperability to, the same hardware and software features accessed or controlled via the operating system** or virtual assistant listed in the designation decision pursuant to Article 3(9) as are available to services or hardware provided by the gatekeeper. Furthermore, the gatekeeper shall allow business users and alternative providers of services provided together with, or in support of, core platform services, **free of charge, effective interoperability with, and access for the purposes of interoperability to, the same operating system, hardware or software features, regardless of whether those features are part of the operating system, as are available to, or used by, that gatekeeper when providing such services.**
><cite>[Digital Markets Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?toc=OJ%3AL%3A2022%3A265%3ATOC&uri=uriserv%3AOJ.L_.2022.265.01.0001.01.ENG)
(emphasis added)</cite>

“Free of charge” being the key phrase.

Astonishingly, Apple has added wording that prevents developers from switching back to the standard contract, while granting themselves the right to change either contract at any time:

> Developers who adopt the new business terms at any time will not be able to switch back to Apple’s existing business terms for their EU apps. Apple will continue to give developers advance notice of changes to our terms, so they can make informed choices about their businesses moving forward.
><cite>[Apple Documentation](https://developer.apple.com/support/dma-and-apps-in-the-eu/#dev-qa:~:text=Developers%20who%20adopt%20the%20new%20business%20terms%20at%20any%20time%20will%20not%20be%20able%20to%20switch%20back%20to%20Apple%E2%80%99s%20existing%20business%20terms%20for%20their%20EU%20apps.%20Apple%20will%20continue%20to%20give%20developers%20advance%20notice%20of%20changes%20to%20our%20terms%2C%20so%20they%20can%20make%20informed%20choices%20about%20their%20businesses%20moving%20forward.)</cite>


How much it would cost for a browser to list on one of these third party app stores? iOS has 1.65 billion users. 1% browser market share represents 16.5 million users. If a browser vendor dares to list their app on a third party store, even once, and even if no one downloads it from that third party store, Apple will bill them $8.25 million per a year per 1% share every year with no recourse to change back to the previous contract.

In our view (and the view of many others) is that this is designed to make it as difficult as possible for free apps to list on third party app stores as possible, depriving these app stores of these apps, and sapping their ability to get off the ground.

The DMA also contains additional provisions that likely prohibit this behavior:

> Article 6(12) The gatekeeper shall apply **fair, reasonable, and non-discriminatory general conditions of access for business users to its software application stores**, online search engines and online social networking services listed in the designation decision pursuant to Article 3(9).

Apple’s policy is unfair, unreasonable, and discriminatory &mdash; both to free apps such as browsers, and to third party app stores.

If Apple's proposal sounds ludicrous to you, you are not alone. We are confused as to how Apple's lawyers thought this would possibly be compliant with the DMA, and the degree to which this would alienate native app developers. Their willingness to pursue these proposals, despite presumably being aware how unpopular they would be, is itself a striking example of market power.

We hope that the EU rejects this proposal and forces Apple to come up with a single non-alternative contract for all Native App developers who choose to distribute via Apple's App Store in the EU with fair, reasonable and non-discriminatory terms.

### What Apple should have done and why they will ultimately lose

Apple could have behaved differently here. They could have announced global rules allowing browser competition on iOS. These rules could include a minimum bar for security. They could have been working with the teams of each of the major browser vendors for months on what APIs they need and how to share them effectively. They could have upgraded their in-app browser (SFSafariViewController) and their Web App installation functionality to support the users choice of browser and to allow these third party browsers and Web Apps to compete fairly. They could significantly increase Safari's budget and fought to convince consumers of their vision for the Web in anticipation of intense mobile browser competition.

Apple has done none of this. Even a generous observer would conclude their proposal seems designed to circumvent the intent and letter of the digital markets act. Their announcement is dripping with disdain for the EU regulators.

> These proposals seem less about complying with the DMA and more about maintaining Apple’s walled garden,

> The limited scope of change does little to address the genuine power imbalances within the app ecosystem.
><cite>[Dr. Maria Rodriguez, Competition Law Expert at the University of Amsterdam](https://pc-tablet.com/clash-of-titans-apples-dma-compliance-proposals-raise-concerns-about-choice-and-competition/)</cite>

This is a mistake, for all Apple's talk of protecting consumers, the focus on revenue and containing the new competition allowed, shows their hand. The public are not fools and they are not fooled.

Even in traditionally pro-Apple forums the response to [Apple's browser competition proposal](https://www.macrumors.com/2024/01/26/mozilla-on-apple-eu-browser-engine-change/) has been extremely negative. Apple is losing whatever reputation for fair play it may have enjoyed. With each market investigation or act passed, this behavior is forced into the open.

## What’s Next

Apple’s compliance proposal is only that: a proposal that the EC can accept or reject, in whole or in part. Apple’s submissions will be reviewed by the EU and are subject to change. The voice of web developers matters now more than ever, as OWA is in contact with regulators and can amplify the concerns of folks working to build competitive experiences on the only open, interoperable, tax-free platform. 

The EU thus far has had only this to say:

> The DMA will open the gates of the internet to competition so that digital markets are fair and open. Change is already happening. As from March 7 we will assess companies' proposals, with the feedback of third parties. If the proposed solutions are not good enough, we will not hesitate to take strong action.
><cite>[EU Industry Chief Thierry Breton](https://www.reuters.com/technology/apple-faces-strong-action-if-app-store-changes-fall-short-eus-breton-says-2024-01-26/)</cite>


Our early reading of Apple’s proposal suggests that its plan does not align with either the letter or spirit of the DMA. We will be providing more updates as we parse the text. Although we have reasons to rejoice because alternate browser engines will now be able to ship to iOS, we remain concerned that this sort of gamesmanship by gatekeepers undermines the intent of the DMA. Fair competition for web browsers and proper support for Web Apps on iOS is not too much to ask. Indeed, we believe it’s now the legal right of EU citizens.


> While legal experts expect the EU to challenge Apple's insincere compliance with the DMA, developers should take this opportunity to rethink their native app serfdom. They should push web apps to their limits and then demand further platform improvement.
> The web doesn't require commission payments, technology fees based on usage, or permission from platform rentseekers. The web can set the iPhone free, even if Apple won't.
><cite>[Thomas Claburn - The Register](https://www.theregister.com/2024/01/27/apple_europe_ios_analysis/)</cite>

We will keep on fighting and will alert the EU to shortcomings and risks posed by each of the gatekeeper’s compliance plans.

Stay tuned as we will be posting about its progress as more information becomes available.


- **Email:**        [contactus@open-web-advocacy.org](mailto:contactus@open-web-advocacy.org)
- **Mastodon:**      [@OpenWebAdvocacy](https://mastodon.social/@owa)
- **Discord:**      [OpenWebAdvocacy](https://discord.gg/x53hkqrRKx)
- **LinkedIn:**     [open-web-advocacy](https://www.linkedin.com/company/open-web-advocacy/)
- **Twitter:**      [@OpenWebAdvocacy](https://twitter.com/OpenWebAdvocacy)
- **Web:**         [https://open-web-advocacy.org](https://open-web-advocacy.org)


## Links 
We believe it's important that readers be able to make up their own minds.

[This is the full text](https://eur-lex.europa.eu/legal-content/EN/TXT/?toc=OJ%3AL%3A2022%3A265%3ATOC&uri=uriserv%3AOJ.L_.2022.265.01.0001.01.ENG) of the DMA. Of most interest is [Article 5](https://eur-lex.europa.eu/legal-content/EN/TXT/?toc=OJ%3AL%3A2022%3A265%3ATOC&uri=uriserv%3AOJ.L_.2022.265.01.0001.01.ENG#:~:text=on%2Dgoing%20basis.-,CHAPTER%20III,PRACTICES%20OF%20GATEKEEPERS%20THAT%20LIMIT%20CONTESTABILITY%20OR%20ARE%20UNFAIR,-Article%C2%A05) and [Article 6](https://eur-lex.europa.eu/legal-content/EN/TXT/?toc=OJ%3AL%3A2022%3A265%3ATOC&uri=uriserv%3AOJ.L_.2022.265.01.0001.01.ENG#:~:text=Obligations%20for%20gatekeepers%20susceptible%20of%20being%20further%20specified%20under%20Article%C2%A08) which are only a few pages, however the recitals which start on the first page provide context for these articles, such as the reference to [web apps](https://eur-lex.europa.eu/legal-content/EN/TXT/?toc=OJ%3AL%3A2022%3A265%3ATOC&uri=uriserv%3AOJ.L_.2022.265.01.0001.01.ENG#:~:text=web%20software%20applications).


The following is a list of links to Apple’s documentation on their new browser engine rules and APIs.

* [Apple announces changes to iOS, Safari and the App Store in the European Union](https://www.apple.com/au/newsroom/2024/01/apple-announces-changes-to-ios-safari-and-the-app-store-in-the-european-union/)
* [Update on apps distributed in the European Union](https://developer.apple.com/support/dma-and-apps-in-the-eu/)
* [Embedded Browser Engine](https://developer.apple.com/contact/request/download/embedded_browser_engine.pdf)
* [Web Browser Engine Contract](https://developer.apple.com/contact/request/download/web_browser_engine.pdf)
* [Using alternative browser engines in the European Union](https://developer.apple.com/support/alternative-browser-engines/)
* [BrowserEngineKit Documentation](https://developer.apple.com/documentation/browserenginekit)
* [Scroll UI Container Documentation](https://developer.apple.com/documentation/browserenginekit/bescrollview)
* [Drag UI Documentation](https://developer.apple.com/documentation/browserenginekit/bedraginteraction)
* [Browser Engine Core Documentation](https://developer.apple.com/documentation/browserenginecore)
* [Preparing your app to be the default web browser](https://developer.apple.com/documentation/xcode/preparing-your-app-to-be-the-default-browser)
* [No mention of default settings for browsers](https://developer.apple.com/support/dma-and-apps-in-the-eu/#app-controls:~:text=Expanded%20default%20app%20controls%20for%20users%20in%20the%C2%A0EU)
* [Requesting interoperability with iOS in the European Union](https://developer.apple.com/support/ios-interoperability/)
* [Alternative distribution on iOS in the EU](https://developer.apple.com/support/dma-and-apps-in-the-eu/#ios-app-eu)
* [Terms for alternative distribution and payments in the EU](https://developer.apple.com/support/dma-and-apps-in-the-eu/#distribution-eu)
* [Fee Calculator for Apps in the EU](https://developer.apple.com/support/fee-calculator-for-apps-in-the-eu/)
* [Core Technology Fee](https://developer.apple.com/support/core-technology-fee/)
* [Alternate EU Terms Contract](https://developer.apple.com/contact/request/download/alternate_eu_terms_addendum.pdf)
* [Apple AppStore Guidelines](https://developer.apple.com/app-store/review/guidelines/) Note: Ones with the “key” symbol apply to third party apps delivered outside of Apple’s AppStore.
* [AppStore Guidelines  2.5.6](https://developer.apple.com/app-store/review/guidelines/#:~:text=2.5.6%20Apps%20that%20browse%20the%20web%20must%20use%20the%20appropriate%20WebKit%20framework%20and%20WebKit%20JavaScript.%20You%20may%20apply%20for%20an%20entitlement%20to%20use%20an%20alternative%20web%20browser%20engine%20in%20your%20app.%20Learn%20more%20about%20these%20entitlements.)
* [AppStore Guideline Changes](https://developer.apple.com/news/?id=7j1f99yf)
