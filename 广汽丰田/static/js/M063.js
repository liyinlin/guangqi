$(function(){
	/*$('.main .con .action .act1').click(function(){
		$('.main .con .action .act1').removeClass('this').html('');
		$(this).addClass('this').html('✓');
	});*/
/*	$('.main .con .action .edit').click(function(){
		$('.main .con .address').css('border','1px solid transparent').attr('contenteditable','false');
		$(this).parents('.con').children('.address').css('border','1px solid #F1F0EE').attr('contenteditable','true');
	});*/
	$('.main .con .action .del').click(function(){
		$(this).parents('.con').remove();
	});
	$(".radio").click(function () {
		var all_radio=$(this).parent().parent().parent().find(".radio");
		all_radio.attr("src","../static/lib/images/radio.png");
		$(this).attr("src","../static/lib/images/radio_active.png");
	})
})
