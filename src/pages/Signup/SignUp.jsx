import React from "react";
import { Link } from "react-router-dom";
import './SignUp.css';
import spimage from './../../assets/spimage.png';
import invertedclose from './../../assets/invertedclose.png';
import invertedopen from './../../assets/invertedopen.png';
import upicon from './../../assets/upicon.png';

export default function SignUp() {
  return (
    
<div class="wrapper-sp"> 
<div  className='left-corner'>
        <div>
            <div className='edu-image1'>
                <img src= {upicon} alt=""/>
            </div>
            <span className='main-description'>Revolutionize Learning With <br/>Our Cutting-Edge LMS Platform</span> 
        </div>
        
        <div className='middle-image'>
            <img src={spimage} alt=""/>
        </div>

        <div className='open-inverted'>
            <img src= {invertedopen} alt=""/>
        </div>

        <span className='other-description'>Unlock the Future of Education and Training with <br/>Seamless Online Learning Solutions</span>
        
        <div className='close-inverted'>
            <img src= {invertedclose} alt=""/>
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
         <p>Already have an Account? <Link to='/Login'>Sign in</Link></p>
       </div>
 
  </div>
</div>
       
  );
}
