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
$(function () {
    $(".accordion__q").click(function () {
        $(this).next().slideToggle();
    });
    $(".accordion__q").on('click', function () {
        $(this).toggleClass('open');
    });
});

//トップへ戻るボタン
$(function () {
    var btn = $('.backtotop-button');
    $(window).on('load scroll', function () {
        if ($(this).scrollTop() > 100) {
            btn.addClass('active');
        } else {
            btn.removeClass('active');
        }
    });
    //フッターの手前でボタンを止める
    $(window).on('load scroll', function () {
        var height = $(document).height(), //ドキュメントの高さ 
            position = window.innerHeight + $(window).scrollTop(), //ページトップから現在地までの高さ
            footer = $('footer').height(); //フッターの高さ
        if (height - position < footer) {
            btn.addClass('absolute');
        } else {
            btn.removeClass('absolute');
        }
    });
});