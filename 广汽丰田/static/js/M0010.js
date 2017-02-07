/**
 * Created by cz on 2016/10/22.
 */
$(function () {
    $("#M0010 .type").on("click",function () {
        var $this_val=$(this).children(".type_content").html();
        if($this_val=="抢优惠"){
            alert("你已成功领取");
        }else if($this_val=="领取"){
            alert("你已成功领取此优惠卷");
        }
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