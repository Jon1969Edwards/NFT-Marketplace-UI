import './App.css';
import React from 'react';
import {Navbar,Footer} from './components'
import {Home,Profile,Item, Slots, Create,Login,Register} from './pages'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":item/:id" element={<Item />} />
            <Route path="/slots" element={<Slots />} />
            <Route path="/create" element={<Create /> } />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/login" element={ <Login />} />
            <Route path="/register" element={ <Register />} />
          </Routes>
      <Footer />
    </div>
  );
}

export default App;
