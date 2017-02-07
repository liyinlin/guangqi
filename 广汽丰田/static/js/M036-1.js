/**
 * Created by cz on 2016/10/27.
 */
$(function () {
    for(var i=0;i<$(".sp_list>div>div>p:nth-child(2)").size();i++){
        var p_text=$(".sp_list>div:nth-child("+(i+1)+")>div>p:nth-child(2)").html();
        var text="";
        if(p_text.length>18){
            for(var j=0;j<=18;j++){
                text+=p_text[j];
            }
            $(".desc>p").html(text+"...");
        }else{
            $(".desc>p").html(p_text);
        }
    }
    var data=$(".sp_list").html();
    $(window).on("scroll",function () {
        if (getScrollTop() + getClientHeight() == getScrollHeight()) {
            $(".morea").show();
            $(".sp_list").append($(data));//数据加载
            for(var i=0;i<$(".sp_list>div>div>p:nth-child(2)").size();i++){
                var p_text=$(".sp_list>div:nth-child("+(i+1)+")>div>p:nth-child(2)").html();
                var text="";
                if(p_text.length>18){
                    for(var j=0;j<=18;j++){
                        text+=p_text[j];
                    }
                    $(".desc>p").html(text+"...");
                }else{
                    $(".desc>p").html(p_text);
                }
            }
            $(".morea").hide();
        }
    });
})