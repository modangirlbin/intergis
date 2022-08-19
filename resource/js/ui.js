
var itergis = {

	init : function() {

		itergis.slickSlide();
		itergis.tab();
		itergis.calender();
	},   

	slickSlide : function() {

		$('.nav_quick ul').slick({
			slidesToShow:7,
			slidesToScroll:1,
			arrows:true,
			speed:300
		});

		$('.main_slide').slick({
			infinite:true,
			autoplay:true,
			arrows:false,
			dots:true,
			speed:800
		});

		var length = $('.main_slide .slick-dots li').length;

		$('.main_slide .total').text(length);
		$('.main_slide').on('afterChange', function(event, slick, currentSlide){
	        var text = currentSlide + 1;
	        $('.page_state .crnt').text(text);
	    });

		$('.shortcut ul').slick({
			infinite:true,
			slidesToShow:4,
			slidesToScroll:4,
			arrows:true,
			speed:800
		});
			
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

		var $tab = $('.tab_area'),
			$tab_nav = $tab.find('.tab_list li'),
			$tab_cont = $tab.find('.tab_cont');

		$tab_nav.on('click', function(){

			var	$this = $(this),
				idx = $(this).index();

			$tab_nav.removeClass('on');
			$this.addClass('on');
			
			$tab_cont.removeClass('on');
			$tab_cont.eq(idx).addClass('on');
		});
	},

	calender : function(){

		var $calendar = $('.calendar'),
			$cont_ym = $calendar.find('span'),
			$cont_day = $calendar.find('strong');

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