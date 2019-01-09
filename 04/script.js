$(function(){
	$('.add_name').click(function(event){
		var bariavle = prompt('Por favor agrega un nombre a la lista', 'Harry Potter')
		$('.names').append('<li><span>' + bariavle + '</span> <a href="#" class="remove.name">Borrar</a></li>')
	})
	$('.remove_name').click(function(evento) {
		evento.preventDefault();
	})
})