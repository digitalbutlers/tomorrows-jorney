

const switchesAward = document.querySelectorAll('.list-partners .award');

switchesAward.forEach((elem) => {
	if (!elem.classList.contains('w-condition-invisible')) {
		elem.closest('.parners-item_inner').classList.add('award-active');
	}
});
