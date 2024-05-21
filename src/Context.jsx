import { createContext, useContext, useState } from 'react';
const AppContext = createContext();

const defaultCity = JSON.parse(localStorage.getItem('city') || '[]');

const setLocalStorage = (items) => {
  localStorage.setItem('city', JSON.stringify(items));
};

export function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState(defaultCity);
  const [weatherDataToday, setWeatherDataToday] = useState([]);

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export const useGlobalContext = () => {
  return useContext(AppContext);
};
