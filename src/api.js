const apiKey = import.meta.env.VITE_APP_API_KEY;
console.log(import.meta.env.VITE_APP_API_KEY);
const apiBaseURL = `https://api.openweathermap.org/`;

export const fetchLocation = async (cityName) => {
  const url = `geo/1.0/direct?q=${cityName}&limit=${1}&appid=${apiKey}`;
  console.log(url);
  try {
    const response = await fetch(apiBaseURL + url);
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    console.log('fetchData:', data);
    return data;
  } catch (error) {
    console.log('Error fetching data: ', error);
  }
};
