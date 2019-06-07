import {API_ICON, API_KEY, API_URL} from "../constants/apiConstants";

export function fetchCurrent(city, country, units="metric") {
  return fetch(
    `${API_URL}/weather?q=${city},${country}&appid=${API_KEY}&units=${units}`)
    .then(res => {
      return res.json()
    }).then(result => {
      return {
            icon: result.weather[0].icon,
            pressure : result.main.pressure,
            humidity : result.main.humidity,
            wind: result.wind.speed,
            temperature : result.main.temp,
            temperature_min: result.main.temp_min,
            temperature_max : result.main.temp_max,
            sunrise: result.sys.sunrise,
            sunset : result.sys.sunset,
            loading: false, error: false
          };
    });
}


export function fetchForecast(city, country, units="metric") {

  return fetch(
      `${API_URL}/forecast?q=${city},${country}&appid=${API_KEY}&units=${units}`)
      .then(res => {
        return res.json()})
      .then(result => {
          if (!result.list) {
               return {
                   error: true
               }
          }
          return {
              loading: false,
              error: false,
              dayList: result.list,
          };
      });
}