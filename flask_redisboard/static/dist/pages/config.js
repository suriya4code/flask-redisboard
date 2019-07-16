!function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=14)}({1:function(t,e,o){(function(o){var n,i,s;void 0!==o||window||this.window||this.global,i=[],n=function(t){"use strict";var e={},o="iziToast",n=(document.querySelector("body"),!!/Mobi/.test(navigator.userAgent)),i=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),s="undefined"!=typeof InstallTrigger,a="ontouchstart"in document.documentElement,r=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],l=568,d={};e.children={};var c={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),"function"!=typeof window.CustomEvent){var u=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),o};u.prototype=window.Event.prototype,window.CustomEvent=u}var p=function(t,e,o){if("[object Object]"===Object.prototype.toString.call(t))for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(o,t[n],n,t);else if(t)for(var i=0,s=t.length;s>i;i++)e.call(o,t[i],i,t)},m=function(t,e){var o={};return p(t,function(e,n){o[n]=t[n]}),p(e,function(t,n){o[n]=e[n]}),o},v=function(t){var e=document.createDocumentFragment(),o=document.createElement("div");for(o.innerHTML=t;o.firstChild;)e.appendChild(o.firstChild);return e},g={move:function(t,e,n,a){var r,l=180;0!==a&&(t.classList.add(o+"-dragged"),t.style.transform="translateX("+a+"px)",a>0?.3>(r=(l-a)/l)&&e.hide(m(n,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),t,"drag"):.3>(r=(l+a)/l)&&e.hide(m(n,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),t,"drag"),t.style.opacity=r,.3>r&&((i||s)&&(t.style.left=a+"px"),t.parentNode.style.opacity=.3,this.stopMoving(t,null)))},startMoving:function(t,e,o,n){n=n||window.event;var i=a?n.touches[0].clientX:n.clientX,s=t.style.transform.replace("px)","");s=s.replace("translateX(","");var r=i-s;o.transitionIn&&t.classList.remove(o.transitionIn),o.transitionInMobile&&t.classList.remove(o.transitionInMobile),t.style.transition="",a?document.ontouchmove=function(n){n.preventDefault();var i=(n=n||window.event).touches[0].clientX,s=i-r;g.move(t,e,o,s)}:document.onmousemove=function(n){n.preventDefault();var i=(n=n||window.event).clientX,s=i-r;g.move(t,e,o,s)}},stopMoving:function(t,e){a?document.ontouchmove=function(){}:document.onmousemove=function(){},t.style.opacity="",t.style.transform="",t.classList.contains(o+"-dragged")&&(t.classList.remove(o+"-dragged"),t.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){t.style.transition=""},400))}};return e.setSetting=function(t,o,n){e.children[t][o]=n},e.getSetting=function(t,o){return e.children[t][o]},e.destroy=function(){p(document.querySelectorAll("."+o+"-overlay"),function(t,e){t.remove()}),p(document.querySelectorAll("."+o+"-wrapper"),function(t,e){t.remove()}),p(document.querySelectorAll("."+o),function(t,e){t.remove()}),this.children={},document.removeEventListener(o+"-opened",{},!1),document.removeEventListener(o+"-opening",{},!1),document.removeEventListener(o+"-closing",{},!1),document.removeEventListener(o+"-closed",{},!1),document.removeEventListener("keyup",{},!1),d={}},e.settings=function(t){e.destroy(),d=t,c=m(c,t||{})},p({info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},function(t,o){e[o]=function(e){var o=m(d,e||{});o=m(t,o||{}),this.show(o)}}),e.progress=function(t,e,n){var i=this,s=e.getAttribute("data-iziToast-ref"),a=m(this.children[s],t||{}),r=e.querySelector("."+o+"-progressbar div");return{start:function(){void 0===a.time.REMAINING&&(e.classList.remove(o+"-reseted"),null!==r&&(r.style.transition="width "+a.timeout+"ms "+a.progressBarEasing,r.style.width="0%"),a.time.START=(new Date).getTime(),a.time.END=a.time.START+a.timeout,a.time.TIMER=setTimeout(function(){clearTimeout(a.time.TIMER),e.classList.contains(o+"-closing")||(i.hide(a,e,"timeout"),"function"==typeof n&&n.apply(i))},a.timeout),i.setSetting(s,"time",a.time))},pause:function(){if(void 0!==a.time.START&&!e.classList.contains(o+"-paused")&&!e.classList.contains(o+"-reseted")){if(e.classList.add(o+"-paused"),a.time.REMAINING=a.time.END-(new Date).getTime(),clearTimeout(a.time.TIMER),i.setSetting(s,"time",a.time),null!==r){var t=window.getComputedStyle(r),l=t.getPropertyValue("width");r.style.transition="none",r.style.width=l}"function"==typeof n&&setTimeout(function(){n.apply(i)},10)}},resume:function(){void 0!==a.time.REMAINING?(e.classList.remove(o+"-paused"),null!==r&&(r.style.transition="width "+a.time.REMAINING+"ms "+a.progressBarEasing,r.style.width="0%"),a.time.END=(new Date).getTime()+a.time.REMAINING,a.time.TIMER=setTimeout(function(){clearTimeout(a.time.TIMER),e.classList.contains(o+"-closing")||(i.hide(a,e,"timeout"),"function"==typeof n&&n.apply(i))},a.time.REMAINING),i.setSetting(s,"time",a.time)):this.start()},reset:function(){clearTimeout(a.time.TIMER),delete a.time.REMAINING,i.setSetting(s,"time",a.time),e.classList.add(o+"-reseted"),e.classList.remove(o+"-paused"),null!==r&&(r.style.transition="none",r.style.width="100%"),"function"==typeof n&&setTimeout(function(){n.apply(i)},10)}}},e.hide=function(t,e,i){"object"!=typeof e&&(e=document.querySelector(e));var s=this,a=m(this.children[e.getAttribute("data-iziToast-ref")],t||{});a.closedBy=i||null,delete a.time.REMAINING,e.classList.add(o+"-closing"),function(){var t=document.querySelector("."+o+"-overlay");if(null!==t){var e=t.getAttribute("data-iziToast-ref"),n=(e=e.split(",")).indexOf(String(a.ref));-1!==n&&e.splice(n,1),t.setAttribute("data-iziToast-ref",e.join()),0===e.length&&(t.classList.remove("fadeIn"),t.classList.add("fadeOut"),setTimeout(function(){t.remove()},700))}}(),a.transitionIn&&e.classList.remove(a.transitionIn),a.transitionInMobile&&e.classList.remove(a.transitionInMobile),n||window.innerWidth<=l?a.transitionOutMobile&&e.classList.add(a.transitionOutMobile):a.transitionOut&&e.classList.add(a.transitionOut);var r=e.parentNode.offsetHeight;e.parentNode.style.height=r+"px",e.style.pointerEvents="none",(!n||window.innerWidth>l)&&(e.parentNode.style.transitionDelay="0.2s");try{var d=new CustomEvent(o+"-closing",{detail:a,bubbles:!0,cancelable:!0});document.dispatchEvent(d)}catch(t){console.warn(t)}setTimeout(function(){e.parentNode.style.height="0px",e.parentNode.style.overflow="",setTimeout(function(){delete s.children[a.ref],e.parentNode.remove();try{var t=new CustomEvent(o+"-closed",{detail:a,bubbles:!0,cancelable:!0});document.dispatchEvent(t)}catch(t){console.warn(t)}void 0!==a.onClosed&&a.onClosed.apply(null,[a,e,i])},1e3)},200),void 0!==a.onClosing&&a.onClosing.apply(null,[a,e,i])},e.show=function(t){var i=this,s=m(d,t||{});if((s=m(c,s)).time={},null===s.id&&(s.id=function(t){return btoa(encodeURIComponent(t)).replace(/=/g,"")}(s.title+s.message+s.color)),1===s.displayMode||"once"==s.displayMode)try{if(document.querySelectorAll("."+o+"#"+s.id).length>0)return!1}catch(t){console.warn("["+o+"] Could not find an element with this selector: #"+s.id+". Try to set an valid id.")}if(2===s.displayMode||"replace"==s.displayMode)try{p(document.querySelectorAll("."+o+"#"+s.id),function(t,e){i.hide(s,t,"replaced")})}catch(t){console.warn("["+o+"] Could not find an element with this selector: #"+s.id+". Try to set an valid id.")}s.ref=(new Date).getTime()+Math.floor(1e7*Math.random()+1),e.children[s.ref]=s;var u,f={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:s.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};f.toast.setAttribute("data-iziToast-ref",s.ref),f.toast.appendChild(f.toastBody),f.toastCapsule.appendChild(f.toast),function(){if(f.toast.classList.add(o),f.toast.classList.add(o+"-opening"),f.toastCapsule.classList.add(o+"-capsule"),f.toastBody.classList.add(o+"-body"),f.toastTexts.classList.add(o+"-texts"),n||window.innerWidth<=l?s.transitionInMobile&&f.toast.classList.add(s.transitionInMobile):s.transitionIn&&f.toast.classList.add(s.transitionIn),s.class){var t=s.class.split(" ");p(t,function(t,e){f.toast.classList.add(t)})}s.id&&(f.toast.id=s.id),s.rtl&&(f.toast.classList.add(o+"-rtl"),f.toast.setAttribute("dir","rtl")),s.layout>1&&f.toast.classList.add(o+"-layout"+s.layout),s.balloon&&f.toast.classList.add(o+"-balloon"),s.maxWidth&&(isNaN(s.maxWidth)?f.toast.style.maxWidth=s.maxWidth:f.toast.style.maxWidth=s.maxWidth+"px"),""===s.theme&&"light"===s.theme||f.toast.classList.add(o+"-theme-"+s.theme),s.color&&(function(t){return"#"==t.substring(0,1)||"rgb"==t.substring(0,3)||"hsl"==t.substring(0,3)}(s.color)?f.toast.style.background=s.color:f.toast.classList.add(o+"-color-"+s.color)),s.backgroundColor&&(f.toast.style.background=s.backgroundColor,s.balloon&&(f.toast.style.borderColor=s.backgroundColor))}(),s.image&&(f.cover.classList.add(o+"-cover"),f.cover.style.width=s.imageWidth+"px",function(t){try{return btoa(atob(t))==t}catch(t){return!1}}(s.image.replace(/ /g,""))?f.cover.style.backgroundImage="url(data:image/png;base64,"+s.image.replace(/ /g,"")+")":f.cover.style.backgroundImage="url("+s.image+")",s.rtl?f.toastBody.style.marginRight=s.imageWidth+10+"px":f.toastBody.style.marginLeft=s.imageWidth+10+"px",f.toast.appendChild(f.cover)),s.close?(f.buttonClose=document.createElement("button"),f.buttonClose.type="button",f.buttonClose.classList.add(o+"-close"),f.buttonClose.addEventListener("click",function(t){t.target,i.hide(s,f.toast,"button")}),f.toast.appendChild(f.buttonClose)):s.rtl?f.toast.style.paddingLeft="18px":f.toast.style.paddingRight="18px",s.progressBar&&(f.progressBar=document.createElement("div"),f.progressBarDiv=document.createElement("div"),f.progressBar.classList.add(o+"-progressbar"),f.progressBarDiv.style.background=s.progressBarColor,f.progressBar.appendChild(f.progressBarDiv),f.toast.appendChild(f.progressBar)),s.timeout&&(s.pauseOnHover&&!s.resetOnHover&&(f.toast.addEventListener("mouseenter",function(t){i.progress(s,f.toast).pause()}),f.toast.addEventListener("mouseleave",function(t){i.progress(s,f.toast).resume()})),s.resetOnHover&&(f.toast.addEventListener("mouseenter",function(t){i.progress(s,f.toast).reset()}),f.toast.addEventListener("mouseleave",function(t){i.progress(s,f.toast).start()}))),s.iconUrl?(f.icon.setAttribute("class",o+"-icon"),f.icon.setAttribute("src",s.iconUrl)):s.icon&&(f.icon.setAttribute("class",o+"-icon "+s.icon),s.iconText&&f.icon.appendChild(document.createTextNode(s.iconText)),s.iconColor&&(f.icon.style.color=s.iconColor)),(s.icon||s.iconUrl)&&(s.rtl?f.toastBody.style.paddingRight="33px":f.toastBody.style.paddingLeft="33px",f.toastBody.appendChild(f.icon)),s.title.length>0&&(f.strong=document.createElement("strong"),f.strong.classList.add(o+"-title"),f.strong.appendChild(v(s.title)),f.toastTexts.appendChild(f.strong),s.titleColor&&(f.strong.style.color=s.titleColor),s.titleSize&&(isNaN(s.titleSize)?f.strong.style.fontSize=s.titleSize:f.strong.style.fontSize=s.titleSize+"px"),s.titleLineHeight&&(isNaN(s.titleSize)?f.strong.style.lineHeight=s.titleLineHeight:f.strong.style.lineHeight=s.titleLineHeight+"px")),s.message.length>0&&(f.p=document.createElement("p"),f.p.classList.add(o+"-message"),f.p.appendChild(v(s.message)),f.toastTexts.appendChild(f.p),s.messageColor&&(f.p.style.color=s.messageColor),s.messageSize&&(isNaN(s.titleSize)?f.p.style.fontSize=s.messageSize:f.p.style.fontSize=s.messageSize+"px"),s.messageLineHeight&&(isNaN(s.titleSize)?f.p.style.lineHeight=s.messageLineHeight:f.p.style.lineHeight=s.messageLineHeight+"px")),s.title.length>0&&s.message.length>0&&(s.rtl?f.strong.style.marginLeft="10px":2===s.layout||s.rtl||(f.strong.style.marginRight="10px")),f.toastBody.appendChild(f.toastTexts),s.inputs.length>0&&(f.inputs.classList.add(o+"-inputs"),p(s.inputs,function(t,e){f.inputs.appendChild(v(t[0])),(u=f.inputs.childNodes)[e].classList.add(o+"-inputs-child"),t[3]&&setTimeout(function(){u[e].focus()},300),u[e].addEventListener(t[1],function(e){var o=t[2];return o(i,f.toast,this,e)})}),f.toastBody.appendChild(f.inputs)),s.buttons.length>0&&(f.buttons.classList.add(o+"-buttons"),p(s.buttons,function(t,e){f.buttons.appendChild(v(t[0]));var n=f.buttons.childNodes;n[e].classList.add(o+"-buttons-child"),t[2]&&setTimeout(function(){n[e].focus()},300),n[e].addEventListener("click",function(e){e.preventDefault();var o=t[1];return o(i,f.toast,this,e,u)})})),f.toastBody.appendChild(f.buttons),s.message.length>0&&(s.inputs.length>0||s.buttons.length>0)&&(f.p.style.marginBottom="0"),(s.inputs.length>0||s.buttons.length>0)&&(s.rtl?f.toastTexts.style.marginLeft="10px":f.toastTexts.style.marginRight="10px",s.inputs.length>0&&s.buttons.length>0&&(s.rtl?f.inputs.style.marginLeft="8px":f.inputs.style.marginRight="8px")),f.toastCapsule.style.visibility="hidden",setTimeout(function(){var t=f.toast.offsetHeight,e=f.toast.currentStyle||window.getComputedStyle(f.toast),o=e.marginTop;o=o.split("px"),o=parseInt(o[0]);var n=e.marginBottom;n=n.split("px"),n=parseInt(n[0]),f.toastCapsule.style.visibility="",f.toastCapsule.style.height=t+n+o+"px",setTimeout(function(){f.toastCapsule.style.height="auto",s.target&&(f.toastCapsule.style.overflow="visible")},500),s.timeout&&i.progress(s,f.toast).start()},100),function(){var t=s.position;if(s.target)f.wrapper=document.querySelector(s.target),f.wrapper.classList.add(o+"-target"),s.targetFirst?f.wrapper.insertBefore(f.toastCapsule,f.wrapper.firstChild):f.wrapper.appendChild(f.toastCapsule);else{if(-1==r.indexOf(s.position))return void console.warn("["+o+"] Incorrect position.\nIt can be › "+r);t=n||window.innerWidth<=l?"bottomLeft"==s.position||"bottomRight"==s.position||"bottomCenter"==s.position?o+"-wrapper-bottomCenter":"topLeft"==s.position||"topRight"==s.position||"topCenter"==s.position?o+"-wrapper-topCenter":o+"-wrapper-center":o+"-wrapper-"+t,f.wrapper=document.querySelector("."+o+"-wrapper."+t),f.wrapper||(f.wrapper=document.createElement("div"),f.wrapper.classList.add(o+"-wrapper"),f.wrapper.classList.add(t),document.body.appendChild(f.wrapper)),"topLeft"==s.position||"topCenter"==s.position||"topRight"==s.position?f.wrapper.insertBefore(f.toastCapsule,f.wrapper.firstChild):f.wrapper.appendChild(f.toastCapsule)}isNaN(s.zindex)?console.warn("["+o+"] Invalid zIndex."):f.wrapper.style.zIndex=s.zindex}(),s.overlay&&(null!==document.querySelector("."+o+"-overlay.fadeIn")?(f.overlay=document.querySelector("."+o+"-overlay"),f.overlay.setAttribute("data-iziToast-ref",f.overlay.getAttribute("data-iziToast-ref")+","+s.ref),isNaN(s.zindex)||null===s.zindex||(f.overlay.style.zIndex=s.zindex-1)):(f.overlay.classList.add(o+"-overlay"),f.overlay.classList.add("fadeIn"),f.overlay.style.background=s.overlayColor,f.overlay.setAttribute("data-iziToast-ref",s.ref),isNaN(s.zindex)||null===s.zindex||(f.overlay.style.zIndex=s.zindex-1),document.querySelector("body").appendChild(f.overlay)),s.overlayClose?(f.overlay.removeEventListener("click",{}),f.overlay.addEventListener("click",function(t){i.hide(s,f.toast,"overlay")})):f.overlay.removeEventListener("click",{})),function(){if(s.animateInside){f.toast.classList.add(o+"-animateInside");var t=[200,100,300];"bounceInLeft"!=s.transitionIn&&"bounceInRight"!=s.transitionIn||(t=[400,200,400]),s.title.length>0&&setTimeout(function(){f.strong.classList.add("slideIn")},t[0]),s.message.length>0&&setTimeout(function(){f.p.classList.add("slideIn")},t[1]),(s.icon||s.iconUrl)&&setTimeout(function(){f.icon.classList.add("revealIn")},t[2]);var e=150;s.buttons.length>0&&f.buttons&&setTimeout(function(){p(f.buttons.childNodes,function(t,o){setTimeout(function(){t.classList.add("revealIn")},e),e+=150})},s.inputs.length>0?150:0),s.inputs.length>0&&f.inputs&&(e=150,p(f.inputs.childNodes,function(t,o){setTimeout(function(){t.classList.add("revealIn")},e),e+=150}))}}(),s.onOpening.apply(null,[s,f.toast]);try{var y=new CustomEvent(o+"-opening",{detail:s,bubbles:!0,cancelable:!0});document.dispatchEvent(y)}catch(t){console.warn(t)}setTimeout(function(){f.toast.classList.remove(o+"-opening"),f.toast.classList.add(o+"-opened");try{var t=new CustomEvent(o+"-opened",{detail:s,bubbles:!0,cancelable:!0});document.dispatchEvent(t)}catch(t){console.warn(t)}s.onOpened.apply(null,[s,f.toast])},1e3),s.drag&&(a?(f.toast.addEventListener("touchstart",function(t){g.startMoving(this,i,s,t)},!1),f.toast.addEventListener("touchend",function(t){g.stopMoving(this,t)},!1)):(f.toast.addEventListener("mousedown",function(t){t.preventDefault(),g.startMoving(this,i,s,t)},!1),f.toast.addEventListener("mouseup",function(t){t.preventDefault(),g.stopMoving(this,t)},!1))),s.closeOnEscape&&document.addEventListener("keyup",function(t){27==(t=t||window.event).keyCode&&i.hide(s,f.toast,"esc")}),s.closeOnClick&&f.toast.addEventListener("click",function(t){i.hide(s,f.toast,"toast")}),i.toast=f.toast},e}(),void 0===(s="function"==typeof n?n.apply(e,i):n)||(t.exports=s)}).call(this,o(2))},14:function(t,e,o){"use strict";o.r(e);var n=o(1),i=o.n(n),s=function(t){0==t.code?i.a.success({title:"Modify Success",position:"topRight",timeout:3e3}):i.a.error({title:"Error!",position:"topRight",message:t.error})};window.$("#loglevel").editable({send:"always",source:[{value:"debug",text:"Debug"},{value:"verbose",text:"Verbose"},{value:"notice",text:"Notice"},{value:"warning",text:"Warning"}],success:s}),window.$("#maxmemory-policy").editable({send:"always",source:[{value:"allkeys-lfu",text:"allkeys-lfu"},{value:"allkeys-lru",text:"allkeys-lru"},{value:"allkeys-random",text:"allkeys-random"},{value:"noeviction",text:"noeviction"},{value:"volatile-lfu",text:"volatile-lfu"},{value:"volatile-lru",text:"volatile-lru"},{value:"volatile-random",text:"volatile-random"},{value:"volatile-ttl",text:"volatile-ttl"}],success:s}),window.$("#appendfsync").editable({send:"always",source:[{value:"always",text:"always"},{value:"everysec",text:"everysec"},{value:"no",text:"no"}],success:s}),window.$("#notify-keyspace-events").editable({send:"always",source:[{value:"K",text:"K-Keyspace events"},{value:"E",text:"E-Keyevent events"},{value:"g",text:"Generic commands"},{value:"$",text:"$-String commands"},{value:"l",text:"List commands"},{value:"s",text:"Set commands"},{value:"h",text:"Hash commands"},{value:"z",text:"Sorted set commands"},{value:"x",text:"Expired events"},{value:"e",text:"Evicted commands"},{value:"A",text:"Alias for g$lshzxe"}],success:s});window.$("#protected-mode,#stop-writes-on-bgsave-error,#rdbcompression,#slave-serve-stale-data,#slave-read-only, #repl-disable-tcp-nodelay, #repl-diskless-sync,#lazyfree-lazy-eviction,#lazyfree-lazy-expire,#lazyfree-lazy-server-del,#slave-lazy-flush,#no-appendfsync-on-rewrite,#aof-load-truncated,#aof-use-rdb-preamble,#appendonly,#cluster-require-full-coverage,#activedefrag, #activerehashing,#aof-rewrite-incremental-fsync").editable({send:"always",source:[{value:"yes",text:"Yes"},{value:"no",text:"No"}],success:s}),window.$(".config_editable").editable({emptytext:"not set",send:"always",placement:"right",success:s})},2:function(t,e){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(t){"object"==typeof window&&(o=window)}t.exports=o}});