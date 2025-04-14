
import React, { useState, useEffect } from 'react';

export const weatherCommand = (city: string = 'london'): React.ReactNode => {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        // This is a mock API call since we don't have API keys in this example
        // In a real app, you'd use a weather API like OpenWeatherMap
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
        
        // Mock weather data based on city
        const mockWeatherData: Record<string, any> = {
          london: {
            city: 'London',
            temperature: '14°C',
            condition: 'Cloudy',
            humidity: '78%',
            wind: '12 km/h'
          },
          newyork: {
            city: 'New York',
            temperature: '22°C',
            condition: 'Sunny',
            humidity: '60%',
            wind: '8 km/h'
          },
          tokyo: {
            city: 'Tokyo',
            temperature: '26°C',
            condition: 'Partly Cloudy',
            humidity: '65%',
            wind: '10 km/h'
          },
          sydney: {
            city: 'Sydney',
            temperature: '29°C',
            condition: 'Clear',
            humidity: '48%',
            wind: '15 km/h'
          },
          paris: {
            city: 'Paris',
            temperature: '16°C',
            condition: 'Light Rain',
            humidity: '82%',
            wind: '9 km/h'
          }
        };

        const normalizedCity = city ? city.toLowerCase().replace(/\s+/g, '') : 'london';
        const weatherData = mockWeatherData[normalizedCity] || mockWeatherData.london;
        
        setWeather(weatherData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch weather data.');
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) {
    return <div className="text-terminal-yellow">Fetching weather data...</div>;
  }

  if (error) {
    return <div className="text-terminal-red">{error}</div>;
  }

  return (
    <div className="space-y-2">
      <h2 className="text-xl text-terminal-green">Weather for {weather.city}</h2>
      <div className="border border-terminal-comment p-3 rounded">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center">
            <span className="text-terminal-yellow w-32">Temperature:</span>
            <span>{weather.temperature}</span>
          </div>
          <div className="flex items-center">
            <span className="text-terminal-yellow w-32">Condition:</span>
            <span>{weather.condition}</span>
          </div>
          <div className="flex items-center">
            <span className="text-terminal-yellow w-32">Humidity:</span>
            <span>{weather.humidity}</span>
          </div>
          <div className="flex items-center">
            <span className="text-terminal-yellow w-32">Wind:</span>
            <span>{weather.wind}</span>
          </div>
        </div>
      </div>
      <div className="text-terminal-comment mt-2">
        Note: This is simulated weather data. Try cities like 'london', 'newyork', 'tokyo', 'sydney', or 'paris'.
      </div>
    </div>
  );
};

