import backgroundImage from '../../assets/images/background-image.svg';
import logo from '../../assets/images/bili-logo.svg';

import CityInput from '../../components/CityInput';
import { useGlobalContext } from '../../Context';

function Home() {
  const { isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <div
        className='background-container'
        style={{
          backgroundImage: `url(${backgroundImage})`,
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
        backgroundImage: `url(${backgroundImage})`,
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
