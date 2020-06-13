$(document).ready(() => {
    $('#content-main-img img').attr('src', $('#content-side-img img')[0].src);
    $('#content-side-img img').click(function() {
        
        $('#content-main-img img').attr('src', $(this)[0].src);
        $('#content-side-img img').css('border', 'none');      

        $(this).css('border', '1.5px solid #a0a0a0');
    });

    $('#catalog-size li').eq(1).css({
        'border': '1px solid #c0bcbc',
        'border-radius': '100%'
    });

    $('#catalog-size li').click(function() {
        $('#catalog-size li').css('border', 'none');
        $(this).css({
            'border': '1px solid #c0bcbc',
            'border-radius': '100%'
        });
    });

    new Swiper('.swiper-container', {
        //effect: 'coverflow',
        //grabCursor: true,
        centeredSlides: true,
        slidesPerView: 7,
        loop: true,
        /*coverflowEffect: {
          rotate: 10,
          stretch: 10,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        },*/
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });
});