$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        margin:15,
        items: 3,
        loop: true,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:1
            },
            1000:{
                items:2
            },
            1200:{
                items:3
            },
            1900:{
                items:3
            }
        }
    });
    
     new WOW().init();

});