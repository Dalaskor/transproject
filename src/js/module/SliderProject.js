import $ from 'jquery';

export function sliderProject () {
    var slideIndex = 0;

    function showCounters() {
        var slides = $('.project-slider__image');
        var counterBar = $('.project-slider__counter-bar');
        var maxCount = $('.project-slider__counter-max');

        counterBar.empty();
        for(let i = 0; i < slides.length; i++) {
            counterBar.append('<div class="project-slider__counter-progress"></div>')
        }
        maxCount.empty();
        if(slides.length < 10) {
            maxCount.append('0' + slides.length + '.');
        } else {
            maxCount.append(slides.length + '.');
        }
    }

    function showSlides(n) {
        var slides = $('.project-slider__image');
        var slidesTexts = $('.project-slider__text');
        var sliderCounterProg = $('.project-slider__counter-progress')
        // var sliderCounterNums = $('.slider__count-number')
        
    
        if (n >= slides.length) {
            slideIndex = 0
        }

        if (n < 0) {
            slideIndex = slides.length - 1
        }

        $('.project-slider__image_active').toggleClass('project-slider__image_active');
        $('.project-slider__text_active').toggleClass('project-slider__text_active');
        $('.project-slider__counter-progress_active').toggleClass('project-slider__counter-progress_active');
        // $('.slider__count-row_active').toggleClass('slider__count-row_active');

        $(slides[slideIndex]).toggleClass('project-slider__image_active');
        $(slidesTexts[slideIndex]).toggleClass('project-slider__text_active');
        $(sliderCounterProg[slideIndex]).toggleClass('project-slider__counter-progress_active');
        // $(sliderCounterRows[slideIndex]).toggleClass('slider__count-row_active');
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    $('.project-slider__btn-next').on('click', function () {
        showSlides(slideIndex += 1);
    });

    $('.project-slider__btn-prev').on('click', function () {
        showSlides(slideIndex -= 1);
    });
    
    showCounters();
    showSlides(slideIndex);
};