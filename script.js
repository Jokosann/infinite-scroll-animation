// variabel all container
const scrollers = document.querySelectorAll('.scroller');

// ?
if (!window.matchMedia('prefers-reduced-motion: reduce').matches) {
	addAnimation();
}

function addAnimation() {
	scrollers.forEach((scroller) => {
		// add data-animated true
		scroller.setAttribute('data-animated', true);
		// <ul/>
		const slider = scroller.querySelector('.slider');
		// array <li/>
		const sliderChildren = Array.from(slider.children);

		sliderChildren.forEach((item) => {
			// clone <li/>
			const cloneItem = item.cloneNode(true);
			// add atribute aria-hiddden in clone
			cloneItem.setAttribute('aria-hidden', true);
			// add clone to every <ul/>
			slider.appendChild(cloneItem);
		});
	});
}
