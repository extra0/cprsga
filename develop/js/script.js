$(function(){

	// вызов фенсибокса
	$('.js-fancybox').fancybox();

	// триггер главного меню
	$('.header__menu-btn').on('click', function(){
		$('.header__menu-list').slideToggle(300);
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
		pager: false,
		controls: true
	});


	// слайдер благодарностей
	$('.reviews-section__block').bxSlider({
		pager: true,
		controls: false,
		minSlides: 2,
		maxSlides: 2,
		slideWidth: 245,
		slideMargin: 40
	});


	// слайдер курсов
	$('.course-form__bottom-block-slider').bxSlider({
		controls: false,
		minSlides: 2,
		maxSlides: 2,
		slideWidth: 700,
		slideMargin: 40
	});


	
	// останавливаем скролл header
	$(window).on('scroll load', function(){
		var footerScroll = $('.footer').offset().top,
			bodyScroll = $(window).scrollTop();
		if (bodyScroll + $(window).height() >= footerScroll) {
			$('.index-header').attr('style', 'top:'+ (-(bodyScroll + $(window).height() - footerScroll) -1) +'px;');
		} else {
			$('.index-header').attr('style', 'top:0px;');
		}
	});

});