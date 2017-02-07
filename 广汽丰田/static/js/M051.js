$(function(){
	var meng = $('#M051 .meng');
	$('#M051 .con .cancel').click(function(){
		meng.css('display','block');
	});
	$('#M051 .meng span').click(function(){
		meng.css('display','none');
	});
});