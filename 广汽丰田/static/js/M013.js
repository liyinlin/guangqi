/**
 * Created by cz on 2016/10/28.
 */
$(function () {
    var target = document.getElementById("sf_area");
    //divs.createEvent("TouchEvent")//固定写法。先创建触摸事件
    target.addEventListener("touchstart",touchStartFunc1,false);
    target.addEventListener("touchmove",touchStartFunc2,false);
    target.addEventListener("touchend",touchStartFunc3,false);

    //	需要写三个对应的函数

    function touchStartFunc1(event){
        var touch = event.changedTouches[0];
        x = Number(touch.pageX);
        y =  Number(touch.pageY);
        startX = x;
        startY = y;
    }
    var a=27;
    function touchStartFunc2(event){
        var touch = event.changedTouches[0];
        x1 = Number(touch.pageX);
        y1=  Number(touch.pageY);

        if(x1-x<0){
            a =	Math.floor((x-x1)/10);
        }else{
            a =	Math.floor((x-x1)/10);
        }
        var left=$(".sf_area>img:nth-child(2)").position().left;
        left-=a;
        if(left<=27){
            left=27;
        }else if(left>314){
            left=314;
        }
        $(".sf_area>img:nth-child(2)").css("left",left+"px");
    }

    function touchStartFunc3(event){

    };
    $(".check>span").click(function () {
        $(".check>span").removeClass("active");
        $(this).addClass("active");
    });
})