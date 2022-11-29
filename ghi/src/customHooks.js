import { useState } from "react";

export const useEventForm = () => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  };
  return {
    handleInputChange,
    handleSubmit,
    inputs,
  };
};

//maybe not needed?
