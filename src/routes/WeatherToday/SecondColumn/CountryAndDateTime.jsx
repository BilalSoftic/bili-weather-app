import { formatDate, formatTime } from '../../../helpers';
import { useGlobalContext } from '../../../Context';
export function CountryAndDateTime() {
  const { weatherDataToday } = useGlobalContext();

  const { dt, timezone, sys } = weatherDataToday;

  return (
    dt && (
      <div className='full-width-top'>
        <h3 className='country'>{sys.country}</h3>
        <h3 className='local-time'>{formatDate(dt, timezone)}</h3>
        <h3>{formatTime(dt, timezone)}</h3>
      </div>
    )
  );
}
