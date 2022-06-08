/* more-Team */
const btnsJoin = document.querySelectorAll('.btn-join');
const teamMore = document.querySelector('.btn-wrapper.team-more');
const cardsTeam = document.querySelectorAll('.team-item_wrp');

btnsJoin.forEach((elem) => {
	if (!elem.classList.contains('.w-condition-invisible')) {
		const parentBox = elem.closest('.team-item_wrp');
		parentBox.before(teamMore);
	}
});

function addAllCards() {
	cardsTeam.forEach((elem) => {
		// eslint-disable-next-line no-param-reassign
		elem.style.display = 'block';
	});
	teamMore.remove();
}

teamMore.addEventListener('click', addAllCards);
/* more-Team */
