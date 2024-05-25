import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../Context';

function ErrorPage() {
  const { defaultBackgroundImage } = useGlobalContext();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundImage: `url(${defaultBackgroundImage})`,
      }}
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {location.state.errorMessage && (
        <p
          style={{ fontWeight: 'bold', marginBottom: '2em', fontSize: '1.1em' }}
        >
          {location.state.errorMessage}
        </p>
      )}
      <Link to='/'>
        <button type='button' className='button'>
          {' '}
          return to Home page
        </button>
      </Link>
    </div>
  );
}
export default ErrorPage;
