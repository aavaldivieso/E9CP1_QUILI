$(function(){

	$('.social__like').click(function(evento){
		evento.preventDefault();
		$(this).toggleClass('social__like--clicked')
	})
	$('.social__link').click(function(evento){
		evento.preventDefault();
		alert('Esta es una imagen e ne')
	})
	
})