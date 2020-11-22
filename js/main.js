$('.home-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [{
        breakpoint: 1168,
        settings: {
            arrows: false,
        }
    }],
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
    responsive: [{
        breakpoint: 1000,
        settings: {
            dots: false,
        }
    }]
});

// $('.service-portfolio-block').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     mobileFirst: true,
//     responsive: [{
//         breakpoint: 554,
//         settings: { unslick }
//     }]
// });



function myFunction() {
    let x = document.querySelector(".myLinks");
    let y = document.querySelector("body");
    let z = document.querySelector('.topnav');
    if (x.style.display === "block") {
        x.style.display = "none";
        x.style.overflow = "auto";
        y.style.overflow = "visible";
    } else {
        x.style.display = "block";
        y.style.overflow = "hidden";
    }
}




$("#home").on("click", "a", function(event) {
    event.preventDefault();
    let id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
});

$("#about-us").on("click", "a", function(event) {
    event.preventDefault();
    let id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
});

$("#services").on("click", "a", function(event) {
    event.preventDefault();
    let id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
});

$("#portfolio").on("click", "a", function(event) {
    event.preventDefault();
    let id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
});

$("#mission").on("click", "a", function(event) {
    event.preventDefault();
    let id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
});

$("#qualities").on("click", "a", function(event) {
    event.preventDefault();
    let id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
});


$("#testimonials").on("click", "a", function(event) {
    event.preventDefault();
    let id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
});

$("#chess").on("click", "a", function(event) {
    event.preventDefault();
    let id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
});

$("#app").on("click", "a", function(event) {
    event.preventDefault();
    let id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
});

$("#events").on("click", "a", function(event) {
    event.preventDefault();
    let id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
});

$("#team").on("click", "a", function(event) {
    event.preventDefault();
    let id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
});

$("#newsletter").on("click", "a", function(event) {
    event.preventDefault();
    let id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
});

$("#footer").on("click", "a", function(event) {
    event.preventDefault();
    let id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
});