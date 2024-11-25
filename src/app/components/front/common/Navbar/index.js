import React, {useState} from 'react'

const Navbar = () => {
    const [activeMenu,setActiveMenu] = useState("portfolio");

  return (
      <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
          <div className="container">
              <a className="navbar-brand" href="#page-top">Start Bootstrap</a>
              <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
                      type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                      aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  Menu
                  <i className="fas fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ms-auto">
                      <li className="nav-item mx-0 mx-lg-1"><a onClick={() => setActiveMenu('portfolio')}
                                                               className={`nav-link py-3 px-0 px-lg-3 rounded ${(activeMenu === 'portfolio') ? 'active' : ''}`}
                                                               href="#portfolio">Portfolio</a></li>
                      <li className="nav-item mx-0 mx-lg-1"><a onClick={() => setActiveMenu('about')}
                                                               className={`nav-link py-3 px-0 px-lg-3 rounded ${(activeMenu === 'about') ? 'active' : ''}`}
                                                               href="#about">About</a></li>
                      <li className="nav-item mx-0 mx-lg-1"><a onClick={() => setActiveMenu('contact')}
                                                               className={`nav-link py-3 px-0 px-lg-3 rounded ${(activeMenu === 'contact') ? 'active' : ''}`}
                                                               href="#contact">Contact</a></li>
                  </ul>
              </div>
          </div>
      </nav>
  )
}

export default Navbar
