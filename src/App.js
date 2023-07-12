import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import  Banner  from './components/Banner';
import  About  from './components/About';
import  Feature  from './components/Features';
import  Case from './components/Cases';
import  Testimonials from './components/Testimonials';
import  Quiz from './components/Quiz';
import  Partner from './components/Partners';
import Sign   from './components/Sign'
import Party   from './components/Party'
import Footer   from './components/Footer'


function App() {
  return (
    <>
    <Router>
      <Navbar />
    </Router>

      <Router>
        < Banner />
      </Router>

      <Router>
        < About />
      </Router>

      <Router>
        < Feature />
      </Router>

      <Router>
        < Case />
      </Router>

      <Router>
        < Testimonials />
      </Router>

      <Router>
        < Quiz />
      </Router>

      <Router>
        < Partner />
      </Router>

      <Router>
        < Sign />
      </Router>

      <Router>
        < Party />
      </Router>

      <Router>
        < Footer/>
      </Router>
     
    </>
  );
}

export default App;
