import React from 'react'
import { Link } from 'react-router-dom'





export default function SignUp() {

  function goToNextPage() {
    window.location.href = 'nextpage.html';
  }

  return (
    <div>
      
      <div>
        <h1>Create Your Account</h1>
      </div>
  
      <form>
        <label for="name">Name</label><br/>
        <input type="text" id="name" name="name" placeholder='Enter your Name'></input><br/><br/>

        <label>Account Type</label>
        <input type="radio" id="admin" name="admin" value="Admin"></input>
        <label for="admin">Admin</label>
        <input type="radio" id="student" name="student" value="Student"></input>
        <label for="student">Student</label><br/><br/>
     
        <label for="email">Email Address</label><br/>
        <input type="email" id="email" name="email" placeholder='Enter your email address'></input><br/><br/>

        <label for="password">Password</label><br/>
        <input type="password" id="password" name="password" placeholder='Enter your password'></input><br/><br/>

        <input type="checkbox" id="checkbox" name="checkbox"></input>
        <label>I agree to All terms & Conditions</label><br/><br/>

        <button onClick={goToNextPage}>Sign Up</button>

      </form>

      <div>
        <h4>
          Already have an Account? <Link to='/'>Sign in </Link>
        </h4>
      </div>
      
      
    </div>
  )
}

