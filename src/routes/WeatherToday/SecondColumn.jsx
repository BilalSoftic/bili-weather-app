import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate, formatTime } from '../../helpers';
import windIcon from '../../assets/weather-icons/wind-icon.svg';
import sunriseIcon from '../../assets/weather-icons/sunrise-icon.svg';
import sunsetIcon from '../../assets/weather-icons/sunset-icon.svg';
import conditionsIcon from '../../assets/weather-icons/conditions-icon.svg';
export function SecondColumn({ weatherDataToday }) {
  /* UTILS */
  const inKilometers = (meters) => {
    return meters / 1000;
  };

  return (
    <div className='column second-column'>
      {/* full width top*/}
      <div className='full-width-top'>
        <h3 className='country'>{weatherDataToday.sys.country}</h3>
        <h3 className='local-time'>
          {formatDate(weatherDataToday.dt, weatherDataToday.timezone)}
        </h3>
        <h3>{formatTime(weatherDataToday.dt, weatherDataToday.timezone)}</h3>
      </div>
      {/* center */}
      <div className='second-column-center'>
        {/* center left */}
        <div className='center-left'>
          <div className='center-left-row center-left-white-row '>
            <h3>
              feels like: <span>{weatherDataToday.main.feels_like} °C</span>
            </h3>
          </div>
          <div className='center-left-row center-left-black-row '>
            <img src={conditionsIcon} alt='conditions-icon' />
            <h3>conditions</h3>
          </div>
          <div className='center-left-row center-left-black-row'>
            <img src={windIcon} alt='wind-icon' />
            <h3>wind</h3>
          </div>
        </div>

        {/* center right */}
        <div className='center-right'>
          {/* sunrise */}
          <div className='sun-container'>
            <div className='sun-icon-container'>
              <img src={sunriseIcon} alt='sunrise-icon' />
              <p>sunrise</p>
            </div>
            <h2>
              {formatTime(
                weatherDataToday.sys.sunrise,
                weatherDataToday.timezone
              )}
            </h2>
          </div>
          {/* sunset */}
          <div className='sun-container'>
            <div className='sun-icon-container'>
              <img src={sunsetIcon} alt='sunrise-icon' />
              <p>sunset</p>
            </div>
            <h2>
              {formatTime(
                weatherDataToday.sys.sunset,
                weatherDataToday.timezone
              )}
            </h2>
          </div>
        </div>
      </div>
      {/* full width bottom */}
      <div
        className='full-width-bottom'
        style={{
          paddingInline: '2em',
        }}
      >
        <Link to='/'>
          <button type='button' className='button five-day-button'>
            See 5-day Forecast
          </button>
        </Link>
        <Link to='/'>
          <button type='button' className='button back-to-search-button'>
            Back To Search
          </button>
        </Link>
      </div>
    </div>
  );
}
