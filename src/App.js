import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import SignUp from "./pages/Signup/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<SignUp/>} />
          <Route path="/Login" Component={Login} />
          <Route path="/resetpassword" Component={ResetPassword} />
          <Route path="/forgotpassword" Component={ForgotPassword} />   
          <Route path="/Signup" Component={SignUp} />     
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
