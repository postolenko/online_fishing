$(document).ready(function() {


    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    // ----------------------------

    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

    var hTxtWidth;
    var shapeWidth;

    // ----------------------------

    getFooterPosition();

    getHshapeWidth();

    getTabSideBar();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // -----------------------------

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        // -----------------------------

        getHshapeWidth();

        getScrollBoxRespNavHeight();

        getTabSideBar();

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

        var parentIntem;
       
        $(".sidebar ul li").each(function() {

            if($(this).children("ul").length > 0) {
                $(this).append('<button type="button" class="show-inner-nav"></button>');
            }

        });

    });

    // ----------- Responsive Navigation  --------------

    $(".resp-sidebar ul li").each(function() {

        if($(this).children("ul").length > 0) {

            $(this).append('<button type="button" class="show-inner-nav"></button>');

            $(this).children("ul").slideUp(300);

        }

    });


     $(".resp-sidebar ul li .show-inner-nav").click(function() {

        var parentIntem = $(this).closest("li");           

        if(parentIntem.children("ul").is(":hidden")) {

            $(this).addClass("active");
            parentIntem.children("ul").slideDown(400);
            parentIntem.children("ul").addClass("active");
            parentIntem.children("a").addClass("active");

        } else {

            $(this).removeClass("active");
            parentIntem.children("ul").slideUp(400);
            parentIntem.children("ul").removeClass("active");
            parentIntem.children("a").removeClass("active");

        }        

     });


     $(".respmenubtn").click(function() {

        $(".resp-nav").fadeIn(300);
        getScrollBoxRespNavHeight()

     });

     $(".close-resp-nav-btn").click(function() {

        $(".resp-nav").fadeOut(300);

     });

     $(this).keydown(function(eventObject){

        if (eventObject.which == 27) {

           $(".resp-nav").fadeOut(300);

        }

    });

    // ----------- Responsive Navigation  --------------

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


    function getScrollBoxRespNavHeight() {

        $(".resp-nav").height( $(window).height() );

        var respNavHeight = $(".resp-nav").height() - $(".resp-nav-top-block").height();

        $(".scroll-box ").css({
            "height" : respNavHeight + "px"
        });

    }


    function getTabSideBar() {

        if( bodyWidth <= 768 ) {

            $("#sidebar_block").addClass("tab");

        } else {

            $("#sidebar_block").removeClass("tab");

        }


    }



});
