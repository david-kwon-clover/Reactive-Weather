import React from 'react';
import WeatherCard from './WeatherCard';

const Location = ({ data, location, setLocation }) => {
  const target = data.find((city) => {
    return city.city === location;
  }) 
  return (
    <WeatherCard city={target} title="Your Location's Weather" />
  )
}

export default Location