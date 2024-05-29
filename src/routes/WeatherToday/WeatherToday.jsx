import { SecondColumn } from './SecondColumn/SecondColumn';
import { FirstColumn } from './FirstColumn/FirstColumn';
import { useEffect } from 'react';
import { useGlobalContext } from '../../Context';
import { BackgroundImageConverter } from '../../BackgroundImageConverter';

function WeatherToday() {
  const {
    weatherDataToday,
    isLoading,
    defaultBackgroundImage,
    handleDataForWeatherToday,
  } = useGlobalContext();

  useEffect(() => {
    handleDataForWeatherToday();
  }, []);

  if (isLoading) {
    return (
      <div
        className='background-container'
        style={{
          backgroundImage: `url(${defaultBackgroundImage})`,
        }}
      >
        <div className='loader'></div>
      </div>
    );
  }

  return (
    weatherDataToday &&
    weatherDataToday?.main?.feels_like && (
      <div
        className='background-container'
        style={{
          backgroundImage: `url(${BackgroundImageConverter(
            weatherDataToday.weather[0].icon
          )})`,
        }}
      >
        <div className='columns-container'>
          <FirstColumn />
          <SecondColumn weatherDataToday={weatherDataToday} />
        </div>
      </div>
    )
  );
}
export default WeatherToday;
