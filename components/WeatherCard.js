import React from "react";
import sunny from "../assets/Sunny.svg";
import rainy from "../assets/Rainy.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";
import cloudy from "../assets/Cloudy.svg";

function WeatherCard({ city }) {
  function camelCase(str) {
    // Using replace method with regEx
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

  const weatherImages = {
    "sunny": sunny,
    "rainy": rainy,
    "partlyCloudy": partlyCloudy,
    "cloudy": cloudy
  }

  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {weatherImages[camelCase(city.forecast)]} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{city.city}</h3>
            <h5 className="card-text">{city.temperature}°F</h5>
            <h5 className="card-text">{city.forecast}</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard
export default WeatherCard;