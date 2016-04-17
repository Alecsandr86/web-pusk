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

    //  слайдер
    $('.slid-reviews').bxSlider({
        pager: false,
        adaptiveHeight: true,
        nextText:"<i class='slid-reviews-next'></i>",
        prevText:"<i class='slid-reviews-prev'></i>"
    });
    //  \слайдер\

    // TimelineLite instance
    var tl = new TimelineLite();
    
    $("body").on("click",function () {
        tl.to($('.lb-l'), 1 ,{width:"100%",opacity:'1'})
            .to($('.lb-l'), 0 ,{opacity:'0'})
              .to($('.box-wr-nav ,.wrap-descr-box'),1, {top:'0'})
                .to($(".nav-box"),0,{overflow:"visible"})
        
    });
    

});