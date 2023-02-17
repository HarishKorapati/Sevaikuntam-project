
import "./Login.css";

import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to the server
    window.alert('Form submitted successfully!');
    setUsername('');
    setMobile('');
    setEmail('');
    setAmount('');

  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    
    <form onSubmit={handleSubmit}>
        <img alt='' src='https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9uYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'/>
      <div className="form-group">
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      </div>
<br></br>
<div className="form-group">
      <label htmlFor="mobile">Mobile Number:</label>
      <input
        type="tel"
        id="mobile"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        pattern="[0-9]{10}"
        required
      />
      </div>
<br></br>
<div className="form-group">
      <label htmlFor="email">Email ID:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      {email && !validateEmail(email) && (
        <div style={{ color: "red" }}>Please enter a valid email address</div>
      )}
</div>
<br></br>
<div className="form-group">
      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        min="0"
        step="0.01"
        required
      />
</div>
      <br></br>
    <div className="loginbutton">
      <button type="submit">Submit</button>
      </div>
    </form>
    
  );
}

export default LoginForm;

