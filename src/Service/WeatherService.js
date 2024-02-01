import { DateTime } from "luxon";

const API_KEY = "c8f822fbf0fefcf3c481240991fd176e";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&lon=2.3488&exclude=current,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=metric

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp:current_temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt:current_dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    timezone:current_zone
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    current_temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    current_dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
    current_zone
  };
};


const formatHourlyForecastWeather = (data)=>{
  // console.log(data.list)
  let mylist = []
  const {timezone} = data.city
  data.list.map((value)=>{
    const {main:{temp},weather,dt}=value
    const {icon} = weather[0]
    let time = formatToLocalTime(dt,timezone, "hh:mm a")
   mylist.push({temp,icon,time})
  })

  return(mylist.slice(1,6))
}




const getFormattedWeatherData = async (searchParams) => {
  console.log(searchParams)
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  const { lat, lon } = formattedCurrentWeather;

  const formattedHourlyForecastWeather = await getWeatherData("forecast", {
    lat,
    lon,
    units: searchParams.units,
    cnt:8
  }).then(formatHourlyForecastWeather);



  return { ...formattedCurrentWeather, mylist:formattedHourlyForecastWeather };
}

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const formatTime = (
  secs,
  zone,
  format = "hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;
  
export { formatToLocalTime, iconUrlFromCode,formatTime };
export default getFormattedWeatherData;
