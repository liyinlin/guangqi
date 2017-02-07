/**
 * Created by cz on 2016/10/22.
 */
$(function () {
    var swiper = new Swiper('.swiper-container', {
        initialSlide: 0,
        autoplay:1500,
        speed: 300,
        grabCursor: true,
        loop:true,
        pagination : '.swiper-pagination',
        paginationClickable: true
    });
})