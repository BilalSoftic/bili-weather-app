import clearSkyDayIcon from './assets/weather-icons/clear-sky-day-icon.svg';
import clearSkyNightIcon from './assets/weather-icons/clear-sky-night-icon.svg';
import fewCloudsDayIcon from './assets/weather-icons/few-clouds-day-icon.svg';
import fewCloudsNightIcon from './assets/weather-icons/few-clouds-night-icon.svg';
import scatteredCloudsDayIcon from './assets/weather-icons/scattered-clouds-day-icon.svg';
import scatteredCloudsNightIcon from './assets/weather-icons/scattered-clouds-night-icon.svg';
import showerRainDayIcon from './assets/weather-icons/shower-rain-day-icon.svg';
import showerRainNightIcon from './assets/weather-icons/shower-rain-night-icon.svg';
import rainDayIcon from './assets/weather-icons/rain-day-icon.svg';
import rainNightIcon from './assets/weather-icons/rain-night-icon.svg';
import brokenCloudsIcon from './assets/weather-icons/broken-clouds-icon.svg';
import thunderstormIcon from './assets/weather-icons/thunderstorm-icon.svg';
import snowIcon from './assets/weather-icons/snow-icon.svg';
import mistIcon from './assets/weather-icons/mist-icon.svg';

export function IconConverter(icon) {
  switch (icon) {
    /* clear sky - Night */
    case '01d':
      return clearSkyDayIcon;

    /* clear sky - NIGHT */
    case '01n':
      return clearSkyNightIcon;

    /* few clouds - DAY */
    case '02d':
      return fewCloudsDayIcon;

    /* few clouds - NIGHT */
    case '02n':
      return fewCloudsNightIcon;

    /* scattered clouds - DAY */
    case '03d':
      return scatteredCloudsDayIcon;

    /* scattered clouds - NIGHT */
    case '03n':
      return scatteredCloudsNightIcon;

    /* shower rain - DAY */
    case '09d':
      return showerRainDayIcon;
    /* shower rain - NIGHT */
    case '09n':
      return showerRainNightIcon;
    /* rain - DAY */
    case '10d':
      return rainDayIcon;
    /* rain - NIGHT */
    case '10n':
      return rainNightIcon;
    /* broken clouds */
    case '04d':
    case '04n':
      return brokenCloudsIcon;
    /* thunderstorm */
    case '11d':
    case '11n':
      return thunderstormIcon;
    /* snow */
    case '13d':
    case '13n':
      return snowIcon;
    /* mist */
    case '50d':
    case '50n':
      return mistIcon;

    default:
      return `https://openweathermap.org/img/wn/${icon}@4x.png`;
  }
}
