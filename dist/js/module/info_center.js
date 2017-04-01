$(function() {
	$('#faqMobile').find('.question').click(function() {
		var targetParetEl = $(this).parent();
		var targetEl = $(this).siblings('.answer_box');
		if(targetParetEl.hasClass('active')) {
			targetParetEl.removeClass('active');
			targetEl.css('height', 0);
		} else {
			$('#faqMobile').find('.answer_box').css('height', 0).parent().removeClass('active');
			targetEl.css('height', targetEl.find('.answer').outerHeight(true)).parent().addClass('active');
		}
	});
})





