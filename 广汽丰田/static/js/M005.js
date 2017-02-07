/**
 * Created by cz on 2016/10/21.
 */
$(function () {
    $("#M005 .button>div:nth-child(2)").on("click",function () {
        $("#M005 .pay_list").stop(true,true).animate({"bottom":"0px"},200);
    });
    $("#M005 .pay_list>img").on("click",function () {
        $("#M005 .pay_list").stop(true,true).animate({"bottom":"-381px"},200);
    });
})