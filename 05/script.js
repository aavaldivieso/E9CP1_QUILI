$(function(){

	$('.social__like').click(function(evento){
		evento.preventDefault();
		$(this).toggleClass('social__like--clicked')
	})
	$('.social__link').click(function(evento){
		evento.preventDefault();
		alert($(this).parents('a').children('img').attr('alt'));
	})
	
})