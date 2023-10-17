let menuBtn = document.querySelector('.icon-menu');
let menu = document.querySelector('.menu__body');

/*  Отслеживаеи кнопку */

menuBtn.addEventListener('click', function(){
    /* добавляем класс к кнопке*/
    menuBtn.classList.toggle('menu-open');
    /* добавляем класс к меню чтобы отобразить скрыть*/
    menu.classList.toggle('menu-open');
});

$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        responsive: [
            {
              breakpoint: 602,
              settings: {
                arrows: false,
              }
            }
        ]
    });
    $('.projects__slider').slick({
            autoplay: true,
            dots: true,
            // infinite: true,
            speed: 300,
            slidesToShow: 1,
            vertical: true,
            verticalSwiping: true,
            arrows: false,
        });
        $('.people__slider').slick({
          autoplay: true,
          
          speed: 300,
          slidesToShow: 1,
          arrows: true,
      });
      $('.rewievs__slider').slick({
        autoplay: true,
        
        speed: 300,
        slidesToShow: 1,
        arrows: true,
    });
    
});
