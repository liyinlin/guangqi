$(function () {
	$('.quxiao').click(function() {
		$('.mengban').show();
		$('.click').show();
	});
	$('.cancel').click(function () {
		$('.click').hide();
		$('.mengban').hide();
	});
});
