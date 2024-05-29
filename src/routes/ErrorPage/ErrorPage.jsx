import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../Context';

function ErrorPage() {
  const { defaultBackgroundImage } = useGlobalContext();

  const navigate = useNavigate();
  /*  useEffect(() => {
    const timeoutID = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);
 */
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
      <article
        style={{
          background: 'rgba(255,255,255,0.5)',
          padding: '2rem',
          borderRadius: '1rem',
        }}
      >
        <h1 style={{ fontSize: '2rem' }}>Oops!</h1>
        <p
          style={{ fontWeight: 'bold', marginBottom: '2rem', fontSize: '3rem' }}
        >
          404, page not found!
        </p>
        <Link to='/'>
          <button type='button' className='button back-to-search-black-button'>
            back to search
          </button>
        </Link>
      </article>
    </div>
  );
}
export default ErrorPage;
