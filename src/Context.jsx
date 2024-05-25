import { createContext, useContext, useState } from 'react';
import { FetchWeatherToday } from './api';
import logo from './assets/images/bili-logo.svg';
import defaultBackgroundImage from './assets/images/default-background-image.svg';
const AppContext = createContext();

const defaultCity = JSON.parse(localStorage.getItem('city') || '[]');

const setLocalStorage = (items) => {
  localStorage.setItem('city', JSON.stringify(items));
};

export function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState(defaultCity);
  const [weatherDataToday, setWeatherDataToday] = useState({});

  const displayData = async () => {
    setIsLoading(true);
    try {
      const data = await FetchWeatherToday(city.lat, city.lon);
      setWeatherDataToday(data);
    } catch (error) {
      console.log('Error displaying weather data:', error);
    }
    setIsLoading(false);
  };
  return (
    <AppContext.Provider
      value={{
        city,
        setCity,
        weatherDataToday,
        setWeatherDataToday,
        isLoading,
        setIsLoading,
        setLocalStorage,
        logo,
        defaultBackgroundImage,
        displayData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export const useGlobalContext = () => {
  return useContext(AppContext);
};
