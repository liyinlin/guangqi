/**
 * Created by cz on 2016/10/26.
 */
$(function(){
    $(".dianji1").click(function () {
        if($(this).find("img").attr("src")=="../static/lib/images/radio.png"){
            $(this).find("img").attr("src","../static/lib/images/radio_active.png");
        }else{
            $(this).find("img").attr("src","../static/lib/images/radio.png");
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