// Dashboard for showing weather data
import React, { useState } from 'react';
import { useWeather } from '../../hooks/useWeather';
import { WeatherCard } from './WeatherCard';
import { ForecastCard } from './ForecastCard';
import { LoadingSpinner } from '../Common/LoadingSpinner';

export const WeatherDashboard: React.FC = () => {
  const [city, setCity] = useState('London');
  const { currentWeather, forecast, loading, error, fetchWeather } = useWeather();

  React.useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
    }
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSearch} className="mb-6 flex gap-2">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search city..."
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
        >
          Search
        </button>
      </form>

      {error && <div className="text-red-600 mb-4">{error}</div>}

      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {currentWeather && <WeatherCard weather={currentWeather} />}
          {forecast && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">5-Day Forecast</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {forecast.list.slice(0, 5).map((item) => (
                  <ForecastCard key={item.dt} forecast={item} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};