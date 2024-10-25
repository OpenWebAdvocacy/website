---
title: "Apple implements six of OWA's DMA compliance requests"
date: '2024-10-25'
tags: ['Policy', 'Apple', 'EU', 'DMA']
author: "OWA"
---

**TLDR: Apple has fixed 6 important issues with allowing browsers and Web Apps to compete on iOS (including allowing browser vendors to test their own browsers outside the EU) but a massive list of issues remain to be fixed in order to be in compliance with the DMA.**

**Most importantly, there is no indication that Apple will allow Web Apps to run in a browser's own engine despite news report OR use their own engine without being forced to lose their existing customers.**

Readers Note: When you see the term "EU Only" in this article it's important to recognize this as a reflection of Apple's anti-competitive practices. Such measures should ideally be implemented on a global scale, promoting fair competition for all their users in all jurisdictions.

## What have they done?

Apple has announced a series of changes in iOS 18.2 related to third-party browsers in the EU.

> Following feedback from the European Commission and from developers, in these releases developers can develop and test EU-specific features, such as alternative browser engines, contactless apps, marketplace installations from web browsers, and marketplace apps, from anywhere in the world. Developers of apps that use alternative browser engines can now use WebKit in those same apps.
> <cite>[Apple - Blog on iOS 18.2](https://developer.apple.com/news/?id=qs5bol0g)</cite>

### Dual Engine Browsers (EU ONLY)

Due to Apple’s 16 year ban of third-party browser engines, browser vendors will need to gradually phase in their own engines over time using phased roll-outs and multi-variant testing. Deploying an engine to a new operating system is a complex process and has to be done in a slow and methodical manner to identify bugs and performance issues.

As a result, it is essential that all browser vendors be allowed to ship dual engine browsers. That is, browsers that can use both the system provided WKWebView and their own engine within a single binary. The binary would only contain the code for a single engine, the one the browser vendor provides, since the WKWebView is an operating system provided component.

Browser vendors also need to be allowed to keep their existing EU users. Allowing dual engine browsers also makes this simple by letting browser vendors simply toggle their own engine on or off depending on if Apple allows them to use it in a particular jurisdiction.

> Be a separate binary from any Application that uses the system-provided web browser engine;
> <cite>[Apple Browser Engine Entitlement Contract - 2024-06-24](/files/Apple%20Browser%20Engine%20Entitlement%20Contact%20(2024-06-24).pdf)</cite>

To our knowledge there was no reasonable or rational reason to impose this restriction. It would also appear to be in violation of the DMA which only allows APIs to be restricted on the grounds of strictly necessary, proportionate and justified security grounds.

On October the 23rd, [the contract](/files/Apple%20Browser%20Engine%20Entitlement%20Contact%20(2024-10-23).pdf) was updated to remove that single line. 

Apple also announced the change in this blog post:

> Developers of apps that use alternative browser engines can now use WebKit in those same apps.
> <cite>[Apple - Blog on iOS 18.2](https://developer.apple.com/news/?id=qs5bol0g)</cite>

### Allowing Browser Vendors to Test their own Browsers Outside the EU

Astonishingly, Apple decided earlier this year to make it impossible for browser vendors to test their own browsers if the developers were not physically located in the EU.

> The Register has learned from those involved in the browser trade that Apple has limited the development and testing of third-party browser engines to devices physically located in the EU. That requirement adds an additional barrier to anyone planning to develop and support a browser with an alternative engine in the EU. <br><br>
> It effectively geofences the development team. Browser-makers whose dev teams are located in the US will only be able to work on simulators. While some testing can be done in a simulator, there's no substitute for testing on device – which means developers will have to work within Apple's prescribed geographical boundary.
> <cite>[Thomas Claburn - The Register](https://www.theregister.com/2024/05/17/apple_browser_eu/)</cite>

This was clearly ridiculous. With iOS 18.2, Apple now allows not only browser vendors but all app developers to test their own apps which use APIs or functionality that Apple has been forced to share by the DMA.

However, there is still no solution proposed by Apple to allow web developers outside the EU the ability to test and maintain their websites and Web Apps for EU consumers on third-party browsers which use their own engine. This is and will remain a significant barrier to browser competition on iOS.

Our proposal is that web developers outside the EU should be able to download test versions of EU browsers via an Apple Developer Account for the purpose of testing their own products.

### Centralised Defaults (GLOBAL)

For the last 16 years Apple has had no centralised location to change defaults. Up until iOS late 2020 (iOS 14\) it wasn’t even possible to change the default browser. When Apple finally did allow users to change the default browser, they added the [brazen deceptive pattern of hiding the dropdown to change default browser if Safari was already the default](https://open-web-advocacy.org/blog/apples-one-weird-trick-to-stop-you-changing-your-default-browser/). This was only quietly fixed in iOS 17.5 [due to OWA](https://open-web-advocacy.org/blog/apples-one-weird-trick-to-stop-you-changing-your-default-browser/) [and later Ars Technica](https://arstechnica.com/tech-policy/2024/04/report-people-are-bailing-on-safari-after-dma-makes-changing-defaults-easier/) calling Apple out on the behaviour.

In [our review of Apple’s DMA compliance](https://open-web-advocacy.org/apple-dma-review/#default-browser-dark-patterns-and-prompt-api) we outlined that Apple needed to add a centralised location to change defaults.

[In August](https://www.theverge.com/2024/8/22/24226110/apple-iphone-ipad-default-apps-eu-competition) Apple announced that they were making this change for the EU. Now, this change is being rolled out globally. Our assumption is that Apple struggled to explain to other regulators worldwide why this change, already implemented for EU users, should be withheld from global users.

### Browsers can Detect if Default Browser (EU ONLY)

Browsers can now detect if they are the default browser **once per year**.

> In iOS 18.2 and iPadOS 18.2, a new API will allow a browser app to check if it is currently the default browser app. To reduce the likelihood that users will face continuous requests to set a browser as their default, this API will only tell the browser app if it is the default once per year. This API will be further documented in an upcoming beta release of iOS 18.2 and iPadOS 18.2.
> <cite>[Apple - Default Apps](https://developer.apple.com/documentation/updates/defaultapps)</cite>

We had previously written about [how browser vendors need the ability to detect whether they are the default browser](https://open-web-advocacy.org/apple-dma-review/#default-browser-dark-patterns-and-prompt-api) in order to allow better onboarding processes and not bother users who have already set their browser as default.

While there is some rationale for preventing browsers from repeatedly asking users, it is not clear that it is necessary to limit the ability to check the current status. Apple has for example felt there is no need to add a limit on the number of times a native app [can check if they have permission to use notifications](https://developer.apple.com/documentation/usernotifications/asking-permission-to-use-notifications#Customize-notifications-based-on-the-current-authorizations).

We’ll be checking in with the browser vendors and pro-consumer groups to see what they think of the once per year limit, to work out our own opinions as to whether this is reasonable consumer protection measure or if it’s simply anti-competitive. Safari pulls in $20 billion USD annually for Apple and 14-16 percent of Apple's annual operating profits, so any decisions like this have to be examined with a fine-tooth comb.

### Prompt for Default Browsers missed in Previous Choice Screen to be Placed in the Hotseat/HomeScreen (EU ONLY)

[In August Apple announced they would implement one of our recommendations](https://open-web-advocacy.org/blog/apple-adopts-6-owa-choice-architecture-recommendations/) that browsers chosen in the choice seat would get placed in the hotseat/dock/first homescreen replacing Safari.

> If Safari is currently in the user’s Dock or on the first page of the Home Screen and the user selects a browser that is not currently installed on their device from the choice screen, the selected browser will replace the Safari icon in the user’s Dock or in the Home Screen
> <cite>[Apple - About the browser choice screen in the EU (2024-08-19)](https://web.archive.org/web/20240919123712/https://developer.apple.com/support/browser-choice-screen/)</cite>


One issue with this, [which we wrote about at the time](https://open-web-advocacy.org/blog/apple-adopts-6-owa-choice-architecture-recommendations/), is it does not apply to browsers which are already installed. Apple needed to update this to move already installed browsers onto the hotseat to replace the Safari icon when it had been selected on the choice screen.

Apple have now update the policy with the following relatively complex paragraphs:

> If Safari is currently in the user’s Dock or on the first page of the Home Screen and the user selects a browser that is not currently installed on their device from the choice screen, the selected browser will replace the Safari icon in the user’s Dock or in the Home Screen. If the user selects a browser that is currently installed on their device from the choice screen but not on the first page of the Home Screen or the Dock, the selected browser will replace the Safari icon in the user’s Dock or in the Home Screen. <br><br>
> If Safari is currently in the user’s Dock or on the first page of the Home Screen and the user had previously selected another other browser as their default from the choice screen before updating to iOS 18.2, they will be prompted once upon first launch of Safari about whether they want to swap Safari’s icon with the icon of their default browser. This is only if their default browser is not on the first page of the home screen or the Dock.
> <cite>[Apple - About the browser choice screen in the EU](https://developer.apple.com/support/browser-choice-screen/)</cite>

This means that any browser chosen on the choice screen will replace Safari on the dock/first home screen if it is there.

For browsers that were already installed prior to the previous choice screen, chosen as default on the choice screen (and which Apple decided not to move onto the dock/first home screen), these browsers will now prompt the user if they would like to swap with Safari’s icons location on first launch of Safari.

Prompting the user when they are trying to open Safari feels like an attempt to get the user to dismiss the prompt, as they are likely midway through a task; and it’s hard to see a reason for this other than an anti-competitive attempt to add friction to the user switching which browser they primarily use. This prompt should happen as part of the iOS 18.2 update update process.

### Users can uninstall Safari (EU ONLY)

Apple will now let EU users uninstall Safari. This is psychologically important as it indicates to users that Safari is just another app on their phone that can be uninstalled and replaced, just like any other non-Apple app.

This is a change that is required by the DMA and that [we argued in favour of](https://open-web-advocacy.org/apple-dma-review/#safari-is-not-uninstallable) earlier this year. Importantly, the WKWebView and SFSafariViewController should be treated as system components, and it should not be possible to uninstall them.

## What's Left?

### Browsers still can't install Web Apps powered by their Own Engine

> With the release of the first beta of iOS 18.2 to developers on Wednesday, Apple has published documentation for a new API that will let third-party browsers add web apps to the iPhone Home Screen using their own custom engine. **This means that the entire web app experience will run using the same engine as the browser through which it was added.**<br><br>
> Of course, there’s a catch. Currently, only web browsers distributed in the EU can have a custom engine. In the rest of the world, Apple still requires web browsers for iPhone and iPad to use Safari’s WebKit. Unsurprisingly, the new API for web apps is also only available in the EU.
> <cite>[Filipe Espósito - 9to5mac](https://9to5mac.com/2024/10/23/ios-18-2-web-apps-browser-engine-in-the-eu/)<br>(emphasis added)</cite>

When we first saw the article headline we were incredibly excited, as this would finally be a key step into unlocking Web Apps. Web Apps are amazing because you only have to code them once, they work on every device, have significantly better security, and don't require you to pay excessive rents to gatekeepers.

However, having looked through Apple's documentation we believe this functionality won't allow third-party browsers to install web apps powered by their own engine, and will simply continue to exclusively offer Apple's WebKit based Web Apps in contravention of the DMA.

We have contacted Filipe Espósito from 9to5mac to request that he verify this statement with Apple and the other major browser vendors. At the time of publishing this article, we have yet to receive a response.

### Browser Vendors are still Obligated to Ship a Brand New App

Apple has chosen to restrict browser competition on iOS to the EU. Apple’s actions seek to force third-party browser vendors to build, develop, and maintain two versions of their apps for iOS while Apple’s own Safari bears no such costs.

Apple’s rules appear to force browser vendors to ship a brand new version of their app in the EU, rather than update existing apps to use their own engines. This will cause browser vendors to lose existing customers, as consumers will need to manually download the new browser.

This complexity and friction is a direct result of Apple’s own anti-competitive actions over the past 16 years. Apple’s insistence that competitors will be allowed to compete on a level playing field (with their own engines) only in the EU is already a high burden, and this rollout plan would levy additional transition costs on competitors. It is reasonable and proportionate that Apple takes steps to mitigate the damage they appear intent on causing.

Forcing browser vendors to ship two distinct products in Europe will lead to end user confusion and significant harm to these browser vendors. We do not believe that such an approach would be either fair or compliant with the DMA.

Apple should not be forcing browser vendors to reacquire existing users. Apple will need to implement a solution where browser vendors can use their own engines and keep their existing EU users.

Absent the real good faith solution of just allowing browser competition globally, there remains a simple solution: to simply allow browser vendors to ship their browsers globally under a single bundle ID with both Webkit and their own engines and let them know if that user is allowed to use the browser’s own engine with a true/false environment variable or equivalent.

Additional complexity and questions arise when users move in and out of the EU, will their browser continue to work when they are on holiday?  How does data transfer work (cookies, Indexeddb, localstorage etc) internally between the WebKit version and the browsers own engine’s version. These are challenging issues that arise from Apple's reluctance to address anti-competitive behaviour except in jurisdictions where they are compelled to do so.

### Other Problems

While today's news are important steps to allowing fair and effective browser and web app competition on iOS, a great many DMA compliance issues remain, including:

* [Allow browser vendors to keep their existing EU consumers when switching to use their own engine.](https://open-web-advocacy.org/apple-dma-review/#allow-browser-vendors-to-keep-their-existing-EU-customers)  
* [Allowing Developers to be able to test their browsers and web software outside the EU.](https://open-web-advocacy.org/apple-dma-review/#testing-for-browser-vendors-and-developers-outside-the-EU)  
* [Restricting Apple's API contract for browsers down to strictly necessary, proportionate and justified security measures.](https://open-web-advocacy.org/apple-dma-review/#remove-non-security-terms)  
* [Make clear what the security measures are for third party browsers using their own engine by publishing them in a single up-to-date document.](https://open-web-advocacy.org/apple-dma-review/#security-rules-must-be-clear)  
* [Implementing Install Prompts in iOS Safari for Web Apps.](https://open-web-advocacy.org/apple-dma-review/#implement-web-app-install-prompts-for-ios-safari-and-wKWebView-browsers)  
* [Allowing Browsers using their own engine to install and manage Web Apps.](https://open-web-advocacy.org/apple-dma-review/#web-app-installation-and-management-for-third-party-browsers)  
* [Removing any App Store rule that would prevent third party browsers from competing fairly.](https://open-web-advocacy.org/apple-dma-review/#app-store-rules-for-browsers-must-not-violate-article-5-7-and-recital-43)  
* [Make notarization a fast and automatic process, as on macOS.](https://open-web-advocacy.org/apple-dma-review/#apple-should-make-notarization-for-directly-downloaded-browsers-automatic)  
* [Allow direct browser installation independently from Apple’s app store.](https://open-web-advocacy.org/apple-dma-review/#direct-browser-installation)  
* [Allow users to switch to different distribution methods of a native app and allow developers to promote that option to the user.](https://open-web-advocacy.org/apple-dma-review/#allow-users-to-switch-the-distribution-method-of-native-apps)  
* [Respect the users choice of default browser in SFSafariViewController](https://open-web-advocacy.org/blog/in-app-browsers-the-worst-erosion-of-user-choice-you-havent-heard-of/)  
* [Don’t lock Safari to Apple Pay](https://open-web-advocacy.org/apple-dma-review/#safari-is-locked-to-apple-pay)  
* [Don't break third party browsers for EU residents who are travelling.](https://open-web-advocacy.org/apple-dma-review/#apple-should-not-break-updates-for-eu-residents-traveling-outside-the-eu)  
* [Opt-Into Rights contract should be removed.](https://open-web-advocacy.org/apple-dma-review/#apple-should-not-break-updates-for-eu-residents-traveling-outside-the-eu:~:text=with%20the%20DMA.-,4.3.6.%20Opt%2DIn%20Rights%20Contract%20Should%20Be%20Removed,-All%20businesses%20serving)  
* [Core Technology Fee should be removed.](https://open-web-advocacy.org/apple-dma-review/#core-technology-fee-should-be-removed)  
* [Publish a new more detailed compliance plan.](https://open-web-advocacy.org/apple-dma-review/#apple-should-publish-a-new-more-detailed-compliance-plan)

## What now?

The EU Commission seems to be a slow-moving, but unstoppable, force. Despite the DMA having no legal power outside of the EU, this is already having a global impact with beneficial changes being exported worldwide such as [Apple allowing game emulators](https://au.pcmag.com/mobile-apps/104689/apple-is-finally-allowing-retro-game-emulators-in-the-app-store) and the [new fairer centralised defaults screen](https://www.theverge.com/2024/10/23/24277926/apple-iphone-default-messaging-apps-ios-18-2).

> When Apple said that iPhone owners in the EU would be able to set new default apps for things like calling and messaging, it sounded a lot like only people in the EU would get that option.<br><br>
> That’s not the case<br><br>
> [...]<br><br>
> But the big stuff, like support for alternative app stores and browser engines, has mostly been confined to the EU. A side effect is that a European iPhone was starting to look quite a bit different from one in the US, which was weird. But by spreading some of these new options across borders, Apple will maintain better consistency in its product. At the very least, it’s a little more fun.
> <cite>[Allison Johnson - The Verge](https://www.theverge.com/2024/10/23/24277926/apple-iphone-default-messaging-apps-ios-18-2)</cite>

We wholeheartedly agree with the Verge, more competition and more ability for developers to innovate is more fun and, most importantly, it’s what is best for consumers.

With each step the EU takes we are starting to see a future where gatekeepers' anti-competitive hold on their operating systems is broken, and the Web can compete fairly on mobile. These DMA changes are spreading out globally and [regulators in other countries are watching carefully as they plan their own policies to allow for fair and effective competition](https://open-web-advocacy.org/blog/owa-2023-review/). 

Stay tuned and follow us in all the usual places:
- **Email:**        [contactus@open-web-advocacy.org](mailto:contactus@open-web-advocacy.org)
- **Mastodon:**      [@OpenWebAdvocacy](https://mastodon.social/@owa)
- **Discord:**      [OpenWebAdvocacy](https://discord.gg/x53hkqrRKx)
- **LinkedIn:**     [open-web-advocacy](https://www.linkedin.com/company/open-web-advocacy/)
- **Twitter:**      [@OpenWebAdvocacy](https://twitter.com/OpenWebAdvocacy)
- **Web:**         [https://open-web-advocacy.org](https://open-web-advocacy.org)