import React from 'react'
import Arc from '../assets/tabler_window-maximize.png'





const Footer = () => {
  return (
    
           <footer>
            <div className="footer-inner">
                <div className="site-map">
                     <h3>Libraries & Plugins</h3>
                     <div className="links">
                            <a href="/#"> SDKs</a>
                            <a href="/#"> WHMCS Plugin</a>
                            <a href="/#"> WordPress Plugin</a>
                      </div>
                </div>

                <div className="site-map">
                     <h3>Community</h3>
                     <div className="links">
                        <a className='face' href="/#">  Facebook <img src={Arc} alt="arrow" /> </a>
                        <a className='face'  href="/#"> Developer Forums <img src={Arc} alt="arrow" /> </a>
                        <a className='face'  href="/#"> Twitter <img src={Arc} alt="arrow" /> </a>
                        </div>

                </div>

                <div className="site-map">
                     <h3>More</h3>
                     <div className="links">
                     <a href="/#"> SDKs</a>
                            <a href="/#"> WHMCS Plugin</a>
                            <a href="/#"> WordPress Plugin</a>
                        </div>
                </div>
             </div>

             <div className="copy">

                <p>Copyright © 2022 | <a href="/#">dady-maloh</a> </p>

             </div>

            </footer>




  )
}

export default Footer










