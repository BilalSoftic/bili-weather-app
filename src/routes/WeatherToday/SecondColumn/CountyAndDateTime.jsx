import React from 'react';
import { formatDate, formatTime } from '../../../helpers';
export function CountyAndDateTime({ weatherDataToday }) {
  return (
    <div className='full-width-top'>
      <h3 className='country'>{weatherDataToday.sys.country}</h3>
      <h3 className='local-time'>
        {formatDate(weatherDataToday.dt, weatherDataToday.timezone)}
      </h3>
      <h3>{formatTime(weatherDataToday.dt, weatherDataToday.timezone)}</h3>
    </div>
  );
}
