import { useNavigate } from 'react-router-dom';
import { fetchLocation } from '../api';

import { useGlobalContext } from '../Context';
const CityInput = () => {
  const { city, setCity, setIsLoading, setLocalStorage } = useGlobalContext();

  const navigate = useNavigate();

  const handleChange = (event) => {
    setCity({ ...city, cityName: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (city.cityName.length !== 0) {
      setIsLoading(true);
      try {
        const newCity = await fetchLocation(city.cityName);
        console.log(newCity);
        const { name, lat, lon } = newCity[0];
        setCity({ ...city, cityName: name, lat, lon });
        setLocalStorage({ ...city, cityName: name, lat, lon });
        navigate('/WeatherToday');
      } catch (error) {
        console.log('FetchLocation error:', error);
        navigate('*', {
          state: {
            errorMessage: 'Location not found, please try again.',
          },
        });
      }

      setIsLoading(false);
    } else {
      alert('Please input a city name');
    }
  };
  return (
    <form
      className='input-container'
      onSubmit={handleSubmit}
      action='/WeatherToday'
    >
      <h1 className='main-header'>What's the weather like?</h1>
      <input
        type='search'
        placeholder='Search City'
        className='city-input'
        name='name'
        value={city.name}
        onChange={handleChange}
      />
    </form>
  );
};
export default CityInput;
