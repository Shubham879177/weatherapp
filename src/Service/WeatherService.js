const API_KEY = "e1f0b8a422e220d821255466fb1738fe"
const BASE_URL = "https://api.openweathermap.org/data/2.5/"

// const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
    return fetch(url).then((res) => res.json());
}


const formateCurrentWeather = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed },
    } = data;

    const {main:details,icon} = weather[0]

    return {
        lat,
        lon,
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        name,
        dt,
        country,
        sunrise,
        sunset,
        details,
        icon,
        speed,
    };
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await (getWeatherData("weather", searchParams).then(formateCurrentWeather))
}

export default getFormattedWeatherData