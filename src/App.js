import {BrowserRouter, Routes, Route  } from 'react-router-dom';
import SignUp from './pages/SignUp';
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from './pages/ForgotPassword';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        {/* <Route index element={<SignUp/>}/>      
        <Route index element={<ResetPassword/>}/>   */}
        <Route index element={<ForgotPassword/>}/>  
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
