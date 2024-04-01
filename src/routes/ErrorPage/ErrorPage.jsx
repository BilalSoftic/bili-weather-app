import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
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
      }}
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p></p>
      <Link to='/'>
        <button className='button'> return to Home page</button>
      </Link>
    </div>
  );
}
export default ErrorPage;
