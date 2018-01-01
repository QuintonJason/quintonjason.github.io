/* Author: John Gibby @thatgibbyguy */

// ==========================
/* Store current location */
// ==========================

var pathName = location.pathname;

// ==========================
/* Remove Phone Link on Desktop */
// ==========================

remPhoneLink = function() {
	docWidth = $(document).width();
	if (docWidth >= 1024) {
		$('[data-query="phone"]').click(function() {
			return false;
		});
	} else {
		$('[data-query="phone"]').click(function() {
			return true;
		});
	}
};
remPhoneLink();

// ==========================
/* Adding and removing classes */
// ==========================

var addClassTo = function(query) {
	$('[data-query="' + query + '"]').addClass("on");
};
var removeClassFrom = function(query) {
	$('[data-query="' + query + '"]').removeClass("on");
};
var addClassByUrl = function(path, query) {
	if (pathName.indexOf(path) >= 0) {
		$('[data-query="' + query + '"]').addClass("on");
	}
};

// ==========================
/* Mobile Menu Trigger */
// ==========================

var nav = "";
var toggler = document.getElementById("mobile-toggle");

$(toggler).click(function() {
	$(nav)
		.toggleClass("mobile-hidden")
		.toggleClass("show");
});

// ==============================================
/* JVFloat - Placeholder Effect*/
// ==============================================

//apply effect
if (!$("html").hasClass("lt-ie9")) {
	$(".float-pattern").jvFloat();
}

// ==============================================
/* Logo Work*/
// ==============================================

// when click on Logo
var logo = document.getElementById("qj-logo");
var logoQ = document.getElementById("logo-q");
var logoJ = document.getElementById("logo-j");
var logoPic = document.getElementById("logo-pic");
var logoExpanded = true;
var tl = new TimelineMax({ paused: true });

tl.addLabel("start");
tl
	.to(logoJ, 0.45, { x: "-=31" }, "start")
	.to(logoPic, 0.35, { autoAlpha: 1 }, "start+=.3")
	.to(logoJ, 0.5, { autoAlpha: 0 }, "start")
	.to(logoQ, 0.75, { x: getCenter(logo, logoQ) }, "start");

function getCenter(x, y) {
	// get center of path inside SVG
	var xWid = x.getBoundingClientRect().width;
	var yWid = y.getBoundingClientRect().width;
	return (xWid - yWid) / 2;
}

logo.onclick = function(e) {
	// logo.classList.toggle("on");

	// slide J from left(-91px) to orig spot and fadeIn if not expanded
	if (logoExpanded) {
		tl.play();
	} else {
		tl.reverse();
	}

	logoExpanded = !logoExpanded;
};
