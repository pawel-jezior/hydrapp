!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("service-worker.js").then((function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}),(function(e){console.log("ServiceWorker registration failed: ",e)}))}));var o,r=document.querySelector(".main__counter--js"),c=document.querySelector(".main__button-add--js"),i=document.querySelector(".main__button-subtract--js"),l=(new Date).toISOString().slice(0,10);console.log(l),console.log(r.innerHTML),l?(o=Number(localStorage.getItem("key")),r.innerHTML="".concat(o),console.log("ELSE: "+r.innerHTML)):(o=0,localStorage.setItem("key",o),r.innerHTML="".concat(o),console.log("IF: "+r.innerHTML)),c.addEventListener("click",(function(){console.log("+1"),o+=1,localStorage.setItem("key",o),r.innerHTML="".concat(localStorage.getItem("key"))})),i.addEventListener("click",(function(){o>=1&&(console.log("-1"),o-=1,localStorage.setItem("key",o),r.innerHTML="".concat(localStorage.getItem("key")))}))}]);