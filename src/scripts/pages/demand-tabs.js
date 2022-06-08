const tabs = document.querySelectorAll('.demand-tab');
const articlePaginationList = document.querySelector('.article-pagination_list');

function assignDataId() {
	articlePaginationList.innerHTML = '';
	tabs.forEach((elem, index) => {
		const h3 = elem.querySelector('h3').textContent;
		elem.setAttribute('data-id', `${index}`);
		if (index === 0) {
			articlePaginationList.insertAdjacentHTML('beforeend', `<li data-id='${index}' class='title-link active'>${h3}</li>`);
		} else {
			articlePaginationList.insertAdjacentHTML('beforeend', `<li data-id='${index}' class='title-link'>${h3}</li>`);
		}
	});
}
assignDataId();
function switchTab(event) {
	if (event.target.classList.contains('title-link')) {
		const links = document.querySelectorAll('.title-link');
		links.forEach((link) => {
			link.classList.remove('active');
		});
		event.target.classList.add('active');
		const currentDataId = event.target.getAttribute('data-id');
		tabs.forEach((element) => {
			if (element.getAttribute('data-id') === currentDataId) {
				element.classList.add('active');
			} else {
				element.classList.remove('active');
			}
		});
	}
}

articlePaginationList.addEventListener('click', switchTab);
