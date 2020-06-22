import React, { useState } from "react";
const axios = require("axios");

function MailButton() {
  const [formState, setFormState] = useState(true);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    axios.post('http://localhost:9000/sendEmail', {
        email: value
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <>
      {formState ? (
        <div
          onClick={() => setFormState(!formState)}
          className="summary button"
        >
          Send Me an Email Summary
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="summary-form">
          <input
            type="email"
            className="summary-input"
            value={value}
            onChange={handleChange}
            placeholder="Enter Email"
          />
          <button onClick={handleSubmit} className="button summary-input-button">
            Send!
          </button>
        </form>
      )}
    </>
  );
}

export default MailButton;
