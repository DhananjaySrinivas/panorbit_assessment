import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage';
import UserDetails from './Components/UserDetails';


function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<UserDetails />} />
    </Routes>
    </div>
  );
}

export default App;
