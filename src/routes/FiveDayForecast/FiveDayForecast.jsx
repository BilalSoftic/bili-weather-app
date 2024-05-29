import { Day } from './Day';
import { useGlobalContext } from '../../Context';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CountryAndDateTime } from '../WeatherToday/SecondColumn/CountryAndDateTime';

function FiveDayForecast() {
  const {
    fiveDayWeatherData,
    logo,
    isLoading,
    defaultBackgroundImage,
    handleDataForFiveDayWeather,
    handleDataForWeatherToday,
    weatherDataToday,
    city,
  } = useGlobalContext();

  useEffect(() => {
    handleDataForWeatherToday();
    handleDataForFiveDayWeather();
  }, []);

  const fiveDayWeatherArray = Array.from(fiveDayWeatherData);

  const { dt, timezone, sys } = weatherDataToday;

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
    fiveDayWeatherData &&
    weatherDataToday && (
      <div
        className='background-container'
        style={{
          backgroundImage: `url(${defaultBackgroundImage})`,
        }}
      >
        <div className='wide-center-container'>
          <div className='top-container'>
            <img
              className='logo weather-today-logo'
              src={logo}
              alt='bili-logo.svg'
            ></img>
            <CountryAndDateTime
              dt={dt}
              timezone={timezone}
              country={sys.country}
              city={city.cityName}
            />
            <Link to='/'>
              <button
                type='button'
                className='button back-to-search-black-button'
              >
                back to search
              </button>
            </Link>
          </div>
          {fiveDayWeatherData && (
            <div className='days-container'>
              {fiveDayWeatherArray.map(([date, weatherData]) => {
                return (
                  /* day */
                  <Day key={date} date={date} weatherData={weatherData} />
                );
              })}
            </div>
          )}
        </div>
      </div>
    )
  );
}
export default FiveDayForecast;
