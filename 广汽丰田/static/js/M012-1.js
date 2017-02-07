/**
 * Created by cz on 2016/10/28.
 */
$(function () {
    $(".btn_submit").click(function () {
        alert("你已提交成功");
    });
    $(".ss>a").click(function () {
        $(".ss>a").css({"border":"1px solid #d2d2d2","color":"#333","background":"#fff"});
        $(this).css({"border":"1px solid #d7000f","color":"#fff","background":"#d7000f"});
    });
    $(".aa>li>a").click(function () {
        $(".aa>li").css({"border":"1px solid #d2d2d2","background":"#fff"});
        $(".aa>li>a").css({"color":"#333"});
        $(this).parent().css({"border":"1px solid #d7000f","background":"#d7000f"});
        $(this).css({"color":"#fff"});
    });
});