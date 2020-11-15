$('.home-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
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