$(function(){

	// Smooth scroll plagin jquery
  // Указываем класс тега меню <nav> и тег ссылка <a>
  // на котором находится id для перехода ниже по сайту.
  // Все ссылки которые находятся в nav не будут переходить
  // к другим страницам сайта или в интернет, только работают
  // как переход к разделу текущей страницы
  $('.menu a, .go-top, .header__scroll-link').on('click', function(event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор блока с атрибута href
    var id = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });

	var mixer = mixitup('.gallery__content');

	$('.slider-blog__inner').slick({
		arrows: false,
		dots: true
	});

	// Menu btn
$('.menu__btn, .menu a').on('click', function(){
  $('.header__top-inner').toggleClass('header__top-inner--active');
});

});