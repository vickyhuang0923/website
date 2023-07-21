$(document).ready(function(){
	 


	$(window).on('scroll',function () {
		if ($(this).scrollTop() > 350) {
			$('.return-to-top').fadeIn();
		} else {
			$('.return-to-top').fadeOut();
		}
	});
	$('.return-to-top').on('click',function(){
			$('html, body').animate({
			scrollTop: 0
		}, 50);
		return false;
	});

	const swiper = new Swiper('.swiper-container', {
		
		slidesPerView: 1,
		spaceBetween: 50,
		grabCursor: true,
		loop: true,

		breakpoints: {
			576: {
				slidesPerView: 3,
			}
		},

		pagination: {
			el:'.swiper-pagination',
			clickable:true,
		},
	
	});

});