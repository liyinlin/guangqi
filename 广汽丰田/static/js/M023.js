/**
 * Created by cz on 2016/12/6.
 */
$(function () {
    $(".radio").click(function () {
        $(".radio").attr("src","../static/lib/images/radio.png");
        $(this).attr("src","../static/lib/images/radio_active.png");
    });
})