import {BrowserRouter, Routes, Route  } from 'react-router-dom';
import SignUp from './pages/SignUp';




function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route index element={<SignUp/>}/>       
        

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
