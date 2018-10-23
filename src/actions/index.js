import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const API_BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${API_BASE_URL}&q=${city},us`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request    
  }
}
