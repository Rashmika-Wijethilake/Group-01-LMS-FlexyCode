import React, { useState } from 'react';
import './Login.css'; // We'll create this CSS file

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
  };

  return (

    <div>
    <div className='img' >
      <img src="loginicon.png" alt="Logo" />
    </div>

    <div className="login-container1">

    <div className="login-container">
      <p1 className='bold-paragraph'>Hello There, Welcome back</p1>
      <br/><br/><p1 className='bold-paragraph1'> Please enter your details</p1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Email Address"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-row">
        <div className="remember-me">
          <label >
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember Me
          </label>
          <label className="forgot-password">
            <a href="#">Forgot Password</a>
          </label>
          </div>
      </div>

      <button className="login-button" onClick={handleLogin}>
        Sign In
      </button>

      <div className="no-account">
        <p className='bold-paragraph1'>Don't have an account? <a href="#">Sign up</a></p>
      </div>

    </div>
   </div>
   </div>

   
  );
}

export default Login;