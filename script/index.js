
// header scroll bg
$(document).ready(function () {

    $(window).on('scroll', function () {
        const st = $(window).scrollTop();

        if (st > 50) {
            $('header').addClass('hdFixed');
        } else {
            $('header').removeClass('hdFixed');
        }
    });

    $("#subFooter").load("./common/sub_footer.html");
});


// nav
$(document).ready(function(){
    $(document).on('click', '#nav_opn', function(){
        $('.nav_wrap').show();
        $('html').addClass('hidden');
    });

    $(document).on('click', '.nav_btn', function(){
        $('.nav_wrap').hide();
        $('html').removeClass('hidden');
    });
});


// swiper
$(function () {
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});