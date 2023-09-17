import React from "react";
import { Link } from "react-router-dom";
import './SignUp.css';

export default function SignUp() {
  return (
    
<div class="wrapper"> 

<div className='dashboard'>
      <div className='left-corner'>
        <div>
            <div className='edu-image1'>
                <img src= "./images/edu.png" alt=""/>
            </div>
            <span className='main-description'>Revolutionize Learning With <br/>Our Cutting-Edge LMS Platform</span> 
        </div>
        
        <div className='middle-image'>
            <img src= "./images/edu2_new.png" alt=""/>
        </div>

        <div className='open-inverted'>
            <img src= "./images/Open_inverted.png" alt=""/>
        </div>

        <span className='other-description'>Unlock the Future of Education and Training with <br/>Seamless Online Learning Solutions</span>
        
        <div className='close-inverted'>
            <img src= "./images/Close_inverted.png" alt=""/>
        </div>

        </div>       
    </div>
  
 <div class="signup-box">  
     
    <div class="header">
       <h1>Create Your Account</h1>
    </div>
       
    
 <div class="form">
   <form>
     <div class="input-label"><label for="name">Name</label>
       <input type="text" id="name" name="name" placeholder='Enter your Name'></input>
     </div>
      <div class="accounts-type">
       <label>Account Type</label>
       <input type="radio" id="admin" name="admin" value="Admin"></input>
       <label for="admin">Admin</label>
       <input type="radio" id="student" name="student" value="Student"></input>
       <label for="student">Student</label>
     </div> 
       
    <div class="input-label">
      <label for="email">Email Address</label>
      <input type="email" id="email" name="email" placeholder='Enter your email address'></input>

      <label for="password">Password</label>
      <input type="password" id="password" name="password" placeholder='Enter your password'></input>
    </div>

    </form>
  </div>

 <div class="all-terms"><input type="checkbox" id="checkbox" name="checkbox"></input>
   <label>I agree to All terms & Conditions</label></div> 

       <button class="btn">Signup</button>

       <div class="signup-link">
         <p>Already have an Account? <a href="#" >Sign in</a></p>
       </div>
 
  </div>
</div>
       
  );
}
