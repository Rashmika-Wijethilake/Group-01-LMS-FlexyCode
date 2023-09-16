import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../ResetPassword/ResetPassword.css';

function ResetPassword() {
  return (
    <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
      <div className="reset-password">
        <h5 className='heading mb-4'>Reset your password for the EVIDIO Learning Management System</h5>

        <form className='need-validation'>
            <div className='form-group was-validated mb-4'>
              <div className="new-password">
                <input type="password" id="password" name="password" placeholder="New Password" className='form-control' required></input>
                <div className='invalid-feedback'>
                    Password should contain 8 characters
                </div>
              </div>
            </div>

            <div className='form-group was-validated mb-4'>
              <div className="confirm-password">
                <input type="password" id="password" name="newPassword" placeholder="Re enter your new password" className='form-control' required></input>
              </div>
            </div>

            <button type="submit" className='btn-create btn btn-info w-100 mt-2'>Create</button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
