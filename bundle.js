(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>h});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),d=t(667),c=t.n(d),l=new URL(t(979),t.b),s=i()(a());s.push([e.id,"@import url(https://fonts.cdnfonts.com/css/jetbrains-mono-2);"]);var g=c()(l);s.push([e.id,`* {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.39);\n    transition: .1s;\n    background: linear-gradient(0deg, rgba(35,114,255,1) 0%, rgba(0,195,214,1) 100%);\n}\n\n#content {\n    color: white;\n    font-family: 'JetBrains Mono', sans-serif;\n    min-height: 100vh;\n    max-height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n#searchContainer {\n    width: 95%;\n    max-width: 400px;\n    height: 40px;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n}\n\n#searchBar {\n    color: white;\n    font-family: 'JetBrains Mono', sans-serif;\n    width: 95%;\n    max-width: 400px;\n    margin: 5px;\n    height: 35px;\n    font-size: 20px;\n    border-radius: 50px;\n    border: none;\n    padding-left: 5px;\n    background-color: #00aeff49;\n    box-shadow: 0px 0px 2px rgba(109, 109, 109, 0.541);\n    text-shadow: none;\n    z-index: 3;\n    transition: .1s;\n}\n\n#searchBar:focus {\n    outline: none;\n    background-color: rgba(0, 144, 240, 0.747);\n    transition: .1s;\n}\n\n#searchBar::placeholder {\n    color: white;\n}\n\n#searchResults {\n    width: 95%;\n    max-width: 375px;\n    transition: .1s;\n    position: fixed;\n    top: 40px;\n    z-index: 2;\n    background-color: rgba(0, 144, 240, 0.747);\n    border-radius: 5px;\n}\n\n.resultDiv {\n    padding: 5px;\n    border-radius: 5px;\n}\n\n\n.resultDiv:hover {\n    cursor: pointer;\n    background-color: rgb(39, 147, 248);\n}\n\n#currentWeather {\n    max-width: 80%;\n    margin: auto;\n}\n\n.currentHeader {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-items: center;\n    align-items: center;\n    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.39);\n}\n\n.locationName {\n    font-size: 30px;\n    max-width: 300px;\n    max-height: fit-content;\n    \n}\n\n.localTime {\n    font-size: 20px;\n}\n\n.conditionDiv {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    align-items: center;\n    width: 60%;\n    margin: auto;\n    margin-top: 20px;\n}\n\n.conditionHL {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.conditionL, .conditionH {\n    margin: 5px;\n}\n\n.conditionTemp{\n    font-size: 50px;\n    text-align: center;\n}\n\n#hourlyWeather {\n    user-select: none;\n    width: 90%;\n    display: flex;\n    overflow-x: auto;\n    max-width: 700px;\n    margin: auto;\n    margin-top: 20px;\n    position: relative;\n    background-color: #00aeff1e;\n    padding: 2px;\n    border-radius: 10px;\n}\n\n.hourDiv {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.hourDiv > img {\n    -webkit-user-drag: none;\n    user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n}\n\n::-webkit-scrollbar {\n    height: 7.5px;\n}\n\n::-webkit-scrollbar-track {\n    background: #f1f1f100;\n    border-radius: 5px;\n  }\n\n  ::-webkit-scrollbar-track:active{\n    background: #d3d3d365;\n  }\n\n  /* Handle */\n::-webkit-scrollbar-thumb {\n  background: #cccccc;\n  border-radius: 5px;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background: #9c9c9c;\n  }\n\n#loaderContainer {\n    transition: .5s;\n    width: 100%;\n    height: 100vh;\n    position: fixed;\n    background: rgba(41, 141, 255, 0.856)\n        url(${g}) center\n        no-repeat;\n    z-index: 2;\n}\n\n#weeklyWeather {\n    width: 90%;\n    max-width: 350px;\n    margin: auto;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n}\n\n.dayDiv {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: 1fr;\n    align-items: center;\n    justify-items: center;\n    background-color: #00aeff1e;\n    border-radius: 10px;\n}\n\n.weekCon {\n    width: auto;\n    height: 35px;\n}\n\n.dayDivWD {\n    font-size: 17px;\n    justify-self: right;\n}\n\n.weekTemp {\n    justify-self: left;\n    font-size: 17px;\n}\n\n#ghub, #wAPI {\n    cursor: pointer;\n    margin: 5px;\n}\n\n#footer {\n    background-color: #0071a5a8;\n    margin-top: 20px;\n    width: 100vw;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: center;\n}\n\n#footer > a {\n    display: flex;\n    align-items: center;\n}\n`,""]);const h=s},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&i[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),n.push(s))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],d=0;d<e.length;d++){var c=e[d],l=r.base?c[0]+r.base:c[0],s=o[l]||0,g="".concat(l," ").concat(s);o[l]=s+1;var h=t(g),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)n[h].references++,n[h].updater(p);else{var u=a(p,r);r.byIndex=d,n.splice(d,0,{identifier:g,updater:u,references:1})}i.push(g)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var d=t(o[i]);n[d].references--}for(var c=r(e,a),l=0;l<o.length;l++){var s=t(o[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}o=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},979:(e,n,t)=>{e.exports=t.p+"fd30cd2f8e3a581a6c98.gif"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),d=t(565),c=t.n(d),l=t(216),s=t.n(l),g=t(589),h=t.n(g),p=t(426),u={};u.styleTagTransform=h(),u.setAttributes=c(),u.insert=i().bind(null,"head"),u.domAPI=a(),u.insertStyleElement=s(),n()(p.Z,u),p.Z&&p.Z.locals&&p.Z.locals;const b=[{code:1e3,day:"Sunny",night:"Clear",icon:113,bgColor:"linear-gradient(0deg, rgba(35,114,255,1) 0%, rgba(0,195,214,1) 100%)"},{code:1003,day:"Partly cloudy",night:"Partly cloudy",icon:116,bgColor:"linear-gradient(0deg, rgba(35,114,255,1) 0%, rgba(214,214,214,1) 100%)"},{code:1006,day:"Cloudy",night:"Cloudy",icon:119,bgColor:"linear-gradient(0deg, rgba(35,114,255,1) 0%, rgba(182,182,182,1) 100%)"},{code:1009,day:"Overcast",night:"Overcast",icon:122,bgColor:"linear-gradient(0deg, rgba(116,145,196,1) 0%, rgba(181,181,181,1) 100%)"},{code:1030,day:"Mist",night:"Mist",icon:143,bgColor:"linear-gradient(0deg, rgba(116,145,196,1) 0%, rgba(181,181,181,1) 100%)"},{code:1063,day:"Patchy rain possible",night:"Patchy rain possible",icon:176,bgColor:"linear-gradient(0deg, rgba(0,71,103,1) 0%, rgba(131,131,131,1) 78%)"},{code:1066,day:"Patchy snow possible",night:"Patchy snow possible",icon:179,bgColor:"linear-gradient(0deg, rgba(66,108,126,1) 0%, rgba(181,181,181,1) 100%)"},{code:1069,day:"Patchy sleet possible",night:"Patchy sleet possible",icon:182,bgColor:"linear-gradient(0deg, rgba(66,108,126,1) 0%, rgba(181,181,181,1) 100%)"},{code:1072,day:"Patchy freezing drizzle possible",night:"Patchy freezing drizzle possible",icon:185,bgColor:"linear-gradient(0deg, rgba(66,108,126,1) 0%, rgba(181,181,181,1) 100%)"},{code:1087,day:"Thundery outbreaks possible",night:"Thundery outbreaks possible",icon:200,bgColor:"linear-gradient(0deg, rgba(0,71,103,1) 0%, rgba(61,61,61,1) 78%)"},{code:1114,day:"Blowing snow",night:"Blowing snow",icon:227,bgColor:"linear-gradient(0deg, rgba(200,200,200,1) 0%, rgba(131,131,131,1) 78%)"},{code:1117,day:"Blizzard",night:"Blizzard",icon:230,bgColor:"linear-gradient(0deg, rgba(200,200,200,1) 0%, rgba(131,131,131,1) 78%)"},{code:1135,day:"Fog",night:"Fog",icon:248,bgColor:"linear-gradient(0deg, rgba(200,200,200,1) 0%, rgba(131,131,131,1) 78%)"},{code:1147,day:"Freezing fog",night:"Freezing fog",icon:260,bgColor:"linear-gradient(0deg, rgba(200,200,200,1) 0%, rgba(131,131,131,1) 78%)"},{code:1150,day:"Patchy light drizzle",night:"Patchy light drizzle",icon:263,bgColor:"linear-gradient(0deg, rgba(0,71,103,1) 0%, rgba(131,131,131,1) 78%)"},{code:1153,day:"Light drizzle",night:"Light drizzle",icon:266,bgColor:"linear-gradient(0deg, rgba(0,71,103,1) 0%, rgba(131,131,131,1) 78%)"},{code:1168,day:"Freezing drizzle",night:"Freezing drizzle",icon:281,bgColor:"linear-gradient(0deg, rgba(200,200,200,1) 0%, rgba(131,131,131,1) 78%)"},{code:1171,day:"Heavy freezing drizzle",night:"Heavy freezing drizzle",icon:284,bgColor:"linear-gradient(0deg, rgba(200,200,200,1) 0%, rgba(131,131,131,1) 78%)"},{code:1180,day:"Patchy light rain",night:"Patchy light rain",icon:293,bgColor:"linear-gradient(0deg, rgba(0,71,103,1) 0%, rgba(131,131,131,1) 78%)"},{code:1183,day:"Light rain",night:"Light rain",icon:296,bgColor:"linear-gradient(0deg, rgba(0,71,103,1) 0%, rgba(131,131,131,1) 78%)"},{code:1186,day:"Moderate rain at times",night:"Moderate rain at times",icon:299,bgColor:"linear-gradient(0deg, rgba(0,71,103,1) 0%, rgba(131,131,131,1) 78%)"},{code:1189,day:"Moderate rain",night:"Moderate rain",icon:302,bgColor:"linear-gradient(0deg, rgba(0,71,103,1) 0%, rgba(131,131,131,1) 78%)"},{code:1192,day:"Heavy rain at times",night:"Heavy rain at times",icon:305,bgColor:"linear-gradient(0deg, rgba(0,71,103,1) 0%, rgba(61,61,61,1) 78%)"},{code:1195,day:"Heavy rain",night:"Heavy rain",icon:308,bgColor:"linear-gradient(0deg, rgba(0,71,103,1) 0%, rgba(61,61,61,1) 78%)"},{code:1198,day:"Light freezing rain",night:"Light freezing rain",icon:311,bgColor:"linear-gradient(0deg, rgba(200,200,200,1) 0%, rgba(149,174,181,1) 78%)"},{code:1201,day:"Moderate or heavy freezing rain",night:"Moderate or heavy freezing rain",icon:314,bgColor:"linear-gradient(0deg, rgba(200,200,200,1) 0%, rgba(131,131,131,1) 78%)"},{code:1204,day:"Light sleet",night:"Light sleet",icon:317,bgColor:"linear-gradient(0deg, rgba(200,200,200,1) 0%, rgba(149,174,181,1) 78%)"},{code:1207,day:"Moderate or heavy sleet",night:"Moderate or heavy sleet",icon:320,bgColor:"linear-gradient(0deg, rgba(200,200,200,1) 0%, rgba(131,131,131,1) 78%)"},{code:1210,day:"Patchy light snow",night:"Patchy light snow",icon:323,bgColor:"linear-gradient(0deg, rgba(200,200,200,1) 0%, rgba(149,174,181,1) 78%)"},{code:1213,day:"Light snow",night:"Light snow",icon:326,bgColor:"linear-gradient(0deg, rgba(200,200,200,1) 0%, rgba(149,174,181,1) 78%)"},{code:1216,day:"Patchy moderate snow",night:"Patchy moderate snow",icon:329,bgColor:"linear-gradient(0deg, rgba(200,200,200,1) 0%, rgba(149,174,181,1) 78%)"},{code:1219,day:"Moderate snow",night:"Moderate snow",icon:332,bgColor:"linear-gradient(0deg, rgba(200,200,200,1) 0%, rgba(131,131,131,1) 78%)"},{code:1222,day:"Patchy heavy snow",night:"Patchy heavy snow",icon:335,bgColor:"linear-gradient(0deg, rgba(200,200,200,1) 0%, rgba(131,131,131,1) 78%)"},{code:1225,day:"Heavy snow",night:"Heavy snow",icon:338,bgColor:"linear-gradient(0deg, rgba(200,200,200,1) 0%, rgba(131,131,131,1) 78%)"},{code:1237,day:"Ice pellets",night:"Ice pellets",icon:350,bgColor:"linear-gradient(0deg, rgba(200,200,200,1) 0%, rgba(131,131,131,1) 78%)"},{code:1240,day:"Light rain shower",night:"Light rain shower",icon:353,bgColor:"linear-gradient(0deg, rgba(0,71,103,1) 0%, rgba(131,131,131,1) 78%)"},{code:1243,day:"Moderate or heavy rain shower",night:"Moderate or heavy rain shower",icon:356,bgColor:"linear-gradient(0deg, rgba(0,71,103,1) 0%, rgba(61,61,61,1) 78%)"},{code:1246,day:"Torrential rain shower",night:"Torrential rain shower",icon:359,bgColor:"linear-gradient(0deg, rgba(0,71,103,1) 0%, rgba(61,61,61,1) 78%)"},{code:1249,day:"Light sleet showers",night:"Light sleet showers",icon:362,bgColor:"linear-gradient(0deg, rgba(200,200,200,1) 0%, rgba(149,174,181,1) 78%)"},{code:1252,day:"Moderate or heavy sleet showers",night:"Moderate or heavy sleet showers",icon:365,bgColor:"linear-gradient(0deg, rgba(200,200,200,1) 0%, rgba(131,131,131,1) 78%)"},{code:1255,day:"Light snow showers",night:"Light snow showers",icon:368,bgColor:"linear-gradient(0deg, rgba(200,200,200,1) 0%, rgba(149,174,181,1) 78%)"},{code:1258,day:"Moderate or heavy snow showers",night:"Moderate or heavy snow showers",icon:371,bgColor:"linear-gradient(0deg, rgba(200,200,200,1) 0%, rgba(131,131,131,1) 78%)"},{code:1261,day:"Light showers of ice pellets",night:"Light showers of ice pellets",icon:374,bgColor:"linear-gradient(0deg, rgba(200,200,200,1) 0%, rgba(149,174,181,1) 78%)"},{code:1264,day:"Moderate or heavy showers of ice pellets",night:"Moderate or heavy showers of ice pellets",icon:377,bgColor:"linear-gradient(0deg, rgba(200,200,200,1) 0%, rgba(131,131,131,1) 78%)"},{code:1273,day:"Patchy light rain with thunder",night:"Patchy light rain with thunder",icon:386,bgColor:"linear-gradient(0deg, rgba(0,71,103,1) 0%, rgba(131,131,131,1) 78%)"},{code:1276,day:"Moderate or heavy rain with thunder",night:"Moderate or heavy rain with thunder",icon:389,bgColor:"linear-gradient(0deg, rgba(0,71,103,1) 0%, rgba(61,61,61,1) 78%)"},{code:1279,day:"Patchy light snow with thunder",night:"Patchy light snow with thunder",icon:392,bgColor:"linear-gradient(0deg, rgba(200,200,200,1) 0%, rgba(131,131,131,1) 78%)"},{code:1282,day:"Moderate or heavy snow with thunder",night:"Moderate or heavy snow with thunder",icon:395,bgColor:"linear-gradient(0deg, rgba(200,200,200,1) 0%, rgba(131,131,131,1) 78%)"}],m=e=>{let n=e.current.condition.code,t=b.find((e=>e.code==n)).bgColor;document.getElementById("body").style.background=t},y=e=>{let n,t=e.substring(e.length-5).replace(":","");return Number(t)>=1300&&Number(t)<2200?(t-=1200,n=t.toString().slice(0,1)+":"+t.toString().slice(1,3)+" PM",n):Number(t)>=2200?(t-=1200,n=t.toString().slice(0,2)+":"+t.toString().slice(1,3)+" PM",n):Number(t)<1200&&Number(t)>=100?(n=t.toString().slice(0,2)+":"+t.toString().slice(2,4)+" AM",n):Number(t)<100?(n="12:"+t.toString().slice(2,4)+" AM",n):(n=t.toString().slice(0,2)+":"+t.toString().slice(2,4)+" PM",n)},f=e=>{const[n,t,r]=e.split("-");return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(n,t-1,r).getDay()]},w=e=>{document.getElementById("weeklyWeather").textContent="";let n=(e=>{const n=[];return e.forecast.forecastday.forEach((e=>{n.push({day:f(e.date),condition:e.day.condition,temp_c:`${e.day.avgtemp_c}°`,temp_f:`${e.day.avgtemp_f}°`})})),n})(e);const t=document.getElementById("weeklyWeather");n.forEach((e=>{let n=document.createElement("div");n.classList="dayDiv";let r=document.createElement("p");r.classList="dayDivWD",r.innerHTML=e.day,n.appendChild(r);let a=document.createElement("img");a.classList="weekCon",a.src="https:"+e.condition.icon,n.appendChild(a);let o=document.createElement("p");o.classList="weekTemp",o.innerHTML=e.temp_f,n.appendChild(o),t.appendChild(n)}))},v=e=>{let n=(e=>{const n=e.current;return{location:e.location.name,region:e.location.region,localtime:y(e.location.localtime),condition:n.condition,is_day:n.is_day,temp_c:`${n.temp_c}°`,temp_f:`${n.temp_f}°`,high_c:`${e.forecast.forecastday[0].day.maxtemp_c}°`,high_f:`${e.forecast.forecastday[0].day.maxtemp_f}°`,low_c:`${e.forecast.forecastday[0].day.mintemp_c}°`,low_f:`${e.forecast.forecastday[0].day.mintemp_f}°`,wind_mph:n.wind_mph,wind_kph:n.wind_kph,precip_in:n.precip_in,precip_mm:n.precip_mm}})(e);console.log(n),document.getElementById("currentWeather").textContent="";let t=document.getElementById("currentWeather"),r=document.createElement("div");r.classList="currentHeader";let a=document.createElement("p");a.classList="locationName",a.innerHTML=`${n.location}`,r.appendChild(a);let o=document.createElement("p");o.classList="regionName",o.innerHTML=`${n.region}`,r.appendChild(o);let i=document.createElement("p");i.classList="localTime",i.innerHTML=`${n.localtime}`,r.appendChild(i),t.appendChild(r);let d=document.createElement("div");d.classList="conditionDiv";let c=document.createElement("p");c.classList="conditionTemp",c.innerHTML=n.temp_f,d.appendChild(c);let l=document.createElement("p");l.classList="conditionCon",l.innerHTML=n.condition.text,d.appendChild(l);let s=document.createElement("div");s.classList="conditionHL";let g=document.createElement("p");g.classList="conditionL",g.innerHTML=`L: ${n.low_f}`,s.appendChild(g);let h=document.createElement("p");h.classList="conditionH",h.innerHTML=`H: ${n.high_f}`,s.appendChild(h),d.appendChild(s),t.appendChild(d)},x=e=>{document.getElementById("hourlyWeather").textContent="";let n=(e=>{const n=[];return e.forecast.forecastday[0].hour.forEach((e=>{n.push({condition:e.condition,is_day:e.is_day,temp_c:`${e.temp_c}°`,temp_f:`${e.temp_f}°`})})),n})(e),t=document.getElementById("hourlyWeather");for(let e=0;e<n.length;e++){let r=document.createElement("div");r.classList="hourDiv",r.id=`viewID#${e}`;let a=document.createElement("p");a.classList="timeOfDay",0==e&&(a.innerHTML="12 AM"),e>0&&e<=11&&(a.innerHTML=`${e} AM`),12==e&&(a.innerHTML=`${e} PM`),e>12&&(a.innerHTML=e-12+" PM"),r.appendChild(a);let o=document.createElement("img");o.src=`https:${n[e].condition.icon}`,r.appendChild(o);let i=document.createElement("p");i.innerHTML=n[e].temp_f,r.appendChild(i),t.appendChild(r)}document.getElementById(`viewID#${(e=>{let n=e.substring(e.length-5).replace(":","");return Math.round(n/100)})(e.location.localtime)}`).scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},C=()=>{document.getElementById("loaderContainer").style.display="block"},L=()=>{document.getElementById("loaderContainer").style.display="none"},M=async e=>{let n;console.log(`%cRequesting forecast data for ${e}...`,"color:yellow");try{const t=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=0e45ac1c51a149518c7205713230706&q=${e}&aqi=no&days=7`,{mode:"cors"});C(),n=await t.json(),console.log(`%cForecast data retrieved for ${e}:`,"color:lime"),console.log(n)}catch(e){console.log(e)}return L(),n},E=()=>{const e=document.getElementById("searchBar");e.addEventListener("input",(async n=>{if(n.target.value.length>0)return document.getElementById("searchResults").textContent="",void(await(async e=>{const n=await fetch(`https://api.weatherapi.com/v1/search.json?key=0e45ac1c51a149518c7205713230706&q=${e}&aqi=no`,{mode:"cors"});return await n.json()})(n.target.value)).forEach((n=>{let t=document.createElement("p");t.innerHTML=`${n.name}, ${n.region}`,t.classList="resultDiv",document.getElementById("searchResults").appendChild(t),t.addEventListener("mousedown",(async()=>{let t=await M(`${n.name}, ${n.region}`);v(t),w(t),x(t),m(t),e.value="",document.getElementById("searchResults").textContent=""}))}))})),e.addEventListener("blur",(()=>{e.value="",document.getElementById("searchResults").textContent=""}))};(async()=>{const e=await(async()=>{try{return C(),e=await new Promise(((e,n)=>{navigator.geolocation.getCurrentPosition(e,n)})),L(),e.coords.latitude+","+e.coords.longitude}catch(e){return L(),null}var e})();if(null!==e){const n=await M(e);return m(n),v(n),w(n),x(n),void E()}document.getElementById("body").style.background="linear-gradient(0deg, rgba(35,114,255,1) 0%, rgba(0,195,214,1) 100%)";let n=document.createElement("p");n.classList="defaultText conditionTemp",n.innerHTML="Search for a location",document.getElementById("currentWeather").appendChild(n),E()})()})()})();