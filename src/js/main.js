import $ from 'jquery';
import {sliderAbout} from './module/SliderAbout.js';
import {sliderProject} from './module/SliderProject.js';
import {sliderReview} from './module/SliderReview.js';
import {mapScript} from './module/MapScript.js';
import {countersScript} from './module/CountersScript.js';
import {burger} from './module/burger.js';
import {sliderDirect} from './module/SliderDirect.js';

$('document').ready(function() {
    burger();
    sliderAbout();
    sliderProject();
    mapScript();
    sliderReview();
    countersScript();
    sliderDirect();
});