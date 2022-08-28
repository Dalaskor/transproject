import $ from 'jquery';

export function sliderDirect () {
    var slideIndex = 0;

    function showCounters() {
        var slides = $('.direction');
        var counterBar = $('.directions__counter-bar');
        var maxCount = $('.directions__counter-max');

        counterBar.empty();
        for(let i = 0; i < slides.length; i++) {
            counterBar.append('<div class="directions__counter-progress"></div>')
        }
        maxCount.empty();
        if(slides.length < 10) {
            maxCount.append('0' + slides.length + '.');
        } else {
            maxCount.append(slides.length + '.');
        }
    }

    function showSlides(n) {
        var slides = $('.direction');
        var sliderCounterProg = $('.directions__counter-progress')
        // var sliderCounterNums = $('.slider__count-number')
        
    
        if (n >= slides.length) {
            slideIndex = 0
        }

        if (n < 0) {
            slideIndex = slides.length - 1
        }

        $('.direction_active').toggleClass('direction_active');
        $('.directions__counter-progress_active').toggleClass('directions__counter-progress_active');
        // $('.slider__count-row_active').toggleClass('slider__count-row_active');

        $(slides[slideIndex]).toggleClass('direction_active');
        $(sliderCounterProg[slideIndex]).toggleClass('directions__counter-progress_active');
        // $(sliderCounterRows[slideIndex]).toggleClass('slider__count-row_active');
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    $('.direction').on('click', function () {
        if($(window).width() <= '768') {
            showSlides(slideIndex += 1);
        }
    });

    // $('.slider-about__btn-next').on('click', function () {
    //     showSlides(slideIndex += 1);
    // });

    // $('.slider-about__btn-prev').on('click', function () {
    //     showSlides(slideIndex -= 1);
    // });
    
    showCounters();
    showSlides(slideIndex);
}