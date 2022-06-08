/* autocompleteOff */
const inputs = document.querySelectorAll('input');
const textareas = document.querySelectorAll('textarea');

function autocompleteOff(elem) {
	elem.setAttribute('autocomplete', 'off');
}

inputs.forEach((elem) => {
	autocompleteOff(elem);
});
textareas.forEach((elem) => {
	autocompleteOff(elem);
});
/* autocompleteOff */
/* mutation-observer */
document.addEventListener('DOMContentLoaded', () => {
	const targetEl = document.querySelector('.menu-btn');

	function callback(mutations) {
		console.log(mutations);
		if (targetEl.classList.contains('w--open')) {
			console.log('open');
			document.querySelector('body').style.overflow = 'hidden';
		} else {
			console.log('close');
			document.querySelector('body').style.overflow = 'auto';
		}
	}
	const observer = new MutationObserver(callback);
	observer.observe(targetEl, {
		attributes: true,
	});
});
/* mutation-observer */
