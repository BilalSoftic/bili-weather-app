import { useNavigate } from 'react-router-dom';
import { fetchLocation } from '../../api';

import { useGlobalContext } from '../../Context';
import { useState } from 'react';
const CityInput = () => {
  const { city, setCity, setIsLoading, setLocalStorage, toast } =
    useGlobalContext();
  const [cityName, setCityName] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setCityName(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cityName.length !== 0) {
      setIsLoading(true);
      try {
        const newCity = await fetchLocation(cityName);
        console.log(newCity);
        const { name, lat, lon } = newCity[0];
        setCity({ ...city, cityName: name, lat, lon });
        setLocalStorage({ ...city, cityName: name, lat, lon });
        navigate('/WeatherToday');
      } catch (error) {
        console.log('FetchLocation error:', error);
        toast.error('Location not found, please try again.');
      }
      setIsLoading(false);
    } else {
      toast.error('City name required!');
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
