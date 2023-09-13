import {BrowserRouter, Routes, Route  } from 'react-router-dom';
import SignUp from './pages/SignUp';
import ResetPassword from "./pages/ResetPassword";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route index element={<ResetPassword/>}/>       
        

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
