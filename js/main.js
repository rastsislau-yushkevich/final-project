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

function burger() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}