import { useNavigate } from 'react-router-dom';
import { fetchLocation } from '../api';
import { useState } from 'react';
const CityInput = ({ setIsLoading }) => {
  const [city, setCity] = useState({ name: '', lat: 0, lon: 0 });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setCity({ ...city, [event.target.name]: event.target.value });
    console.log(city);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (city.name.length !== 0) {
      setIsLoading(true);
      try {
        const newCity = await fetchLocation(city.name);
        console.log(newCity);
        const { name, lat, lon } = newCity[0];
        setCity({ ...city, name, lat, lon });
        navigate('/WeatherToday', { state: { ...city, name, lat, lon } });
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
