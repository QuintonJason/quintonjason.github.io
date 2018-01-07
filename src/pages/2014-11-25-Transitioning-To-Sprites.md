---
title: Transitioning To Sprites
date: "2014-11-25"
---

Our company’s website is going through a major transition to vectors. It started with our logo, but the size reduction SVG provides alone makes not switching out icon fonts as well a misnomer. I’ve used icon fonts on previous projects and was satisfied, until I explored the possibilities of SVG. We transitioned to them from using transparent pngs, and we love our workflow.

## Why not Icon Fonts?

Anti-aliasing is a problem for me simply because of its variant rendering based on browsers and pixel-densities. It’s considered text, so the anti-aliasing may lead to images not being as crisp as expected. SVGs are vectors. They are resolution independent. Neither the resolution nor pixel density will deter their appearance. We prefer the consistently sharper image.

Icon fonts’ CSS control is more of an annoyance than a problem. You are limited to just a few properties that can be styled such as color, size, shadows. Working with SVGs for a bit, I’ve seen many of the possibilities associated with styling and animation each element. Now things such as styling one color annoy me, and I can’t go back to that.

Positioning icon fonts is an absolute nightmare. Much of this has to do with implementation choice. From negative margin issues to pseudo element spacing there are endless amounts of things needed to touch up icon fonts so that the desired rendering is achieved. SVG positioning is simplified because your choice of implementation has a corresponding method of displaying responsively within its parent container.

@font-face issues have always been a concern of mine. The most noticeable issue that drives me insane with @font-face is the potential to not load properly sometimes and show up as an arbitrary character, most notably blank or crossed out squares. This sporadic failing was something that was left me uneasy. Consistency is very important in web development, so this issue by nature is a turn-off. SVG content is contained within the document itself so this kind of problem won’t exist.

## The Process – Icomoon

Whether you prefer GUI or command-line, there are a number of tools at your disposal for creating sprites. We chose to use Icomoon for this procedure. This is a great app to use if you’re just getting started with SVG, because they provide starter vectors if you don’t have any handy. If you have vectors already at your disposal, you can import icons into Icomoon. This makes selecting between custom and standard icons seamless.

![alt text]({{ site.url }}/images/svgIcomoonSelection1.gif "Icomoon")

Once downloaded the directory contains a svgdefs.svg file which contains all icons wrapped in a `symbol` tag, with corresponding id’s provided by Icomoon. There is also a demo.html file which contains examples of how to implement icons using the `use` tag. The demo file embeds the contents of the svgdefs.svg with within the HTML, which could make your file lengthy if you’ve got tons of icons. You can reference the actual svgdefs.svg file as an external link, but this is not supported in Internet Explorer. SVG 4 Everybody takes care of the IE issue, so we can start using this now without worry.

## Summary

Transitioning to SVG icons was not as tedious of a process as expected thanks to Icomoon. We’re very excited with all the animation possibilities for our icons. Images are a major part of the user experience, and presenting the cleanest image possible is definitely a step in the right direction.
