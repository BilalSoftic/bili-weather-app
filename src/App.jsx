import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home/Home';
import WeatherToday from './routes/WeatherToday/WeatherToday';
import ErrorPage from './routes/ErrorPage/ErrorPage';
import FiveDayForecast from './routes/FiveDayForecast/FiveDayForecast';
import { AppProvider } from './Context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/WeatherToday' element={<WeatherToday />} />
        <Route path='/FiveDayForecast' element={<FiveDayForecast />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <ToastContainer position='top-center' theme='dark' autoClose={2500} />
    </AppProvider>
  );
};
export default App;
