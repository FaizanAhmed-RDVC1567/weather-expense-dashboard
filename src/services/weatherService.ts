import axios from "axios";
import type { CurrentWeather, ForecastResponse } from "../types/weather";

// Need to do something in TypeScript to make 'process.env' readable
const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const weatherService = {
  getCurrentWeather: async (city: string): Promise<CurrentWeather> => {
    try {
      const response = await axios.get(`${BASE_URL}/weather`, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch weather for ${city}`);
    }
  },

  getForecast: async (city: string): Promise<ForecastResponse> => {
    try {
      const response = await axios.get(`${BASE_URL}/forecast`, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch forecast for ${city}`);
    }
  },
};