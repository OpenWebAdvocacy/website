---
title: OWA response to the CMA interim report
date: '2022-03-08'
tags:
  - Policy
  - Updates
  - UK
author: Alex Moore
permalink: /ja/blog/our-response-cma-interim-report/index.html
layout: layouts/post.njk
translated: false
---

The CMA invited responses to its [interim report](https://www.gov.uk/cma-cases/mobile-ecosystems-market-study).
You can read our [response with suggested browser and web-app remedies (PDF)](/files/OWA%20-%20Response%20to%20Mobile%20Ecosystem%20Interim%20Report%20-%20v1.1.pdf).

<a href="/files/OWA%20-%20Response%20to%20Mobile%20Ecosystem%20Interim%20Report%20-%20v1.1.pdf" class="action-button">Download response</a>

<!--
1. Table of Contents
2. Introduction
   2.1. Interim Report Remedies
3. Effective Competition?
4. Remedies
   4.1. Require equivalent API access for rival browsers
       4.1.1. iOS
       4.1.2. Android
       4.1.3. Effectiveness of Remedy
   4.2. Require Safari/Webkit to support key Web App Features
   4.3. Require iOS to Allow Third Party Browser Engines
   4.4. Require Broad Web App Support
5. Security and Privacy
6. International Outreach
7. Summary
8. References
9. Open Web Advocacy-->


## 2. Introduction
We agree overwhelmingly with the findings of fact and, with comments, agree that the
proposed interventions contained within the CMA’s December 14th, 2021 “[Mobile ecosystems
market study interim report](https://www.gov.uk/government/publications/mobile-ecosystems-market-study-interim-report)”
are both warranted and timely.


iOS Safari faces no effective competition as Apple has not provided access to private APIs that
competing browsers need and has banned competing engines. The CMA have highlighted the
second aspect (labelling it "the Webkit Restriction") accurately and extensively in their report
and [write](https://www.gov.uk/government/publications/mobile-ecosystems-market-study-interim-report/interim-report#:~:text=Impact%20of%20the%20WebKit%20restriction):


> &ldquo;As a result of the WebKit restriction, there is no competition in browser engines on iOS
> and Apple effectively dictates the features that browsers on iOS can offer (to the extent
> that they are governed by the browser engine as opposed to by the UI).&rdquo;

> &ldquo;Importantly, due to the WebKit restriction, Apple makes decisions on whether to support
> features not only for its own browser, but for all browsers on iOS. This not only restricts
> competition (as it materially limits the potential for rival browsers to differentiate
> themselves from Safari on factors such as speed and functionality) but also limits the
> capability of all browsers on iOS devices, depriving iOS users of useful innovations they
> might otherwise benefit from.&rdquo;


They also note that Apple has [two perverse incentives](https://www.gov.uk/government/publications/mobile-ecosystems-market-study-interim-report/interim-report#:~:text=Potential%20strategic%20reasons%20for%20Apple%E2%80%99s%20WebKit%20restriction) to hold back Webkit and to hinder Web
Apps ability to compete with the iOS App Store:


> &ldquo;First, Apple receives significant revenue from Google by setting Google Search as the
> default search engine on Safari, and therefore benefits financially from high usage of
> Safari. Safari has a strong advantage on iOS over other browsers because it is
> pre-installed and set as the default browser. The WebKit restriction may help to entrench
> this position by limiting the scope for other browsers on iOS to differentiate themselves
> from Safari (for example being less able to accelerate the speed of page loading and not
> being able to display videos in formats not supported by WebKit). As a result, it is less
> likely that users will choose other browsers over Safari, which in turn secures Apple’s
> revenues from Google.&rdquo;

> &ldquo;Second, and as discussed in Competition in the distribution of native apps, Apple
> generates revenue through its App Store, both by charging developers for access to the
> App Store and by taking a commission for payments made via Apple IAP. Apple therefore
> benefits from higher usage of native apps on iOS. By requiring all browsers on iOS to use
> the WebKit browser engine, Apple is able to exert control over the maximum functionality
> of all browsers on iOS and, as a consequence, hold up the development and use of web
> apps. This limits the competitive constraint that web apps pose on native apps, which in
> turn protects and benefits Apple’s App Store revenues.&rdquo;

Apple’s incentives and behaviour bear additional scrutiny.

Apple receives [$15 billion USD a year](https://www.forbes.com/sites/johanmoreno/2021/08/27/google-estimated-to-be-paying-15-billion-to-remain-default-search-engine-on-safari/) from their Google Search engine deal, representing 9% of
Apple’s 2019 gross profit. Apple has not published the annual budget for Safari/Webkit but
based on [anecdotal evidence](https://www.theregister.com/2021/06/16/apple_safari_indexeddb_bug#:~:text=whether%20its%20Safari%20team%20is%20understaffed%20compared%20to%20the%20competition) it is likely significantly less than 2% of this sum.

Apple collected [$72.3 billion USD in App Store fees](https://appleinsider.com/articles/21/01/05/app-store-earns-723-billion-in-2020-almost-double-google-play-revenues)
in 2020. While it has not published the
costs of App Store review, payment processing, refund handling etc, it has been estimated that
the iOS App Store has a nearly [80% profit margin](https://www.marketwatch.com/story/how-profitable-is-apples-app-store-even-a-landmark-antitrust-trial-couldnt-tell-us-11622224506).
Industries with healthy competition feature
leading firms with profit margins between [5 and 20 percent](https://www.brex.com/blog/what-is-a-good-profit-margin).
This imbalance strongly implies
that Apple’s removal of functional competition in the App Store and beyond have broken the
mobile phone market for software and services for more than half of the UK’s consumers.

If Safari/Webkit had competition on iOS, Apple would have great incentive to retain users on
their browser by making a better, more functional browser. A competitive web ecosystem may
also put pressure on rent extracting behaviour without sacrificing user safety as browser
makers compete aggressively on security, privacy, and user-empowering features such as
extensions. If Web Apps are competitive with Native Apps, without sacrificing safety,
system-default app stores may become less important to both users and software makers.

Our primary submission **“[Bringing Competition to Walled Gardens](https://open-web-advocacy.org/walled-gardens-report/)”**
outlines our arguments in detail.

### 2.1. Interim Report Remedies

The interim report proposes [three potential remedies](https://www.gov.uk/government/publications/mobile-ecosystems-market-study-interim-report/interim-report#:~:text=Remedies%20designed%20to%20enhance%20functionality%20and%20interoperability%20of%20browsers):

1.   Require equivalent API access for rival browsers

2. Require that iOS and the version of Webkit provided by iOS support specific features
  required by Web Apps

3. Require that iOS allows third party browser engines

We believe and argue below that while Remedy 2 (Requiring Webkit Features) may provide
some value in the short term, in the long term it will ultimately be unworkable as a replacement
for Remedy 1 (Equivalent API) and Remedy 3 (Third Party Engines), and only both Remedy 1
(Equivalent API) and Remedy 3 (Third Party Engines) will restore competition between
browsers on iOS and between Web Apps and Native Apps on iOS.

We also propose a 4th Remedy “Require Broad Web App Support” which has specific technical
aspects not covered by Remedy 1 (Equivalent API) and Remedy 2 (Requiring Webkit Features).

In addition we believe that Remedy 1 (Equivalent API) needs to be significantly strengthened to
prevent gaming by Apple.

## 3. Effective Competition?

> &ldquo;Businesses that face effective competition dare not raise prices, or cut down on quality
> standards, for fear of losing customers to their competitors (and so losing money)&rdquo;
>
> &mdash; [Dr Michael Grenfell](https://www.gov.uk/government/speeches/michael-grenfell-should-competition-authorities-intervene-in-digital-markets)

> &ldquo;For the foreseeable future, iOS will be the dominant access pathway, passport,
> monetizer and platform for not just digital life, but virtual ones. Apple holds this role
> because it makes best-in-class hardware, offers the best apps, and operates the most
> lucrative app store.&rdquo;
>
> &mdash; [Matthew Ball - Venture Capitalist, Writer](https://www.matthewball.vc/all/applemetaverse)

iOS Safari faces no effective competition as Apple has banned competing engines. These
engines, in turn, differentiate other browsers. Without substantive competition in browsers,
consumers have little recourse short of buying another phone. Businesses and developers,
meanwhile, are forced to consider the Web as an uncompetitive environment in which to launch
services, as Apple’s neglect has ensured that for more than half of UK users, browsers cannot
be a reasonable replacement for Apple’s proprietary App Store and APIs.

The development, maintenance and lost opportunity costs of supporting a buggy browser that
misses key features are mostly hidden from end users. It is hard for consumers to see a missing
feature or an entire Web App that didn’t get built (due to poor support in iOS Safari). When they
do encounter a bug caused by Safari they are more likely to blame the Web App than the
browser. The user may get the impression that the Web is buggy, slow and that Native Apps
are better, which then has negative flow on effects for the entire web ecosystem.

Businesses have little recourse as they can not suggest their customers install another real
browser (there are none) and they are unwilling to lose more than half their mobile customers
(51% in the UK, 66% in Japan, 56% in Australia, 46% in the US). Additionally iOS users tend to
be wealthier and [spend more](https://www.entrepreneurshiplife.com/why-iphone-users-spend-more-money-than-android-users/)
making them a higher priority for companies. In the end the
majority of large businesses simply throw in the towel and make an iOS Native App and in doing
so agree to pay Apple 15-30% of their revenue.

As such, Apple faces little effective competitive pressure to improve the quality of their iOS
Safari browser and has incentives to inhibit it from competing with native. Thus Apple’s decade
long prohibition on competition for Safari on iOS has a compounding anti-competitive effect as
companies sink money into non-interoperable native iOS applications instead of Web Apps.

Even Apple executives appear to be aware only their stranglehold on iOS installation is allowing
their 30% tax on revenue, something they can not achieve on Mac OS.

> &ldquo;Neither is on the store because they don't have to be. They can be on Mac and
> distribute to users without sharing the revenue with us.&rdquo;
>
> &mdash; Philip Schiller - Apple Upper Management - [On the Mac App Store](https://applescoop.org/story/apple-execs-discuss-why-the-mac-app-store-has-not-been-successful-in-internal-email)

## 4. Remedies

### 4.1. Require equivalent API access for rival browsers

We believe that Third Party Apps access to operating system APIs and features should be, at a
minimum, equivalent to the access provided to Apps and functions provided by the Gatekeeper
or its business partners. Currently on iOS and Android there exist features that are exclusive to
the browsers owned by the gatekeeper of the operating system.

#### 4.1.1. iOS

Apple's hobbling of third party browsers doesn't stop at mandating a specific version of
Webkit, Apple provides Safari significant unfair advantages.

The major issues include:

   1.   **Full Screen**

        iOS Safari allows video elements to become full screen, but frustratingly, not other
        element types. This hobbles many gaming scenarios on the Web. The HTML5 canvas
        element is essential for games (where Apple derives the lion’s share of App Store
        revenue) which cannot be made full screen.

        Competing browsers, based on other engines, have long pro**vided reasonable behaviour
        in this regard, including on Android.

   2. **No Web Apps**

        Only Safari is allowed to install Web Apps to the iOS home screen via private APIs that
        are not available to competing browsers, even if they are set as the user’s default.
        Should competing engines become available for iOS browsers, it’s essential that
        expansion of Web App installation also allow those competing engines to “back” the
        Apps they install so that developers do not experience Web Apps as being held back by
        Apple’s trailing-edge engine technology.

   3. **Extensions**

        Only Safari can use extensions which are used by many users, including to block ads
        and improve privacy.

   4. **Apple Pay**

        Apple forces competing browsers to provide only Apple Pay as a payment mechanism
        for use within the Web Payments API. This is blatantly anti-competitive.

  5. **In-App Browsers**

       Regardless of the user’s default browser setting, iOS developers that invoke the
       SFSafariViewController tool for creating Remote Tab-based In-App Browsers are always
       forced to invoke Safari, rather than a user’s default browser (
       <em>Please see our other submission regarding In-App Browsers and how they negatively affect
      browser competition</em>).

#### 4.1.2. Android

While Android browsers other than Chrome can install PWAs, Google has [not yet provided
access to the latest mechanism](https://bugs.chromium.org/p/chromium/issues/detail?id=1243583).
This can lead to bugs, and far poorer operating system
integration and user experience. This remedy would compel Google to fix this and we support
the CMA’s proposal in this regard.

#### 4.1.3. Effectiveness of Remedy
Consider a fictional scenario where Apple removed the ability to install Web Apps via Safari.

Under the proposed language identifying this remedy, Apple would no longer need to provide
this functionality to other rival browsers. This is an extreme example as it would immediately
draw the ire of regulators, but it highlights how Apple can (more subtly) hinder the
development of all browsers on iOS by removing or not adding certain iOS integrations via
Safari and then use regulatory conformance as a shield, contra the spirit of the law. Protecting
App Store profits from Web Apps requires nothing more than keeping the Web at bay. A safe,
user-respecting platform that mobile Operating System platform vendors cannot collect rents
from is a transparent threat to their oligopoly interests.

The CMA should prepare for subtle, underhanded behaviour from Apple.

With this in mind, we believe this remedy needs to be strengthened to overcome this sort of
gaming. One alternative might be to require Gatekeepers provide browser vendors access to
**all functionality** available to **any** App or function provided by the Gatekeeper or their business
partners (subject to very narrow, and heavily justified privacy/security concerns with
consideration given to the level of unmitigatable risk vs the loss of useful functionality for end
users).

An example of this is iOS Safari does not technically require access to Bluetooth, as they do not
intend to provide Web Bluetooth (but many other Apps on iOS do). Under the existing remedy
Apple would not be required to grant rival browsers access to the iOS Bluetooth APIs if Apple
chose to not provide it to iOS Safari. Thus Apple could limit the functionality of rival browsers
by not providing access to particular iOS system features to iOS Safari.

Finally there exist Web App specific features that no App currently has on iOS, that would not
be effectively covered by this remedy. As such we have proposed a 4th remedy to cover these
narrow cases.

This is a useful remedy and will improve browser competition. That said, we do not believe it is
sufficient individually to enable effective competition, as without the other remedies such as
allowing third party engines the same perverse incentives to either underinvest or withhold key
features from Webkit (the version provided with iOS) persist.

### 4.2. Require Safari/Webkit to support key Web App Features

Web Standards evolve quickly, spurred on by competing browser makers working with
developers. This involves collaboration in standards bodies to improve compatibility, however if
each Browser vendor had to wait until there was complete agreement between every vendor
for each of the various standards (and each standards body operates differently), it would be
possible for a single vendor (e.g. Apple) to game these processes to halt progress, especially in
areas where they have an interest in preserving the proprietary nature of their own solutions.

Typically, cutting edge features are deployed by browser makers' own engines first. Real world
feedback from developers (typically over several years) informs eventual standardisation. No
feature starts out as a web standard.

> “Web Standards are voluntary. The force that most powerfully compels their adoption is
> competition, rather than regulation. This is an inherent property of modern browsers.
> Vendors participate in standards processes not because they need anyone else to tell
> them what to do, and not because they are somehow subject to the dictates of
> standards bodies, but rather to learn from developers and find agreement with
> competitors in a problem space where compatibility returns outsized gains.”
>
> &mdash; Alex Russell - Program Manager on Microsoft Edge &ndash; [Why Browser Security UI Isn't Specified](https://infrequently.org/2020/07/why-ui-isnt-specified/)

No one can predict what web technologies will be important in the future, and disagreements
between browser makers on the exact path forward are reasonable and expected. It is very
difficult, if not impossible for regulators to predict which standards will be the most important
and what their exact definition will end up being. It's a subtle and complex topic.

The [perverse incentives for Apple](http://localhost:8080/files/OWA%20-%20Response%20to%20Mobile%20Ecosystem%20Interim%20Report%20-%20v1.1.pdf#h.450o3cyx9zpm)
are not removed by this remedy and consumers have no
recourse should Apple choose not to include a feature in Webkit (the version provided with
iOS). If the case for adding the feature is not overwhelming then the regulator may not feel
enabled to force them to add it.

The primary issue is competition. When there is a [severe bug](https://bugs.webkit.org/show_bug.cgi?id=198277),
there are no panicked meetings
at Apple within the iOS Safari team about how to quickly fix the issue, because Web App
developers are urging their users to switch to Edge, Firefox and Chrome on iOS. Developers
know that all browsers on iOS are essentially identical, so the competitive pressure that forces
Apple to stem users on iOS fleeing to other browsers is removed. There is no real fear of
losing browser market share because there is almost zero risk of users changing phone brand
over broken/missing browser features.

The next issue with this measure is that it requires Apple to attempt to comply in good faith.
Recently, Dutch regulators mandated that Apple must allow dating app providers in the
Netherlands to [use alternative payment methods](https://www.reuters.com/technology/dutch-watchdog-fines-apple-5-mln-euros-failure-comply-app-store-2022-01-24/).

Apple's response shows [utter contempt](https://world.hey.com/dhh/apple-turns-the-legislative-contempt-up-to-11-7c65eeec)
for the regulator and at every step appears designed
to undermine the regulator's ruling with the aim of making it all but impossible (and pointless)
for developers to use alternative payment methods. Apple's [documentation](https://developer.apple.com/support/storekit-external-entitlement/)
is really quite
incredible in the degree and brazen way they seek to avoid complying with the regulator. It is
clear that regulators must operate under the assumption that Apple will act in bad faith and
plan their regulatory regimes accordingly.

Mandating Web App features is complex and subtle. Apple will have plenty of ambiguity to hide
behind in undermining, slow rolling and crippling key Web App features. Additionally, it's very
hard to regulate that software must be stable and not have bugs. All Browser Engines have
bugs, it is competition that is the force that compels fixing them.

Thus while there may be significant benefit from compelling Apple to add the clearest and most
needed Web App features in the short term, **we believe that this remedy will be unworkable in
the long term** given these adversarial dynamics.

Rather than mandating Gatekeepers support particular standards, a better approach is to
regulate such that effective competition is possible without direct intervention of regulators
regarding every single proposed API. Policies that create a space for browser vendors to
compete and deliver features enhances competition **both between rival browsers** and
**between Web Apps and Native Apps**. Such a regime is possible – it is the status quo in every
other popular operating system, including Apple’s macOS – and most effectively harnesses the
spirit of competition to respond to both user and developer needs.

### 4.3. Require iOS to Allow Third Party Browser Engines

We strongly support the CMA’s findings of fact and proposed remedies in this area. This is the
most vital proposed remedy to enable unlocking truly competitive browsers.

Apple enjoys iron control over what features make it into Webkit, the specific version of Webkit
provided by iOS, and the feature set of iOS Safari. Without allowing third party browsers
engines it is not possible (or excessively difficult) for third parties to provide these features to
consumers.

Currently if Apple wishes to block a feature from appearing on iOS Safari they do not need to
fear that their users will switch to another browser, as the other browsers on iOS will also be
missing this feature (as they are required to use a specific version of Webkit).

If both remedy 1 and 3 were applied, that is browser vendors can supply browsers with their
own engines on iOS and be provided all the same system APIs that Safari and iOS are provided,
then competition would be restored.

Were Apple to choose not to add a particular feature to their browser, then other companies
would have the option of adding that feature (or their version of that feature) to their browser.
Users could be alerted by websites and Web Apps that a particular required feature was
missing in iOS Safari and that they could switch to one of the other browsers.

This is important in four ways:

1. Browsers would be free to experiment on what the correct new Web Standard should
   be

2. Users would have recourse to switch to another browser (if iOS Safari was missing key
   features)

3. If these features were truly useful/popular, Apple would now have an incentive to
   implement them on its own browser (even if these features enabled Web Apps to
   compete more effectively with the App Store) or risk losing browser share on iOS

4. Additionally, Apple would now have a powerful incentive to properly fund their browser

Thus, the perverse incentives highlighted earlier completely evaporate and the regulator is not
put in the difficult position of having to write and enforce Web Standard Specifications.

### 4.4. Require Broad Web App Support

We are grateful to the CMA’s attention to the state of Web Apps on iOS vs. competing OSes.

We believe gatekeepers must provide sufficient functionality, integration and APIs to enable
browser vendors (where possible) to provide Web Apps feature parity with Native Apps. For the
most part the changes required to allow this are not significant relative to the **competitive
benefits this will unlock (outlined in detail within “[Bringing Competition to Walled Gardens](https://open-web-advocacy.org/walled-gardens-report/)”)**.

We propose this be a **fourth remedy** that the CMA considers in combination with the other
remedies.

To ensure long-term parity between Apple’s proprietary APIs and competition potentially
provided by Web Apps and competing browsers, it’s important that controlling regulations
create an expectation that Web Apps will not be restricted from integrating deeply into OSes,
even if that means exposing currently private APIs to Browsers.

For example:

- In general, Web Apps should act like Native Apps from the users perspective once installed
- iOS Permissions for Web Apps should not be harder to manage than those of Native Apps
- Integration into OS-level management surfaces should be required
- Web Apps should not face hurdles to accessing sufficient system resources to enable
important applications (e.g., storage space and durability)
- Integration with system-provided services (application backup/sync, AI assistant
 services, etc.) should be possible for both third-party browsers and Web Apps

Additionally we believe that there are significant competitive benefits from compelling Apple to
allow Web Apps to be directly listed on the iOS App Store.

Currently iOS Apps on the iOS App Store must be written in programming languages specific to
Apple. This acts as a form of lock-in by requiring that developers write their Apps multiple
times. Proper Web App support would allow developers to bypass the iOS App Store, but some
(particularly larger developers) may see value in the listing there.

This will increase competition and benefit users:

- These Apps will be interoperable across operating systems (with a single code base)
- Developers could advertise to users via the App Store or avoid the App Store entirely,
gather their own users via the Web or **both** at the same time.
- Browser environments and its APIs are significantly more locked down and sandboxed
than Native equivalents. Users could benefit from this improved security.

## 5. Security and Privacy

It’s important to note here that we are not lawyers and anything in this section is merely to
provide ideas to solve potential technical problems with enforcement.

All of the measures could be balanced by a security and privacy provision, perhaps similar to
the one found in the proposed [Open App Markets Act](https://www.congress.gov/bill/117th-congress/senate-bill/2710/text):

<ol class="alpha">
  <li>**In General** &mdash;Subject to section (b), a Covered Company shall not be in violation of a
subsection of section 3 for an action that is&mdash;
  <ol>
    <li>necessary to achieve user privacy, security, or digital safety;</li>
    <li>taken to prevent spam or fraud; or</li>
    <li>taken to prevent a violation of, or comply with, Federal or State law.</li>
    </ol>
  </li>
  <li>**Requirements** &mdash;Section (a) shall only apply if the Covered Company establishes by
clear and convincing evidence that the action described is&mdash;
  <ol>
    <li>applied on a demonstrably consistent basis to Apps of the Covered Company or its
business partners and to other Apps;</li>
    <li>not used as a pretext to exclude, or impose unnecessary or discriminatory terms
on, third-party Apps, In-App Payment Systems, or App Stores; and</li>
    <li>narrowly tailored and could not be achieved through a less discriminatory and
technically possible means.</li>
  </ol></li>
</ol>

One important feature of this is, that it allows gatekeepers to take necessary steps to protect
the security/privacy of their users while requiring them to **prove with convincing evidence** that
the measures are consistent, narrow and non-malicious in intent.

It may be useful to add Web Apps to the list in 2 b).

Additionally we believe it is important that the Gatekeeper must prove with clear and
convincing evidence that the **benefits to users** of any privacy or security measure outweigh
the costs to users of the measure. This is to preclude **very fringe but non-zero security
issues** being used to block users from useful functionality.

Finally we would like to see provisions that **ban any secret measures** and allow companies to
compel the gatekeeper to **provide detailed technical answers** to reasonable questions related
to these measures.

## 6. International Outreach

The issues that affect competition in the UK within mobile ecosystems are the same issues
globally. If a UK company wishes to sell their product internationally, which most do, then
these remedies have to be global remedies.

We believe it is **essential** that the CMA work together with other regulatory and legislative
bodies so that these remedies become global and not only applied to the UK. As part of the
market study and the work of the Digital Markets Unit, close collaboration with other regulators
should be considered a high priority.

That said, there are still some benefits from the UK leading the way in this regulation as it will
provide data and leverage to regulators in other countries, who can point to the UKs successes
and use them as a blueprint for their own regulations. Additionally even in the complete
absence of global support for such regulations UK customers will still benefit significantly.

## 7. Summary

We are heartened by the depth of research and thoughtfulness embodied in the CMA’s interim
report. We concur with the findings of fact and strongly support many of the proposed
remedies.

To recap, we believe that the following remedies are necessary:

   1. Gatekeepers must provide browser vendors access to all functionality available to any
      App or function provided by the Gatekeeper or their business partners.
   2. iOS must allow third party browser engines
   3. Mobile OSes must provide broad and deep Web App support

While we feel there may be some significant short term benefit by requiring Webkit and iOS
Safari support particular Web App features, we believe that in the long term this will be
unworkable. True, meaningful competition is the only long-term and durable fix.

All of the measures could be balanced by a [security and privacy provision](http://localhost:8080/files/OWA%20-%20Response%20to%20Mobile%20Ecosystem%20Interim%20Report%20-%20v1.1.pdf#h.jvpdxnx9j3v2).

The above measures combined will restore competition between browsers on iOS and between
Web Apps and Native Apps on iOS.

This has a number of benefits to consumers including:

- Cost savings (in the billions annually)
- Higher quality software
- More private and secure software
- Greater control by end users
- Greater interoperability with devices from other manufacturers

A ban on third-party browsers benefits Apple and harms users, developers and businesses.

**Competition not walled gardens leads to the best outcomes.**

## 8. References

- CMA - [Impact of the Webkit Restriction](https://www.gov.uk/government/publications/mobile-ecosystems-market-study-interim-report/interim-report#:~:text=Impact%20of%20the%20WebKit%20restriction)

- CMA - [Possible incentives for the Webkit Restriction](https://www.gov.uk/government/publications/mobile-ecosystems-market-study-interim-report/interim-report#:~:text=Potential%20strategic%20reasons%20for%20Apple%E2%80%99s%20WebKit%20restriction)

- Forbes - [iOS Google Search deal worth $15 Billion](https://www.forbes.com/sites/johanmoreno/2021/08/27/google-estimated-to-be-paying-15-billion-to-remain-default-search-engine-on-safari/)

- The Register - [Is Safari underfunded?](https://www.theregister.com/2021/06/16/apple_safari_indexeddb_bug#:~:text=whether%20its%20Safari%20team%20is%20understaffed%20compared%20to%20the%20competition)

- Apple Insider - [$72.3 billion USD in App Store fees in 2020](https://appleinsider.com/articles/21/01/05/app-store-earns-723-billion-in-2020-almost-double-google-play-revenues)

- [iOS App Store is estimated to have an 80% profit margin](https://www.marketwatch.com/story/how-profitable-is-apples-app-store-even-a-landmark-antitrust-trial-couldnt-tell-us-11622224506)

- [5-20% profit margin is normal for successful companies](https://www.brex.com/blog/what-is-a-good-profit-margin)

- CMA - [Potential Remedies to enhance functionality and interoperability of browsers](https://www.gov.uk/government/publications/mobile-ecosystems-market-study-interim-report/interim-report#:~:text=Remedies%20designed%20to%20enhance%20functionality%20and%20interoperability%20of%20browsers)

- Dr Michael Grenfell - [On Effective Competition](https://www.gov.uk/government/speeches/michael-grenfell-should-competition-authorities-intervene-in-digital-markets)

- Matthew Ball - Venture Capitalist, Writer -[On the dominance of iOS](https://www.matthewball.vc/all/applemetaverse)

- [iPhone Users spend more than Android Users](https://www.entrepreneurshiplife.com/why-iphone-users-spend-more-money-than-android-users/)

- Philip Schiller - Apple Upper Management - [On the Mac App Store](https://applescoop.org/story/apple-execs-discuss-why-the-mac-app-store-has-not-been-successful-in-internal-email)

- Google - [Missing PWA install functionality for browsers other than Chrome on Android](https://bugs.chromium.org/p/chromium/issues/detail?id=1243583)

- Alex Russell - Program Manager on Microsoft Edge - [On Web Standards](https://infrequently.org/2020/07/why-ui-isnt-specified/)

- [Apple must allow dating app providers in the Netherlands to use alternative payment methods](https://www.reuters.com/technology/dutch-watchdog-fines-apple-5-mln-euros-failure-comply-app-store-2022-01-24/)

- [Apple's response shows utter contempt for the dutch regulator](https://world.hey.com/dhh/apple-turns-the-legislative-contempt-up-to-11-7c65eeec)

- Apple - [Distributing dating apps in the Netherlands](https://developer.apple.com/support/storekit-external-entitlement/)


## 9. Open Web Advocacy

Open Web Advocacy is a loose group of software engineers from all over the world, who work
for many different companies who have come together to fight for the future of the open web
by providing regulators, legislators and policy makers the intricate technical details that they
need to understand the major anti-competitive issues in our industry and potential ways to
solve them.

It should be noted that all the authors and reviewers of this document are software engineers
and not economists, lawyers or regulatory experts. The aim is to explain the current situation,
outline the specific problems, how this affects consumers and suggest potential regulatory
remedies.

This is a grassroots effort by software engineers as individuals and not on behalf of their
employers or any of the browser vendors.

We are available to regulators, legislators and policy makers for presentations / Q&A and we
can provide expert technical analysis on topics in this area.

For those who would like to help or join us in fighting for a free and open future for the web,
please contact us at:


- **Email:**        [contactus@open-web-advocacy.org](mailto:contactus@open-web-advocacy.org)
- **Twitter:**      [@OpenWebAdvocacy](https://twitter.com/OpenWebAdvocacy)
- **Web:**         [https://open-web-advocacy.org](https://open-web-advocacy.org)
