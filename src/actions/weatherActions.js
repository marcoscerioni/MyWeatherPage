import {API_ICON, API_KEY, API_URL} from "../constants/apiConstants";

export function fetchCurrent(city, country, units="metric") {
  return fetch(
    `${API_URL}/weather?q=${city},${country}&appid=${API_KEY}&units=${units}`)
    .then(res => {
      console.log(res);
      return res.json()
    }).then(result => {
      console.log(result);
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


export function fetchForecast(city, country) {
  return [
    {
      dayName: "Mon",
      date: "01/05",
      icon: "SUN",
      max: "38",
      min: "46",
      details: [
        {
          description: "MAIN",
          pressure : "80",
          humidity : "60",
          wind: "500",
          temperature : "50",
          temperature_min: "30",
          temperature_max : "70",
          sunrise: "08:00",
          sunset : "10:00",
        },
        {
          description: "MAIN",
          pressure : "80",
          humidity : "60",
          wind: "500",
          temperature : "50",
          temperature_min: "30",
          temperature_max : "70",
          sunrise: "08:00",
          sunset : "10:00",
        },
      ]
    },
    {
      dayName: "Tues",
      date: "01/05",
      icon: "SUN",
      max: "38",
      min: "46",
      details: [
        {
            description: "MAIN",
            pressure : "80",
            humidity : "60",
            wind: "500",
            temperature : "50",
            temperature_min: "30",
            temperature_max : "70",
            sunrise: "08:00",
            sunset : "10:00",
        },
        {
          description: "MAIN",
          pressure : "80",
          humidity : "60",
          wind: "500",
          temperature : "50",
          temperature_min: "30",
          temperature_max : "70",
          sunrise: "08:00",
          sunset : "10:00",
        },
      ]
    },
    {
      dayName: "Wed",
      date: "01/05",
      icon: "SUN",
      max: "38",
      min: "46",
      details: [
        {
          description: "MAIN",
          pressure : "80",
          humidity : "60",
          wind: "500",
          temperature : "50",
          temperature_min: "30",
          temperature_max : "70",
          sunrise: "08:00",
          sunset : "10:00",
        }
      ]
    },
    {
      dayName: "Thu",
      date: "01/05",
      icon: "SUN",
      max: "38",
      min: "46",
      details: [
        {
          description: "MAIN",
          pressure : "80",
          humidity : "60",
          wind: "500",
          temperature : "50",
          temperature_min: "30",
          temperature_max : "70",
          sunrise: "08:00",
          sunset : "10:00",
        },
        {
          description: "MAIN",
          pressure : "80",
          humidity : "60",
          wind: "500",
          temperature : "50",
          temperature_min: "30",
          temperature_max : "70",
          sunrise: "08:00",
          sunset : "10:00",
        },
      ]
    },
    {
      dayName: "Fri",
      date: "01/05",
      icon: "SUN",
      max: "38",
      min: "46",
      details: [
        {
          description: "MAIN",
          pressure : "80",
          humidity : "60",
          wind: "500",
          temperature : "50",
          temperature_min: "30",
          temperature_max : "70",
          sunrise: "08:00",
          sunset : "10:00",
        },
        {
          description: "MAIN",
          pressure : "80",
          humidity : "60",
          wind: "500",
          temperature : "50",
          temperature_min: "30",
          temperature_max : "70",
          sunrise: "08:00",
          sunset : "10:00",
        },
      ]
    },
  ]
}