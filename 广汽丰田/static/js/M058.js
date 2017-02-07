/**
 * Created by cz on 2016/11/22.
 */
$(function () {
    var swiper = new Swiper('.wrapper', {
        initialSlide: 0,
        grabCursor: true,
    });
    $(".jt-left").click(function () {
        swiper.slidePrev();
    })
    $(".jt-right").click(function () {
        swiper.slideNext();
    });
})