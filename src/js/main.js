


$(document).ready(function(){
$('.navbar--js').hide();
$('.start__button--js').on("click",function(){

$('.navbar--js').show();
   
    $('html, body').animate({
        scrollTop: $('.navbar--js').offset().top
    },1000)
    
   
});
});

$(document).on('scroll', function () {
    let scrollPos = $(document).scrollTop(); 
    let sectionOffset = $('.navbar--js').offset().top;
   
     if (scrollPos < sectionOffset) {
      $('.start--js').css('opacity', 1 - 1.9 * scrollPos / sectionOffset);
    }
  });

  $(document).ready(function(){
    $('.mainbio--js').hide();
    $('.navbar__a--js1').on("click",function(){
    
    $('.mainbio--js').show();
       
        $('html, body').animate({
            scrollTop: $(".mainbio--js").offset().top
        },1000)
        
       
    });
    });

    $(document).ready(function(){
        $('.mainexp--js').hide();
        $('.navbar__a--js2').on("click",function(){
        
        $('.mainexp--js').show();
           
            $('html, body').animate({
                scrollTop: $(".mainexp--js").offset().top
            },1000)
            
           
        });
        });
    
        $(document).ready(function(){
            $('.contact--js').hide();
            $('.navbar__a--js3').on("click",function(){
            
            $('.contact--js').show();
               
                $('html, body').animate({
                    scrollTop: $(".contact--js").offset().top
                },1000)
                
               
            });
            });









        

            $(document).ready(function(){
                
                $('.scroll').on("click",function(){
                
               
                   
                    $('html, body').animate({
                        scrollTop: $(".navbar--js").offset().top
                    },1000)
                    
                   
                });
                });
            
            