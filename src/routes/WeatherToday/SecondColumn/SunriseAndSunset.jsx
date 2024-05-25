import sunriseIcon from '../../../assets/weather-icons/sunrise-icon.svg';
import sunsetIcon from '../../../assets/weather-icons/sunset-icon.svg';
import { formatTime } from '../../../helpers';
import { useGlobalContext } from '../../../Context';
export function SunriseAndSunset() {
  const { weatherDataToday } = useGlobalContext();
  const { sys, timezone } = weatherDataToday;
  return (
    <div className='center-right'>
      {/* sunrise */}
      <div className='sun-container'>
        <div className='sun-icon-container'>
          <img src={sunriseIcon} alt='sunrise-icon' />
          <p>sunrise</p>
        </div>
        <h2>{formatTime(sys.sunrise, timezone)}</h2>
      </div>
      {/* sunset */}
      <div className='sun-container'>
        <div className='sun-icon-container'>
          <img src={sunsetIcon} alt='sunset-icon' />
          <p>sunset</p>
        </div>
        <h2>{formatTime(sys.sunset, timezone)}</h2>
      </div>
    </div>
  );
}
