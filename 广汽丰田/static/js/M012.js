/**
 * Created by cz on 2016/10/23.
 */
$(function () {
    $(".main .slide_top").on("click",function () {
        $(this).stop(true,true).animate({"left":"80px"},100);
    });
    $(".main .slide_bottom").on("click",function () {
        $(this).next().stop(true,true).animate({"left":"0px"},100);
    });
    $(".button>div>a:nth-child(2)").on("click",function(){
        $(".one").hide();
        $(".two").show();
    });
    var height=[200,80,0,0,160,0,160,80,160,80,160,80];
    $(".name_list>div").click(function () {
        var i=$(this).index();
        $(".oneTC").css({"border-top":"none","display":"none"});
        if($(".tc"+i)){
            $(".tc"+i).css({"border-top":"1px solid #ededed","display":"block","height":height[i]+""});
        }
    });
    $(document).delegate(".oneTC>div>img","click",function () {
        var i=$(this).parent().parent().attr("id");
        i=i.replace("tc","");
        i=parseInt(i);
        var money=$(this).next().html();
        $(".oneTC>div>img").attr("src","../static/lib/images/radio.png");
        $(this).attr("src","../static/lib/images/radio_active.png");
        $(".name_list>div:nth-child("+(i+1)+")>span:nth-child(2)").html(money);
    });
})