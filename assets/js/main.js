// slick slider
$(document).ready(function(){
    $('.products-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<span class="prev_arrow"><i class="fa-regular fa-circle-left"></i></span>',
        nextArrow: '<span class="next_arrow"><i class="fa-regular fa-circle-right"></i></span>',
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            },
        ]
    });
});

$(document).ready(function(){
    $('.view-top').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<span class="prev_arrow"><i class="fa-regular fa-circle-left"></i></span>',
        nextArrow: '<span class="next_arrow"><i class="fa-regular fa-circle-right"></i></span>',
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            },
        ]
    });
});


// noUiSlider
var html5Slider = document.getElementById('slider');

noUiSlider.create(html5Slider, {
    start: [100, 1000],
    connect: true,
    range: {
        'min': 0,
        'max': 1200
    }
});

var inputNumber = document.getElementById('input-number');
var inputNumber1 = document.getElementById('input-number1');


html5Slider.noUiSlider.on('update', function (values, handle) {

    var value = values[handle];
    if (handle) {
        inputNumber.value = value;
    } else {
        inputNumber1.value = Math.round(value);
    }
});


inputNumber.addEventListener('change', function () {
    html5Slider.noUiSlider.set([null, this.value]);
});
inputNumber1.addEventListener('change', function () {
    html5Slider.noUiSlider.set([null, this.value]);
});

// slider for product page


