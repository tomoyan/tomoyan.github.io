---
layout: page
title: Slider
subtitle: Latest Slider Articles
---

<!-- KyberWidget This is the 'Pay with tokens' button, place it anywhere on your webpage -->
<!-- KyberWidget You can add multiple buttons into a same page -->
<a href='https://widget.kyber.network/v0.7.5/?type=pay&mode=popup&lang=en&receiveAddr=0x1eEF27f5Da8652df413370298D3fCFb0c35bbD25&receiveToken=ETH&receiveAmount=1&callback=https%3A%2F%2Fkyberpay-sample.knstats.com%2Fcallback&paramForwarding=true&network=ropsten&theme=theme-dark' class='kyber-widget-button theme-dark theme-supported' name='KyberWidget - Powered by KyberNetwork' title='Pay with tokens' target='_blank'>Pay with tokens</a>

<!-- publish0x iframely.com big featured card -->
<h2>Featured</h2><hr/>
<div class="iframely-embed"><div class="iframely-responsive" style="padding-bottom: 56.1111%; padding-top: 120px;"><a href="https://www.publish0x.com/tomoyan/publish0x-passive-income-project-march-earnings-dollar-45-xylemo?a=4zbqpvkapr" data-iframely-url="//cdn.iframe.ly/TJ2mzRk"></a></div></div><script async src="//cdn.iframe.ly/embed.js" charset="utf-8"></script>

<!-- publish0x iframely.com small featured cards -->
<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.publish0x.com/tomoyan/defi-app-tutorial-kyberswap-fast-and-easy-way-to-trade-ether-xyxmkk?a=4zbqpvkapr" data-iframely-url="//cdn.iframe.ly/PQ3Uc6N?iframe=card-small"></a></div></div><script async src="//cdn.iframe.ly/embed.js" charset="utf-8"></script>

<!-- publish0x iframely.com slider articles -->
<div class="owl-carousel owl-theme">
    <!-- publish0x slider card 1 -->
    <div class="item" data-hash="one">
        <h4>
            <div class="iframely-embed"><div class="iframely-responsive" style="padding-bottom: 56.0166%; padding-top: 120px;"><a href="https://www.publish0x.com/tomoyan/brave-rewards-no-brave-ad-notifications-fix-windows-10-xdjznv?a=4zbqpvkapr" data-iframely-url="//cdn.iframe.ly/YRXsa7O"></a></div></div><script async src="//cdn.iframe.ly/embed.js" charset="utf-8"></script>
        </h4>
    </div>
    <!-- publish0x slider card 2 -->
    <div class="item" data-hash="two">
        <h4>
            <div class="iframely-embed"><div class="iframely-responsive" style="padding-bottom: 56.1465%; padding-top: 120px;"><a href="https://www.publish0x.com/tomoyan/defi-essential-tools-best-place-to-discover-crypto-interests-xqjkor?a=4zbqpvkapr" data-iframely-url="//cdn.iframe.ly/1YSPX6l"></a></div></div><script async src="//cdn.iframe.ly/embed.js" charset="utf-8"></script>
        </h4>
    </div>
    <!-- publish0x slider card 3 -->
    <div class="item" data-hash="three">
        <h4>
            <div class="iframely-embed"><div class="iframely-responsive" style="padding-bottom: 56.1594%; padding-top: 120px;"><a href="https://www.publish0x.com/tomoyan/earn-more-tips-create-your-own-publish0x-website-with-widget-xjpklx?a=4zbqpvkapr" data-iframely-url="//cdn.iframe.ly/sSjFY44"></a></div></div><script async src="//cdn.iframe.ly/embed.js" charset="utf-8"></script>
        </h4>
    </div>
</div>

<!-- dot button style for owl slider cards -->
<style>
.dot {
  height: 15px;
  width: 15px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
</style>
<!-- dot buttons for owl slider cards -->
<center>
  <a class="button secondary url" href="#one"><span class="dot"></span></a>
  <a class="button secondary url" href="#two"><span class="dot"></span></a>
  <a class="button secondary url" href="#three"><span class="dot"></span></a>
</center>

<!-- call owl slider cards plugin -->
<script>
    $(document).ready(function() {
      var owl = $('.owl-carousel');
      owl.owlCarousel({
        margin: 10,
        nav: true,
        loop: true,
        URLhashListener:true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
      })
    })
</script>

<!-- KyberWidget Add this to the end of <body> tag -->
<script async src='https://widget.kyber.network/v0.7.5/widget.js'></script>
