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
          <Route index element={<ResetPassword/>} />
          <Route path="/" Component={<Login />} />
          <Route path="/reset-password" Component={<ResetPassword />} />
          <Route path="/forgot-password" Component={<ForgotPassword />} />        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
