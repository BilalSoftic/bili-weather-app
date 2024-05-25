import { Link } from 'react-router-dom';
import { IconConverter } from '../../../IconConverter';
import { useGlobalContext } from '../../../Context';
export function FirstColumn() {
  const { logo, weatherDataToday, city } = useGlobalContext();
  const { cityName } = city;
  return (
    <div className='column first-column'>
      <Link to='/'>
        <img
          className='logo weather-today-logo'
          src={logo}
          alt='bili-logo.svg'
        ></img>
      </Link>

      <div className='weather-icon-container'>
        <img
          src={IconConverter(weatherDataToday.weather[0].icon)}
          alt='weather-icon'
        />
        <h3 className='weather-icon-description'>
          {weatherDataToday.weather[0].description}
        </h3>
      </div>
      <div className='first-column-weather-information '>
        <h2>{cityName}</h2>
        <p>{weatherDataToday.name}</p>
        <h1>{weatherDataToday.main.temp} °C</h1>
      </div>
    </div>
  );
}
