import defaultBackground from './assets/images/default-background-image.jpg';
import clearSkyBackground from './assets/images/clear-sky-background-image.jpg';
import fewCloudsBackground from './assets/images/few-clouds-background-image.jpg';
import scatteredCloudsBackground from './assets/images/scattered-clouds-background-image.jpg';
import showerRainBackground from './assets/images/shower-rain-background-image.jpg';
import rainBackground from './assets/images/rain-background-image.jpg';
import brokenCloudsBackground from './assets/images/broken-clouds-background-image.jpg';
import thunderstormBackground from './assets/images/thunderstorm-background-image.jpg';
import snowBackground from './assets/images/snow-background-image.jpg';
import mistBackground from './assets/images/mist-background-image.jpg';

export function BackgroundImageConverter(iconCode) {
  switch (iconCode) {
    /* clear sky */
    case '01d':
    case '01n':
      return clearSkyBackground;

    /* few clouds */
    case '02d':
    case '02n':
      return fewCloudsBackground;

    /* scattered clouds */
    case '03d':
    case '03n':
      return scatteredCloudsBackground;

    /* shower rain*/
    case '09d':
    case '09n':
      return showerRainBackground;
    /* rain */
    case '10d':
    case '10n':
      return rainBackground;
    /* broken clouds */
    case '04d':
    case '04n':
      return brokenCloudsBackground;
    /* thunderstorm */
    case '11d':
    case '11n':
      return thunderstormBackground;
    /* snow */
    case '13d':
    case '13n':
      return snowBackground;
    /* mist */
    case '50d':
    case '50n':
      return mistBackground;

    default:
      return defaultBackground;
  }
}
