import React, { useState } from "react";

function ItineraryForm() {
  const [values, setValues] = useState({
    name: [],
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleNameInputChange = (event) => {
    setValues({ ...values, name: event.target.value });
  };

  const handleStartDateInputChange = (event) => {
    setValues({ ...values, startDate: event.target.value });
  };

  const handleEndDateInputChange = (event) => {
    setValues({ ...values, endDate: event.target.value });
  };

  const handleLocationInputChange = (event) => {
    setValues({ ...values, location: event.target.value });
  };

  const handleDescriptionInputChange = (event) => {
    setValues({ ...values, description: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      values.name &&
      values.startDate &&
      values.endDate &&
      values.location &&
      values.description
    ) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container text-center">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">You created an Itinerary!!</div>
        ) : null}
        <input
          onChange={handleNameInputChange}
          value={values.name}
          className="form-field"
          placeholder="Itinerary Name"
          name="name"
        />
        {submitted && !values.name ? (
          <span>Please enter an Itinerary Name</span>
        ) : null}
        <input
          onChange={handleStartDateInputChange}
          value={values.startDate}
          className="form-field"
          placeholder="Start Date"
          name="startDate"
        />
        {submitted && !values.startDate ? (
          <span>Please enter a Start Date</span>
        ) : null}
        <input
          onChange={handleEndDateInputChange}
          value={values.endDate}
          className="form-field"
          placeholder="End Date"
          name="endDate"
        />
        {submitted && !values.endDate ? (
          <span>Please enter an End Date</span>
        ) : null}
        <input
          onChange={handleLocationInputChange}
          value={values.location}
          className="form-field"
          placeholder="Location"
          name="location"
        />
        {submitted && !values.location ? (
          <span>Please enter a Location</span>
        ) : null}
        <input
          onChange={handleDescriptionInputChange}
          value={values.description}
          className="form-field"
          placeholder="Description"
          name="description"
        />
        {submitted && !values.description ? (
          <span>Please enter a Description</span>
        ) : null}
        <button className="form-field" type="submit">
          Add Itinerary
        </button>
      </form>
    </div>
  );
}

export default ItineraryForm;
