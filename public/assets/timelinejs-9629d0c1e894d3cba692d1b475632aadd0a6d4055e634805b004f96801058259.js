(function(){jQuery(function(){return $.jackInTheBox=function(t,i){var n=this;return"",this.settings={},this.$element=$(t),this.getSetting=function(t){return this.settings[t]},this.callSettingFunction=function(t,i){return null==i&&(i=[]),this.settings[t].apply(this,i)},this.mobileDevice=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},this.visible=function(t){var i,s,e,o;return o=n.$window.scrollTop(),e=o+n.$window.height()-n.settings.offset,s=t.offset().top,i=s+t.height(),e>=s&&i>=o},this.scrollHandler=function(){return n.$window.scroll(function(){return n.show()})},this.show=function(){return n.$boxes.each(function(t,i){var s;return s=$(i),n.visible(s)?s.css({visibility:"visible"}).addClass(n.settings.animateClass):void 0})},this.init=function(){return this.settings=$.extend({},this.defaults,i),this.$window=$(window),this.$boxes=$("."+this.settings.boxClass).css({visibility:"hidden"}),this.$boxes.length?(this.scrollHandler(),this.show()):void 0},this.mobileDevice()||this.init(),this},$.jackInTheBox.prototype.defaults={boxClass:"box",animateClass:"animated",offset:0},$.fn.jackInTheBox=function(t){return this.each(function(){var i;return void 0===$(this).data("jackInTheBox")?(i=new $.jackInTheBox(this,t),$(this).data("jackInTheBox",i)):void 0})}})}).call(this),$(function(){$("body").jackInTheBox()});