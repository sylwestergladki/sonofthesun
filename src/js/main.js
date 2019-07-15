


$(document).ready(function(){
    
    $('.main--js').hide();
    
    $('.start__button--js').on("click",function(){
    $('.main--js').show();
 
    $('html, body').animate({
        scrollTop: $('.main--js').offset().top
    },1000)
    });

    let scrollPos = $(document).scrollTop(); 
    let sectionOffset = $('.main--js').offset().top;
   
     if (scrollPos < sectionOffset) {
      $('.start--js').css('opacity', 1 - 1.9 * scrollPos / sectionOffset);
    }

});
            
            