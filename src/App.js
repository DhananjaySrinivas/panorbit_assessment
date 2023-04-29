import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../src/Pages/HomePage';
import UserDetails from '../src/Pages/UserDetails';
import Posts from './Pages/Posts';
import Gallery from './Pages/Gallery';
import Todo from './Pages/Todo';


function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<UserDetails />} />
        <Route path="post" element={<Posts />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="todo" element={<Todo />} />
    </Routes>
    </div>
  );
}

export default App;
