(()=>{"use strict";(async o=>{let c;console.log(`%cRequesting forecast data for ${o}...`,"color:yellow");try{const e=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=0e45ac1c51a149518c7205713230706&q=${o}&aqi=no`,{mode:"cors"});c=await e.json(),console.log(`%cForecast data retrieved for ${o}:`,"color:lime"),console.log(c)}catch(o){console.log(o)}})("London")})();