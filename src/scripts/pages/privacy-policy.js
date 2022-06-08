

const titles = document.querySelectorAll('.privacy-content h2, .privacy-content h3');
const articlePagination = document.querySelector('.article-pagination_list');

articlePagination.innerHTML = '';
titles.forEach((elem, index) => {
	elem.setAttribute('id', `${index}`);
	elem.classList.add('title');
	if (elem.tagName === 'H2') {
		articlePagination.insertAdjacentHTML('beforeend', `<li class='title-link big-title'><a class='pagination-link_inner' href='#${index}'>${elem.textContent}</a></li>`);
	} else {
		articlePagination.insertAdjacentHTML('beforeend', `<li class='title-link'><a class='pagination-link_inner' href='#${index}'>${elem.textContent}</a></li>`);
	}
});


function toggleClassLinks() {
	titles.forEach((elem, index) => {
		const heightElem = elem.clientHeight;
		const tab = elem.offsetTop + 560;

		// eslint-disable-next-line no-undef
		const scroll = $(window).scrollTop();
		if (scroll > tab && scroll < (tab + heightElem)) {
			const titleLinks = document.querySelectorAll('.pagination-link_inner');
			titleLinks.forEach((title, number) => {
				title.classList.remove('active');
				if (index === number) {
					title.classList.add('active');
				}
			});
		}
	});
}

toggleClassLinks();
window.addEventListener('scroll', toggleClassLinks);

