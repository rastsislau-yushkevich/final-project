$('.home-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [{
            breakpoint: 1140,
            settings: {
                arrows: false,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                dots: false,
            }
        }
    ],

});
$('.about-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
});
$('.testimonials-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
});

function myFunction() {
    let x = document.querySelector(".myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}