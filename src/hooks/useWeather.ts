import { useState, useCallback } from "react";
import type { CurrentWeather, ForecastResponse } from "../types/weather";
import { weatherService } from "../services/weatherService";

export const useWeather = () => {
    const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(null);
    const [forecast, setForecast] = useState<ForecastResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchWeather = useCallback(async (city: string) => {
        setLoading(true);
        setError(null);

        try {
            const [weather, forecastData] = await Promise.all([
                weatherService.getCurrentWeather(city),
                weatherService.getForecast(city),
            ]);
            setCurrentWeather(weather);
            setForecast(forecastData);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    }, []);

    return { currentWeather, forecast, loading, error, fetchWeather };
}