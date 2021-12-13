import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import LoginRegister from './pages/LoginRegister.jsx';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<LoginRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
