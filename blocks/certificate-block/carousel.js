// carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

var owl = $(".owl-carousel");
owl.owlCarousel({
    loop: true,
    margin: 30,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
    },
});

$(".slider__btn--right").click(function () {
    owl.trigger("next.owl.carousel");
});
$(".slider__btn--left").click(function () {
    owl.trigger("prev.owl.carousel", [300]);
});

