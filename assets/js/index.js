$(document).ready(function () {
    new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        coverflowEffect: {
          rotate: 10,
          stretch: 10,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        },
        autoplay: {
            delay: 3000,
        },
    });
});