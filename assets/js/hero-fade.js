//This is text fade out

var header = document.getElementById('header');

function fadeOutOnScroll(element) {
	if (!element) return;

	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	const elementTop = element.offsetTop;

	// Distance from the top of the page where fading should begin
	const fadeStart = elementTop - window.innerHeight / 2.5; // Start fading when element is halfway into view
	const fadeEnd = elementTop + 175; // Fully faded 0px below its top

	let opacity = 1;

	if (scrollTop >= fadeStart) {
		const fadeRange = fadeEnd - fadeStart;
		const progress = (scrollTop - fadeStart) / fadeRange;
		opacity = 1 - progress;
	}

	// Clamp opacity to [0, 1]
	opacity = Math.max(0, Math.min(1, opacity));
	element.style.opacity = opacity;
}

window.addEventListener('scroll', () => fadeOutOnScroll(header));