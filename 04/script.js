$(function(){


	$('.add_name').click(function(event){

		var bariavle = prompt('Por favor agrega un nombre a la lista', 'Harry Potter')
		$('.names').append('<li><span>' + bariavle + '</span> <a href="#" class="remove_name">Borrar</a></li>')
	})


	$('body').on('click', '.remove_name', function(evento){
		evento.preventDefault();
		$(this).parent().remove();
		
	})

})

//var lista = 0;

//$(function(){


	//$('.add_name').click(function(event){
		//lista = lista+1;

		//var bariavle = prompt('Por favor agrega un nombre a la lista', 'Harry Potter ')
		//$('.names').append('<li><span>' + bariavle + '(' + lista + ')</span> <a href="#" class="remove_name">Borrar</a></li>')
	//})


	//$('body').on('click', '.remove_name', function(evento){
		//evento.preventDefault();
		//$(this).parent().remove();
		//alert('me estoy eliminando');
		
	//})

//})
