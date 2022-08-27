import $ from 'jquery';
import {sliderAbout} from './module/SliderAbout.js';
import {sliderProject} from './module/SliderProject.js';
import {sliderReview} from './module/SliderReview.js';
import {mapScript} from './module/MapScript.js';
import {countersScript} from './module/CountersScript.js';

$('document').ready(function() {
    sliderAbout();
    sliderProject();
    mapScript();
    sliderReview();
    countersScript();
});