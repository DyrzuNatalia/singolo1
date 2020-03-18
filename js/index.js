


$(document).ready(function () {
  $('.slider_carusel').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    prevArrow: '<div class="prev"><i class="fas fa-angle-left"></div>',
    nextArrow: '<div class="next"><i class="fas fa-angle-right"></div>',
     
    responsive: [
      {
        breakpoint: 768,
        settings: {
          adaptiveHeight: true,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          adaptiveHeight: true,
          dots: true,
          dotsClass: 'slick-dots slider__dots',
          arrows: false,
        }
      }
    ]


  });

  $('.js-example-basic-single').select2();

  $(window).scroll(function(){

         if ($(this).scrollTop() > 100) {
         $('.up').fadeIn();
      } else {
         $('.up').fadeOut();
      }
    });
      $('.up').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });

  $(".work__filter").click(function () {
    let value = $(this).attr("data-filter");
    let elem = $(".portfolio__item");
    if (value == "all") {
      $(elem).show("500");
    }
    else {
      $(elem).not("." + value).hide("500");
      $(elem).filter("." + value).show("500");
    }
  });


  $('.menu').on('click', function () {

    $('.nav-bar__list').slideToggle(300, function () {

      if ($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }
      if ($(this).is(':hidden')) {
        $('.menu').html('<i class="fas fa-bars"></i>');
      } else {
        $('.menu').html('<i class="far fa-times-circle"></i>');
      };
      $(".submenu").hide();
      return false;
    });

  });

  $(".nav-bar__item a").click(function () {

    $('.menu').html('<i class="fas fa-bars"></i>');

    $('.nav-bar__list').slideToggle(300);

  });



  $(".up").click(function () {
    $("body,html").animate({
      scrollTop: 0
    }, 200);
    return false;
  })


  $(".nav-bar__item--submenu").click(function () {
    $(".submenu").slideToggle(300);
    return false;
  })

});
