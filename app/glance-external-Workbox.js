!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var n in o)("object"==typeof exports?exports:e)[n]=o[n]}}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1707)}({1707:function(e,t,o){(function(t){t.Glance||(t.Glance={}),t.Glance.externals||(t.Glance.externals={}),e.exports=t.Glance.externals.Workbox=o(1708)}).call(t,o(18))},1708:function(e,t,o){"use strict";"serviceWorker"in navigator&&"http:"!==document.location.protocol&&window.addEventListener("load",function(){navigator.serviceWorker.register("./serviceWorker.js").then(function(e){console.log("Workbox service worker successful with scope:",e.scope)}).catch(function(e){console.error("Workbox service worker failed to register",e)})})},18:function(e,t){var o;o=function(){return this}();try{o=o||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(o=window)}e.exports=o}})});