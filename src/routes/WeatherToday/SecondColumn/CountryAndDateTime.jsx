import { formatDate, formatTime } from '../../../helpers';
export function CountryAndDateTime({ country, dt, timezone, city }) {
  return (
    dt && (
      <div className='full-width-top'>
        <h3 className='country'>
          {city ? `${city}, ${country}` : `${country}`}
        </h3>
        <h3 className='local-time'>{formatDate(dt, timezone)}</h3>
        <h3>{formatTime(dt, timezone)}</h3>
      </div>
    )
  );
}
