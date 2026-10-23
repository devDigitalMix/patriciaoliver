import SlideNav from './slidenav.js';

import menuMobileInit from './menu-mobile.js';
import initAccordion from './accordion.js';


menuMobileInit();
initAccordion();



const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-controls');
