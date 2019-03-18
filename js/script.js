$(document).ready(function(){

    $("i.icon ").click(function(){
        $("header .head-nav nav ul li").slideToggle()
    })

    $(window).scroll(function() {
        var window = $(this).scrollTop()
        if ( window > 100) {
            $('.scrollTop').fadeIn()
        } else {
            $('.scrollTop').fadeOut()
        }
    });

    $('.scrollTop').click(function(){
        $('body,html').animate({
            scrollTop : 0
        },500);
    });
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})