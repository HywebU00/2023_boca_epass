// 自行加入的JS請寫在這裡
$(function() {
    //sticky sidebar
    if ($('.stickySidebar').length > 0) {
        var stickySidebar = new StickySidebar('.stickySidebar', {
            containerSelector: '.main',
            topSpacing: 0,
            bottomSpacing: 0,
            minWidth: 768,
            resizeSensor: true,
        });
    }
    // timer
    $('.timer').siblings('.breadcrumb').addClass('hasTimer');

    // 環境檢測 position 斷點 style 設定
    if ($('.alert').length > 0) {
        $('.main').css('padding-top', '0');
    } else {
        $('.main').css('padding-top', '60');
    }
    $(window).resize(function() {
        if ($(window).width() < 768) {
            $('.loginInfo > #openModal').css('position', 'relative');
            if ($('.alert').length > 0) {
                $('.main').css('padding-top', '0');
            } else {
                $('.main').css('padding-top', '60px');
            }
        } else {
            $('.loginInfo > #openModal').css('position', 'absolute');
        }
    });

    // 月份輪播
    $('.multipleSlider').slick({
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1099,
            settings: {
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },{
            breakpoint: 765,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    // 首頁輪播
    // $('.mpSlider').slick({
    //     mobileFirst: true,
    //     dots: true,
    //     arrows: true,
    //     infinite: true,
    //     speed: 500,
    //     autoplay: true,
    //     fade: true,
    //     lazyLoaded: true,
    //     lazyLoad: 'ondemand',
    //     ease: 'ease',
    //     customPaging: function(slider, i) {
    //         var title = $(slider.$slides[i]).find('img').attr('alt').trim();
    //         return $('<button type="button" aria-label="' + title + '"/>').text(title);
    //     }
    // });

    // 廣告輪播
    // $('.adSlider').slick({
    //     mobileFirst: true,
    //     dots: false,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     arrow: true,
    //     lazyLoaded: true,
    //     lazyLoad: 'ondemand',
    //     ease: 'ease',
    //     responsive: [{
    //         breakpoint: 1200,
    //         settings: {
    //             slidesToShow: 5,
    //             slidesToScroll: 1,
    //             arrows: true
    //         }
    //     }, {
    //         breakpoint: 768,
    //         settings: {
    //             slidesToShow: 4,
    //             slidesToScroll: 1,
    //             arrows: true
    //         }
    //     }, {
    //         breakpoint: 575,
    //         settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 1,
    //             arrows: true
    //         }
    //     }]
    // });

    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        lazyLoad: 'ondemand',
        useHistoryApi: 'true',
        ease: 'ease',
        lazy: true
    });

    
    $('.cppic_slider').slick({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        // pauseOnHover: true,
        // pauseOnFocus: true,
        // focusOnSelect: true,
        // accessibility: true,
        // lazyLoad: 'ondemand',
        // ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });

    // cp_photo
    // $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
    //     var i = (currentSlide ? currentSlide : 0) + 1;
    //     $('.controls').html(i + '/' + slick.slideCount);
    // });
    // $('.Slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     swipe: false,
    //     swipeToSlide: false,
    //     lazyLoad: 'ondemand',
    //     asNavFor: '.Slider-nav',
    //     infinite: true
    // });
    // $('.Slider-nav').slick({
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     asNavFor: '.Slider-for',
    //     dots: true,
    //     arrows: true,
    //     lazyLoad: 'ondemand',
    //     focusOnSelect: true,
    //     infinite: true
    // });

    // password_toggle
    var passShow = false;
    $('.password_toggle').each(function(index, el) {
        $(this).find('.btn-icon').off().click(function(e) {
            if (!passShow) {
                $(this).children('i').removeClass().addClass('i_show');
                $(this).parents('.password_toggle').find('input[type="password"]').attr('type', 'text');
                passShow = true;
                // console.log(passShow);
            } else {
                $(this).children('i').removeClass().addClass('i_hide');
                $(this).parents('.password_toggle').find('input[type="text"]').attr('type', 'password');
                passShow = false;
                // console.log(passShow);
            }
            e.preventDefault();
        });
    });

    /*-----------------------------------*/
    /////////////modal設定/////////////
    /*-----------------------------------*/
    $(function () {
        $("#modal1").hide(); //先隱藏視窗
        $(".modal").after('<div class="modal_overlay"></div>'); //新增透明底
        // $(".modal").prepend('<button type="button" class="close">關閉</button>'); //新增關閉按鈕
        $(".modal_overlay").hide(); //隱藏透明底
        //按鈕動作
        $("#openModal").click(function (e) {
            $(".modal_overlay").fadeIn(100);
            $(".modal").fadeIn(100);
            $("body").addClass("noscroll");
            e.preventDefault();
        });
        //關閉function
        function closeModal() {
            $("#modal1").hide();
            $(".modal_overlay").hide();
            $("body").removeClass("noscroll");
        }
        //點選關閉按鈕及透明底都可關閉
        // $(".modal_overlay").click(closeModal);
        // $(".modal .close_Modal").click(closeModal);
        $(this).find('.close_Modal').click(closeModal);
    });

    $(function () {
        $("#modal2").hide(); //先隱藏視窗
        $(".modal_light").after('<div class="modal_overlay"></div>'); //新增透明底
        // $(".modal").prepend('<button type="button" class="close">關閉</button>'); //新增關閉按鈕
        $(".modal_overlay").hide(); //隱藏透明底
        //按鈕動作
        $("#openModal_light").click(function (e) {
            $(".modal_overlay").fadeIn(100);
            $(".modal_light").fadeIn(100);
            $("body").addClass("noscroll");
            e.preventDefault();
        });
        //關閉function
        function closeModal() {
            $("#modal2").hide();
            $(".modal_overlay").hide();
            $("body").removeClass("noscroll");
        }
        //點選關閉按鈕及透明底都可關閉
        // $(".modal_overlay").click(closeModal);
        // $(".modal .close_Modal").click(closeModal);
        $(this).find('.close_Modal').click(closeModal);
    });
});