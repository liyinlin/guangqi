/**
 * Created by cz on 2016/10/24.
 */
$(function () {
    var swiper_hor = new Swiper('.slide_hor', {
        initialSlide: 0,
        autoplay:1500,
        speed: 300,
        grabCursor: true,
        loop:true,
        pagination : '.swiper-pagination',
        paginationClickable: true
    });

    var swiper_var = new Swiper('.slide_ver', {
        slidesPerView: 'auto',
        freeMode: true,
    });
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

})