
/* swiper-news */

const swiperNews = document.querySelector('.news-bottom.swiper');
const newsBtnPrev = document.querySelector('.desktop-btn_prev.swiper-button-prev');
const newsBtnNext = document.querySelector('.desktop-btn_next.swiper-button-next');
const newsBtnPagination = document.querySelector('.desktop-pagination.swiper-pagination');

swiperNews.append(newsBtnPrev);
swiperNews.append(newsBtnNext);
swiperNews.append(newsBtnPagination);

// eslint-disable-next-line no-undef
const swiper = new Swiper('.swiper.news-bottom', {
	speed: 700,
	autoHeight: true,
	simulateTouch: true,
	// How many slides
	slidesPerView: '1',
	spaceBetween: 30,
	/* autoplay:{
          delay:5000,
          disableOnInteraction: false,
      }, */
	// infinite
	loop: true,
	loopedSlides: 4,
	// If we need pagination
	pagination: {
		el: '.swiper-pagination.desktop-pagination',
		clickable: true,
		dynamicBullets: true,
	},
	// Navigation arrows
	navigation: {
		prevEl: '.swiper-button-prev.desktop-btn_prev',
		nextEl: '.swiper-button-next.desktop-btn_next',
	},
});
swiper.updateAutoHeight(700);

/* swiper-news */
