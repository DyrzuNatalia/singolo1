


$(document).ready(function(){
    $('.slider_carusel').slick({
        dots:false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<div class="prev"><i class="fas fa-angle-left"></div>',
nextArrow: '<div class="next"><i class="fas fa-angle-right"></div>',

responsive: [
  {
    breakpoint: 768,
    settings: {
      adaptiveHeight: true,
      dots:true,
      arrows: false,
    }
  },
  {
    breakpoint: 480,
    settings: {
      adaptiveHeight: true,
      dots:true,
      arrows: false,
    }
  }
]


});

      $(".work__filter").click(function(){
        let value = $(this).attr("data-filter");
        let elem = $(".portfolio__item");
        if(value == "all"){
          $(elem).show("500");
        }
        else{
          $(elem).not("."+value).hide("500");
          $(elem).filter("."+value).show("500");
        }
      });


      
  
      $('.menu').on('click', function(){
		
        $('.nav-bar__list').slideToggle(300, function(){
          
          if($(this).css('display') === 'none'){
            $(this).removeAttr('style');
        }
        
      });
      
     });

     $(".up").click(function() {
      $("body,html").animate({
        scrollTop: 0
      }, 200);
      return false;
    })
  

});
