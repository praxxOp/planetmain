import React from 'react';
import Navbar from './components/navbar.jsx';
import Lefthome from './components/Lefthome.jsx';
import './App.css';

const App = () => {
  return (
    <div id='body'>
      <Navbar/>
    <div id="home">
       <Lefthome/>
      </div>
    </div>
   
  )  
}

export default App