import React from 'react';
import { Link } from 'react-router-dom';
import { formatDateTime } from '../../helpers';
import windIcon from '../../assets/weather-icons/wind-icon.svg';
import conditionsIcon from '../../assets/weather-icons/conditions-icon.svg';
export function SecondColumn({ weatherDataToday }) {
  /* UTILS */
  const inKilometers = (meters) => {
    return meters / 1000;
  };

  return (
    <div className='column second-column'>
      <div className='full-width-top'>
        <h3 className='country'>{weatherDataToday.sys.country}</h3>
        <h3 className='local-time'>
          {formatDateTime(weatherDataToday.dt, weatherDataToday.timezone)}
        </h3>
        <h3>UTC</h3>
      </div>
      {/*  <div className='full-width'>
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
      </div> */}
      <div className='second-column-center'>
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
        <div className='center-right'>center right</div>
      </div>

      <div
        className='full-width-bottom'
        style={{
          paddingInline: '2em',
        }}
      >
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
  );
}
