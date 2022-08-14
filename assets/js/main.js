$(document).ready(function(){
    $('.banner-area').slick({
        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
        Infinity: true,
        loop: true,
        autoplay: true,
        responsive: [
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                infinite: true,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
    $('.testimonials').slick({
        arrows: false,
        Infinity: true,
        loop: true,
        autoplay: true,
        slidesToShow: 2,
        dots: true,
        responsive: [
          ,{
    
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            dots: false
          }
    
        },{
    
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            dots: false
          }
        }]
    });
    $('#nav').slicknav();
});