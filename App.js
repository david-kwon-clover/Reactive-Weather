import React, { useState } from 'react';
// Import data and WeatherCard here
import cities from "./data";
import WeatherCard from './components/WeatherCard';
import Location from './components/Location';

function App() {
    const [location, setLocation] = useState("New York City");
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <Location data={data} location={location} setLocation={setLocation} />
            <div className = "app">
                {cities.map((city, index) => {
                    return <WeatherCard key={index} city={city} />
                })}
            </div>
        </>
    )
}

export default App;