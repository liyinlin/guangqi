/**
 * Created by cz on 2016/10/28.
 */
$(function () {
    $(".main .foot .button_ask").click(function () {
        alert("已成功提交申请，请等待经销商联系");
    });
    $(".sex>div").click(function () {
        $(".sex>div").find("img").attr("src","../static/lib/images/radio.png");
        $(this).find("img").attr("src","../static/lib/images/radio_active.png");
    })
})