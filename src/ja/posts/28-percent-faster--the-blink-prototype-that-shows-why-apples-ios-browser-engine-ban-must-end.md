---
title: >-
  28%高速化: AppleのiOSブラウザエンジン禁止措置を終わらせるべき理由を示すBlinkプロトタイプ
date: '2026-06-18'
tags:
  - Policy
  - Apple
  - EU
  - Japan
  - WebKit
  - Blink
author: OWA
permalink: >-
  /ja/blog/28-percent-faster--the-blink-prototype-that-shows-why-apples-ios-browser-engine-ban-must-end/index.html
layout: layouts/post.njk
translated: true
---

**要約: 新たに公開されたテスト結果によると、iOSで動作するChromium/Blinkのプロトタイプは、Speedometer 3.1のページ応答性テストにおいてSafariより28.6%高速であることが示されました。また、このテストは、プロトタイプではすでに利用可能なものの、競合ブラウザベンダーがiOSへ導入することを阻まれているウェブ機能が数多く存在することも明らかにしました。これは、Appleによる第三者製ブラウザエンジンの禁止措置が、消費者、企業、ひいてはウェブ全体にどれほどの損失をもたらしているかを如実に物語る例です。**

## 新たなiOS版Blinkの性能統計

> Edgeウェブプラットフォームチームは、（BrowserEngineKit経由で）Blinkを用いたiOS向けブラウザで何が可能かを検証するプロトタイプの構築を支援するために、Chromiumへの変更を提案し続けてきました。
> Blinkは、iOS以外のすべてのプラットフォーム上のEdgeを支えるのと同じ、オープンソースのレンダリングエンジンです。</br></br>
> 私は、週末にそのプロトタイプの開発版ビルドをiPhoneにインストールし、同じデバイス上でSafariと並べて、いくつかの古典的なブラウザベンチマークを実行してみました。

[The Registerが新たに報じたところ](https://www.theregister.com/software/2026/06/17/apples-webkit-performance-tax-leaves-ios-browsers-stuck-in-the-slow-lane-says-microsoft/5257384)によると、火曜日にEdgeのエンジニアが、iOS 26.5.1上で動作する新しいChromiumプロトタイプに関する非常に[興味深い統計情報](https://www.linkedin.com/pulse/test-drive-blink-ios-kyle-pflug-0nyxc/)と、それとSafariを比較した結果を公開しました。

<figure>
    <img alt="iOS上でChromium/BlinkとSafari/WebKitのプロトタイプベンチマーク比較を行った結果についてのスクリーンショット。3つのカードは、iOS 26.5.1を実行しているiPhone 17 Pro MaxでChromiumがSafariより優れていることを示しています。Speedometer 3.1のウェブ応答性テストの結果は49.27対38.3で、+28.6%と表示されています。JetStream 3のJavaScriptおよびWasmスループットテストの結果は306.35対270.9で、+13.1%と表示されています。MotionMark 1.3.1のグラフィックレンダリングテストの結果は4,773.52対4,673.68で、約+2.1%と表示されています。" src="/images/blog/blink-on-ios-speedometer.png">
    <figcaption>iPhone 17 Pro Maxで実行したBlinkとWebKitのパフォーマンステストの結果</figcaption>
</figure>

Speedometerは、もともとAppleが開発したブラウザのパフォーマンスベンチマークツールです。
AppleのWebKitチームは、Speedometerを[「ブラウザのパフォーマンスを測定する最良の方法」](https://webkit.org/blog/15131/speedometer-3-0-the-best-way-yet-to-measure-browser-performance/)と評しています。

テスト結果によると、Chromium（Blink）のプロトタイプは、iOS Safari（およびiOSに同梱されたWebKitエンジンを使用せざるを得ないiOS上の他のすべてのブラウザ）よりも、ウェブ応答性において実に28.6%も高速であることがわかりました。

さらに重要なのは、私たちが知る限り、MicrosoftやGoogleのチームはiOSにおけるBlinkエンジンの最適化にほとんど注力していないということです。

> macOSのSpeedometerでは常にChromiumとWebKitがトップの座を争っていることを考えると、iOSでのその差の大きさは本当に驚くべきものです！
> しかも、**まだそのプラットフォームのパフォーマンス最適化に本格的に取り組んでいないんです！**
> 個人的な意見ですが、競争相手が少ない状況ではこういうことが起こるものです！
> <cite>[Rick Byers \- Chromium主席エンジニア](https://www.linkedin.com/pulse/test-drive-blink-ios-kyle-pflug-0nyxc/)<br>（強調は引用者による）</cite>

ここで、自然と疑問が浮かぶでしょう。なぜ、iOS向けに最適化されていないブラウザエンジンが、Safariをこれほどまでに上回る性能で動作するのでしょうか？
Appleほど豊富なリソースを持つ企業であれば、自社のプラットフォームでは競争力のある性能を発揮するものを作れるはずです。

私たちは、その答えは競争の欠如にあると考えています。
Appleは、iOS上で第三者製ブラウザエンジンの使用を禁止してきたため、他社のブラウザとSafariの間で競争が発生せず、iOS版Safariの性能を向上させるための投資を行う必要がありませんでした。
iOS上の他のすべてのブラウザも、Safariと同様に低性能です。これは、iOSに同梱されたWebKitエンジンを使わなければならないからです。

## 不足している機能

また、[Microsoft Edgeによるウェブ開発者への機能の需要調査](https://microsoftedge.github.io/TopDeveloperNeeds/)を活用した興味深い比較も公開されました。これによれば、プロトタイプがサポートしている機能の中には、Safari（ひいては、Appleによるブラウザエンジンの禁止措置の影響を受けるiOS上のすべてのブラウザ）が対応していない機能が数多く含まれていることが示されています。

<figure>
    <img alt="iOS上のBlinkとiOS上のWebKitのそれぞれについて機能のサポート状況を比較を示す、2つのiPhoneのスクリーンショット。左側の「Chromium 151.0.7882.0」とラベル付けされた端末は、iOS上のBlinkのプロトタイプページを示しており、選択された開発者のニーズ上位の機能（CSSのcorner-shape、CSSのcalc-size()、JavaScriptのTemporal、およびreading-flow、Scheduler API、moveBefore()、requestIdleCallback()の4つの機能）がサポートされています。右側の「Safari 26.5.1」とラベル付けされた端末は、同じページの本番環境のiOS上のWebKitバージョンを示しており、同じ機能が「ここでは利用できません」または「4個中0個がサポートされています」と表示されています。画像下部にキャプションがあり、「選択された機能テストは、開発者のニーズ上位ダッシュボードから取得され、開発者の課題を解決し、相互運用性のギャップを埋めるための進捗状況を表している」と書かれています。" src="/images/blog/blink-on-ios-feature-tests.png">
    <figcaption>iPhone 17 Pro MaxでBlinkとWebKitの機能テストを実行した様子</figcaption>
</figure>

> このダッシュボードは、ウェブエコシステム全体における、開発者が抱える主要な課題の解決と相互運用性のギャップの解消に向けた進捗状況を示すものです。
> 以下に挙げる各機能について、関連するブラウザ互換性ステータス、およびWeb Platform Tests（WPT）またはtest262プロジェクトによる最新の安定版チャネルに対するテストの結果が示されています。
> <cite>[Microsoft Edge \- 2026 web platform top developer needs](https://microsoftedge.github.io/TopDeveloperNeeds/)</cite>

下のグラフからもわかるように、改善は見られるものの、Safariは機能面でEdge、Chrome、Firefoxに比べて大きく遅れをとっています。

<figure>
    <img alt="2025年7月から2026年5月までのブラウザテストの進捗状況を示す折れ線グラフ。合格したWPTサブテストとtest262テストの合計で測定。紫色で示されているSafariは、この期間を通して他のブラウザに大きく遅れをとっており、合格したテスト数は約1,500件から始まり、2025年9月には約4,700件に増加し、2026年5月までにわずかに増加して5,000件強となった。EdgeとChromeは合格テスト数が約15,000件から約24,000件に増加し、Firefoxは約11,000件から18,000件に改善し、「すべてのサブテスト」の合計は約22,000件から約25,500件に増加した。このグラフは、Safariがわずかに改善したものの、Chrome、Edge、Firefoxに依然として大きく遅れをとっていることを示している。" src="/images/blog/top-developer-needs.png">
    <figcaption>ウェブ開発者が求める機能に関するWPT・Test262テストの総数と、各ブラウザのテスト通過数の推移（Microsoft Edgeの調査より）</figcaption>
</figure>

## Appleは消費者、企業、そしてウェブ全体にコストを強いている

これらは、Appleが競合するブラウザエンジンを17年間禁止してきたことによって、世界中の消費者や企業が負わされているコストを明確に示している資料のひとつです。

Appleは、モバイルにおけるウェブ全体に天井を設けています。それにより、ウェブのパフォーマンス、機能、そして[セキュリティ](https://open-web-advocacy.org/blog/uk-regulators-final-verdict--apples-browser-engine-ban-harms-competition/#apple-security-justification-for-banning-rival-browser-engines)が大きく損なわれています。
また、iOS向けに優れたブラウザを開発できる競合他社に市場シェアを奪われる恐れがないため、AppleがSafariに本格的に投資する意欲は低い状態にあります。ウェブ自体がプラットフォームであるため、これらの現状は、ブラウザの提供者とそのユーザーだけでなく、ウェブに依存するすべての企業に損害を与えています。

[EU](https://open-web-advocacy.org/blog/apples-browser-engine-ban-persists-even-under-the-dma/)や[日本](https://open-web-advocacy.org/ja/blog/how_apples_key_tactic_could_prevent_japans_smartphone_act_from_improving_browser_competition/)のような、Appleがブラウザ提供者に独自のエンジンの使用を許可することを法的に義務付けている地域でさえも、[Appleが設けた障壁により、ブラウザ提供者が独自のブラウザエンジンをiOSに移植することが阻まれています](https://open-web-advocacy.org/blog/apples-browser-engine-ban-persists-even-under-the-dma/)。

## ウェブに競争がもたらされるべき理由

ブラウザエンジンは、単なるアプリの構成要素ではありません。それはウェブプラットフォームの基盤であり、どのようなウェブの機能が利用できるか、ウェブアプリがどれだけ高速に動作するか、ユーザーのセキュリティがどれだけ守られるか、そしてウェブアプリがネイティブアプリと競争できるかどうかを決定づけるものです。
AppleがiOS上のブラウザエンジンを独占的に支配し続ける限り、それは事実上モバイルにおけるウェブの限界を支配し続けることになります。
それにより、EUデジタル市場法や日本スマホソフトウェア競争促進法が掲げる、モバイルプラットフォームの中でも特に重要なサービスの公正かつ自由な競争を促進するという目標が損なわれてしまいます。

ウェブは開かれていて、相互運用性があり、いかなるゲートキーパーの許可も要することなく、あらゆる規模の企業や個人が利用できるものです。これらは、アプリストアやそれが存在するOSとは異なる、ウェブに固有の特長です。
しかし、ウェブが競争力を持つためには、ブラウザ間での競争が行われる必要があります。
AppleがiOS上のブラウザエンジンを制限できるならば、モバイルにおけるウェブの可能性を阻害し、企業をネイティブアプリやアプリストアのルールに依存させることができてしまいます。

Appleには対応策を策定する猶予がすでに2年以上与えられてきたことを踏まえると、**欧州委員会は速やかに法的手続きを開始し、これらの障壁をどのように取り除くべきか、その具体的な指示をAppleに対して行う必要があります**。
私たちの見解では、これこそがEUが実施し得る最も重要な介入であり、モバイルエコシステム全体を再編する可能性が最も高い措置です。他のいかなる介入も、これに比肩するものではありません。

**日本の公正取引委員会も、同様の措置を講じるべきです**。私たちは、公正取引委員会に対し、必要な調査を速やかに開始し、これらの障壁を取り除くための措置をAppleに命ずることを求めます。