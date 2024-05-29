import React from 'react';
import conditionsIcon from '../../../assets/weather-icons/conditions-icon.svg';
import pressureIcon from '../../../assets/weather-icons/pressure-icon.svg';
import humidityIcon from '../../../assets/weather-icons/humidity-icon.svg';
import { inKilometers } from '../../../helpers';
import { useGlobalContext } from '../../../Context';
import { FaTimes } from 'react-icons/fa';

export function Conditions({
  setIsConditionsHover,
  isConditionsHover,
  isWindHover,
}) {
  const { weatherDataToday } = useGlobalContext();
  const { visibility, main } = weatherDataToday;
  return (
    <div
      onMouseOver={() => setIsConditionsHover(true)}
      onMouseLeave={() => setIsConditionsHover(false)}
      className='center-left-row center-left-black-row'
      style={{
        height: isConditionsHover ? '100%' : '',
        backgroundColor: isConditionsHover ? 'black' : '',
        display: isWindHover ? 'none' : 'flex',
      }}
    >
      {isConditionsHover ? (
        <div className='hovered-information'>
          <button
            type='button'
            className='hide-button'
            onClick={() => setIsConditionsHover(false)}
          >
            <FaTimes />
          </button>
          {/* visibility */}
          <div className='center-left-row-hovered'>
            <img src={conditionsIcon} alt='conditions-icon' />
            <h3>
              visibility:
              <span>{inKilometers(visibility)} km</span>
            </h3>
          </div>
          {/* pressure */}
          <div className='center-left-row-hovered'>
            <img src={pressureIcon} alt='pressure-icon' />
            <h3>
              pressure:
              <span>{main.pressure} hPa</span>
            </h3>
          </div>
          {/* humidity */}
          <div className='center-left-row-hovered'>
            <img src={humidityIcon} alt='humidity-icon' />
            <h3>
              humidity:
              <span>{main.humidity}%</span>
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
  );
}
