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

});