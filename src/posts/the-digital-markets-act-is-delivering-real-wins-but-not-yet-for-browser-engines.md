---
title: 'The Digital Markets Act Is Delivering Real Wins, But Not Yet for Browser Engines'
date: '2026-05-15'
tags: ['EU', 'DMA']
author: [ "OWA" ]
---

**TL;DR: The Digital Markets Act is delivering real wins for consumers in the EU, and in some cases globally, by forcing Apple and Google to open up functionality previously reserved for their own products. Apple is now challenging several of these changes in court, seeking to roll back many of the DMA’s interoperability gains. But one major failure stands out: more than two years after Apple was required to allow third-party browser engines on iOS in the EU, no browser vendor has been able to port one under Apple’s current rules. The European Commission should investigate Apple’s browser engine compliance, and regulators worldwide should ask why these interoperability benefits are not available to all users globally.**

## Digital Markets Act Wins

> Similarly, the interoperability requirement – Article 6(7) DMA – requires gatekeepers to allow third parties to access the same OS features that are available to the gatekeeper’s own services that run on top of the OS. **This is to ensure that Apple and Google no longer have exclusive access to OS features and that third-party developers can also build services and compete on the merits with the gatekeepers on their platforms.** Importantly, Apple and Google remain free to decide which features are added to the OS – the DMA simply requires a level playing field. Users also remain free to decide which apps to use, and which permissions to grant to these apps.
> <cite>[European Commission](https://digital-markets-act.ec.europa.eu/factsheet-how-dma-making-smartphones-better-interoperability-and-data-portability-case-studies-2026-05-11_en)<br>(emphasis added)</cite>

DMA enforcement has been slower than many advocates hoped, but the emerging results show that concrete obligations can produce real interoperability gains. It is worth taking the time to acknowledge its successes. **These are successes that other regulators now have the opportunity to replicate.**

On the 11th of May 2026, the European Commission [published a list of significant benefits emerging from the DMA](https://digital-markets-act.ec.europa.eu/factsheet-how-dma-making-smartphones-better-interoperability-and-data-portability-case-studies-2026-05-11_en).

These include:

* **Full device data transfer and eSIM transfer (Apple, Google \- Worldwide)**  
  Apple and Google are developing mechanisms to make it easier for users to transfer device data, and separately eSIMs, between iOS and Android.  
    
* **Browser data portability (Apple \- Worldwide)**  
  Apple has implemented an OS-mediated and user-controlled mechanism that allows users to transfer browser data from one browser to another.  
    
* **Interoperability Requests (Apple, Google, Microsoft \- EU Only)**  
  Apple, Google and Microsoft now each provide a mechanism for developers to request access to functionality under Article 6(7) of the DMA.  
    
* **Notifications (Apple \- EU Only)**  
  A user’s third-party connected devices will be able to receive and respond to notifications from that user’s iPhone.  
    
* **Proximity pairing (Apple \- Pending)**  
  Allows third-party connected devices to pair with an iPhone through a simplified proximity-based procedure.

* **Automatic audio switching (Apple \- Pending)**  
  Allows users to automatically switch the audio source from one device to another, e.g. from a smartphone to a computer, when using supported wireless headphones.  
    
* **Automatic Wi-Fi connection (Apple \- EU Only)**  
  Allows connected devices to seamlessly join the Wi-Fi networks the iPhone is connected to, as currently possible on the Apple Watch.  
    
* **NFC Controller in Reader/Writer mode (Apple \- EU Only)**  
  In iOS 26.0, Apple released the NFCPaymentTagReaderSession class, which enables a number of new payment-related use cases on iPhones.  
    
* **High-bandwidth peer-to-peer Wi-Fi connection (Apple \- Worldwide)**  
  In iOS 26.0, Apple released the Wi-Fi Aware framework. Wi-Fi Aware is a modern and secure peer-to-peer Wi-Fi standard that allows communication with nearby devices without an internet connection.  
    
* **Features for close-range wireless file transfer solutions (Apple)**  
  Apple has released and updated relevant iOS frameworks, including AccessorySetupKit, Wi-Fi Aware and DeviceDiscoveryUI, to give developers access to iOS-controlled features used by AirDrop. This allows developers to build third-party file-transfer apps that can securely pair and connect nearby devices to exchange files.  
    
* **Background execution (Apple \- Worldwide)**  
  In iOS 26, Apple released an update to make sure that Bluetooth accessories continue working as intended when the user quits the companion app of their connected device, or when the connected device returns within range after being disconnected (e.g. when the user returns home after a run).  
    
* **Password managers (Apple \- Worldwide)**  
  Third-party password managers can now suggest strong passwords and allow the user to create a new password entry inline when they log into a new website/app, without going through a separate window.  
    
* **Alarm apps (Apple \- Worldwide)**  
  Third-party alarm apps are now able to play an alarm at a specified time or when the device is muted.  
    
* **Memory allowance (Apple \- Worldwide)**  
  Apple increased the amount of memory that developers can use. Previously the limit was 15 MB but Apple’s apps could use up to 200 MB (and 250 MB on some devices). Apple now globally provides the same memory limits to third parties.  
    
* **Call spam protection (Apple \- Worldwide)**  
  In iOS 18, Apple released an API that allows developers to provide caller ID and call-blocking services from a server that the developer maintains.  
    
* **Wake words (Google \- Proposed)**  
  These proposed measures would allow third-party AI apps to wake and be invoked on certain phrases. This will allow developers to make an equivalent to “Hey Google” on Android.

* **Access points with contextual data (Google \- Proposed)**  
  These proposed measures include allowing third-party apps and services to be invoked via the system-wide access points, such as long press on the home button.

* **App interactions and screen automation (Google \- Proposed)**  
  These proposed measures would ensure that competing AI services can interact with applications and execute tasks at the user’s request, such as sending an email using the user's preferred email app, ordering food or sharing a photo with friends.

Apple appears more prominently in this list than other gatekeepers because, for years, it has more aggressively reserved key operating-system functionality for its own apps, devices and services, limiting the ability of third-party developers to compete on equal terms. The DMA’s interoperability obligations directly target this kind of self-preferencing by requiring gatekeepers to provide effective access to the same hardware and software features available to their own services.

### Other Successes

One benefit not mentioned in the European Commission’s list [is global interoperable AirDrop between iOS and Android](https://arstechnica.com/gadgets/2025/11/the-eu-made-apple-adopt-new-wi-fi-standards-and-now-android-can-support-airdrop/). This was likely not listed because it was not directly compelled, but instead emerged from Apple’s compliance with related device-interoperability requirements. To Apple’s credit, it has not prevented this from being supported worldwide.

Also not mentioned are the [significant gains in EU market share that smaller browsers have had on iOS](https://open-web-advocacy.org/blog/googles-hotseat-hypocrisy/) due to the browser choice screen, which also [grants the hotseat on both iOS](https://open-web-advocacy.org/blog/apple-adopts-6-owa-choice-architecture-recommendations/) [and Android](https://open-web-advocacy.org/blog/google-backs-down--will-grant-hotseat-in-eu-browser-choice-screen/). This matters as stronger competition from smaller browser vendors is a key method of pushing the Web forward.

This is an important list of benefits that consumers in the EU, and in some cases globally, are already beginning to receive. **We recommend that regulators worldwide consider replicating these in their own jurisdictions. If a gatekeeper claims a feature must remain EU-only for security reasons, obligate the gatekeeper to publicly justify which security risks they are protecting users from and why keeping that functionality reserved for themselves is the only viable measure available.**

## Still No Browser Engine Competition on iOS

These wins show that the DMA can work when obligations are investigated and enforced. Browser engines, however, remain a glaring exception.

> **The gatekeeper shall not require end users to use, or business users to use, to offer, or to interoperate with**, an identification service, **a web browser engine** or a payment service, or technical services that support the provision of payment services, such as payment systems for in-app purchases, **of that gatekeeper in the context of services provided by the business users using that gatekeeper’s core platform services.**
> <cite>[Article 5(7) \- Digital Markets Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?toc=OJ%3AL%3A2022%3A265%3ATOC&uri=uriserv%3AOJ.L_.2022.265.01.0001.01.ENG)<br>(emphasis added)</cite>

More than two years have passed since March 7, 2024, when Apple became legally obligated under Article 5(7) of the DMA to allow third-party browser engines, [yet not a single browser vendor has successfully ported their own engine to iOS in the EU](https://www.theverge.com/news/706569/apple-ios-iphone-alternative-browser-webkit-owa). Over 26 months later, the practical outcome remains unchanged, strongly suggesting that [Apple’s contractual barriers are preventing browser vendors from shipping](https://open-web-advocacy.org/blog/apples-browser-engine-ban-persists-even-under-the-dma/). These [are the very issues we outlined in 2024 as likely to prevent browser vendors from being able to port their engines](https://open-web-advocacy.org/apple-dma-review/), and urged the Commission to fix.

Last year we argued [in extensive detail why we believe Apple is obligated to fix this under the DMA](https://open-web-advocacy.org/blog/apples-browser-engine-ban-persists-even-under-the-dma/#is-apple-obligated-to-fix-this-under-the-dma%3F). Apple must, under Articles 8(1) and 13(4) both ensure its compliance measures are effective in achieving the objectives of the DMA and that they do not undermine effective compliance. **We would argue they have failed in both respects and are thus not in compliance.**

> The gatekeeper shall ensure and demonstrate compliance with the obligations laid down in Articles 5, 6 and 7 of this Regulation. **The measures implemented by the gatekeeper to ensure compliance with those Articles shall be effective in achieving the objectives of this Regulation** and of the relevant obligation.
> <cite>[Article 8(1) \- Digital Markets Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?toc=OJ%3AL%3A2022%3A265%3ATOC&uri=uriserv%3AOJ.L_.2022.265.01.0001.01.ENG)<br>(emphasis added)</cite>

> **The gatekeeper shall not engage in any behaviour that undermines effective compliance with the obligations of Articles 5, 6 and 7** regardless of whether that behaviour is of a **contractual**, commercial or **technical nature**, or of any other nature, or consists in the use of behavioural techniques or interface design.
> <cite>[Article 13(4) \- Digital Markets Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?toc=OJ%3AL%3A2022%3A265%3ATOC&uri=uriserv%3AOJ.L_.2022.265.01.0001.01.ENG)<br>(emphasis added)</cite>

This matters because the Web is one of the world’s most critical software ecosystems, and the browsers that run it determine how capable, secure, and competitive it can be. The Web generates trillions of dollars in consumer value each year. Its impact is so deeply woven into everyday economic activity that it is hard to measure precisely. In 2017, economists Erik Brynjolfsson, Avanish Collis, and Felix Eggers [estimated that the Web’s consumer surplus in the United States amounted to about 40% of GDP, or roughly US$8 trillion annually](https://intheblack.cpaaustralia.com.au/economy/how-much-is-the-internet-worth). As a rough estimate scaling globally, that would imply around US$50 trillion in annual consumer surplus. Even if the true figure is significantly lower, the conclusion is the same. Competition among browsers is not a minor issue, but a major force powering a substantial percentage of the global economy.

**For these reasons, we urge the Commission to investigate whether Apple’s browser engine rules comply with the DMA in practice, or whether they continue to prevent effective browser engine competition on iOS.**

## Apple’s Lawsuits

Apple is taking the European Commission to court in three separate court cases related to Article 6(7).

In [the first case](https://open-web-advocacy.org/blog/owa-2025-review/#:~:text=In%20this%20case%20\(still%20ongoing\)%20Apple%20is%20taking%20the%20EU%20Commission%20to%20court%20claiming%20the%20following%20points%3A), Apple is claiming to have multiple App Stores despite the fact that users use the same Apple account across all of them, pay once for apps on all of them and developers upload and update their apps to all of them in a single process. Apple is asking the court to annul the Commission’s decision designating iOS as a gatekeeper, declare Article 6(7) inapplicable and annul the finding that Apple’s App Store is a single core platform service.

[The second case](https://open-web-advocacy.org/blog/owa-2025-review/#:~:text=This%20case%20\(also%20still%20ongoing\)%20relates%20to%20the%20final%20decision%20in%20the%20EU%20Article%206\(7\)%20specification%20proceeding%20against%20Apple.) relates to the final decision in the EU Article 6(7) specification proceeding against Apple. Article 6(7) of the DMA requires gatekeepers to provide third-party developers, free of charge, with effective interoperability with hardware and software features available to the gatekeeper’s own services, subject only to strictly necessary, proportionate and justified security conditions. The EU Commission has imposed an interoperability process on Apple due to Apple’s repeated failure to share reserved functionality and its slow-walking of existing requests. This new interoperability process imposed a clear sequence of steps and strict time limits for each step on Apple. It also allowed developers to request detailed technical references from Apple to discover what undocumented functionality is available to request interoperability with.

Apple argues that the requirements are disproportionate under the European Charter of Fundamental Rights, that the European Commission exceeded the limits set by Article 291 TFEU, and that the Commission misapplied Article 6(7) of the DMA. Apple also argues that it should not be required to make new functionality available to third parties at the same time as it provides that functionality to its own apps and services. It objects to fixed time limits for each stage of the interoperability process, and to developers being able to request technical references from Apple to identify undocumented functionality for which they may seek interoperability.

In [this third case](https://open-web-advocacy.org/blog/owa-2025-review/#:~:text=In%20this%20case%20\(also%20still%20ongoing\)%20Apple%20is%20arguing%20that%20the%20EU%20misapplied%20the%20law%20by%20imposing%20specific%20interoperability%20requirements%20for%20the%20following%20features), Apple is arguing that the EU misapplied the law by imposing specific interoperability requirements for various device APIs including Background Execution, Automatic Audio Switching, Proximity-Triggered Pairing, Close-range Wireless File Transfer, iOS Notifications, Media Casting, Automatic Wi-Fi Connection, NFC Controller in Reader/Writer Mode and High-Bandwidth Peer-to-Peer Wi-Fi Connection. Essentially Apple is arguing it should not need to share this functionality and should be able to reverse many of the benefits of the DMA highlighted earlier in this article.

Apple is also arguing that it should not have to share new functionality with third-party developers at the same time it grants them to its own apps, devices and services.

These cases show that Apple is using litigation to challenge many of the DMA-driven changes already benefiting users and competitors. That means these benefits depend on the ability of the European Commission to successfully defend itself in court.

## What Now?

The DMA is working, but its success depends on continued enforcement. The European Commission should defend the interoperability gains already secured, investigate why Apple’s browser engine rules have failed to produce meaningful competition on iOS, and ensure that Apple’s compliance measures are effective in practice.

Other regulators should not wait. The benefits already emerging in the EU show that these obligations are technically achievable and can be delivered without depriving users of choice, privacy or security. Where Apple restricts these improvements to the EU, regulators should ask why users in their own jurisdictions are being denied the same benefits. If Apple claims security justifies those limits, it should be required to publicly explain the specific risks, provide evidence, and show why keeping functionality reserved to itself is the least restrictive way to address them.

Finally, regulators should treat mobile web competition as central to digital markets enforcement. The Web is not merely another app category; it is an immense, independent ecosystem for software, services, payments, games, media, communication and commerce. Restoring fair browser and browser engine competition on iOS would help unlock competition across all of these markets at once. 

**If regulators want to reduce gatekeeper control and give businesses an open, interoperable and rent-free route to reach users on mobile, they must ensure that the Web can compete fairly.**