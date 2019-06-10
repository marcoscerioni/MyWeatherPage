export function getWeekDay(dt) {
  return new Date(dt * 1000).getDate();
}

export function getHour(dt) {
  let hour = new Date(dt * 1000).getHours();
  if (hour <= 9) hour = "0" + hour;
  return hour;
}

export function rain_converter(rain) {
    return rain["3h"] + "%" ;
}