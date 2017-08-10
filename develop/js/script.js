$(function(){

	// вызов фенсибокса
	$('.js-fancybox').fancybox();

	// триггер главного меню
	$('.header__menu-btn').on('click', function(){
		$('.header__menu-list').slideToggle(300);
		if ($('.index-header__left').length == 1) {
			$('.index-header__left').toggleClass('active');
		}
		if ($(this).hasClass('active')) {
			$(this).find('.fa').toggleClass('fa-bars fa-close')
			$(this).removeClass('active');
		} else {
			$(this).find('.fa').toggleClass('fa-bars fa-close')
			$(this).addClass('active');
		}
	});

	// первый слайдер на главной
	$('.slider-section__block').bxSlider({
		mode: 'fade',
		auto: true,
		pager: false,
		controls: true,
		adaptiveHeight: true
	});


	// слайдер благодарностей
	$('.reviews-section__block').bxSlider({
		pager: true,
		controls: false,
		auto: true,
		minSlides: 2,
		maxSlides: 2,
		slideWidth: 245,
		slideMargin: 40
	});


	// слайдер курсов
	var numSlides = 2;
	if ($(window).width() < 768) {
		numSlides = 1;
	}

	$('.course-form__bottom-block-slider').bxSlider({
		controls: false,
		minSlides: numSlides,
		maxSlides: numSlides,
		slideWidth: 1000,
		slideMargin: 40,
		adaptiveHeight: true
	});


	
	// останавливаем скролл header
	// $(window).on('scroll load', function(){
	// 	var footerScroll = $('.footer').offset().top,
	// 		bodyScroll = $(window).scrollTop();
	// 	if (bodyScroll + $(window).height() >= footerScroll) {
	// 		$('.index-header').attr('style', 'top:'+ (-(bodyScroll + $(window).height() - footerScroll) -1) +'px;');
	// 	} else {
	// 		$('.index-header').attr('style', 'top:0px;');
	// 	}
	// });


	// доскролл до блоков
	if ($(window).width() > 991) {
		var i = 0;
		$(".main-content").onepage_scroll({
		  sectionContainer: "section",
		  responsiveFallback: false,
		  loop: false,
		  pagination: false,
		  updateURL: false,
		  direction: "vertical",
		  beforeMove: function(index) {
		  	if ($('body').hasClass('viewing-page-3') && i== 0) {
		  		$("[spincrement]").spincrement({
		  			from: 0,
		  		    duration: 3500,
		  		    thousandSeparator: ''
		  		});
		  		i=1;
		  	}
		  }
		});
	}

	$(window).on('load', function(){
		setTimeout(function(){
			$('.preloader').fadeOut(500);
		}, 200)
	});


});