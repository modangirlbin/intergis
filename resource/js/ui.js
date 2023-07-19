
var itergis = {

	init : function() {

		itergis.slickSlide();
		itergis.tab();
		itergis.calender();
	},   

	slickSlide : function() {

		$('.gnb ul').slick({
			slidesToShow:7,
			slidesToScroll:1,
			arrows:true,
			speed:300
		});

		$('.slide').slick({
			infinite:true,
			autoplay:true,
			arrows:false,
			dots:true,
			speed:800
		});

		var length = $('.slide .slick-dots li').length;

		$('.slide .total').text(length);
		$('.slide').on('afterChange', function(event, slick, currentSlide){
	        var text = currentSlide + 1;
	        $('.list_pagenation .crnt').text(text);
	    });

		// $('.sec_service ul').slick({
		// 	infinite:true,
		// 	slidesToShow:4,
		// 	slidesToScroll:4,
		// 	arrows:true,
		// 	speed:800
		// });
			
		$('.partners ul').slick({
			infinite:false,
			slidesToShow:6,
			slidesToScroll:1,
			arrows:true,
			speed:300,
			variableWidth: true
		});	
	},

	tab : function(){

		var $tab = $('.sec_board'),
			$tab_nav = $tab.find('.btn_tab'),
			$tab_panel = $tab.find('.tab_panel');

		$tab_nav.on('click', function(){
			console.log('hi')
			var	$this = $(this),
				idx = $(this).index();

			$tab_nav.removeClass('on').attr('aria-selected', 'false');
			$this.addClass('on').attr('aria-selected', 'true');
			
			$tab_panel.removeClass('on');
			$tab_panel.eq(idx).addClass('on');
		});
	},

	calender : function(){

		var $area_calendar = $('.box_date'),
			$cont_ym = $area_calendar.find('.txt_month'),
			$cont_day = $area_calendar.find('.txt_date');

		var objDate = new Date();

		var year = objDate.getFullYear(),
			month = objDate.getMonth(),
			date = objDate.getDate();

		month = month + 1;

		$cont_ym.text(year + '.' + getZero(2,month));
		$cont_day.text(getZero(2,date));
	}
}

$(function(){
	itergis.init();	
});

function getZero(nCount, value){
	
	var nCurrentZeroCount = String(value).length,
		strCurrentZero = "",
		result = null;
	
	for(var m = nCurrentZeroCount; m < nCount; m++)
		strCurrentZero += "0";

	result = strCurrentZero + value;
	return result;
}