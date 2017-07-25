$(document).ready(function() {


    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

    var hTxtWidth;
    var shapeWidth;

    // ----------------------------

    getFooterPosition();

    getHshapeWidth();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // -----------------------------


        getHshapeWidth();

    });


    $(function() {

        $(".h-shape").each(function () {
            
            hTxtWidth = $(this).children(".h-txt").outerWidth(true);

            shapeWidth = ( $(this).width() - hTxtWidth ) / 2;

            $(this).append("<span class='shape'></span>");
            $(this).prepend("<span class='shape'></span>");

            $(this).children(".shape").css({
                "width" : shapeWidth + "px"
            });

        });

    });


    $(function () {
       
        $(".sidebar ul li").each(function() {

            if($(this).children("ul").length > 0) {
                $(this).append('<button type="button" class="show-inner-nav"></button>');
            }

        });

    });

    // ----------- Sidebar Menu -------------

    $( ".sidebar ul li" ).bind({
      mouseenter: function() {
        if($(this).children("ul").length > 0) {
            $(this).children("ul").stop().slideDown(400);
        }
      },
      mouseleave: function() {
        if($(this).children("ul").length > 0) {
            $(this).children("ul").stop().slideUp(400);
        }
      }
    });

    // ----------- Sidebar Menu -------------

    function getFooterPosition() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        setFooterPositionInterval = setInterval(function() {

            contentCoor = $(".content").offset().top + $(".content").height();
            footerCoor = $(".footer").offset().top;

            if( contentCoor != footerCoor ) {

                $(".wrapper").css({"min-height" : $(window).height() + "px"});

                $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

                clearInterval(setFooterPositionInterval);

            }

        }, 35);

    }


    function getHshapeWidth() {

            $(".h-shape").each(function () {

                if( $(this).children(".shape") ) {
                
                    var hTxtWidth = $(this).children(".h-txt").outerWidth(true);
                    var shapeWidth = ( $(this).width() - hTxtWidth ) / 2;

                    $(this).children(".shape").css({
                        "width" : shapeWidth + "px"
                    });

                }

            });

        }



});
