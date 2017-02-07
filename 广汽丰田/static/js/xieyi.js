/**
 * Created by cz on 2016/12/8.
 */
$(function () {
    $(".main .checkbox>div").click(function () {
        if($(this).html()==""){
            $(this).html("✔");
        }else{
            $(this).html("")
        }
    })
})