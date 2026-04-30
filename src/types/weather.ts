/*
All of these are reusable pieces of code that will make up the user experience, with each interface
having a particular use. This particular file deals with defining the weather interfaces and which
interface is going to be a child component of another interface.
*/

export interface WeatherData {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface MainWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface CurrentWeather {
  coord: { lon: number; lat: number };
  weather: WeatherData[];
  main: MainWeather;
  visibility: number;
  wind: { speed: number; deg: number };
  clouds: { all: number };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface ForecastData {
  dt: number;
  main: MainWeather;
  weather: WeatherData[];
  wind: { speed: number };
  clouds: { all: number };
  visibility: number;
  pop: number;
}

export interface ForecastResponse {
  list: ForecastData[];
  city: {
    id: number;
    name: string;
    country: string;
    timezone: number;
  };
}