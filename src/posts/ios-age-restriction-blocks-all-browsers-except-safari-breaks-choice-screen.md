---
title: "iOS age restriction blocks all browsers except Safari, breaks choice screen"
date: '2024-11-15'
tags: ['Policy', 'Apple', 'EU']
author: "OWA"
---

**Share and join the conversation: [X/Twitter](https://x.com/OpenWebAdvocacy/status/1857393321922162818), [Mastodon](https://mastodon.social/@owa/113486859647211896
), [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7263159027944075264) and [Bluesky](https://bsky.app/profile/open-web-advocacy.org/post/3laydcxvns22x).**

_Note: Throughout this article, references to iOS also encompass iPadOS._

Apple is currently failing to comply with its obligations under Article 6(3) of the Digital Markets Act (DMA) regarding the provision of the browser choice screen. The iOS browser choice screen is currently broken for any user with age restrictions for apps enabled, effectively preventing them from selecting any browser other than Safari.

Furthermore, Apple has been preventing the use or installation of third-party browsers when age restrictions for apps are enabled. This is despite the fact that Apple has exempted Safari from these restrictions and that parental content restrictions for the Web are handled by an entirely separate mechanism.

While all browsers on iOS, including Safari, are rated 17+, Safari benefits from two exemptions:
* As a pre-installed browser, Safari doesn't require users to actively download it.
* Apple has implemented specific code that exempts Safari from age restrictions, allowing it to be displayed and opened despite being rated 17+. All other browsers are hidden when age restrictions are applied.

We estimate that this issue impacts 11-15% of EU iOS users, significantly undermining the effectiveness of Apple's compliance with Article 6(3).

Finally, Apple has yet to provide an API for third-party browsers using their own engines to support and interoperate with parental control features for web browsing, currently implemented via the WkWebView.

To rectify this situation and be compliant with the DMA we believe that Apple should:
* Remove the 17+ age rating from browser apps.
* Allow all browsers listed on the choice screen to be selectable, installable, and usable even if age restrictions for apps is enabled.
* Create an API that empowers third-party browsers using their own engines to effectively support parental control features.
* Apply age restrictions for apps equally to Apple’s own apps.

## 1. Age Restriction Controls on iOS

On iOS, there are two independent parental supervision settings available to parents:

1. **Web Content Restrictions**
   This allows parents to restrict their childrens’ access to adult websites. This setting is respected by **all browsers** across iOS (Safari, and all competing third-party browsers). Currently this is implemented via the WkWebView and thus is automatically applied to all browsers that are currently available on iOS. <br><br> Apple will need to provide an API to third-party browsers using their own engine to allow them to effectively support this feature and for Apple to comply with their Article 6(7) obligations.

2. **Age Restrictions for Apps**
   This allows parents to restrict their childrens’ access to apps that are rated above the age-limit they've chosen. So if an app in the App Store is rated 17+, and parents set the age restriction to \<17, this effectively makes it so that their child cannot download apps that are 17+, or if these apps are already downloaded, the child can't use/launch these 17+ apps, as their icons are hidden.

On Apple's App Store, all browsers (including Safari, despite it being preinstalled) have a 17+ age restriction, under the justification that they provide "Unrestricted Web Access". So if parents set app age restrictions on their children's devices, they cannot download or launch already installed competing third-party browsers. However, as discussed in the introduction, Safari is exempted from this.

We would like to clarify that on iOS, at the moment, parents are free to set age restrictions for apps to 4+ years old (i.e. only apps that Apple believes are suitable for 4 year olds \- 8 year olds), yet still allow unrestricted internet access to all websites. These two mechanisms are entirely independent of each other.

To emphasize the distinction, the age restrictions for apps setting has nothing to do with unrestricted internet access (i.e. to adult websites etc) — the restriction only affects which apps young users are allowed to download or use.

## 2. Choice Screen Non-Compliance

This issue with age restrictions for apps also breaks the browser choice screen. We've discovered that for iOS users with age restrictions enabled, the browser choice screen is completely broken:

1. The screen displays a list of browsers to choose as the new system default.

2. Upon selecting a third-party browser other than Safari, the system initiates a download process.

3. Once the download reaches 100%, the screen becomes unresponsive, trapping the user without any further actions or navigation options. The user's only choice is to quit the choice screen.

4. Quitting the screen reveals that the chosen browser has not been installed, leaving Safari as the only available browser.

This effectively breaks the choice screen and denies that choice for all European Residents who are iOS users with age restrictions for apps turned on.

## 3. How many users does this affect?

Eurostat data reveals that [5.2% of EU residents are aged 15-19](https://ec.europa.eu/eurostat/cache/interactive-publications/demography/2023/04/index.html?lang=en), [while 15% are under 15](https://ec.europa.eu/eurostat/cache/interactive-publications/demography/2023/04/index.html?lang=en). Considering these figures, it is reasonable to estimate that approximately 15-20% of the EU population is under the age of 17\.

We do not have precise figures on the number of users that switch on age restrictions for apps but the following pieces of data give us a rough idea:

* [This survey](https://www.techradar.com/pro/how-to-put-parental-controls-on-an-iphone) states 39% of parents report using parental controls for blocking, filtering or monitoring their teen’s online activities.

* [This study](https://www.pewresearch.org/internet/2016/01/07/parents-teens-and-digital-monitoring/) states 59.5% of them actively use parental controls on their child’s iPhone.

* [This study](https://digitalwellnesslab.org/research-briefs/safety-and-surveillance-software-practices-as-a-parent-in-the-digital-world/) states 72% use parental controls to restrict time on devices.

By combining the figures we can estimate that Apple is blocking its choice screen from working for approximately 11-15% of EU residents who use iOS, which is a significant percentage of the population.

## 4. Why is this important?

Apple effectively prevents users with age restriction for apps turned on from being able to download and use competing third-party browsers.

Yet, on that same device, despite the fact that Safari itself has the same 17+ age restriction in the App Store, users can continue to use Safari without any restrictions or issues, and so can continue to access the web through Safari with no restrictions, including adult websites.

Conversely, if the parent turned off age restriction for apps but enabled web content restrictions then adult websites would be blocked in all browsers on iOS.

This is due to the fact that, as we mentioned earlier, the web content restriction settings are in fact independent from the age restriction settings.

Currently, Safari having an exception effectively prevents all third-party browser competition on iOS for a significant segment of the European population (approximately 11-15% of EU iOS users). This practice not only significantly undermines the effectiveness of the browser choice screen but also more broadly stifles browser competition. In the next 5 \- 10 years, the effect of these restrictions could mean the majority of young users will grow up without being aware of alternative browsers or the features they offer.

Finally, as an example of how this behavior could impede third parties contesting Apple’s app store, this will likely have a major impact on the online gaming industry. Once third-party browser engines start to make their way onto iOS, it will pave the way for an explosion in the online gaming industry. We can already see this from the vast number of online cloud-streaming game services that rely on web technologies.

By gating young users' access to alternative browsers and browser engines behind an age restriction, Apple effectively forces the future of online gaming to take place in their browser, with its limited number of APIs and features, which nudges developers to instead build native apps and users to choose native games from which Apple can and will profit greatly from.

## 5. Apple Agrees that Users should have at least One Browser

When attempting to delete the only browser on iOS, Apple will display the following message:

> **Download Browser App**
> At least one browser app is required on iPhone. Download another browser app, then you can delete “Safari”.
> \[Open App Store\] \[Cancel\]

<figure>
    {% image
        "/images/blog/delete-only-browser-error-message.png",
        "An error message on iOS. Reads At least one browser app is required on iPhone. Download another browser app, then you can delete 'Safari'.",
        {
          widths: [ 300 ],
          sizes: '300px'
        }
    %}
    <figcaption>Apple's error message for deleting only browser.</figcaption>
</figure>

However, Apple currently maintains this requirement by granting Safari a special exemption from its own age restrictions for apps. This exemption highlights the inconsistency in Apple's approach, as it recognizes the need for browser availability while simultaneously imposing barriers on third-party browsers.

It's worth noting that if a user installs a third-party browser, deletes Safari, and then enables age restrictions, they will be left without any browser options, as the icons for all the third-party browsers will be removed and it will be hidden from search. This scenario further emphasizes the limitations of Apple's current system and the need for a more consistent and equitable approach.

## 5. Apple's Inconsistent and Poorly Designed Age Ratings

Apple has the following age rating settings available:

<figure>
    {% image
        "/images/blog/age-settings.jpeg",
        "The age restrictions settings page on iOS. It has the title apps and 5 settings. The settings are Don't Allow, 4+, 9+, 12+, 17+. The 17+ setting is ticked",
        {
          widths: [ 300 ],
          sizes: '300px'
        }
    %}
    {% image
        "/images/blog/age-rating-explanations.jpeg",
        "A screenshot of an article by Apple explaining what age ratings apple has.",
        {
          widths: [ 300 ],
          sizes: '300px'
        }
    %}
    <figcaption>Apple's age rating settings and explanation.</figcaption>
</figure>

Bizarrely, Apple lacks an "Everyone" or G rating. This could be a strategic move by Apple to potentially claim that all apps are intended for users aged 4 and over. This approach might shield Apple from potential legal liabilities arising from younger children's use of apps.

They also explain their age rating system [on their website.](https://developer.apple.com/help/app-store-connect/reference/age-ratings/) At the end, they snidely claim that adult content is only accessible on alternative app marketplaces or websites within the European Union.

Possibly this is an attempt to cast alternative app stores as being unsavory but is odd in the context of 18+ ([depending on country](https://www.imdb.com/title/tt6263850/parentalguide/?ref_=tt_stry_pg#certificates)) films such as “Deadpool & Wolverine” being billion dollar box office hits, immensely popular and available on the iOS App Store via Disney+.

### 5.1. 18+ Content on the Apple’s App Store

Disney Plus has a 4+ rating, yet one of the first things advertised on its app store page is the Deadpool & Wolverine film, which is rated for 14+ and 18+ ([varies by country](https://www.imdb.com/title/tt6263850/parentalguide/?ref_=tt_stry_pg#certificates)).

<figure>
    {% image
        "/images/blog/disney-plus-ios-app-store.jpeg",
        "A screenshot of the disney+ iOS app store page. It has the age rating 4+.",
        {
          widths: [ 300 ],
          sizes: '300px'
        }
    %}
    {% image
        "/images/blog/disney-plus-deadpool.jpeg",
        "A screenshot of the disney+ iOS app store page showing the the new deadpool film is now available.",
        {
          widths: [ 300 ],
          sizes: '300px'
        }
    %}
    <figcaption>Disney Plus (4+) and Deadpool & Wolverine.</figcaption>
</figure>


### 5.2. Apps for Kindergarten Children

<figure>
    {% image
        "/images/blog/kindergarten-app-1.jpeg",
        "An screenshot of the bebi teaching app. It has a 4+ rating.",
        {
          widths: [ 300 ],
          sizes: '300px'
        }
    %}
    {% image
        "/images/blog/kindergarten-app-2.jpeg",
        "An screenshot of the bebi teaching app, it indicates it can help 2,3,4 and even 5 year olds learn.",
        {
          widths: [ 300 ],
          sizes: '300px'
        }
    %}
    <figcaption>Teaching App for Babies and Kindergarten with 4+ rating</figcaption>
</figure>

For example, this app is marketed as being to help “2,3,4 and even 5 year olds” learn. Despite this it has a 4+ rating (the lowest rating that Apple will allow). It is not clear why apps like this should not have a G rating and if they are unsuitable for under 4 year olds, why they should be allowed to market themselves as being for that demographic.

### 5.3. In-App Browsers

Again, adult content is not filtered by the age rating setting for apps. Any apps that contain links (for example messaging and social media apps) will not be blocked by the age rating setting for apps, nor does this affect their age rating.

For example adult websites can be visited in apps with low age ratings (such as Instagram which is rated 12+) by using Apple’s in-app browser SFSafariViewController:

<figure>
    {% image
        "/images/blog/instagram-link-1.jpeg",
        "A message being sent with a link on Instagram.",
        {
          widths: [ 300 ],
          sizes: '300px'
        }
    %}
    {% image
        "/images/blog/instagram-link-2.jpeg",
        "That link opening into an in-app browser with the warning 18+ splash page for an adult website.",
        {
          widths: [ 300 ],
          sizes: '300px'
        }
    %}
    <figcaption>A link being opened in a 12+ app to an adult website.</figcaption>
</figure>

This highlights why age ratings on apps with links to the web doesn’t make sense: **it is the web content restriction setting which actually prevents** in-app browsers from visiting known adult websites. The age rating setting is ineffective here, as can be seen in these screenshots.

### 5.4. Inconsistently Applied Ratings

Apple’s age ratings are also wildly inconsistent.

Disney+ is 4+ but Netflix and Apple TV are 12+. However, both contain between 15-18+ content and all three have built-in parental controls.

Most messaging apps are 12+, some are 17+ but iMessage and Facetime are 4+ despite all messaging apps having the ability to transmit 18+ content.

Large numbers of apps that should be G rated are assigned a 4+ rating.

### 5.5. More Apple Apps Outright Ignoring the Rating System

iMessage, Facetime, Apple Books and Apple TV all outright ignore the age restrictions for apps. That is, unlike other apps, they are not hidden and disabled when users turn on age restrictions for apps to an age below their rating.

iMessage and Facetime (both rated 4+ but having the ability to display 18+ content) will continue to function if the age restriction for apps is set to “Don’t Allow” (a setting that seemingly disables all apps), despite being listed on the app store with age ratings.

Apple TV, despite having a rating of 12+ ([and content that is rated between 12+ and 18+ depending on country](https://www.imdb.com/title/tt11280740/)) will continue to function if the age rating is set to 4+. Note: Apple TV does have its [own separate set of controls](https://support.apple.com/en-gb/guide/tvapp/atvb5408f9ae/web) within the app that allow parents to restrict the content.

This is still problematic as [Netflix also has such controls](https://help.netflix.com/en/node/264), but setting the age restrictions for apps to 4+ will remove the icon for the Netflix app and make it impossible to open it. This is clearly an unfair, unhelpful and anti-competitive way to implement age controls.

A more sensible solution, which would actually help parents who want to use such a setting, would be to:

* Have a G-rating (or Everyone rating).

* Acknowledge that the app store has 18+ content, and where necessary assign that rating to apps. Simply pretending it does not exist is not helpful. While films and TV shows vary in rating from country to country, to our knowledge Apple does not block these TV shows/films in countries where they are rated 18+.

* Let apps have the lowest rating of all (or as much as reasonably possible) of the content on the app can be filtered using parental controls within each app.

* Apply the ratings consistently to Apple’s apps. If that is a significant issue, then it's an indication the age rating system is not designed properly.

* Have an allow and block list (like for the web content restriction setting) so that parents can individually allow or block apps that Apple has inappropriately or incorrectly rated.

As it is, Apple, by their misdesign of the system, is not only harming competition, but is actively preventing parents from using these age restriction controls by making them difficult to use. A parent, upon discovering that their Netflix app will no longer function, despite it being set to only allow childrens content, might avoid using the setting altogether.

## 6. Remedies

In order to be in full compliance with Articles 6(3) and 6(7) of the DMA in relation to this issue, Apple must take the following steps:

* **Remove Age Ratings from Browsers**
  Given that parental controls for web browsing operate independently of app age ratings, Apple should remove age ratings from browsers. The 17+ age rating on browsers serves no significant purpose, **except** **to hinder competition** from third-party browsers, as evidenced by Apple's exemption of Safari from these restrictions.   <br><br>

  All browsers that support Apple’s existing system of web content restrictions (currently all browsers on iOS, as it is implemented via the WkWebView) should be allowed with G rating or given a 4+ rating. EU users should have the option of setting both “web content restrictions” and “age restriction for apps” for their children and still be able to use third-party browsers.

* **Compliant Browser Choice Screen**
  The browser choice screen must be accessible to all EU residents regardless of their age, or whether they have age restriction for apps turned on, and the users must be able to select, install and use any browser from that choice screen. This must be fixed before the general roll out of the updated choice screen, or in the case it is not, be rerun on all of those devices after the fix has been applied.

* **Third-Party Browser Support for Parent Controls**
  Apple should develop an API that allows third-party browsers using their own engine to effectively support parental control features. This should be relatively straightforward for Apple to implement.

* **Age Restrictions for Apps should apply equally to Apple’s own Apps**
  Apple should not exempt its own apps from the setting. Where this causes problems Apple should carefully redesign the system. *Fixing the system, but doing so only for Apple’s apps, is not acceptable under the DMA*.

By compelling Apple to implement these remedies, the EU Commission can help ensure equal treatment of all browsers and remove these barriers to choice. This benefits individual consumers by allowing them to make informed decisions about the software they use. Additionally, it stimulates innovation and competition among browser vendors, leading to a better user experience and a more diverse digital ecosystem.