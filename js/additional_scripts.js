(function($){

	$(window).on("load",function(){

		$(".scroll").mCustomScrollbar();

	});

})(jQuery);

$(document).ready(function() {

	var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    slick_slider();

	$(window).resize(function() {

		bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

		slick_slider();

	});	


	$(".promo-slider").not('.slick-initialized').slick({
		dots: false,
		arrows: false,
		speed: 800,
		fade: true,
		autoplay: true,
		autoplaySpeed: 12000
	});


	$(".good-slider-1").not('.slick-initialized').slick({
		dots: true,
		arrows: true,
		speed: 800,
		slidesToShow: 4,
		slidesToScroll: 2,
		autoplay: true,
		appendDots: $(".goods_sl_1 .inner"),
		autoplaySpeed: 7000,
		 responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 840,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 510,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});

	$(".good-slider-2").not('.slick-initialized').slick({
		dots: true,
		arrows: true,
		speed: 800,
		slidesToShow: 4,
		slidesToScroll: 2,
		autoplay: true,
		appendDots: $(".goods_sl_2 .inner"),
		autoplaySpeed: 7000,
		  responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 840,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 510,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});

	$(".good-slider-3").not('.slick-initialized').slick({
		dots: true,
		arrows: true,
		speed: 800,
		slidesToShow: 4,
		slidesToScroll: 2,
		autoplay: true,
		appendDots: $(".goods_sl_3 .inner"),
		autoplaySpeed: 7000,
		  responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 840,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 510,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});

	$(".partners-slider").not('.slick-initialized').slick({
		dots: false,
		arrows: true,
		speed: 800,
		slidesToShow: 5,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 7000,
		 responsive: [
		    // {
		    //   breakpoint: 1200,
		    //   settings: {
		    //     slidesToShow: 5,
		    //     slidesToScroll: 2
		    //   }
		    // },
		    {
		      breakpoint: 1030,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 900,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 560,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 440,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        centerMode: true
		      }
		    },
		    {
		      breakpoint: 440,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        centerMode: false
		      }
		    }
		  ]
	});


	$(".brands-slider").not('.slick-initialized').slick({
		dots: false,
		arrows: true,
		speed: 800,
		slidesToShow: 7,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 7000,
		 responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 5,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 910,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 710,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 510,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 350,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        centerMode: true
		      }
		    }
		  ]
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

	priceSlider = document.getElementById('catalog_sl');

    if( priceSlider ) {

      var values;

      noUiSlider.create(priceSlider, {
          start: [ 18900, 112449 ],
          connect: true,
          range: {
              'min': [  0 ],
              'max': [ 120000 ]
          }
      });

      // ageRange = document.getElementsByClassName('catalog_sl')[0];

      inputNumberMin = document.getElementById("input-number_1");
      inputNumberMax = document.getElementById("input-number_2");

      setStep = 200;

      var leftRange;
      var rightRange;

      var activeInputVal;

      priceSlider.noUiSlider.on('update', function( values, handle ) {

          leftRange = parseInt( values[0] );
          rightRange = parseInt( values[1] );

          $("#input-number_1").attr("value",  leftRange );
          
          $("#input-number_2").attr("value",  rightRange );

      });

      $("#input-number_1").keyup(function() {

          activeInputVal = parseInt( $(this).val() );

          if( activeInputVal < parseInt( $("#input-number_2").val() ) ) {

              leftRange = parseInt( $(this).val() );

              priceSlider.noUiSlider.set([leftRange, null]);

          }

      });

      $("#input-number_2").keyup(function() {

          activeInputVal = parseInt( $(this).val() );

          if( activeInputVal > parseInt( $("#input-number_1").val() ) ) {

              rightRange = parseInt( $(this).val() );

              priceSlider.noUiSlider.set([null, rightRange]);

          }

      });

    }

    // ------------------------------------------------



    $(".rating").each(function() {

		rateVal = +( $(this).attr("data-rate") );

		$(this).rateYo({
			starWidth: "18px",
			spacing: "5px",
		    normalFill: "#ebeef0",
		    ratedFill: "#ffd44f",
		    rating: rateVal,
		    readOnly: true
		  });

	});

	if( $(".rating-big-star").length > 0 )  {

		$(".rating-big-star").each(function() {

			rateVal = +( $(this).attr("data-rate") );

			$(this).rateYo({
				starWidth: "22px",
				spacing: "5px",
			    normalFill: "#dadada",
			    ratedFill: "#fbd03e",
			    rating: rateVal,
			    readOnly: true
			  });

		});

	}

	if( $(".add-rating").length > 0 )  {

		$(".add-rating").rateYo({
			starWidth: "18px",
			spacing: "5px",
			normalFill: "#ebeef0",
			ratedFill: "#ffd44f",
			rating: rateVal
		});

	}

    // ------------------------------------------------	

	function slick_slider() {

		if ($(".delivery-thumbnails-slider.slick-initialized").length > 0
			&& bodyWidth > 768 ) {

			setTimeout(function() {

				$(".delivery-thumbnails-slider").slick("unslick");
				$(".payments-thumbnails-slider").slick("unslick");

			}, 400);

		} else if( bodyWidth <= 768) {

			$(".delivery-thumbnails-slider").not('.slick-initialized').slick({
				arrows: false,
				dots: false,
		   		slidesToShow: 4,
				slidesToScroll: 1,				
				responsive: [
					{
					breakpoint: 640,
					settings: {
					   		slidesToShow: 3,
							slidesToScroll: 1
						}
					},
					{
					breakpoint: 490,
					settings: {
					   		slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
					breakpoint: 380,
					settings: {
					   		slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});

			$(".payments-thumbnails-slider").not('.slick-initialized').slick({
				arrows: false,
				dots: false,
		   		slidesToShow: 4,
				slidesToScroll: 1,				
				responsive: [
					{
					breakpoint: 640,
					settings: {
					   		slidesToShow: 3,
							slidesToScroll: 1
						}
					},
					{
					breakpoint: 480,
					settings: {
					   		slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
					breakpoint: 350,
					settings: {
					   		slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});

		}

	}

});