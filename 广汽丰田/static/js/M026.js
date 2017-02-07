/**
 * Created by cz on 2016/10/25.
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
})