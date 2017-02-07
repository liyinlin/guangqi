/**
 * Created by cz on 2016/10/26.
 */
$(function () {
    function mainHeight() {
        var height=document.documentElement.clientHeight-$(".header").height();
        $(".main").css("height",height+"px");
    }
    mainHeight();
    $(window).on("resize",function () {
        mainHeight();
    });
    var swiper_var = new Swiper('.swiper_bottom', {
        slidesPerView: 'auto',
        freeMode: true,
    });
    $(".left_btn").on("click",function () {
        swiper_var.slidePrev();
    });
    $(".right_btn").on("click",function () {
        swiper_var.slideNext();
    });
    var swiper_right = new Swiper('.swiper_right', {
        direction : 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
    });
})