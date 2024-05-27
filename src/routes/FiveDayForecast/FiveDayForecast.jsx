import { useGlobalContext } from '../../Context';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CountryAndDateTime } from '../WeatherToday/SecondColumn/CountryAndDateTime';
import { IconConverter } from '../../IconConverter';
function FiveDayForecast() {
  const {
    fiveDayWeatherData,
    logo,
    isLoading,
    defaultBackgroundImage,
    handleDataForFiveDayWeather,
    handleDataForWeatherToday,
    weatherDataToday,
  } = useGlobalContext();

  useEffect(() => {
    handleDataForWeatherToday();
    handleDataForFiveDayWeather();
  }, []);

  const fiveDayWeatherArray = Array.from(fiveDayWeatherData);

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
            <CountryAndDateTime />
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
                  <div className='day-wrapper' key={date}>
                    {console.log(1, weatherData)}
                    <h2 className='date'>{date}</h2>
                    <div className='scrolling-container'>
                      {weatherData.map((item) => (
                        <div className='card' key={item.dt}>
                          <h2>
                            {/* Temp: */} <span>{item.main.temp}°C</span>
                          </h2>
                          <img
                            src={IconConverter(item.weather[0].icon)}
                            alt='weather-icon'
                          />
                          <h2>
                            {/* Weather: */}
                            {item.weather[0].description}
                          </h2>
                        </div>
                      ))}
                    </div>
                  </div>
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
