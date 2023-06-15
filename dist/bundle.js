(()=>{"use strict";var e,n,t,r,o={426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(979),t.b),d=i()(o());d.push([e.id,"@import url(https://fonts.cdnfonts.com/css/jetbrains-mono-2);"]);var p=s()(l);d.push([e.id,`* {\n    margin: 0;\n    padding: 0;\n}\n\n#content {\n    font-family: 'JetBrains Mono', sans-serif;\n    background: linear-gradient(0deg, rgba(35,114,255,1) 0%, rgba(0,195,214,1) 100%);\n    height: 100vh;\n    color: white;\n}\n\n#searchContainer {\n    width: 95%;\n    max-width: 400px;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    align-items: center;\n    margin: auto;\n    position: relative;\n}\n\n#searchBar {\n    font-family: 'JetBrains Mono', sans-serif;\n    width: 95%;\n    max-width: 400px;\n    margin: 5px;\n    height: 35px;\n    font-size: 20px;\n    border-radius: 50px;\n    padding-left: 5px;\n    background-color: white;\n    z-index: 3;\n}\n#searchResults {\n    width: 95%;\n    max-width: 375px;\n    transition: .1s;\n    position: fixed;\n    top: 25px;\n    padding-top: 20px;\n    z-index: 2;\n    background-color: white;\n}\n\n#searchResults{\n    border: 1px solid black;\n}\n\n.resultDiv:hover {\n    cursor: pointer;\n    background-color: aqua;\n}\n\n#currentWeather {\n    max-width: 80%;\n    margin: auto;\n    margin-top: 20px;\n}\n\n.currentHeader {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-items: center;\n    align-items: center;\n}\n\n.locationName {\n    font-size: 25px;\n}\n\n.conditionDiv {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    align-items: center;\n    width: 60%;\n    margin: auto;\n    margin-top: 20px;\n}\n\n.conditionHL {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.conditionL, .conditionH {\n    margin: 5px;\n}\n\n.conditionTemp{\n    font-size: 50px;\n}\n\n#hourlyWeather {\n    user-select: none;\n    width: 90%;\n    display: flex;\n    overflow-x: auto;\n    max-width: 700px;\n    margin: auto;\n    margin-top: 20px;\n    position: relative;\n}\n\n.hourDiv {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.hourDiv > img {\n    -webkit-user-drag: none;\n    user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n}\n\n::-webkit-scrollbar {\n    height: 7.5px;\n}\n\n::-webkit-scrollbar-track {\n    background: #f1f1f1;\n  }\n\n  /* Handle */\n::-webkit-scrollbar-thumb {\n  background: #888;\n  border-radius: 5px;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: #555;\n  }\n\n#loaderContainer {\n    display: none;\n    transition: .5s;\n    width: 100%;\n    height: 100vh;\n    position: fixed;\n    background: #ffffff\n        url(${p}) center\n        no-repeat;\n    z-index: 2;\n}\n\n#weeklyWeather {\n    width: 90%;\n    max-width: 350px;\n    margin: auto;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    max-height: 350px;\n}\n\n.dayDiv {\n    max-height: 50px;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: 1fr;\n    align-items: center;\n    justify-items: center;\n}\n\n.weekCon {\n    width: auto;\n    height: 35px;\n}\n\n.dayDivWD {\n    font-size: 17px;\n    justify-self: right;\n}\n\n.weekTemp {\n    justify-self: left;\n    font-size: 17px;\n}\n`,""]);const u=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},654:(e,n,t)=>{var r=t(379),o=t.n(r),a=t(795),i=t.n(a),c=t(569),s=t.n(c),l=t(565),d=t.n(l),p=t(216),u=t.n(p),m=t(589),f=t.n(m),h=t(426),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=u(),o()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},138:(e,n,t)=>{t.a(e,(async(e,n)=>{try{var r=t(27),o=(t(654),t(338)),a=t(357),i=t(855),c=t(464),s=t(821);const e=await(0,o.Z)();console.log(e);let l=await(0,s.Z)(e);(0,i.Z)(l),(0,a.Z)(l),(0,c.Z)(l),(0,r.Z)(),n()}catch(e){n(e)}}),1)},855:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(929);const o=e=>{let n=(0,r.OI)(e);console.log(n),document.getElementById("currentWeather").textContent="";let t=document.getElementById("currentWeather"),o=document.createElement("div");o.classList="currentHeader";let a=document.createElement("p");a.classList="locationName",a.innerHTML=`${n.location}, ${n.region}`,o.appendChild(a);let i=document.createElement("p");i.classList="localTime",i.innerHTML=`${n.localtime}`,o.appendChild(i),t.appendChild(o);let c=document.createElement("div");c.classList="conditionDiv";let s=document.createElement("p");s.classList="conditionTemp",s.innerHTML=n.temp_f,c.appendChild(s);let l=document.createElement("p");l.classList="conditionCon",l.innerHTML=n.condition.text,c.appendChild(l);let d=document.createElement("div");d.classList="conditionHL";let p=document.createElement("p");p.classList="conditionL",p.innerHTML=`L: ${n.low_f}`,d.appendChild(p);let u=document.createElement("p");u.classList="conditionH",u.innerHTML=`H: ${n.high_f}`,d.appendChild(u),c.appendChild(d),t.appendChild(c)}},357:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(929);const o=e=>{document.getElementById("weeklyWeather").textContent="";let n=(0,r.yP)(e);console.log(n);const t=document.getElementById("weeklyWeather");n.forEach((e=>{let n=document.createElement("div");n.classList="dayDiv";let r=document.createElement("p");r.classList="dayDivWD",r.innerHTML=e.day,n.appendChild(r);let o=document.createElement("img");o.classList="weekCon",o.src=e.condition.icon,n.appendChild(o);let a=document.createElement("p");a.classList="weekTemp",a.innerHTML=e.temp_f,n.appendChild(a),t.appendChild(n)}))}},464:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(929);const o=e=>{document.getElementById("hourlyWeather").textContent="";let n=(0,r.Ur)(e);console.log(n);let t=document.getElementById("hourlyWeather");for(let e=0;e<n.length;e++){let r=document.createElement("div");r.classList="hourDiv",r.id=`viewID#${e}`;let o=document.createElement("p");o.classList="timeOfDay",0==e&&(o.innerHTML="12 AM"),e>0&&e<=11&&(o.innerHTML=`${e} AM`),12==e&&(o.innerHTML=`${e} PM`),e>12&&(o.innerHTML=e-12+" PM"),r.appendChild(o);let a=document.createElement("img");a.src=`${n[e].condition.icon}`,r.appendChild(a);let i=document.createElement("p");i.innerHTML=n[e].temp_f,r.appendChild(i),t.appendChild(r)}document.getElementById(`viewID#${(e=>{let n=e.substring(e.length-5).replace(":","");return Math.round(n/100)})(e.location.localtime)}`).scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}},27:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(821),o=t(855),a=t(357),i=t(464);const c=()=>{const e=document.getElementById("searchBar");e.addEventListener("input",(async n=>{if(n.target.value.length>0)return document.getElementById("searchResults").textContent="",void(await(async e=>{const n=await fetch(`http://api.weatherapi.com/v1/search.json?key=0e45ac1c51a149518c7205713230706&q=${e}&aqi=no`,{mode:"cors"});return await n.json()})(n.target.value)).forEach((n=>{let t=document.createElement("p");t.innerHTML=`${n.name}, ${n.region}`,t.classList="resultDiv",document.getElementById("searchResults").appendChild(t),t.addEventListener("mousedown",(async()=>{let t=await(0,r.Z)(`${n.name}, ${n.region}`);(0,o.Z)(t),(0,a.Z)(t),(0,i.Z)(t),e.value="",document.getElementById("searchResults").textContent=""}))}))})),e.addEventListener("blur",(()=>{e.value="",document.getElementById("searchResults").textContent=""}))}},929:(e,n,t)=>{t.d(n,{OI:()=>o,Ur:()=>a,yP:()=>i});const r=e=>{let n,t=e.substring(e.length-5).replace(":","");return Number(t)>=1300&&Number(t)<2200?(t-=1200,n=t.toString().slice(0,1)+":"+t.toString().slice(1,3)+" PM",n):Number(t)>=2200?(t-=1200,n=t.toString().slice(0,2)+":"+t.toString().slice(1,3)+" PM",n):Number(t)<1200&&Number(t)>=100?(n=t.toString().slice(0,2)+":"+t.toString().slice(2,4)+" AM",n):Number(t)<100?(n="12:"+t.toString().slice(2,4)+" AM",n):(n=t.toString().slice(0,2)+":"+t.toString().slice(2,4)+" PM",n)},o=e=>{const n=e.current;return{location:e.location.name,region:e.location.region,localtime:r(e.location.localtime),condition:n.condition,is_day:n.is_day,temp_c:`${n.temp_c}°`,temp_f:`${n.temp_f}°`,high_c:`${e.forecast.forecastday[0].day.maxtemp_c}°`,high_f:`${e.forecast.forecastday[0].day.maxtemp_f}°`,low_c:`${e.forecast.forecastday[0].day.mintemp_c}°`,low_f:`${e.forecast.forecastday[0].day.mintemp_f}°`,wind_mph:n.wind_mph,wind_kph:n.wind_kph,precip_in:n.precip_in,precip_mm:n.precip_mm}},a=e=>{const n=[];return e.forecast.forecastday[0].hour.forEach((e=>{n.push({condition:e.condition,is_day:e.is_day,temp_c:`${e.temp_c}°`,temp_f:`${e.temp_f}°`})})),n},i=e=>{const n=[];return e.forecast.forecastday.forEach((e=>{var t;n.push({day:(t=e.date,["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(t.replace("-","/")).getDay()]),condition:e.day.condition,temp_c:`${e.day.avgtemp_c}°`,temp_f:`${e.day.avgtemp_f}°`})})),n}},338:(e,n,t)=>{t.d(n,{Z:()=>r});const r=async()=>{try{return(e=await new Promise(((e,n)=>{navigator.geolocation.getCurrentPosition(e,n)}))).coords.latitude+","+e.coords.longitude}catch(e){throw e}var e}},821:(e,n,t)=>{t.d(n,{Z:()=>r});const r=async e=>{let n;console.log(`%cRequesting forecast data for ${e}...`,"color:yellow");try{const t=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=0e45ac1c51a149518c7205713230706&q=${e}&aqi=no&days=7`,{mode:"cors"});document.getElementById("loaderContainer").style.display="block",n=await t.json(),console.log(`%cForecast data retrieved for ${e}:`,"color:lime"),console.log(n)}catch(e){console.log(e)}return document.getElementById("loaderContainer").style.display="none",n}},979:(e,n,t)=>{e.exports=t.p+"fd30cd2f8e3a581a6c98.gif"}},a={};function i(e){var n=a[e];if(void 0!==n)return n.exports;var t=a[e]={id:e,exports:{}};return o[e](t,t.exports,i),t.exports}i.m=o,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",n="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",t="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},i.a=(o,a,i)=>{var c;i&&((c=[]).d=1);var s,l,d,p=new Set,u=o.exports,m=new Promise(((e,n)=>{d=n,l=e}));m[n]=u,m[e]=e=>(c&&e(c),p.forEach(e),m.catch((e=>{}))),o.exports=m,a((o=>{var a;s=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[e])return o;if(o.then){var a=[];a.d=0,o.then((e=>{i[n]=e,r(a)}),(e=>{i[t]=e,r(a)}));var i={};return i[e]=e=>e(a),i}}var c={};return c[e]=e=>{},c[n]=o,c})))(o);var i=()=>s.map((e=>{if(e[t])throw e[t];return e[n]})),l=new Promise((n=>{(a=()=>n(i)).r=0;var t=e=>e!==c&&!p.has(e)&&(p.add(e),e&&!e.d&&(a.r++,e.push(a)));s.map((n=>n[e](t)))}));return a.r?l:i()}),(e=>(e?d(m[t]=e):l(u),r(c)))),c&&(c.d=0)},i.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return i.d(n,{a:n}),n},i.d=(e,n)=>{for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var n=i.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!e;)e=t[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),i.b=document.baseURI||self.location.href,i.nc=void 0,i(138)})();