import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home/Home';
import WeatherToday from './routes/WeatherToday/WeatherToday';
import ErrorPage from './routes/ErrorPage/ErrorPage';
import { AppProvider } from './Context';

const App = () => {
  return (
    <AppProvider>
      <Routes>
        {/* Context-props: loading, fetch */}
        {/* , */}
        <Route path='/' element={<Home />} />
        <Route path='/WeatherToday' element={<WeatherToday />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </AppProvider>
  );
};
export default App;
