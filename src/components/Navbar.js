// import React, { useState } from 'react'
// import { FaBars, FaTimes,FaSearch  } from 'react-icons/fa'
// import {BsMoon} from 'react-icons/bs'
// import {Link} from 'react-router-dom'
// import '../index.css'
// import logo from "../assets/logo.png"
// import Arc from "../assets/tabler_window-maximize.png"


// const Navbar = () => {
//     const [nav, setNav] = useState(false)
//     const handleNav = () => setNav(!nav)


//     return (
//         <div name='top' className='navbar'>
//             <div className="container">
//                 <div className="logo">
                  
//                   <Link to='/'><img src={logo} alt="logo" /></Link>

//                   <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
//                     <li><Link to='/'>Docs</Link></li>
//                     <li><Link to='/'>Blog</Link> </li>
//                     <li><Link to='/'>About Us</Link></li>
//                  </ul>
//                 </div>

              

               

//                 <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
//                     <li><Link to='/'>Support <img src={Arc} alt="arrow" /> </Link></li>
//                     <li><Link to='/'>Portal <img src={Arc} alt="arrow" /></Link> </li>
//                     <li><Link to='/'>Register <img src={Arc} alt="arrow" /></Link></li>
//                     <li className='sun' ><BsMoon/></li>
//                     <li>
//                    <div className="search">
//                            <FaSearch className="search-icon" />
//                             <input type="text" placeholder="Search" />
//                    </div>

//                     </li>
                    
//                 </ul>
                
              
//                 <div className="hamburger" onClick={handleNav}>
//                     {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navbar


// import React, { useState, useEffect } from 'react';
// import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
// import { BsSun, BsMoon } from 'react-icons/bs';
// import { Link } from 'react-router-dom';
// import '../index.css';
// import logo from "../assets/logo.png";
// import Arc from "../assets/tabler_window-maximize.png";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const [isDark, setIsDark] = useState(false);

//   const handleNav = () => setNav(!nav);
//   const handleThemeToggle = () => setIsDark(!isDark);

//   useEffect(() => {
//     const body = document.querySelector('body');
//     if (isDark) {
//       body.classList.add('dark');
//     } else {
//       body.classList.remove('dark');
//     }
//   }, [isDark]);

//   return (
//     <div name='top' className="navbar">
//       <div className="container-fluid">
//         <div className="logo">
//           <Link to='/'><img src={logo} alt="logo" /></Link>
//           <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
//             <li><Link to='/'>Docs</Link></li>
//             <li><Link to='/'>Blog</Link></li>
//             <li><Link to='/'>About Us</Link></li>
//           </ul>
//         </div>

//         <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
//           <li><Link to='/'>Support <img src={Arc} alt="arrow" /> </Link></li>
//           <li><Link to='/'>Portal <img src={Arc} alt="arrow" /></Link> </li>
//           <li><Link to='/'>Register <img src={Arc} alt="arrow" /></Link></li>
//           <li onClick={handleThemeToggle}>
//             {isDark ?
//               <BsMoon /> :
//               <BsSun />}
//           </li>
//           <li>
//             <div className="search">
//               <FaSearch className="search-icon" />
//               <input type="text" placeholder="Search" />
//             </div>
//           </li>
//         </ul>

//         <div className="hamburger" onClick={handleNav}>
//           {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { BsMoon, BsSun } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import '../index.css';
import logo from '../assets/logo.png';
import Arc from '../assets/tabler_window-maximize.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleNav = () => setNav(!nav);
  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
  };

  return (
    <div name="top" className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        
       
        <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
        <li>
              <Link to="/">Docs</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>

          <li>
            <Link to="/">Support</Link>
            <img src={Arc} alt="arrow" />
          </li>
          <li>
            <Link to="/">Portal</Link>
            <img src={Arc} alt="arrow" />
          </li>
          <li>
            <Link to="/">Register</Link>
            <img src={Arc} alt="arrow" />
          </li>
          <li className="theme-toggle" onClick={handleThemeToggle}>
            {darkMode ? <BsSun /> : <BsMoon />}
          </li>
          <li>
            <div className="search">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Search" />
            </div>
          </li>
        </ul>
        
        <div className="hamburger" onClick={handleNav}>
          {!nav ? <FaBars className="icon" /> : <FaTimes className="icon" />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;