---
title: 'Glossary'
permalink: '/glossary/'
metaDesc: "Learn language used in Open Web Advocacy's efforts."
layout: 'layouts/page.njk'
---

<h2 id="third-party-browser">Third Party Browser</h2>

A web browser developed by a company other than the gatekeeper
which includes a layout engine and rendering engine either selected or built by the company.

<h2 id="third-party-browser">Native App</h2>

An app written using a gatekeeper’s proprietary frameworks and APIs which are
provided by the operating system. On iOS (Apple’s operating system for iPhone and iPad) these
are currently exclusively delivered through Apple’s App Store.

<h2 id="web-app">Web App</h2>

A Web Application, Web App or Progressive Web App (PWA) is an application developed using Web technologies, such as HTML, CSS, JavaScript and WebAssembly. Web Apps use Web Browsers as the <strong>engine</strong> to run the Web App. The capabilities of a Web Apps depends on the level of advancement of the Web Browser that they run on. Web Assembly allows developers to bring existing software, for example game engines or photoshop, and port/convert them so they run on the web or as a web-app.

Web Apps can be made to run offline, can run as smoothly as native apps and can support high performance applications, but this functionality depends on the Web Browser. Web Apps offer more privacy and security than native apps. Web Apps are universal, in that they can be written once and then run on all devices. This is in comparison with native apps that have to be rewritten for each platform that they target.

To the end user a well written Web App should be indistinguishable from a native app.

<h2 id="webview-browser">WebView Browser</h2>

A web browser that does not include its own engine, and instead uses an engine or an unmodified **Webview** provided by the OS. For example all browsers on iOS other than Safari on iOS are WebView browsers, in that they do not render the website or run the code for the site and instead hand that job onto Safari WebView.

<h2 id="pwa">PWA (Progressive Web App)</h2>

Can be used interchangeably with Web App, although PWA is used to describe modern Web Apps with functionality that is typically associated with native apps rather than websites (i.e. installation on device, Offline Storage, Device API access etc).

<h2 id="gatekeeper">Gatekeeper</h2>

The company that controls the operating system and the apps that run on that operating system (i.e. Apple with iOS, Google with Android).

<h2 id="browser-vendor">Browser Vendor</h2>

The entity that makes the browser.

<h2 id="default-browser">Default Browser</h2>

A user’s default browser.

When a user taps a link, the link’s target website will open in the user’s current default browser separately from any app.

For example, when a user receives a message containing a link and they tap on it, the focused application will change from their SMS application to the Default Browser (e.g. Firefox) and the website will load in that browser outside of the app.

This is the default behaviour of operating systems since the 90s and preserves user choice in browsers. It also ensures the privacy and security settings of their browser (including extensions) are applied when browsing sites from these links. This default behaviour enables browser competition and respects user choice.

Mobile operating systems do not always respect this choice.

<h2 id="remote-tab-iab">Remote Tab IAB</h2>

A tab from a real browser, but shown inside an app.

This can occur when a user taps a link and the website loads within the current application (i.e. it does not switch to a browser application) but the site is still rendered using the user’s chosen (default) browser. Twitter for Android implements this pattern using Chrome Custom Tabs ("CCT") in the default configuration. It is important to note that while CCT contains the word Chrome, under default settings it will load the users’ default browser even if it is not-chromium, for example Firefox (Gecko).

User’s default browser choices -- whether Firefox, Edge, Chrome, or Opera -- are respected when the user’s default browser is "projected" through a Remote Tab IAB. This behaviour strikes a balance between developer interests in not "losing" users to external applications (browsers) and the user’s agency in choosing and configuring their own browser.

By default this does not undermine user choice, however on Android there is an option in CCT, which is the component that is used to enable Remote Tab IAB to specify a single engine. This can be used to undermine user choice like in the Android Google Search App. On iOS this always uses Safari whether or not it is the user’s default browser, disrespecting the choices of users that select different default browsers.

<h2 id="webview-iab">WebView IAB</h2>

An OS-Provided Component for Rendering Web Content.

Many apps provide an IAB based on the OS-provided webview component. Historically, this was grounded in reasonable motivations by app authors, but as Remote Tab Browsers have become available, the problems with WebVIew IABs have become evident.

Apps that implement WebView IABs:

1. Do not respect the user’s choice of browser, undermining competition.
2. Reduce functionality relative to “real” browsers. WebViews are not designed to be drop-in
replacements for browsers, and significant work is needed to fill in the gaps; work that many
apps do not put in.
3. Rely on the operating system to update the WebView component, potentially exacerbating security risks that real browser vendors do work to mitigate.
4. Can MITM (Man in the middle) connections to third parties, which means they can intercept all data sent and received to the website without the User’s knowledge or consent. This creates silent tracking/privacy & security risks.
5. Can monitor every click, tap, input and interaction with a WebView.
6. May not mitigate known security risks in outdated system WebViews (e.g. on older devices), putting users at high risk compared to loading websites in real browser.
7. May fail to implement key features (e.g., Push Notifications), despite the underlying WebView providing APIs that would allow it.

WebViews are not fully functioning browsers and applications that use them when Remote Tab IAB systems are available are undermining user’ choice in browsers. They also may damage the wider Web ecosystem by causing bugs and removing functionality critical to the content they load.

A variant of System WebView IABs are IABs built on application-provided browser engines (e.g., Mozilla’s GeckoView, which can be embedded in many native apps).