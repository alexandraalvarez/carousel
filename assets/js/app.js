$(document).ready(function() { 
    var speed = 6000; //velocidad de cambio
    var run = setInterval('rotate()', speed); //rotación 
    
    var item_width = $('#slides li').outerWidth(); //entrega el ancho del elemento li de los slides
    var left_value = item_width * (-1); 
        
    $('#slides li:first').before($('#slides li:last'));//colocar el último elemento antes del primero, solo en caso de que se haga click en la flecha izquierda
    
    $('#slides ul').css({'left' : left_value}); //margen izquierdo, con CSS llamo a la propiedad left  y le asigno left value

    $('#prev').click(function() {//para cuando el usuario haga click en el botón izquierdo          
        var left_indent = parseInt($('#slides ul').css('left')) + item_width;//para posicionar el elemento
                
        $('#slides ul:not(:animated)').animate({'left' : left_indent}, 200,function(){ //para desplazar el elemento      
            $('#slides li:first').before($('#slides li:last'));//colocar el último elemento antes del primero           
            $('#slides ul').css({'left' : left_value});//margen izquierdo
        });       
        return false; //cancelar    
    });

    $('#next').click(function() {//para cuando el usuario haga click en el botón derecho 
        var left_indent = parseInt($('#slides ul').css('left')) - item_width;//margen

        $('#slides ul:not(:animated)').animate({'left' : left_indent}, 200, function () {//desplazar el elemento
            $('#slides li:last').after($('#slides li:first'));  ///colocar el último elemento antes del primero               
            $('#slides ul').css({'left' : left_value}); //margen izquierdo
        });      
     });
                 
         return false;//cancelar 
    });        
    
    $('#slides').hover(//si el mouse está encima, pausa la rotación, y si no, rota
        
        function() {//pausa la rotación
            clearInterval(run);
        }, 
        function() {//rota
            run = setInterval('rotate()', speed);   
        }
    );      

function rotate() { //para volver a rotar
    $('#next').click();
}
        