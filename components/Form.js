import React, { useState } from "react";
import cities from "../data";

const Form = ({ location, setLocation }) => {
  const [typedLocation, setTypedLocation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const cityNames = cities.map((city) => {
    return city.city;
  })

  function capitalizeWords(str) {
    return str.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }

  function handleSubmit(e) {
    e.preventDefault();
    const parsedLocation = capitalizeWords(typedLocation);
    if(!cityNames.includes(parsedLocation)) {
      setErrorMessage("Location not found...")
    } else {
      setLocation(parsedLocation);
      setTypedLocation("");
    }
  }

  return (
    <section className="form-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <label className="city">
          City:
          <input type="text" placeholder="type your city here..." value={typedLocation} onChange={(e) => setTypedLocation(e.target.value)}/>
        </label>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      <p className="form-error-message">{errorMessage}</p>
    </section>
  );
};

export default Form;
