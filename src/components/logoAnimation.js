import { TimelineLite, Draggable, CSSPlugin, Power2, Power3 } from 'gsap';
// import * as CSSRulePlugin from 'gsap/CSSRulePlugin';


//it doesn't get much easier than this;)
document.addEventListener('DOMContentLoaded', function() {
	let knob, rotation; 
	console.log('loaded');
	knob = document.querySelector('#rotation');
	console.log('knob: ', knob);

	Draggable.create(knob, {
	  type: "rotation",
	  throwProps: true,
	  onDrag: function() {
	    console.log(this.rotation)
	  }
	});

	knob.addEventListener('click', functon(){
		console.log(document.getElementById("knob")._gsTransform.rotation, "from element");
		console.log(Draggable.get("#knob").rotation, "from Draggable.get()");	
	});
}


// $("#rotation").click(function() {
//   console.log(document.getElementById("knob")._gsTransform.rotation, "from element");
//   console.log(Draggable.get("#knob").rotation, "from Draggable.get()");
// });

/* note this file loads 

TweenMax.min.js
Draggable.min.js
ThrowPropsPlugin.min.js (Club GreenSock bonus plugin for velocity-based tweens)

More info on Club GreenSock and other bonus plugins
https://www.greensock.com/club

*/
// const slideDownTl = new TimelineLite({ paused: true, initialRender: true });
// const slideUpTl = new TimelineLite({ paused: true, initialRender: true });
// // Document-object-aware variables
// let menuBtn, menuList, shutter, shutterBf, shutterAft, menuSpans, menuSpansAfts;

// if (typeof window !== 'undefined' && typeof document !== 'undefined') {
//   document.addEventListener('DOMContentLoaded', function() {
//     // Menu Button
//     menuBtn = document.querySelector('.menu-btn');
//     // Menu List
//     menuList = document.querySelector('.list-nav');
//     // Shutter Variables
//     shutter = document.querySelector('.shutter');
//     shutterBf = CSSRulePlugin.getRule('.shutter:before');
//     shutterAft = CSSRulePlugin.getRule('.shutter:after');
//     // Menu Span Variables
//     menuSpans = document.querySelectorAll('.menu-span');
//     menuSpansAfts = CSSRulePlugin.getRule(
//       '.list-nav ul li .menu-link a .menu-span:after'
//     );
//     console.log('we passed window+document check!');

//     // slideDown Animation Timeline
//     slideDownTl
//       .set([shutterBf, shutterAft], {
//         cssRule: { y: '-120%' }
//       })
//       .set(menuBtn, { pointerEvents: `none` })
//       .set([menuList, shutter], {
//         visibility: 'visible'
//       })
//       .set(menuSpans, { y: '-200%' })
//       .timeScale(1.2)
//       .staggerTo(
//         [shutterBf, shutterAft],
//         1,
//         {
//           cssRule: { y: '0%' },
//           force3D: true,
//           rotation: 0.01,
//           ease: Power3.easeOut
//         },
//         0.3
//       )
//       .staggerTo(
//         menuSpans,
//         0.5,
//         { y: '0%', ease: Power2.easeInOut },
//         0.1,
//         '-=0.7'
//       )
//       .set(menuBtn, { pointerEvents: `all` });
//     // slideUp Animation Timeline
//     slideUpTl
//       .set(menuBtn, { pointerEvents: `none` })
//       .staggerTo(menuSpans, 0.5, { y: '-200%', ease: Power2.easeIn }, 0.1)
//       .staggerTo(
//         [shutterAft, shutterBf],
//         0.75,
//         {
//           cssRule: { y: '-120%' },
//           force3D: true,
//           rotation: 0.01,
//           ease: Power2.easeIn
//         },
//         0.25,
//         '-=0.4'
//       )
//       .set([menuList, shutter], {
//         visibility: 'hidden'
//       })
//       .set(menuBtn, { pointerEvents: `all` });
//   }); //  end DOMContentLoaded
// } // end if window !== undefined

// export const slideDown = () => {
//   slideDownTl.play(0);
// };

// export const slideUp = () => {
//   slideUpTl.play(0);
// };