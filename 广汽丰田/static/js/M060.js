$(function () {
	$('.top span:nth-child(1)').click(function () {
		$('.con1').show();
		$('.con2').hide();
	});
	$('.top span:nth-child(2)').click(function () {
		$('.con2').show();
		$('.con1').hide();
	});
});
