import React from 'react';
export function FirstColumn({ logo, weatherDataToday, cityName }) {
  return (
    <div className='column first-column'>
      <img
        className='logo weather-today-logo'
        src={logo}
        alt='bili-logo.svg'
      ></img>

      <div
        className='weather-image-container'
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          src={`https://openweathermap.org/img/wn/${weatherDataToday.weather[0].icon}@4x.png`}
          alt='#'
        />
        <h3 className='weather-image-description'>
          {weatherDataToday.weather[0].description}
        </h3>
      </div>
      <div className='first-column-weather-information '>
        <h2>{cityName}</h2>
        <p>{weatherDataToday.name}</p>
        <h1>{weatherDataToday.main.temp} °C</h1>
      </div>
    </div>
  );
}
