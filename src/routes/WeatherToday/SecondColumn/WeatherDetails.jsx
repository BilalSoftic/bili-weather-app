import { ConditionsAndWind } from './ConditionsAndWind';

import { SunriseAndSunset } from './SunriseAndSunset';

export function WeatherDetails() {
  return (
    <div className='second-column-center'>
      {/* center left */}
      <ConditionsAndWind />

      {/* center right */}
      <SunriseAndSunset />
    </div>
  );
}
