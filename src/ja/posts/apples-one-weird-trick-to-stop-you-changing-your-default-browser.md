---
title: Apple's one weird trick to stop you changing your default browser
date: '2024-03-28'
tags:
  - Policy
  - Apple
author: OWA
permalink: >-
  /ja/blog/apples-one-weird-trick-to-stop-you-changing-your-default-browser/index.html
layout: layouts/post.njk
translated: false
---

https://www.youtube.com/watch?v=AiiU_zBirXc

Long time readers will already know that [Apple has effectively banned all browsers from iOS by preventing them from bringing or modifying their own engines](/walled-gardens-report/#apple-has-effectively-banned-all-third-party-browsers). That makes all browsers on iOS essentially skins round Safari. We brought this up in one of our questions to Apple at their DMA workshop where we stated that _"Apple’s 15 year ban of third-party browser engines has effectively removed browser competition from iOS."_. [Surprisingly, there was no rebuttal from Apple, even veiled, of our assertion](https://www.youtube.com/watch?v=s41Ha8lZ0Zk&t).

But let's put that aside for now to discuss a different topic: defaults.

The Digital Market Act introduces obligations for gatekeepers to make it easy for users to change defaults including obligating a choice screen.

There is a common phrase about following the letter and spirit of the law: are you making good faith efforts to comply with the intent? In the case of the intent of the DMA you don't need to guess as the act itself contains 26 pages of recitals that in very clear language explain exactly what the act is trying to achieve via the letter of the law as spelt out in the articles.

In the case of the defaults the recitals have this to say:

> Recital 49: **A gatekeeper can use different means to favour its own or third-party services or products on its operating system**, virtual assistant or web browser, to the detriment of the same or similar services that end users could obtain through other third parties.
> ...
> **Gatekeepers should also allow end users to easily change the default settings on the operating system**, virtual assistant and web browser **when those default settings favour their own software applications and services. This includes prompting a choice screen** ...

On dark patterns the recitals had this to say:

>Gatekeepers should not engage in behaviour that would undermine the effectiveness of the prohibitions and obligations laid down in this Regulation. Such behaviour includes the design used by the gatekeeper, the presentation of end-user choices in a non-neutral manner, or using the structure, function or manner of operation of a user interface or a part thereof to subvert or impair user autonomy, decision-making, or choice.

While on defaults Article 6(3) simply says:
> The gatekeeper shall allow and technically enable end users to easily change default settings on the operating system, virtual assistant and web browser of the gatekeeper that direct or steer end users to products or services provided by the gatekeeper

Recently our own John Ozbay attended a workshop where [Apple could explain how it was complying with the DMA](https://digital-markets-act.ec.europa.eu/events-poolpage/apple-dma-compliance-workshop-2024-03-18_en).

In Apple's opening speech on changing defaults, Apple's spokesperson had this to say:

> In this session we are going to provide a summary of what we are doing on the web browser choice screen and defaults pursuant to the DMA. Lets start with defaults and specifically the ability to select a default browser. **For a long time Apple have made it easy for users to choose a browser in the settings app**. Many users have already chosen to set a non-Safari default browser even before the DMA. **They can do it in just a few taps.**

This is a little surprising. Apple didn't even let users change the default browser until [late 2020](https://ios.gadgethacks.com/how-to/change-your-default-browser-ios-14-from-safari-chrome-firefox-edge-another-app-0339071/). When they did add the ability to do so the design was awkward and confusing. There is no centralised location to change defaults, no way of searching for the option in the OS settings and the option to change the default is inappropriately shown on each browser settings page. Further, they provide no API to allow newly installed browsers to prompt the user to switch default browser or even be aware that they are the default browser.

Now, some may think it is unfair to suggest that Apple deliberately designed it to be as awkward as possible to change the default browser but **they went one critical step further that unambiguously shows that they maliciously intended to undermine user choice**.

In an astonishingly brazen dark pattern Apple engineers added code to the Safari's settings page to hide the option to change the default browser if Safari was the default - but then to prominently show it if another browser was the default.

This video demonstrates it, and you can test it yourself right now.

https://www.youtube.com/watch?v=o6uwiG1nKK4

**There is absolutely no plausible defence for this behaviour.**

We had John ask Apple directly about this at Apple DMA Workshop.

> I am going to continue to focus on one more question regarding the prompt to change the default browser. You mentioned earlier that users are always prompted to change their default browser. At the moment there is no way for browsers to detect if they are the default browser nor a one click system prompt to allow users to set the default browser. This is standard on all other major operating systems except iOS. The friction Apple has added to this process undermines users' switching to a new default browser that needs to be fixed in order for them to be in compliance with 6(3) and 13(4).<br><br>
> Similarly changing the default browser at the moment is quite difficult as well. Currently Apple does not have a centralised location to change the default browser in the settings. Searching "default" or "default browser" yields no results in settings and you can try it right now. Instead they have inappropriately placed it in each individual browser's settings page.<br><br>
> Astonishingly Apple has added custom code to hide the option to change default browser in the Safari settings if Safari is the default browser, and prominently show it if a different browser is default. We had thought that Apple would have fixed such an outrageous dark pattern prior to the DMA coming into force but in the latest version of iOS it is still present.<br><br>
> My question to Apple is, are they planning on addressing these or not?

Apple's spokesperson responded with:

> In terms of the first question, the choice as required by the DMA is presented once to users. Obviously there are a ton of other ways in which users can choose different browsers, different default browsers if they so choose. We have worked to make this simple and straightforward. And we know from the experience over the last couple of years that millions of users around the world choose alternative browsers all the time. We also know that many of them will choose to make that browser their default one of choice. That happens all the time. In terms of what's being required here by the DMA our focus is on presenting this choice even more clearly to consumers the first time you use Safari. Obviously there are not choices being presented when you use other browsers on iOS. So we are complying from our perspective with the spirit here.

The video of John's question and the reply is at the top of the article.

Let's break down Apple's reply.

> Obviously there are a ton of other ways in which users can choose different browsers, different default browsers if they so choose. **We have worked to make this simple and straightforward.**

This is clearly false, and does not address any of the specifics in John's question.

> And we know from the experience over the last couple of years that millions of users arround the world choose alternative browsers all the time.

This phrasing is very carefully steps arround the fact that Apple only started letting users change the default browser in late 2020. Clearly it's embarrassing that for 13 years it was impossible to change the default browser on iOS.

> We also know that many of them will choose to make that browser their default one of choice. That happens all the time.

Apple doesn't publicly share any aggregated data on browser defaults, so it's hard to check.

> In terms of what's being required here by the DMA our focus is on presenting this choice even more clearly to consumers the first time you use Safari. Obviously there are not choices being presented when you use other browsers on iOS.

The framing here, again, is false. As Apple stated in their opening speech there are two aspects of the DMA they have to comply with. One: making it easy to change the default. Two: allowing a choice screen. Apple obviously has no defence on the first and so tries to deflect by focusing on the second.

> So we are complying from our perspective with the spirit here.

We disagree, and clearly so does the EU Commission, which on 25 March [opened a proceeding against Apple investigating them over Article 6(3)](https://ec.europa.eu/commission/presscorner/detail/en/ip_24_1689).

In there press release they stated:

> The Commission has opened proceedings against Apple regarding their measures to comply with obligations to (i) enable end users to easily uninstall any software applications on iOS, (ii) easily change default settings on iOS and (iii) prompt users with choice screens which must effectively and easily allow them to select an alternative default service, such as a browser or search engine on their iPhones.<br><br>
> The Commission is concerned that Apple's measures, including the design of the web browser choice screen, may be preventing users from truly exercising their choice of services within the Apple ecosystem, in contravention of Article 6(3) of the DMA.

This is just one topic among many, but we should know more when the EU releases its non-confidential version of its initial findings and invites third parties to comment which according to the act could take up to 3 months.

In order to be compliant with this specific aspect of the DMA we believe Apple should make the following changes:

1. Remove the dark pattern of hiding the option to switch default browser if the default is Safari.
2. Move the option to change default browser out of the browser settings and into a centralised location.
3. Have this option visible even if Safari is the only currently installed browser.
4. Have this option show up in search if the user searches for "default", "browser" or "default browser".
5. Allow browsers to know if they are the current default browser
6. Provide a system prompt to browsers (with the usual anti-nagging protections on all permission prompts) that allows browsers to prompt the user to one click set them as the new default browser as is standard on all other operating systems.

Stay tuned and follow us in all the usual places:
- **Email:**        [contactus@open-web-advocacy.org](mailto:contactus@open-web-advocacy.org)
- **Mastodon:**      [@OpenWebAdvocacy](https://mastodon.social/@owa)
- **Discord:**      [OpenWebAdvocacy](https://discord.gg/x53hkqrRKx)
- **LinkedIn:**     [open-web-advocacy](https://www.linkedin.com/company/open-web-advocacy/)
- **Twitter:**      [@OpenWebAdvocacy](https://twitter.com/OpenWebAdvocacy)
- **Web:**         [https://open-web-advocacy.org](https://open-web-advocacy.org)
