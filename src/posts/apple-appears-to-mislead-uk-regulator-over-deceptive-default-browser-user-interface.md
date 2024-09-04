---
title: 'Apple appears to mislead UK Regulator over deceptive default browser user interface'
date: '2024-09-04'
tags: ['Policy', 'CMA', 'UK']
author: [ "OWA" ]
---

TLDR: Apple seems to have tried to mislead the UK regulator that a deceptive pattern they had previously implemented for picking default browsers, in fact, never existed.

Share and join the conversation: [X/Twitter](https://twitter.com/OpenWebAdvocacy/status/1831247394643800481), [Mastodon](https://mastodon.social/@owa/113078330412825453
), [LinkedIn](https://www.linkedin.com/posts/open-web-advocacy_breaking-apple-appears-to-mislead-uk-regulator-activity-7237018638518509568-Gxrc).

## The Deceptive Pattern

Earlier this year (2024-03-28) [we reported on a deceptive pattern](https://open-web-advocacy.org/blog/apples-one-weird-trick-to-stop-you-changing-your-default-browser/) that Apple had coded into iOS which made it harder for users to change their default browser, if your current default browser was already Safari.

<figure>
    {% image
        "/images/blog/cma-browser-selection-1.png",
        "Example of changing the browser on iOS when Safari is not the default.",
        null, null
    %}
    {% image
        "/images/blog/cma-browser-selection-2.png",
        "Example of changing the browser on iOS when Safari is the default (the dropdown disappears).",
        null, null
    %}
    {% image
        "/images/blog/cma-browser-selection-3.png",
        "Larger example of changing the browser on iOS when Safari is the default (the dropdown disappears).",
        null, null
    %}
    <figcaption>UK Regulator's Screenshots of the Issue - Working Paper 5</figcaption>
</figure>

> "Apple engineers added code to the Safari's settings page to hide the option to change the default browser if Safari was the default but then to prominently show it if another browser was the default." You can test this on an iPhone by scrolling to Safari under Settings. If Safari is not the default browser, there will be an option for "Default Browser App" where you can easily set Safari as the default. But if Safari is set as the default, this option disappears. For every other browser installed, the option remains to switch the default, whether that browser is set as the default or not.
> <cite>[Ashley Belanger - Ars Technica](https://arstechnica.com/tech-policy/2024/04/report-people-are-bailing-on-safari-after-dma-makes-changing-defaults-easier/2/)</cite>

This interesting design foible was picked up [by Ars Technica](https://arstechnica.com/tech-policy/2024/04/report-people-are-bailing-on-safari-after-dma-makes-changing-defaults-easier/2/) 2 weeks later and was subsequently fixed by Apple. We are uncertain exactly which version of iOS Apple fixed it in as they neglected to include it in the release notes. We noted that this had been fixed in [our review of Apple's compliance with the EU's Digital Markets Act](https://open-web-advocacy.org/apple-dma-review/#option-to-change-default-browser-hidden-if-gatekeepers-browser-is-the-default) on 2024-07-21.

OWA thought: Amazing! One problem down! Well done Apple for fixing it without being directly compelled to and for doing so globally.

However... [according to Apple](https://assets.publishing.service.gov.uk/media/66d6c524c52d5fb4c82ddd65/2024-08-01_Apple_Response_to_Working_Papers_1_to_5_-_TO_BE_PUBLISHED.pdf), none of the above ever happened and we collectively imagined the design!

In [Apple's response](https://assets.publishing.service.gov.uk/media/66d6c524c52d5fb4c82ddd65/2024-08-01_Apple_Response_to_Working_Papers_1_to_5_-_TO_BE_PUBLISHED.pdf) (published 2024-08-01) to the [CMA's working paper 5](https://assets.publishing.service.gov.uk/media/669111d949b9c0597fdafbbb/WP5_-_The_role_of_choice_architecture_on_competition_in_the_supply_of_mobile_browsers.pdf), they respond directly. First, Apple accurately describes the issue both the CMA and OWA indicated:

> The UK's Competition and Markets Authority (CMA) analysis also appears to rely on an OWA report concerning an alleged ‘dark pattern’ involving the use of different UIs in order to preference Safari is set as the default browser (paragraph 3.48) by not displaying the default browser setting in the Settings app’s Safari tab where the default browser is Safari.
> <cite>[Apple - Response to Working Papers 1 to 5](https://assets.publishing.service.gov.uk/media/66d6c524c52d5fb4c82ddd65/2024-08-01_Apple_Response_to_Working_Papers_1_to_5_-_TO_BE_PUBLISHED.pdf)</cite>

They then state:

> This is not correct. The default browser app setting in the Safari tab is clearly visible when the user has set Safari as the default.
> <cite>[Apple - Response to Working Papers 1 to 5](https://assets.publishing.service.gov.uk/media/66d6c524c52d5fb4c82ddd65/2024-08-01_Apple_Response_to_Working_Papers_1_to_5_-_TO_BE_PUBLISHED.pdf)</cite>

What does _"This is not correct."_ mean in this context? 

The only realistic interpretation is that statements made by the CMA and OWA on this topic are "not correct" or false. That is, at the time either OWA or the CMA’s statements were written, Apple was not employing a deceptive pattern to hide the option to switch default browser if Safari was the default. This is certainly a bold claim given this was independently verified by us, ArsTechnica and the CMA. This verification included screenshots, documents and [a video of the whole process](https://youtu.be/o6uwiG1nKK4). Apple presumably also retains copies of the original code that implement this "functionality" and can easily replicate the issue.

What Apple could, and should have said, here is that _"This is **no longer** correct, as we fixed it in iOS 15.X"_. Instead they appear to have, bafflingly, chosen to mislead the regulator about the existence of the issue entirely.

Before accusing Apple of seeking to mislead the CMA, it's worth interrogating the alternatives:

**1. Apple is correct and this behaviour never took place.**<br>
This isn't plausible as multiple parties independently checked this.

**2. Apple's lawyers writing this section didn't check or the staff they asked didn't know.**<br>
This option at least makes Apple merely incompetent, rather than actively seeking to mislead a regulator but is it really plausible that the lawyers writing this part of the response didn’t  ask the team at Apple that implement/maintain the iOS Safari settings page whether these accusations had any basis in truth and/or that that team didn’t remember that they updated the page, fixing the behaviour, a mere 2-3 months earlier.

Ultimately, what makes this situation egregious is that this is not some off-the-cuff remark in a verbal setting or a carefully constructed non-statement, it is a direct denial of specifically alleged past anti-competitive behaviour presented in a formal (and presumably carefully reviewed) response by a multi-trillion dollar organisation to an ongoing investigation conducted by a regulator. This can have serious consequences.

> In practice, the CMA expects, and normally receives, full co-operation from those involved in an investigation, and does not generally use the formal powers available to it. Where necessary, however, it does do so. It should also be noted that **the provision of false or misleading information to the CMA by a party or its advisers is a criminal offence, punishable by a fine and/or up to two years in prison.**
> <cite>[Ashurst - Quick guide to competition law investigations by UK authorities](https://www.ashurst.com/en/insights/quickguide-the-use-of-market-studies-and-market-investigations-in-uk-competition-law/#:~:text=It%20should%20also%20be%20noted%20that%20the%20provision%20of%20false%20or%20misleading%20information%20to%20the%20CMA%20by%20a%20party%20or%20its%20advisers%20is%20a%20criminal%20offence%2C%20punishable%20by%20a%20fine%20and/or%20up%20to%20two%20years%20in%20prison.)</cite>

If we were the CMA, we would have a number of questions for Apple, such as:

1. Is Apple claiming that at no point in the past has the behaviour described taken place?
2. How would Apple account for the various screenshots and videos (some of which were taken by the CMA)?
3. What steps did Apple take internally to verify this quoted paragraph was neither false nor misleading?
4. Can we be provided copies of all emails/messages/documentation related to writing the quoted paragraph?
5. Can we be provided copies of all internal tickets/emails/documentation related to changes to the default browser setting in the iOS Safari setting panel over the last year?
6. Can we be provided copies of the code related to the default browser setting in the iOS Safari setting panel including all versions and changelogs over the last year?

There was no particular need for a direct response to this line item, so the choice to re-write history seems especially odd. They had after all already globally fixed it at the time of their submission.

We believe that tech giants shouldn't be allowed to lie to or mislead regulators and that appropriate enforcement action should take place when they can be proven to have done so. We intend to continue calling out and questioning behaviour like this. 

## How can you help?

OWA has so much more work to do advocating for the web all over the globe. We will always need your support, and you can do that in many ways:

* [Donate to help with our running costs](https://www.paypal.com/donate/?hosted_button_id=3FD5DUWT4DNBG)
* [Join our community of volunteers and supporters on Discord](https://discord.com/invite/x53hkqrRKx)
* Comment on articles in the media
* Contact your local government representatives
* Keep sharing our campaigns and follow us on social media on [Twitter/X](https://twitter.com/OpenWebAdvocacy), [Mastodon](https://mastodon.social/@owa) and [LinkedIn](https://www.linkedin.com/company/open-web-advocacy/).