import { SecondColumn } from './SecondColumn';
import { FirstColumn } from './FirstColumn';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FetchWeatherToday } from '../../api';
import logo from '../../assets/images/bili-logo.svg';
import defaultBackgroundImage from '../../assets/images/default-background-image.svg';
import { useGlobalContext } from '../../Context';
import { BackgroundImageConverter } from '../../BackgroundImageConverter';

function WeatherToday({}) {
  const {
    weatherDataToday,
    setWeatherDataToday,
    isLoading,
    setIsLoading,
    city,
  } = useGlobalContext();

  const { cityName, lat, lon } = city;

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const newWeatherData = await FetchWeatherToday(lat, lon);

        setWeatherDataToday(newWeatherData);
      } catch (error) {
        console.log('Error fetching weather data:', error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [lat, lon]);

  if (isLoading) {
    return (
      <div
        className='background-container'
        style={{
          backgroundImage: `url(${defaultBackgroundImage})`,
        }}
      >
        <div className='loader'></div>
      </div>
    );
  }

  return (
    weatherDataToday &&
    weatherDataToday?.main?.feels_like && (
      <div
        className='background-container'
        style={{
          backgroundImage: `url(${BackgroundImageConverter(
            weatherDataToday.weather[0].icon
          )})`,
        }}
      >
        <div className='container-grid'>
          <FirstColumn
            logo={logo}
            weatherDataToday={weatherDataToday}
            cityName={cityName}
          />
          <SecondColumn weatherDataToday={weatherDataToday} />
        </div>
      </div>
    )
  );
}
export default WeatherToday;
