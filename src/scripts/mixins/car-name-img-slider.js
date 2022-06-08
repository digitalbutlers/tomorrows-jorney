

// eslint-disable-next-line no-undef
const swiperCars = new Swiper('.swiper.greeting-images_wrp', {
	speed: 700,
	autoHeight: true,
	simulateTouch: false,
	allowTouchMove: false,
	effect: 'fade',
	// How many slides
	slidesPerView: '1',
	spaceBetween: 30,
	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
	},
	loop: true,
	loopedSlides: 3,
});
swiperCars.updateAutoHeight(700);

// eslint-disable-next-line no-undef
const swiperCarName = new Swiper('.swiper.swiper-car-name', {
	speed: 700,
	autoHeight: true,
	simulateTouch: false,
	allowTouchMove: false,
	direction: 'vertical',
	// How many slides
	slidesPerView: '1',
	/* Autoplay:{
          delay:7000,
          disableOnInteraction: false,
      }, */
	loop: true,
	loopedSlides: 3,
});

swiperCars.controller.control = swiperCarName;
