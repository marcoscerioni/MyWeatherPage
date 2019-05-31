import {API_KEY, API_URL} from "../constants/apiConstants";

export function fetchWeather(city,country,units="metric") {
  return fetch(
    `${API_URL}/weather?q=${city},${country}&appid=${API_KEY}&units=${units}`)
    .then(res => {
      console.log(res);
      return res.json()
    })
}