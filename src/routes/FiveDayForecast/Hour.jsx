import { IconConverter } from '../../IconConverter';
import { formatTimeString } from '../../helpers';
export function Hour({ item }) {
  const { dt_txt, main, weather } = item;
  const time = dt_txt.split(' ')[1];
  return (
    <div className='card'>
      <h2>
        {/* Time: */} {formatTimeString(time)}
      </h2>
      <h1>
        {/* Temp: */} {main.temp.toFixed(0)}°C
      </h1>
      <img src={IconConverter(weather[0].icon)} alt='weather-icon' />
      <p>
        {/* Weather: */}
        {weather[0].description}
      </p>
    </div>
  );
}
