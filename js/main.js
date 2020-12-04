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
    dots: true,
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


const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function(e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};