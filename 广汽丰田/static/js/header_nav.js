/**
 * Created by cz on 2016/10/21.
 */
$(function () {
    var flag=true;
    $(".header .nav").on("click",function () {
        if(flag){
            $(".respeo_info").stop(true,true).animate({"right":"0px"},200);
            flag=false;
        }else{
            $(".respeo_info").stop(true,true).animate({"right":"-640px"},200);
            flag=true;
        }
    });
    $(window).on("scroll",function () {
        $(".respeo_info").stop(true,true).animate({"right":"-640px"},200);
        flag=true;
    });
})