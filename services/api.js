import axios from 'axios';
import { OPENWEATHERMAP_API_KEY, OPENWEATHERMAP_BASE_URL } from '../constants';

/**
 * @param {Number} cityId OpenWeather City Id
*/
export const getWeatherByCityId = async (cityId) => axios.get(`${OPENWEATHERMAP_BASE_URL}?id=${cityId}&appid=${OPENWEATHERMAP_API_KEY}`);

/**
 * @param {Number} lat City Latitude
 * @param {Number} lon City Longitude
*/
export const getWeatherByCoords = async (lat, lon) => axios.get(`${OPENWEATHERMAP_BASE_URL}?lat=${lat}&lon=${lon}&appid=${OPENWEATHERMAP_API_KEY}`);
