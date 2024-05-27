const apiKey = import.meta.env.VITE_APP_API_KEY;
console.log(import.meta.env.VITE_APP_API_KEY);
const apiBaseURL = `https://api.openweathermap.org/`;

export const fetchLocation = async (cityName) => {
  const url = `geo/1.0/direct?q=${cityName}&limit=${1}&appid=${apiKey}`;
  console.log(url);

  try {
    const response = await fetch(apiBaseURL + url);
    console.log(response);
    if (!response.ok) {
      throw new Error(response.message);
    }
    const data = await response.json();
    console.log('fetchLocation:', data);
    return data;
  } catch (error) {
    alert(error);
  }
};

export const FetchWeatherToday = async (lat, lon) => {
  const url = `data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  console.log(url);
  try {
    const response = await fetch(apiBaseURL + url);
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    console.log('fetchWeatherToday:', data);
    return data;
  } catch (error) {
    alert(error);
  }
};
export const FetchFiveDayWeather = async (lat, lon) => {
  const url = `data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  console.log(url);
  try {
    const response = await fetch(apiBaseURL + url);
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    console.log('FetchFiveDayWeather:', data);
    return data;
  } catch (error) {
    alert(error);
  }
};
