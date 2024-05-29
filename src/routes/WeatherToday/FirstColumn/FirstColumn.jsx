import { Link } from 'react-router-dom';
import { IconConverter } from '../../../IconConverter';
import { useGlobalContext } from '../../../Context';
export function FirstColumn() {
  const { logo, weatherDataToday, city } = useGlobalContext();
  const { name, weather, main } = weatherDataToday;
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
          src={IconConverter(weather[0].icon)}
          alt='weather-icon'
          className='weather-icon'
        />
        <h3 className='weather-icon-description'>{weather[0].description}</h3>
      </div>
      <div className='first-column-weather-information '>
        <h2>{cityName}</h2>
        <p>{name}</p>
        <h1>{main.temp} °C</h1>
      </div>
    </div>
  );
}
