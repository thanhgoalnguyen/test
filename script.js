document.addEventListener("DOMContentLoaded", function () {
	const collapseHeader = document.querySelectorAll('.js-footer-nav__item-header');

	collapseHeader.forEach((item) => {
		item.addEventListener('click', function (event) {
			const target = event.target;
			const parent = target.parentElement;
			parent.classList?.toggle('active');
		})
	})

	const observerOptions = {
		threshold: 0.2
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('show');
				observer.unobserve(entry.target);
			}
		});
	}, observerOptions);

	document.querySelectorAll('.js-show').forEach((el) => {
		observer.observe(el);
	});

	const swiper = new Swiper('.mySwiper', {
		direction: 'horizontal',
		slidesPerView: 1.4,
    	spaceBetween: 13,
		loop: true,
		breakpoints: {
			834: {
				slidesPerView: 1.21,
			},
			1440: {
				slidesPerView: 1.275,
			},
		},

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		centeredSlides: true,
  	});
})