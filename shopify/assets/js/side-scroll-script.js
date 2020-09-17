// if javascript is enabled, add the horizontal class to the body
$("body").addClass("horizontal");
$(".container").css({ width: $(".container div").length * 100 + "vw" });

var scrolling = false;
var scrolled = 0;
const scrollDuration = 450;
const scrollPause = 1; // Sets how much you must scroll before changing the slide
// const scrollInterval = 5; // Time (seconds) before you can scroll again

function scroll(direction) {
	if (scrolling == false) {
		scrolling = true;
		$("html, body").animate(
			{
				scrollLeft:
					direction == "right"
						? $("html,body").scrollLeft() - $(".container div").innerWidth()
						: $("html,body").scrollLeft() + $(".container div").innerWidth()
			},
			scrollDuration,
			function () {
				scrolling = false;
			}
		);
	}
}

$(document).scrollTop(0);
$(window).on("wheel", function (e) {
	if (scrolling == false) {
		scrolled++;
	}
	if (scrolled > scrollPause) {
		if (e.originalEvent.deltaY < 0) {
			// scrolling down
			scroll("right");
			scrolled = 0;
		}

		if (e.originalEvent.deltaY > 0) {
			// scrolling up
			scroll("left");
			scrolled = 0;
		}
	}
});

$(".container div").mouseover(function () {
	if (scrolling == false) {
		$("html, body").animate(
			{
				scrollLeft: $(this).offset().left
			},
			100
		);
	}
});

$(".left").click(function () {
	scroll("left");
	scrolled = 0;
});

$(".right").click(function () {
	scroll("right");
	scrolled = 0;
});

$(document).scroll(function () {
	if ($(document).scrollLeft() == 0) {
		$(".left").css({
			opacity: 0,
			transform: "translateX(-100%)"
		});
	} else {
		$(".left").css({
			opacity: 1,
			transform: "translateX(0)"
		});
	}

	if (
		$(document).scrollLeft() ==
		$(".container").innerWidth() - $(".container div").innerWidth()
	) {
		$(".right").css({
			opacity: 0,
			transform: "translateX(100%)"
		});
	} else {
		$(".right").css({
			opacity: 1,
			transform: "translateX(0)"
		});
	}
});

$(document).keydown(function (e) {
	switch (e.keyCode) {
		case 39:
		case 40:
			scroll("right");
			break;
		case 37:
		case 38:
			scroll("left");
			break;
	}
});
