(function($) {

    var stickAt;
    var windowWidth;
    var isSticky = false;

    var nav        = $('#mainNav');
    var siteHeader = $("#flexHeader");

    function doResizeActions(sticky) {


        windowWidth = window.innerWidth;
        if(sticky) {
            stickAt  = $(siteHeader).innerHeight();
        }

        // Mobile or desktop nav
        if( windowWidth < 992 ) {
            $(nav).removeClass('main-nav').addClass('mobile-nav');
        } else {
            $(nav).addClass('main-nav').removeClass('mobile-nav');
        }

        // return true;

    }
    function halfResize() {
        var c6width = $('#refContainer').children('.col-6').width();
        if($(window).innerWidth() > 558) {
            $('.halfbg > .col-6:first-child > div').css({'width':(c6width+15)+'px','margin-left':'auto'});
        }
        else {
            $('.halfbg > .col-6:first-child > div').attr('style','');
        }
    }
    function halfmapResize() {
        var c6width = $('#refContainer').children('.col-6').width();
        if($(window).innerWidth() > 767) {
            $('.halfmap > .col-6:first-child > div').css({'width':(c6width+15)+'px','margin-left':'auto'});
        }
        else {
            $('.halfmap > .col-6:first-child > div').attr('style','');
        }
    }
    function greenblueResize() {
        var c6width = $('#refContainer').children('.col-6').width();
        $('.greenbluebg .col-6 > div').css({'width':(c6width+15)+'px'});
        $('.greenbluebg .col-6:first-child > div').css({'margin-left':'auto'});
    }
    function halfsliderResize() {
        var c6width = $('#refContainer').children('.col-6').width();
        $('.halfslider > .col-6:first-child > div').css({'width':(c6width+15)+'px','margin-left':'auto'});
    }

    $(document).ready(function() {
        doResizeActions(true);
        if($('.halfbg').length > 0) {
            halfResize();
        }
        if($('.greenbluebg').length > 0) {
            greenblueResize();
        }
        if($('.halfmap').length > 0) {
            halfmapResize();
        }
        if($(window).innerWidth() > 991) {
            if($('.halfslider').length > 0) {
                halfsliderResize();
            }
        }
        $('.quote-pop').on('click',function(e) {
            e.preventDefault();
            $('#popForm').modal('show');
        })
		
    });

    // @todo set/check variable for peformance optimization
    $(window).on('resize', function() {
        doResizeActions(false); // don't recalculate sticky-header
        halfResize();
        halfmapResize();
        greenblueResize();
        if($(window).innerWidth() > 991) {
            halfsliderResize();
        }
    });


    $(document).on("scroll", function() {
        if ( $(document).scrollTop() >= stickAt ) {
            if(!isSticky) {
                $("body").addClass("sticky-header");
                isSticky = true;
            }
        } else {
            if(isSticky) {
                $("body").removeClass("sticky-header");
                isSticky = false;
            }
        }
    });

    $('#navToggle, #closeNav, #openNavOverlay').on('click', function() {
        // console.log($(this));
        // return false;
        if($(this).context.className != 'get-quote') {
            $(mainNav).toggleClass('open');
            $('#closeNav').toggleClass('open');
            $('body').toggleClass('no-scroll');
        } else {
            $(mainNav).removeClass('open');
            $('#closeNav').removeClass('open');
            $('body').removeClass('no-scroll');
        }
    });

    $('.accordion-title').on('click',function() {
        var openAccordion = $('.accordion-content.open');
        var openAccordionClosed = $(openAccordion).prev('.accordion-title').children('i').attr('data-closed');
        var openAccordionOpen = $(openAccordion).prev('.accordion-title').children('i').attr('data-open');
        var closed = $(this).children('i').attr('data-closed');
        var open = $(this).children('i').attr('data-open');

        if($('.accordion-content.open').length > 0) {
            if($(this).next('.accordion-content').hasClass('open')) {
                $(this).next('.accordion-content').slideToggle().removeClass('open');
                $(this).children('i').removeClass('fa-'+open).addClass('fa-'+closed);
            }
            else {
                $(openAccordion).slideToggle().removeClass('open');
                $(openAccordion).prev('h3').children('i').removeClass('fa-'+openAccordionOpen).addClass('fa-'+openAccordionClosed);
                $(this).next('.accordion-content').addClass('open').slideToggle();
                $(this).children('i').removeClass('fa-'+closed).addClass('fa-'+open);
            }
        }
        else {
            $(this).children('i').removeClass('fa-'+closed).addClass('fa-'+open);
            $(this).next('.accordion-content').addClass('open').slideToggle();
        }

        // $('html, body').animate({
        //     scrollTop: $(this).offset().top - 125
        // }, 125);
    });



})(jQuery);
