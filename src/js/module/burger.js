import $ from 'jquery';

export function burger () {
    $('.header__burger').click(function() {
        $(this).toggleClass('open');
        $('.menu').toggleClass('open');
    });
};