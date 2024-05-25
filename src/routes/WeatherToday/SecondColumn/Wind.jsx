import windIcon from '../../../assets/weather-icons/wind-icon.svg';
import speedIcon from '../../../assets/weather-icons/speed-icon.svg';
import directionIcon from '../../../assets/weather-icons/direction-icon.svg';
import { getWindDirection, inKilometersPerHour } from '../../../helpers';
import { useGlobalContext } from '../../../Context';
import { useRef, useState, useEffect } from 'react';
export function Wind({ isConditionsHover, isWindHover, setIsWindHover }) {
  const [childCount, setChildCount] = useState(0);

  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      setChildCount(containerRef.current.childElementCount);
    }
    console.log(childCount);
  }, [isWindHover]);

  const { weatherDataToday } = useGlobalContext();
  const { speed, deg, gust } = weatherDataToday.wind;

  return (
    <div
      onMouseOver={() => {
        setIsWindHover(true);
      }}
      onMouseLeave={() => {
        setIsWindHover(false);
      }}
      className='center-left-row center-left-black-row'
      style={{
        height: isWindHover ? '100%' : '',
        backgroundColor: isWindHover ? 'black' : '',
        display: isConditionsHover ? 'none' : 'flex',
      }}
    >
      {isWindHover ? (
        <div
          className='hovered-information'
          ref={containerRef}
          style={{
            justifyContent: childCount === 2 ? 'center' : 'space-between',
            gap: childCount === 2 ? '3.5rem' : '',
          }}
        >
          {/* speed */}
          <div className='center-left-row-hovered'>
            <img src={speedIcon} alt='speed-icon' />
            <h3>
              speed:
              <span>{inKilometersPerHour(speed).toFixed(2)} km/h</span>
            </h3>
          </div>
          {/* direction */}
          <div className='center-left-row-hovered'>
            <img src={directionIcon} alt='direction-icon' />
            <h3>
              direction:
              <span>{getWindDirection(deg)}</span>
            </h3>
          </div>
          {/* gust */}
          {gust && (
            <div className='center-left-row-hovered'>
              <img src={windIcon} alt='wind-icon' />
              <h3>
                gust:
                <span>{inKilometersPerHour(gust).toFixed(2)}</span>
              </h3>
            </div>
          )}
        </div>
      ) : (
        <>
          <img
            className='secondary-weather-icon'
            src={windIcon}
            alt='wind-icon'
          />
          <h3>wind</h3>
        </>
      )}
    </div>
  );
}
