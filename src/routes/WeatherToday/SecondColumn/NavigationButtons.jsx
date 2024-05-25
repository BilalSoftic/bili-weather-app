import { Link } from 'react-router-dom';
export function NavigationButtons() {
  return (
    <div className='full-width-bottom'>
      <Link to='/'>
        <button type='button' className='button five-day-button'>
          see 5-day forecast
        </button>
      </Link>
      <Link to='/'>
        <button type='button' className='button back-to-search-button'>
          back to search
        </button>
      </Link>
    </div>
  );
}
