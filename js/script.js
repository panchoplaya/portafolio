$(document).ready(function(){
    $('a[href^="#"]').on('click', function(event) {

        var target = $(this.hash);
    
        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top -40
            }, 1000);
        }
    
    });
    $('.parallax-window').parallax({imageSrc: 'C:/Users/usuario/Documents/portafolio/img/bg-parallax.jpg'});
}) 