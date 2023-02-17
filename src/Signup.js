

import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    aadharNumber: '',
    mobileNumber: '',
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <input type="text" id="gender" name="gender" onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="aadharNumber">Aadhar Number:</label>
        <input type="text" id="aadharNumber" name="aadharNumber" onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input type="text" id="mobileNumber" name="mobileNumber" onChange={handleInputChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;



