(self.webpackChunk=self.webpackChunk||[]).push([[398,894],{8398:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>u});var r=n(7486),a=n(8894),o=n(7294);function i(){return o.createElement(o.Fragment,null,o.createElement(a.default,null))}i.layout=function(t){return o.createElement(r.Z,{children:t})};const u=i},8894:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>i});var r=n(7294);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){a=!0,o=t}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const i=function(){var t=a((0,r.useState)(0),2),e=t[0],n=t[1],o=a((0,r.useState)(),2),i=o[0],u=o[1],c=a((0,r.useState)(!1),2),s=c[0],f=c[1],l=a((0,r.useState)(!1),2),h=l[0],d=l[1],g=a((0,r.useState)(!1),2),m=g[0],v=g[1],y=a((0,r.useState)(0),2),w=y[0],p=y[1],b=a((0,r.useState)(0),2),M=b[0],S=b[1],I=a((0,r.useState)(),2),P=I[0],E=I[1],O=a((0,r.useState)(),2),k=O[0],A=O[1],x=a((0,r.useState)({width:0,height:0,centerPos:{x:0,y:0}}),2),j=x[0],C=x[1];(0,r.useEffect)((function(){if(void 0!==i){var t=i.getContext("2d"),e=new Image;e.src="/images/wheelyGoodImage.png?653b5e380bf0c16b89d8b6c962950a35",e.onload=function(){t.drawImage(e,0,0,i.width,i.height)}}}));var D=function(t,e,n,r){return t>=n&&e<=r?Math.atan((t-n)/(r-e))*(180/Math.PI):t>n&&e>r?Math.atan((e-r)/(t-n))*(180/Math.PI)+90:t<=n&&e>r?Math.atan((n-t)/(e-r))*(180/Math.PI)+180:t<=n&&e<r?Math.atan((r-e)/(n-t))*(180/Math.PI)+270:void 0};return r.createElement("div",{className:"w-full h-full",onMouseMove:function(t){s&&n(function(t,e){var n=D(t,e,j.centerPos.x,j.centerPos.y)-M;k&&E(k);var r={time:Date.now(),degreesOfMovement:n};return A(r),n}(t.pageX,t.pageY))},onMouseUp:function(t){f(!1),function(){if(k){var t=k.degreesOfMovement-P.degreesOfMovement;d(!(t<0));var e=100/(Math.abs(t)/360*100),n=k.time-P.time;p(n/1e3*e),v(!0)}}()}},r.createElement("canvas",{style:m?{animation:"".concat(h?"spin-clockwise ":"spin-anti-clockwise "," ").concat(w,"s linear infinite")}:{transform:"rotate(".concat(e,"deg)")},className:"m-10",ref:function(t){return u(t)},onMouseDown:function(t){if(!m){f(!0),E({time:Date.now(),degreesOfMovement:0});var e=t.target.offsetLeft+t.target.width/2,n=t.target.offsetTop+t.target.height/2;0===j.width&&C({width:t.target.width,height:t.target.height,centerPos:{x:e,y:n}}),S(D(t.pageX,t.pageY,e,n))}},width:750,height:750}))}}}]);