import $ from 'jquery';
import {sliderAbout} from './module/SliderAbout.js';
import {sliderProject} from './module/SliderProject.js';

$('document').ready(function() {
    sliderAbout();
    sliderProject();
});