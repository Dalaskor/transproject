import $ from 'jquery';

export function sliderAbout () {
    var slideIndex = 0;

    function showCounters() {
        var slides = $('.slider-about__item');
        var counterBar = $('.slider-about__counter-bar');
        var maxCount = $('.slider-about__counter-max');

        counterBar.empty();
        for(let i = 0; i < slides.length; i++) {
            counterBar.append('<div class="slider-about__counter-progress"></div>')
        }
        maxCount.empty();
        if(slides.length < 10) {
            maxCount.append('0' + slides.length + '.');
        } else {
            maxCount.append(slides.length + '.');
        }
    }

    function showSlides(n) {
        var slides = $('.slider-about__item');
        var sliderCounterProg = $('.slider-about__counter-progress')
        // var sliderCounterNums = $('.slider__count-number')
        
    
        if (n >= slides.length) {
            slideIndex = 0
        }

        if (n < 0) {
            slideIndex = slides.length - 1
        }

        $('.slider-about__item_active').toggleClass('slider-about__item_active');
        $('.slider-about__counter-progress_active').toggleClass('slider-about__counter-progress_active');
        // $('.slider__count-row_active').toggleClass('slider__count-row_active');

        $(slides[slideIndex]).toggleClass('slider-about__item_active');
        $(sliderCounterProg[slideIndex]).toggleClass('slider-about__counter-progress_active');
        // $(sliderCounterRows[slideIndex]).toggleClass('slider__count-row_active');
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    $('.slider-about__btn-next').on('click', function () {
        showSlides(slideIndex += 1);
    });

    $('.slider-about__btn-prev').on('click', function () {
        showSlides(slideIndex -= 1);
    });
    
    showCounters();
    showSlides(slideIndex);
};