//Так приятней :)
window.log = function(param){
    console.log(param);
};
$(document).ready(function(){

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {
    };
    //\Chrome Smooth Scroll\
    
    
    //  слайдер
    $('#slid-1').bxSlider({
        pager: false,
        adaptiveHeight: true,
        nextText:"<i class='slid-reviews-next'></i>",
        prevText:"<i class='slid-reviews-prev'></i>"
    });


    $('#slid-2').bxSlider({
        //pager: false,
        adaptiveHeight: true,
        nextText:"<i class='slid-reviews-next'></i>",
        prevText:"<i class='slid-reviews-prev'></i>"
    });


    //  \слайдер\

    // анимация главного экрана
    var tl = new TimelineLite();
    
    $('.button-menu').on('click',function () {
        tl.to($(".nav-menu"),0.7,{left:0})
       
    });
    $(".close-menu").on("click", function () {
        tl.to($(".nav-menu"),0.7,{left:'-300px'})
    });
    // \анимация главного экрана\

    //  ПЛАВНЫЙ ПЕРЕХОД ПО ЯКОРЯМ
    $('a[href^="#l"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top},1000,"swing");
        return false;
    });
    
     // /ПЛАВНЫЙ ПЕРЕХОД ПО ЯКОРЯМ/
    
     
    // навигация 
    var boxNav = $('.header-top');
    
    
    $('.dark-box')
        .waypoint(function(dir){
            if (dir === 'down') {
                boxNav.removeClass('active');
            }
            else {
                boxNav.addClass('active');
            }
        }, {
            offset: 50
        });

    $('.white-box')
        .waypoint(function(dir){
            if (dir === 'down') {
                boxNav.addClass('active');
            }
            else {
                boxNav.removeClass('active');
            }
        }, {
            offset: 50
        });

    // \навигация \
    
    // всплывающие блоки
    var w = $(window).innerWidth();
    if (w > 991) {
        
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $('.item-work ,.item-our').css({"opacity":"0"});
        $('.our-work')
            .waypoint(function (dir) {
                $('.iw-a1,.iw-a2').addClass("animated fadeInUp").css({"opacity":"1"});
            },{
                offset: '60%'
            });
        
        $('.our-work')
            .waypoint(function (dir) {
                $('.iw-a3,.iw-a4').addClass("animated fadeInUp").css({"opacity":"1"});
            },{
                offset: '-5%'
            });

        $('.our-credo')
            .waypoint(function (dir) {
                $('.io-a1,.io-a2,.io-a3').addClass("animated fadeInUp").css({"opacity":"1"});
            },{
                offset: '60%'
            });
        $('.our-credo')
            .waypoint(function (dir) {
                $('.io-a4,.io-a5,.io-a6').addClass("animated fadeInUp").css({"opacity":"1"});
            },{
                offset: '30%'
            });
        
    }

    // \всплывающие блоки\
    
    // модальное окно
    // $('#myModal').on('hidden.bs.modal', function (e) {
    //     // do something...
    // });
    //\модальное окн\
});


$(function(){
    $(window).load(function() {

        // $('.container-fluid').css({'opacity':'0'});
        // var tl = new TimelineMax();
        //     tl.to($('.animate'),3, {css:{backgroundPosition :"-5px -16699px"}, ease:SteppedEase.config(19)});
        //
        // setTimeout(function () {
        //     //$(".loader").fadeOut();
        // }, 2700); 


        var width = $(window).width();
        
            if(width > 992){
                var tl2 = new TimelineMax();
                tl2.startTime(1.5).to($('.lb-l'), 0.7 ,{width:"100%",opacity:'1'})
                    .to($('.lb-l'), 0 ,{opacity:'0'})
                    .to($('.box-wr-nav ,.wrap-descr-box'),0.7, {top:'0'})
                    .to($(".nav-box"),0,{overflow:"visible"})   
            }else{
                $('.box-wr-nav ,.wrap-descr-box').css({"top":"0"});
                $(".nav-box").css({"overflow":"visible"})
            }
        
    });
});