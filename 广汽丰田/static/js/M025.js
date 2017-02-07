/**
 * Created by cz on 2016/10/25.
 */
$(function () {
    $(".main .requester_list>div>a").on("click",function () {
        $(".tips").show();
    });
    $(".tips>img,.button_tips>input:nth-child(1)").on("click",function () {
        $(".tips").hide();
    })
})