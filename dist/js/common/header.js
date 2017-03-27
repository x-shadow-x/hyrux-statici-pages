$(function() {

	var clientWidth = $(window).width();
	bodyHtmlEl = $('body, html');

	if (clientWidth > 768) {
		$('#moreShareToBtn').mouseenter(function() {
			$('#moreShareToList').slideDown(function() {
				$(this).css('z-index', 2);
			});
		});

		$('#moreShareToList').mouseleave(function() {
			$('#moreShareToList').css('z-index', -1);
			$('#moreShareToList').slideUp();
		});
	} else {
		$('#headerMenuBtn').click(function(e) {
			var headerMenuMobileBox = $('#headerMenuMobileBox');
			if (headerMenuMobileBox.is(':visible')) {
				headerMenuMobileBox.hide();
				$('#headerMenuBtn').find('.fa').addClass('fa-bars').removeClass('fa-times');
			} else {
				headerMenuMobileBox.show();
				$('#headerMenuBtn').find('.fa').addClass('fa-times').removeClass('fa-bars');
			}
		});
		$('#headerMenuMobileBox').click(function(e) {
			e.stopPropagation();
		});
	}

})