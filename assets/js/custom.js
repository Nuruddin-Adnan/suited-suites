const swiper = new Swiper('.swiper-container', {

    direction: 'vertical',
    scrollbar: false,
    effect: 'fade',
    speed: 800,
    nested: true,
    mousewheel: true,
    mousewheelControl: false,
    slidesPerView: 1,
    freeMode: false,
    freeModeSticky: true,
    navigation: {
        nextEl: ".swiper-button-next",
    },
});