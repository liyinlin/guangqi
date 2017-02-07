/**
 * Created by cz on 2016/12/9.
 */
$(function () {
    $("#M021 .main .trans .span-s4 img").click(function () {
        if($(this).attr("src")=="../static/lib/images/dz_hui.png"){
            $(this).attr("src","../static/lib/images/dz_hong.png");
        }else{
            $(this).attr("src","../static/lib/images/dz_hui.png");
        }
    });
})