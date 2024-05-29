import { CountryAndDateTime } from './CountryAndDateTime';
import { WeatherDetails } from './WeatherDetails';
import { NavigationButtons } from './NavigationButtons';
import { useGlobalContext } from '../../../Context';

export function SecondColumn() {
  const { weatherDataToday } = useGlobalContext();

  const { dt, timezone, sys } = weatherDataToday;
  return (
    <div className='column second-column'>
      {/* full width top*/}
      <CountryAndDateTime dt={dt} timezone={timezone} country={sys.country} />
      {/* center */}
      <WeatherDetails />
      {/* full width bottom */}
      <NavigationButtons />
    </div>
  );
}
