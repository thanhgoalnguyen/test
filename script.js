document.addEventListener("DOMContentLoaded", function () {
	const collapseHeader = document.querySelectorAll('.js-footer-nav__item-header');

	collapseHeader.forEach((item) => {
		item.addEventListener('click', function (event) {
			const target = event.target;
			const parent = target.parentElement;
			parent.classList?.toggle('active');
		})
	})
})