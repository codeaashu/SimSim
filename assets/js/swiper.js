
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    Infinity: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints :({
        0: {
            slidesPerView: 1,
            },
        468: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    })
});
var swiper = new Swiper(".mySwiper-team", {
    slidesPerView: 4,
    spaceBetween: 30,
    Infinity: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints :({
        0: {
            slidesPerView: 1,
            },
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    })
});
var swiper = new Swiper(".mySwiper-brand", {
    slidesPerView: 6,
    spaceBetween: 30,
    Infinity: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints :({
        0: {
            slidesPerView: 2,
            },
        576: {
            slidesPerView: 3,
            },
        768: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 6,
        }
    })
});




