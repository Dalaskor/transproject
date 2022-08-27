import $ from 'jquery';

export function sliderReview () {
    var slideIndex = 0;

    function showCounters() {
        var slides = $('.review-slider__item');
        var counterBar = $('.review-slider__counter-bar');
        var maxCount = $('.review-slider__counter-max');

        counterBar.empty();
        for(let i = 0; i < slides.length; i++) {
            counterBar.append('<div class="review-slider__counter-progress"></div>')
        }
        maxCount.empty();
        if(slides.length < 10) {
            maxCount.append('0' + slides.length + '.');
        } else {
            maxCount.append(slides.length + '.');
        }
    }

    function showSlides(n) {
        var slides = $('.review-slider__item');
        var sliderCounterProg = $('.review-slider__counter-progress')
        // var sliderCounterNums = $('.slider__count-number')
        
    
        if (n >= slides.length) {
            slideIndex = 0
        }

        if (n < 0) {
            slideIndex = slides.length - 1
        }

        $('.review-slider__item_active').toggleClass('review-slider__item_active');
        $('.review-slider__counter-progress_active').toggleClass('review-slider__counter-progress_active');
        // $('.slider__count-row_active').toggleClass('slider__count-row_active');

        $(slides[slideIndex]).toggleClass('review-slider__item_active');
        $(sliderCounterProg[slideIndex]).toggleClass('review-slider__counter-progress_active');
        // $(sliderCounterRows[slideIndex]).toggleClass('slider__count-row_active');
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    $('.review-slider__btn-next').on('click', function () {
        showSlides(slideIndex += 1);
    });

    $('.review-slider__btn-prev').on('click', function () {
        showSlides(slideIndex -= 1);
    });
    
    showCounters();
    showSlides(slideIndex);
};