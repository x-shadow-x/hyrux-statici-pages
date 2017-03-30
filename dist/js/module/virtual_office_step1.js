$(function() {
	$('#reportrange span').html(moment().subtract('days', 1).startOf('day').format('YYYY-MM-DD') + ' 至 ' + moment().subtract('days', 1).endOf('day').format('YYYY-MM-DD'));
	$('#reportrange').daterangepicker({
		className: 'reportrange1', // 增加一个属性用以在生成日历的时候加以区分
		startDate: moment().subtract('days', 1).startOf('day'),
		endDate: moment().subtract('days', 1).endOf('day'),
		showDropdowns: true,
		timePickerIncrement: 60, //时间的增量，单位为分钟
		opens: 'left', //日期选择框的弹出位置 
		buttonClasses: ['btn btn-default'],
		applyClass: 'btn-small btn-primary blue',
		format: 'YYYY-MM-DD', //控件中from和to 显示的日期格式
		locale: {
			firstDay: 1
		}
	}, function(start, end, label) { //格式化日期显示框 
		if (end - start <= 86399999) {
			$('#reportrange span').html(start.format('YYYY-MM-DD') + ' 至 ' + end.format('YYYY-MM-DD'));
		} else {
			$('#reportrange span').html(start.format('YYYY-MM-DD') + ' 至 ' + end.format('YYYY-MM-DD'));
		}
	});
})