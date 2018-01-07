---
title: Friday at Four - Let's Use SVG
date: "2015-02-10"
external_url: https://thinkx.net/blog/friday-at-four-lets-use-svg
---

Fridays at Four are Xdesign’s group hangout session in which we set out to learn something new and improve the team. These discussions can range from a TED Talk to the latest in design or typography trends, to just taking a break to sit outside in the sun. This is Quinton Jason’s talk on the implementation of SVG, use cases, and animation demos.

## WHY SVG?

SVG is more than just an image format. It’s a solution that solves many problems with today’s rapidly growing web. The number of mobile devices with internet access is rising everyday and each new device that enters the market brings with it the possibility of a new screen resolution or pixel density. SVG’s resolution independence helps avoid the issue of creating multiple designs for multiple devices. No matter the screen resolution or pixel density, SVG files will always look crisp.

This greatly increases workflow efficiency because there is not only one file across all devices, but one file shared between design and development. SVG files also allow individual elements within the graphic to be targeted for animation or manipulation. Features like this allow different versions of one file to display different visuals depending on the device used to view it.

## Adaptive SVG

Adaptive SVG is a technique that allows manipulation of an SVG file depending upon the available resolution of a user and their device. At its core, this is responsive design (link to responsive design blog post). As with responsive design, this is a great way to target desktops, tablets, phones, and everything in-between all through a single image.

In this example we can see a different design given to an element based on the available viewing area. Instead of having to provide three different files, however, we have only designed a single SVG. This is the power of SVG.

![alt text]({{ site.url }}/images/svg-mediaquery.gif "QJ Adaptive SVG")

## Animating with SVG

Animations and graphics drive the web. Using animation can call attention to a visual element, or a call to action, which helps your user reach their destination more quickly, and helps you increase conversions more easily.

With SVG a developer is able to target individual elements within a graphic. This is a huge shift in the way we think about developing rich animations and has really changed the idea of what is possible through movement. With this technique, any part of an SVG file can rotate or translate about any axis.

<p data-height="300" data-theme-id="9329" data-slug-hash="mybarZ" data-default-tab="html,result" data-user="quintonjason" data-embed-version="2" data-pen-title="CSS Animated Cuddly Bear" class="codepen">See the Pen <a href="https://codepen.io/quintonjason/pen/mybarZ/">CSS Animated Cuddly Bear</a> by Quinton Jason (<a href="https://codepen.io/quintonjason">@quintonjason</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Shape Tweening

We can also go much further than simple point A - point B animations with Shape Tweening. With shape tweening, an image or part of an image can morph or “tween” into another – in real-time. This adds a level of smoothness not seen on the web since the old-school flash-based animations (but believe us - we are never going back to those days).

When implemented correctly, tweening makes images come alive in the browser and adds personality to your site.

![alt text]({{ site.url }}/images/batman_logos.svg "QJ Adaptive SVG")

## Filter Animations

This is what designers will love. SVG gives us the ability to use certain Photoshop capabilities that were once only a dream in web development. Through this we now have the ability to illustrate wonderful concepts such as light sources, images masks and other things we’ve taken for granted inside of our graphic designer tools for decades, but never had the opportunity to use on the web.

That is, before now. Here’s a light source that changes through animating SVG filters.

<p data-height="300" data-theme-id="9329" data-slug-hash="pnoJD" data-default-tab="html,result" data-user="jonitrythall" data-embed-version="2" data-pen-title="SVG Lighting Source Animation" class="codepen">See the Pen <a href="https://codepen.io/jonitrythall/pen/pnoJD/">SVG Lighting Source Animation</a> by Joni Trythall  (<a href="https://codepen.io/jonitrythall">@jonitrythall</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

And another example used to make a “gooey” effect on a navigation system.

<p data-height="300" data-theme-id="9329" data-slug-hash="OPjxZL" data-default-tab="html,result" data-user="lbebber" data-embed-version="2" data-pen-title="svg goo effect demonstration" class="codepen">See the Pen <a href="https://codepen.io/lbebber/pen/OPjxZL/">svg goo effect demonstration</a> by Lucas Bebber (<a href="https://codepen.io/lbebber">@lbebber</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## The future is here.

Let’s use SVG. Let’s get rid of those transparent PNG files and add a level of interaction that makes the user’s experience memorable. They will love you for it (and your conversion rates will too).
