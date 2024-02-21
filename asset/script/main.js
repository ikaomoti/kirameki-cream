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
            slidesPerGroup: 3,
            spaceBetween: 40,
        },
    },
    speed: 600 //スライドの推移時間を600msに
});

$(function () {
    $(".accordion__q").click(function () {
        $(this).next().slideToggle();
    });
    $(".accordion__q").on('click', function () {
        $(this).toggleClass('open');
    });
});