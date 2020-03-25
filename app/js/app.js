document.addEventListener("DOMContentLoaded", function() {
	
	wow = new WOW({
		offset: 100,
		mobile: true,
	});
	wow.init();

	var heroesSwiper = new Swiper ('.heroes__slider', {
		// effect: 'fade',
		allowTouchMove: false,
		speed: 1000,
		// autoplay: {
		// 	delay: 7000,
		// 	disableOnInteraction: false,
		// },
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

	// $('img').on('dragstart', function(event) { event.preventDefault(); });

});