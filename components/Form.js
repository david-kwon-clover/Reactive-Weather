import React, { useState } from "react";

const Form = ({ location, setLocation }) => {
  const [typedLocation, setTypedLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setLocation(typedLocation);
    setTypedLocation("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="city">
        City:
        <input type="text" placeholder="type your city here..." value={typedLocation} onChange={(e) => setTypedLocation(e.target.value)}/>
      </label>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
