import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../ForgotPassword/ForgotPassword.css';

export default function ForgotPassword() {
    return ( 
        <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
        <div className="forgot-password-fp">
          <h5 className='heading'>Enter the email address associated with your account and we'll sent you a code to reset your password</h5>
  
          <form className='need-validation'>
              <div>
                <div className="Email">
                  <input type="email" id="email" name="email" placeholder="Email Address" className='form-control' required></input>
                </div>
              </div>

              <button type="submit" className='btn-fp'>Continue</button>
          </form>
        </div>
      </div>

    );
}
