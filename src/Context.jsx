import { createContext, useContext, useState } from 'react';
import { FetchFiveDayWeather, FetchWeatherToday } from './api';
import { toast } from 'react-toastify';
import logo from './assets/images/bili-logo.svg';
import defaultBackgroundImage from './assets/images/default-background-image.jpg';
const AppContext = createContext();

const defaultCity = JSON.parse(localStorage.getItem('city') || '[]');

const setLocalStorage = (items) => {
  localStorage.setItem('city', JSON.stringify(items));
};

export function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState(defaultCity);
  const [weatherDataToday, setWeatherDataToday] = useState({});
  const [fiveDayWeatherData, setFiveDayWeatherData] = useState({});

  const handleDataForWeatherToday = async () => {
    setIsLoading(true);
    try {
      const data = await FetchWeatherToday(city.lat, city.lon);
      setWeatherDataToday(data);
    } catch (error) {
      console.log('Error displaying weather data:', error);
    }
    setIsLoading(false);
  };

  const handleDataForFiveDayWeather = async () => {
    setIsLoading(true);
    try {
      const data = await FetchFiveDayWeather(city.lat, city.lon);
      const fiveDayWeatherMap = new Map();

      data.list.forEach((item) => {
        const date = item.dt_txt.split(' ')[0];
        if (fiveDayWeatherMap.has(date)) {
          fiveDayWeatherMap.get(date).push(item);
        } else {
          fiveDayWeatherMap.set(date, [item]);
        }
      });

      setFiveDayWeatherData(fiveDayWeatherMap);
      /*  */
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
        isLoading,
        setIsLoading,
        setLocalStorage,
        logo,
        defaultBackgroundImage,
        handleDataForWeatherToday,
        handleDataForFiveDayWeather,
        fiveDayWeatherData,
        toast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export const useGlobalContext = () => {
  return useContext(AppContext);
};
