---
title: >-
  How Apple’s Key Tactic Could Prevent Japan’s Smartphone Act from Improving
  Browser Competition
date: '2026-01-06'
tags:
  - Policy
  - Apple
  - Japan
  - Browser Engine
author: OWA
permalink: >-
  /es/blog/how_apples_key_tactic_could_prevent_japans_smartphone_act_from_improving_browser_competition/index.html
layout: layouts/post.njk
translated: false
---

**TL;DR: Japan’s new Smartphone act requires that Apple allow browser vendors to use their own engines in Japan. However, Apple looks set to use the same tactic it has used in the EU to avoid complying with the same provision of the Digital Markets Act for the last twenty-one months. Namely, Apple demands that browser vendors lose all their existing Japanese users and produce a brand new browser, rather than simply updating their existing users. Apple will also not allow browser vendors to use their own engine on iPadOS and other iOS variants.**

This article is also available in [Japanese](/ja/blog/how_apples_key_tactic_could_prevent_japans_smartphone_act_from_improving_browser_competition/index.html).

## About OWA

As a quick background to new readers, we (Open Web Advocacy) are a non-profit dedicated to improving browser and web app competition on all operating systems. We have engaged with multiple regulators including in the [EU](https://open-web-advocacy.org/apple-dma-review/), [UK](https://open-web-advocacy.org/files/OWA%20-%20CMA%20\(UK\)%20-%20Response%20to%20Mobile%20Ecosystem%20Interim%20Report%20-%20v1.2.pdf), [Japan](https://open-web-advocacy.org/files/OWA%20-%20HDMC%20\(Japan\)%20-%20Competition%20in%20the%20Mobile%20App%20Ecosystem%20-%20v1.1.pdf), [Australia](https://open-web-advocacy.org/files/OWA%20-%20ACCC%20\(Australia\)%20-%20Response%20to%20Discussion%20Paper%20for%20Interim%20Report%20No.%205%20-%20v1.0.pdf) and the [United States](https://open-web-advocacy.org/files/OWA%20-%20NTIA%20\(US\)%20-%20Competition%20in%20the%20Mobile%20App%20Ecosystem%20-%20v1.0.pdf).

## Japan’s new Smartphone Act

In June 2024 Japan’s parliament [passed into law the Smartphone Act](https://open-web-advocacy.org/blog/japan-ends-the-apple-browser-ban/#:~:text=The%20final%20bill%20contains%20a%20number%20of%20interesting%20articles%20relevant%20to%20browsers%20and%20Web%20Apps%3A) \- officially the *Bill on the Promotion of Competition for Specified Software Used in Smartphones*, similar to the [EU’s Digital Markets Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?toc=OJ%3AL%3A2022%3A265%3ATOC&uri=uriserv%3AOJ.L_.2022.265.01.0001.01.ENG) and the [UK’s Digital Markets, Competition and Consumers Bill](https://publications.parliament.uk/pa/bills/cbill/58-04/0003/230003.pdf)

The legislation was based on the [Final Report by Japan’s Headquarters for Digital Market Competition](https://www.kantei.go.jp/jp/singi/digitalmarket/pdf_e/documents_230616.pdf), which Open Web Advocacy consulted on. [Our submission is available here](https://open-web-advocacy.org/files/OWA%20-%20HDMC%20\(Japan\)%20-%20Competition%20in%20the%20Mobile%20App%20Ecosystem%20-%20v1.1.pdf).

Crucially, this bill directly prohibits Apple’s long-standing ban on third-party browser engines on iOS.

In July 2025 Japan’s Fair Trade Commission published the [Mobile Software Competition Act (MSCA) Guidelines](https://www.jftc.go.jp/file/MSCA_Guidelines_tentative_translation.pdf), which [clarifies how the Smartphone Act will be interpreted and enforced](https://open-web-advocacy.org/blog/japan-apple-must-lift-engine-ban-by-december/). In particular, for designated providers such as Apple:

* **Banning browser engines is prohibited, as are actions “preventing” their adoption.**  
* There must be **functionally equivalent API access** for 3rd parties, subject to justifiable measures.  
* It must be **easy to change the default settings** of the operating system.  
* **A choice screen for browsers** must be provided **“promptly after the first activation”**.

**The act came into full effect on the 18th of December 2025**.

We’d like to extend our gratitude to the extensive work over many years by the [HDMC](https://www.kantei.go.jp/jp/singi/digitalmarket/index_e.html) (Headquarters for Digital Market Competition), [JFTC](https://www.jftc.go.jp/en/) (Japan Fair Trade Commission) and others in improving browser, browser engine and web app competition.

## Apple's Browser Engine Ban

For the last 16 years, Apple has banned browser vendors from porting their own browser engines to iOS. They have done this [via App Store Rule 2.5.6](https://developer.apple.com/app-store/review/guidelines/#:~:text=Apps%20that%20browse%20the%20web%20must%20use%20the%20appropriate%20WebKit%20framework%20and%20WebKit%20JavaScript.):

> 2.5.6 Apps that browse the web must use the appropriate WebKit framework and WebKit JavaScript.

WebKit is the engine that powers Safari, and several smaller browsers on Linux and macOS.

In practice, 2.5.6 is a requirement that on iOS, browsers from Google, Microsoft, Mozilla, Samsung, Vivaldi, Brave, Opera and others cannot use their own engines the way they do everywhere else. These engines take hundreds of thousands of engineer hours to develop, and are excluded from Apple’s most successful consumer operating system. Competing browser vendors are only allowed to produce shells around a very specific, unaltered version of Safari’s WebView; a component whose features Apple dictates.

> **Apple has a browser monopoly on iOS**, which is something Microsoft was never able to achieve with IE  
> <cite>[Scott Gilbertson - The Register](https://www.theregister.com/2021/10/22/safari_risks_becoming_the_new_ie/?td=keepreading-top)<br>(emphasis added)</cite>

> All of this is compounded by yet another Apple policy: no third-party browser engines. You can install apps like Chrome, Firefox, Brave, DuckDuckGo, and others on the iPhone — but fundamentally they’re all just skins on top of Apple’s WebKit engine. That means that **Apple’s decisions on what web features to support on Safari are final.** If Apple were to find a way to be comfortable letting competing web browsers run their own browser engines, a lot of this tension would dissipate.*  
> <cite>[Dieter Bohn and Tom Warren - The Verge](https://www.theverge.com/2021/5/6/22421912/iphone-web-app-pwa-cloud-gaming-epic-v-apple-safari)<br>(emphasis added)</cite>

> So it’s not just one browser that falls behind. It’s all browsers on iOS. The whole web on iOS falls behind. And iOS has become so important that **the entire web platform is being held back as a result.** 
> <cite>[Niels Leenheer - HTML5test](https://nielsleenheer.com/articles/2021/chrome-is-the-new-safari-and-so-are-edge-and-firefox/)<br>(emphasis added)</cite>

> …**because WebKit has literally zero competition on iOS**, because Apple doesn’t allow competition, the incentive to make Safari better is much lighter than it could (should) be.
> <cite>[Chris Coyier - CSS Tricks](https://css-tricks.com/ios-browser-choice)<br>(emphasis added)</cite>

> What Gruber conveniently failed to mention is that Apple’s banning of third-party browser engines on **iOS is repressing innovation in web apps.**  
> <cite>[Richard MacManus - NewsStack](https://thenewstack.io/apples-browser-engine-ban-is-holding-back-web-app-innovation)<br>(emphasis added)</cite>

No other major operating system imposes such a ban. Microsoft Windows, Android, Linux, and Apple’s own macOS all enable browser vendors to choose and modify their own engines. All rival iOS browsers are essentially Safari under the hood. This browser ban is unique to Apple’s iOS.

> On Apple Mobile Devices, **all mobile browsers are required to use Apple’s WebKit browser engine, as specified in Apple’s App Store Review guidelines**. Apple therefore **does not face competition from rival mobile browser engines within its Mobile Ecosystem**. This position will not change **unless Apple lifts its prohibition on the use of alternative browser engines** within its Mobile Ecosystem.
> <cite>[CMA \- SMS Investigation into Apple’s Mobile Platform \- Final Decision](https://assets.publishing.service.gov.uk/media/68fb86f430c331c88be6f0cb/Final_decision_report.pdf)<br>(emphasis added)</cite>

## Will Japan’s Smartphone Act solve the Problem?

Japan’s new law directly prohibits Apple’s behaviour, so will this be enough to solve the issue for Japanese users? That is, will Japanese users be allowed to enjoy the benefits of genuine browser and web app competition?

Unfortunately the answer appears to be no, due to the precise method Apple is complying with the law. Apple has adopted **the same tactic that they used in the EU** where they have been required to allow browser vendors to use their own engines for 21 months, despite this [not a single browser vendor has been able to port their engine to iOS](https://open-web-advocacy.org/blog/apples-browser-engine-ban-persists-even-under-the-dma/).

### EU's Digital Markets Act \- Apple's Circumvention

Apple has been required to allow browser vendors to use their own engines on iOS within the EU since March 7th 2024\. This is under the EU’s Digital Markets Act:

> **The gatekeeper shall not require end users to use, or business users to use, to offer, or to interoperate with**, an identification service, **a web browser engine** or a payment service, or technical services that support the provision of payment services, such as payment systems for in-app purchases, **of that gatekeeper in the context of services provided by the business users using that gatekeeper’s core platform services.**
> <cite>[Article 5(7) - Digital Markets Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?toc=OJ%3AL%3A2022%3A265%3ATOC&uri=uriserv%3AOJ.L_.2022.265.01.0001.01.ENG)<br>(emphasis added)</cite>


Both Google and Mozilla [began porting their respective browser engines, Blink and Gecko, to iOS](https://www.theregister.com/2023/02/07/mozilla_google_apple_webkit/). Other browser vendors are dependent on these ports to bring their own engines to their browsers on iOS, as their products are typically soft forks (copies with modifications) of Blink or Gecko.

However there were significant issues with Apple’s contract and technical restrictions that made porting browser engines to iOS “as painful as possible” for browser vendors.

> Apple’s proposals fail to give consumers viable choices by making it **as painful as possible for others to provide competitive alternatives to Safari** \[...\] This is another example of Apple creating barriers to prevent true browser competition on iOS.
> <cite>[Damiano DeMonte - Mozilla](https://www.theverge.com/2024/1/26/24052067/mozilla-apple-ios-browser-rules-firefox)<br>(emphasis added)</cite>

Many of Apple’s barriers rely on vague security and privacy grounds for which Apple has published no detailed technical justification for both their necessity and proportionality. As the US’s Department of Justice wrote in their complaint:

> In the end, Apple deploys privacy and security justifications as an elastic shield that can stretch or contract to serve Apple’s financial and business interests.
> <cite>[DOJ Complaint against Apple](https://www.justice.gov/opa/media/1344546/dl?inline)<br>(emphasis added)</cite>

At the DMA workshop in 2025, we directly raised with Apple the primary blocker preventing third-party browser engines from shipping on iOS. Apple claimed that vendors like Google and Mozilla have “everything they need” to ship a browser engine in the EU and simply *"have chosen not to do so”*.

> We recognize under the DMA that we've been forced to change. And we have created a program that keeps security and privacy in mind, that keeps the integrity of the operating system in mind, and **allows third parties to bring their browser engine, Google, Mozilla, to the platform. And for whatever reason, they have chosen not to do so.**
> <cite>[Kyle Andeer \- Apple \- Vice President Apple Legal](https://www.youtube-nocookie.com/embed/_nRU9XUbnpM?si=c8fJkMSrN8V0Idhd)<br>(emphasis added)</cite>

Apple has been fully aware of these barriers since at least June 2024, [when we covered them in exhaustive detail](https://open-web-advocacy.org/apple-dma-review/). Multiple browser vendors have also discussed these same issues with Apple directly. The suggestion that Apple is unaware of the problems is not just ridiculous, it’s demonstrably false. **Apple knows exactly what the issues are. It is simply refusing to address them.**

The most critical barriers that continue to block third-party engines on iOS include:

* [**Loss of existing EU users**](https://open-web-advocacy.org/apple-dma-review/#allow-browser-vendors-to-keep-their-existing-EU-customers): Apple forces browser vendors to create entirely new apps to use their own engine, meaning they must abandon all current EU users and start from scratch.

* [**Web developer testing**](https://open-web-advocacy.org/apple-dma-review/#must-not-use-browser-engine-of-operating-system:~:text=Finally%2C%20of%20the%20millions%20of%20web%20developers%20and%20businesses%20outside%20the%20EU%20who%20serve%20EU%20customers%2C%20but%20do%20not%20live%20in%20the%20EU%2C%20should%20Apple%20really%20be%20able%20to%20make%20it%20impossible%20for%20them%20to%20effectively%20test%20their%20software%20on%20competing%20browsers%3F): Apple allows native app developers outside the EU to test EU-specific functionality, but offers no equivalent for web developers to test their software using third-party browser engines on iOS. Apple stated during the workshop to expect updates here but has provided no details since.

* [**No updates on long trips outside EU**](https://open-web-advocacy.org/apple-dma-review/#apple-should-not-break-updates-for-eu-residents-traveling-outside-the-eu): Apple has not confirmed they will not disable browser updates (including security patches) if an EU user travels outside the EU for more than 30 days. This, far from being a security measure, actively lowers users' security by depriving them of security updates.

* [**Hostile legal terms**](https://open-web-advocacy.org/apple-dma-review/#Apples-new-browser-engine-entitlement-contract): The contractual conditions Apple imposes are harsh, one-sided, and incompatible with the DMA’s requirement that rules for API access can only be strictly necessary, proportionate security measures.

Apple has addressed two of the issues we raised [in our original paper](https://open-web-advocacy.org/apple-dma-review/):

* [**Dual engine support**](https://open-web-advocacy.org/apple-dma-review/#must-not-use-browser-engine-of-operating-system): Apple now allows browsers to include both WebKit and their own engine in the same app. This is essential for introducing a new engine to the platform while maintaining fallback compatibility.  
    
* [**Allow browser vendors to test their own browsers**](https://open-web-advocacy.org/apple-dma-review/#testing-for-browser-vendors-and-developers-outside-the-EU): Apple now permits browser vendors to test their own engines outside the EU. Yes, you read that correctly, [Apple initially attempted to block Google, Mozilla, and Microsoft from testing their own browsers](https://www.theregister.com/2024/05/17/apple_browser_eu).

However, the most critical barrier remains firmly in place: Apple still forces browser vendors to abandon all their existing EU users if they want to ship a non-WebKit engine. **This single requirement destroys the business case for porting an engine to iOS.** Building and maintaining a full browser engine is a major undertaking. Requiring vendors to start from scratch in one region (even a region as large as the EU), with zero users, makes the investment commercially nonviable.

> Instead, transaction and overhead costs for developers will be higher, rather than lower, since they must develop a version of their apps for the EU and another for the rest of the world. On top of that, if and when they exercise the possibility to, for instance, incorporate their own browser engines into their browsers (they formerly worked on Apple's proprietary WebKit), they must submit a separate binary to Apple for its approval. What does that mean exactly? **That developers must ship a new version of their app to its customers, and 'reacquire' them from zero.**
> <cite>[Alba Ribera Martínez \- Lecturer in Competition Law and Digital Markets](https://www.linkedin.com/posts/alba-ribera-martinez_dma-apple-browsers-activity-7256583073205538816-N5sZ)<br>(emphasis added)</cite>

### Why this is not compliance with the DMA

At face value, Apple appears to have complied with the letter of Article 5(7). It technically allows third-party engines, but only under technical platform constraints and contractual conditions that render porting non-viable.

> The gatekeeper shall ensure and demonstrate compliance with the obligations laid down in Articles 5, 6 and 7 of this Regulation. **The measures implemented by the gatekeeper to ensure compliance with those Articles shall be effective in achieving the objectives of this Regulation** and of the relevant obligation.
> <cite>[Article 8(1) \- Digital Markets Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?toc=OJ%3AL%3A2022%3A265%3ATOC&uri=uriserv%3AOJ.L_.2022.265.01.0001.01.ENG)<br>(emphasis added)</cite>

> **The gatekeeper shall not engage in any behaviour that undermines effective compliance with the obligations of Articles 5, 6 and 7** regardless of whether that behaviour is of a **contractual**, commercial or **technical nature**, or of any other nature, or consists in the use of behavioural techniques or interface design.
> <cite>[Article 13(4) - Digital Markets Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?toc=OJ%3AL%3A2022%3A265%3ATOC&uri=uriserv%3AOJ.L_.2022.265.01.0001.01.ENG)<br>(emphasis added)</cite>

These two articles clarify that it is not enough for Apple to simply *allow* alternative engines in theory. The measures must be **effective in achieving the article’s objectives**, and Apple must not undermine those objectives by technical or contractual means.

The intent of this provision is laid out clearly in the recitals of the DMA:

> In particular, each browser is built on a web browser engine, which is responsible for key browser functionality such as speed, reliability and web compatibility. **When gatekeepers operate and impose web browser engines, they are in a position to determine the functionality and standards that will apply not only to their own web browsers, but also to competing web browsers and, in turn, to web software applications.** Gatekeepers should therefore not use their position to require their dependent business users to use any of the services provided together with, or in support of, core platform services by the gatekeeper itself as part of the provision of services or products by those business users.
> <cite>[Recital 43 \- Digital Markets Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?toc=OJ%3AL%3A2022%3A265%3ATOC&uri=uriserv%3AOJ.L_.2022.265.01.0001.01.ENG)<br>(emphasis added)</cite>

In other words, Apple should not be in a position to dictate what features, performance, or standards in competing browsers **and the web apps they power**. That is, the intent is to guarantee that browser vendors have the freedom to implement their own engines, thereby removing Apple’s ability to control the performance, features, and standards of competing browsers and the web apps built on them.

Twenty-one months since the DMA came into force, **no browser vendor has successfully ported a competing engine to iOS**. The financial, technical, and contractual barriers Apple has put in place remain insurmountable. These restrictions are not grounded in strictly necessary or proportionate security justifications.

This is not what effective compliance looks like. Article 5(7)’s goals, enabling engine-level competition and freeing web apps from Apple’s ceiling on functionality and stability, have not been met. Under Article 8(1) and Article 13(4), that makes Apple non-compliant.

### Apple's Japan Solution

On December 17th, one day before Apple was required to be in compliance, Apple [published this page](https://developer.apple.com/support/alternative-browser-engines-jp/) and [a new contract for browsers wishing to use their own engine in Japan](https://developer.apple.com/contact/request/download/web_browser_engine_jp.pdf). On the same day they also [updated the contract](https://developer.apple.com/contact/request/download/web_browser_engine.pdf) for browsers wishing to use their own engines in the EU.

The contract for Japan is almost identical to the one for the EU. Apple however appears intent on making browser vendors apply for and sign a contract for each and every region in which they are forced to allow browser competition.

Thankfully, Apple is not forcing browser vendors to have an entirely separate browser for each region. Browser vendors may use the same browser in the EU as they use for Japan:

> Be distributed solely on iOS in Japan (except for any other jurisdiction or Apple platform expressly permitted by Apple under the Developer Agreement (including any addenda) for which You have likewise obtained a corresponding entitlement profile);
> <cite>[Web Browser Engine Entitlement Addendum for Apps in Japan](https://developer.apple.com/contact/request/download/web_browser_engine_jp.pdf)<br>(emphasis added)</cite>

> Be distributed solely on iOS and/or iPadOS in the European Union (except for any other jurisdiction or Apple platform expressly permitted by Apple under the Developer Agreement (including any addenda) for which You have likewise obtained a corresponding entitlement profile);
> <cite>[Web Browser Engine Entitlement Addendum for Apps in EU](https://developer.apple.com/contact/request/download/web_browser_engine.pdf)<br>(emphasis added)</cite>

It also appears that Apple **will not be allowing browser vendors to use their own engine on iPadOS** (a subvariant of iOS with minor changes due to larger screens and an optional Apple pencil).

**Apple has also firmly kept the key restraint in place. Browser vendors wishing to upgrade their Japanese users to their own engine will be unable to do so. Instead they must submit a brand new browser and restart from zero users.**

This is the same tactic Apple has used to hold back browser competition in the EU for the last twenty-one months, and unfortunately if they are allowed to do it in Japan, it will be successful in preventing this law from allowing effective browser competition in Japan.

## Is this Solution Compliant in Japan?

> **By prohibiting actions that prevent the adoption of alternative browser engines** as components of individual software, this Act aims to enhance competition in individual software by allowing app providers to offer diverse browser engine choices. \[...\]<br><br>
> (B) Actions that "Prevent" the Adoption of Alternative Browser Engines<br><br>
> **Actions that prevent the adoption of alternative browser engines refer to conduct that creates a high likelihood of making it difficult for individual app providers to incorporate such engines into their individual software when providing it via a designated provider’s application store**. Such actions may include: **imposing unreasonable technical restrictions** on individual app providers while allowing them to adopt alternative browser engines, placing excessive financial burdens on individual app providers for adopting alternative browser engines, and steering smartphone users away from using individual software that incorporates alternative browser engines.<br><br>
> The determination of whether a designated provider's action constitutes "preventing" the adoption of alternative browser engines **does not require that it be completely impossible for individual app providers to adopt alternative browser engines**. **Instead, the determination is made based on the degree of likelihood that such a result will occur.**<br><br>
> The degree of likelihood of causing practical difficulty in adopting alternative browser engines is assessed comprehensively based on various factors, including: the nature of the designated provider’s actions, the duration of such actions, the impact on individual app providers seeking to adopt alternative browser engines, and the extent of impact on smartphone users utilizing such individual software.
> <cite>[Mobile Software Competition Act Guidelines](https://www.jftc.go.jp/file/MSCA_Guidelines_tentative_translation.pdf)<br>(emphasis added)</cite>

As in the EU, Japan has anticipated attempts at circumvention where browser vendors are nominally permitted to use their own engines but only under conditions that make doing so financially unviable and unlikely to deliver meaningful benefits to Japanese users or businesses.

The act prohibits actions that "prevent" the adoption of alternative browser engines. The Mobile Software Competition Act Guidelines define actions that "prevent" the adoption of alternative browser engines as conduct that creates a high likelihood of making it difficult for app providers to incorporate such engines when distributing software through a designated provider’s app store. These actions include imposing unreasonable technical restrictions, placing excessive financial burdens on app providers that seek to adopt alternative engines, and steering smartphone users away from software that uses those engines.

A finding of prevention does not require that adoption be completely impossible. Instead, it depends on the likelihood that the conduct will result in practical difficulty. 

The requirement that browser vendors be unable to update their existing browsers to use their own engines, lose all their existing Japanese users and be required to submit a new browser which must require users from zero will prevent browser vendors from adopting their own engines.

The published guidelines would clearly apply to Apple’s conduct, which creates a high likelihood of making it difficult for app providers to incorporate alternative browser engines. In making a judgement on the likelihood of such prevention, one can also look at the EU, where Apple has implemented an equivalent solution and not a single browser vendor has successfully ported an independent browser engine under the DMA.

## How to fix it?

The primary fix is to reject Apple’s requirement that browser vendors are not allowed to upgrade their existing Japanese users to their own engine. Apple then has three plausible options to comply:

##### ***Solution A \- Allow Browser Engines Globally***

Apple could allow browsers to compete fairly with their own engines globally. This is the only option that would enable fair competition.

The JFTC can likely not compel such a global solution, but the resulting complexity arises solely from Apple’s choice to limit competition only to those regions where they are legally compelled to allow it.

##### ***Solution B \- Two Binaries for One Bundle ID***

Allow browser vendors to provide two signed binaries under one application (one bundle id). 

These two binaries would be:

* One \- A signed binary which contains the real browser with its own engine to ship to Japan and other jurisdictions that mandate Apple allow browsers to be able to choose and modify their engine.

* Two \- A signed binary which contains the version of the browser which is forced to use Apple’s WKWebView which can be shipped in other jurisdictions.

The operating system would then choose which binary the end user receives based on region. This would allow all existing users to be updated to the new engine.

##### ***Solution C \- Global Dual Engine Binary with Toggle***

Allow browser vendors to ship a single binary globally which contains both the browser vendor's own engine and the WKWebView version. For jurisdictions that haven’t yet forced Apple to allow competition, the browser would use the WKWebView, and for those who have, the browser would use the browser's own engine. Apple can indicate to the browser app whether they are allowed to use their own engine, and based on that the browser could then decide if they wish to use their own engine. Likely only a small technical change would be required for this solution to work. That is for Apple to provide some mechanism to let browser vendors detect whether they can use their engine or not, as legally required. Aside from that this would likely require no technical changes on Apple’s end, they would simply need to update their contracts to allow it.

## Why the Web needs to Win\!

An end to Apple’s ban on third-party browser engines on iOS would be profound. The first consequence is that Safari would come under intense pressure to compete. Given that Safari is Apple’s highest margin product, Apple will not abandon it. Its current budget is a minute fraction of the revenue it pulls in, doubling or tripling its budget would be the obvious response. We have already seen a significant increase in budget and activity in response to the threat of regulators allowing other browser vendors to use their own engines.

More powerful browsers on iOS would be available to power web apps. Features such as [install prompts](https://open-web-advocacy.org/walled-gardens-report/#ios-web-app-installation---a-well-hidden-safari-exclusive), [working and feature complete push notifications](https://webventures.rejh.nl/blog/2024/web-push-ios-one-year/) and [higher stability](https://webventures.rejh.nl/blog/2024/history-of-safari-show-stoppers/) would be game changing for web apps viability. Suddenly, developers would have a viable and interoperable alternative to Apple’s app store. The web could become as dominant on mobile as it is on desktop.

[Apple has long argued that web apps are the alternative to their app store](https://open-web-advocacy.org/walled-gardens-report/#:~:text=Apple%E2%80%99s%20original%20vision,Australia%20with%20Epic.); their app store [rules even claim in its opening](https://developer.apple.com/app-store/review/guidelines/) that the open internet is the alternative:

> **For everything else there is always the open Internet.** **If the App Store model** and guidelines or alternative distribution and Notarization for iOS and iPadOS apps **are not best for your app or business idea that’s okay, we provide Safari for a great web experience too.**  
> <cite>[Apple App Store Rules](https://developer.apple.com/app-store/review/guidelines/)<br>(emphasis added)</cite>

**This change will make web apps a genuine and powerful alternative; until then, Apple’s pretence that “there is always the open internet” functions mainly to mask their app store’s monopolistic dominance.**

> While legal experts expect the EU to challenge Apple's insincere compliance with the DMA, developers should take this opportunity to rethink their native app serfdom. They should push web apps to their limits and then demand further platform improvement. The web doesn't require commission payments, technology fees based on usage, or permission from platform rentseekers. **The web can set the iPhone free, even if Apple won't.**
> <cite>[Thomas Claburn - The Register](https://www.theregister.com/2024/01/27/apple_europe_ios_analysis/)<br>(emphasis added)</cite>

We would like to thank both the HDMC and JFTC for their tireless work. We are deeply concerned that Apple may attempt to replicate in Japan the same tactics it used in the EU, tactics that have undermined the Digital Markets Act’s goal of allowing effective competition between browser engines.

We ask that the JFTC not allow Apple to prevent browser vendors from upgrading their existing Japanese users from using their own engine. We ask that the JFTC ensures that the Smartphone Act is successful in goals with respect to browser engines and is not undermined by such tactics. We also ask that the JFTC considers imposing the same requirement on iPadOS and other iOS variants for interoperability purposes.

This enforcement will benefit Japanese consumers and Japanese businesses via fixing the [significant competition issues that the HDMC’s previous reports identified](https://www.kantei.go.jp/jp/singi/digitalmarket/pdf_e/documents_230616.pdf).