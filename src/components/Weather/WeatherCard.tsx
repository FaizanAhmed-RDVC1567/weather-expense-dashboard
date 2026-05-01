import React from 'react';
import type { CurrentWeather } from '../../types/weather';

interface WeatherCardProps {
  weather: CurrentWeather;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`;

  return (
    <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-lg p-8 shadow-lg">
      <h2 className="text-4xl font-bold mb-2">{weather.name}, {weather.sys.country}</h2>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-6xl font-bold">{Math.round(weather.main.temp)}°C</p>
          <p className="text-xl capitalize mt-2">{weather.weather[0].description}</p>
          <div className="mt-4 text-sm">
            <p>Feels like: {Math.round(weather.main.feels_like)}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind: {weather.wind.speed} m/s</p>
          </div>
        </div>
        <img src={iconUrl} alt={weather.weather[0].description} className="w-32 h-32" />
      </div>
    </div>
  );
};