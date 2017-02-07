$(function () {
	$('#btn').click(function () {
		alert("你已发表成功");
	});
	$('.o_img').click(function () {
		if ($(this).attr('src')=='../static/images/M044/M044_star.png') {
			$(this).attr('src','../static/images/M044/M044_star_s.png');
		}else{
			$(this).attr('src','../static/images/M044/M044_star.png');
		}
	});
});

