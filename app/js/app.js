document.addEventListener("DOMContentLoaded", function() {
	
	wow = new WOW({
		offset: 100,
		mobile: true,
	});
	wow.init();

	tippy('[data-tippy-content]', {
		followCursor: 'horizontal',
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