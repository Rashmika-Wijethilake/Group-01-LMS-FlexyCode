import React from 'react';

export default function ForgotPassword() {
    return ( <
        > < div >
        <
        div className = "head" >
        <
        h4 > Enter the Email address associated with your account, and we 'll send you a code to reset your password.</h4> <
        /div>

        <
        div className = 'Email' >
        <
        input type = 'email'
        id = 'email'
        name = 'email'
        placeholder = 'Enter your email address' > < /input><br></br >
        <
        /div>

        <
        /div><button type="submit">Continue</button > < />

        <
        /div>

    );
}