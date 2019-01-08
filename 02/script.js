$(function(){
	$('article').eq(2).find('a').eq(3).html('Pinterest').attr('href', 'https://pinterest.com')
	$('a[href="#"]').click(function(evento) {
		evento.preventDefault();
	})
	$('.header__main > h2').css('font-size', '4em')
})

