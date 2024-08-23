---
title: "Apple adopts 6 of OWA's Choice Architecture Recommendations"
date: '2024-08-23'
tags: ['Policy', 'Apple', 'EU']
author: "OWA"
---

[Today, in a step forward for user choice and browser competition](https://developer.apple.com/support/browser-choice-screen/), Apple has adopted 6 out of 11 of our recommendations to comply with the EU's Digital Markets Act in relation to browser defaults and choice screens. In addition Apple has fixed [two severe and deliberate deceptive patterns](https://open-web-advocacy.org/blog/apples-one-weird-trick-to-stop-you-changing-your-default-browser/) that we campaigned to fix including at the DMA's workshop.

[In March the EU Commission opened an investigation into Apple](https://open-web-advocacy.org/blog/eu-opens-dma-investigations/) for non-compliance with the Digital Markets Act related to user choice obligations. Since that time we have been working to ensure that all gatekeepers comply with the DMA with respect to browsers and Web Apps.

## Implemented Recommendations

1. [Browser vendors should be **granted the hotseat** when being selected as the default browser in the choice screen.](https://open-web-advocacy.org/apple-dma-review/#apples-dark-pattern-exacerbated-by-keeping-hotseat)

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/_m6tQtDpSbM?si=H37IuGP1F_yueGtd' frameborder='0' allowfullscreen title="OWA v Apple: EC DMA Q&A 2 - Will Apple address the dark patterns when changing the default browser?"></iframe></div>

2. [Browsers should be able to **display more information** in the choice screen](https://open-web-advocacy.org/apple-dma-review/#browser-should-be-allowed-to-show-more-information-on-choice-screen)

3. [Once chosen, browsers should be **immediately set as the default and downloaded in the background.**](https://open-web-advocacy.org/apple-dma-review/#should-be-a-background-and-direct-download)

4. [Browser vendors **need more data** to measure the effectiveness of the choice screen.](https://open-web-advocacy.org/apple-dma-review/#browser-vendors-need-data-on-the-choice-screen-to-measure-performance)

5. [The choice screen should be shown to users **when syncing or purchasing a new device**.](https://open-web-advocacy.org/apple-dma-review/#periodic-choice-screen)

6. [The option to change default browser should be moved out of the browser settings and into a centralised location.](https://open-web-advocacy.org/apple-dma-review/#default-browser-dark-patterns-and-prompt-api)

According to [Apple’s announcement](https://developer.apple.com/support/browser-choice-screen/) the following recommendations will be implemented on iOS (including on iPads). We will need to observe the implementation for additional issues but this is a positive step forward for browser competition and Apple's compliance with the Digital Markets Act.

## Unimplemented Recommendations

1. [The user’s choice of default browser must be used for In-App Browsing (SFSafariViewController)](https://open-web-advocacy.org/apple-dma-review/#sfsafariviewcontroller-must-respect-browser-choice)
<br>Currently most In-App browsing on iOS is locked to Safari which provides Apple a very significant advantage and a lot of traffic. It is critical for browser choice that if a user decides on a particular browser, that browser is then used for web browsing by default across the OS including in In-App Browsers.<br><br>

2. [Browsers on the choice screen shouldn't be Locked to the Gatekeeper’s app store](https://open-web-advocacy.org/apple-dma-review/#direct-install-browsers-should-be-included-in-choice-screens)
<br>Browser vendors should be able to choose if they want to have their browser distributed directly or via the AppStore, including if they also distribute via the AppStore. The choice-screen should not force any browser vendor to have to distribute via Apple’s designated core platform service and thus lock them into Apple’s unfair contracts and rules + 30% of any In-App payments.
<br><br>Apple has indicated they are open to collaborating on this recommendation however we are concerned that browser vendors are in essence locked into Apple’s app store and [are not able to distribute their browser directly](https://open-web-advocacy.org/apple-dma-review/#direct-browser-installation) as they do on desktop operating systems.
<br><br>Specifically, we believe that the [Core Technology Fee should be removed](https://open-web-advocacy.org/apple-dma-review/#core-technology-fee-should-be-removed) as this is a punitive fee on businesses daring to list any of their apps outside of Apple’s app store.  The EU should consider solving the issues of alternative app distribution (including core-technology fee) so that browser vendors have the option of direct distribution. If these issues are not solved before the choice screens are rolled out then a key opportunity for browser vendors to other their browsers directly to users would have been lost.
<br><br>Apple should also not be allowed to put up scare screens to dissuade users from directly downloading browsers.<br><br>

3. [Browsers should be allowed to know if they are the current default browser.](https://open-web-advocacy.org/apple-dma-review/#default-browser-dark-patterns-and-prompt-api)
<br>It is important that browsers can detect whether or not they are the default in order to provide sensible prompts to users to set their browser as the default. Apple has argued that they do not provide this information to Safari but that is irrelevant as Safari is set as the default in factory settings.<br><br>

4. [The option to change default browser should show up in settings search if the user searches for "default", "browser" or "default browser".](https://open-web-advocacy.org/apple-dma-review/#default-browser-dark-patterns-and-prompt-api)
<br>It should not be difficult for users to work out how to change the default browser. Making it appear in search is a minimum requirement.<br><br>

5. [Browsers should be able to trigger a one-click prompt to be set as the default upon being installed (as is standard on most other operating systems).](https://open-web-advocacy.org/apple-dma-review/#default-browser-dark-patterns-and-prompt-api)
<br>To be able to easily change from one browser to another, once a user install a new browser they should be able to set it as default from a one-time operating system prompt. This should also include the hotseat.<br>

We will be engaging with the DMA’s investigation into defaults and choice screens about these issues as we believe they are justified and that Apple is obligated to implement them under the text of the DMA.

## Hotseat not granted to already installed browsers and browsers set as default outside the choice screen.

> If Safari is currently in the user’s Dock or on the first page of the Home Screen and the user selects a browser **that is not currently installed on their device** from the choice screen, the selected browser will replace the Safari icon in the user’s Dock or in the Home Screen
> <cite>[Apple - On Browser Choice Screens](https://developer.apple.com/support/browser-choice-screen/)<br>
(emphasis added)</cite>

One issue with Apple's implementation is it does not apply to browsers which are already installed. Apple needs to update this to move an already installed browser onto the hotseat to replace the Safari icon when it is selected in the choice screen.

We believe that browsers that are downloaded outside of the choice screen should also replace Safari in the hotseat upon being set as default browser.

This is important as these are both common scenarios. Any friction that OS gatekeepers can introduce to make it harder for users to use a browser other than theirs undermines browser competition. Friction is a powerful force to block competition.

## Deceptive Patterns

[The two deceptive patterns outlined](https://open-web-advocacy.org/blog/apples-one-weird-trick-to-stop-you-changing-your-default-browser/) in this article have both been fixed by Apple. 

The deceptive pattern of hiding the option to change default browser in Safari settings if Safari is the default outlined in this article has also been removed by Apple globally. 

Additionally, the deceptive pattern of triggering the choice screen when Safari is not the default browser (typically because it still occupies the hotseat) has been fixed. That is Apple was triggering the choice screen in the hope that users will change from a third-party browser back to Safari.

<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube-nocookie.com/embed/AiiU_zBirXc' frameborder='0' allowfullscreen title="OWA v Apple: EC DMA Q&A 2 - Will Apple address the dark patterns when changing the default browser?"></iframe></div>

## To Regulators outside the EU

These changes are EU only. Apple's users in other countries do not gain any direct benefit from these remedies. We urge regulators in other countries to carefully examine these changes and consider compelling Apple to implement them in their own jurisdictions. It should be noted that the effort for Apple to implement the choice screen in other jurisdictions will now be minimal.

#### Important Improvements

While the changes the EU have made are excellent, they are limited in pursuing the optimal solution by the [very specific text of the DMA](https://eur-lex.europa.eu/legal-content/EN/TXT/?toc=OJ%3AL%3A2022%3A265%3ATOC&uri=uriserv%3AOJ.L_.2022.265.01.0001.01.ENG#:~:text=the%20end%20users%E2%80%99-,first%20use%20of%20an%20online%20search%20engine%2C%20virtual%20assistant%20or%20web%20browser,-of%20the%20gatekeeper).

In addition to the unimplemented recommendations above we would recommend several important improvements including:
* The choice screen should be moved to device setup or upon device update rather than upon first use of the gatekeepers browser. 
* The gatekeepers browser, if not selected, should be uninstalled from the device
or virtually uninstalled, i.e. hidden from the user, if the gatekeeper can demonstrate that is not practical because of technical limitations.

## Compliance Monitoring and Unanswered Questions

We have not yet seen the implementation of the choice screen. For OWA, browser vendors and others to provide feedback to the EC we need to be able to see it in action (video) and be able to test it. This needs to be done well in advance of any browser choice screen rollout in the EU so there is time to make changes based on feedback.

#### Outside of AppStore Workflow

The outside of the Apple AppStore workflow for the choice screen is unknown. We'd like to know what the outside of the AppStore install process would look like, and a confirmation that browser developers can opt to have their "non-appstore" version installed if they would like.

So far Apple has just provided the [very vague statement](https://developer.apple.com/support/browser-choice-screen/):
> Additionally, developers who make their browsers available outside the App Store should contact their Apple representative or dma-data@apple.com to collaborate on including their browser in the choice screen.

For example, can Brave/Firefox/Edge/Opera/DuckDuckGo/Chrome/Vivaldi offer from the choice screen, a version of their browser which is directly distributed from that browser vendor?

#### Testing the Choice Screen

For testing the choice screen, Apple should provide a way to trigger the choice screen multiple times without having to factory reset a device.  A “choice screen” button in settings somewhere would do the trick.  To test it properly we need to launch it many times. 

## What does success for Choice Architecture look like?

There are two forms of success in choice architecture. One is removing behaviour that is blatantly unfair or manipulative, the removal of the behaviour is a success in its own right regardless of any outcome. 

The second is in allowing space for new and smaller browser vendors to thrive. Even the most perfect choice screen will not wildly change user preference over night. The biggest names in browsers are the ones that will be picked the most, the browser of the operating system will still get a significant boost. What choice screens need to do to succeed is let users know that they have a choice and create an opening for smaller browser vendors to get a foothold on mobile. 

If third-party browsers managed to gain an additional 10% of the total market share on iOS or Android that would be a resounding success. As a point of context Google is paying Apple $20 billion USD per a year for being the default search engine. That means every 1% is $200 million annually. 

That 10% is enough to support 8 Mozilla’s across iOS and Android. That is something worth fighting for. 
