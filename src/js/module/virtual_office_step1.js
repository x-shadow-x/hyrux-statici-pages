$(function() {
	$('#reportrange span').html(moment().subtract('days', 1).startOf('day').format('YYYY-MM-DD') + ' 至 ' + moment().subtract('days', 1).endOf('day').format('YYYY-MM-DD'));
	$('#reportrange').daterangepicker({
		className: 'reportrange1', // 增加一个属性用以在生成日历的时候加以区分
		startDate: moment().subtract('days', 1).startOf('day'),
		endDate: moment().subtract('days', 1).endOf('day'),
		showDropdowns: true,
		showWeekNumbers: false, //是否显示第几周 
		timePickerIncrement: 60, //时间的增量，单位为分钟  
		timePicker12Hour: false, //是否使用12小时制来显示时间
		ranges: {
			'昨日': [moment().subtract('days', 1).startOf('day'), moment().subtract('days', 1).endOf('day')],
			'今日': [moment().startOf('day'), moment().endOf('day')],
			'上周': [moment().startOf('week').subtract('days', 7).startOf('day'), moment().endOf('week').subtract('days', 7).endOf('day')],
			'本周': [moment().startOf('week').startOf('day'), moment().endOf('week').endOf('day')],
			'上月': [moment().startOf('month').subtract('months', 1).startOf('day'), moment().startOf('month').subtract('months', 1).startOf('day').endOf('month').endOf('day')],
			'本月': [moment().startOf('month').startOf('day'), moment().endOf('month').endOf('day')],
			'最近7日': [moment().subtract('days', 6), moment()],
			'最近15日': [moment().subtract('days', 14), moment()],
			'最近30日': [moment().subtract('days', 29), moment()],
			'最近60日': [moment().subtract('days', 59), moment()],
			'最近90日': [moment().subtract('days', 89), moment()]
		},
		opens: 'left', //日期选择框的弹出位置 
		buttonClasses: ['btn btn-default'],
		applyClass: 'btn-small btn-primary blue',
		cancelClass: 'btn-small',
		format: 'YYYY-MM-DD', //控件中from和to 显示的日期格式
		separator: ' to ',
		locale: {
			applyLabel: '确定',
			cancelLabel: '取消',
			fromLabel: '起始时间',
			toLabel: '结束时间',
			customRangeLabel: '自定义',
			daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
			monthNames: ['一月', '二月', '三月', '四月', '五月', '六月',
				'七月', '八月', '九月', '十月', '十一月', '十二月'
			],
			firstDay: 1
		}
	}, function(start, end, label) { //格式化日期显示框 
		if (end - start <= 86399999) {
			$('#reportrange span').html(start.format('YYYY-MM-DD') + ' 至 ' + end.format('YYYY-MM-DD'));
		} else {
			$('#reportrange span').html(start.format('YYYY-MM-DD') + ' 至 ' + end.format('YYYY-MM-DD'));
		}
		var start_time1 = start.format('YYYY-MM-DD');
		var end_time1 = end.format('YYYY-MM-DD');
		$('#start_time1').val(start_time1);
		$('#end_time1').val(end_time1);
	});
})