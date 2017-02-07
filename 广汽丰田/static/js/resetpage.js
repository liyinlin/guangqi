/**
 * Created by cz on 2016/10/25.
 */
$(document).ready(function(){
    var html=document.getElementsByTagName("html")[0];
    var width=document.documentElement.clientWidth;
    var scale = width*100/640;
    html.style.fontSize=scale + "px";
    $("body").css({display:"block"});

});
$(window).resize(function(){
    var html=document.getElementsByTagName("html")[0];
    var width=document.documentElement.clientWidth;
    var scale = width*100/640;
    html.style.fontSize=scale + "px";
    $("body").css({display:"block"});
});