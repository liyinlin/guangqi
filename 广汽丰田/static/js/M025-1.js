/**
 * Created by cz on 2016/12/7.
 */
$(function () {
    var area1 = new LArea();
    area1.init({
        'trigger': '#demo1', //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
        'valueTo': '#demo1>span', //选择完毕后id属性输出到该位置
        'index':0,
        'keys': {
            id: 'id',
            name: 'name'
        }, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
        'type': 1, //数据源类型
        'data': LAreaData //数据源
    });
    var data=$(".list_carInfo").html();
    $(window).on("scroll",function () {
        if (getScrollTop() + getClientHeight() == getScrollHeight()) {
            $(".morea").show();
            $(".list_carInfo").append($(data));//数据加载
            $(".morea").hide();
        }
    });
})