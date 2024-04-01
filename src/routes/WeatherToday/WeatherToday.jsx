import { Link } from 'react-router-dom';

function WeatherToday({}) {
  return (
    <div>
      <h1>Weather Today</h1>
      <Link to='/'>
        <button type='button' className='button'>
          back to Home Page
        </button>
      </Link>
    </div>
  );
}
export default WeatherToday;
