(function(a,b){'object'==typeof exports&&'object'==typeof module?module.exports=b():'function'==typeof define&&define.amd?define('Button',[],b):'object'==typeof exports?exports.Button=b():a.Button=b()})('undefined'==typeof self?this:self,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='./',b(b.s=24)}([function(a){a.exports=require('react')},function(a){a.exports=require('prop-types')},,function(a){function b(a,b){var d=a[1]||'',e=a[3];if(!e)return d;if(b&&'function'==typeof btoa){var f=c(e),g=e.sources.map(function(a){return'/*# sourceURL='+e.sourceRoot+a+' */'});return[d].concat(g).concat([f]).join('\n')}return[d].join('\n')}function c(a){var b=btoa(unescape(encodeURIComponent(JSON.stringify(a))));return'/*# '+('sourceMappingURL=data:application/json;charset=utf-8;base64,'+b)+' */'}a.exports=function(a){var c=[];return c.toString=function(){return this.map(function(c){var d=b(c,a);return c[2]?'@media '+c[2]+'{'+d+'}':d}).join('')},c.i=function(a,b){'string'==typeof a&&(a=[[null,a,'']]);for(var d,e={},f=0;f<this.length;f++)d=this[f][0],'number'==typeof d&&(e[d]=!0);for(f=0;f<a.length;f++){var g=a[f];'number'==typeof g[0]&&e[g[0]]||(b&&!g[2]?g[2]=b:b&&(g[2]='('+g[2]+') and ('+b+')'),c.push(g))}},c}},function(a,b,c){function d(a,b){for(var c=0;c<a.length;c++){var d=a[c],e=o[d.id];if(e){e.refs++;for(var f=0;f<e.parts.length;f++)e.parts[f](d.parts[f]);for(;f<d.parts.length;f++)e.parts.push(k(d.parts[f],b))}else{for(var g=[],f=0;f<d.parts.length;f++)g.push(k(d.parts[f],b));o[d.id]={id:d.id,refs:1,parts:g}}}}function e(a,b){for(var c=[],d={},e=0;e<a.length;e++){var f=a[e],g=b.base?f[0]+b.base:f[0],h=f[1],i=f[2],j=f[3],k={css:h,media:i,sourceMap:j};d[g]?d[g].parts.push(k):c.push(d[g]={id:g,parts:[k]})}return c}function f(a,b){var c=r(a.insertInto);if(!c)throw new Error('Couldn\'t find a style target. This probably means that the value for the \'insertInto\' parameter is invalid.');var d=u[u.length-1];if('top'===a.insertAt)d?d.nextSibling?c.insertBefore(b,d.nextSibling):c.appendChild(b):c.insertBefore(b,c.firstChild),u.push(b);else if('bottom'===a.insertAt)c.appendChild(b);else if('object'==typeof a.insertAt&&a.insertAt.before){var e=r(a.insertInto+' '+a.insertAt.before);c.insertBefore(b,e)}else throw new Error('[Style Loader]\n\n Invalid value for parameter \'insertAt\' (\'options.insertAt\') found.\n Must be \'top\', \'bottom\', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n')}function g(a){if(null===a.parentNode)return!1;a.parentNode.removeChild(a);var b=u.indexOf(a);0<=b&&u.splice(b,1)}function h(a){var b=document.createElement('style');return a.attrs.type='text/css',j(b,a.attrs),f(a,b),b}function i(a){var b=document.createElement('link');return a.attrs.type='text/css',a.attrs.rel='stylesheet',j(b,a.attrs),f(a,b),b}function j(a,b){Object.keys(b).forEach(function(c){a.setAttribute(c,b[c])})}function k(a,b){var c,d,e,f;if(b.transform&&a.css)if(f=b.transform(a.css),f)a.css=f;else return function(){};if(b.singleton){var j=t++;c=s||(s=h(b)),d=l.bind(null,c,j,!1),e=l.bind(null,c,j,!0)}else a.sourceMap&&'function'==typeof URL&&'function'==typeof URL.createObjectURL&&'function'==typeof URL.revokeObjectURL&&'function'==typeof Blob&&'function'==typeof btoa?(c=i(b),d=n.bind(null,c,b),e=function(){g(c),c.href&&URL.revokeObjectURL(c.href)}):(c=h(b),d=m.bind(null,c),e=function(){g(c)});return d(a),function(b){if(b){if(b.css===a.css&&b.media===a.media&&b.sourceMap===a.sourceMap)return;d(a=b)}else e()}}function l(a,b,c,d){var e=c?'':d.css;if(a.styleSheet)a.styleSheet.cssText=w(b,e);else{var f=document.createTextNode(e),g=a.childNodes;g[b]&&a.removeChild(g[b]),g.length?a.insertBefore(f,g[b]):a.appendChild(f)}}function m(a,b){var c=b.css,d=b.media;if(d&&a.setAttribute('media',d),a.styleSheet)a.styleSheet.cssText=c;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(c))}}function n(a,b,c){var d=c.css,e=c.sourceMap,f=b.convertToAbsoluteUrls===void 0&&e;(b.convertToAbsoluteUrls||f)&&(d=v(d)),e&&(d+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+' */');var g=new Blob([d],{type:'text/css'}),h=a.href;a.href=URL.createObjectURL(g),h&&URL.revokeObjectURL(h)}var o={},p=function(a){var b;return function(){return'undefined'==typeof b&&(b=a.apply(this,arguments)),b}}(function(){return window&&document&&document.all&&!window.atob}),q=function(a){return document.querySelector(a)},r=function(){var a={};return function(b){if('function'==typeof b)return b();if('undefined'==typeof a[b]){var c=q.call(this,b);if(window.HTMLIFrameElement&&c instanceof window.HTMLIFrameElement)try{c=c.contentDocument.head}catch(a){c=null}a[b]=c}return a[b]}}(),s=null,t=0,u=[],v=c(9);a.exports=function(a,b){if('undefined'!=typeof DEBUG&&DEBUG&&'object'!=typeof document)throw new Error('The style-loader cannot be used in a non-browser environment');b=b||{},b.attrs='object'==typeof b.attrs?b.attrs:{},b.singleton||'boolean'==typeof b.singleton||(b.singleton=p()),b.insertInto||(b.insertInto='head'),b.insertAt||(b.insertAt='bottom');var c=e(a,b);return d(c,b),function(a){for(var f=[],g=0;g<c.length;g++){var h=c[g],i=o[h.id];i.refs--,f.push(i)}if(a){var k=e(a,b);d(k,b)}for(var i,g=0;g<f.length;g++)if(i=f[g],0===i.refs){for(var l=0;l<i.parts.length;l++)i.parts[l]();delete o[i.id]}}};var w=function(){var a=[];return function(b,c){return a[b]=c,a.filter(Boolean).join('\n')}}()},,,function(a,b,c){'use strict';function d(a,b){var c={};for(var d in a)0<=b.indexOf(d)||Object.prototype.hasOwnProperty.call(a,d)&&(c[d]=a[d]);return c}Object.defineProperty(b,'__esModule',{value:!0});var e=c(0),f=c.n(e),g=c(1),h=c.n(g),i=c(10),j=c.n(i),k=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};const l=(a)=>{let b=a.children,c=d(a,['children']);return Object(e.createElement)('button',k({className:j.a.button},c),b)};l.propTypes={children:h.a.string},l.defaultProps={children:'Button'};c.d(b,'Button',function(){return l});b['default']=l},,function(a){a.exports=function(a){var b='undefined'!=typeof window&&window.location;if(!b)throw new Error('fixUrls requires window.location');if(!a||'string'!=typeof a)return a;var c=b.protocol+'//'+b.host,d=c+b.pathname.replace(/\/[^\/]*$/,'/'),e=a.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(a,b){var e=b.trim().replace(/^"(.*)"$/,function(a,b){return b}).replace(/^'(.*)'$/,function(a,b){return b});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(e))return a;var f;return f=0===e.indexOf('//')?e:0===e.indexOf('/')?c+e:d+e.replace(/^\.\//,''),'url('+JSON.stringify(f)+')'});return e}},function(a,b,c){var d=c(11);'string'==typeof d&&(d=[[a.i,d,'']]);var e,f={hmr:!0};f.transform=e,f.insertInto=void 0;c(4)(d,f);d.locals&&(a.exports=d.locals),!1},function(a,b,c){b=a.exports=c(3)(!1),b.push([a.i,'.rge__styles__button___127GD {\n  outline: none;\n  cursor: pointer;\n  display: inline-block;\n  width: 100%;\n  background: #FFFFFF;\n  border: none;\n  border-bottom: 1px solid #d4d6d8;\n  border-radius: 0;\n  font-size: 13px;\n  line-height: 17px;\n  color: #333333;\n  text-align: left;\n  padding: 10px;\n  position: relative;\n  top: 1px; }\n  .rge__styles__button___127GD:disabled {\n    opacity: 0.5; }\n','']),b.locals={button:'rge__styles__button___127GD'}},,,,,,,,,,,,,function(a,b,c){a.exports=c(7)}])});
//# sourceMappingURL=Button.js.map