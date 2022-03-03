/*! For license information please see app-admin.js.LICENSE.txt */
(()=>{var e={544:(e,t)=>{var a,r,l;"undefined"!=typeof self&&self,r=[],a=function(){return function(e,t,a){var r,l,n,o,i,c,s,u,p,d,f,h,v,y,b=t.createElement("canvas").getContext("2d"),g={r:0,g:0,b:0,h:0,s:0,v:0,a:1},m={el:"[data-coloris]",parent:null,theme:"default",themeMode:"light",wrap:!0,margin:2,format:"hex",formatToggle:!1,swatches:[],swatchesOnly:!1,alpha:!0,focusInput:!0,autoClose:!1,clearButton:{show:!1,label:"Clear"},a11y:{open:"Open color picker",close:"Close color picker",marker:"Saturation: {s}. Brightness: {v}.",hueSlider:"Hue slider",alphaSlider:"Opacity slider",input:"Color value field",format:"Color format",swatch:"Color swatch",instruction:"Saturation and brightness selector. Use up, down, left and right arrow keys to select."}};function w(a){if("object"==typeof a)for(var n in a)switch(n){case"el":k(a.el),!1!==a.wrap&&x(a.el);break;case"parent":m.parent=t.querySelector(a.parent),m.parent&&m.parent.appendChild(r);break;case"themeMode":m.themeMode=a.themeMode,"auto"===a.themeMode&&e.matchMedia&&e.matchMedia("(prefers-color-scheme: dark)").matches&&(m.themeMode="dark");case"theme":a.theme&&(m.theme=a.theme),r.className="clr-picker clr-"+m.theme+" clr-"+m.themeMode;break;case"margin":a.margin*=1,m.margin=isNaN(a.margin)?m.margin:a.margin;break;case"wrap":a.el&&a.wrap&&x(a.el);break;case"formatToggle":q("clr-format").style.display=a.formatToggle?"block":"none",a.formatToggle&&(m.format="auto");break;case"swatches":Array.isArray(a.swatches)&&function(){var e=[];a.swatches.forEach((function(t,a){e.push('<button id="clr-swatch-'+a+'" aria-labelledby="clr-swatch-label clr-swatch-'+a+'" style="color: '+t+';">'+t+"</button>")})),e.length&&(q("clr-swatches").innerHTML="<div>"+e.join("")+"</div>")}();break;case"swatchesOnly":m.swatchesOnly=!!a.swatchesOnly,r.setAttribute("data-minimal",m.swatchesOnly),m.swatchesOnly&&(m.autoClose=!0);break;case"alpha":m.alpha=!!a.alpha,r.setAttribute("data-alpha",m.alpha);break;case"clearButton":var o="none";a.clearButton.show&&(o="block"),a.clearButton.label&&(s.innerHTML=a.clearButton.label),s.style.display=o;break;case"a11y":var p=a.a11y,f=!1;if("object"==typeof p)for(var h in p)p[h]&&m.a11y[h]&&(m.a11y[h]=p[h],f=!0);if(f){var v=q("clr-open-label"),y=q("clr-swatch-label");v.innerHTML=m.a11y.open,y.innerHTML=m.a11y.swatch,i.setAttribute("aria-label",m.a11y.close),u.setAttribute("aria-label",m.a11y.hueSlider),d.setAttribute("aria-label",m.a11y.alphaSlider),c.setAttribute("aria-label",m.a11y.input),l.setAttribute("aria-label",m.a11y.instruction)}default:m[n]=a[n]}}function k(a){U(t,"click",a,(function(a){var o=m.parent,i=a.target.getBoundingClientRect(),s=e.scrollY,u={left:!1,top:!1},p={x:0,y:0},d=i.x,f=s+i.y+i.height+m.margin;h=a.target,y=h.value,v=S(y),r.classList.add("clr-open");var b=r.offsetWidth,g=r.offsetHeight;if(o){var w=e.getComputedStyle(o),k=parseFloat(w.marginTop),x=parseFloat(w.borderTopWidth);(p=o.getBoundingClientRect()).y+=x+s,d-=p.x,f-=p.y,d+b>o.clientWidth&&(d+=i.width-b,u.left=!0),f+g>o.clientHeight-k&&(f-=i.height+g+2*m.margin,u.top=!0),f+=o.scrollTop}else d+b>t.documentElement.clientWidth&&(d+=i.width-b,u.left=!0),f+g-s>t.documentElement.clientHeight&&(f=s+i.y-g-m.margin,u.top=!0);r.classList.toggle("clr-left",u.left),r.classList.toggle("clr-top",u.top),r.style.left=d+"px",r.style.top=f+"px",n={width:l.offsetWidth,height:l.offsetHeight,x:r.offsetLeft+l.offsetLeft+p.x,y:r.offsetTop+l.offsetTop+p.y},L(y),m.focusInput&&c.focus({preventScroll:!0})})),U(t,"input",a,(function(e){var t=e.target.parentNode;t.classList.contains("clr-field")&&(t.style.color=e.target.value)}))}function x(e){t.querySelectorAll(e).forEach((function(e){var a=e.parentNode;if(!a.classList.contains("clr-field")){var r=t.createElement("div");r.innerHTML='<button aria-labelledby="clr-open-label"></button>',a.insertBefore(r,e),r.setAttribute("class","clr-field"),r.style.color=e.value,r.appendChild(e)}}))}function E(e){h&&(e&&y!==h.value&&(h.value=y,h.dispatchEvent(new Event("input",{bubbles:!0}))),y!==h.value&&h.dispatchEvent(new Event("change",{bubbles:!0})),r.classList.remove("clr-open"),m.focusInput&&h.focus({preventScroll:!0}),h=null)}function L(e){var t=Y(e),a=W(t);M(a.s,a.v),B(t,a),u.value=a.h,r.style.color="hsl("+a.h+", 100%, 50%)",p.style.left=a.h/360*100+"%",o.style.left=n.width*a.s/100+"px",o.style.top=n.height-n.height*a.v/100+"px",d.value=100*a.a,f.style.left=100*a.a+"%"}function S(e){var t=e.substring(0,3).toLowerCase();return"rgb"===t||"hsl"===t?t:"hex"}function T(e){h&&(h.value=void 0!==e?e:c.value,h.dispatchEvent(new Event("input",{bubbles:!0})))}function A(e,t){var a={h:1*u.value,s:e/n.width*100,v:100-t/n.height*100,a:d.value/100},r=j(a);M(a.s,a.v),B(r,a),T()}function M(e,t){var a=m.a11y.marker;e=1*e.toFixed(1),t=1*t.toFixed(1),a=(a=a.replace("{s}",e)).replace("{v}",t),o.setAttribute("aria-label",a)}function C(e){return{pageX:e.changedTouches?e.changedTouches[0].pageX:e.pageX,pageY:e.changedTouches?e.changedTouches[0].pageY:e.pageY}}function H(e){var t=C(e),a=t.pageX-n.x,r=t.pageY-n.y;m.parent&&(r+=m.parent.scrollTop),a=a<0?0:a>n.width?n.width:a,r=r<0?0:r>n.height?n.height:r,o.style.left=a+"px",o.style.top=r+"px",A(a,r),e.preventDefault(),e.stopPropagation()}function O(e,t){var a=1*o.style.left.replace("px","")+e,r=1*o.style.top.replace("px","")+t;o.style.left=a+"px",o.style.top=r+"px",A(a,r)}function B(e,a){void 0===e&&(e={}),void 0===a&&(a={});var r=m.format;for(var n in e)g[n]=e[n];for(var s in a)g[s]=a[s];var u=F(g),p=u.substring(0,7);switch(o.style.color=p,f.parentNode.style.color=p,f.style.color=u,i.style.color=u,l.style.display="none",l.offsetHeight,l.style.display="",f.nextElementSibling.style.display="none",f.nextElementSibling.offsetHeight,f.nextElementSibling.style.display="","mixed"===r?r=1===g.a?"hex":"rgb":"auto"===r&&(r=v),r){case"hex":c.value=u;break;case"rgb":c.value=P(g);break;case"hsl":c.value=R(I(g))}t.querySelector('.clr-format [value="'+r+'"]').checked=!0}function N(){var e=1*u.value,t=1*o.style.left.replace("px",""),a=1*o.style.top.replace("px","");r.style.color="hsl("+e+", 100%, 50%)",p.style.left=e/360*100+"%",A(t,a)}function D(){var e=d.value/100;f.style.left=100*e+"%",B({a:e}),T()}function j(e){var t=e.s/100,r=e.v/100,l=t*r,n=e.h/60,o=l*(1-a.abs(n%2-1)),i=r-l;l+=i,o+=i;var c=a.floor(n)%6,s=[l,o,i,i,o,l][c],u=[o,l,l,o,i,i][c],p=[i,i,o,l,l,o][c];return{r:a.round(255*s),g:a.round(255*u),b:a.round(255*p),a:e.a}}function I(e){var t,r=e.v/100,l=r*(1-e.s/100/2);return l>0&&l<1&&(t=a.round((r-l)/a.min(l,1-l)*100)),{h:e.h,s:t||0,l:a.round(100*l),a:e.a}}function W(e){var t=e.r/255,r=e.g/255,l=e.b/255,n=a.max(t,r,l),o=n-a.min(t,r,l),i=n,c=0,s=0;return o&&(n===t&&(c=(r-l)/o),n===r&&(c=2+(l-t)/o),n===l&&(c=4+(t-r)/o),n&&(s=o/n)),{h:(c=a.floor(60*c))<0?c+360:c,s:a.round(100*s),v:a.round(100*i),a:e.a}}function Y(e){var t,a=/^((rgba)|rgb)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i;return b.fillStyle="#000",b.fillStyle=e,(t=a.exec(b.fillStyle))?{r:1*t[3],g:1*t[4],b:1*t[5],a:1*t[6]}:{r:(t=b.fillStyle.replace("#","").match(/.{2}/g).map((function(e){return parseInt(e,16)})))[0],g:t[1],b:t[2],a:1}}function F(e){var t=e.r.toString(16),a=e.g.toString(16),r=e.b.toString(16),l="";if(e.r<16&&(t="0"+t),e.g<16&&(a="0"+a),e.b<16&&(r="0"+r),m.alpha&&e.a<1){var n=255*e.a|0;l=n.toString(16),n<16&&(l="0"+l)}return"#"+t+a+r+l}function P(e){return m.alpha&&1!==e.a?"rgba("+e.r+", "+e.g+", "+e.b+", "+e.a+")":"rgb("+e.r+", "+e.g+", "+e.b+")"}function R(e){return m.alpha&&1!==e.a?"hsla("+e.h+", "+e.s+"%, "+e.l+"%, "+e.a+")":"hsl("+e.h+", "+e.s+"%, "+e.l+"%)"}function X(){(r=t.createElement("div")).setAttribute("id","clr-picker"),r.className="clr-picker",r.innerHTML='<input id="clr-color-value" class="clr-color" type="text" value="" aria-label="'+m.a11y.input+'"><div id="clr-color-area" class="clr-gradient" role="application" aria-label="'+m.a11y.instruction+'"><div id="clr-color-marker" class="clr-marker" tabindex="0"></div></div><div class="clr-hue"><input id="clr-hue-slider" type="range" min="0" max="360" step="1" aria-label="'+m.a11y.hueSlider+'"><div id="clr-hue-marker"></div></div><div class="clr-alpha"><input id="clr-alpha-slider" type="range" min="0" max="100" step="1" aria-label="'+m.a11y.alphaSlider+'"><div id="clr-alpha-marker"></div><span></span></div><div id="clr-format" class="clr-format"><fieldset class="clr-segmented"><legend>'+m.a11y.format+'</legend><input id="clr-f1" type="radio" name="clr-format" value="hex"><label for="clr-f1">Hex</label><input id="clr-f2" type="radio" name="clr-format" value="rgb"><label for="clr-f2">RGB</label><input id="clr-f3" type="radio" name="clr-format" value="hsl"><label for="clr-f3">HSL</label><span></span></fieldset></div><div id="clr-swatches" class="clr-swatches"></div><button id="clr-clear" class="clr-clear">'+m.clearButton.label+'</button><button id="clr-color-preview" class="clr-preview" aria-label="'+m.a11y.close+'"></button><span id="clr-open-label" hidden>'+m.a11y.open+'</span><span id="clr-swatch-label" hidden>'+m.a11y.swatch+"</span>",t.body.appendChild(r),l=q("clr-color-area"),o=q("clr-color-marker"),s=q("clr-clear"),i=q("clr-color-preview"),c=q("clr-color-value"),u=q("clr-hue-slider"),p=q("clr-hue-marker"),d=q("clr-alpha-slider"),f=q("clr-alpha-marker"),k(m.el),x(m.el),U(r,"mousedown",(function(e){r.classList.remove("clr-keyboard-nav"),e.stopPropagation()})),U(l,"mousedown",(function(e){U(t,"mousemove",H)})),U(l,"touchstart",(function(e){t.addEventListener("touchmove",H,{passive:!1})})),U(o,"mousedown",(function(e){U(t,"mousemove",H)})),U(o,"touchstart",(function(e){t.addEventListener("touchmove",H,{passive:!1})})),U(c,"change",(function(e){L(c.value),T()})),U(s,"click",(function(e){T(""),E()})),U(i,"click",(function(e){T(),E()})),U(t,"click",".clr-format input",(function(e){v=e.target.value,B(),T()})),U(r,"click",".clr-swatches button",(function(e){L(e.target.textContent),T(),m.autoClose&&E()})),U(t,"mouseup",(function(e){t.removeEventListener("mousemove",H)})),U(t,"touchend",(function(e){t.removeEventListener("touchmove",H)})),U(t,"mousedown",(function(e){r.classList.remove("clr-keyboard-nav"),E()})),U(t,"keydown",(function(e){"Escape"===e.key?E(!0):"Tab"===e.key&&r.classList.add("clr-keyboard-nav")})),U(t,"click",".clr-field button",(function(e){e.target.nextElementSibling.dispatchEvent(new Event("click",{bubbles:!0}))})),U(o,"keydown",(function(e){var t={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0]};-1!==Object.keys(t).indexOf(e.key)&&(O.apply(void 0,t[e.key]),e.preventDefault())})),U(l,"click",H),U(u,"input",N),U(d,"input",D)}function q(e){return t.getElementById(e)}function U(e,t,a,r){var l=Element.prototype.matches||Element.prototype.msMatchesSelector;"string"==typeof a?e.addEventListener(t,(function(e){l.call(e.target,a)&&r.call(e.target,e)})):(r=a,e.addEventListener(t,r))}function _(e,a){a=void 0!==a?a:[],"loading"!==t.readyState?e.apply(void 0,a):t.addEventListener("DOMContentLoaded",(function(){e.apply(void 0,a)}))}void 0!==NodeList&&NodeList.prototype&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach);var G=function(){var e={init:X,set:w,wrap:x,close:E};function t(e){_((function(){e&&("string"==typeof e?k(e):w(e))}))}var a=function(a){t[a]=function(){for(var t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];_(e[a],r)}};for(var r in e)a(r);return t}();return G}(window,document,Math)},void 0===(l="function"==typeof a?a.apply(t,r):a)||(e.exports=l)}},t={};function a(r){var l=t[r];if(void 0!==l)return l.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,a),n.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=a(544),t=a.n(e);t().init(),t()({theme:"large",alpha:!1})})()})();