document.addEventListener("DOMContentLoaded", function() {
	
	wow = new WOW({
		// offset: 100,
		mobile: true,
	});
	wow.init();

	tippy('[data-tippy-content]', {
		followCursor: 'horizontal',
		// duration: [200, 500]
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
		roundLengths: true,
		breakpoints: {
			// when window width is >= 320px
			320: {
				allowTouchMove: true,
				slidesPerView: 1
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 2
			},
			// when window width is >= 768px
			768: {
				allowTouchMove: false,
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


	// jQuery Inputmask
	Inputmask().mask(document.querySelectorAll("input"));

	$('#serviceModal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget)
		var serviceName = button.data('service')
		var modal = $(this)
		modal.find('#service-name, #service-title').val(serviceName)
	});

	$('#educationModal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget)
		var packageName = button.data('package')
		var modal = $(this)
		modal.find('#package-name, #package-title').val(packageName)
	});

	// Project Go back button
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var goBackHeight = $('.go-back-btn').outerHeight();

	$(window).scroll(function(event){
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 250);

	function hasScrolled() {
		var st = $(this).scrollTop();

		if (Math.abs(lastScrollTop - st) <= delta)
			return;
		
		if (st > lastScrollTop && st > goBackHeight){
			$('.go-back-btn').removeClass('is-hidden').addClass('is-shown');
		} else {
			if(st + $(window).height() < $(document).height()) {
				$('.go-back-btn').removeClass('is-shown').addClass('is-hidden');
			}
		}
		
		lastScrollTop = st;
	}

});

