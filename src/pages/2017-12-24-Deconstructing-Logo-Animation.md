---
title: Interactive SVG - Deconstructing a Logo Animation
date: "2017-12-24"
---

I’m currently working on my site redesign. Until the day comes that I’m ready to launch, I threw up a super simple landing page: just a logo and some social icons. The nakedness of my site has led me to run through a bunch of animation concepts on my SVG logo, CSS-only, GSAP, plain JS. This felt like a good time to get back on the blog.

The constructing your SVG is beneficial to plan on the front end what you need to interact with. Whether you're comfortable editing SVG files or not, there are a couple things you can do in your graphical editor to reduce the number of manipulations.

* Name your layers - The are exported as ID’s that you can target with CSS/JS
* Limit any drop shadows or raster effects - SVG files are ugly to look at. Adding rastered content turns ugly into unreadable.
* Use [SVGOMG](https://jakearchibald.github.io/svgomg/) to optimize once ready for the web.

```html
<svg version="1.1" id="qj-logo"
	xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	x="0px"
	y="0px"
	viewBox="0 0 283.9 193.7"
	xml:space="preserve">
  <style type="text/css">
      .st0{display:none;fill:#41B649;}
      .st1{fill:#41B649;}
      .st2{display:none;}
      .st3{display:inline;}
      .st4{display:inline;fill:#FFFFFF;}
  </style>
  <g id="logo-wrapper">
	  <path id="logo-j" d="M142.6,0c17.5,8.3,32.4,21.2,43.1,37.1h60.6v96c0,19.6-10.5,25.1-28.9,25.1h-20.8l32.9,34.8
	      c30-2.9,54.4-15.6,54.4-65V0H142.6z"/>
	  <g id="logo-q" class="st1">
	    <image id="logo-pic" xlink:href="https://thinkx.net/uploads/images/Quinton-Jason.jpg" x="30" y="35" height="130px" width="130px"/>
	    <path class="st1" d="M215.8,193.7l-39.5-41.8c10.8-15.6,17.2-34.6,17.2-55c0-53.4-43.3-96.7-96.7-96.7S0,43.5,0,96.9 s43.3,96.7,96.7,96.7c19.5,0,37.5-5.8,52.7-15.6l14.9,15.7H215.8z M96.7,155.9c-32.6,0-59-26.4-59-59s26.4-59,59-59s59,26.4,59,59 S129.3,155.9,96.7,155.9z"/>
	 </g>
  </g>
</svg>
```

Let’s go through what's happening in the demo. My plan was as follows:
Once the Q is clicked...
Move the J behind it while fading out.
While the above is happening, center the Q path within its SVG container.
Once the J is hidden, fade in the image that lives within the Q.

Let’s define the variables that we’ll be targeting, namely `#qj-logo`, `#logo-q`, `#logo-j`, and `#logo-pic`. We’ll also need to define a GSAP timeline variable and a conditional to check whether or not the logo is expanded.

Now that the variables are ready, we’ll set up the timeline using GSAP’s [TimelineMax](https://greensock.com/timelinemax).

```js
let tl = new TimelineMax({ paused: true });
tl
	.to(logoJ, 0.45, { x: "-=31" }, "start")
	.to(logoPic, 0.35, { autoAlpha: 1 }, "start+=.3")
	.to(logoJ, 0.5, { autoAlpha: 0 }, "start")
	.to(logoQ, 0.75, { x: getCenter(logo, logoQ) }, "start");
```

In our timeline we’ll move the ‘J’ logo along the X axis relative to its current position. The relative translate is ideal here because we don’t want the element to translate to a location relative to the SVG viewbox, just the path we’re targeting. I typically use `autoAlpha` instead of animating just the `opacity` property. `autoAlpha` animates `opacity` `0/1` and `visibility` `visible/hidden` which eliminates any issues with a non visible element being clickable. We finish the timeline by centering the Q with respect with the svg container with our `getCenter()`.

When toggling states to initiate an animation, GSAP is my go-to. GSAP allows a timeline to run forwards or backwards based on just a method call. With this info, we’ll play our timeline if the logo is expanded and will reverse the timeline if the logo is collapsed.

```js
let logo = document.getElementById("qj-logo");
let logoExpanded = false;
logo.onclick = function(e) {
	if (logoExpanded) {
		tl.play();
	} else {
		tl.reverse();
	}

	logoExpanded = !logoExpanded;
};
```

We’ll finish the demo by adding our conditional to check whether the logo is expanded or not. If our logo is expanded, we’ll call the `play()` method. We toggle the state for the next time the animation is called.

This demo focuses on animating properties that are very performant: `opacity` and `translateX/Y`. It important to remember that you have endless possibilities for how you can animate something. Using some of the properties that perform well is crucial as apps become bogged down with other types of assets.

<p data-height="405" data-theme-id="9329" data-slug-hash="JMWdMM" data-default-tab="result" data-user="qjason35" class='codepen'>See the Pen <a href='http://codepen.io/qjason35/pen/JMWdMM/'>Company SVG Logo</a> by Quinton Jason (<a href='http://codepen.io/qjason35'>@qjason35</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<p><script async src="//codepen.io/assets/embed/ei.js"></script></p>

