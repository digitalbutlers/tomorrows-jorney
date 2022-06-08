
const sectionThematicPart = document.querySelectorAll('.section-intro_case');

sectionThematicPart.forEach((elem) => {
	console.log(elem);
	if (elem.classList.contains('w-condition-invisible')) {
		elem.remove();
	}
});
