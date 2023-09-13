import React from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  return (
    <div>
      <div>
        <h1>Enter the Email address associated with your account, and we'll send you a code to reset your password.</h1>
      </div>

      <form>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
        />
        <br />
        <br />
        
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}
