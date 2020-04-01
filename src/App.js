import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Mainpage from './Container/Mainpage/Mainpage';
import '../node_modules/bulma/css/bulma.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  // ..
AOS.init();
  return (
    <div>

<Mainpage/>
    </div>
  );
}

export default App;
