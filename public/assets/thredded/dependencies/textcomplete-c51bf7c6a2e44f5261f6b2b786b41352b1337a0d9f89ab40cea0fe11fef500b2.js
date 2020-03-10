!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=11)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),s=(function(e){e&&e.__esModule}(o),function(){function e(t,n,i){r(this,e),this.data=t,this.term=n,this.strategy=i}return i(e,[{key:"replace",value:function(e,t){var n=this.strategy.replace(this.data);if(null!==n){Array.isArray(n)&&(t=n[1]+t,n=n[0]);var r=this.strategy.matchText(e);if(r)return n=n.replace(/\$&/g,r[0]).replace(/\$(\d+)/g,function(e,t){return r[parseInt(t,10)]}),[[e.slice(0,r.index),n,e.slice(r.index+r[0].length)].join(""),t]}}},{key:"render",value:function(){return this.strategy.template(this.data,this.term)}}]),e}());t["default"]=s},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){return e}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(12),u=function(e){return e&&e.__esModule?e:{"default":e}}(s),a=function(){function e(t){r(this,e),this.props=t,this.cache=t.cache?{}:null}return o(e,[{key:"destroy",value:function(){return this.cache=null,this}},{key:"buildQuery",value:function(e){if("function"==typeof this.props.context){var t=this.props.context(e);if("string"==typeof t)e=t;else if(!t)return null}var n=this.matchText(e);return n?new u["default"](this,n[this.index],n):null}},{key:"search",value:function(e,t,n){this.cache?this.searchWithCache(e,t,n):this.props.search(e,t,n)}},{key:"replace",value:function(e){return this.props.replace(e)}},{key:"searchWithCache",value:function(e,t,n){var r=this;this.cache&&this.cache[e]?t(this.cache[e]):this.props.search(e,function(n){r.cache&&(r.cache[e]=n),t(n)},n)}},{key:"matchText",value:function(e){return"function"==typeof this.match?this.match(e):e.match(this.match)}},{key:"match",get:function(){return this.props.match}},{key:"index",get:function(){return"number"==typeof this.props.index?this.props.index:2}},{key:"template",get:function(){return this.props.template||i}}]),e}();t["default"]=a},function(e){"use strict";function t(){}function n(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function r(){this._events=new t,this._eventsCount=0}var i=Object.prototype.hasOwnProperty,o="~";Object.create&&(t.prototype=Object.create(null),(new t).__proto__||(o=!1)),r.prototype.eventNames=function(){var e,t,n=[];if(0===this._eventsCount)return n;for(t in e=this._events)i.call(e,t)&&n.push(o?t.slice(1):t);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},r.prototype.listeners=function(e,t){var n=o?o+e:e,r=this._events[n];if(t)return!!r;if(!r)return[];if(r.fn)return[r.fn];for(var i=0,s=r.length,u=new Array(s);i<s;i++)u[i]=r[i].fn;return u},r.prototype.emit=function(e,t,n,r,i,s){var u=o?o+e:e;if(!this._events[u])return!1;var a,l,c=this._events[u],h=arguments.length;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),h){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,n),!0;case 4:return c.fn.call(c.context,t,n,r),!0;case 5:return c.fn.call(c.context,t,n,r,i),!0;case 6:return c.fn.call(c.context,t,n,r,i,s),!0}for(l=1,a=new Array(h-1);l<h;l++)a[l-1]=arguments[l];c.fn.apply(c.context,a)}else{var f,d=c.length;for(l=0;l<d;l++)switch(c[l].once&&this.removeListener(e,c[l].fn,void 0,!0),h){case 1:c[l].fn.call(c[l].context);break;case 2:c[l].fn.call(c[l].context,t);break;case 3:c[l].fn.call(c[l].context,t,n);break;case 4:c[l].fn.call(c[l].context,t,n,r);break;default:if(!a)for(f=1,a=new Array(h-1);f<h;f++)a[f-1]=arguments[f];c[l].fn.apply(c[l].context,a)}}return!0},r.prototype.on=function(e,t,r){var i=new n(t,r||this),s=o?o+e:e;return this._events[s]?this._events[s].fn?this._events[s]=[this._events[s],i]:this._events[s].push(i):(this._events[s]=i,this._eventsCount++),this},r.prototype.once=function(e,t,r){var i=new n(t,r||this,!0),s=o?o+e:e;return this._events[s]?this._events[s].fn?this._events[s]=[this._events[s],i]:this._events[s].push(i):(this._events[s]=i,this._eventsCount++),this},r.prototype.removeListener=function(e,n,r,i){var s=o?o+e:e;if(!this._events[s])return this;if(!n)return 0==--this._eventsCount?this._events=new t:delete this._events[s],this;var u=this._events[s];if(u.fn)u.fn!==n||i&&!u.once||r&&u.context!==r||(0==--this._eventsCount?this._events=new t:delete this._events[s]);else{for(var a=0,l=[],c=u.length;a<c;a++)(u[a].fn!==n||i&&!u[a].once||r&&u[a].context!==r)&&l.push(u[a]);l.length?this._events[s]=1===l.length?l[0]:l:0==--this._eventsCount?this._events=new t:delete this._events[s]}return this},r.prototype.removeAllListeners=function(e){var n;return e?(n=o?o+e:e,this._events[n]&&(0==--this._eventsCount?this._events=new t:delete this._events[n])):(this._events=new t,this._eventsCount=0),this},r.prototype.off=r.prototype.removeListener,r.prototype.addListener=r.prototype.on,r.prototype.setMaxListeners=function(){return this},r.prefixed=o,r.EventEmitter=r,e.exports=r},function(e,t){"use strict";function n(e){var t=e.getBoundingClientRect(),n=e.ownerDocument,r=n.defaultView,i=n.documentElement,o={top:t.top+r.pageYOffset,left:t.left+r.pageXOffset};return i&&(o.top-=i.clientTop,o.left-=i.clientLeft),o}function r(e){return e>=o&&e<=s}function i(e){var t=window.getComputedStyle(e);if(r(t.lineHeight.charCodeAt(0)))return r(t.lineHeight.charCodeAt(t.lineHeight.length-1))?parseFloat(t.lineHeight)*parseFloat(t.fontSize):parseFloat(t.lineHeight);var n=document.body;if(!n)return 0;var i=document.createElement(e.nodeName);i.innerHTML="&nbsp;",i.style.fontSize=t.fontSize,i.style.fontFamily=t.fontFamily,n.appendChild(i);var o=i.offsetHeight;return n.removeChild(i),o}Object.defineProperty(t,"__esModule",{value:!0}),t.calculateElementOffset=n,t.getLineHeightPx=i;var o=(t.createCustomEvent=function(){return"function"==typeof window.CustomEvent?function(e,t){return new document.defaultView.CustomEvent(e,{cancelable:t&&t.cancelable||!1,detail:t&&t.detail||void 0})}:function(e,t){var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,t&&t.cancelable||!1,t&&t.detail||void 0),n}}(),"0".charCodeAt(0)),s="9".charCodeAt(0)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),l=r(a),c=n(10),h=r(c),f=n(0),d=(r(f),n(3)),p="dropdown-menu textcomplete-dropdown",v=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));n.shown=!1,n.items=[],n.footer=e.footer,n.header=e.header,n.maxCount=e.maxCount||10,n.el.className=e.className||p,n.rotate=!e.hasOwnProperty("rotate")||e.rotate,n.placement=e.placement;var r=e.style;return r&&Object.keys(r).forEach(function(e){n.el.style[e]=r[e]}),n}return s(t,e),u(t,null,[{key:"createElement",value:function(){var e=document.createElement("ul"),t=e.style;t.display="none",t.position="absolute",t.zIndex="10000";var n=document.body;return n&&n.appendChild(e),e}}]),u(t,[{key:"destroy",value:function(){var e=this.el.parentNode;return e&&e.removeChild(this.el),this.clear()._el=null,this}},{key:"render",value:function(e,t){var n=(0,d.createCustomEvent)("render",{cancelable:!0});if(this.emit("render",n),n.defaultPrevented)return this;var r=e.map(function(e){return e.data}),i=e.slice(0,this.maxCount||e.length).map(function(e){return new h["default"](e)});return this.clear().setStrategyId(e[0]).renderEdge(r,"header").append(i).renderEdge(r,"footer").setOffset(t).show(),this.emit("rendered",(0,d.createCustomEvent)("rendered")),this}},{key:"deactivate",value:function(){return this.hide().clear()}},{key:"select",value:function(e){var t={searchResult:e.searchResult},n=(0,d.createCustomEvent)("select",{cancelable:!0,detail:t});return this.emit("select",n),n.defaultPrevented?this:(this.deactivate(),this.emit("selected",(0,d.createCustomEvent)("selected",{detail:t})),this)}},{key:"up",value:function(e){return this.shown?this.moveActiveItem("prev",e):this}},{key:"down",value:function(e){return this.shown?this.moveActiveItem("next",e):this}},{key:"getActiveItem",value:function(){return this.items.find(function(e){return e.active})}},{key:"append",value:function(e){var t=this,n=document.createDocumentFragment();return e.forEach(function(e){t.items.push(e),e.appended(t),n.appendChild(e.el)}),this.el.appendChild(n),this}},{key:"setOffset",value:function(e){if(e.left?this.el.style.left=e.left+"px":e.right&&(this.el.style.right=e.right+"px"),this.isPlacementTop()){var t=document.documentElement;t&&(this.el.style.bottom=t.clientHeight-e.top+e.lineHeight+"px")}else this.el.style.top=e.top+"px";return this}},{key:"show",value:function(){if(!this.shown){var e=(0,d.createCustomEvent)("show",{cancelable:!0});if(this.emit("show",e),e.defaultPrevented)return this;this.el.style.display="block",this.shown=!0,this.emit("shown",(0,d.createCustomEvent)("shown"))}return this}},{key:"hide",value:function(){if(this.shown){var e=(0,d.createCustomEvent)("hide",{cancelable:!0});if(this.emit("hide",e),e.defaultPrevented)return this;this.el.style.display="none",this.shown=!1,this.emit("hidden",(0,d.createCustomEvent)("hidden"))}return this}},{key:"clear",value:function(){return this.el.innerHTML="",this.items.forEach(function(e){return e.destroy()}),this.items=[],this}},{key:"moveActiveItem",value:function(e,t){var n=this.getActiveItem(),r=void 0;return r=n?n[e]:"next"===e?this.items[0]:this.items[this.items.length-1],r&&(r.activate(),t.preventDefault()),this}},{key:"setStrategyId",value:function(e){var t=e&&e.strategy.props.id;return t?this.el.setAttribute("data-strategy",t):this.el.removeAttribute("data-strategy"),this}},{key:"renderEdge",value:function(e,t){var n=("header"===t?this.header:this.footer)||"",r="function"==typeof n?n(e):n,i=document.createElement("li");return i.classList.add("textcomplete-"+t),i.innerHTML=r,this.el.appendChild(i),this}},{key:"isPlacementTop",value:function(){return"top"===this.placement}},{key:"el",get:function(){return this._el||(this._el=t.createElement()),this._el}}]),t}(l["default"]);t["default"]=v},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),l=r(a),c=n(3),h=n(0),f=(r(h),function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),u(t,[{key:"destroy",value:function(){return this}},{key:"applySearchResult",value:function(){throw new Error("Not implemented.")}},{key:"getCursorOffset",value:function(){throw new Error("Not implemented.")}},{key:"getBeforeCursor",value:function(){throw new Error("Not implemented.")}},{key:"getAfterCursor",value:function(){throw new Error("Not implemented.")}},{key:"emitMoveEvent",value:function(e){var t=(0,c.createCustomEvent)("move",{cancelable:!0,detail:{code:e}});return this.emit("move",t),t}},{key:"emitEnterEvent",value:function(){var e=(0,c.createCustomEvent)("enter",{cancelable:!0});return this.emit("enter",e),e}},{key:"emitChangeEvent",value:function(){var e=(0,c.createCustomEvent)("change",{detail:{beforeCursor:this.getBeforeCursor()}});return this.emit("change",e),e}},{key:"emitEscEvent",value:function(){var e=(0,c.createCustomEvent)("esc",{cancelable:!0});return this.emit("esc",e),e}},{key:"getCode",value:function(e){return 8===e.keyCode?"BS":9===e.keyCode?"ENTER":13===e.keyCode?"ENTER":16===e.keyCode?"META":17===e.keyCode?"META":18===e.keyCode?"META":27===e.keyCode?"ESC":38===e.keyCode?"UP":40===e.keyCode?"DOWN":78===e.keyCode&&e.ctrlKey?"DOWN":80===e.keyCode&&e.ctrlKey?"UP":91===e.keyCode?"META":93===e.keyCode?"META":"OTHER"}}]),t}(l["default"]));t["default"]=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function e(t,n,r){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,r)}if("value"in i)return i.value;var s=i.get;return void 0!==s?s.call(r):void 0},l=n(14),c=r(l),h=n(5),f=r(h),d=n(3),p=n(0),v=(r(p),n(13)),y=["onInput","onKeydown"],m=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.el=e,y.forEach(function(e){n[e]=n[e].bind(n)}),n.startListening(),n}return s(t,e),u(t,[{key:"destroy",value:function(){return a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this),this.stopListening(),this.el=null,this}},{key:"applySearchResult",value:function(e){var t=e.replace(this.getBeforeCursor(),this.getAfterCursor());this.el.focus(),Array.isArray(t)&&((0,c["default"])(this.el,t[0],t[1]),this.el.dispatchEvent(new Event("input")))}},{key:"getCursorOffset",value:function(){var e=(0,d.calculateElementOffset)(this.el),t=this.getElScroll(),n=this.getCursorPosition(),r=(0,d.getLineHeightPx)(this.el),i=e.top-t.top+n.top+r,o=e.left-t.left+n.left;return"rtl"!==this.el.dir?{top:i,left:o,lineHeight:r}:{top:i,right:document.documentElement?document.documentElement.clientWidth-o:0,lineHeight:r}}},{key:"getBeforeCursor",value:function(){return this.el.value.substring(0,this.el.selectionEnd)}},{key:"getAfterCursor",value:function(){return this.el.value.substring(this.el.selectionEnd)}},{key:"getElScroll",value:function(){return{top:this.el.scrollTop,left:this.el.scrollLeft}}},{key:"getCursorPosition",value:function(){return v(this.el,this.el.selectionEnd)}},{key:"onInput",value:function(){this.emitChangeEvent()}},{key:"onKeydown",value:function(e){var t=this.getCode(e),n=void 0;"UP"===t||"DOWN"===t?n=this.emitMoveEvent(t):"ENTER"===t?n=this.emitEnterEvent():"ESC"===t&&(n=this.emitEscEvent()),n&&n.defaultPrevented&&e.preventDefault()}},{key:"startListening",value:function(){this.el.addEventListener("input",this.onInput),this.el.addEventListener("keydown",this.onKeydown)}},{key:"stopListening",value:function(){this.el.removeEventListener("input",this.onInput),this.el.removeEventListener("keydown",this.onKeydown)}}]),t}(f["default"]);t["default"]=m},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(9),l=r(a),c=n(5),h=(r(c),n(4)),f=r(h),d=n(1),p=r(d),v=n(0),y=(r(v),n(2)),m=r(y),g=["handleChange","handleEnter","handleEsc","handleHit","handleMove","handleSelect"],b=function(e){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.completer=new l["default"],r.isQueryInFlight=!1,r.nextPendingQuery=null,r.dropdown=new f["default"](n.dropdown||{}),r.editor=e,r.options=n,g.forEach(function(e){r[e]=r[e].bind(r)}),r.startListening(),r}return s(t,e),u(t,[{key:"destroy",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.completer.destroy(),this.dropdown.destroy(),e&&this.editor.destroy(),this.stopListening(),this}},{key:"register",value:function(e){var t=this;return e.forEach(function(e){t.completer.registerStrategy(new p["default"](e))}),this}},{key:"trigger",value:function(e){return this.isQueryInFlight?this.nextPendingQuery=e:(this.isQueryInFlight=!0,this.nextPendingQuery=null,this.completer.run(e)),this}},{key:"handleHit",value:function(e){var t=e.searchResults;t.length?this.dropdown.render(t,this.editor.getCursorOffset()):this.dropdown.deactivate(),this.isQueryInFlight=!1,null!==this.nextPendingQuery&&this.trigger(this.nextPendingQuery)}},{key:"handleMove",value:function(e){"UP"===e.detail.code?this.dropdown.up(e):this.dropdown.down(e)}},{key:"handleEnter",value:function(e){var t=this.dropdown.getActiveItem();t&&(this.dropdown.select(t),e.preventDefault())}},{key:"handleEsc",value:function(e){this.dropdown.shown&&(this.dropdown.deactivate(),e.preventDefault())}},{key:"handleChange",value:function(e){this.trigger(e.detail.beforeCursor)}},{key:"handleSelect",value:function(e){this.emit("select",e),e.defaultPrevented||this.editor.applySearchResult(e.detail.searchResult)}},{key:"startListening",value:function(){var e=this;this.editor.on("move",this.handleMove).on("enter",this.handleEnter).on("esc",this.handleEsc).on("change",this.handleChange),this.dropdown.on("select",this.handleSelect),["show","shown","render","rendered","selected","hidden","hide"].forEach(function(t){e.dropdown.on(t,function(){return e.emit(t)})}),this.completer.on("hit",this.handleHit)}},{key:"stopListening",value:function(){this.completer.removeAllListeners(),this.dropdown.removeAllListeners(),this.editor.removeListener("move",this.handleMove).removeListener("enter",this.handleEnter).removeListener("esc",this.handleEsc).removeListener("change",this.handleChange)}}]),t}(m["default"]);t["default"]=b},function(e){var t;t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),l=r(a),c=n(1),h=(r(c),n(0)),f=(r(h),["handleQueryResult"]),d=function(e){function t(){i(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.strategies=[],f.forEach(function(t){e[t]=e[t].bind(e)}),e}return s(t,e),u(t,[{key:"destroy",value:function(){return this.strategies.forEach(function(e){return e.destroy()}),this}},{key:"registerStrategy",value:function(e){return this.strategies.push(e),this}},{key:"run",value:function(e){var t=this.extractQuery(e);t?t.execute(this.handleQueryResult):this.handleQueryResult([])}},{key:"extractQuery",value:function(e){for(var t=0;t<this.strategies.length;t++){var n=this.strategies[t].buildQuery(e);if(n)return n}return null}},{key:"handleQueryResult",value:function(e){this.emit("hit",{searchResults:e})}}]),t}(l["default"]);t["default"]=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.CLASS_NAME=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(4),u=(r(s),n(0)),a=(r(u),t.CLASS_NAME="textcomplete-item"),l=a+" active",c=["onClick","onMouseover"],h=function(){function e(t){var n=this;i(this,e),this.searchResult=t,this.active=!1,c.forEach(function(e){n[e]=n[e].bind(n)})}return o(e,[{key:"destroy",value:function(){this.el.removeEventListener("mousedown",this.onClick,!1),this.el.removeEventListener("mouseover",this.onMouseover,!1),this.el.removeEventListener("touchstart",this.onClick,!1),this._el=null}},{key:"appended",value:function(e){this.dropdown=e,this.siblings=e.items,this.index=this.siblings.length-1}},{key:"activate",value:function(){if(!this.active){var e=this.dropdown.getActiveItem();e&&e.deactivate(),this.active=!0,this.el.className=l}return this}},{key:"deactivate",value:function(){return this.active&&(this.active=!1,this.el.className=a),this}},{key:"onClick",value:function(e){e.preventDefault(),this.dropdown.select(this)}},{key:"onMouseover",value:function(){this.activate()}},{key:"el",get:function(){if(this._el)return this._el;var e=document.createElement("li");e.className=this.active?l:a;var t=document.createElement("a");return t.innerHTML=this.searchResult.render(),e.appendChild(t),this._el=e,e.addEventListener("mousedown",this.onClick),e.addEventListener("mouseover",this.onMouseover),e.addEventListener("touchstart",this.onClick),e}},{key:"next",get:function(){var e=void 0;if(this.index===this.siblings.length-1){if(!this.dropdown.rotate)return null;e=0}else e=this.index+1;return this.siblings[e]}},{key:"prev",get:function(){var e=void 0;if(0===this.index){if(!this.dropdown.rotate)return null;e=this.siblings.length-1}else e=this.index-1;return this.siblings[e]}}]),e}();t["default"]=h},function(e,t,n){"use strict";(function(e){function t(e){return e&&e.__esModule?e:{"default":e}}var r=n(7),i=t(r),o=n(6),s=t(o),u=void 0;u=e.Textcomplete&&e.Textcomplete.editors?e.Textcomplete.editors:{},u.Textarea=s["default"],e.Textcomplete=i["default"],e.Textcomplete.editors=u}).call(t,n(8))},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),u=r(s),a=n(1),l=(r(a),function(){function e(t,n,r){i(this,e),this.strategy=t,this.term=n,this.match=r}return o(e,[{key:"execute",value:function(e){var t=this;this.strategy.search(this.term,function(n){e(n.map(function(e){return new u["default"](e,t.term,t.strategy)}))},this.match)}}]),e}());t["default"]=l},function(e){!function(){function t(e,t,o){if(!r)throw new Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");var s=o&&o.debug||!1;if(s){var u=document.querySelector("#input-textarea-caret-position-mirror-div");u&&u.parentNode.removeChild(u)}var a=document.createElement("div");a.id="input-textarea-caret-position-mirror-div",document.body.appendChild(a);var l=a.style,c=window.getComputedStyle?getComputedStyle(e):e.currentStyle;l.whiteSpace="pre-wrap","INPUT"!==e.nodeName&&(l.wordWrap="break-word"),l.position="absolute",s||(l.visibility="hidden"),n.forEach(function(e){l[e]=c[e]}),i?e.scrollHeight>parseInt(c.height)&&(l.overflowY="scroll"):l.overflow="hidden",a.textContent=e.value.substring(0,t),"INPUT"===e.nodeName&&(a.textContent=a.textContent.replace(/\s/g,"\xc2 "));var h=document.createElement("span");h.textContent=e.value.substring(t)||".",a.appendChild(h);var f={top:h.offsetTop+parseInt(c.borderTopWidth),left:h.offsetLeft+parseInt(c.borderLeftWidth)};return s?h.style.backgroundColor="#aaa":document.body.removeChild(a),f}var n=["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","borderStyle","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing","tabSize","MozTabSize"],r="undefined"!=typeof window,i=r&&null!=window.mozInnerScreenX;void 0!==e&&void 0!==e.exports?e.exports=t:r&&(window.getCaretCoordinates=t)}()},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t,n){for(var r=e.value,i=t+(n||""),o=document.activeElement,s=0,u=0;r[s]===i[s];)s++;for(;r[r.length-u-1]===i[i.length-u-1];)u++;s=Math.min(s,r.length-u),e.setSelectionRange(s,r.length-u);var a=i.substring(s,i.length-u);return e.focus(),document.execCommand("insertText",!1,a)||(e.value=i),o&&o.focus(),e.setSelectionRange(t.length,t.length),e}}]);