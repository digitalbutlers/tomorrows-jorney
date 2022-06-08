// eslint-disable-next-line func-names
(function () {
	// create a new Library instance and store it in a variable called "projectsGrid"
	// eslint-disable-next-line no-undef
	const projectsGrid = new FsLibrary('.news-list');

	// run loadmore on our instance
	projectsGrid.loadmore({
		button: '.load-more-button',
		resetIx: true,
		loadAll: true,
		paginate: {
			enable: true,
			itemsPerPage: 5,
			insertPagination: '.pagination-container',
			bgColor: 'transparent',
			bgColorActive: '#4a4a88',
			textColor: '#000000',
			textColorActive: '#FFFFFF',
			borderColor: '#fff',
		},
		animation: {
			enable: false,
		},
	});
}());
