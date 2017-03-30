function init() {
	var imgsLists = new Array($('.lazing_img').length);
	
	if(imgsLists.length > 0) {
		$('.lazing_img').each(function(index, item) {
			$(item).attr('src', $(item).attr('data-src'));
			item.onload = function() {
				imgsLists.pop();
				if(imgsLists.length > 0) {
				} else {
					$('#loading').hide();
					$('#main').addClass('play');
				}
			}
		});
	} else {
		$('#loading').hide();
		$('#main').addClass('play');
	}
	
}

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

	if(clientWidth > 768 && clientWidth <= 1300) {
		$('#middleScreenMoreListBtn').click(function(e) {
			e.stopPropagation();
			var targetEl = $('#middleScreenMoreList');
			if(targetEl.is(':visible')) {
				targetEl.slideUp(100);
			} else {
				targetEl.slideDown(100);
			}
		});

		$('body').click(function() {
			$('#middleScreenMoreList').hide();
		});
	}

	init();
})