import './WeatherToday.css';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FetchWeatherToday } from '../../api';
import logo from '../../assets/images/bili-logo.svg';
import backgroundImage from '../../assets/images/background-image.svg';

function WeatherToday({}) {
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { name, lat, lon } = location.state;

  useEffect(() => {
    console.log('Location state:', location.state);
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const newWeatherData = await FetchWeatherToday(lat, lon);
        console.log('Fetched weather data:', newWeatherData);
        setWeatherData(newWeatherData);
      } catch (error) {
        console.log('Error fetching weather data:', error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [lat, lon]);

  const inKilometers = (meters) => {
    return meters / 1000;
  };
  if (isLoading) {
    return (
      <div className='background-container'>
        <h2 className='main-header'>Loading...</h2>
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
      {weatherData?.main?.temp && (
        <div className='container-grid'>
          <div className='column first-column'>
            <img
              className='logo'
              src={logo}
              alt='bili-logo.svg'
              style={{ height: '3em', margin: 0 }}
            ></img>
            {weatherData.weather?.length > 0 && (
              <div
                className='weather-image-container'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
                  alt='#'
                />
                <h3 style={{ fontSize: '3.20em', fontWeight: 400 }}>
                  {weatherData.weather[0].description}
                </h3>
              </div>
            )}

            <div className='location-text'>
              <h2>{name}</h2>
              <h3>{weatherData.name}</h3>
              {weatherData.main && <h1>{weatherData.main.temp}°C</h1>}
            </div>
          </div>
          <div className='column second-column'>
            <div class='full-width'>
              <div>
                <h3>
                  feels like: <span>{weatherData.main.feels_like} °C</span>
                </h3>
                <h3>
                  wind speed:<span>{weatherData.wind.speed} m/s</span>
                </h3>
              </div>
              <div>
                <h3>
                  humidity:<span>{weatherData.main.humidity} %</span>
                </h3>
                <h3>
                  visibility:
                  <span>{inKilometers(weatherData.visibility)} km</span>
                </h3>
              </div>
            </div>
            <div class='second-row-first-column'>Second row, first column</div>
            <div class='second-row-second-column'>
              Second row, second column
            </div>
            <div class='full-width' style={{ paddingInline: '2em' }}>
              <Link to='/'>
                <button type='button' className='button'>
                  see 5-day forecast
                </button>
              </Link>
              <Link to='/'>
                <button type='button' className='button'>
                  back to search
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
