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


    $('.slid-reviews').bxSlider({
        pager: false,
        adaptiveHeight: true,
        nextText:"<i class='slid-reviews-next'></i>",
        prevText:"<i class='slid-reviews-prev'></i>"
    });

});