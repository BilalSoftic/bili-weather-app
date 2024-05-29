import CityInput from './CityInput';
import { useGlobalContext } from '../../Context';

function Home() {
  const { isLoading, logo, defaultBackgroundImage } = useGlobalContext();

  if (isLoading) {
    return (
      <div
        className='background-container'
        style={{
          backgroundImage: `url(${defaultBackgroundImage})`,
        }}
      >
        <div className='loader'></div>
      </div>
    );
  }
  return (
    <div
      className='background-container'
      style={{
        backgroundImage: `url(${defaultBackgroundImage})`,
      }}
    >
      <div className='center-container'>
        <img className='logo home-logo' src={logo} alt='bili-logo.svg'></img>
        <CityInput />
      </div>
    </div>
  );
}
export default Home;
