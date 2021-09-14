$(function () {
    // Audio plugin Banner start
    // $(".audio-player").luna({
    //     songs:["1.mp3, 2.mp3, 3.mp3"],
    // })
    // Audio plugin Banner end

    // VenoBox in Picture part start
    $('.venobox').venobox();
    // VenoBox in Picture part end



    // Slick slider in DJ part start
    $('.dj_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        arrows: false,
        autoplay: true
    });

    setTimeout(function () {
        var SlickCurrent = $('.slick-current');
        SlickCurrent.prev().addClass('prev');
        SlickCurrent.next().addClass('next');
    }, 100);

    $('.dj_slider').on('beforeChange', function () {
        $('.slick-slide').removeClass('prev next');
        setTimeout(function () {
            var beforechange = $('.slick-center') ;
            beforechange.prev().addClass('prev');
            beforechange.next().addClass('next');
        }, 100);
    });

    // setTimeout(function () {
    //     var SlickCurrent = $('.slick-active');
    //     SlickCurrent.prev().addClass('prev');
    //     SlickCurrent.next().addClass('next');
    // }, 100);

    // $('.dj_slider').on('beforeChange', function () {
    //     $('.slick-slide').removeClass('prev next');
    //     setTimeout(function () {
    //         var beforechange = $('.slick-current');
    //         beforechange.prev().addClass('prev');
    //         beforechange.next().addClass('next');
    //     }, 100);
    // });
    // Slick slider in DJ part end

    // Countdown in event part start
    $('.timer_day').countdown('2021/08/28', function (event) {
        $(this).html(event.strftime('%D  DAY'));
    });

    $('.timer_min').countdown('2021/08/28', function (event) {
        $(this).html(event.strftime('%M  MINS'));
    });

    $('.timer_hours').countdown('2021/08/28', function (event) {
        $(this).html(event.strftime('%H  HRS'));
    });

    $('.timer_scnd').countdown('2021/08/28', function (event) {
        $(this).html(event.strftime('%S  SECS'));
    });
    // Countdown in event part end 

    // Slider in event part start
    $('.event_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: '<i class="fas fa-chevron-right events_next transition"></i>',
        prevArrow: '<i class="fas fa-chevron-left events_prev transition"></i>',
        dots: false,
    });
    // Slider in event part end

    // Slider in testimonail part start
    $('.test_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        centerPadding: '0',
        arrows: true,
        nextArrow: '<i class="fas fa-chevron-right events_next transition"></i>',
        prevArrow: '<i class="fas fa-chevron-left events_prev transition"></i>',
    });
    // Slider in testimonail part end
})