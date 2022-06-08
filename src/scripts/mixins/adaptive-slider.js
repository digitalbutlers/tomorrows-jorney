

let adaptiveSwiper;
function initSwiper() {
	const screenWidth = window.innerWidth;
	const currentSwiper = document.querySelector('.swiper.why-tj__list-wrapper');
	const currentSwiperWrapper = document.querySelector('.why-tj__list.why-tj__list');
	// eslint-disable-next-line no-undef
	if (screenWidth < BREAKPOINTS.mob_landscape && adaptiveSwiper === undefined) {
		// eslint-disable-next-line no-undef
		adaptiveSwiper = new Swiper('.swiper.why-tj__list-wrapper', {
			speed: 700,
			slidesPerView: 'auto',
			spaceBetween: 40,
			centeredSlides: true,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			loop: true,
			// loopedSlides: 3,
			// Navigation arrows
			navigation: {
				prevEl: '.swiper-button-prev.why-tj',
				nextEl: '.swiper-button-next.why-tj',
			},
		});

		// eslint-disable-next-line no-undef
	} else if (screenWidth > BREAKPOINTS.mob_landscape && adaptiveSwiper !== undefined) {
		adaptiveSwiper.destroy();
		adaptiveSwiper = undefined;

		currentSwiperWrapper.removeAttribute('style');
		currentSwiper.removeAttribute('style');
	}
}
initSwiper();

window.addEventListener('resize', initSwiper);


