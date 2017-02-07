/**
 * Created by cz on 2016/11/1.
 */
$(function () {
    function getSmallContent(content,num) {
        var text="";
        if(content.length > num){
            for(var i=0;i< num;i++){
                text+=content[i];
            }
            text+="...";
        }else{
            text=content;
        }
        return text;
    }
    for(var i=0;i<$(".list>div").size();i++){
        $(".list>div:nth-child("+(i+1)+")>div>p").html(getSmallContent($(".list>div:nth-child("+(i+1)+")>div>p").html(),30));
    }
    var data=$(".list").html();
    $(window).on("scroll",function () {
        if (getScrollTop() + getClientHeight() == getScrollHeight()) {
            $(".morea").show();
            $(".list").append($(data));//数据加载
            $(".morea").hide();
        }
    });
})