---
layout: post
title: Zalandas Logo Animation
---

Our [Zalandas website](http://zalandas.com) is currently going through a redesign. The vector graphics movement is so strong, you can't help but join the party. We are transitioning to SVG like all the cool kids because of the advantages it contains over raster images: scalability, accessibility, and file-size efficiency. The best place to start would be our logo.

### Why go SVG?

Our logo was created in Adobe Illustrator, so it's already in vector format. We had to change our thinking from using the raster logo as the primary image to using it as a fallback option. It was waiting for us to show it off all of it's scalable glory. Through the principle of [progressive enhancement](http://en.wikipedia.org/wiki/Progressive_enhancement), we are doing our clients a disservice by not taking advantage of this technology in [supported browsers](http://caniuse.com/#feat=svg). Those with unsupported browsers have already been looking at raster graphics this entire time anyway, so we'll choose to display those as a fallback.

Aside from SVG looking sharp, it has another level of functionality through animation. Researching some of the possibilities that SVG animation provides lead me to [Jake Archibald's technique](http://jakearchibald.com/2013/animated-line-drawing-svg/) which involved animating `stroke-dasharray` using `stroke-dashoffset`

### Animation

Animating SVG requires that SVG to be use inline, not as a background-image. We chose to style the SVG using an external stylesheet to try and keep markup as clean as possible. With all of SVG's greatness, it leaves your markup a bit messy, even with optimization(). It handles gzip well [compressing at 80% on average](http://www.w3.org/TR/SVG/minimize.html), so page load won't really be affected.

<pre rel="HTML"><code class="language-markup">&lt;svg&gt;
  &lt;path class="path" fill="#ffffff" stroke="#000000" ... /&gt;
&lt;/svg&gt;</code></pre>

Classes have been added to the `<path>` to target that particular element in the stylesheet, applying the animation and stroke properties.

<pre><code class="language-css">@keyframes drawfade {
  50%,53% {
    stroke-dashoffset: 1000;
    fill: #ffffff;
    stroke: rbga(0,0,0,1);
  }
  100% {
    stroke-dashoffset: 0;
    fill: #6E6F71;
    stroke: rgba(0,0,0,0);
  }
}</code></pre>

Once targeted you can apply a keyframe animation which reduces the `stroke-dashoffset`, causing the drawing animation.

<pre><code class="language-css">.path {
  stroke-dasharray: 2276;
  stroke-dashoffset: 2276;
  -webkit-animation: drawfade 4s linear forwards;
  animation: drawfade 4s linear forwards;
}
</code></pre>

It's important to note the `forwards` value for the `animation-fill-mode`. This causes the animation to remain in it's final state once the animation is completed. Otherwise the `stroke-dashoffset` would return to it's original value, causing the logo to disappear.

### Pitfalls with IE

Our fallback method of choice was to use <a href="http://modernizr.com/">Modernizr for feature detection</a>. The problem with this approach that SVG is supported in IE9+, so our Modernizr test will fail and not swap out the SVG with a png fallback. This is only an issue because we chose to use CSS3 animations, instead of using a Javascript SVG library like [Snap.svg](http://snapsvg.io/)

<pre><code class="language-css">  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
     .path {
       stroke-dasharray: 0; /*reset image back to normal pos*/
       stroke-dashoffset: 0; /*reset image back to normal pos*/
       fill: #6E6F71;
       stroke: rgba(0,0,0,0)
     }
  }</code></pre>

Since feature detection is failing us, we can use browser detection through by using `-ms-high-contrast` to target IE versions that support SVG but don't support SVG animation through CSS animations, IE9,10,and 11. [Conditional comments](http://en.wikipedia.org/wiki/Conditional_comment) are not an option for this Internet Explorer related issue because Modernizr will handle the fallback for IE8 and below. This snippet is only needed because of the behavior of the `stroke-dasharray` technique, which essentially remove's the logo from view until the keyframe animation is instantiated.

<p data-height="405" data-theme-id="9329" data-slug-hash="ImGeo" data-default-tab="result" data-user="qjason35" class='codepen'>See the Pen <a href='http://codepen.io/qjason35/pen/ImGeo/'>Company SVG Logo</a> by Quinton Jason (<a href='http://codepen.io/qjason35'>@qjason35</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<p><script async src="//codepen.io/assets/embed/ei.js"></script></p>
