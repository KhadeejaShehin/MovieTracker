import React from 'react';
import Navigation from './Pages/Navigation';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Details from './Pages/Details';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <Register />         
      <Details />          
    </div>
  );
}

export default App;


