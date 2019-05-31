import {API_KEY, API_URL} from "../constants/apiConstants";

export function fetchWeather(city,units="metric") {
  return fetch(
    `${API_URL}/weather?q=${city}&appid=${API_KEY}&units=${units}`)
    .then(res => {
      console.log(res);
      return res.json()
    })
}