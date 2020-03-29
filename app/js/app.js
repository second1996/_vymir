document.addEventListener("DOMContentLoaded", function() {
	
	wow = new WOW({
		// offset: 100,
		mobile: true,
	});
	wow.init();

	tippy('[data-tippy-content]', {
		followCursor: 'horizontal',
		duration: [200, 500]
	});

	let heroesSwiper = new Swiper ('.heroes__slider', {
		allowTouchMove: false,
		speed: 1000,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		preloadImages: false,
		lazy: true,
		lazy: {
			loadPrevNext: true,
		},
	});

	let servicesSwiper = new Swiper ('.table__columns', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		allowTouchMove: false,
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1
			},
			// when window width is >= 460px
			480: {
				slidesPerView: 2
			},
			// when window width is >= 480px
			768: {
				slidesPerView: 4
			},
		},
	});

	// Mobile menu
	const menuOpenButton   = document.querySelector('.humb'),
				menuCloseButton  = document.querySelector('.m-menu__close'),
				menuWrap         = document.querySelector('.m-menu'),
				siteBody         = document.querySelector('body');

	menuOpenButton.onclick = function() {
		menuWrap.classList.toggle('m-menu--opened');
		siteBody.classList.toggle('m-menu--active');
	}
	menuCloseButton.onclick = function() {
		menuWrap.classList.toggle('m-menu--opened');
		siteBody.classList.toggle('m-menu--active');
	}

	// $('img').on('dragstart', function(event) { event.preventDefault(); });

});