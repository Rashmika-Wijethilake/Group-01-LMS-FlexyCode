import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
<<<<<<< Updated upstream
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
=======
import forgot password from './pages/forgot password';



function App() {
    return ( <
        div className = "App" >
        <
        BrowserRouter >
        <
        Routes >
        <
        Route index element = { < forgot password / > }
        />       


        <
        /Routes> <
        /BrowserRouter> <
        /div>
    );
>>>>>>> Stashed changes
}

export default App;