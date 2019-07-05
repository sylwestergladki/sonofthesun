

import moment from 'moment';
import { setInterval } from 'timers';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

const $doc = $(document)
const $main = $("#navbar")
const $header = $('.start--js')
const $mainbio = $('.mainbio--js')


$(document).ready(function(){
$('#navbar').hide();
$('#start').on("click",function(){

$('#navbar').show();
   
    $('html, body').animate({
        scrollTop: $("#navbar").offset().top
    },1000)
    
   
});
});

$doc.on('scroll', function () {
    var scrollPos = $doc.scrollTop(); //jak daleko przewineliśmy
    var sectionOffset = $main.offset().top; //gdzie jest dany element, na jakiej wysokoscio od początku strony się zaczyna.
    //console.log(scrollPos);
    //console.log(sectionOffset);

    if (scrollPos < sectionOffset) {
      $header.css('opacity', 1 - 1.9 * scrollPos / sectionOffset);
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


        
            
            
            
            
            