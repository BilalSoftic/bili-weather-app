import { CountyAndDateTime } from './CountyAndDateTime';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatTime } from '../../../helpers';
import windIcon from '../../../assets/weather-icons/wind-icon.svg';
import sunriseIcon from '../../../assets/weather-icons/sunrise-icon.svg';
import sunsetIcon from '../../../assets/weather-icons/sunset-icon.svg';
import conditionsIcon from '../../../assets/weather-icons/conditions-icon.svg';
import pressureIcon from '../../../assets/weather-icons/pressure-icon.svg';
import humidityIcon from '../../../assets/weather-icons/humidity-icon.svg';
export function SecondColumn({ weatherDataToday }) {
  const [isHoverConditions, setIsHoverConditions] = useState(false);
  /* UTILS */
  const inKilometers = (meters) => {
    return meters / 1000;
  };

  return (
    <div className='column second-column'>
      {/* full width top*/}
      <CountyAndDateTime weatherDataToday={weatherDataToday} />
      {/* center */}
      <div className='second-column-center'>
        {/* center left */}
        <div className='center-left'>
          <div
            className='center-left-row center-left-white-row '
            style={{ display: isHoverConditions ? 'none' : 'block' }}
          >
            <h3>
              feels like: <span>{weatherDataToday.main.feels_like} °C</span>
            </h3>
          </div>
          {/* conditions */}
          <div
            onMouseOver={() => {
              setIsHoverConditions(true);
            }}
            onMouseLeave={() => {
              setIsHoverConditions(false);
            }}
            className='center-left-row center-left-black-row hover-test'
            style={{
              height: isHoverConditions ? '100%' : '',
              backgroundColor: isHoverConditions ? 'black' : '',
            }}
          >
            {isHoverConditions ? (
              <div className='hovered-information'>
                {/* visibility */}
                <div className='center-left-row-hovered'>
                  <img src={conditionsIcon} alt='conditions-icon' />
                  <h3>
                    visibility:
                    <span>{inKilometers(weatherDataToday.visibility)} km</span>
                  </h3>
                </div>
                {/* pressure */}
                <div className='center-left-row-hovered'>
                  <img src={pressureIcon} alt='pressure-icon' />
                  <h3>
                    pressure:
                    <span>{weatherDataToday.main.pressure} hPa</span>
                  </h3>
                </div>
                {/* humidity */}
                <div className='center-left-row-hovered'>
                  <img src={humidityIcon} alt='humidity-icon' />
                  <h3>
                    humidity:
                    <span>{weatherDataToday.main.humidity}%</span>
                  </h3>
                </div>
              </div>
            ) : (
              <>
                <img
                  className='secondary-weather-icon'
                  src={conditionsIcon}
                  alt='conditions-icon'
                />
                <h3>conditions</h3>
              </>
            )}
          </div>
          {/* wind */}
          <div
            className='center-left-row center-left-black-row'
            style={{ display: isHoverConditions ? 'none' : 'flex' }}
          >
            <img
              className='secondary-weather-icon'
              src={windIcon}
              alt='wind-icon'
            />
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
