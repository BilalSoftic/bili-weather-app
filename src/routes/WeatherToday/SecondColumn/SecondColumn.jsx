import { CountyAndDateTime } from './CountyAndDateTime';
import { WeatherDetails } from './WeatherDetails';
import { NavigationButtons } from './NavigationButtons';

export function SecondColumn() {
  return (
    <div className='column second-column'>
      {/* full width top*/}
      <CountyAndDateTime />
      {/* center */}
      <WeatherDetails />
      {/* full width bottom */}
      <NavigationButtons />
    </div>
  );
}
