/**
 * Created by cz on 2016/10/24.
 */
$(function () {
    var swiper_var = new Swiper('.slide_ver', {
        slidesPerView: 'auto',
        freeMode: true,
    });
    $(".pos").on("click",function () {
        var ele_parent=$(this).parent().parent().index();
        $(".tips").show();
    });
    $(".tips>div:nth-child(2)>a").click("click",function () {
        $(".tips").hide();
    });
    $(".main .store_infos>img").click("click",function () {
        $(".big_pic").show();
        $(".bd_img>img:nth-child(2)").attr("src","");
        var $this_src=$(this).attr("src");
        $(".bd_img>img:nth-child(2)").attr("src",$this_src);
    });
    $(".bd_img>img:nth-child(1)").on("click",function () {
        $(".big_pic").hide();
        $(".bd_img>img:nth-child(2)").attr("src","");
    });
    $("#M024 .main .button>a").click(function () {
        console.log(1);
        $(".button_menu>div").hide();
        $(".button_menu>div:nth-child("+($(this).index()+1)+")").show();
    });
    $(document).delegate(".button_menu>div>a","click",function(){
        var content=$(this).html();
        var i=$(this).parent().index();
        $("#M024 .main .button>a:nth-child("+(i+1)+")>span").html(content);
        $(".button_menu>div").hide();
    })
    var data=$(".store_lists").html();
    $(window).on("scroll",function () {
        if (getScrollTop() + getClientHeight() == getScrollHeight()) {
            $(".morea").show();
            $(".store_lists").append($(data));//数据加载
            $(".morea").hide();
        }
    });
})