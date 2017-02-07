/**
 * Created by cz on 2016/10/27.
 */
$(function () {
    var swiper_right = new Swiper('.list_carInfo', {
        direction : 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
    });
    $(".main .order>img").click(function () {
        $(".order").hide();
    });
    $(".sex>div").click(function () {
        $(".sex>div").find("img").attr("src","../static/lib/images/radio.png");
        $(this).find("img").attr("src","../static/lib/images/radio_active.png");
    })
})