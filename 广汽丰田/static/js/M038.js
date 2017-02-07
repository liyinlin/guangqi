$(function () {
	$('.quxiao').click(function() {
		$('.mengban').show();
		$('.click').show();
	});
	$('.cancel').click(function () {
		$('.click').hide();
		$('.mengban').hide();
	});
	$('.fahuo').click(function () {
		alert("已提醒卖家发货！");
	});
	$('.confirm').click(function() {
		$('.mengban').show();
		$('.click2').show();
	});
	$('.cancel').click(function () {
		$('.click2').hide();
		$('.mengban').hide();
	});
});
