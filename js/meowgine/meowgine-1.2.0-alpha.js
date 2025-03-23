!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.mg=e():t.mg=e()}(window,(function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=7)}([function(t,e){function i(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var n=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,r=[{key:"norm",value:function(t,e,i){return(t-e)/(i-e)}},{key:"lerp",value:function(t,e,i){return(i-e)*t+e}},{key:"clamp",value:function(t,e,i){return Math.min(Math.max(t,e),i)}},{key:"distance",value:function(t,e){var i=Math.abs(e.x-t.x),n=Math.abs(e.y-t.y);return Math.sqrt(Math.pow(i,2)+Math.pow(n,2))}},{key:"distanceXY",value:function(t,e,i,n){var r=Math.abs(i-t),o=Math.abs(n-e);return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}},{key:"inRange",value:function(t,e,i){return t>=Math.min(e,i)&&t<=Math.max(e,i)}},{key:"rangeIntersect",value:function(t,e,i,n){return Math.max(t,e)>=Math.min(i,n)&&Math.min(t,e)<=Math.max(i,n)}},{key:"circleIntersect",value:function(t,e){return this.distance(t,e)<=t.radius+e.radius}},{key:"circlePointIntersect",value:function(t,e,i){return this.distanceXY(t,e,i.x,i.y)<i.radius}},{key:"rectIntersect",value:function(t,e){return this.rangeIntersect(t.x,t.x+t.width,e.x,e.x+e.width)&&this.rangeIntersect(t.y,t.y+t.height,e.y,e.y+e.height)}},{key:"rectPointIntersect",value:function(t,e,i){return this.inRange(t,i.x,i.x+i.width)&&this.inRange(e,i.y,i.y+i.height)}},{key:"circleRectIntersect",value:function(t,e){var i=Math.abs(t.x-e.x-e.width/2),n=Math.abs(t.y-e.y-e.height/2),r=i-e.width/2,o=n-e.height/2;return!(i>e.width/2+t.radius||n>e.height/2+t.radius||!(i<=e.width/2||n<=e.height/2||Math.pow(r,2)+Math.pow(o,2)<=Math.pow(t.radius,2)))}},{key:"randomRange",value:function(t,e){return t+Math.random()*(e-t)}},{key:"randomInt",value:function(t,e){return Math.floor(t+Math.random()*(e-t))}},{key:"weightedRandom",value:function(t){for(var e=0,i=0;i<t.length;i++)e+=t[i].chance;for(var n=Math.random()*e,r=0;r<t.length;r++){var o=t[r];if(n<o.chance)return o.value;n-=o.chance}}},{key:"shuffleArray",value:function(t){for(var e=t.length-1;e>0;e--){var i=Math.floor(Math.random()*e),n=t[e];t[e]=t[i],t[i]=n}return t}},{key:"map",value:function(t,e,i,n,r){return this.lerp(this.norm(t,e,i),n,r)}},{key:"degToRad",value:function(t){return t*Math.PI/180}},{key:"radToDeg",value:function(t){return t*(180/Math.PI)}},{key:"roundToPlaces",value:function(t,e){var i=Math.pow(10,e);return Math.round(t*i)/i}}],(n=null)&&i(e.prototype,n),r&&i(e,r),t}();t.exports=n},function(t,e){function i(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var n=function(){function t(e,i,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=document.querySelector(e),this.container=document.querySelector(i),this.aspectRatioWidth=n||1,this.aspectRatioHeight=r||1}var e,n,r;return e=t,(n=[{key:"context",get:function(){return this.element.getContext("2d")}},{key:"width",get:function(){return this.element.width},set:function(t){this.element.width=t}},{key:"height",get:function(){return this.element.height},set:function(t){this.element.height=t}},{key:"x0",get:function(){return this.element.offsetLeft}},{key:"y0",get:function(){return this.element.offsetTop}},{key:"containerWidth",get:function(){return this.container.offsetWidth}},{key:"containerHeight",get:function(){return this.container.offsetHeight}},{key:"clear",value:function(){this.context.clearRect(0,0,this.width,this.height)}},{key:"resize",value:function(t){switch(t){case"aspect":this._resizeByAspect();break;case"size":this.width=this.containerWidth,this.height=this.containerHeight;break;default:this._resizeByAspect()}}},{key:"_resizeByAspect",value:function(){this.aspectRatioWidth>this.aspectRatioHeight?(this.width=this.containerWidth,this.height=this.containerWidth*this.aspectRatioHeight/this.aspectRatioWidth):(this.width=this.containerWidth*this.aspectRatioWidth/this.aspectRatioHeight,this.height=this.containerWidth)}},{key:"vwToPx",value:function(t){return mg.Utilities.map(t,0,100,0,this.width)}},{key:"vhToPx",value:function(t){return mg.Utilities.map(t,0,100,0,this.height)}},{key:"vminToPx",value:function(t){return mg.Utilities.map(t,0,100,0,Math.min(this.width,this.height))}},{key:"vmaxToPx",value:function(t){return mg.Utilities.map(t,0,100,0,Math.max(this.width,this.height))}},{key:"pxToVw",value:function(t){return mg.Utilities.map(t,0,this.width,0,100)}},{key:"pxToVh",value:function(t){return mg.Utilities.map(t,0,this.height,0,100)}},{key:"pxToVmin",value:function(t){return mg.Utilities.map(t,0,Math.min(this.width,this.height),0,100)}},{key:"pxToVmax",value:function(t){return mg.Utilities.map(t,0,Math.max(this.width,this.height),0,100)}},{key:"enableImageSmoothing",value:function(t){this.context.imageSmoothingEnabled=t}}])&&i(e.prototype,n),r&&i(e,r),t}();t.exports=n},function(t,e){function i(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var n=function(){function t(e,i,n,r,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=i,this.vx=Math.cos(r)*n,this.vy=Math.sin(r)*n,this.gravity=o||0,this.radius=0,this.mass=1,this.bounce=-1,this.friction=1,this.springs=[],this.gravitations=[]}var e,n,r;return e=t,(n=[{key:"speed",get:function(){return Math.sqrt(Math.pow(this.vx,2)+Math.pow(this.vy,2))},set:function(t){this.vx=Math.cos(this.direction)*t,this.vy=Math.sin(this.direction)*t}},{key:"direction",get:function(){return Math.atan2(this.vy,this.vx)},set:function(t){this.vx=Math.cos(t)*this.speed,this.vy=Math.sin(t)*this.speed}},{key:"update",value:function(){this._handleSprings(),this._handleGravitations(),this.vx*=this.friction,this.vy*=this.friction,this.vy+=this.gravity,this.x+=this.vx,this.y+=this.vy}},{key:"accelerate",value:function(t,e){this.vx+=t,this.vy+=e}},{key:"angleTo",value:function(t){return Math.atan2(t.y-this.y,t.x-this.x)}},{key:"distanceTo",value:function(t){var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(Math.pow(e,2)+Math.pow(i,2))}},{key:"addSpring",value:function(t,e,i){this.removeSpring(t),this.springs.push({p:t,k:e,length:i||0})}},{key:"removeSpring",value:function(t){for(var e=this.springs.length-1;e>=0;e--)if(t===this.springs[e].p)return void this.springs.splice(e,1)}},{key:"_handleSprings",value:function(){for(var t=this.springs.length-1;t>=0;t--){var e=this.springs[t];this._springTo(e.p,e.k,e.length)}}},{key:"_springTo",value:function(t,e,i){var n=t.x-this.x,r=t.y-this.y,o=Math.sqrt(Math.pow(n,2)+Math.pow(r,2)),a=(o-i||0)*e;this.vx+=n/o*a,this.vy+=r/o*a}},{key:"addGravitation",value:function(t){this.removeGravitation(t),this.gravitations.push(t)}},{key:"removeGravitation",value:function(t){for(var e=this.gravitations.length-1;e>=0;e--)if(t===this.gravitations[e])return void this.gravitations.splice(e,1)}},{key:"_handleGravitations",value:function(){for(var t=this.gravitations.length-1;t>=0;t--)this._gravitateTo(this.gravitations[t])}},{key:"_gravitateTo",value:function(t){var e=t.x-this.x,i=t.y-this.y,n=Math.pow(e,2)+Math.pow(i,2),r=Math.sqrt(n),o=t.mass/n,a=e/r*o,s=i/r*o;this.vx+=a,this.vy+=s}}])&&i(e.prototype,n),r&&i(e,r),t}();t.exports=n},function(t,e){function i(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var n=function(){function t(e,i,n,r,o,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._image=new Image,this._image.src=e,this.size=i,this.speed=n,this.row=r,this.col=o,this.frames=a,this.x=0,this.y=0,this.scale=0,this.isPlaying=!0,this.currentCol=o,this._now=0}var e,n,r;return e=t,(n=[{key:"render",value:function(t){this._image.complete&&0!==this._image.naturalHeight&&(Date.now()-this._now>=1e3*this.speed&&this.isPlaying&&(this.currentCol+=1,this.currentCol>=this.col+this.frames&&(this.currentCol=this.col),this._now=Date.now()),t.context.save(),t.context.translate(t.vminToPx(this.x-this.scale/2),t.vminToPx(this.y-this.scale/2)),t.context.beginPath(),t.context.drawImage(this._image,this.currentCol*this.size,this.row*this.size,this.size,this.size,0,0,t.vminToPx(this.scale),t.vminToPx(this.scale)),t.context.restore())}}])&&i(e.prototype,n),r&&i(e,r),t}();t.exports=n},function(t,e){function i(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var n=function(){function t(e,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.color=e,this.outlineWidth=i,this.outlineColor=n,this.x=0,this.y=0,this.radius=0,this.isVisible=!0}var e,n,r;return e=t,(n=[{key:"render",value:function(t){this.isVisible&&(t.context.save(),t.context.translate(t.vminToPx(this.x),t.vminToPx(this.y)),t.context.beginPath(),t.context.arc(0,0,t.vminToPx(this.radius),0,2*Math.PI),this.color&&(t.context.fillStyle=this.color,t.context.fill()),this.outlineWidth&&(t.context.lineWidth=t.vminToPx(this.outlineWidth),t.context.strokeStyle=this.outlineColor,t.context.stroke()),t.context.restore())}}])&&i(e.prototype,n),r&&i(e,r),t}();t.exports=n},function(t,e){function i(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var n=function(){function t(e,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.color=e,this.outlineWidth=i,this.outlineColor=n,this.x=0,this.y=0,this.height=0,this.width=0,this.isVisible=!0}var e,n,r;return e=t,(n=[{key:"render",value:function(t){this.isVisible&&(t.context.save(),t.context.translate(t.vminToPx(this.x-this.width/2),t.vminToPx(this.y-this.height/2)),t.context.beginPath(),t.context.rect(0,0,t.vminToPx(this.width),t.vminToPx(this.height)),this.color&&(t.context.fillStyle=this.color,t.context.fill()),this.outlineWidth&&(t.context.lineWidth=t.vminToPx(this.outlineWidth),t.context.strokeStyle=this.outlineColor,t.context.stroke()),t.context.restore())}}])&&i(e.prototype,n),r&&i(e,r),t}();t.exports=n},function(t,e){function i(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var n=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.outlineWidth=e,this.outlineColor=i,this.x0=0,this.y0=0,this.x1=0,this.y1=0}var e,n,r;return e=t,(n=[{key:"render",value:function(t){this.outlineWidth&&(t.context.save(),t.context.beginPath(),t.context.moveTo(t.vminToPx(this.x0),t.vminToPx(this.y0)),t.context.lineTo(t.vminToPx(this.x1),t.vminToPx(this.y1)),t.context.lineWidth=t.vminToPx(this.outlineWidth),t.context.strokeStyle=this.outlineColor,t.context.stroke(),t.context.restore())}}])&&i(e.prototype,n),r&&i(e,r),t}();t.exports=n},function(t,e,i){"use strict";i.r(e);var n=i(0),r=i.n(n);i.d(e,"Utilities",(function(){return r.a}));var o=i(1),a=i.n(o);i.d(e,"Viewbox",(function(){return a.a}));var s=i(2),h=i.n(s);i.d(e,"Particle",(function(){return h.a}));var u=i(3),c=i.n(u);i.d(e,"Sprite",(function(){return c.a}));var l=i(4),f=i.n(l);i.d(e,"Circle",(function(){return f.a}));var v=i(5),y=i.n(v);i.d(e,"Rect",(function(){return y.a}));var d=i(6),g=i.n(d);i.d(e,"Line",(function(){return g.a}))}])}));
