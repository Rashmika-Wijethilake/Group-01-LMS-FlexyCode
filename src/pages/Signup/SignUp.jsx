import React from "react";
import { Link } from "react-router-dom";
import './SignUp.css';

export default function SignUp() {
  return (
    <div class="wrapper">
 
  
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
