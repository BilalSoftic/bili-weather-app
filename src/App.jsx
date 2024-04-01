import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home/Home';
import WeatherToday from './routes/WeatherToday/WeatherToday';
import ErrorPage from './routes/ErrorPage/ErrorPage';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/WeatherToday' element={<WeatherToday />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};
export default App;
