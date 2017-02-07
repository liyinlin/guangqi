/**
 * Created by cz on 2016/12/6.
 */
$(function () {
    $(".radio").click(function () {
        if($(this).attr("src")=="../static/lib/images/radio_active.png"){
            $(this).attr("src","../static/lib/images/radio.png");
        }else{
            $(this).attr("src","../static/lib/images/radio_active.png");
        }
    });
    $(".OrderNum>table tr td:nth-child(2)").click(function () {
        var i=parseInt($(this).next().html());
        if(i>0){
            i--;
        }else{
            i=0;
        }
        $(this).next().html(i);
    });
    $(".OrderNum>table tr td:nth-child(4)").click(function () {
        var i=parseInt($(this).prev().html());
        if(i<=99){
            i++;
        }else{
            i=99;
        }
        $(this).prev().html(i);
    });
})