
 $('.subItem').click(function(e) {
 	e.preventDefault();

 	var todoBox = $('.todoBox').val();
	
	console.log(todoBox);

	$('.todoUL').append($('<li class="items" id='+todoBox+'>'+ todoBox +'</li>'))
	$('.todoBox').val('')

 $(document).on('click','li', function(){
        $(this).css('color', 'red');    
      });
  $(document).on('dblclick', 'li', function(){      
        $(this).appendTo('.todidLI').fadeIn('slow').css('color', 'black', 'text-decoration', 'line-through');  
        $(document).off('click', 'li');
        console.log(this);
      });
      

		})

 