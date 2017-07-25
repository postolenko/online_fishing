(function($){

	$(window).on("load",function(){

		$(".scroll").mCustomScrollbar();

	});

})(jQuery);

$(document).ready(function() {


	$(".promo-slider").not('.slick-initialized').slick({
		dots: false,
		arrows: false,
		speed: 800,
		fade: true,
		autoplay: true,
		autoplaySpeed: 7000
	});


	$(".good-slider-1").not('.slick-initialized').slick({
		dots: true,
		arrows: true,
		speed: 800,
		slidesToShow: 4,
		slidesToScroll: 2,
		// autoplay: true,
		appendDots: $(".goods_sl_1 .inner"),
		autoplaySpeed: 7000
		 // responsive: [
		 //    {
		 //      breakpoint: 1200,
		 //      settings: {
		 //        slidesToShow: 2,
		 //        slidesToScroll: 2
		 //      }
		 //    },
		 //    {
		 //      breakpoint: 480,
		 //      settings: {
		 //        slidesToShow: 1,
		 //        slidesToScroll: 1
		 //      }
		 //    }
		 //  ]
	});

	$(".good-slider-2").not('.slick-initialized').slick({
		dots: true,
		arrows: true,
		speed: 800,
		slidesToShow: 4,
		slidesToScroll: 2,
		// autoplay: true,
		appendDots: $(".goods_sl_2 .inner"),
		autoplaySpeed: 7000
		 // responsive: [
		 //    {
		 //      breakpoint: 1200,
		 //      settings: {
		 //        slidesToShow: 2,
		 //        slidesToScroll: 2
		 //      }
		 //    },
		 //    {
		 //      breakpoint: 480,
		 //      settings: {
		 //        slidesToShow: 1,
		 //        slidesToScroll: 1
		 //      }
		 //    }
		 //  ]
	});

	$(".brands-slider").not('.slick-initialized').slick({
		dots: false,
		arrows: true,
		speed: 800,
		slidesToShow: 7,
		slidesToScroll: 2,
		// autoplay: true,
		autoplaySpeed: 7000
		 // responsive: [
		 //    {
		 //      breakpoint: 1200,
		 //      settings: {
		 //        slidesToShow: 2,
		 //        slidesToScroll: 2
		 //      }
		 //    },
		 //    {
		 //      breakpoint: 480,
		 //      settings: {
		 //        slidesToShow: 1,
		 //        slidesToScroll: 1
		 //      }
		 //    }
		 //  ]
	});


	$(".slide-arrow").click(function() {
		
		var paginationContainer = $(this).closest(".goods-sl-pagination");

		var slName = paginationContainer.attr("data-slider-name");

		if( $(this).hasClass("prev-slide") ) {

			$("[ data-slider-name = '"+ slName +"'] .slick-prev.slick-arrow").click();

		} else if( $(this).hasClass("next-slide") ) {

			$("[ data-slider-name = '"+ slName +"'] .slick-next.slick-arrow").click();

		}

	});


	$("select").select2();

});