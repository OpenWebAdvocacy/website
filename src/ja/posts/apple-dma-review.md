---
title: Apple DMA Review
date: '2024-06-21'
tags:
  - Policy
  - Apple
  - EU
author: OWA
relatedLinks: null
permalink: /ja/blog/apple-dma-review/index.html
layout: layouts/post.njk
translated: false
---

<p>
  The Digital Markets Act (DMA) aims to restore contestability, interoperability,
  choice and fairness back to digital markets in the EU. These fundamental
  properties of an effectively functioning digital market have been eroded by the
  extreme power gatekeepers wield via their control of “core platform services”.
</p>
<p>
  The lack of competition on mobile ecosystems is, at its heart, a structural one.
  Gatekeepers wield vast power due to the security model that these devices are
  built on. Traditionally, on operating systems such as Windows, macOS and Linux,
  users can install any application they want, with no interaction from the
  operating system gatekeeper, either by the business or the end user. Users can
  then grant these programs the ability to do anything they desire.
</p>
<p>
  Locking down what applications can do, such as restricting which APIs they can
  access behind user permissions, is not by itself anti-competitive and can bring
  legitimate security advantages. However, the manner in which it has been
  implemented on mobile devices is both self-serving and in its current form,
  significantly damages competition.
</p>
<p>
  This damage surfaces in several forms:
</p>
<p>
  First, the gatekeeper can control what is allowed to be installed on devices
  they have already sold to consumers, often for a significant profit. They
  utilize this device-level control to demand a 30% cut of all third-party
  software that the consumer installs, not on merit, but simply because they
  control the only mechanisms available to businesses to release that software,
  and can further block or hinder the consumer from using or acquiring services
  outside of their app store.
</p>
<p>
  The second is more subtle. In order to deliver their “native” apps to consumers
  on Android or iOS, developers must create custom applications in specific
  programming languages for each individual platform. Typically, companies will
  require separate development teams for each OS. This not only multiplies
  development and maintenance cost, but puts in place an invisible barrier to
  interoperability. Even the built up expertise for creating software for a
  specific platform provides significant lock-in advantages to the platform’s
  gatekeeper.
</p>
<p>
  Finally, even if a developer has no desire to interact with the gatekeeper, they
  are forced into a commercial and legally binding relationship with them. This is
  due to the fact that the gatekeeper inserts itself between the customer and
  these third party developers. With smartphones now 15 years old, this may seem
  normal to us now, but imagine if Microsoft demanded that every software provider
  signed an onerous contract with them or be barred from releasing a product on
  Windows. What would have been unacceptable, anti-competitive behavior to both
  consumers, businesses and regulators on desktop, has been tolerated on mobile
  simply because these computers were considered a “new” category.
</p>
<p>
  Mobile devices are just small computers whose primary input is touch, there is
  no sacred or magical property that means they have to run on a proprietary app
  store model. Nothing is stopping mobile computers running on the open model that
  desktop computers run on, just as there is nothing stopping a desktop computer
  running the app store model. Inertia and great profits are however powerful
  forces. Between them, Apple and Google have created a powerful and entrenched
  duopoly.
</p>
<p>
  Even with the DMA forcing Apple to open up the ecosystem to competition, Apple
  is still inserting themselves front and center between consumers and app
  developers. They insist all developers for iOS/iPadOS (including developers who
  have no intention of using their app store) pay them $100 per year, that they
  sign the full Apple developer program contract and submit themselves to what is
  effectively app store review (although nominally locked to security). Worse,
  they are attaching significant recurring penalty fees to developers who dare to
  make their software available outside of Apple’s app store. Apple is using every
  tool at their disposal to dissuade developers from leaving their app store and
  to undermine the goals of the DMA.
</p>
<p>
  Apple's key excuse to impose this control is security. Apple's argument is, in
  essence, that only they can be trusted to vet what consumers are allowed to
  install on their devices. All third parties must submit to their review.
</p>
<p>
  What is needed is a way to securely run interoperable and capable software
  across all operating systems. Luckily, such a solution already exists and is not
  only thriving on open desktop platforms but is dominating, and that
  dominance is growing every year. The solution is of course, the Web and more
  specifically Web Apps. Today, more than 60% of users' time on desktop is done
  using web technologies, and that looks set to only grow.
</p>
<p>
  Web Apps have a number of properties that allow them to solve this critical
  problem. They are run in the security of the browser's sandbox, which <a rel="noreferrer" target="_blank" href="https://assets.publishing.service.gov.uk/media/62277271d3bf7f158779fe39/Apple_11.3.22.pdf">even
    Apple admits is “orders of magnitude more stringent than the sandbox for native
    iOS apps.”</a>. They are truly interoperable between operating systems. They
  don't require developers to sign contracts with any of the OS gatekeepers. They
  are capable of incredible things and 90% of the apps on your phone could be
  written as one today.
</p>
<p>
  So why aren't they thriving on mobile? The simple answer to this question is
  lack of browser competition on iOS and active hostility by Apple towards
  effective Web App support, both by their own browser and by their OS. Apple's
  own browser faces no competition on iOS, as they have effectively barred the
  other browsers from competing by prohibiting them from using or modifying their
  engines, the core part of what allows browser vendors to differentiate in
  stability, features, security and privacy.
</p>
<p>
  The DMA explicitly sets out to right this wrong by mandating that gatekeepers
  can no longer enact such a ban:
</p>

<blockquote>
  <p>In particular, each browser is built on a web
    browser engine,
    which is responsible for key browser functionality such as
    speed, reliability and web compatibility. When gatekeepers
    operate and impose web browser engines, they are in a position
    to determine the functionality and standards that will apply
    not only to their own web browsers, but also to competing web
    browsers and, in turn, to &gt;web software applications.
    Gatekeepers
    should therefore not use their position to require their
    dependent business users to use any of the services provided
    together with, or in support of, core platform services by the
    gatekeeper itself as part of the provision of services or
    products by those business users.
    <cite>
      <a rel="noreferrer" target="_blank" href="https://eur-lex.europa.eu/legal-content/EN/TXT/?toc=OJ%3AL%3A2022%3A265%3ATOC&uri=uriserv%3AOJ.L_.2022.265.01.0001.01.ENG">Digital
        Markets Act - Recital 43</a>
    </cite>
  </p>
</blockquote>

<p>
  The intent stated for this in the DMA is to prevent gatekeepers from dictating
  the speed, stability, compatibility and feature set of “web software
  applications”.
</p>
<p>
  Apple has announced new rules that would, at first glance, allow browser vendors
  to port their real browsers to iOS. However, on closer inspection, this is a
  mirage. Instead Apple appears intent on making it <a rel="noreferrer" target="_blank" href="https://www.theverge.com/2024/1/26/24052067/mozilla-apple-ios-browser-rules-firefox">“as
    painful as possible” for browser vendors</a> to port their engines to
  iOS/iPadOS. As we will outline in our paper, Apple's current proposal falls far
  short of compliance. Apple is not only undermining browser competition on iOS,
  but appears to be actively attempting to prevent the growth of an entire open
  and interoperable ecosystem that could feasibly supplant and replace their app
  store model.
</p>
<p>
  Apple have seen the Web as a threat to their app store as far back as 2011, when
  Philip Schiller internally sent an email to Eddie Cue titled “HTML5 poses a
  threat to both Flash and the App Store”.
</p>

<blockquote>
  <p>
    Food for thought: Do we think our 30/70% split will last forever? While I am a
    staunch supporter of the 30/70% split and keeping it simple and consistent across
    our stores, I don’t think 30/70 will last unchanged forever. I think someday we will
    see a challenge from another platform or a web based solution to want to adjust our
    model.
    <cite>
      <a rel="noreferrer" target="_blank" href="https://www.patentlyapple.com/2021/05/in-the-epic-vs-apple-trial-today-epic-revealed-apple-memos-discussing-whether-the-70-30-split-with-developers-would-stand.html">
        Phil Schiller - Apple Upper Management
      </a>
    </cite>
  </p>
</blockquote>

<p>
  This attitude appears not to have changed. Faced with the genuine possibility of third-
  party browsers effectively powering Web Apps, Apple's first instinct appears to have
  been to <a rel="noreferrer" target="_blank" href="https://open-web-advocacy.org/blog/its-official-apple-kills-web-apps-in-the-eu/">
    remove Web Apps support entirely with no notice to either businesses or
    consumers</a>. Luckily, <a rel="noreferrer" target="_blank" href="https://open-web-advocacy.org/blog/apple-backs-off-killing-web-apps/">
    under significant pressure, Apple backed down</a> from this particular
  stunt at the last moment.
</p>

<p>
  Apple is very explicit in its public statement that they initially planned to remove the
  functionality as the DMA would force them to share it with third-party browsers. Even in
  their statement backing down, they make it clear they do not intend to allow third-party
  browsers that use their own engine to be able to install and manage Web Apps. In both
  statements, Apple cites "security" as the reason for their decisions.
</p>
<p>
  Unfortunately for Apple, it has been unable to prove that Safari or WebKit are actually
  more secure than its competitors. When obligated by the UK’s Competition and Markets
  Authority to provide evidence to back up its assertion that WebKit was more secure than
  Blink or Gecko, Apple failed to do so.
</p>

<blockquote>
  <p>... the evidence that we have seen to date does not suggest that there are material
    differences in the security performance of WebKit and alternative browser engines.
  </p>
</blockquote>

<blockquote>
  <p>Overall, the evidence we have received to date does not suggest that Apple's
    WebKit restriction allows for quicker and more effective response to security threats
    for dedicated browser apps on iOS.
    <cite>
      <a rel="noreferrer" target="_blank" href="https://www.gov.uk/government/publications/mobile-ecosystems-market-study-interim-report">
        UK CMA - Interim Report into Mobile Ecosystems</a>
    </cite>
  </p>
</blockquote>

<p>
  Apple's actions not only hurt the Web ecosystem, third-party businesses (be they
  browser vendors or software developers), but also make their devices worse for their own
  consumers. By depriving their consumers of the choice and competition that fair and
  effective browser and Web App competition would bring, they are worsening the
  functionality, interoperability, stability, security, privacy, and price of services on their
  devices.
</p>
<p>
  A reasonable person might argue
  <em>Why would Apple make their own devices worse, surely
    better devices means more hardware sales?</em> This behavior comes, however, with key
  advantages for Apple, even if they harm Apple's own consumers.
</p>

<p>
  Critically, service revenue is of growing importance for Apple as
  <a rel="noreferrer" target="_blank" href="https://www.bbc.com/news/articles/c99zxzjqw2ko">their hardware sales have
    peaked and are declining</a>. Apple has not had a “hit” new product for 14 years, namely the
  iPad, and, if you are being generous, 9 years for the Apple Watch. It does not currently
  seem likely that Apple’s VR/AR headset
  <a rel="noreferrer" target="_blank" href="https://mashable.com/article/apple-vision-pro-sales-drop">will
    have any significant impact on Apple’s overall
    hardware sales</a>.
</p>

<p>
  The UK regulator cites two incentives: protecting their app store revenue from
  competition from Web Apps, and protecting their Google search deal from competition
  from third-party browsers.
</p>

<blockquote>
  <p>
    <strong class="stressed">Apple receives significant revenue from Google
      by setting Google Search as the
      default search engine on Safari</strong>, and therefore benefits financially
    from high usage
    of Safari. [...] <strong class="stressed">The WebKit restriction may help to
      entrench this position</strong> by limiting
    the scope for other browsers on iOS to differentiate themselves from Safari [...] As
    a result, it is less likely that users will choose other browsers over Safari, which in
    turn <strong class="stressed">secures Apple’s revenues from Google</strong>.
    [...]
    Apple generates revenue through its App Store, both by charging developers for
    access to the App Store and by taking a commission for payments made via Apple
    IAP. Apple therefore benefits from higher usage of native apps on iOS. By requiring
    all browsers on iOS to use the WebKit browser engine,
    <strong class="stressed">Apple is able to exert control
      over the maximum functionality of all browsers on iOS</strong> and, as a consequence,
    hold up the development and use of web apps. This limits the <strong class="stressed">competitive
      constraint that web apps pose on native apps</strong>, which in turn protects and benefits
    Apple’s App Store revenues.
    <cite>
      <a rel="noreferrer" target="_blank" href="https://www.gov.uk/government/publications/mobile-ecosystems-market-study-interim-report">
        UK CMA - Interim Report into Mobile Ecosystems</a>
      <br>(emphasis added)
    </cite>
  </p>
</blockquote>

<p>
  These two revenue streams are vast, even for a company of Apple’s size. Apple collected
  <a rel="noreferrer" target="_blank" href="https://www.cnbc.com/2023/01/10/apple-app-store-revenue-update-shows-slowing-growth-.html#:~:text=If%20all%20developers%20paid%20a%2030%25%20cut%20to,billion%20in%202022%2C%20based%20on%20a%20CNBC%20analysis.">
    $85 billion USD in App Store fees in 2022</a>,
  of which it keeps approximately 30%. Apple
  reportedly receives
  <a rel="noreferrer" target="_blank" href="https://www.theregister.com/2023/10/10/google_pays_apple_18_20_claims_bernstein/#:~:text=%22We%20estimate%20that%20the%20ISA,of%20Apple's%20annual%20operating%20profits.%22">
    $18-20 billion USD</a> a year from their Google Search engine deal,
  accounting for 14-16 percent of Apple's annual operating profits.
</p>
<p>
  A third and interesting incentive the CMA does not cite, but which the US's Department of
  Justice does, is that this behavior greatly weakens the interoperability of Apple's devices,
  making it harder for consumers to switch or multi-home. It also greatly raises the barriers
  of entry for new mobile operating system entrants by depriving them of a library of
  interoperable apps.
</p>

<blockquote>
  <p>
    <strong class="stressed">Apple has long understood how middleware can help promote
      competition</strong> and
    its myriad benefits, including increased innovation and output,
    <strong class="stressed">by increasing scale and interoperability</strong>.
    [...]
    In the context of smartphones, examples of
    <strong class="stressed">middleware include internet browsers</strong>,
    internet or cloud-based apps, super apps, and smartwatches, among other products
    and services.
    [...]
    <strong class="stressed">
      Apple has limited the capabilities of third-party iOS web browsers, including by
      requiring that they use Apple’s browser engine, WebKit</strong>.
    [...]
    Apple has sole discretion to review and approve all apps and app updates.
    <strong class="stressed">Apple
      selectively exercises that discretion to its own benefit</strong>, deviating from or changing
    its guidelines when it suits Apple’s interests and allowing Apple executives to control
    app reviews and decide whether to approve individual apps or updates. Apple often
    enforces its App Store rules arbitrarily.
    <strong class="stressed">And it frequently uses App Store rules and
      restrictions to penalize and restrict developers that take advantage of
      technologies that threaten to disrupt, disintermediate, compete with, or erode
      Apple’s monopoly power</strong>.
    <cite>
      <a rel="noreferrer" target="_blank" href="https://www.justice.gov/opa/media/1344546/dl?inline">
        DOJ Complaint against Apple</a>
      <br>(emphasis added)
    </cite>
  </p>
</blockquote>

<p>
  Interoperability via middleware would reduce lock-in for Apple’s devices. Lock-in is a clear
  reason for Apple to block interoperability, as can be seen in this email exchange where
  Apple executives dismiss the idea of bringing iMessage to Android.
</p>

<blockquote>
  <p>
    The #1 most difficult [reason] to leave the Apple universe app is iMessage ...
    iMessage amounts to serious lock-in
    <cite>
      <a rel="noreferrer" target="_blank" href="https://www.theverge.com/2021/4/9/22375128/apple-imessage-android-ecosystem-lock-in-epic-games-filings-app-store-dispute">
        Unnamed Apple Employee</a>
    </cite>
  </p>
</blockquote>

<blockquote>
  <p>
    iMessage on Android would simply serve to remove [an] obstacle to iPhone
    families giving their kids Android phones ... moving iMessage to Android will hurt us
    more than help us, this email illustrates why.
    <cite>
      <a rel="noreferrer" target="_blank" href="https://www.theverge.com/2021/4/9/22375128/apple-imessage-android-ecosystem-lock-in-epic-games-filings-app-store-dispute">
        Craig Federighi - Apple's Senior Vice President of Software Engineering</a>
    </cite>
  </p>
</blockquote>

<p>The DMA has the power to fix all of these underlying issues and unleash a powerful,
  open, interoperable and secure competitor to not only Apple's
  app store but also Google's. Lack of
  contestability for mobile app stores and mobile operating systems is
  a key concern for the DMA that viable Web
  Apps solve.
</p>

<p>This will also remove a heavy burden from new entrants into the operating system
  market; lack of apps. No longer will developers need to develop custom apps
  for each operating system, any
  operating system with good web app support and browser competition will support
  all web apps automatically. Web
  Apps support operating systems that developers have not even heard of.
  The impact of allowing them to compete
  fairly on mobile will be profound.
</p>

<p>
  We request the Commission open a proceeding into Apple and investigate what we allege
  is severe and deliberate non-compliance. The number of ways that Apple is not complying is so myriad that we,
  recognising that the commision does not have infinite resources to pursue all of them simultaneously, have split
  them into three tranches of remedies.
</p>
<p>Some remedies require time and/or pre-requisite remedies in order to be effective.
  Remedies in this document are ordered to ensure that either competitive benefits are delivered earlier or to
  unlock future remedies. In this way, we propose a program of continual improvement in the competitive landscape,
  delivering wins at every step along the path.
</p>

<p>While we have attempted to be comprehensive, it is possible, and perhaps even likely,
  that there will be infringements that we have not included or are not yet aware of.
</p>

<p>Our proposed remedies include:</p>

<ul>
  <li>Restricting Apple's API contract for browsers down to strictly necessary,
    proportionate and justified security measures.</li>
  <li>Make clear what the security measures are for third party browsers using
    their own engine by publishing them in a single up-to-date document.</li>
  <li>Removing any App Store rule that would prevent third party browsers from
    competing fairly.</li>
  <li>Allow browser vendors to keep their existing EU consumers when switching
    to use their own engine.</li>
  <li>Removing the special placement of Safari.</li>
  <li>Making Safari uninstallable.</li>
  <li>Implementing Install Prompts in iOS Safari for Web Apps.</li>
  <li>Allowing Browser Vendors and Developers to be able to test their browsers
    and web software outside the EU.</li>
  <li>Allowing Browsers using their own engine to install and manage Web Apps.</li>
  <li>Make notarization a fast and automatic process, as on macOS.</li>
  <li>Allow direct browser installation independently from Apple’s app store.</li>
  <li>Allow users to switch to different distribution methods of a native
    app and allow developers to promote that option to the user.</li>
  <li>Don't break third party browsers for EU residents who are traveling.</li>
  <li>Opt-Into Rights contract should be removed.</li>
  <li>Core Technology Fee should be removed.</li>
  <li>Apple should publish a new more detailed compliance plan.</li>
</ul>

<p>Apple is obligated under Articles 5(7), 6(3), 6(4) and 6(7) to fix each
  of the above issues. Apple has failed to achieve effective compliance
  with these obligations contrary to Article 13(3). Further Apple has
  taken numerous and significant steps that obstruct and undermine it in
  contravention of Article 13(4). Apple has introduced conditions and
  restrictions on DMA-conferred rights that have no legal basis in the
  DMA and gone far beyond the restrictions that the DMA does allow by
  introducing rules that have no basis in security or that are not justified,
  strictly necessary or proportionate.
</p>

<p>Any intervention that the Commission makes will have global ramifications. Regulators around the world are carefully watching the implementation of the DMA as they plan their own regulatory regimes. Already <a rel="noreferrer" target="_blank" href="https://open-web-advocacy.org/blog/japan-ends-the-apple-browser-ban/">Japan has become the second jurisdiction in the world to explicitly prohibit banning browser engines</a>. <a rel="noreferrer" target="_blank" href="https://open-web-advocacy.org/blog/new-digital-competition-laws-for-australia/">Australia</a>, <a rel="noreferrer" target="_blank" href="https://open-web-advocacy.org/blog/owa-2023-review/#korea%2C-brazil%2C-india">India, Korea and Brazil</a> are all planning on implementing their own versions of the DMA. The UK has just <a rel="noreferrer" target="_blank" href="https://open-web-advocacy.org/blog/uk-passes-dmcc/">passed the Digital Markets, Competition and Consumers Bill</a> that grants their regulator great power to enforce codes of conduct against tech giants.
</p>

<p>Successful resolution of these issues have an exceptional chance of becoming de facto global, as no jurisdiction will want to miss out on clear benefits being enjoyed by EU consumers. However, if Apple manages to successfully avoid complying with the DMA, these problems could persist indefinitely.
</p>

<p>
  We urge the Commission to enforce the DMA and obligate Apple to allow
  browsers and Web Apps to compete fairly and effectively on their mobile ecosystem.
  This will unlock contestability, fairness and interoperability. Companies will then
  have to compete for users on merit, not via lock-in or control over operating
  systems. Consumers will benefit from choice, better quality and cheaper software,
  interoperability, and the genuine ability to multihome across devices and operating
  systems offered by different companies.
</p>

<p>
  These changes can finally fix a mobile ecosystem that has been
  structurally broken, and artificially hindered, for more than a decade.
</p>


<p>That was the introduction to our report. You can read the <a href="/apple-dma-review/#h.3znysh7">full far more detailed report here.<a></p>
