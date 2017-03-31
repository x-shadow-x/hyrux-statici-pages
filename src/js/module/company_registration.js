$(function() {
	if($(window).width() > 768) {
		$('.service_box').click(function() {
			$(this).addClass('active').siblings().removeClass('active');
		});
	} else {
		$('#serviceDetailBox').find('.service_title').click(function() {
			var serviceDetailBoxEl = $(this).siblings('.services_detail_box');
			if(serviceDetailBoxEl.height() == 0) {
				$('.services_detail_box').css('height', 0).parent().removeClass('show');
				serviceDetailBoxEl.css('height', serviceDetailBoxEl.find('.service_items').outerHeight(true)).parent().addClass('show');
			} else {
				serviceDetailBoxEl.css('height', 0).parent().removeClass('show');
			}
			
		});

		$('#serviceDetailBox').find('.apply_btn').click(function() {
			var serviceBoxEl = $(this).parents('.service_box');
			if(serviceBoxEl.hasClass('active')) {
				return true;
			} else {
				$('#serviceDetailBox').find('.service_box').removeClass('active');
				serviceBoxEl.addClass('active');
			}

		});
	}
})