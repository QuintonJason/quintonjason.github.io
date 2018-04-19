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

	knob.addEventListener('click', function(){
		console.log(document.getElementById("knob")._gsTransform.rotation, "from element");
		console.log(Draggable.get("#knob").rotation, "from Draggable.get()");	
	});
}



