$(function () {
    //スライダー
    const swiper = new Swiper(".swiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        loop: true, //繰り返しをする
        slidesPerView: 1, //スライダー数
        breakpoints: {
            768: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 40,
            },
        },
        speed: 600 //スライドの推移時間を600msに
    });

    //アコーディオン
    $(".accordion__q").click(function () {
        $(this).next().slideToggle();
    });
    $(".accordion__q").on('click', function () {
        $(this).toggleClass('open');
    });


    //トップへ戻るボタン
    var btn = $('.backtotop-button');
    $(window).on('load scroll', function () {
        if ($(this).scrollTop() > 100) {
            btn.addClass('active');
        } else {
            btn.removeClass('active');
        }
    });

    //その場でフェードイン
    $('.fadein.animate__animated').waypoint({
        handler: function (direction) {
            if (direction === 'down') {
                $(this.element)
                    .addClass('animate__fadeIn');
            }
        },
        offset: '60%',
    });
});