import React from 'react';
import type { ForecastData } from '../../types/weather';

interface ForecastCardProps {
  forecast: ForecastData;
}

export const ForecastCard: React.FC<ForecastCardProps> = ({ forecast }) => {
  const date = new Date(forecast.dt * 1000);
  const iconUrl = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md">
      <p className="font-semibold mb-2">{date.toLocaleDateString()}</p>
      <img src={iconUrl} alt={forecast.weather[0].description} className="w-12 h-12 mx-auto" />
      <p className="text-lg font-bold mt-2">{Math.round(forecast.main.temp)}°C</p>
      <p className="text-sm capitalize text-gray-600">{forecast.weather[0].description}</p>
    </div>
  );
};