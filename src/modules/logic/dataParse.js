

// Parses forecastData time to AM/PM.
const timeConvert = (string) => {
    let substring = string.substring(string.length - 5).replace(':', '')
    let returnString;
    if (Number(substring) >= 1200 && Number(substring) < 2200) {
        substring -= 1200
        returnString = substring.toString().slice(0,1) + ':' + substring.toString().slice(1,3) + ' PM'
        return returnString
    }
    if (Number(substring) >= 2200 ) {
        substring -= 1200
        returnString = substring.toString().slice(0,2) + ':' + substring.toString().slice(1,3) + ' PM'
        return returnString
    }
    else if (Number(substring) < 1200) {
        returnString = substring.toString().slice(0,1) + ':' + substring.toString().slice(1,3) + ' AM'
        return returnString
    }
}



//Takes forecastData from weatherAPI, and parses out the needed current weather info into an object.
const currentWeather = (forecastData) => {
    const current = forecastData.current
    const currentData = {
        localtime: timeConvert(forecastData.location.localtime),
        condition: current.condition,
        is_day: current.is_day,
        temp_c: current.temp_c,
        temp_f: current.temp_f,
        high_c: forecastData.forecast.forecastday[0].day.maxtemp_c,
        high_f: forecastData.forecast.forecastday[0].day.maxtemp_f,
        low_c: forecastData.forecast.forecastday[0].day.mintemp_c,
        low_f: forecastData.forecast.forecastday[0].day.mintemp_f,
        wind_mph: current.wind_mph,
        wind_kph: current.wind_kph,
        precip_in: current.precip_in,
        precip_mm: current.precip_mm,
    }
    console.log(currentData);
}

const hourlyWeather = (forecastData) => {
    const hourlyWeather = [];
    forecastData.forecast.forecastday[0].hour.forEach(obj => {
        hourlyWeather.push({
            condition: obj.condition,
            is_day: obj.is_day,
            temp_c: obj.temp_c,
            temp_f: obj.temp_f
        })
    })
    console.log(hourlyWeather);
    return hourlyWeather;
}

export {currentWeather, hourlyWeather}