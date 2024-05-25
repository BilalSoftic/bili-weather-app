import { useState } from 'react';
import { Wind } from './Wind';
import { Conditions } from './Conditions';
import { useGlobalContext } from '../../../Context';

export function ConditionsAndWind() {
  const [isConditionsHover, setIsConditionsHover] = useState(false);
  const [isWindHover, setIsWindHover] = useState(false);
  const { weatherDataToday } = useGlobalContext();
  return (
    <div className='center-left'>
      {/* feels like */}
      <div
        className='center-left-row center-left-white-row '
        style={{
          display: isConditionsHover || isWindHover ? 'none' : 'block',
        }}
      >
        <h3>
          feels like: <span>{weatherDataToday.main.feels_like} °C</span>
        </h3>
      </div>
      {/* conditions */}
      <Conditions
        setIsConditionsHover={setIsConditionsHover}
        isConditionsHover={isConditionsHover}
        isWindHover={isWindHover}
      />
      {/* wind */}
      <Wind
        isConditionsHover={isConditionsHover}
        isWindHover={isWindHover}
        setIsWindHover={setIsWindHover}
      />
    </div>
  );
}
