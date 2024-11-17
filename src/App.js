// App.js
import React from 'react';
import Footer from './js/Footer';
import Login from './js/Login';
import Navbar from './js/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content-wrap">
        <Login />
      </div>
      <Footer />
    </div>
  );
}

export default App;