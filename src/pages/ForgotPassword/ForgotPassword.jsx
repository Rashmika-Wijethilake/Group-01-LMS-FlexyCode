import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../ForgotPassword/ForgotPassword.css';

export default function ForgotPassword() {
    return ( 
        <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
        <div className="forgot-password">
          <h5 className='heading mb-4'>Enter the email address associated with your account and we'll sent you a code to reset your password</h5>
  
          <form className='need-validation'>
              <div className='form-group was-validated mb-4'>
                <div className="Email">
                  <input type="email" id="email" name="email" placeholder="Email Address" className='form-control' required></input>
                  <div className='invalid-feedback'>
                      Enter valid email address
                  </div>
                </div>
              </div>

              <button type="submit" className='btn-continue btn btn-info w-100 mt-2'>Continue</button>
          </form>
        </div>
      </div>

    );
}
