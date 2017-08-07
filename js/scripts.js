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

    var parentIntem;

    // ----------------------------

    var sliddingBox;
    var indexSliddingBlock;

    // ----------------------------

    var parentIntem;

    // ----------------------------

    var parentTabsBlock;
    var parentTabsBlockIndex;
    var labelAttr;

    // ----------------------------



    // ----------------------------

    getFooterPosition();

    getSingleSectionHeight();

    getHshapeWidth();

    getTabSideBar();

    getRespFilter();

    getAdaptivePositionElements();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // -----------------------------

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        // -----------------------------

        getSingleSectionHeight();

        getHshapeWidth();

        getScrollBoxRespNavHeight();

        getTabSideBar();

        getRespFilter();

        getAdaptivePositionElements();

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

        // var parentIntem;
       
        $(".sidebar ul li").each(function() {

            if($(this).children("ul").length > 0) {
                $(this).append('<button type="button" class="show-inner-nav"></button>');
            }

        });

    });

    // ----------- Tel Input Mask ---------------------

    $(function() {

        $("input[type='tel']").mask("+7 (999) 999-99-99");

    });

    // ----------- Sliding Box -------------------------

    $(function() {

        // var sliddingBox;
        // var indexSliddingBlock;


        $(".slidding-block").each(function() {

            sliddingBox = $(this).children(".slidding-box");

            indexSliddingBlock = $(this).index(".slidding-block");

            if( sliddingBox.hasClass("visible") ) {

                sliddingBox.slideDown(400);

                $(".slidding-block:eq("+ indexSliddingBlock +") .slide-block-btn").addClass("active");

            } else {

                sliddingBox.slideUp(400);

                $(".slidding-block:eq("+ indexSliddingBlock +") .slide-block-btn").removeClass("active");

            }

        });


        $(".slide-block-btn").click(function() {

            parentSliddingBlock = $(this).closest(".slidding-block");

            sliddingBox = parentSliddingBlock.children(".slidding-box");

            if( sliddingBox.is(":hidden") ) {

                $(this).addClass("active");

                sliddingBox.slideDown(400);

            } else {

                $(this).removeClass("active");

                sliddingBox.slideUp(400);

            }

        });


    });

    // ----------- /Sliding Box -------------------------

    // ----------- Responsive Navigation  --------------

    $(".resp-sidebar ul li").each(function() {

        if($(this).children("ul").length > 0) {

            $(this).append('<button type="button" class="show-inner-nav"></button>');

            $(this).children("ul").slideUp(300);

        }

    });


     $(".resp-sidebar ul li .show-inner-nav").click(function() {

        parentIntem = $(this).closest("li");           

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

    // ----------- Delivery Thumbnils  --------------

    $(function() {

        var indexTabs;
        var indexThumb;
        var inputRadioThumb;
        var indexTabAttr;
        var leftTringleCoor;
        var triangleWidth = 20;
        var forAttr;
        var parentThumb;

        $(".tabs-section").each(function() {

            indexTabs = $(this).index(".tabs-section");

            $(".delivery-thumbnails:eq("+ indexTabs +") .thumbnail").each(function() {

                indexThumb = $(this).index(".tabs-section:eq("+ indexTabs +") .delivery-thumbnails .thumbnail");

                inputRadioThumb = $(".tabs-section:eq("+ indexTabs +") .delivery-thumbnails .thumbnail:eq("+ indexThumb +") .deliver-input");            

                if($(".tabs-section:eq("+ indexTabs +") .delivery-thumbnails .thumbnail:eq("+ indexThumb +") .deliver-input:checked").length > 0) {

                    indexTabAttr = $(".tabs-section:eq("+ indexTabs +") .delivery-thumbnails .thumbnail:eq("+ indexThumb +")" ).attr("data-tab-link-index");

                    $(".tabs-section:eq("+ indexTabs +") .delivery-info .tab[data-tab-index = '"+ indexTabAttr  +"']").fadeIn(500);

                    leftTringleCoor = $(".tabs-section:eq("+ indexTabs +") .delivery-thumbnails .thumbnail:eq("+ indexThumb +")").offset().left + triangleWidth;

                    $(".tabs-section:eq("+ indexTabs +") .delivery-info .tab[data-tab-index = '"+ indexTabAttr  +"'] .tab-arrow").offset({left: leftTringleCoor});

                }

            });

        });

        $(".deliver-radio label").click(function() {

            forAttr = $(this).attr("for");

            if( !$(".deliver-input[id = '"+ forAttr +"']:checked").length ) {

                parentTabs = $(this).closest(".tabs-section");

                indexTabs = parentTabs.index(".tabs-section");

                parentThumb = $(this).closest(".thumbnail");

                indexTabAttr = parentThumb.attr("data-tab-link-index");

                $(".tabs-section:eq("+ indexTabs +") .tab").each(function() { 

                    if( $(this).attr("data-tab-index") == indexTabAttr ) {

                        $(".tabs-section:eq("+ indexTabs +") .tab[data-tab-index = '"+ indexTabAttr  +"']").css({
                            "display" : "block"
                        });

                    } else {

                         $(this).css({
                            "display" : "none"
                        });

                    }

                });                

                leftTringleCoor = parentThumb.offset().left + triangleWidth;

                $(".tabs-section:eq("+ indexTabs +") .tab[data-tab-index = '"+ indexTabAttr  +"'] .tab-arrow").offset({left: leftTringleCoor});

            }

        });

    });

    // ----------- /Delivery Thumbnils  --------------

    // ----------- Tabs  --------------

    $(".tabs-nav label").each(function() {

        parentTabsBlock = $(this).closest(".tabs-block");
        parentTabsBlockIndex = parentTabsBlock.index(".tabs-block");
        labelAttr = $(this).attr("for");

        if ( $(".tabs-block:eq("+ parentTabsBlockIndex +") .radio_mark[id = '"+ labelAttr +"']").is(":checked") ){

            $(".tabs-block:eq("+ parentTabsBlockIndex +") label[for = '"+ labelAttr +"']").addClass("active");

            $(".tabs-block:eq("+ parentTabsBlockIndex +") .radio_mark[id = '"+ labelAttr +"']").click();

        }

    });

    $(".tabs-nav label").click(function() {

        if( $(this).hasClass("active") ) {

            return true;

        } else {

            var parentTabsBlock = $(this).closest(".tabs-block");

            var labelAttr = $(this).attr("for");

            var tabNav = parentTabsBlock.find(".tabs-nav");

            var tabNavLabels = tabNav.find("label");

            tabNavLabels.each(function() {

                if( $(this).hasClass("active") && $(".radio_mark[id = '"+ labelAttr +"'][type='radio']:checked") ) {

                    $(this).removeClass("active");

                } else if ($(this).attr("for") ==  labelAttr){

                    $(this).addClass("active");

                    if( bodyWidth <= 1024 && $(".input-tabs").is(":visible")) {

                        var respTabInput = parentTabsBlock.find(".input-tabs");
                        respTabInput.html($(this).html());

                    }

                    $(".radio_mark[id = '"+ labelAttr +"'][type='radio']").click();

                }

            });

        }

    });
    

    if( bodyWidth <= 1024 && $(".input-tabs").is(":visible")) {

        $(".input-tabs").click(function(e) {

            e.preventDefault();

            var parentTabsBlock = $(this).closest(".tabs-block");

            var fadeElem = parentTabsBlock.find(".tab-nav-list");

            fadeElem.css({"display" : "table"});

        });   

        $(document).mouseup(function (e){

            hide_element = $('.tabs-nav');

            if (!hide_element.is(e.target)

                && hide_element.has(e.target).length === 0) {

                $(".tab-nav-list").fadeOut(300);
            }

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27) {

               $(".tab-nav-list").fadeOut(300);

            }

        });

    }


    // ----------- /Tabs  --------------

    // ----------- Responsive Navigation  --------------

    $(function() {

        $(".show_resp_sort").click(function() {

            $(".resp-sort-block").fadeIn(300);

         });

         $(".close-resp-sort").click(function() {

            $(".resp-sort-block").fadeOut(300);

         });

         $(this).keydown(function(eventObject){

            if (eventObject.which == 27) {

               $(".resp-sort-block").fadeOut(300);

            }

        });

    });

    // ----------- Responsive Sort Block  --------------

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


    function getSingleSectionHeight() {

        var sectionHeight;

        if($(".content section").length <= 1 ) {

            if(bodyWidth > 768) {

                sectionHeight = $(window).height() - $(".header-site").height() - $(".footer").height();

            }

            $(".content section:eq("+ 0 +")").css({
                "min-height" : sectionHeight + "px"
            });

        }

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

    function getRespFilter() {

        if( bodyWidth <= 768 ) {

            $(".sort-append").each(function() {

                var insertAttr = $(this).attr("data-resp-sort-row");

                $(this).append($("[data-sort-row = "+ insertAttr +"]"));

            });

        } else {

            $(".forrow-append").each(function() {

                var insertAttr = $(this).attr("data-for-desk-append");

                $(this).appendTo($("[data-desk-append = "+ insertAttr +"]"));

            });     

        }

    }

    function getAdaptivePositionElements() {

        $(".append-elem").each(function() {

            if( $(this).hasClass("desktop-position") ) {

                var screenParam = parseInt( $(this).attr("data-min-screen") );

                var indexElem = $(this).attr("data-append-descktop-elem");

                if( bodyWidth <= screenParam ) {

                    $("[data-append-elem = '"+ indexElem +"']").append($(this).children());

                }

                 if( bodyWidth > screenParam ) {

                    $("[data-append-descktop-elem = '"+ indexElem +"']").append($("[data-append-elem = '"+ indexElem +"']").children());

                }

            }

        });

    }

});
