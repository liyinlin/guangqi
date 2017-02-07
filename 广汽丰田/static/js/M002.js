/**
 * Created by cz on 2016/10/21.
 */
$(function () {
    var galleryTop = new Swiper('.swiper_top', {
        initialSlide: 0,
        autoplay:1500,
        speed: 300,
        grabCursor: true,
        loop:true,
        pagination : '.swiper-pagination',
        paginationClickable: true
    });
    var galleryThumbs = new Swiper('.swiper-thumbs', {
        initialSlide: 0,
        loop:true,
        effect : 'fade',
        fade: {
            crossFade: true,
        },
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;
    var area1 = new LArea();
    area1.init({
        'trigger': '#demo1', //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
        'valueTo': '#demo1>span', //选择完毕后id属性输出到该位置
        'valueTo2':'#demo1s>span',
        'index':0,
        'keys': {
            id: 'id',
            name: 'name'
        }, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
        'type': 1, //数据源类型
        'data': LAreaData //数据源
    });
    var area2 = new LArea();
    area2.init({
        'trigger': '#demo1s', //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
        'valueTo': '#demo1s>span', //选择完毕后id属性输出到该位置
        'index':1,
        'keys': {
            id: 'id',
            name: 'name'
        }, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
        'type': 1, //数据源类型
        'data': LAreaData //数据源
    });
    $(".main .slide_top").on("click",function () {
        $(this).stop(true,true).animate({"left":"40px"},100);
    });
    $(".main .slide_bottom").on("click",function () {
        $(this).next().stop(true,true).animate({"left":"0px"},100);
    });
    $(".button>a:nth-child(2)").on("click",function(){
        $(".one").hide();
        $(".two").show();
    });
})