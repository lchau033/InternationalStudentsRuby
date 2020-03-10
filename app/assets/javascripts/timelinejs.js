/*! Jack In The Box - v0.0.5 - 2014-01-15
 * Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */
(function(){jQuery(function(){return $.jackInTheBox=function(a,b){var c,d=this;return c="",this.settings={},this.$element=$(a),this.getSetting=function(a){return this.settings[a]},this.callSettingFunction=function(a,b){return null==b&&(b=[]),this.settings[a].apply(this,b)},this.mobileDevice=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},this.visible=function(a){var b,c,e,f;return f=d.$window.scrollTop(),e=f+d.$window.height()-d.settings.offset,c=a.offset().top,b=c+a.height(),e>=c&&b>=f},this.scrollHandler=function(){return d.$window.scroll(function(){return d.show()})},this.show=function(){return d.$boxes.each(function(a,b){var c;return c=$(b),d.visible(c)?c.css({visibility:"visible"}).addClass(d.settings.animateClass):void 0})},this.init=function(){return this.settings=$.extend({},this.defaults,b),this.$window=$(window),this.$boxes=$("."+this.settings.boxClass).css({visibility:"hidden"}),this.$boxes.length?(this.scrollHandler(),this.show()):void 0},this.mobileDevice()||this.init(),this},$.jackInTheBox.prototype.defaults={boxClass:"box",animateClass:"animated",offset:0},$.fn.jackInTheBox=function(a){return this.each(function(){var b;return void 0===$(this).data("jackInTheBox")?(b=new $.jackInTheBox(this,a),$(this).data("jackInTheBox",b)):void 0})}})}).call(this);

$(function() {
    $('body').jackInTheBox();
});



