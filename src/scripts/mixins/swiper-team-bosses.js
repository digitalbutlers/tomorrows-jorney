/* eslint-disable no-undef */

const swiperAdmins = document.querySelector('.administration-inner.swiper');
const newsBtnPrev = document.querySelector(
	'.admins-btn_prev.swiper-button-prev',
);
const newsBtnNext = document.querySelector(
	'.admins-btn_next.swiper-button-next',
);
const newsBtnPagination = document.querySelector(
	'.admins-pagination.swiper-pagination',
);

swiperAdmins.append(newsBtnPrev);
swiperAdmins.append(newsBtnNext);
swiperAdmins.append(newsBtnPagination);

let mySwiper;
function initSwiper() {
	const screenWidth = $(window).outerWidth();
	if (screenWidth < 768 && mySwiper === undefined) {
		mySwiper = new Swiper('.swiper', {
			speed: 700,
			autoHeight: true,
			// How many slides
			slidesPerView: '1',
			/* spaceBetween: 30, */
			centeredSlides: true,
			/* autoplay:{
            delay:5000,
            disableOnInteraction: false,
        }, */
			// infinite
			loop: true,
			/* loopedSlides: 4, */
			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				dynamicBullets: true,
			},
			// Navigation arrows
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
		});
		/* mySwiper.updateAutoHeight(700); */
	} else if (screenWidth > 768 && mySwiper !== undefined) {
		mySwiper.destroy();
		mySwiper = undefined;
		$('.swiper-wrapper').removeAttr('style');
		$('.swiper-slide').removeAttr('style');
	}
}
initSwiper();

window.addEventListener('resize', initSwiper);
