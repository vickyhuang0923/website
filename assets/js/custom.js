(() => {
  'use strict'
	$("body").addClass("loaded");

	$(".navbar-toggler").on('click', function(){
		$(this).toggleClass("navbar-toggler-active");
 });

 $(window).on('scroll',function () {
	if ($(this).scrollTop() > 350) {
		$('#scroll-Top').fadeIn();
	} else {
		$('#scroll-Top').fadeOut();
	}
});
$('#scroll-Top').on('click',function(){
		$('html, body').animate({
		scrollTop: 0
	}, 50);
	return false;
});

 $("#navbarsExampleDefault li a").click(function(){
		$('#navbarSideCollapse').trigger("click");
 })
  document.querySelector('#navbarSideCollapse').addEventListener('click', () => {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })



	
})()
