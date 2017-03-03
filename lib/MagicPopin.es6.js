'use strict';

class MagicPopin {
  elts: {
    wrapper: null,
    swiper: null,
    overlay: null,
  },
  moving:false,
  scrollTmp:0,
  curRel: null,
  slideWidth:0,
  items:{},
  curItem:null,
  prevItem:null,
  nextItem:null,
  parentItem:{},

  constructor(trigger, options) {
    this.customClass = options.customClass || '';
    this.htmlContent = options.htmlContent || '';
    this.url = options.url || '';
    this.afterLoad = options.afterLoad || false;
    this.afterClose = options.afterLoad || false;
    this.beforeSwipe = options.afterLoad || false;
  },

  open() {

  }
}
