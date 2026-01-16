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
				slidesPerView: 2.03,
			},
		},

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		centeredSlides: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},
  	});

	const swiperMovie = new Swiper('.swiper-movie', {
		direction: 'horizontal',
		slidesPerView: 1.4,
		spaceBetween: 13,
		loop: true,
		speed: 10000,
		allowTouchMove: true,
		freeMode: false, 

		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
		edgeSwipeThreshold: 0,

		breakpoints: {
			834: { slidesPerView: 1.21 },
			1440: { slidesPerView: 2.03 },
		},

		on: {
			touchEnd: function() {
				this.autoplay.run();
			},
		},
	});

	const swiperKind = new Swiper('.swiper-kind', {
		direction: 'horizontal',
		slidesPerView: 2,
		spaceBetween: 13,
		loop: true,
		speed: 6000, 
		allowTouchMove: true,
		freeMode: {
			enabled: true,
			momentum: false,
		},
		loopedSlides: 10, 
		breakpoints: {
			834: { slidesPerView: 4.2 },
			1440: { slidesPerView: 5.3 },
		},
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
			reverseDirection: true,
		},
		on: {
			touchEnd: function() {
				this.autoplay.run();
			},
		},
	});
	
})