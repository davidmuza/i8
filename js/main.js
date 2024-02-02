$(function() {

	$('.header__burger-button').on('click', function(e) {
		e.preventDefault()
		$('.header__burger-menu').toggleClass('header__burger-menu--active')
	})

	$('.faqs__list-link').on('click', function(e) {
		e.preventDefault()
		if ($(this).hasClass('faqs__list-link--active')) {
			$(this).removeClass('faqs__list-link--active')
			$(this).children('.faqs__list-text').slideUp()
		} 
		else {
			$('.faqs__list-link').removeClass('faqs__list-link--active')
			$('.faqs__list-link').children('.faqs__list-text').slideUp()
			$(this).addClass('faqs__list-link--active')
			$(this).children('.faqs__list-text').slideDown()
		}
	})
})