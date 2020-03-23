document.addEventListener("DOMContentLoaded", function() {

	var heroesSwiper = new Swiper ('.heroes__slider', {
		// effect: 'fade',
		allowTouchMove: false,
		speed: 800,
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

	// $('img').on('dragstart', function(event) { event.preventDefault(); });

});