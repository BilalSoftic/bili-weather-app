import { useState } from 'react';
import backgroundImage from '../../assets/images/background-image.svg';
import logo from '../../assets/images/bili-logo.svg';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import { fetchLocation } from '../../api';
import { Navigate } from 'react-router-dom';

function Home() {
  const [city, setCity] = useState({ name: '', lat: 0, lon: 0 });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setCity({ ...city, name: event.target.value });
    console.log(city);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const newCity = await fetchLocation(city.name);

    const { name, lat, lon } = newCity[0];
    setCity({ ...city, name, lat, lon });
    console.log(city);

    setIsLoading(false);
    /*  navigate('/WeatherToday', { state: city }); */
  };

  return (
    <div
      className='background-container'
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className='container'>
        <img className='logo' src={logo} alt='bili-logo.svg'></img>
        <form
          className='input-container'
          onSubmit={handleSubmit}
          action='/WeatherToday'
        >
          <h2 className='main-header'>What's the weather like?</h2>
          <input
            type='search'
            placeholder='Search City'
            className='input'
            value={city.name}
            onChange={handleChange}
          />
        </form>
        {isLoading && (
          <div>
            <h2 className='main-header'>Loading...</h2>
          </div>
        )}
      </div>
    </div>
  );
}
export default Home;
