import { FirstColumn } from './FirstColumn';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FetchWeatherToday } from '../../api';
import logo from '../../assets/images/bili-logo.svg';
import backgroundImage from '../../assets/images/default-background-image.svg';
import { useGlobalContext } from '../../Context';

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

  /* UTILS */
  const inKilometers = (meters) => {
    return meters / 1000;
  };
  if (isLoading) {
    return (
      <div
        className='background-container'
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className='loader'></div>
      </div>
    );
  }

  return (
    <div
      className='background-container'
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {weatherDataToday && weatherDataToday?.main?.temp && (
        <div className='container-grid'>
          <FirstColumn
            logo={logo}
            weatherDataToday={weatherDataToday}
            cityName={cityName}
          />
          <div className='column second-column'>
            <div className='full-width'>
              <div>
                <h3>
                  feels like: <span>{weatherDataToday.main.feels_like} °C</span>
                </h3>
                <h3>
                  wind speed:<span>{weatherDataToday.wind.speed} m/s</span>
                </h3>
              </div>
              <div>
                <h3>
                  humidity:<span>{weatherDataToday.main.humidity} %</span>
                </h3>
                <h3>
                  visibility:
                  <span>{inKilometers(weatherDataToday.visibility)} km</span>
                </h3>
              </div>
            </div>
            <div className='second-row-first-column'>
              Second row, first column
            </div>
            <div className='second-row-second-column'>
              Second row, second column
            </div>
            <div className='full-width' style={{ paddingInline: '2em' }}>
              <Link to='/'>
                <button type='button' className='button'>
                  See 5-day Forecast
                </button>
              </Link>
              <Link to='/'>
                <button type='button' className='button'>
                  Back To Search
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default WeatherToday;
